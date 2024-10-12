# React Theme Toggle with Context API and TailwindCSS

This project is a simple React application that implements a light and dark theme toggle feature using **React Context API** and **TailwindCSS** for styling. The project shows how to manage and switch themes (light or dark) across the entire application and apply TailwindCSS utility classes to change the theme dynamically.

## Project Structure

- **Main.jsx**: Entry point of the React app, renders the `App` component into the DOM.
- **App.jsx**: Main application component, sets up the theme state and uses `ThemeProvider` to pass theme data to child components.
- **Theme.jsx**: Contains the context logic for managing theme values and providing functions to switch between light and dark themes.
- **Card.jsx**: A UI component that displays a product card. It responds to theme changes by applying dark or light classes.
- **ThemeBtn.jsx**: A toggle button component that allows users to switch between light and dark themes.

## Context API

### What is Context API?

The **Context API** in React allows you to share data across components without passing props down manually at every level. It creates a global data layer that any component can access.

### Why use Context API?

- To avoid "prop drilling" (passing props through many levels of components).
- To share global state easily (like user authentication, themes, or language settings).

### How is it used in this project?

- We create a `ThemeContext` using `createContext` in `Theme.jsx`.
- We use `ThemeProvider` to wrap the component tree (`App` component) and provide access to `themeMode` (light or dark) and functions to switch themes (`lightTheme` and `darkTheme`).
- Components like `ThemeBtn` and `Card` can then access this theme data using `useTheme()`.

## TailwindCSS Setup and Dynamic Theme Change

### TailwindCSS Configuration

We use **TailwindCSS** for styling the application, and the `darkMode` option is set to `"class"` in `tailwind.config.js`. This enables the use of the `dark` class to apply dark mode styles.

```js
// tailwind.config.js
darkMode: 'class',  // Enables switching between light and dark mode using the 'class' strategy


# Understanding Context API

The Context API is a built-in feature of React that helps manage global state and pass data to components without having to pass props through each level of the component tree.

## Key Points

### Why Use Context API?
- **Avoid Prop Drilling**: It prevents passing props down through multiple levels of components, making the code cleaner and easier to manage.
- **Global State Management**: It allows sharing global data, like the theme or user settings, across many components without having to manually pass props.


