import { useEffect, useMemo, useReducer } from 'react'
import { CartContext } from './CartContext.js'

const STORAGE_KEY = 'onecart-cart'
const MAX_QUANTITY = 99

const clampQuantity = (quantity) => Math.min(MAX_QUANTITY, Math.max(1, Math.floor(quantity) || 1))

// Keep only the fields we know about, so a damaged or edited saved cart can never break the page.
const cleanItem = (item) =>
  item && typeof item.id === 'string' && typeof item.name === 'string' && Number.isFinite(item.price) && item.price >= 0
    ? {
        id: item.id,
        name: item.name,
        description: typeof item.description === 'string' ? item.description : '',
        image: typeof item.image === 'string' ? item.image : '',
        size: typeof item.size === 'string' ? item.size : '',
        price: item.price,
        quantity: clampQuantity(item.quantity),
      }
    : null

function loadCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY))
    const clean = (list) => (Array.isArray(list) ? list.map(cleanItem).filter(Boolean) : [])
    return { items: clean(stored?.items), saved: clean(stored?.saved) }
  } catch {
    return { items: [], saved: [] }
  }
}

const without = (list, id) => list.filter((item) => item.id !== id)

function reducer(state, action) {
  const { items, saved } = state

  switch (action.type) {
    case 'add': {
      const item = cleanItem(action.item)
      if (!item) return state
      const existing = items.find((i) => i.id === item.id)
      return existing
        ? { ...state, items: items.map((i) => (i.id === item.id ? { ...i, quantity: clampQuantity(i.quantity + item.quantity) } : i)) }
        : { ...state, items: [...items, item] }
    }
    case 'setQuantity':
      return { ...state, items: items.map((i) => (i.id === action.id ? { ...i, quantity: clampQuantity(action.quantity) } : i)) }
    case 'remove':
      return { ...state, items: without(items, action.id) }
    case 'save': {
      const item = items.find((i) => i.id === action.id)
      return item ? { items: without(items, action.id), saved: [...without(saved, action.id), item] } : state
    }
    case 'moveToBag': {
      const item = saved.find((i) => i.id === action.id)
      return item ? { saved: without(saved, action.id), items: [...without(items, action.id), item] } : state
    }
    case 'removeSaved':
      return { ...state, saved: without(saved, action.id) }
    default:
      return state
  }
}

/**
 * Holds the shopping bag and the saved-for-later list for the whole app. It is kept in this browser only.
 * Prices here are for showing the bag. The real total must be calculated again on the server at checkout.
 */
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadCart)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // Storage can be blocked (private window). The bag still works until the tab closes.
    }
  }, [state])

  const value = useMemo(
    () => ({
      items: state.items,
      saved: state.saved,
      itemCount: state.items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      addItem: (item) => dispatch({ type: 'add', item }),
      setQuantity: (id, quantity) => dispatch({ type: 'setQuantity', id, quantity }),
      removeItem: (id) => dispatch({ type: 'remove', id }),
      saveForLater: (id) => dispatch({ type: 'save', id }),
      moveToBag: (id) => dispatch({ type: 'moveToBag', id }),
      removeSaved: (id) => dispatch({ type: 'removeSaved', id }),
    }),
    [state],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
