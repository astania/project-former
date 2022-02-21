import { NavLink } from 'react-router-dom'

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
}

const activeStyle = {
    fontWeight: "bolder",
    color: "red"
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
                to="/"
            >
                Build a Form
            </NavLink>
            <NavLink
                activeStyle={activeStyle}
                style={style}
                to="/"
            >
                View Form
            </NavLink>
            <NavLink
                activeStyle={activeStyle}
                style={style}
                to="/"
            >
                Submissions
            </NavLink>
        </div>
    )
}

export default NavBar