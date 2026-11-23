import { PROFILE_FORMS } from '../config/profileContent.js'
import { isPhone } from '../config/validation.js'
import { useFormState } from './useFormState.js'

const POSTAL_CODE = /^[A-Za-z0-9 -]{3,10}$/

function validate(form) {
  const errors = {}
  const text = (key) => form[key].trim()

  if (text('name').length < 2) errors.name = 'Enter your full name.'
  if (text('phone') && !isPhone(form.phone)) errors.phone = 'Enter a valid phone number, 7 to 15 digits.'
  if (text('postalCode') && !POSTAL_CODE.test(text('postalCode'))) errors.postalCode = 'Enter a valid postal code.'

  return errors
}

export function useProfileForm(user) {
  return useFormState({
    initial: { name: user.name, phone: '', address: '', city: '', postalCode: '' },
    validate,
    doneMessage: PROFILE_FORMS.detailsNotSaved,
  })
}
