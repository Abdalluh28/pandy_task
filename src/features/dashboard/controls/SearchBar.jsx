import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="flex justify-center items-center relative grow">
            <Search className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input type="text" placeholder="Search by name, skills, or headline..."
                className="w-full pl-10 pr-4 py-3  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:placeholder:text-gray-500" />
        </div>
    )
}
