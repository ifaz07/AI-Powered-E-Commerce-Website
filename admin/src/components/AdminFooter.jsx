import { FOOTER_TEXT } from '../config/adminContent.js'
import Container from './Container.jsx'

function AdminFooter() {
  return (
    <footer className='mt-auto border-t border-line py-6 bg-surface/60'>
      <Container className='text-sm text-outline'>
        <span className='font-display text-lg font-semibold text-ink'>{FOOTER_TEXT}</span>
      </Container>
    </footer>
  )
}

export default AdminFooter
