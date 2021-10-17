import React from "react";


const AboutUs = () => {
    return(
        <>
            <div className="aboutus">
                <div className="aboutus_leftsection">
                    <div className="aboutus_leftsection_profile"></div>
                    <div className="aboutus_leftsection_socialmedia">
                        
                    </div>
                    <div className="aboutus_leftsection_resumebutton"></div>
                </div>

                <div className="aboutus_rightsection">
                    <div className="aboutus_rightsection_aboutme">About Me</div>
                    <div className="aboutus_rightsection_thingsIdo">Things I Do</div>
                    <div className="aboutus_rightsection_techIknow">Tech I know</div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;