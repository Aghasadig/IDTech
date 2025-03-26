function setDataToLocalStorage (key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function updateDataLocalStorage(key, updater, fallback = null){    
    const data = getLocalStorageData(key, fallback);
    const isDataExsist = Boolean(data);
    
    if(!isDataExsist){
        const updatedData = updater();
        setDataToLocalStorage(key, JSON.stringify(updatedData));

        return;
    }

    const updatedData = updater(data);

    setDataToLocalStorage(key, updatedData);
}

function getLocalStorageData (key, fallback = null) {
    const dataStr = localStorage.getItem(key);
    const isDataExsist = Boolean(dataStr);

    if(!isDataExsist){
        return fallback
    }

    return JSON.parse(dataStr)
}

function addOrRemoveElementFormArray(array, id) {
    const exists = array.some((item) => item === id);
  
    if (exists) {
      return array.filter((item) => item !== id);
    }
  
    return [...array, id];
  }