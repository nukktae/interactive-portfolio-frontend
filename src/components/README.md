# Components Directory Structure

This directory contains all React components organized by purpose and functionality.

## Directory Structure

```
components/
├── layout/              # UI structure and navigation components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── RootLayout.tsx
│   ├── SectionWrapper.tsx
│   └── index.ts
├── visuals/             # Visual effects and 3D components
│   ├── ParticleGame.tsx
│   ├── TechStack3D.tsx
│   ├── MatrixRainEffect.tsx
│   ├── SpaceBackground.tsx
│   ├── BackgroundAnimation.tsx
│   ├── RetroScanlines.tsx
│   ├── LightBackground.tsx
│   ├── RetroBackground.tsx
│   └── index.ts
├── projects/            # Project-specific components
│   ├── makeeat/
│   │   ├── MakeEatScreenCarousel.tsx
│   │   └── index.ts
│   └── rootin/
│       ├── RootinScreenCarousel.tsx
│       └── index.ts
├── shared/              # Shared utility components
│   └── BackgroundAnimation.tsx
└── [other components]   # Feature-specific components
```

## Layout Components (`/layout`)

UI-only layout wrappers and navigation components:
- **Navbar**: Main navigation bar
- **Footer**: Site footer
- **RootLayout**: Root layout wrapper
- **SectionWrapper**: Reusable section wrapper component

**Usage:**
```typescript
import { Navbar, Footer, SectionWrapper } from '@/components/layout';
```

## Visual Effects (`/visuals`)

3D and visual effects components:
- **ParticleGame**: Interactive particle effects
- **TechStack3D**: 3D tech stack visualization
- **MatrixRainEffect**: Matrix-style rain animation
- **SpaceBackground**: Space-themed background
- **BackgroundAnimation**: Animated background effects
- **RetroScanlines**: Retro scanline effects
- **LightBackground**: Light mode background
- **RetroBackground**: Retro-themed background

**Usage:**
```typescript
import { SpaceBackground, TechStack3D } from '@/components/visuals';
```

## Project-Specific Components (`/projects`)

Components specific to individual projects. Each project has its own folder to keep components organized.

### Adding New Project Components

1. Create a new folder named after the project (use lowercase, kebab-case if needed)
   ```bash
   mkdir -p src/components/projects/my-project
   ```

2. Add your project-specific components to that folder
   ```bash
   touch src/components/projects/my-project/MyProjectComponent.tsx
   ```

3. Create an `index.ts` file to export components for easier imports
   ```typescript
   // components/projects/my-project/index.ts
   export { default as MyProjectComponent } from './MyProjectComponent';
   ```

4. Import components using the project folder path
   ```typescript
   import { MyProjectComponent } from '@/components/projects/my-project';
   ```

## Benefits

- **Organization**: Components grouped by purpose (layout, visuals, projects)
- **Scalability**: Easy to add more components without cluttering
- **Maintainability**: Clear separation makes it easier to find and update code
- **No Junk Drawer**: Prevents the directory from becoming a catch-all for random components
