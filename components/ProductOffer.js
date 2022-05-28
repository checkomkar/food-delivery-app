import React from "react";
import styles from "../styles/components/ProductOffer.module.scss";
import { Col, Row } from "antd";
import Image from "next/image";

function ProductOffer({
	bgColor,
	image,
	title,
	category,
	discount,
	textColor,
}) {
	const inlineStyles = {
		backgroundColor: bgColor,
	};
	const textColorStyles = {
		color: textColor,
	};
	return (
		<>
			<div style={inlineStyles} className={styles["product-offer"]}>
				<Row>
					<Col span={12} xs={{ span: 0 }} md={{ span: 12 }}>
						<Image src={image}></Image>
					</Col>
					<Col span={12} xs={{ span: 0 }} md={{ span: 12 }}>
						<div className={styles["product-offer-title"]}>
							{title}
						</div>
						<div
							style={textColorStyles}
							className={styles["product-offer-discount"]}
						>
							{discount}% OFF
						</div>
						<div className={styles["product-offer-category"]}>
							{category}
						</div>
					</Col>
					<Col xs={{ span: 24 }} md={{ span: 0 }}>
						<Row>
							<Col span={16}>
								<div className={styles["product-offer-title"]}>
									{title}
								</div>
								<div
									style={textColorStyles}
									className={styles["product-offer-discount"]}
								>
									{discount}% OFF
								</div>
							</Col>
							<Col span={8}>
								<div
									className={styles["product-offer-category"]}
								>
									{category}
								</div>
							</Col>
						</Row>
					</Col>
					<Col xs={{ span: 24 }} md={{ span: 0 }}>
						<Image src={image}></Image>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default ProductOffer;
