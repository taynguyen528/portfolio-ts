import { useState } from "react";
import { Modal } from "antd";
import { BsArrowRight, BsShopWindow } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { SiJira } from "react-icons/si";
import { BiMoviePlay } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";

interface IProject {
    image: JSX.Element;
    title: string;
    shortDescription: string;
    detail: {
        description: string;
        technology: string;
        member: string;
        role: string;
        github: string;
    };
}

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataDetail, setDataDetail] = useState<IProject | null>(null);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setDataDetail(null);
    };

    const dataProjects: IProject[] = [
        {
            image: <CiShop size={50} color={"#2bebfd"} />,
            title: "Grocery-Ecommerce",
            shortDescription: "User interface of a basic sales website.",
            detail: {
                description: "",
                technology: "Front-end: ReactJS(JavaScript)",
                member: "1",
                role: "Developer",
                github: "https://github.com/taynguyen528/MERN_Store",
            },
        },
        {
            image: <BsShopWindow size={50} color={"#2bebfd"} />,
            title: "MERN-Store",
            shortDescription: "Build a basic clothing website.",
            detail: {
                description:
                    "User Interface of a basic sales website, this project aims to help improve HTML, CSS(SCSS), JS, UI/UX Design capabilities, data is only symbolic (hard code)",
                technology: "HTML, CSS, JS",
                member: "1",
                role: "Developer",
                github: "https://github.com/taynguyen528/Grocery-Ecommerce",
            },
        },

        {
            image: <SiJira size={50} color={"#2bebfd"} />,
            title: "Project Jira",
            shortDescription: "Jira clone task management project",
            detail: {
                description:
                    "Create a task management project for learning purposes inspired by Jira",
                technology: "Front-end: ReactJS(TypeScript)",
                member: "2",
                role: "Developer",
                github: "https://github.com/taynguyen528/project-jira",
            },
        },
        {
            image: <BiMoviePlay size={50} color={"#2bebfd"} />,
            title: "Project Movie",
            shortDescription: "Movie ticket booking website",
            detail: {
                description:
                    "Movie ticket booking website inspired by CGV website",
                technology: "Front-end: ReactJS(TypeScript)",
                member: "1",
                role: "Developer",
                github: "https://github.com/taynguyen528/project-movie",
            },
        },
        {
            image: <FaTwitter size={50} color={"#2bebfd"} />,
            title: "We Connect",
            shortDescription: "Social networking site",
            detail: {
                description:
                    "Social networking website with basic features for users, inspired by Twitter",
                technology: "Backend(ExpressJS), Database: MongoDB",
                member: "1",
                role: "Developer",
                github: "https://github.com/taynguyen528/we-connect",
            },
        },
        {
            image: <BsPersonWorkspace size={50} color={"#2bebfd"} />,
            title: "Hire Me",
            shortDescription: "Job recruitment website for developer",
            detail: {
                description:
                    "The job recruitment website for programmers is inspired by major recruitment sites such as Topdev, ITViec,....",
                technology: "Backend(NestJS), Database: MongoDB",
                member: "1",
                role: "Developer",
                github: "https://github.com/taynguyen528/hire-me",
            },
        },
    ];

    return (
        <div>
            <Modal
                title={
                    dataDetail && dataDetail.title
                        ? `Dự án ${dataDetail.title}`
                        : ""
                }
                open={isModalOpen}
                onOk={() => handleCloseModal()}
                onCancel={() => handleCloseModal()}
                footer={null}
                maskClosable={false}
            >
                {dataDetail && (
                    <ul style={{ fontSize: "18px", padding: "0px 20px" }}>
                        <li>Description: {dataDetail.detail.description}</li>
                        <li>Technology: {dataDetail.detail.technology}</li>
                        <li>Member: {dataDetail.detail.member}</li>
                        <li>Role: {dataDetail.detail.role}</li>
                        <li>
                            Github:{" "}
                            <a href={dataDetail.detail.github} target="_blank">
                                {dataDetail.detail.github}
                            </a>
                        </li>
                    </ul>
                )}
            </Modal>
            <div className="arlo_tm_section" id="project">
                <div className="arlo_tm_services_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>Amazing Project</h3>
                            <span>My project list</span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProjects.map((item, index) => {
                                    return (
                                        <li key={`${index}-project`}>
                                            <div className="inner">
                                                <div className="icon">
                                                    {item.image}
                                                </div>
                                                <div className="title_service">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="text">
                                                    <p>
                                                        {item.shortDescription}
                                                    </p>
                                                </div>
                                                <div
                                                    className="view_detail"
                                                    style={{ padding: "5px 0" }}
                                                >
                                                    <span
                                                        onClick={() => {
                                                            setDataDetail(item);
                                                            setIsModalOpen(
                                                                true
                                                            );
                                                        }}
                                                        style={{
                                                            cursor: "pointer",
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                        }}
                                                    >
                                                        <BsArrowRight />{" "}
                                                        &nbsp;Xem Chi Tiết
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
