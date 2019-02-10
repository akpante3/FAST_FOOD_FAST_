
const setAccessToken = (token) => {
    const Access_Key = 'access_token'
    if(window.localStorage.getItem(Access_Key) === null){
        window.localStorage.setItem(Access_Key, token);
        return;
    }
    localStorage.removeItem(Access_Key);
    window.localStorage.setItem(Access_Key, token);
}

export default setAccessToken;