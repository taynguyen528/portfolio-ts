import { useState } from "react";
import { Button, Modal } from "antd";
import { BsArrowRight, BsShopWindow } from "react-icons/bs";
const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const dataProjects = [
        {
            image: <BsShopWindow size={50} color={"#2bebfd"} />,
            title: "MERN-Store",
            shortDescription:
                "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
            detail: {
                description: "",
                technology: "",
                member: "",
                role: "",
                github: "",
            },
        },
        {
            image: "img/svg/camera-diaphragm.svg",
            title: "Grocery-Ecommerce",
            shortDescription:
                "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
            detail: {
                description: "",
                technology: "",
                member: "",
                role: "",
                github: "",
            },
        },
        {
            image: "img/svg/camera-diaphragm.svg",
            title: "Grocery-Ecommerce",
            shortDescription:
                "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
            detail: {
                description: "",
                technology: "",
                member: "",
                role: "",
                github: "",
            },
        },
        {
            image: "img/svg/camera-diaphragm.svg",
            title: "Grocery-Ecommerce",
            shortDescription:
                "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
            detail: {
                description: "",
                technology: "",
                member: "",
                role: "",
                github: "",
            },
        },
        {
            image: "img/svg/camera-diaphragm.svg",
            title: "Grocery-Ecommerce",
            shortDescription:
                "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
            detail: {
                description: "",
                technology: "",
                member: "",
                role: "",
                github: "",
            },
        },
    ];

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
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
                                        <li>
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
