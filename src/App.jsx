import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useTheme from "./context/useTheme";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";

export default function App() {
    const { darkMode } = useTheme();

    // updating the root class based on darkMode
    useEffect(() => {
        const root = document.documentElement;

        if (darkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [darkMode])


    // the main routing configuration
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/profile',
            element: <h1>Profile</h1>
        }
    ])


    return (
        <div className="min-h-screen">
            <AppLayout />
            <div className="bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
                <RouterProvider router={router} />
            </div>
        </div>
    )
}
