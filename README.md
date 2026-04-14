# Aselea Frontend (nebula-gateway)

## Connect To Backend

1. Create frontend env file:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

2. Ensure `VITE_API_URL` points to your backend base URL.

Example:

```env
VITE_API_URL=http://localhost:4000
```

3. Start backend first (`backend_aselea`), then run frontend:

```bash
npm install
npm run dev
```

Frontend defaults to `http://localhost:8080` and connects to backend APIs at `${VITE_API_URL}/api/*`.
