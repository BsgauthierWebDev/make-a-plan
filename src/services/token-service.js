import config from '../config';

const TokenService = {
    hasAuthToken() {
        return !!TokenService.getAuthToken()
    },

    saveAuthToken(token) {
        window.localStorage.setItem(config.TOKEN_KEY, token)
    },

    getAuthToken() {
        return window.localStorage.getItem(config.TOKEN_KEY)
    },

    clearAuthToken() {
        console.info(`clearing the auth token`)
        window.localStorage.removeItem(console.TOKEN_KEY)
    },

    makeBasicAuthToken(username, password) {
        return window.btoa(`${username}:${password}`)
    },
}

export default TokenService;