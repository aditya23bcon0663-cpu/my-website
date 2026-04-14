# Aselea Network Backend API

Tech stack used: **Node.js + Express + TypeScript**

## Features

- `POST /api/contact` for contact form submissions
- `GET /api/contact/submissions` to view saved contact submissions
- `POST /submit` for simple name/message form submissions
- `POST /api/apply` for role applications (with optional resume upload)
- `GET /api/apply/submissions` to view saved applications
- `POST /api/assistant` for Aselea assistant responses with audience/lead metadata
- `GET /api/jobs` for open roles
- `GET /api/status` for network operational status
- `GET /api/team` for team member data
- CORS enabled for local frontend origins (configurable via `CORS_ORIGIN`)

## Project Structure

```text
src/
  app.ts
  index.ts
  config/
    env.ts
  controllers/
  data/
  routes/
  services/
  types/
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment:

```bash
cp .env.example .env
```

On Windows PowerShell, use:

```powershell
Copy-Item .env.example .env
```

If you want resume files from `POST /api/apply` to upload to Cloudinary, add these values in `.env`:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_FOLDER=aselea-resumes

# Optional but recommended in cluster/proxy deployments so resume links are public and not localhost
PUBLIC_BASE_URL=https://api.yourdomain.com
```

3. Start in development mode:

```bash
npm run dev
```

4. Build and run production mode:

```bash
npm run build
npm start
```

Default base URL: `http://localhost:4000`

## API Testing (cURL)

### 1) Contact Form

```bash
curl -X POST http://localhost:4000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Aditya",
    "email": "aditya@example.com",
    "phone": "+91-9876543210",
    "message": "I want to discuss infrastructure services for our startup."
  }'
```

### 2) Simple Submit Form

```bash
curl -X POST http://localhost:4000/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Aditya",
    "message": "Hello from frontend form"
  }'
```

### 3) Jobs

```bash
curl http://localhost:4000/api/jobs
```

### 4) Assistant

```bash
curl -X POST http://localhost:4000/api/assistant \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "We need global reach and pricing for a fintech platform rollout"
  }'
```

Response shape:

```json
{
  "reply": "...",
  "metadata": {
    "audience": "developer|business|candidate|general",
    "leadType": "pricing_or_project|recruitment|none",
    "statusConstraintApplied": false
  }
}
```

### 5) Status

```bash
curl http://localhost:4000/api/status
```

### 6) Team

```bash
curl http://localhost:4000/api/team
```

## Postman Quick Test

- Method: `POST`
- URL: `http://localhost:4000/api/contact`
- Headers: `Content-Type: application/json`
- Body (raw JSON):

```json
{
  "name": "Aditya",
  "email": "aditya@example.com",
  "phone": "+91-9876543210",
  "message": "Hello team, please contact me regarding your edge network plans."
}
```

## Storage Behavior

- If MongoDB is reachable via `MONGO_URI`, contact/apply submissions are persisted in MongoDB.
- If MongoDB is unavailable, backend falls back to in-memory storage (data resets on server restart).
- If Cloudinary credentials are configured, resume files are uploaded to Cloudinary and `resumePath` stores the Cloudinary URL.
- If Cloudinary credentials are missing (or upload fails), backend falls back to local `uploads/` storage.

Submission inspection endpoints:

- `GET /api/contact/submissions`
- `GET /api/apply/submissions`

## Optional Database Schema Suggestions

### MongoDB (simple)

Collection: `contacts`

```json
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string",
  "createdAt": "ISODate"
}
```

Indexes:
- `{ email: 1 }`
- `{ createdAt: -1 }`

### PostgreSQL (simple)

```sql
CREATE TABLE contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(40) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_contact_messages_email ON contact_messages(email);
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);
```
