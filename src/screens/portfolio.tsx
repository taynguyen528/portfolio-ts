import LeftPart from "@/components/LeftPart";
import MobileMenu from "../components/moblie/Menu";
import Preloader from "../components/Preloader";
import RightPart from "@/components/RightPart";
import { FloatButton } from "antd";
import { useState } from "react";

const Portfolio = () => {
    const [hideLeftPard, setHideLeftPard] = useState<boolean>(false);
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
                    <LeftPart
                        hideLeftPard={hideLeftPard}
                        setHideLeftPard={setHideLeftPard}
                    />

                    <RightPart
                        hideLeftPard={hideLeftPard}
                        setHideLeftPard={setHideLeftPard}
                    />

                    <FloatButton.BackTop tooltip={<div>Scroll to top</div>} />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
