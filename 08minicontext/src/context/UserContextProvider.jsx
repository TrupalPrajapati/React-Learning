import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=> {

    const [user, setUser] = useState(null)

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;



// Notes:
// In your `UserContextProvider` component, the `children` prop is used to wrap other components and give them access to the context (in this case, `user` and `setUser`). This allows any component inside `UserContextProvider` to consume the context.

// ### Why Use `children`?

// The `children` prop in React represents the child components or elements that are passed between the opening and closing tags of a component. In your case:

// ```jsx
// <UserContextProvider>
//   <h1>React by Trupal</h1>
//   <Login />
//   <Profile />
// </UserContextProvider>
// ```

// Here, `<h1>React by Trupal</h1>`, `<Login />`, and `<Profile />` are all **children** of `UserContextProvider`. Using `{children}` inside the `UserContextProvider` ensures that these child components are rendered and can access the `UserContext`.

// ### What Happens If You Don’t Use `children`?

// If you don't use `children` in `UserContextProvider`, any components nested inside `<UserContextProvider>` won't be rendered. For example:

// ```jsx
// <UserContextProvider>
//   <Login />
//   <Profile />
// </UserContextProvider>
// ```

// Without `{children}`, the `Login` and `Profile` components would not appear because you are not telling `UserContextProvider` to render its children. Your code would look like this without `children`:

// ```jsx
// const UserContextProvider = () => {
//   const [user, setUser] = useState(null);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {/* No children here, so nothing will be rendered */}
//     </UserContext.Provider>
//   );
// };
// ```

// In this case, nothing inside the `UserContextProvider` would be rendered, and you would not be able to use `Login`, `Profile`, or any other components.

// ### Summary:
// - **With `children`:** Allows you to wrap other components inside `UserContextProvider` so that they can access the context.
// - **Without `children`:** The child components will not be rendered, and the context will be essentially useless because no components can consume it.

// Using `children` is essential when you want to make the context available to any child component within your provider.