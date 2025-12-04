# Recipe Sharing Platform

A React-based web application for browsing, adding, and sharing recipes.

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- React Router (coming soon)

## Setup Instructions

1. Clone the repository:
```bash
   git clone https://github.com/YOUR-USERNAME/alx-fe-reactjs.git
   cd alx-fe-reactjs/recipe-sharing-platform
```

2. Install dependencies:
```bash
   npm install
```

3. Run the development server:
```bash
   npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure
```
recipe-sharing-platform/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── App.jsx         # Main app component
│   └── index.css       # Global styles with Tailwind
├── public/             # Static assets
└── package.json        # Project dependencies
```

## Features

- Browse recipes
- View recipe details
- Add new recipes
- Responsive design with Tailwind CSS

## Tailwind CSS Setup

This project uses Tailwind CSS for styling. The configuration includes:
- Custom content paths for all React components
- PostCSS with autoprefixer
- JIT (Just-In-Time) mode for optimal performance
