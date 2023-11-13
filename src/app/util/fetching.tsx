export const API_URL = "https://apiganaderia.azurewebsites.net";

export const POST: RequestInit = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
}

export const API_METHODS = {
    user: {
        default: `${API_URL}/user`,
        login: `${API_URL}/login`,
        checkToken: `${API_URL}/checkToken/`,
        logout: `${API_URL}/logout/`
    }
}
