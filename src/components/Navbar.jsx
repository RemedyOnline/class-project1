const Navbar = () => {
    return (
        <header>
                <nav>
                    <div className='contactSection'>
                        <div className='contentOnLeft'>
                            <div className='contactItem'>
                                <i></i>
                                <p>Have a question?</p>
                            </div>
                            <div className='contactItem'>
                                <i></i>
                                <p>+233 555 456 789</p>
                            </div>
                            <div className='contactItem'>
                                <i></i>
                                <p>info@remedyonlinegh.com</p>
                            </div>
                        </div>
                        <div className='contentOnRight'>
                            <div className='contactItem'>
                                <i></i>
                                <p>Login</p>
                            </div>
                            <div className='contactItem'>
                                <i></i>
                                <p>Register</p>
                            </div>
                        </div>
                    </div>
                    <div className="mainNav">
                        <div className="logo">
                            <h1>Remedy Online</h1>
                        </div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><label htmlFor="#">Dropdown</label><select name="Dropdown" id="dropdown">
                                
                            <option value="Element">Element</option>
                            <option value="Element">Element</option>
                            <option value="Menu three">Menu three</option>
                            </select>
                            </li>
                            <li><a href="#">Our Staff</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                        <button>Enroll Now</button>
                    </div>
                </nav>
            </header>

    )
};

export default Navbar;