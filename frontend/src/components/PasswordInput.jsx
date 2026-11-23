import { useState } from 'react'
import { MdLockOutline, MdVisibility, MdVisibilityOff } from 'react-icons/md'
import TextInput from './TextInput.jsx'

// A password box with a lock icon and a show/hide button. Takes the same props as TextInput.
function PasswordInput(props) {
  const [visible, setVisible] = useState(false)

  return (
    <TextInput
      icon={MdLockOutline}
      type={visible ? 'text' : 'password'}
      trailing={
        <button
          type='button'
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Hide password' : 'Show password'}
          className='text-[20px] text-outline hover:text-ink cursor-pointer'
        >
          {visible ? <MdVisibilityOff /> : <MdVisibility />}
        </button>
      }
      {...props}
    />
  )
}

export default PasswordInput
