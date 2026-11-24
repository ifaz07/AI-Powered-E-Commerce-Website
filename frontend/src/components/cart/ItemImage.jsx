// The photo of a bag item. Shows a plain tinted box when the item has no photo.
function ItemImage({ src, name, className = '' }) {
  return (
    <div className={`overflow-hidden rounded bg-surface-mid ${className}`}>
      {src && <img src={src} alt={name} loading='lazy' className='w-full h-full object-cover' />}
    </div>
  )
}

export default ItemImage
