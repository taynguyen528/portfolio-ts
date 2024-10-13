import About from "./content/About";
import Contact from "./content/Contact";
import HomeCV from "./content/Homecv";
import Project from "./content/Project";
import Skill from "./content/Skill";

interface IProps {
    hideLeftPard: boolean;
    setHideLeftPard: (value: boolean) => void;
}

const RightPart = (props: IProps) => {
    return (
        <div>
            <div
                className={
                    props.hideLeftPard
                        ? "arlo_tm_rightpart opened"
                        : "arlo_tm_rightpart"
                }
            >
                <div className="rightpart_inner">
                    <HomeCV />

                    <About />

                    <Skill />

                    <Project />

                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default RightPart;
