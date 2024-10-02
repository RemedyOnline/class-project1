import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
    return (
        <>
            <div className="featuredItems">
                <div className="featuredItem1">
                    <span className="featureIcon"><FontAwesomeIcon icon={faChalkboardUser} size="2x"/></span>
                    <h2>Learn</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="featuredItem2">
                    <span className="featureIcon"><FontAwesomeIcon icon={faGamepad} size="2x"/></span>
                    <h2>Play</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="featuredItem3">
                    <span className="featureIcon"><FontAwesomeIcon icon={faBurger} size="2x"/></span>
                    <h2>Meal</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </div>
        </>

    )
};

export default Features;