import { MdOutlineAlternateEmail, MdOutlineChat, MdOutlinePhone } from 'react-icons/md'
import { MERCHANTS_APPLY_PATH } from './merchantsContent.js'

// Every empty value ('') below is a placeholder. The shop owner fills them in later (from the admin side once it
// exists) and the page shows them automatically. Empty values show "To be added". Never type made-up details here.

export const CONTACT_HERO = {
  title: 'Get in touch with the',
  accent: 'Atelier',
  subtitle: 'Questions about an order, sizing or selling with us? Send an inquiry and we will get back to you.',
}

export const CONTACT_AT_A_GLANCE = {
  title: 'At a glance',
  rows: [
    { label: 'Support hours', value: '' },
    { label: 'Average reply time', value: '' },
  ],
}

export const INQUIRY_TYPES = [
  { id: 'order', label: 'Order & delivery' },
  { id: 'sizing', label: 'Sizing & fitting' },
  { id: 'merchant', label: 'Selling with us' },
  { id: 'general', label: 'General question' },
]

export const CONTACT_METHODS = [
  { id: 'email', label: 'Email' },
  { id: 'phone', label: 'Phone call' },
  { id: 'whatsapp', label: 'WhatsApp' },
]

export const CALLBACK_WINDOWS = [
  { id: 'morning', label: 'Morning' },
  { id: 'afternoon', label: 'Afternoon' },
  { id: 'evening', label: 'Evening' },
]

export const CONTACT_FORM = {
  eyebrow: 'Send a message',
  title: 'Send an inquiry',
  notOpenMessage: 'Sending inquiries is not available yet, so your message was not sent. Please try again soon.',
}

// href turns the value into a link. The value stays a placeholder until it is filled in.
export const CONTACT_CHANNELS = {
  eyebrow: 'Reach us directly',
  title: 'Contact channels',
  items: [
    { id: 'whatsapp', icon: MdOutlineChat, label: 'WhatsApp', note: 'Message us any time', value: '', href: (v) => `https://wa.me/${v.replace(/\D/g, '')}` },
    { id: 'phone', icon: MdOutlinePhone, label: 'Phone', note: 'Call us during support hours', value: '', href: (v) => `tel:${v.replace(/[^\d+]/g, '')}` },
    { id: 'email', icon: MdOutlineAlternateEmail, label: 'Email', note: 'Write to us and we will reply', value: '', href: (v) => `mailto:${v}` },
  ],
}

export const CONTACT_COVERAGE = {
  eyebrow: 'Delivery & coverage',
  title: 'Where we deliver',
  items: [
    { title: 'Delivery areas', text: '', meta: '' },
    { title: 'Fitting appointments', text: '', meta: '' },
  ],
}

export const CONTACT_FAQ = {
  eyebrow: 'Good to know',
  title: 'Frequently asked questions',
  items: [
    { topic: 'Orders', question: 'How can I track my order?', answer: '' },
    { topic: 'Changes', question: 'How do I change or cancel an order?', answer: '' },
    { topic: 'Payments', question: 'Which payment methods are accepted?', answer: '' },
  ],
}

export const CONTACT_BANNER = {
  eyebrow: 'Sell with us',
  title: 'Do you make or sell clothing or accessories?',
  text: 'Tell us about your business and apply to become a OneCart merchant.',
  cta: 'Apply as a merchant',
  to: MERCHANTS_APPLY_PATH,
}
