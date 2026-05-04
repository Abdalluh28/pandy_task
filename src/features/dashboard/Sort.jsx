import { useSearchParams } from "react-router-dom";

export default function Sort({ candidatesNumber }) {

    const [, setSearchParams] = useSearchParams();

    const handleSortChange = (e) => {
        const sortValue = e.target.value;
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);
            if (sortValue === "recent") {
                params.delete("sort");
            } else {
                params.set("sort", sortValue);
            }
            return params;
        });
    }

    return (
        <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">Showing {candidatesNumber} candidates</p>
            <div className="w-48">
                <select id="sort" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleSortChange}>
                    <option value="recent">Most recent</option>
                    <option value="experience">Most experienced</option>
                    <option value="best">Best match</option>
                </select>
            </div>
        </div>
    )
}
