// The one place that decides how money is written. Change the currency here and every price follows.
const formatter = new Intl.NumberFormat('en-BD', { style: 'currency', currency: 'BDT', currencyDisplay: 'narrowSymbol', maximumFractionDigits: 0 })

export const formatPrice = (amount) => formatter.format(amount)
