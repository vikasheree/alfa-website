function decodePath(value) {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

function normalizeImagePath(value) {
  return decodePath(String(value || ''))
    .split(/[?#]/, 1)[0]
    .replace(/\\/g, '/')
    .replace(/\.(png|jpe?g|jfif|webp)$/i, '.webp')
    .replace(/^\/+/, '')
}

export function findOptimizedImagePath(imageUrl, modulePaths, assetFolder) {
  if (!imageUrl || !Array.isArray(modulePaths)) return null

  const imagePath = normalizeImagePath(imageUrl)
  const folder = assetFolder.toLowerCase()
  const pathSegments = imagePath.split('/').filter(Boolean)
  const folderIndex = pathSegments.findIndex((segment) => segment.toLowerCase() === folder)
  const expectedPath = (folderIndex >= 0
    ? pathSegments.slice(folderIndex + 1)
    : pathSegments
  ).join('/').toLowerCase()
  if (!expectedPath) return null

  const candidates = modulePaths.map((modulePath) => {
    const normalizedModulePath = normalizeImagePath(modulePath)
    const segments = normalizedModulePath.split('/').filter(Boolean)
    const moduleFolderIndex = segments.findIndex((segment) => segment.toLowerCase() === folder)
    return {
      modulePath,
      relativePath: (moduleFolderIndex >= 0
        ? segments.slice(moduleFolderIndex + 1)
        : segments
      ).join('/').toLowerCase(),
    }
  })

  const exactMatch = candidates.find((candidate) => candidate.relativePath === expectedPath)
  if (exactMatch) return exactMatch.modulePath

  // Some API records contain only the source filename, without its Solar folder path.
  const filename = expectedPath.split('/').pop()
  const filenameMatches = candidates.filter((candidate) => candidate.relativePath.endsWith(`/${filename}`)
    || candidate.relativePath === filename)
  return filenameMatches.length === 1 ? filenameMatches[0].modulePath : null
}
