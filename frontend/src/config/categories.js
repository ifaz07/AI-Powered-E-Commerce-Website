// The shopping categories. Used by the Collections filter chips and by every link that opens a category.
// Labels only: products come from the database once the product API exists.
export const COLLECTION_CATEGORIES = [
  { id: 'men', label: 'Men' },
  { id: 'women', label: 'Women' },
  { id: 'kids', label: 'Kids' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'footwear', label: 'Footwear' },
]

// Address of the Collections page for one category (or for all when no id is given).
export const collectionsPath = (categoryId) => (categoryId ? `/collections?category=${categoryId}` : '/collections')
