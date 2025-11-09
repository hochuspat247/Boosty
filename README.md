# Boosty - Landing Page

Modern React TypeScript landing page for Boosty platform with multi-language support (English and Japanese).

## Features

- 🎨 **Modern Design** - Clean and responsive design with smooth animations
- 🌐 **Multi-language Support** - English and Japanese translations
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for optimal performance
- 🎯 **React Router** - Language-based routing (`/JAP` for Japanese version)
- 🎭 **Smooth Animations** - Interactive elements with hover effects and transitions

## Tech Stack

- **React 19** - Latest React version
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **CSS3** - Modern styling with animations

## Project Structure

```
src/
├── components/          # Reusable components
│   └── Header/         # Site header with navigation
├── sections/           # Page sections
│   ├── Hero/           # Hero section
│   ├── HowItWorks/     # How it works section
│   ├── Advantages/     # Advantages section
│   ├── Introduction/   # Introduction section
│   ├── GetAtla/        # Get $ATLA section
│   ├── ReferralCabinet/# Referral cabinet section
│   ├── Pioners/        # Pioneers/Community section
│   ├── Join/           # Join section
│   └── Footer/         # Footer section
├── hooks/              # Custom React hooks
│   ├── useLanguage.ts  # Language detection hook
│   └── useMocks.ts     # Mock data hook
├── contexts/           # React contexts
│   └── LanguageContext.tsx
├── styles/             # Global styles
└── types/             # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hochuspat247/Boosty.git
cd Boosty
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
   - English version: `http://localhost:5173/`
   - Japanese version: `http://localhost:5173/JAP`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Language Support

The application supports two languages:

- **English** (default) - Available at root path `/`
- **Japanese** - Available at `/JAP` path

Language detection is automatic based on the URL path. All text content is stored in mock files (`mock.ts` for English, `mock.ja.ts` for Japanese) within each section's folder.

## Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: 320px - 767px
  - Small mobile: 320px - 375px
  - Medium mobile: 375px - 425px
  - Large mobile: 425px - 767px

## Sections

1. **Hero** - Main landing section with CTA button
2. **How It Works** - Step-by-step guide
3. **Advantages** - Key benefits and features
4. **Introduction** - Platform introduction
5. **Get $ATLA** - Token purchase section
6. **Referral Cabinet** - Referral program details
7. **Pioners** - Community testimonials
8. **Join** - Registration section
9. **Footer** - Site footer with links and social media

## Deployment

Build the project for production:

```bash
npm run build
```

The `dist` folder will contain the production-ready files that can be deployed to any static hosting service.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Contact

For questions or support, please contact the repository owner.

---

Built with ❤️ using React and TypeScript
