import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'

// The one and only logo: the gold "C" mark, the name and the tagline. Every page uses this, so the brand
// always looks the same. The mark has a white background, so "multiply" makes the white disappear on any light page.
function BrandLogo({ onClick }) {
  return (
    <Link to='/' onClick={onClick} className='flex items-center gap-3 text-ink hover:text-accent transition-colors'>
      <img className='w-11 h-11 mix-blend-multiply' src={Logo} alt='' />
      <span className='flex flex-col'>
        <span className='font-display text-headline-md tracking-tight'>
          OneCart<span className='text-accent'>.</span>
        </span>
        <span className='hidden sm:block -mt-1 text-caption uppercase tracking-[0.3em] text-outline'>Curated Atelier</span>
      </span>
    </Link>
  )
}

export default BrandLogo
