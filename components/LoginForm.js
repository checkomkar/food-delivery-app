import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Checkbox, Radio, Col, Row, Spin } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import getCookie from "../utils/getCookie";
import {
	validateLogin,
	loggingIn,
	loginError,
} from "../store/actions/loginAction";
import styles from "../styles/components/LoginForm.module.scss";
import Router from "next/router";
function LoginForm() {
	const dispatch = useDispatch();
	const [form] = Form.useForm();
	const [requiredMark, setRequiredMarkType] = useState("optional");
	const [error, setError] = useState({ hasError: false, msg: "" });
	const loginUser = useSelector((state) => state.loginUser.user);
	const isLoading = useSelector((state) => state.loginUser.loading);

	const onRequiredTypeChange = ({ requiredMarkValue }) => {
		setRequiredMarkType(requiredMarkValue);
	};

	const onFinish = async (values) => {
		console.log("Success:", values);
		const response = await loginUserApi(values);
		console.log("from api", response);
		if (response?.data?.email === values.email) {
			dispatch(
				validateLogin({
					email: response.data.email,
					name: response.data.name,
					id: response.data.id,
				})
			);
		} else {
			setError({ hasError: true, msg: "Error in login" });
		}
	};

	useEffect(() => {
		let loggedIn = getCookie("login_cookiename");
		// console.log("loggedIn", loggedIn, loginUser.name);
		if ((loggedIn === undefined || loggedIn == "") && !loginUser.name)
			return;
		else Router.push("/");
	}, []);

	const loginUserApi = async (user) => {
		dispatch(loggingIn());
		try {
			const currentUrl = window.location.origin;
			const url = `${currentUrl}/api/login`;
			const rawResponse = await fetch(url, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});

			const content = await rawResponse.json();
			return content;
		} catch (err) {
			setError({ hasError: true, msg: "Error in login" });
			dispatch(loginError());
		}
	};

	const goHome = () => {
		//window.location.href = "/";
		Router.push("/");
		// localStorage.setItem(
		// 	"user",
		// 	JSON.stringify({ email: "test@gmail.com", name: "test" })
		// );
	};

	useEffect(() => {
		console.log("loginUser state update", loginUser);
		if (loginUser.name) {
			sessionStorage.setItem("user", JSON.stringify(loginUser));
			Router.push("/");
		}
	}, [loginUser]);

	return (
		<>
			<Form
				form={form}
				layout="vertical"
				initialValues={{
					requiredMarkValue: requiredMark,
				}}
				onValuesChange={onRequiredTypeChange}
				requiredMark={requiredMark}
				onFinish={onFinish}
			>
				<Form.Item label="Email" name="email" required>
					<Input
						className={styles["input-element"]}
						placeholder="name@example.com"
					/>
				</Form.Item>
				<Form.Item label="Password" name="password" required>
					<Input.Password
						placeholder="min. 8 characters"
						className={styles["input-element"]}
					/>
				</Form.Item>
				{error.hasError && (
					<p className={styles["error-msg"]}>
						{error.msg}
						<span className={styles["go-home"]} onClick={goHome}>
							Go to home anyway? (Added only for demo)
						</span>
					</p>
				)}
				<Form.Item valuePropName="checked">
					<Checkbox>Keep Me logged in</Checkbox>
				</Form.Item>
				<Form.Item>
					<Button
						type="primary"
						className={styles["login-btn"]}
						htmlType="submit"
						disabled={isLoading}
					>
						Login{" "}
						<span className={styles["spinner-loading"]}>
							<Spin spinning={isLoading} />
						</span>
					</Button>
				</Form.Item>
			</Form>
			<Row>
				<Col span={24} className={styles["forgot-password"]}>
					<a>Forgot password</a>
				</Col>
			</Row>
			<Row>
				<Col span={24} className={styles["signup"]}>
					Don't have an account? <a>Sign up</a>
				</Col>
			</Row>
		</>
	);
}

export default LoginForm;
