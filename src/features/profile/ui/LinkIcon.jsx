export default function LinkIcon({ icon, url }) {
    if (!url) return null;

    return (
        <a href={url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            {icon}
            <span className="sr-only">{url}</span>
        </a>
    )
}
