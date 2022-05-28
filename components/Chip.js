import React from "react";
import styles from "../styles/components/Chip.module.scss";
function Chip({ chip }) {
	return (
		<>
			<div className={styles["chip"]}>
				<img src={chip.image.src}></img>
				{chip.text}
			</div>
		</>
	);
}

export default Chip;
