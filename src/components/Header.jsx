import React from 'react';

const Header = ({theme, setActiveTheme}) => {
    return (
        <>
            <header>
                <div className="logo">
                    <img src="" alt="" />
                    <span>TaskTracker</span>
                </div>
                <div className="themeSelector">
                    <span onClick={() => setActiveTheme('light')} className={theme === 'light' ? 'activeTheme light' : 'light'}></span>
                    <span onClick={() => setActiveTheme('medium')} className={theme === 'medium' ? 'activeTheme medium' : 'medium'}></span>
                    <span onClick={() => setActiveTheme('dark')} className={theme === 'dark' ? 'activeTheme dark' : 'dark'}></span>
                    <span onClick={() => setActiveTheme('gradient1')} className={theme === 'gradient1' ? 'activeTheme gradient1' : 'gradient1'}></span>
                    <span onClick={() => setActiveTheme('gradient2')} className={theme === 'gradient2' ? 'activeTheme gradient2' : 'gradient2'}></span>
                    <span onClick={() => setActiveTheme('gradient3')} className={theme === 'gradient3' ? 'activeTheme gradient3' : 'gradient3'}></span>
                </div>
            </header>
        </>
    );
};

export default Header;