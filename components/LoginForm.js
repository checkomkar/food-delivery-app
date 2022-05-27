import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Radio, Col, Row } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import styles from "../styles/components/LoginForm.module.scss";
function LoginForm() {
	const [form] = Form.useForm();
	const [requiredMark, setRequiredMarkType] = useState("optional");

	const onRequiredTypeChange = ({ requiredMarkValue }) => {
		setRequiredMarkType(requiredMarkValue);
	};

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
			>
				<Form.Item label="Email" required>
					<Input
						className={styles["input-element"]}
						placeholder="input placeholder"
					/>
				</Form.Item>
				<Form.Item label="Password" required>
					<Input.Password className={styles["input-element"]} />
				</Form.Item>
				<Form.Item name="remember" valuePropName="checked">
					<Checkbox>Keep Me logged in</Checkbox>
				</Form.Item>
				<Form.Item>
					<Button type="primary" className={styles["login-btn"]}>
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
