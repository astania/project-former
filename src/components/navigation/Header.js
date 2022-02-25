import logo from "./ProjectFormerLogo.jpg"

const Header = ({slogan, storeName}) => {
    return <div className="header">
        <img className="logo" src={logo} alt="Project Former Logo" width="300" height="90"></img>
    </div>;
}


export default Header;