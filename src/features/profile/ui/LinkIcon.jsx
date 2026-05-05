import { Link } from "react-router-dom";

export default function LinkIcon({ icon, url }) {
    return (
        <Link to={url} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            {icon}
            <span>{url}</span>
        </Link>
    )
}