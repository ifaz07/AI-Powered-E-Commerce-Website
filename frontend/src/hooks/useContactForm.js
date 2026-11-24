import { CONTACT_FORM } from '../config/contactContent.js'
import { isEmail, isPhone } from '../config/validation.js'
import { useFormState } from './useFormState.js'

const MIN_MESSAGE_LENGTH = 10

function validate(form) {
  const errors = {}

  if (form.name.trim().length < 2) errors.name = 'Enter your full name.'
  if (!isEmail(form.email)) errors.email = 'Enter a valid email address.'
  if (!isPhone(form.phone)) errors.phone = 'Enter a valid phone number, 7 to 15 digits.'
  if (form.message.trim().length < MIN_MESSAGE_LENGTH) errors.message = `Write at least ${MIN_MESSAGE_LENGTH} characters so we can help.`

  return errors
}

// A logged-in visitor gets their name and email filled in. The backend has no inquiry endpoint yet.
export function useContactForm(user) {
  return useFormState({
    initial: { type: 'order', name: user?.name ?? '', email: user?.email ?? '', phone: '', method: '', reference: '', callback: '', message: '' },
    validate,
    doneMessage: CONTACT_FORM.notOpenMessage,
  })
}
