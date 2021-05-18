🔄 1. React Strict Mode (Development Only)
If your app is wrapped in <React.StrictMode> (which it is by default in main.jsx or index.js when created with Create React App or Vite), React intentionally runs some functions twice to help detect unexpected side effects.

🔍 Example from main.jsx:

<React.StrictMode>
  <App />
</React.StrictMode>
In development, React will:

Call functions like useEffect, useState initializers, and even some event handlers twice.
This is only for development, not production.
So if you have:

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Hello, world!");
};
You might see:

Hello, world!
Hello, world!
➡️ Even though you only clicked once!

✅ Solutions:
A. Ignore it (recommended for beginners)

This behavior won’t happen in production, so it's safe to leave it as-is while you're learning.

B. Remove <React.StrictMode> temporarily

Only if it's really disrupting debugging (not recommended long-term):

// main.jsx
// <React.StrictMode>
    <App />
// </React.StrictMode>
But don’t forget: StrictMode is helpful for catching bugs early, so add it back later.

It’s normal in development and you should just accept it (at least for now).

Why?
React Strict Mode is doing its job: helping you catch bugs by simulating what might go wrong with repeated renders.
This only happens in development, not in production — so your users won’t ever see it.
You’re not doing anything wrong — this is just how modern React development works.
When it matters:
If you see real side effects like API calls firing twice or duplicated form submissions (e.g., sending data to a server twice), then you might want to handle those carefully (e.g., with a useEffect cleanup or a flag to prevent double submit).

So in short:

🔹 If it's just a console.log running twice — no worries, totally normal.
🔹 If you see real issues (e.g., data sent twice), then we debug further.