import {Link,Outlet} from 'react-router-dom';
import './Layout.css'
const Layout = () => {
    return (
        <>
        <header>
            <ul>
                <li><a className='active'><Link to="/">Главная</Link></a></li>
                <li><a><Link to="/posts">Посты</Link></a></li>
                <li><a><Link to="/about">О сайте</Link></a></li>
            </ul>
        </header>
        <main className='block_main'>
            <Outlet/>
        </main>
        </>
    )
}

export {Layout}