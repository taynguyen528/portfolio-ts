import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
    return (
        <div>
            <div className="arlo_tm_section" id="skills">
                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Frontend Skills</h4>
                                </div>
                                <ul>
                                    <li>
                                        Framework/Library: Bootstrap, Antd, MUI,
                                        Redux, React.JS.
                                    </li>
                                    <li>HTML/CSS/SCSS/Responsive.</li>
                                    <li>JavaScript (ES6+), TypeScript.</li>
                                    <li>
                                        Version Control (Git), RESTful
                                        APIs/GraphQL: Interacting with backend
                                        APIs.
                                    </li>
                                </ul>
                            </div>

                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div
                                        className="arlo_tm_progress_wrap"
                                        data-size="small"
                                        data-round="c"
                                        data-strip="off"
                                    >
                                        <div
                                            className="arlo_tm_progress"
                                            data-value="85"
                                            data-color="#000"
                                        >
                                            <span>
                                                <span className="label">
                                                    HTML/CSS/JavaScript
                                                </span>
                                                <span className="number">
                                                    85%
                                                </span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={85}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="arlo_tm_progress"
                                            data-value="85"
                                            data-color="#000"
                                        >
                                            <span>
                                                <span className="label">
                                                    ReactJS
                                                </span>
                                                <span className="number">
                                                    85%
                                                </span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={85}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="arlo_tm_progress"
                                            data-value="85"
                                            data-color="#000"
                                        >
                                            <span>
                                                <span className="label">
                                                    Design UI/UX
                                                </span>
                                                <span className="number">
                                                    85%
                                                </span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={85}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Backend Skills</h4>
                                </div>
                                <ul>
                                    <li>JavaScript (ES6+), TypeScript.</li>
                                    <li>Framework: Express.js, NestJS</li>
                                    <li>Database: MongoDB, MySQL,</li>
                                    <li>
                                        Authentication/Authorization: JWT,
                                        OAuth.
                                    </li>
                                    <li>ORMs: Sequelize, TypeORM, Mongoose.</li>
                                    <li>
                                        Version Control (Git), RESTful APIs.
                                    </li>
                                </ul>
                            </div>

                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div
                                        className="arlo_tm_progress_wrap"
                                        data-size="small"
                                        data-round="c"
                                        data-strip="off"
                                    >
                                        <div
                                            className="arlo_tm_progress"
                                            data-value="80"
                                            data-color="#000"
                                        >
                                            <span>
                                                <span className="label">
                                                    ExpressJS, NestJS
                                                </span>
                                                <span className="number">
                                                    80%
                                                </span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={80}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="arlo_tm_progress"
                                            data-value="80"
                                            data-color="#000"
                                        >
                                            <span>
                                                <span className="label">
                                                    Database
                                                </span>
                                                <span className="number">
                                                    80%
                                                </span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={80}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
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

export default Skill;
