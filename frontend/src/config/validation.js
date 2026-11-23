// Format checks shared by every form. They only check how something is written. Real checks happen on the server.
export const MIN_PASSWORD_LENGTH = 8

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE = /^\+?\d{7,15}$/

const MEASUREMENT = /^\d{1,3}(\.\d)?$/

export const isEmail = (value) => EMAIL.test(value.trim())

// Spaces, dashes and brackets are allowed while typing: +880 1712-345678
export const isPhone = (value) => PHONE.test(value.trim().replace(/[\s\-()]/g, ''))

// Inches with at most one decimal, like 15.5
export const isMeasurement = (value) => MEASUREMENT.test(value.trim()) && Number(value) >= 1 && Number(value) <= 200
