// router.js
/* global window */

export function push (...args: any[]) {
  window.g_history.push(...args)
}

export function replace (...args: any[]) {
  window.g_history.replace(...args)
}

export function go (...args: any[]) {
  window.g_history.go(...args)
}

export function goBack (...args: any[]) {
  window.g_history.goBack(...args)
}

export function goForward (...args: any[]) {
  window.g_history.goForward(...args)
}

export default {
  push,
  replace,
  go,
  goBack,
  goForward
}
