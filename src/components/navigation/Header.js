

const Header = ({slogan, storeName}) => {
    return <div className="header">
        <img src="https://imgur.com/a/i3Uzjop" alt="Project Former Logo" width="500" height="150"></img>
        <h1>{storeName}</h1>
        <h4><em>{slogan}</em></h4>
    </div>;
}


export default Header;