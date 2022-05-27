import React from "react";
import { Carousel } from "antd";
import styles from "../styles/components/Slide.module.scss";

function Slide() {
	const onChange = (currentSlide) => {
		console.log(currentSlide);
	};

	return (
		<>
			<h2 className={styles["reviews-header"]}>
				Leave reviews for all meals
			</h2>
			<Carousel dots={true} afterChange={onChange}>
				<div>
					<h3 className={styles["carousel-text"]}>
						Lorem ipsum dolor sit amet, magna scaevola his ei. Cum
						te paulo probatus molestiae, eirmod assentior eum ne, et
						omnis antiopam mel.
					</h3>
				</div>
				<div>
					<h3 className={styles["carousel-text"]}>
						Lorem ipsum dolor sit amet, magna scaevola his ei. Cum
						te paulo probatus molestiae, eirmod assentior eum ne, et
						omnis antiopam mel.
					</h3>
				</div>
				<div>
					<h3 className={styles["carousel-text"]}>
						Lorem ipsum dolor sit amet, magna scaevola his ei. Cum
						te paulo probatus molestiae, eirmod assentior eum ne, et
						omnis antiopam mel.
					</h3>
				</div>
				<div>
					<h3 className={styles["carousel-text"]}>
						Lorem ipsum dolor sit amet, magna scaevola his ei. Cum
						te paulo probatus molestiae, eirmod assentior eum ne, et
						omnis antiopam mel.
					</h3>
				</div>
			</Carousel>
		</>
	);
}

export default Slide;
