import { MEASUREMENT_GROUPS, PROFILE_FORMS } from '../config/profileContent.js'
import { isMeasurement } from '../config/validation.js'
import { useFormState } from './useFormState.js'

const FIELDS = MEASUREMENT_GROUPS.flatMap(({ fields }) => fields)

const initial = { ...Object.fromEntries(FIELDS.map(({ name }) => [name, ''])), notes: '' }

function validate(form) {
  const errors = {}

  FIELDS.forEach(({ name }) => {
    if (form[name].trim() && !isMeasurement(form[name])) errors[name] = 'Use inches, like 15.5.'
  })

  return errors
}

export function useMeasurementsForm() {
  return useFormState({ initial, validate, doneMessage: PROFILE_FORMS.measurementsNotSaved })
}
