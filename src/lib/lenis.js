import Lenis from 'lenis'

let instance = null
let rafId    = null

export function getLenis() {
  return instance
}

export function initLenis() {
  if (instance) return instance

  instance = new Lenis({
    lerp:            0.1,
    smoothWheel:     true,
    wheelMultiplier: 1,
    touchMultiplier: 0,
  })

  function raf(time) {
    if (!instance) return
    instance.raf(time)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)

  return instance
}

export function destroyLenis() {
  if (rafId) cancelAnimationFrame(rafId)
  rafId = null
  instance?.destroy()
  instance = null
}
