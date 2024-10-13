import { TypeAnimation } from "react-type-animation";
import tayNguyen from "../../assets/img/hero/TN.png";

const HomeCV = () => {
    const handleScrollToAbout = () => {
        const section = document.querySelector("#about");
        if (section) {
            section?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <div>
            <div className="arlo_tm_section" id="home">
                <div className="arlo_tm_hero_header_wrap">
                    <div className="arlo_tm_universal_box_wrap">
                        <div className="bg_wrap">
                            <div
                                className="overlay_image hero jarallax"
                                data-speed="0.1"
                            ></div>
                            <div className="overlay_color hero"></div>
                        </div>
                        <div className="content hero">
                            <div className="inner_content">
                                <div className="image_wrap">
                                    <img src={tayNguyen} alt="img" />
                                </div>
                                <div className="name_holder">
                                    <h3>
                                        Phạm Trịnh Tây <span>Nguyên</span>
                                    </h3>
                                </div>
                                <div className="text_typing">
                                    <p>
                                        I'm a{" "}
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
                                            onPointerEnterCapture={undefined}
                                            onPointerLeaveCapture={undefined}
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="arlo_tm_arrow_wrap bounce anchor">
                            <a
                                href="#"
                                onClick={() => {
                                    handleScrollToAbout();
                                }}
                            >
                                <i className="xcon-angle-double-down"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCV;
