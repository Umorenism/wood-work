// main.tsx
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "../src/context/AuthProvider";
import UserProfile from "./component/UserProfile.tsx";
import WithdrawalPage from "./component/Withdrawalpage.tsx";
import ExchangeTaskPage from "./component/Task.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <UserProfile />,
      },
      {
        path: "/withdrawal",
        element: <WithdrawalPage />,
      },
      {
        path: "/exchange",
        element: <ExchangeTaskPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
