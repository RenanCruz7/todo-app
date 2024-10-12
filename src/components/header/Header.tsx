import './Header.css';
import HeaderLogo from "../../assets/HeaderLogo.png"

function Header(){
    return(
        <header className='HeaderContainer'>
            <div className='Logobox'>
                <img className="LogoImg" src={HeaderLogo}></img>
                <h1 className="">Todo List</h1>
            </div>
            <div>
                <input className='Search'></input>
            </div>
        </header>
    )
}

export default Header;