export const getSessionStorage = <T extends unknown>(key: string) => {
  const data = window.sessionStorage.getItem(key);

  if(data) {
    return JSON.parse(data) as T;
  } else {
    return null;
  }
}