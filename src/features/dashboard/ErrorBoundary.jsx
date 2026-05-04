import { TriangleAlert } from "lucide-react";

export default function ErrorBoundary({ error, refetch }) {
    return (
        <div className="max-w-md w-full bg-white dark:bg-gray-900 rounded-2xl border border-red-200 dark:border-red-900 p-8 text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-950 rounded-full mx-auto mb-4 flex items-center justify-center">
                <TriangleAlert className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Something went wrong</p>
            <p className='text-gray-600 dark:text-gray-400 mb-6'>Error: {error.message}</p>
            <button onClick={refetch} className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
                Try again
            </button>
        </div>
    )
}
