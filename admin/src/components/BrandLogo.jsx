import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'

// The OneCart mark and name. The mark has a white background, so "multiply" makes it vanish on the page color.
function BrandLogo() {
  return (
    <Link to='/' className='flex items-center gap-2.5 text-ink'>
      <img className='h-10 w-10 mix-blend-multiply' src={Logo} alt='' />
      <span className='font-display text-3xl font-semibold tracking-wide'>OneCart</span>
    </Link>
  )
}

export default BrandLogo
