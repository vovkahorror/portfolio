import React, {useEffect, useState} from 'react';
import './App.scss';
import Header from './header/Header';
import Main from './main/Main';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';
import {Preloader} from './common/components/preloader/Preloader';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const setFavicon = (color: string) => {
            const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
            if (favicon) {
                favicon.href = `/path/to/${color}-favicon.ico`; // Замініть шлях на шлях до вашого фавікону
            }
        };

        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleColorSchemeChange = (e: MediaQueryListEvent | MediaQueryList) => {
            const isDarkMode = e.matches;
            debugger
            if (isDarkMode) {
                setFavicon('dark'); // Змінюємо фавікон на фавікон для темної теми
            } else {
                setFavicon('light'); // Змінюємо фавікон на фавікон для світлої теми
            }
        };

        handleColorSchemeChange(darkModeMediaQuery);
        darkModeMediaQuery.addEventListener('change', handleColorSchemeChange as (e: Event) => void);

        return () => {
            darkModeMediaQuery.removeEventListener('change', handleColorSchemeChange as (e: Event) => void);
        };
    }, []);

    return (
        <div className="App">
            {!isLoaded && <Preloader/>}
            <Header/>
            <Main setIsLoaded={setIsLoaded}/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
