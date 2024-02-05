import './Header.scss'
import { Link } from "react-router-dom";
function Header () {
    return (
        <header className='header'>
            KRASIKOV DMITRIY
            <div>
                <nav>
                    <Link to='/about' className='header__link'>О себе</Link>
                    <Link to='/blog' className='header__link'>Блог</Link>
                    <Link to='/contacts' className='header__link'>Контакты</Link>
                </nav>
                <div className='header__language'>
                </div>
            </div>
        </header>
    )
}

export default Header;