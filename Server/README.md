# Reclip AI Backend

## 🚀 Local Setup

### 1. Clone the repository

```bash
git clone <repo-url>
cd Server
```

### 2. Setup environment

```bash
cp .env.example .env
```

### 3. Start Docker services

```bash
docker-compose up -d
```

### 4. Install node modules

```bash
npm install
```

### 5. Start backend

```bash
npm run dev
```

Backend will run at: `http://localhost:5000`

## 🧪 Test API

- `POST /jobs/upload-url`
- `POST /jobs`
- `GET /jobs/:id`
