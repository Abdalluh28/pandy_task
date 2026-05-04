import SelectFilter from "../components/SelectFilter";

export default function Filters() {
    return (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 grid grid-cols-1 md:grid-cols-5 gap-4">

            {/* Filter by location */}
            <SelectFilter label="Location" options={[
                { label: "All Locations", value: "all" },
                { label: "Cairo", value: "cairo" },
                { label: "Alexandria", value: "alexandria" },
                { label: "Tanta", value: "tanta" },
                { label: "Mansoura", value: "mansoura" },
                { label: "Giza", value: "giza" },
                { label: "Ismailia", value: "ismailia" },
            ]} />

            {/* Filter by years of experience */}
            <SelectFilter label="Years of Experience" options={[
                { label: "All", value: "all" },
                { label: "0-2 years", value: "0-2" },
                { label: "3-5 years", value: "3-5" },
                { label: "6-10 years", value: "6-10" },
                { label: "10+ years", value: "10+" },
            ]} />

            {/* Filter by availability */}
            <SelectFilter label="Availability" options={[
                { label: "All", value: "all" },
                { label: "Immediate", value: "immediate" },
                { label: "Within 1 Month", value: "1-month" },
                { label: "Within 3 Months", value: "3-months" },
                { label: "More than 3 Months", value: "3-plus" },
            ]} />

            {/* Filter by status */} 
            <SelectFilter label="Status" options={[
                { label: "All", value: "all" },
                { label: "Open to work", value: "open-to-work" },
                { label: "Open to offer", value: "open-to-offer" },
                { label: "Not currently looking", value: "not-currently-looking" },
                { label: "Interviewing", value: "interviewing" },
            ]} />

            {/* clear filters */}
            <button className='flex h-fit self-end gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300 justify-center'>
                Clear Filters
            </button>
        </div>
    )
}
