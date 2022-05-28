import React from "react";
import styles from "../styles/components/Logo.module.scss";
function Logo() {
	return (
		<>
			<div className={styles["header-logo"]}>
				<h1>
					Food
					<span>Delivery</span>
				</h1>
			</div>
		</>
	);
}

export default Logo;
