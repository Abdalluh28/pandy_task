
export default function About({ candidate }) {

    if (!candidate?.summary) {
        return (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">About</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">No summary information available.</p>
            </div>
        )
    }

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">About</p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{candidate?.summary}</p>
        </div>
    )
}
