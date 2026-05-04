import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Filters from "./Filters";

export default function SearchAndFilter() {

    const [showFilters, setShowFilters] = useState(false);

    const updateFilterVisibility = () => {
        setShowFilters(prev => !prev);
    }

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
                <SearchBar />
                <button className='flex items-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300'
                    onClick={updateFilterVisibility}>
                    <SlidersHorizontal />
                    <span>Filters</span>
                </button>
            </div>
            {showFilters && <Filters />}
        </div>
    )
}
