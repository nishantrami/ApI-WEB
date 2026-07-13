# E-Commerce Web Application

A modern, responsive e-commerce web platform built with **React**, **React Router**, **Vite**, and styled with **custom CSS**. This project leverages the [DummyJSON API](https://dummyjson.com) to fetch products, handle categories, search dynamically, and manage a cart locally.

---

## 🚀 Features

- **Dynamic Home Page**: Lists all products fetched from the DummyJSON API with a grid layout.
- **Real-time Product Search**: Search for products directly via the header input, rendering filtered results dynamically.
- **Categorized Shopping**: Dedicated pages/sections for specific categories including:
  - Fashion (Men's & Women's Fashion, Dresses, Shoes, Bags, Shirts, Watches)
  - Electronics (Mobiles, Phones, Accessories, and broader category listings)
  - Groceries, Furniture, and Fragrances
- **Detailed Product View**: Single-product pages displaying detailed information, ratings, pricing, and high-quality thumbnails.
- **Interactive Shopping Cart**: Full cart state management allows adding items, updating quantities, recalculating totals, and removing items.
- **Responsive Layout**: Works seamlessly across mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

- **Framework/Tooling**: [React 19](https://react.dev/), [Vite 8](https://vite.dev/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **API Fetching**: Native Fetch API / Axios
- **Code Quality**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) for lightning-fast linting
- **Deployments**: Configured for [Vercel](https://vercel.com)

---

## 📂 Project Structure

The project is structured as an npm workspace to enable clean dependency management:

```text
E-commerce/
├── dist/                  # Production build output folder copied from workspace
├── node_modules/          # Workspace dependencies
├── package.json           # Root package.json defining workspaces and scripts
├── vercel.json            # Vercel deployment configuration for single-page app
└── web/                   # Frontend react application (Workspace project)
    ├── dist/              # Vite build target directory
    ├── public/            # Public assets
    ├── src/               # React application source code
    │   ├── assets/        # Media and image files
    │   ├── component/     # Reusable components (e.g., Header)
    │   ├── page/          # Application views (Home, Cart, Category pages)
    │   ├── App.css        # Main application stylesheet
    │   ├── App.jsx        # Routing and global state controller
    │   ├── index.css      # Core global styling
    │   └── main.jsx       # React entry mount point
    ├── package.json       # Workspace-specific package configurations
    ├── vercel.json        # Workspace-specific Vercel configuration
    └── vite.config.js     # Vite compiler configurations
```

---

## 💻 Local Development Setup

To run this application locally, ensure you have [Node.js](https://nodejs.org/) installed.

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd E-commerce
   ```

2. **Install all dependencies** (installs both root and workspace dependencies):
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   # Starts the Vite dev server for the web workspace
   npm run dev --workspace=web
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build the application**:
   ```bash
   npm run build
   ```
   This will build the Vite app inside `web/dist` and sync it to the root `dist` folder ready for static hosting.

---

## 🌐 Deploying to Vercel

This repository is optimized for one-click deployment to **Vercel** with SPA routing support configuration (handling HTML5 history fallback redirects).

### Option 1: Vercel Git Integration (Recommended)
1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Go to the [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New > Project**.
3. Import your Git repository.
4. Set the configuration as follows:
   - **Framework Preset**: `Vite` (or `Other`)
   - **Root Directory**: `./` (Root directory, as it will run the root build script which outputs to `dist`)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Vercel will automatically build the site and deploy it.

### Option 2: Deploying via Vercel CLI
If you have the [Vercel CLI](https://vercel.com/cli) installed locally, follow these steps:

1. Log into your Vercel account in your terminal:
   ```bash
   npx vercel login
   ```
2. Link your project and deploy:
   ```bash
   npx vercel
   ```
3. Deploy to production:
   ```bash
   npx vercel --prod
   ```
