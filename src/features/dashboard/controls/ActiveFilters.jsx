import { X } from "lucide-react";
import { useSearchParams } from "react-router-dom";


export default function ActiveFilters() {

    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("search") || "";
    const locationFilter = searchParams.get("location") || "all";
    const experienceFilter = searchParams.get("experience") || "all";
    const availabilityFilter = searchParams.get("availability") || "all";
    const statusFilter = searchParams.get("status") || "all";
    const isActiveFilter = locationFilter !== "all" || experienceFilter !== "all" || availabilityFilter !== "all" || statusFilter !== "all";

    const handleRemoveFilter = (filterType) => {
        // Implementation for removing filters
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);
            if (filterType === "search") {
                params.delete("search");
            } else {
                params.set(filterType, "all");
            }
            return params;
        });
    };

    if (!isActiveFilter && !searchQuery) {
        return null; // don't render anything if there are no active filters
    }

    return (
        <div className="mt-4 flex items-center gap-2 flex-wrap">
            <p className="text-sm text-gray-600 dark:text-gray-400">Active filters</p>
            {searchQuery && (
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                    <span className=''>{`Search: ${searchQuery}`}</span>
                    <button className="hover:bg-blue-100 dark:hover:bg-blue-900 rounded-full p-0.5">
                        <X size={16} onClick={() => handleRemoveFilter("search")} />
                    </button>
                </div>
            )}
            {locationFilter !== "all" && (
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                    <span className=''>{locationFilter}</span>
                    <button className="hover:bg-blue-100 dark:hover:bg-blue-900 rounded-full p-0.5">
                        <X size={16} onClick={() => handleRemoveFilter('location')} />
                    </button>
                </div>
            )}
            {experienceFilter !== "all" && (
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                    <span className=''>{experienceFilter}</span>
                    <button className="hover:bg-blue-100 dark:hover:bg-blue-900 rounded-full p-0.5">
                        <X size={16} onClick={() => handleRemoveFilter('experience')} />
                    </button>
                </div>
            )}
            {availabilityFilter !== "all" && (
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                    <span className=''>{availabilityFilter}</span>
                    <button className="hover:bg-blue-100 dark:hover:bg-blue-900 rounded-full p-0.5">
                        <X size={16} onClick={() => handleRemoveFilter('availability')} />
                    </button>
                </div>
            )}
            {statusFilter !== "all" && (
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                    <span className=''>{statusFilter}</span>
                    <button className="hover:bg-blue-100 dark:hover:bg-blue-900 rounded-full p-0.5">
                        <X size={16} onClick={() => handleRemoveFilter('status')} />
                    </button>
                </div>
            )}
        </div>
    )
}
