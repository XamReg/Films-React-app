import {Outlet,NavLink} from 'react-router-dom';
import layStyles from './style/Layout.module.css'
import { useState } from 'react';
// const setActive = ({isActive}) => isActive ? layStyles.activeLink : layStyles.serLi;
const Layout = ({isActive}) => {
    const [active, setActive] = useState({isActive})
    console.log(active)
    return (
        <>
        <nav className={layStyles.styke}>
            <ul className={layStyles.main}>
                <li><p className={layStyles.blockNavig}><NavLink className={setActive} to="/">Главная</NavLink></p></li>
                <li><p className={layStyles.blockNavig}><NavLink className={setActive} to="/posts">Посты</NavLink></p></li>
                <li><p className={layStyles.blockNavig}><NavLink className={setActive} to="/about">О сайте</NavLink></p></li>
            </ul>
        </nav>
        <main className={layStyles.block_main}>
            <div className={layStyles.block_content}>
                <Outlet/>
            </div>
        </main>
        </>
    )
}

export {Layout}