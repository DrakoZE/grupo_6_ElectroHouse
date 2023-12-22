import logo from '../../../assets/images/logo.jpg'

function Navbar() {
    return (
        <nav className="App-header-navbar">
            <img src={logo} alt="logo" className='logo-navbar' />
            <ul className='list-navbar'>
                <li>DASHBOARD ELECTROHOUSE</li>
            </ul>
        </nav>
    )
}

export default Navbar