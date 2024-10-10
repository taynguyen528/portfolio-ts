import LeftPart from "@/components/LeftPart";
import MobileMenu from "../components/moblie/Menu";
import Preloader from "../components/Preloader";
import RightPart from "@/components/RightPart";

const Portfolio = () => {
    return (
        <div>
            <div className="arlo_tm_wrapper_all">
                <div id="arlo_tm_popup_blog">
                    <div className="container">
                        <div className="inner_popup scrollable"></div>
                    </div>
                    <span className="close">
                        <a href="#"></a>
                    </span>
                </div>

                {/* Preloader */}
                <Preloader />

                <MobileMenu />

                <div className="arlo_tm_content">
                    <LeftPart />

                    <RightPart />

                    <a className="arlo_tm_totop" href="#"></a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
