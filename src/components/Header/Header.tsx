import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import DarkModeToggle from "react-dark-mode-toggle";

const links = [
    {
        to: 'articles',
        label: 'Articles'
    },
    {
        to: 'tools',
        label: 'Tools'
    },
    {
        to: 'tweets',
        label: 'Tweets'
    },
    {
        to: 'examples',
        label: 'Examples'
    },
    {
        to: 'podcasts',
        label: 'Podcasts'
    },
]

let initialDarkMode = false;
const enableDarkMode = () => {
    document.documentElement.classList.add('mode-dark')
}
  
const disableDarkMode = () => {
    document.documentElement.classList.remove('mode-dark');
}

if (window.matchMedia) {
    const prefersDark = '(prefers-color-scheme: dark)';
    if (window.matchMedia(prefersDark).matches) {
        enableDarkMode();
        initialDarkMode = true;
    }
    window.matchMedia(prefersDark).addListener(e => {
        if (e.matches) {
            enableDarkMode();
        } else {
            disableDarkMode()
        }
    })
}

export const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => initialDarkMode);
    useEffect(() => {
        if (isDarkMode) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }, [isDarkMode]);
    return (
        <header className="bg-gray-900 dark:bg-gray-800 p-4">
            <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row relative">
                <Link
                    className="font-bold text-white mb-2 sm:mb-0"
                    to='/'
                >
                    Dark Mode
                </Link>
                <div style={{position: 'absolute', top: 0, right: '50%', left: '50%', marginLeft: '-2rem'}}>
                    <DarkModeToggle
                        onChange={setIsDarkMode}
                        checked={isDarkMode}
                        size={60}
                    />
                </div>
                <nav className="sm:ml-auto">
                    {links.map((link, index) => (
                        <Link
                            className={`text-white ${index === 0 ? '' : 'ml-2'} pb-2`}
                            activeClassName="border-b-2 border-gray-100"
                            to={`/${link.to}`}
                            key={index}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
};