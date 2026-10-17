import { findOptimizedImagePath } from './optimizedImageLookup'

const imageModules = import.meta.glob(
  '../assets-optimized/INDUSTRIAL/**/*.webp',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)

const solarImageModules = import.meta.glob(
  '../assets-optimized/SOLAR/**/*.webp',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)

export function getProductImage(imagePath) {
  if (!imagePath) return ''

  // Normalize the path received from the database.
  const normalizedPath = imagePath.replace(/\\/g, '/')

  // Extract the relative path and change the extension to WebP.
  const optimizedPath = normalizedPath.replace(
    /\.(png|jpe?g|jfif|webp)$/i,
    '.webp'
  )

  const key = `../assets-optimized/INDUSTRIAL/${optimizedPath}`

  return imageModules[key] || ''
}

export function getSolarProductImage(imagePath) {
  const modulePath = findOptimizedImagePath(
    imagePath,
    Object.keys(solarImageModules),
    'SOLAR'
  )
  return modulePath ? solarImageModules[modulePath] : ''
}
