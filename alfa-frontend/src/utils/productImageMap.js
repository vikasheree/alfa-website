const imageModules = import.meta.glob(
  '../assets/INDUSTRIAL/**/*.{webp,png,jpg,jpeg}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)

export function getProductImage(imagePath) {
  const key = `../assets/INDUSTRIAL/${imagePath}`

  return imageModules[key] || ''
}