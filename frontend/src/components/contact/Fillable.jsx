// Shows a value the shop owner fills in later, or a quiet "To be added" while it is still empty.
function Fillable({ value }) {
  return value ? <>{value}</> : <span className='italic text-outline'>To be added</span>
}

export default Fillable
