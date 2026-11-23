import { COLLECTION_CATEGORIES } from './categories.js'

// Plain wording only. No payout shares, review times, locations or merchant names we cannot back up yet.

export const MERCHANTS_APPLY_PATH = '/merchants#apply'

export const MERCHANTS_HERO = {
  title: 'Partner with OneCart',
  subtitle:
    'Do you make or sell clothing and accessories? Tell us about your business and how you would like to work with OneCart.',
}

export const MERCHANTS_ASIDE = {
  title: 'What we look for',
  items: [
    'Clothing and accessories for men, women and kids',
    'Clear photos and honest descriptions',
    'Pieces made to last, in calm, classic styles',
  ],
}

export const MERCHANTS_DIRECTORY = {
  eyebrow: 'Merchant directory',
  title: 'Our merchants',
  emptyTitle: 'No merchants listed yet',
  emptyText: 'Approved merchants will appear here.',
}

export const MERCHANTS_STEPS = {
  eyebrow: 'How applying works',
  title: 'From application to listing.',
  items: [
    { title: 'Send your details', text: 'Fill in the short form with your business and what you sell.' },
    { title: 'We get in touch', text: 'We read every application and reply to the email you give us.' },
    { title: 'Start listing', text: 'Listing tools for merchants are coming soon.' },
  ],
}

export const MERCHANT_APPLICATION = {
  eyebrow: 'Become a merchant',
  title: 'Do you make or sell clothing or accessories?',
  text: 'Share a few details about your business. The fields without "(optional)" are required. This form is not connected yet, so nothing is saved for now.',
  optionalTitle: 'More about your business',
  optionalText: 'All optional. The more you tell us, the easier it is for us to get to know your business.',
  notOpenMessage: 'Merchant applications are not open yet and your details were not saved. Please check back soon.',
}

export const MERCHANT_CATEGORIES = [
  ...COLLECTION_CATEGORIES,
  { id: 'jewellery', label: 'Jewellery' },
  { id: 'other', label: 'Other' },
]

export const MERCHANT_TYPES = [
  { id: 'maker', label: 'Individual maker or designer' },
  { id: 'shop', label: 'Single shop' },
  { id: 'chain', label: 'Chain with several branches' },
  { id: 'online', label: 'Online seller' },
]
