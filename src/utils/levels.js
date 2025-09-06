export const BASE_LEVEL = 50
export const XP_PER_LEVEL = 100

export function xpToLevel(xp = 0) {
  const safe = Math.max(0, Math.floor(xp))
  return BASE_LEVEL + Math.floor(safe / XP_PER_LEVEL)
}
export function xpToProgress(xp = 0) {
  const safe = Math.max(0, Math.floor(xp))
  return safe % XP_PER_LEVEL
}

export function xpToLevelsGained(xp = 0) {
  const safe = Math.max(0, Math.floor(xp))
  return Math.floor(safe / XP_PER_LEVEL)
}
