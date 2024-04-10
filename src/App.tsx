import React, {useState} from 'react';
import './App.scss';
import Header from './header/Header';
import Main from './main/Main';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';
import {Preloader} from './common/components/preloader/Preloader';
import {Cv} from './cv/Cv';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="App">
            {!isLoaded && <Preloader/>}
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Cv setIsLoaded={setIsLoaded}/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
