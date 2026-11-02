# Portfolio

React frontend (`client/`) + Spring Boot REST API (`server/`).

## Run it

You need Node 20+, Java 21, and Maven.

**1. Backend** (port 8080)

```bash
cd server
mvn spring-boot:run
```

Check it: http://localhost:8080/api/projects should return JSON.
The H2 console is at http://localhost:8080/h2-console (JDBC URL `jdbc:h2:mem:portfolio`, user `sa`, empty password).

**2. Frontend** (port 5173)

```bash
cd client
npm install
npm run dev
```

Open http://localhost:5173. In dev, Vite proxies `/api/*` to Spring Boot (see `client/vite.config.js`).

## Where things are

```
client/src/
  components/   Navbar, ProjectCard
  pages/        Home, About, Projects, NotFound
  hooks/        useFetch, useLocalStorage
  App.jsx       routes + theme state
server/src/main/java/dev/portfolio/server/
  project/      Project (entity), ProjectRepository, ProjectService,
                ProjectController, ProjectResponse (DTO)
  config/       CorsConfig, DataSeeder (sample data)
```

## Roadmap

- [x] Phase 1: static pages, components, routing
- [x] Phase 2: theme toggle (`useState`, `useEffect`, custom hook), tag filtering
- [x] Phase 3/4 (started): `GET /api/projects` from Spring Boot with loading and error states
- [ ] `POST /api/contact` with validation, plus a React contact form
- [ ] GitHub API repos section
- [ ] Admin login (Spring Security + JWT) and project CRUD
- [ ] Tests, error boundaries, deploy
