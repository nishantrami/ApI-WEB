# E-Commerce Web Client

This is the frontend client workspace of the E-Commerce application. It is built using React 19, Vite 8, and React Router DOM.

For full project architecture, local setup, and deployment guides, please see the root [README.md](../README.md).

---

## 🛠️ Tech Stack & Dependencies

- **UI Framework**: React 19 / React DOM 19
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios (for any direct API requests)
- **Linter**: Oxlint (configured in [.oxlintrc.json](.oxlintrc.json))
- **Build Tool**: Vite 8 with `@vitejs/plugin-react`

---

## 📂 Key Source Directories

- [src/assets/](src/assets): Image files and static visual assets.
- [src/component/](src/component): Contains shared UI components like the [Header](src/component/Header.jsx) with navigation, search support, and cart indicator.
- [src/page/](src/page): Contains the page views (Home, Cart, ProductDetails, and category-specific listings).
- [src/App.jsx](src/App.jsx): Defines paths, routing logic, and root-level states (cart, searchQuery).

---

## 💻 Available Scripts

These scripts should be run from this folder, or through the root npm workspace command (e.g., `npm run dev --workspace=web`):

- **`npm run dev`**: Starts the local development server at `http://localhost:5173`.
- **`npm run build`**: Compiles the React application into optimized static assets in the `dist` folder.
- **`npm run lint`**: Runs Oxlint to inspect codebase and report any code quality warnings.
- **`npm run preview`**: Serves the compiled `dist` folder locally for previewing.
