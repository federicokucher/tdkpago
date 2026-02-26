# Contributing to Tdkpago

## Getting Started

1. **Fork** el repositorio
2. **Clone** tu fork localmente:
   ```bash
   git clone https://github.com/TU_USUARIO/tdkpago.git
   cd tdkpago
   ```

3. **Instalar dependencias**:
   ```bash
   npm install
   ```

4. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```

---

## Branching Strategy

- **`main`** → Producción (solo para releases)
- **`develop`** → Rama de integración
- **`feature/*`** → Nuevas funcionalidades
- **`fix/*`** → Bug fixes
- **`hotfix/*`** → Fixes urgentes en producción

---

## Workflow

### 1. Crear una feature branch
```bash
git checkout develop
git checkout -b feature/nueva-funcionalidad
```

### 2. Trabajar y hacer commits
```bash
git add .
git commit -m "feat: descripción de la funcionalidad"
```

### 3. Push y crear Pull Request
```bash
git push origin feature/nueva-funcionalidad
```

Luego crear PR desde GitHub:
- `feature/*` → `develop` (para testing)
- `develop` → `main` (para producción)

---

## Commit Messages

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

| Tipo | Descripción |
|------|-------------|
| `feat:` | Nueva funcionalidad |
| `fix:` | Bug fix |
| `docs:` | Documentación |
| `style:` | Cambios de formato (CSS, etc) |
| `refactor:` | Refactorización de código |
| `chore:` | Tareas de mantenimiento |

### Ejemplos:
```
feat: add dark mode toggle
fix: resolve navigation menu issue
docs: update contributing guidelines
```

---

## Deployment

- **develop**: Deploy automático a preview URL en cada push
- **main**: Deploy automático a producción cuando se mergea desde develop

---

## Estándares de Código

- **TypeScript** con strict mode
- **ESLint** para linting
- **Prettier** para formato (configurado automáticamente)
- **shadcn/ui** para componentes
- **Tailwind CSS** para estilos

---

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui
- React Router

---

## Recursos

- [Documentación de React](https://react.dev)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vite.dev)

---

¿Preguntas? Abrí un issue en GitHub.
