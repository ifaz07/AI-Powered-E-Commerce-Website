import heroModel from '../assets/home/hero-model.webp'
import spotlightCoat from '../assets/home/spotlight-coat.webp'
import productCrossbody from '../assets/home/product-crossbody.webp'
import productSneakers from '../assets/home/product-sneakers.webp'

// Plain brand copy only. No delivery times, quality checks, locations or other claims we cannot back up yet.

export const ABOUT_HERO = {
  eyebrow: 'About OneCart',
  title: 'Clothing worth keeping, chosen with care.',
  text: 'OneCart is an online shop for clothing and accessories for men, women and kids. We keep the range focused and the presentation honest, so finding something you will actually wear is simple.',
  gallery: [
    { image: heroModel, alt: 'Man in a vintage denim jacket and white t-shirt leaning on a plaster wall', label: 'Menswear' },
    { image: spotlightCoat, alt: 'Woman in a camel wool coat and wide linen trousers holding a tan leather handbag', label: 'Womenswear' },
    { image: productCrossbody, alt: 'Tan leather crossbody bag and card wallet on a stone block', label: 'Accessories' },
  ],
}

export const PRINCIPLES = {
  eyebrow: 'What we stand for',
  title: 'A few simple principles.',
  text: 'The ideas behind every page of the shop.',
  items: [
    {
      title: 'Curated, not crowded',
      text: 'A focused range of clothing and accessories, so you spend less time scrolling and more time choosing.',
    },
    {
      title: 'Honest presentation',
      text: 'Real photos and plain descriptions, so you know what you are looking at before you decide.',
    },
    {
      title: 'Made to be worn',
      text: 'Timeless shapes and calm, everyday tones that work across seasons and wardrobes.',
    },
  ],
}

export const STEPS = {
  eyebrow: 'How it works',
  title: 'From browsing to your wardrobe.',
  items: [
    { title: 'Browse', text: 'Explore the collections by category, or search for a piece by name.' },
    { title: 'Create an account', text: 'Sign up with your email or with Google to keep your details in one place.' },
    { title: 'Order', text: 'Choose your pieces and check out. The cart and ordering are coming soon.' },
  ],
}

export const STORY = {
  eyebrow: 'Our approach',
  title: 'Classic pieces in calm, everyday tones.',
  text: 'We favour well-made basics and timeless outerwear over fast trends: camel coats, easy linen trousers, denim jackets and leather accessories that go with everything.',
  points: ['Menswear', 'Womenswear', 'Kidswear', 'Accessories and footwear'],
  image: productSneakers,
  alt: 'Grey suede low-top sneakers beside a watch, a card holder and a folded wool scarf',
}

export const ABOUT_CTA = {
  title: 'Find something you will love.',
  text: 'Browse the collections, or create an account to get started.',
}
