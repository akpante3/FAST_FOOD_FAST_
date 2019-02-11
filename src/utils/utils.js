
const setAccessToken = (token) => {
    if(window.localStorage.getItem('access-token') === null){
        window.localStorage.setItem('access-token', token);
        return;
    }
    localStorage.removeItem('access-token');
    window.localStorage.setItem('access-token', token);
}

export default setAccessToken;