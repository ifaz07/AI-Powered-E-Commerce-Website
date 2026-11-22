import heroModel from '../assets/home/hero-model.webp'
import spotlightCoat from '../assets/home/spotlight-coat.webp'
import productCrossbody from '../assets/home/product-crossbody.webp'
import productSneakers from '../assets/home/product-sneakers.webp'

// Photos and plain category labels only. Do not add prices, product names, ratings or delivery claims here:
// real product data comes from the database once the product API exists. Photos live in src/assets/home.

export const HERO = {
  image: heroModel,
  alt: 'Man in a vintage denim jacket, white t-shirt and black trousers leaning on a plaster wall',
  label: 'Menswear',
  title: 'Shop menswear',
}

export const SPOTLIGHT = {
  image: spotlightCoat,
  alt: 'Woman in a camel wool coat and wide linen trousers holding a tan leather handbag',
  eyebrow: 'Womenswear',
  title: 'Tailored for every day',
  text: 'Camel coats and easy linen trousers in calm, everyday tones.',
  cta: 'Shop womenswear',
}

export const CATEGORIES = [
  {
    id: 'accessories',
    label: 'Accessories',
    image: productCrossbody,
    alt: 'Tan leather crossbody bag and card wallet on a stone block',
  },
  {
    id: 'footwear',
    label: 'Footwear',
    image: productSneakers,
    alt: 'Grey suede low-top sneakers beside a watch, a card holder and a folded wool scarf',
  },
]
