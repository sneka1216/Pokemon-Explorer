# 🧭 Pokémon Explorer

A responsive and visually appealing web application built with **Next.js** that lets users explore Pokémon using data from the [PokeAPI](https://pokeapi.co). Search, filter, and view detailed information about your favorite Pokémon.

---

## 🚀 Features

- 🔍 **Search Functionality** – Filter Pokémon by name in real-time
- 📃 **Homepage Listing** – Paginated/infinite scroll listing of all Pokémon
- 📄 **Detail Pages** – Dynamic pages showing:
  - Images (with a slider)
  - Height & Weight
  - Abilities (accordion)
  - Types, Stats, Moves
- 🧭 **Back Button** with Pikachu logo (breadcrumb-style)
- 📱 **Fully Responsive** – Optimized for desktop and mobile
- ⚡ **Server-side Rendering (SSR)** for optimal performance

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Slick Carousel](https://react-slick.neostack.com/) for Pokémon image sliders
- [PokeAPI](https://pokeapi.co) for live Pokémon data

---

/app
  └── page.tsx                # Homepage (SSR)
  └── details-page/[id]/      # Dynamic Pokémon detail pages

/components/
  ├── MainNavBar.tsx
  ├── PokemonListing.tsx
  ├── PokemonSlider.tsx
  ├── AbilitiesAccordion.tsx
  └── BackHomeButton.tsx

/lib/utils/api.ts             # Fetch Pokémon list/details
/public/assests/              # Pikachu logo etc.


## 📦 Installation
# Clone the repo
git clone https://github.com/your-username/pokemon-explorer.git
cd pokemon-explorer

# Install dependencies
npm install
# Pokemon-Explorer

# Start the development server
npm run dev

# Open in browser
http://localhost:3000
