import taynguyen from "@/assets/img/about/taynguyen.jpg";
import myCV from "@/assets/CV_Pham_Trinh_Tay_Nguyen_Internship_Frontend_Developer.pdf";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import logo550 from "../../assets/img/about/550x640.jpg";

const About = () => {
    const sceneEl = useRef(null);
    useEffect(() => {
        if (sceneEl && sceneEl.current) {
            const parallaxInstance = new Parallax(sceneEl.current, {
                relativeInput: true,
                hoverOnly: true,
            });
            parallaxInstance.enable();
            return () => parallaxInstance.disable();
        }
    }, []);

    return (
        <div>
            <div
                className="arlo_tm_section relative"
                id="about"
                style={{ paddingTop: "100px" }}
            >
                <div className="arlo_tm_about_wrapper_all">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>About Me</h3>
                            <span>Về tác giả</span>
                        </div>
                        <div className="arlo_tm_about_wrap">
                            <div className="author_wrap">
                                <div className="leftbox">
                                    <div
                                        ref={sceneEl}
                                        className="about_image_wrap parallax"
                                        data-relative-input="true"
                                    >
                                        <div
                                            className="image layer"
                                            data-depth="0.2"
                                        >
                                            <img src={logo550} alt="550x640" />
                                            <div
                                                className="inner"
                                                data-img-url={taynguyen}
                                                style={{
                                                    backgroundImage: `url(${taynguyen})`,
                                                }}
                                            ></div>
                                        </div>
                                        <div
                                            className="border layer"
                                            data-depth="0.6"
                                        >
                                            <img src={logo550} alt="550x640" />
                                            <div className="inner"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rightbox">
                                    <div className="arlo_tm_mini_title_holder">
                                        <div className="text_typing">
                                            <h4>
                                                Hi there... I'm a{" "}
                                                <TypeAnimation
                                                    sequence={[
                                                        "Student",
                                                        1000,
                                                        "Front-end Developer",
                                                        1000,
                                                        "Back-end Developer",
                                                        1000,
                                                    ]}
                                                    wrapper="span"
                                                    speed={50}
                                                    repeat={Infinity}
                                                    placeholder={undefined}
                                                    onPointerEnterCapture={
                                                        undefined
                                                    }
                                                    onPointerLeaveCapture={
                                                        undefined
                                                    }
                                                />
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="definition">
                                        <p>
                                            Hi! My name is{" "}
                                            <strong>Nguyên</strong> and I
                                            recently graduated from Ho Chi Minh
                                            City University of Technology and
                                            Education (HCMUTE). With a strong
                                            passion for technology and
                                            programming, I have dedicated
                                            significant time to honing my skills
                                            in both front-end and back-end
                                            development. I’m always looking for
                                            ways to improve by learning and
                                            applying new technologies,
                                            particularly in building user
                                            interfaces and optimizing
                                            server-side systems.
                                        </p>
                                        <br />
                                        <p>
                                            Currently, I work as a developer,
                                            involved in designing and developing
                                            various web applications, handling
                                            tasks ranging from user interfaces
                                            to backend systems. I’m eager to
                                            explore new challenges in the tech
                                            industry and look forward to
                                            contributing to innovative projects.
                                        </p>
                                    </div>
                                    <div className="about_short_contact_wrap">
                                        <ul>
                                            <li>
                                                <span>
                                                    <label>Birthday:</label>{" "}
                                                    02.06.2002
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>City:</label>{" "}
                                                    District Binh Thanh, Ho Chi
                                                    Minh
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Study:</label> HCMC
                                                    University of Technology and
                                                    Education – HCMUTE
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Major:</label>{" "}
                                                    Software Engineer (Web
                                                    Programming)
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Github:</label>{" "}
                                                    <a
                                                        href="https://github.com/taynguyen528"
                                                        target="_blank"
                                                    >
                                                        https://github.com/taynguyen528
                                                    </a>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Mail:</label>{" "}
                                                    <a href="pttnguyen528@gmail.com">
                                                        pttnguyen528@gmail.com
                                                    </a>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Phone:</label>{" "}
                                                    <a href="#">0867835779</a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="buttons_wrap">
                                        <ul>
                                            <li>
                                                <a href={myCV} download>
                                                    <span>Download CV</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
