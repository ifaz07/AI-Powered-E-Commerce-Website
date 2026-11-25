const EMPTY = {
  stats: {
    revenue: 0,
    activeOrders: 0,
    customers: 0,
    pendingApplications: 0,
    merchants: { total: 0, approved: 0, pending: 0, suspended: 0 },
  },
  merchants: [],
  applications: [],
  orders: [],
}

// Everything the overview shows, for the chosen time range ('today', 'week' or 'month').
// The backend has no merchant, order or customer endpoints yet, so these are real zeros and empty lists.
// When the endpoints exist, only this hook changes.
// Shapes: merchant { id, name, location, category, products, revenue, live, status, applicationId? }
// application { id, name, submitted, owner, phone, email, address, documents: [{ label, state }] }
// order { id, status, product, customer, area, total, payment }
export function useOverviewData(range) {
  return { ...EMPTY, range }
}
