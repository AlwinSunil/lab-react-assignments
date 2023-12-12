function useStorage() {
  const setStorage = (value) => {
    localStorage.setItem("data", value);
    sessionStorage.setItem("data", value);
  };

  return { setStorage };
}

export default useStorage;
