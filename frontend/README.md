# 🍽️ Servd - AI Recipe Platform

<div align="center">

![Servd Logo](./frontend/public/orange-logo.png)

**Turn your leftovers into masterpieces with AI-powered recipe recommendations**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Strapi](https://img.shields.io/badge/Strapi-5.34.0-4945ff?style=for-the-badge&logo=strapi)](https://strapi.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-8.8.0-336791?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Clerk-6.37.1-6c47ff?style=for-the-badge)](https://clerk.com/)

</div>

---

## 📋 Table of Contents

- [🎯 About](#-about)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ Project Structure](#️-project-structure)
- [🚀 Getting Started](#-getting-started)
- [⚙️ Environment Variables](#️-environment-variables)
- [📚 API Reference](#-api-reference)
- [🎨 Design System](#-design-system)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🎯 About

**Servd** is an AI-powered recipe platform that helps users discover recipes based on ingredients they have. Simply snap a photo of your fridge, and Servd will suggest delicious meals you can make, helping you reduce food waste and cook amazing meals.

The platform features a modern, responsive design with AI-generated recipe suggestions, comprehensive search capabilities by category and cuisine, and a personal pantry management system.

---

## ✨ Features

### 🍳 Recipe Discovery
- **Recipe of the Day** - Hand-picked daily inspiration from TheMealDB
- **Category Browsing** - Explore 14+ recipe categories (Beef, Chicken, Dessert, Pasta, Seafood, Vegan, etc.)
- **Cuisine Explorer** - Browse 30+ world cuisines (Italian, Mexican, Japanese, Indian, etc.)
- **Smart Search** - Find recipes by name, ingredient, or dietary preference

### 📸 Pantry Management
- **AI-Powered Ingredient Recognition** - Photo recognition to identify what you have
- **Smart Suggestions** - Get recipe recommendations based on your available ingredients
- **Waste Reduction** - Never let ingredients go to waste again

### 👤 User Features
- **Authentication** - Secure sign-up/sign-in with Clerk
- **Subscription Tiers** - Free and Pro plans with Clerk Billing
- **Saved Recipes** - Save your favorite recipes to your personal collection
- **Cross-Platform Sync** - User data synced between Next.js frontend and Strapi backend

### 🎨 UI/UX
- **Neobrutalism Design** - Bold, distinctive visual style
- **Responsive Design** - Mobile-first approach for all devices
- **Dark Mode Ready** - Built with next-themes for theme switching
- **Smooth Animations** - Powered by CSS and framer-motion

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **React 19** | UI library |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **Radix UI** | Unstyled, accessible components |
| **Clerk** | Authentication & user management |
| **Clerk Billing** | Subscription & payment processing |
| **ArcJet** | Security & rate limiting |
| **Lucide React** | Beautiful icons |
| **Sonner** | Toast notifications |
| **TheMealDB API** | Recipe data source |

### Backend
| Technology | Purpose |
|------------|---------|
| **Strapi 5** | Headless CMS & API |
| **PostgreSQL 8.8** | Primary database |
| **Node.js 20+** | Runtime environment |
| **Users & Permissions** | Built-in Strapi RBAC |

### Development Tools
| Technology | Purpose |
|------------|---------|
| **pnpm** | Fast package manager |
| **ESLint** | Code linting |
| **Prettier** | Code formatting |
| **Git** | Version control |

---

## 🏗️ Project Structure

```
airecipeplatform/
├── frontend/                 # Next.js frontend application
│   ├── app/                  # App Router pages
│   │   ├── (auth)/          # Authentication pages (sign-in, sign-up)
│   │   ├── (main)/          # Main application routes
│   │   │   ├── dashboard/  # User dashboard
│   │   │   └── recipes/     # Recipe browsing
│   │   ├── layout.js        # Root layout
│   │   └── page.jsx         # Landing page
│   ├── actions/             # Server actions (API calls)
│   ├── components/          # React components
│   │   ├── ui/             # Base UI components
│   │   ├── Header.jsx      # Navigation header
│   │   ├── PricingSection.jsx  # Pricing display
│   │   ├── PricingModal.jsx    # Pricing details modal
│   │   ├── RecipeGrid.jsx      # Recipe display grid
│   │   └── UserDropdown.jsx    # User menu dropdown
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   │   ├── data.js         # Site data & constants
│   │   ├── utils.js        # Helper functions
│   │   └── checkUser.js    # User authentication checker
│   ├── public/             # Static assets
│   └── package.json
│
├── backend/                 # Strapi backend application
│   ├── config/             # Strapi configuration
│   ├── database/           # Database migrations
│   ├── src/
│   │   ├── api/            # API content types
│   │   │   ├── recipe/    # Recipe content type
│   │   │   ├── pantry-item/ # Pantry item content type
│   │   │   └── saved-recipe/ # Saved recipe content type
│   │   ├── extensions/     # Custom extensions
│   │   └── index.js        # Entry point
│   └── package.json
│
└── README.md               # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 20.0.0 (tested up to 24.x.x)
- **pnpm** >= 6.0.0
- **PostgreSQL** >= 13.0 (for production)
- **Clerk Account** (for authentication)
- **Strapi Cloud/Server** (for backend) or local development

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   See [Environment Variables](#️-environment-variables) for details.

4. **Run development server**
   ```bash
   pnpm dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Start Strapi development server**
   ```bash
   pnpm develop
   ```

5. **Access Strapi Admin**
   ```
   http://localhost:1337/admin
   ```

### Database Setup (Production)

1. **Create PostgreSQL database**
   ```bash
   psql -U postgres -c "CREATE DATABASE airecipe;"
   ```

2. **Configure connection in backend/.env**
   ```env
   DATABASE_CLIENT=pg
   DATABASE_FILENAME=./data.db
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_NAME=airecipe
   DATABASE_USERNAME=postgres
   DATABASE_PASSWORD=your_password
   ```

---

## ⚙️ Environment Variables

### Frontend (.env.local)

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx
CLERK_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Clerk Billing (Stripe Integration)
CLERK_PUBLISHABLE_KEY=pk_test_xxx
CLERK_SECRET_KEY=sk_test_xxx
CLERK_WEBHOOK_SECRET=whsec_xxx

# Strapi Backend
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_api_token

# Security (ArcJet)
ARCJET_API_KEY=aj_xxx

# App Config
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Backend (.env)

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=toBeModified1,toBeModified2
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
JWT_SECRET=tobemodified

# Database
DATABASE_CLIENT=pg
DATABASE_FILENAME=./data.db
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=airecipe
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=password

# Upload Provider (Cloudinary/AWS/etc.)
```

---

## 📚 API Reference

### TheMealDB API (Frontend Integration)

All recipe data is fetched from TheMealDB API via server actions.

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/json/v1/1/random.php` | GET | Get random recipe of the day |
| `/api/json/v1/1/list.php?c=list` | GET | List all categories |
| `/api/json/v1/1/list.php?a=list` | GET | List all areas/cuisines |
| `/api/json/v1/1/filter.php?c={category}` | GET | Filter meals by category |
| `/api/json/v1/1/filter.php?a={area}` | GET | Filter meals by area |
| `/api/json/v1/1/lookup.php?i={id}` | GET | Get meal details by ID |
| `/api/json/v1/1/search.php?s={name}` | GET | Search meals by name |

### Strapi API (Backend Integration)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/users` | GET/POST | List/create users |
| `/api/users/:id` | GET/PUT/DELETE | User CRUD operations |
| `/api/recipes` | GET/POST | List/create recipes |
| `/api/recipes/:id` | GET/PUT/DELETE | Recipe CRUD |
| `/api/pantry-items` | GET/POST | Pantry item management |
| `/api/saved-recipes` | GET/POST | User's saved recipes |
| `/api/users-permissions/roles` | GET | List user roles |

---

## 🎨 Design System

### Color Palette

| Color | Usage |
|-------|-------|
| `stone-50` | Background |
| `stone-900` | Primary text |
| `orange-600` | Accent/Call-to-action |
| `amber-500` | Secondary accent |

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, tight tracking
- **Body**: Light weight for readability

### Component Library

Base UI components are built with:
- **Radix UI** - Unstyled, accessible primitives
- **Class Variance Authority (CVA)** - Component variants
- **Tailwind Merge** - Class merging utilities

### Available UI Components

- `Button` - Multiple variants (primary, ghost, outline)
- `Badge` - Status indicators
- `Card` - Content containers
- `Dialog` - Modal dialogs
- `Tabs` - Tabbed navigation
- `Sonner` - Toast notifications

---

## 🤝 Contributing

1. **Fork the repository**
   ```bash
   git fork https://github.com/yourusername/airecipeplatform
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow existing code style
   - Add tests if applicable
   - Update documentation

4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```

5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) - Free recipe API
- [Clerk](https://clerk.com/) - Authentication made easy
- [Strapi](https://strapi.io/) - Powerful headless CMS
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Lucide](https://lucide.dev/) - Beautiful icons

---

<div align="center">

**Built with 💗 using Next.js, Strapi, and AI**

© 2024 Servd - AI Recipe Platform

</div>

