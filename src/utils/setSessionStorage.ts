export const setSessionStorage = (key: string, value: Object) => {
  window.sessionStorage.setItem(key, JSON.stringify(value));
}