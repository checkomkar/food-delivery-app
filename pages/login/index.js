import React from "react";
import "antd/dist/antd.css";
import styles from "./login.module.scss";
import { Col, Row, Slider } from "antd";
import LoginForm from "../../components/LoginForm";
import Slide from "../../components/Slide";
import Image from "next/image";
import loginBanner from "../../public/cover-image.jpg";
function Login() {
	return (
		<>
			<Row>
				<Col span={11}>
					<Row justify="center">
						<Col span={12}>
							<div className={styles["header-logo"]}>
								<h1>
									Food
									<span>Delivery</span>
								</h1>
							</div>
						</Col>
					</Row>
					<Row justify="center" className={styles["login-title"]}>
						<Col span={12} className={styles["big-text"]}>
							<h1>Login</h1>
							<p className={styles["sub-title"]}>
								Sign in with your data that you entered during
								your registration.
							</p>
						</Col>
					</Row>
					<Row justify="center">
						<Col span={12} className={styles["big-text"]}>
							<LoginForm />
						</Col>
					</Row>
				</Col>
				<Col span={13} className={styles["sample-content"]}>
					<div className="login-banner">
						<Image src={loginBanner} />
						<Slide />
					</div>
				</Col>
			</Row>
		</>
	);
}

export default Login;
