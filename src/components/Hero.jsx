import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
    return (
        <section className="heroSection">
        <div className="heroContent">
            <div className="heroText">
                <h1>Learning Center for Your Kids</h1>
                <p>Welcome bro! <span>Remedy Online</span> is your ultimate online learning platform to help keep your wards upright</p>
                <button>Enroll Now</button>
            </div>
            <div>
                <span ><FontAwesomeIcon icon={faPlay}  size="2x" className="heroButton"/></span>
            </div>
        </div>
        </section>
    )
};

export default Hero;