import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function EmptyList() {

    const [, setSearchParams] = useSearchParams();

    const handleClearFilters = () => {
        setSearchParams(prev => {
            const params = new URLSearchParams(prev);
            // remove search and all filter params (location, experience, availability, status)
            params.delete("search");
            params.delete("location");
            params.delete("experience");
            params.delete("availability");
            params.delete("status");
            return params
        });
    }


    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">No candidates found</p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Try adjusting your search or filters</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                onClick={handleClearFilters}>Clear filters</button>
        </div>
    )
}
