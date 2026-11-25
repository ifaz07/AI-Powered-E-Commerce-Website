import { MdGroup, MdLocalShipping, MdPayments, MdPendingActions, MdStorefront } from 'react-icons/md'

export const ADMIN_NAV = [
  { id: 'overview', label: 'Overview', to: '/' },
  { id: 'merchants', label: 'Merchants' },
  { id: 'applications', label: 'Applications', badge: 'pendingApplications' },
  { id: 'orders', label: 'Orders & Dispatches' },
  { id: 'customers', label: 'Customers' },
  { id: 'settings', label: 'Settings' },
]

export const TIME_RANGES = [
  { id: 'today', label: 'Today' },
  { id: 'week', label: 'This week' },
  { id: 'month', label: 'Month to date' },
]

export const OVERVIEW_HEADER = {
  title: 'Merchant & Operations Overview',
  text: 'Oversight of marketplace revenue, merchant onboarding and active dispatches.',
  invite: 'Invite merchant',
  inviteHint: 'Merchant invitations are not available yet.',
}

export const SEARCH = {
  placeholder: 'Search merchants, orders...',
  hint: 'Search is not available yet.',
}

export const MERCHANT_STATUSES = {
  approved: { label: 'Approved', tone: 'accent' },
  pending: { label: 'Pending', tone: 'terracotta' },
  info: { label: 'Info needed', tone: 'terracottaStrong' },
  suspended: { label: 'Suspended', tone: 'danger' },
}

export const ORDER_STATUSES = {
  confirmed: { label: 'Confirmed', tone: 'info' },
  processing: { label: 'Processing', tone: 'terracotta' },
  transit: { label: 'In transit', tone: 'accent' },
  delivered: { label: 'Delivered', tone: 'neutral' },
}

export const DIRECTORY = {
  title: 'Merchant directory',
  text: 'Manage active storefronts, catalogues and regional merchants.',
  allCategories: 'All categories',
  allStatuses: 'All statuses',
  empty: { title: 'No merchants yet', text: 'Approved merchants and their storefronts will be listed here.' },
  pageSize: 6,
  columns: ['Merchant', 'Category', 'Products', '30-day revenue', 'Storefront', 'Status', 'Action'],
}

export const INSPECTOR = {
  eyebrow: 'Pending application',
  owner: 'Owner / representative',
  phone: 'Direct phone',
  email: 'Email address',
  hub: 'Business address',
  checklistTitle: 'Document verification checklist',
  noteLabel: 'Internal review note',
  notePlaceholder: 'Add what you checked before deciding...',
  approve: 'Approve & publish storefront',
  requestInfo: 'Request info',
  reject: 'Reject',
  actionsHint: 'Review decisions are not available until the review service is connected.',
  empty: { title: 'No application to review', text: 'Pending merchant applications will open here.' },
}

export const RECENT_ORDERS = {
  title: 'Recent orders & transactions',
  text: 'Latest purchases across active storefronts.',
  empty: { title: 'No orders yet', text: 'Orders will appear here as customers check out.' },
}

export const FOOTER_TEXT = 'OneCart Operations Network'

export const LOGIN = {
  title: 'Admin sign in',
  text: 'Sign in with your OneCart account to open the console.',
}

export const KPI_CARDS = [
  { id: 'revenue', label: 'Total revenue', icon: MdPayments },
  { id: 'orders', label: 'Active orders', icon: MdLocalShipping },
  { id: 'merchants', label: 'Total merchants', icon: MdStorefront },
  { id: 'customers', label: 'Total customers', icon: MdGroup },
  { id: 'applications', label: 'Pending applications', icon: MdPendingActions, alert: true },
]
