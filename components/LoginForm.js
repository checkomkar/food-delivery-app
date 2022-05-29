import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Checkbox, Radio, Col, Row } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { validateLogin } from "../store/actions/loginAction";
import { LOGIN, LOGIN_ERROR } from "../store/types";
import styles from "../styles/components/LoginForm.module.scss";
function LoginForm() {
	const dispatch = useDispatch();
	const [form] = Form.useForm();
	const [requiredMark, setRequiredMarkType] = useState("optional");
	const loginUser = useSelector((state) => state.loginUser.user);

	const onRequiredTypeChange = ({ requiredMarkValue }) => {
		setRequiredMarkType(requiredMarkValue);
	};

	const onFinish = async (values) => {
		console.log("Success:", values);
		const response = await loginUserApi(values);
		console.log("from api", response);
		if (response.data.email === values.email) {
			dispatch(
				validateLogin({
					email: response.data.email,
					name: response.data.name,
					id: response.data._id,
				})
			);
		}
	};

	useEffect(() => {
		if (localStorage.getItem("user") !== null) {
			window.location.href = "/";
		}
	}, []);

	const loginUserApi = async (user) => {
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
	};

	useEffect(() => {
		console.log("loginUser state update", loginUser);
		if (loginUser.email) {
			window.location.href = "/";
			localStorage.setItem("user", JSON.stringify(loginUser));
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
				<Form.Item valuePropName="checked">
					<Checkbox>Keep Me logged in</Checkbox>
				</Form.Item>
				<Form.Item>
					<Button
						type="primary"
						className={styles["login-btn"]}
						htmlType="submit"
					>
						Login
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