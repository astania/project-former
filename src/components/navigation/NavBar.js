import { NavLink } from 'react-router-dom'

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "white",
    backgroundColor: "black",
    fontWeight: "bold",
    verticalAlign: "center"
}

const activeStyle = {
    fontWeight: "bolder",
    color: "#0892d0"
}

function NavBar() {
    return (
        <div>
            <NavLink
                activeStyle={activeStyle}
                exact
                style={style}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                activeStyle={activeStyle}
                style={style}
                exact
                to="/forms/new"
            >
                Build
            </NavLink>
            <NavLink
                activeStyle={activeStyle}
                style={style}
                exact
                to="/forms"
            >
                Forms
            </NavLink>
            <NavLink
                activeStyle={activeStyle}
                style={style}
                to="/submissions"
            >
                Submissions
            </NavLink>
        </div>
    )
}

export default NavBar