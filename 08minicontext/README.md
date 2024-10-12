# React Context API Example

This project demonstrates the use of the **React Context API** for managing global state in a React application. It provides a simplified flow of how components share and update the `user` state using context.


### Flow of the Code

1. **App Setup (`main.jsx` & `App.jsx`):**
   - In `main.jsx`, the root of the React app is created using `createRoot` and rendered inside a `<StrictMode>` block. The `App` component is the main entry point of the application.
   - In `App.jsx`, the `UserContextProvider` wraps around the `Login` and `Profile` components. This provider is responsible for sharing the `user` state with any component that needs it.

2. **Creating Context (`UserContext.js`):**
   - `UserContext` is created using `React.createContext()`. This is the context object that any component within the provider can access.

3. **Providing Context (`UserContextProvider.jsx`):**
   - `UserContextProvider` manages the `user` state using the `useState` hook. The state (`user` and `setUser`) is passed into the `UserContext.Provider` to make it available to other components.
   - Any component wrapped inside `UserContextProvider` will have access to the `user` state and the `setUser` function.

4. **Using Context in `Login.jsx`:**
   - The `Login` component uses `useContext(UserContext)` to access `setUser`. This allows the component to update the `user` state when the login form is submitted.
   - Upon submitting the form, the `handleSubmit` function calls `setUser({ username, password })`, updating the `user` object.

5. **Using Context in `Profile.jsx`:**
   - The `Profile` component uses `useContext(UserContext)` to access the `user` state.
   - If no user is logged in (`user` is null), the component shows "Please Login". If the user is logged in, it displays a welcome message with the username.

### Why Use the Context API?

Without the Context API, passing down state like the `user` object requires "prop drilling," which means manually passing props through each level of the component tree. This can make the code messy and harder to manage.

The Context API simplifies this by allowing components to access shared state directly from the context without needing to pass it down explicitly. This is especially helpful for managing global state like authentication, themes, or language preferences.

### Summary

- The **Context API** is used to manage and share state across components without passing props.
- The **Provider** (`UserContextProvider`) defines the state and provides it to components.
- The **Consumer** (`Login`, `Profile`) uses the `useContext` hook to access and modify the shared state.

This approach makes it easier to manage global state, reduce prop drilling, and keep the code clean and maintainable.
