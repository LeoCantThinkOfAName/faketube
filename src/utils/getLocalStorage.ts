export const getLocalStorage = (key: string) => {
  const value = window.localStorage.getItem(key);

  if(value) {
    return JSON.parse(value);
  }
}