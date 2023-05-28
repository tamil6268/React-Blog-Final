import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <ul type="none" id="header-nav" >
                <li><Link id="decNone" to="/">Home</Link></li>
                <li><Link id="decNone" to="/bollywood">Bollywood</Link></li>
                <li><Link id="decNone" to="/technology">Technology</Link></li>
                <li><Link id="decNone" to="/hollywood">Hollywood</Link></li>
                <li><Link id="decNone" to="/fitness">Fitness</Link></li>
                <li><Link id="decNone" to="/food">Food</Link></li>
            </ul>
        </div>
    )
}
export default NavBar;