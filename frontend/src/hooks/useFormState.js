import { useState } from 'react'

// Shared state for forms that are checked in the browser. validate(form) returns { fieldName: 'message' } and an
// empty object means the form is valid. When it is, doneMessage is shown (the backend is not connected for these forms yet).
export function useFormState({ initial, validate, doneMessage, resetOnDone = false }) {
  const [form, setForm] = useState(initial)
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

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setMessage('')
      return
    }
    setMessage(doneMessage)
    if (resetOnDone) setForm(initial)
  }

  return { form, errors, message, field, setValue, handleSubmit }
}
