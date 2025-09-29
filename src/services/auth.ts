const API = import.meta.env.VITE_API_URL;

export async function login(email: string, password: string) {
  const response = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) throw await response.json();
  return response.json();
}

export async function register(name: string, email: string, password: string, role: 'tenant' | 'landlord') {
    const response = await fetch(`${API}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, role }),
    });
    if (!response.ok) throw await response.json();
    return response.json();
} 