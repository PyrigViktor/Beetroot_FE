import './Header-style.scss'
function Header () {
    return <header className="header">
                <div className="header__logo"></div>
                <p>Blog name</p>
                <div className="header__nav">
                    <ul className="header__ul">
                        <li className="header__li">test</li>
                        <li className="header__li">test</li>
                        <li className="header__li">test</li>
                        <li className="header__li">test</li>
                        <li className="header__li">test</li>
                    </ul>
                </div>
    </header>
}

export default Header;