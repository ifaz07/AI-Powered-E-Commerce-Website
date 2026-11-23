import { PROFILE_FORMS } from '../config/profileContent.js'
import { MIN_PASSWORD_LENGTH } from '../config/validation.js'
import { useFormState } from './useFormState.js'

function validate({ current, next, confirm }) {
  const errors = {}

  if (!current) errors.current = 'Enter your current password.'
  if (next.length < MIN_PASSWORD_LENGTH) errors.next = `Use at least ${MIN_PASSWORD_LENGTH} characters.`
  else if (next === current) errors.next = 'Choose a password that is different from your current one.'
  if (confirm !== next) errors.confirm = 'The two passwords do not match.'

  return errors
}

export function usePasswordForm() {
  return useFormState({
    initial: { current: '', next: '', confirm: '' },
    validate,
    doneMessage: PROFILE_FORMS.passwordNotSaved,
    resetOnDone: true,
  })
}
