
const Header = ({slogan, storeName}) => {
    return <div className="header">
        <h1>{storeName}</h1>
        <h4><em>{slogan}</em></h4>
    </div>;
}


export default Header;