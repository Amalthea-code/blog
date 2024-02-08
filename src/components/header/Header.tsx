import './Header.scss'
import { Link } from "react-router-dom";
export default function Header () {
    return (
        <header className='header'>
            <div className='header__logo'>.KRASIKOV DMITRIY</div>
            <div>
                <nav>
                    <Link to='/about' className='header__link'>.about</Link>
                    <Link to='/blog' className='header__link'>.blog</Link>
                    <Link to='/contacts' className='header__link'>.contacts</Link>
                </nav>
                <div className='header__language'>
                </div>
            </div>
        </header>
    )
}