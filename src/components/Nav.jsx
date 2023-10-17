import {BsFillMoonStarsFill, BsSun} from 'react-icons/bs'
import { useState, useEffect } from 'react'
export const Nav = () => {

    const initialDarkMode = localStorage.getItem('dark-mode') || 'light';
    const [darkMode, setDarkMode] = useState(initialDarkMode);

    function toggleDarkMode() {
        const newMode = darkMode === 'dark' ? 'light' : 'dark';
        setDarkMode(newMode);
        localStorage.setItem('dark-mode', newMode);
    }
    
    useEffect(() => {
        if (darkMode === 'dark') {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    }, [darkMode]);

    return (
        <nav className="flex justify-between p-5 sticky bg-main-bg/50 dark:bg-main-bg-dark/50 top-0">
            <h1 className='text-2xl text-main-title dark:text-main-title-dark'>ivargasm</h1>
            <ul className='flex items-center gap-5'>
                {darkMode === 'dark'
                    ? <li><BsSun className='cursor-pointer text-2xl' onClick={toggleDarkMode} /></li>
                    : <li><BsFillMoonStarsFill className='cursor-pointer text-2xl' onClick={toggleDarkMode} /></li>
                }
                <li><a href="#" className='px-4 py-2 bg-btn dark:bg-btn-dark text-btn-text dark:text-btn-dark-text rounded-md hover:bg-hover hover:dark:bg-hover-dark'>Resume</a></li>
            </ul>
        </nav>
    )
}
