export const wrapWithLoadingPause = (callback, ms) => {
  setTimeout(callback, ms)
}
