// How many orders, saved items and saved measurements the person has. Orders, saved items and measurements
// have no backend yet, so every count is a real zero. Replace each one with the real count when its API exists.
export function useProfileCounts() {
  return { orders: 0, saved: 0, measured: 0 }
}
