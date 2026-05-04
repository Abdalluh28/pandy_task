import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useTheme from "./context/useTheme";
import AppLayout from "./layout/AppLayout";

export default function App() {
    const { darkMode } = useTheme();

    useEffect(() => {
        const root = document.documentElement;
        
        if (darkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [darkMode])

    const router = createBrowserRouter([
        {
            path: '/',
            element: <h1>Dashboard</h1>
        },
        {
            path: '/profile',
            element: <h1>Profile</h1>
        }
    ])


    return (
        <div className="min-h-screen">
            <AppLayout />
            <RouterProvider router={router} />
        </div>
    )
}
