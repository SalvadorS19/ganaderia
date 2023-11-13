export const API_URL = "https://apiganaderia.azurewebsites.net";

export const GetFetch = (url: string) => fetch(url).then((res) => res.json());

export const PostFetch = (url: string, body: any) => fetch(url, {...POST, body}).then((res) => res.json());

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
