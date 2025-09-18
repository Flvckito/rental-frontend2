export function parseJwt(token: string | null) {
    if (!token) return null;
    try {
        const base = token.split('.')[1];
        const json = atob(base.replace(/-/g, '+').replace(/_/g, '/'));
        return JSON.parse(json);
    } catch {
        return null;
    }
} 