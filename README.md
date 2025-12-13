# Portfolio Mario Lourido

A modern, bilingual portfolio website showcasing industrial design engineering projects, built with React, Vite, and Tailwind CSS. Features dynamic project pages, smooth animations, and a sophisticated UI with hardware-inspired visual effects.

## 🚀 Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.7** - Build tool and dev server
- **React Router DOM 7.9.6** - Client-side routing
- **Framer Motion 12.23.24** - Animation library
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Lucide React 0.554.0** - Icon library
- **ESLint** - Code linting

## 📁 Project Structure

```
MLOURIDOWEB/
├── public/
│   ├── images/
│   │   ├── about/              # About section images
│   │   └── projects/            # Project showcase images
│   └── videos/                  # Project videos
│
├── src/
│   ├── components/              # React components
│   │   ├── figma/
│   │   │   └── ImageWithFallback.jsx  # Image component with fallback
│   │   ├── About.jsx           # About section
│   │   ├── Contact.jsx         # Contact section
│   │   ├── ContinuousLearning.jsx  # Learning section
│   │   ├── ExtraPage.jsx       # Extra page route
│   │   ├── HardwareOverlay.jsx # Hardware pixel effect overlay
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Hero section
│   │   ├── HoverFocusOverlay.jsx
│   │   ├── Personal.jsx
│   │   ├── ProjectPage.jsx     # Reusable project page template
│   │   ├── ProjectPageWrapper.jsx  # Router wrapper for projects
│   │   ├── Projects.jsx         # Projects grid section
│   │   └── TechStack.jsx       # Tech stack showcase
│   │
│   ├── context/                 # React Context providers
│   │   ├── FirstLoadContext.jsx    # First load state management
│   │   └── LanguageContext.jsx      # Bilingual support (ES/EN)
│   │
│   ├── data/                    # Data layer
│   │   ├── projects.js          # Centralized project data
│   │   └── translations.js      # Bilingual translations
│   │
│   ├── hooks/                   # Custom React hooks
│   │   └── useScrollReveal.js   # Scroll reveal animations
│   │
│   ├── styles/
│   │   └── globals.css          # Global styles and Tailwind imports
│   │
│   ├── App.jsx                  # Main app component with routing
│   └── main.jsx                 # Application entry point
│
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind configuration
├── vite.config.js               # Vite configuration
└── eslint.config.js             # ESLint configuration
```

## 🎯 Key Features

### 1. **Bilingual Support (ES/EN)**
- Language detection from browser settings
- Persistent language preference (localStorage)
- Toggle button in header
- All content translated via `translations.js`

### 2. **Dynamic Project Pages**
- Centralized project data in `src/data/projects.js`
- Dynamic routing: `/project/:slug`
- Reusable `ProjectPage` component
- Features include:
  - Hero section with fullscreen images
  - Intro block with project description
  - Bento box gallery layout
  - Features showcase
  - Dark section for UX/UI content
  - Video sections
  - Next project navigation

### 3. **Smooth Animations**
- Scroll reveal animations using Intersection Observer
- Framer Motion for page transitions
- Header hide/show on scroll
- Hardware overlay effect (Nothing-style pixels)

### 4. **Responsive Design**
- Mobile-first approach
- Hamburger menu for mobile navigation
- Responsive grid layouts
- Adaptive typography and spacing

### 5. **Modern UI/UX**
- Clean, minimalist design
- Glassmorphism header with backdrop blur
- Section-based navigation with smooth scrolling
- Professional typography (IBM Plex Mono, Inter)

## 🧩 Component Overview

### Core Components

#### `App.jsx`
- Main application component
- Sets up React Router with routes:
  - `/` - Homepage (SPA with all sections)
  - `/project/:slug` - Individual project pages
  - `/extra` - Extra page
- Wraps app with context providers:
  - `LanguageProvider` - Language state
  - `FirstLoadProvider` - First load detection
- Includes global `HardwareOverlay` component

#### `Header.jsx`
- Fixed navigation bar with auto-hide on scroll
- Desktop and mobile menu variants
- Language switcher (ES/EN)
- Smooth scroll to sections
- Navigation items: Work, About, Contact, Extra

#### `Hero.jsx`
- Landing section with tagline and description
- Animated introduction

#### `Projects.jsx`
- Grid display of project thumbnails
- Links to individual project pages
- Project metadata (year, category, figure reference)

#### `ProjectPage.jsx`
- Reusable template for project detail pages
- Sections:
  - Hero with fullscreen image
  - Intro block (hook, challenge, process)
  - Gallery (bento box layout)
  - Features grid
  - Dark section (UX/UI showcase)
  - Video section
  - Next project navigation

#### `About.jsx`
- Personal information and bio
- Professional experience
- Skills and education
- CV download link

#### `TechStack.jsx`
- Technology tools showcase
- Categorized by workflow stage
- Certifications display

#### `ContinuousLearning.jsx`
- Seminars, workshops, and courses
- Educational timeline

#### `Contact.jsx`
- Contact information
- Footer with copyright

### Context Providers

#### `LanguageContext.jsx`
- Manages current language (ES/EN)
- Persists to localStorage
- Provides `useLanguage()` hook
- Auto-detects browser language

#### `FirstLoadContext.jsx`
- Tracks first page load
- Used for initial animations
- Provides `useFirstLoad()` hook

### Custom Hooks

#### `useScrollReveal.js`
- Implements scroll reveal animations
- Uses Intersection Observer API
- Targets elements with `data-reveal` attribute
- Configurable delay per element

## 📊 Data Structure

### Projects Data (`src/data/projects.js`)

Each project follows this structure:

```javascript
{
  slug: "project-slug",
  title: "PROJECT TITLE",
  category: "Category",
  year: "2025",
  hero: {
    image: "/images/projects/hero.jpg",
    role: "Role",
    client: "Client"
  },
  intro: {
    hook: "Hook text",
    challenge: "Challenge description",
    process: "Process description"
  },
  gallery: [
    {
      id: "unique-id",
      image: "/images/projects/image.jpg",
      title: "Title",
      size: "large-left" | "small-right-top" | "small-right-bottom",
      description: "Description"
    }
  ],
  features: {
    feature1: { title: "Title", description: "Description" },
    // ...
  },
  darkSection: {
    title: "Title",
    description: "Description",
    images: ["/path/to/image.png"]
  },
  video: {
    url: "/videos/video.mp4",
    title: "Video Title"
  },
  nextProject: {
    slug: "next-slug",
    title: "NEXT PROJECT",
    tag: "Tag"
  }
}
```

### Translations (`src/data/translations.js`)

Centralized translation object with keys for:
- Header navigation
- Hero section
- Projects section
- About section
- Tech stack
- Continuous learning
- Contact
- Extra page

## 🎨 Styling

### Tailwind Configuration
- Custom color palette (`portfolio-bg`, `portfolio-text`, etc.)
- Custom fonts (Inter, IBM Plex Mono)
- Extended spacing scale
- CSS variables for theming

### Global Styles (`src/styles/globals.css`)
- Font imports (Google Fonts)
- Tailwind directives
- Custom CSS variables
- Hardware overlay styles
- Scroll reveal animations
- Dark mode support

## 🛣️ Routing

The application uses React Router with the following routes:

1. **`/`** - Homepage
   - Single Page Application
   - Contains: Hero, Projects, About, TechStack, ContinuousLearning, Contact
   - Smooth scroll navigation between sections

2. **`/project/:slug`** - Project Detail Page
   - Dynamic route based on project slug
   - Renders `ProjectPage` component with project data
   - Includes header navigation
   - Auto-scrolls to top on load

3. **`/extra`** - Extra Page
   - Additional content page
   - Personal interests and artwork

## 🚀 Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Starts the development server at `http://localhost:5173`

### Build

```bash
npm run build
```

Creates optimized production build in `dist/` directory

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📝 Adding New Projects

To add a new project:

1. Add project images to `public/images/projects/`
2. Add project data to `src/data/projects.js`:

```javascript
export const projectsData = {
  // ... existing projects
  new_project: {
    slug: "new_project",
    title: "NEW PROJECT",
    category: "Category",
    year: "2025",
    hero: { /* ... */ },
    intro: { /* ... */ },
    gallery: [ /* ... */ ],
    // ... other sections
    nextProject: { /* ... */ }
  }
};
```

3. Add project thumbnail to `Projects.jsx` component's `projectsBase` array
4. Add translations for project tags in `translations.js` if needed

## 🔧 Configuration

### Vite Config (`vite.config.js`)
- React plugin configuration
- Basic Vite setup

### Tailwind Config (`tailwind.config.js`)
- Content paths
- Custom theme extensions
- Color palette
- Typography settings

### ESLint Config (`eslint.config.js`)
- React hooks rules
- React refresh plugin

## 📦 Dependencies

### Production
- `react` & `react-dom` - UI framework
- `react-router-dom` - Routing
- `framer-motion` - Animations
- `lucide-react` - Icons
- `tailwindcss` - Styling
- `class-variance-authority` - Component variants
- `clsx` & `tailwind-merge` - Class name utilities

### Development
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin
- `eslint` - Linting
- `tailwindcss` & `postcss` - CSS processing
- `autoprefixer` - CSS vendor prefixes

## 🎯 Design Philosophy

- **Minimalist & Professional** - Clean design focused on content
- **Performance First** - Optimized images, lazy loading, efficient animations
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation
- **Responsive** - Mobile-first design approach
- **Modern Aesthetics** - Glassmorphism, smooth animations, hardware-inspired effects

## 📄 License

© 2025 MARIO LOURIDO. ALL RIGHTS RESERVED.

---

**Designed and created by Mario Lourido**
