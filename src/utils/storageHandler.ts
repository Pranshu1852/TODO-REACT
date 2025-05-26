interface StorageHandler {
  getStorage: <T>(key: string) => T;
  setStorage: <T>(key: string, val: T) => void;
}

const storageHandler: StorageHandler = {
  getStorage(key: string) {
    try {
      return localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key)!)
        : null;
    } catch (error) {
      console.error(error);
    }
  },

  setStorage(key: string, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (error) {
      console.error(error);
    }
  },
};

export default storageHandler;
