const getFromStorage = <TData>(key: string): TData | null => {
  const dataStr = localStorage.getItem(key);
  if (!dataStr || dataStr === "undefined") return null;

  return JSON.parse(dataStr) as TData | null;
};

const setToStorage = <TData>(key: string, data: TData): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

const clearStorage = () => {
  localStorage.clear();
};

export { setToStorage, getFromStorage, clearStorage };
