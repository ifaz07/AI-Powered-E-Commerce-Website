import { useState } from 'react'
import { MERCHANT_APPLICATION } from '../config/merchantsContent.js'

const EMPTY_FORM = {
  business: '',
  name: '',
  email: '',
  phone: '',
  categories: [],
  otherItems: '',
  type: '',
  branches: '',
  city: '',
  address: '',
  years: '',
  licence: '',
  link: '',
  about: '',
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE = /^\+?\d{7,15}$/
const HANDLE = /^@[\w.]{2,30}$/
const LICENCE = /^[A-Za-z0-9\-/ ]{3,40}$/

const isWholeNumber = (value, min, max) => /^\d+$/.test(value) && Number(value) >= min && Number(value) <= max

const isLink = (value) => {
  if (HANDLE.test(value)) return true
  try {
    return new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`).hostname.includes('.')
  } catch {
    return false
  }
}

// Checks only the format of what was typed. Real verification (licence, phone call, visit) needs the backend and our team.
function validate(form) {
  const errors = {}
  const text = (key) => form[key].trim()

  if (text('business').length < 2) errors.business = 'Enter your business name.'
  if (text('name').length < 2) errors.name = 'Enter your full name.'
  if (!EMAIL.test(text('email'))) errors.email = 'Enter a valid email address.'
  if (!PHONE.test(text('phone').replace(/[\s\-()]/g, ''))) errors.phone = 'Enter a valid phone number, 7 to 15 digits.'
  if (form.categories.length === 0) errors.categories = 'Choose at least one thing you sell.'
  if (form.categories.includes('other') && text('otherItems').length < 2) errors.otherItems = 'Tell us which other items you sell.'

  if (text('branches') && !isWholeNumber(text('branches'), 1, 1000)) errors.branches = 'Enter a whole number from 1 to 1000.'
  if (text('years') && !isWholeNumber(text('years'), 0, 100)) errors.years = 'Enter a whole number from 0 to 100.'
  if (text('licence') && !LICENCE.test(text('licence'))) errors.licence = 'Use letters, numbers, spaces, - or / only (3 to 40 characters).'
  if (text('link') && !isLink(text('link'))) errors.link = 'Enter a website address or an @handle.'

  return errors
}

export function useMerchantApplication() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const setValue = (name, value) => {
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const field = (name) => ({
    name,
    value: form[name],
    error: errors[name],
    onChange: (e) => setValue(name, e.target.value),
  })

  const toggleCategory = (id) =>
    setValue('categories', form.categories.includes(id) ? form.categories.filter((c) => c !== id) : [...form.categories, id])

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setMessage('')
      return
    }
    setMessage(MERCHANT_APPLICATION.notOpenMessage)
    setForm(EMPTY_FORM)
  }

  return { form, errors, message, field, toggleCategory, handleSubmit }
}
