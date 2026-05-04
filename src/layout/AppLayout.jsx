import { Moon, Parentheses, Sun } from 'lucide-react';
import useTheme from '../context/useTheme';

export default function AppLayout() {
    const { toggleDarkMode, darkMode } = useTheme();

    return (
        <div className='flex justify-between items-center h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950'>
            <div className='flex items-center justify-center gap-2 dark:text-white sm:ml-30 ml-5'>
                <Parentheses />
                <p className='font-semibold text-xl'>TalentFlow</p>
            </div>
            <button onClick={toggleDarkMode} className='sm:mr-30 mr-5 p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300'>
                {darkMode ? <Sun className='text-gray-400' /> : <Moon className='text-gray-400' />}
            </button>
        </div>
    )
}
