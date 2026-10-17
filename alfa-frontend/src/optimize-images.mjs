import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();

const INPUT_DIR = path.join(ROOT, "src", "assets");
const OUTPUT_DIR = path.join(ROOT, "image-optimization-output");

// Image optimization settings
const QUALITY = 78;
const ALPHA_QUALITY = 80;
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1920;

const SUPPORTED_FORMATS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".jfif",
  ".gif",
  ".bmp",
  ".tif",
  ".tiff",
  ".avif",
  ".webp",
]);

async function findImages(directory) {
  const results = [];
  const entries = await fs.readdir(directory, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      results.push(...await findImages(fullPath));
    } else if (
      entry.isFile() &&
      SUPPORTED_FORMATS.has(path.extname(entry.name).toLowerCase())
    ) {
      results.push(fullPath);
    }
  }

  return results;
}

async function main() {
  console.log("\n========== ALFA IMAGE OPTIMIZER ==========\n");

  const images = await findImages(INPUT_DIR);

  if (images.length === 0) {
    console.log("No supported images found.");
    return;
  }

  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  let originalBytes = 0;
  let optimizedBytes = 0;
  let successful = 0;
  let failed = 0;

  console.log(`Images found: ${images.length}`);
  console.log(`Quality: ${QUALITY}%`);
  console.log(`Maximum dimensions: ${MAX_WIDTH} x ${MAX_HEIGHT}\n`);

  for (const imagePath of images) {
    const relativePath = path.relative(INPUT_DIR, imagePath);
    const relativeDirectory = path.dirname(relativePath);
    const extension = path.extname(relativePath);
    const filename = path.basename(relativePath, extension);

    let outputPath = path.join(
      OUTPUT_DIR,
      relativeDirectory,
      `${filename}.webp`
    );

    // Avoid overwriting another image with the same filename.
    try {
      await fs.access(outputPath);

      outputPath = path.join(
        OUTPUT_DIR,
        relativeDirectory,
        `${filename}-from-${extension.slice(1).toLowerCase()}.webp`
      );
    } catch {
      // The output filename does not exist yet.
    }

    try {
      const originalStats = await fs.stat(imagePath);

      // Preserve existing WebP animation rather than silently
      // converting it to a single frame.
      const metadata = await sharp(imagePath, {
        animated: true,
      }).metadata();

      if (metadata.pages > 1) {
        console.log(`SKIPPED animated image: ${relativePath}`);
        continue;
      }

      await fs.mkdir(path.dirname(outputPath), {
        recursive: true,
      });

      await sharp(imagePath)
        .rotate()
        .resize({
          width: MAX_WIDTH,
          height: MAX_HEIGHT,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({
          quality: QUALITY,
          alphaQuality: ALPHA_QUALITY,
          effort: 5,
        })
        .toFile(outputPath);

      const outputStats = await fs.stat(outputPath);

      originalBytes += originalStats.size;
      optimizedBytes += outputStats.size;
      successful++;

      const savedPercent =
        originalStats.size > 0
          ? (
              (1 - outputStats.size / originalStats.size) * 100
            ).toFixed(1)
          : "0.0";

      console.log(
        `${relativePath}\n` +
        `  Original: ${(originalStats.size / 1024).toFixed(1)} KB\n` +
        `  WebP:     ${(outputStats.size / 1024).toFixed(1)} KB\n` +
        `  Change:   ${savedPercent}%\n`
      );
    } catch (error) {
      failed++;
      console.error(`FAILED: ${relativePath}`);
      console.error(`Reason: ${error.message}\n`);
    }
  }

  console.log("\n========== OPTIMIZATION SUMMARY ==========\n");

  console.log(`Successfully optimized: ${successful}`);
  console.log(`Failed: ${failed}`);

  console.log(
    `Original size: ${(originalBytes / 1024 / 1024).toFixed(2)} MB`
  );

  console.log(
    `Optimized size: ${(optimizedBytes / 1024 / 1024).toFixed(2)} MB`
  );

  const savedBytes = originalBytes - optimizedBytes;

  console.log(
    `Space saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB`
  );

  if (originalBytes > 0) {
    console.log(
      `Overall reduction: ${(
        (1 - optimizedBytes / originalBytes) * 100
      ).toFixed(1)}%`
    );
  }

  console.log(`\nOutput folder: ${OUTPUT_DIR}`);
  console.log("\nOriginal images have not been modified.");
}

main().catch((error) => {
  console.error("Image optimization failed:", error);
  process.exitCode = 1;
});
