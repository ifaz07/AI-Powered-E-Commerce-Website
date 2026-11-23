import { MdFavoriteBorder, MdOutlineManageAccounts, MdOutlineShoppingBag, MdOutlineStraighten } from 'react-icons/md'
import { collectionsPath } from './categories.js'

// Plain wording only. Orders and saved items have no backend yet, so their tabs show empty states.

export const PROFILE_TABS = [
  { id: 'account', label: 'Profile & security', icon: MdOutlineManageAccounts },
  { id: 'orders', label: 'Orders', icon: MdOutlineShoppingBag },
  { id: 'saved', label: 'Saved items', icon: MdFavoriteBorder },
  { id: 'measurements', label: 'Measurement card', icon: MdOutlineStraighten },
]

export const PROFILE_EMPTY = {
  orders: {
    eyebrow: 'Your orders',
    title: 'Order history',
    emptyTitle: 'No orders yet',
    emptyText: 'Orders you place will appear here.',
    action: { label: 'Browse collections', to: collectionsPath() },
  },
  saved: {
    eyebrow: 'Your wishlist',
    title: 'Saved items',
    emptyTitle: 'Nothing saved yet',
    emptyText: 'Pieces you save will appear here.',
    action: { label: 'Browse collections', to: collectionsPath() },
  },
}

export const SIGN_IN_METHODS = {
  local: { label: 'email and password', badge: 'Email account' },
  google: { label: 'Google', badge: 'Google account', note: 'You sign in with Google, so there is no password to manage here.' },
}

export const PROFILE_STATS = [
  { id: 'orders', label: 'Orders', caption: 'Placed', tone: 'text-ink' },
  { id: 'saved', label: 'Saved', caption: 'Items on your list', tone: 'text-accent' },
  { id: 'measured', label: 'Fit card', caption: 'Measurements saved', tone: 'text-terracotta' },
]

export const PROFILE_FORMS = {
  detailsNotSaved: 'Saving profile changes is not available yet, so nothing was changed.',
  measurementsNotSaved: 'Saving measurements is not available yet, so nothing was saved.',
  passwordNotSaved: 'Changing your password is not available yet, so your password was not changed.',
}

// Your own measurements in inches, each with a short note on how to take it. Every box starts empty: we never show sample sizes.
export const MEASUREMENT_TIP = 'Measure over light clothing, with a soft tape held snug but not tight. A second person makes it easier and more accurate.'
export const MEASUREMENT_GROUPS = [
  {
    title: 'Upper body',
    fields: [
      { name: 'collar', label: 'Collar neck', hint: 'Around the base of your neck, where a shirt collar sits.' },
      { name: 'chest', label: 'Chest (full)', hint: 'Around the fullest part of your chest, just under the arms. Keep the tape level.' },
      { name: 'shoulder', label: 'Shoulder width', hint: 'Straight across your back, from the edge of one shoulder to the edge of the other.' },
      { name: 'sleeve', label: 'Sleeve length', hint: 'From the edge of your shoulder, over a slightly bent elbow, down to your wrist bone.' },
    ],
  },
  {
    title: 'Trousers',
    fields: [
      { name: 'waist', label: 'Waist', hint: 'Around your natural waist, where you normally wear your trousers.' },
      { name: 'inseam', label: 'Inseam', hint: 'From the crotch seam down the inside of your leg to the ankle.' },
      { name: 'thigh', label: 'Thigh', hint: 'Around the fullest part of your upper thigh.' },
      { name: 'legOpening', label: 'Leg opening', hint: 'Around the bottom of the trouser leg. Measure a pair that fits you well.' },
    ],
  },
]
