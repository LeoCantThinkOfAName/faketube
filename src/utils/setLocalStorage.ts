export const setLocalStorage = (key: string, value: Object) => {
  window.localStorage.setItem(key, JSON.stringify(value));
}