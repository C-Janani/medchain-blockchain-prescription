```javascript
// API base URL for online and local usage
const API_BASE = (function () {
  const { protocol, hostname } = window.location;
  const PROD_API = "https://medchain-ndzz.onrender.com/api";

  // Opened as a file, or running on your own computer
  if (protocol === "file:") return "http://localhost:5000/api";
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return "http://localhost:5000/api";
  }

  // Any deployed website (Vercel or Render itself)
  return PROD_API;
})();
const Auth = {
  saveSession(token, user) {
    localStorage.setItem("rxchain_token", token);
    localStorage.setItem("rxchain_user", JSON.stringify(user));
  },

  getToken() {
    return localStorage.getItem("rxchain_token");
  },

  getUser() {
    const raw = localStorage.getItem("rxchain_user");
    return raw ? JSON.parse(raw) : null;
  },

  logout() {
    localStorage.removeItem("rxchain_token");
    localStorage.removeItem("rxchain_user");
    window.location.href = "../../login.html";
  },

  requireRole(role) {
    const user = Auth.getUser();

    if (!user || !Auth.getToken() || user.role !== role) {
      window.location.href = "../../login.html";
      return null;
    }

    return user;
  },
};

async function api(path, options = {}) {
  const { method = "GET", body = null } = options;

  const headers = {};
  if (body !== null) headers["Content-Type"] = "application/json";

  const token = Auth.getToken();
  if (token) headers.Authorization = `Bearer ${token}`;

  let response;

  try {
    response = await fetch(`${API_BASE}${path}`, {
      method,
      headers,
      body: body !== null ? JSON.stringify(body) : undefined,
    });
  } catch (networkError) {
    throw new Error(
      "Cannot reach the server (" + API_BASE + "). " +
      "Please check your internet connection or try again later."
    );
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || `Request failed (${response.status})`);
  }

  return data;
}
```
