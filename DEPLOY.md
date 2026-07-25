## Deploying Locally with Docker

Prerequisites: Docker and Docker Compose installed.

1. Copy environment variables:

```bash
cp .env.example .env
# Edit .env to set `JWT_SECRET` (and any other values) if needed
```

2. Build and run the stack:

```bash
docker-compose up --build
```

3. Access services:

- Backend API: http://localhost:5000
- Frontend: http://localhost:3000
- MongoDB: mongodb://localhost:27017

## GitHub Actions

The workflow at `.github/workflows/docker-image.yml` builds and pushes images to GitHub Container Registry (GHCR) on pushes to `main`/`master`.

You can change the registry or tags in the workflow. For private pushes to GHCR, the built-in `GITHUB_TOKEN` suffices; for other registries set secrets accordingly.
