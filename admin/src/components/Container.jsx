// The side spacing shared (no maximum width, like the storefront) by the header, the page and the footer, so they line up.
function Container({ as: Tag = 'div', className = '', children }) {
  return <Tag className={`w-full px-5 md:px-10 lg:px-16 2xl:px-24 ${className}`}>{children}</Tag>
}

export default Container
