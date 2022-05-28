import React, { useState } from "react";
import styles from "../styles/components/CategoryChip.module.scss";
function CategoryChip({ categoryChip }) {
	const { image, title, active = false } = categoryChip;
	const [isActive, setIsActive] = useState(active);
	return (
		<>
			<div
				className={`${styles["category-chip"]} ${
					isActive ? styles["active"] : ""
				}`}
				onClick={() => setIsActive(!isActive)}
			>
				<div className={styles["category-image"]}>
					<img src={image.src}></img>
				</div>
				<div className={styles["category-name"]}>{title}</div>
			</div>
		</>
	);
}

export default CategoryChip;
