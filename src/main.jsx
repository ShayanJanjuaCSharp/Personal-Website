import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Hobbies from "./pages/Hobbies.jsx";
import Contact from "./pages/Contact.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/hobbies",
    element: <Hobbies />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
