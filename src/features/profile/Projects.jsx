
export default function Projects({ candidate }) {

    if (!candidate?.projects || candidate.projects.length === 0) {
        return (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Projects</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">No projects information available.</p>
            </div>
        )
    }

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Projects</p>
            <div className="space-y-6">
                {candidate?.projects?.map((project, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-800">
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                        <div className="flex flex-col justify-between items-start mb-6 gap-2">
                            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{project.name}</p>
                            <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech?.map((tech, index) => (
                                    <span key={index} className="px-3 py-2 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
