const addButton=()=>{
    const localStorageId=document.getElementById('localstorage-id')
    const id=localStorageId.value;

    const localStorageValue=document.getElementById('localstorage-value')
    const value=localStorageValue.value;
    
    // setItem
    if(id && value) {
        localStorage.setItem(id, value);
    }
   
    // clear-fild
    localStorageId.value=''
    localStorageValue.value=''
}