import React from 'react';
import { createRoot } from 'react-dom/client';
// import AuthProvider from './apis/AuthContextApi';
import App from './App';
import "./global.css";

createRoot(document.querySelector("#root")).render(<App />);

//instead of wrapping the <App/> in the App.jsx we can wrap it here also with the <AuthProvider></AuthProvider>
// createRoot(document.querySelector("#root")).render(
//   <AuthProvider>
//     <App />
//   </AuthProvider>
// );

