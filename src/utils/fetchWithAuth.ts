const API = import.meta.env.VITE_API_URL;

export async function fetchWithAuth(path: string, options: RequestInit = {}) {
    const token = localStorage.getItem('token');
    const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) } as any;
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const response = await fetch(`${API}${path}`, { ...options, headers });
    if (response.status === 401) {
        // handle unauthorized access, e.g., redirect to login
    }
    return response;
}