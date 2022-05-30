import React from "react";
import "antd/dist/antd.css";
import styles from "./login.module.scss";
import { Col, Row } from "antd";
import LoginForm from "../../components/LoginForm";
import Slide from "../../components/Slide";
import Image from "next/image";
import loginBanner from "../../public/cover-image.jpg";
import Logo from "../../components/Logo";
function Login() {
	return (
		<>
			<Row style={{ minHeight: "100vh", overflow: "auto" }}>
				<Col span={11} xs={{ span: 24 }} md={{ span: 12 }}>
					<div className={styles["mobile-container"]}>
						<Row justify="center">
							<Col span={12} xs={24} md={12}>
								<Logo />
							</Col>
						</Row>
						<Row justify="center" className={styles["login-title"]}>
							<Col
								span={12}
								xs={24}
								md={12}
								className={styles["big-text"]}
							>
								<h1>Login</h1>
								<p className={styles["sub-title"]}>
									Sign in with your data that you entered
									during your registration.
								</p>
							</Col>
						</Row>
						<Row justify="center">
							<Col
								span={12}
								xs={24}
								md={12}
								className={styles["big-text"]}
							>
								<LoginForm />
							</Col>
						</Row>
					</div>
				</Col>
				<Col
					span={13}
					className={styles["sample-content"]}
					xs={{ span: 0 }}
					md={{ span: 12 }}
				>
					<div className={styles["login-banner"]}>
						<div className={styles["img-container"]}>
							<Image
								className={styles["promo-img"]}
								src={loginBanner}
								layout="intrinsic"
								//width={}
							/>
						</div>

						<Slide />
					</div>
				</Col>
			</Row>
		</>
	);
}

export default Login;
