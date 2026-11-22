import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdClose, MdMenu, MdOutlineSearch, MdOutlineShoppingBag } from 'react-icons/md'
import { NAV_LINKS } from '../config/navLinks.js'
import BrandLogo from './BrandLogo.jsx'
import Container from './Container.jsx'
import SearchBar from './SearchBar.jsx'
import UserMenu from './UserMenu.jsx'

const iconButtonClass =
  'relative p-2 rounded-full flex items-center justify-center text-[22px] text-muted hover:text-accent hover:bg-surface-high transition-colors cursor-pointer'

const linkClass = ({ isActive }) =>
  `text-label-lg uppercase py-1 transition-colors ${
    isActive ? 'text-accent border-b border-accent/40' : 'text-muted hover:text-ink'
  }`

const panelClass = 'absolute top-20 left-0 w-full bg-surface/95 backdrop-blur-xl border-b border-line shadow-lg'

// cartCount comes from the cart once it exists. The badge stays hidden while it is 0.
function Nav({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const closePanels = () => {
    setMenuOpen(false)
    setSearchOpen(false)
  }
  const toggleMenu = () => {
    setSearchOpen(false)
    setMenuOpen((open) => !open)
  }
  const toggleSearch = () => {
    setMenuOpen(false)
    setSearchOpen((open) => !open)
  }

  const links = NAV_LINKS.map(({ label, to }) => (
    <NavLink key={to} to={to} end className={linkClass} onClick={closePanels}>
      {label}
    </NavLink>
  ))

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-2xl shadow-[0_1px_12px_rgba(27,27,30,0.08)]'>
      <Container as='nav' aria-label='Main' className='h-20 flex items-center justify-between gap-6'>
        <div className='flex items-center gap-12'>
          <BrandLogo onClick={closePanels} />
          <div className='hidden lg:flex items-center gap-8'>{links}</div>
        </div>

        <div className='flex items-center gap-2 sm:gap-4'>
          <SearchBar className='hidden md:flex w-48 lg:w-64' onDone={closePanels} />

          <button
            type='button'
            className={`${iconButtonClass} md:hidden`}
            aria-label={searchOpen ? 'Close search' : 'Open search'}
            aria-expanded={searchOpen}
            onClick={toggleSearch}
          >
            {searchOpen ? <MdClose /> : <MdOutlineSearch />}
          </button>

          <Link
            to='/cart'
            className={iconButtonClass}
            aria-label={cartCount > 0 ? `Cart, ${cartCount} items` : 'Cart'}
            onClick={closePanels}
          >
            <MdOutlineShoppingBag />
            {cartCount > 0 && (
              <span className='absolute -top-0.5 -right-0.5 min-w-4 h-4 px-1 rounded-full bg-accent text-white text-caption font-semibold flex items-center justify-center leading-none'>
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </Link>

          <UserMenu />

          <button
            type='button'
            className={`${iconButtonClass} lg:hidden`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls='mobile-menu'
            onClick={toggleMenu}
          >
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </Container>

      {searchOpen && (
        <div className={`${panelClass} md:hidden`}>
          <Container className='py-4'>
            <SearchBar className='flex w-full' autoFocus onDone={closePanels} />
          </Container>
        </div>
      )}

      {menuOpen && (
        <div id='mobile-menu' className={`${panelClass} lg:hidden`}>
          <Container className='py-4 flex flex-col gap-4'>{links}</Container>
        </div>
      )}
    </header>
  )
}

export default Nav
