import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import Logo from "./Logo";
import { Input, Avatar, Badge, Divider } from "antd";
import styles from "../styles/components/Header.module.scss";
import {
	MenuOutlined,
	ShoppingCartOutlined,
	LogoutOutlined,
} from "@ant-design/icons";

const { Search } = Input;
function Header() {
	const url =
		"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
	return (
		<>
			<Row>
				<Col
					span={8}
					xs={{ span: 12 }}
					md={{ span: 8 }}
					lg={{ span: 8 }}
				>
					<Row>
						<Col span={8}>
							<Logo />
						</Col>
						<Col span={16} xs={{ span: 0 }} md={{ span: 16 }}>
							<Search
								placeholder="Search"
								style={{ width: 200 }}
								className={styles["search-input"]}
							/>
						</Col>
					</Row>
				</Col>
				<Col
					span={8}
					offset={8}
					xs={{ span: 0 }}
					md={{ span: 11, offset: 5 }}
				>
					<ul className={styles["menu-items"]}>
						<li className={styles["text-item"]}>
							<span className={styles["text"]}>Restaurants</span>
						</li>
						<li className={styles["text-item"]}>
							<span className={styles["text"]}>Deals</span>
						</li>

						<li className={styles["text-item"]}>
							<Divider type="vertical" />
							<span className={styles["text"]}>My orders</span>
						</li>
						<li className={styles["icons"]}>
							<Row>
								<Col span={8}>
									<Badge color={"#4E60FF"} count={99}>
										<Avatar
											style={{
												backgroundColor: "#4E60FF",
												verticalAlign: "middle",
											}}
											shape="square"
											icon={<ShoppingCartOutlined />}
											size="large"
										/>
									</Badge>
								</Col>
								<Col span={8}>
									<Avatar
										style={{
											backgroundColor: "#4E60FF",
											verticalAlign: "middle",
										}}
										shape="square"
										size={44}
										src={url}
									/>
								</Col>
								<Col span={8}>
									<Avatar
										shape="square"
										icon={<LogoutOutlined />}
										size={44}
										onClick={() => {}}
									/>
								</Col>
							</Row>
						</li>
					</ul>
				</Col>
				<Col xs={{ span: 12 }} md={{ span: 0 }}>
					<Row className={styles["mobile-menu"]}>
						<Col span={8}>
							<Badge color={"#4E60FF"} count={99}>
								<Avatar
									style={{
										backgroundColor: "#4E60FF",
										verticalAlign: "middle",
									}}
									shape="square"
									icon={<ShoppingCartOutlined />}
									size="large"
								/>
							</Badge>
						</Col>
						<Col span={8}>
							<Avatar shape="square" size={44} src={url} />
						</Col>

						<Col span={8}>
							<Divider type="vertical" />
							<Avatar
								shape="square"
								size={44}
								icon={<MenuOutlined />}
							/>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
}

export default Header;
