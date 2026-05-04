import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchBar() {

    const [searchValue, setSearchValue] = useState('');
    const [, setSearchParams] = useSearchParams();
    // use a ref to store the debounce timeout id so that it can be cleared on each new keystroke
    const debounceRef = useRef(null);


    useEffect(() => {
        // clear the previous timeout
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        // set a new timeout
        debounceRef.current = setTimeout(() => {
            setSearchParams(prev => {
                const params = new URLSearchParams(prev);

                // if searchValue is not empty, set the search parameter, otherwise remove it
                if (searchValue && searchValue.length > 0) {
                    params.set("search", searchValue);
                } else {
                    params.delete("search");
                }
                return params
            })
        }, 500);
    }, [searchValue])

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <div className="flex justify-center items-center relative grow">
            <Search className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input type="text" placeholder="Search by name, skills, or headline..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchValue}
                onChange={handleSearch} />
        </div>
    )
}
