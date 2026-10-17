import assert from 'node:assert/strict'
import { readdir } from 'node:fs/promises'
import {
  addEnquiryItem,
  ENQUIRY_STORAGE_KEY,
  getEnquiryItemCount,
  loadEnquiryItems,
  removeEnquiryItem,
  saveEnquiryItems,
  updateEnquiryQuantity,
} from '../src/context/enquiryCartState.js'
import { findOptimizedImagePath } from '../src/utils/optimizedImageLookup.js'

const storageValues = new Map()
const storage = {
  getItem: (key) => storageValues.get(key) ?? null,
  setItem: (key, value) => storageValues.set(key, value),
  removeItem: (key) => storageValues.delete(key),
}

const controller = { id: 11, name: 'Controller' }
const sensor = { id: 22, name: 'Sensor' }
let items = loadEnquiryItems(storage)
items = addEnquiryItem(items, controller)
items = addEnquiryItem(items, sensor)
items = addEnquiryItem(items, controller)
assert.equal(items[0].quantity, 2, 'adding an existing product increments it')
items = updateEnquiryQuantity(items, 'id-11', 3)
assert.equal(getEnquiryItemCount(items), 4, 'increment updates quantity and total')
items = updateEnquiryQuantity(items, 'id-11', 2)
assert.equal(getEnquiryItemCount(items), 3, 'decrement updates quantity and total')
assert.equal(updateEnquiryQuantity(items, 'id-11', 0), items, 'quantity cannot go below one')

saveEnquiryItems(items, storage)
items = loadEnquiryItems(storage)
assert.equal(items.length, 2, 'items survive a simulated reload')
assert.equal(items[0].quantity, 2, 'quantity survives a simulated reload')
items = removeEnquiryItem(items, 'id-22')
saveEnquiryItems(items, storage)
assert.equal(items.length, 1, 'remove keeps the other product')
assert.equal(loadEnquiryItems(storage).length, 1, 'remove persists across reload')
assert.equal(JSON.parse(storage.getItem(ENQUIRY_STORAGE_KEY)).length, 1)

const solarModules = (await readdir(new URL('../src/assets-optimized/SOLAR/', import.meta.url), { recursive: true }))
  .filter((path) => path.endsWith('.webp'))
  .map((path) => `../assets-optimized/SOLAR/${path.replace(/\\/g, '/')}`)
for (const optimizedPath of solarModules.filter((path) => path.includes('/C1 ') || path.includes('/C2 '))) {
  const originalPath = optimizedPath
    .replace('../assets-optimized/SOLAR/', '/uploads/SOLAR/')
    .replace(/\.webp$/i, '.jpg')
  assert.equal(
    findOptimizedImagePath(originalPath, solarModules, 'SOLAR'),
    optimizedPath,
    `Solar product path resolves: ${originalPath}`
  )
}
const firstSolarImage = solarModules.find((path) => path.endsWith('/50W Portable LED Solar Lamp 1.webp'))
const secondSolarImage = solarModules.find((path) => path.endsWith('/30W Solar Flood Light 1.webp'))
assert.ok(firstSolarImage, 'optimized Solar 50W product image exists')
assert.ok(secondSolarImage, 'optimized Solar 30W product image exists')
assert.equal(
  findOptimizedImagePath('/uploads/SOLAR/C1 -- Led Flood Light/50W Portable LED Solar Lamp/50W Portable LED Solar Lamp 1.png', solarModules, 'SOLAR'),
  firstSolarImage,
  'full image paths map from original extension to optimized WebP'
)
assert.equal(
  findOptimizedImagePath('50W%20Portable%20LED%20Solar%20Lamp%201.jpg?size=small', solarModules, 'SOLAR'),
  firstSolarImage,
  'filename-only URLs map to the unique optimized WebP'
)
assert.equal(
  findOptimizedImagePath('C2 -- LED Solar Lamp\\30W Solar Flood Light\\30W Solar Flood Light 1.png', solarModules, 'SOLAR'),
  secondSolarImage,
  'Windows path separators map to the optimized WebP'
)

console.log('Cart state, quantity limits, removal, persistence, and Solar WebP lookup checks passed.')
