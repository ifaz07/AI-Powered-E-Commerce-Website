// The side spacing used by every section so all content lines up on every page.
// There is no maximum width: content stretches across the whole screen, only the side padding grows.
function Container({ as: Tag = 'div', className = '', children, ...props }) {
  return (
    <Tag className={`w-full px-5 md:px-10 lg:px-16 2xl:px-24 ${className}`} {...props}>
      {children}
    </Tag>
  )
}

export default Container
