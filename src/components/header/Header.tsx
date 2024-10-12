import './Header.css';
import HeaderLogo from "../../assets/HeaderLogo.png"

function Header(){
    return(
        <header>
            <div className='HeaderContainer'>
                <img className="LogoImg" src={HeaderLogo}></img>
                <h1 className="">Todo List</h1>
            </div>
        </header>
    )
}

export default Header;