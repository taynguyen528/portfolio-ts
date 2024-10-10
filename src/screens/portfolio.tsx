import Leftpart from "../components/Leftpart";
import MobileMenu from "../components/moblie/Menu";
import Preloader from "../components/Preloader";
import Rightpart from "../components/Rightpart";

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
                    <Leftpart />

                    <Rightpart />

                    <a className="arlo_tm_totop" href="#"></a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
