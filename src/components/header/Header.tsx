import './Header.css';
import HeaderLogo from "../../assets/HeaderLogo.png"

function Header(){
    return(
        <header className='HeaderContainer'>
            <div className='Logobox'>
                <img className="LogoImg" src={HeaderLogo}></img>
                <h1 className="">Todo List</h1>
            </div>
            <div className='SearchContainer'>
                <input className='Search' placeholder='Search Task' />
            </div>
        </header>
    )
}

export default Header;