import React, { useEffect } from "react";
import styles from "../styles/components/ProductCard.module.scss";
import { Input, Space, Avatar, Badge } from "antd";
import { ClockCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Chip from "./Chip";
function ProductCard({ productDetails }) {
	const {
		title,
		isFeatured,
		deliveryTime,
		deliveryMinSum,
		productImage,
		chips,
		inCartNumber,
	} = productDetails;
	const bgImageStyles = {
		backgroundImage: `url(${productImage.src})`,
	};
	useEffect(() => {
		console.log(productDetails);
	}, []);
	return (
		<>
			<div style={bgImageStyles} className={styles["product-card"]}>
				{isFeatured && (
					<div className={styles["product-is-featured"]}>
						Featured
					</div>
				)}
				<div className={styles["product-card-content"]}>
					<div className={styles["product-card-title"]}>
						<span className={styles["text"]}>{title}</span>
						<span className={styles["cart"]}>
							{inCartNumber > 0 ? (
								<Badge color={"#4E60FF"} count={inCartNumber}>
									<Avatar
										style={{
											backgroundColor: "#4E60FF",
											verticalAlign: "middle",
										}}
										shape="square"
										icon={<ShoppingCartOutlined />}
										size="large"
									/>
								</Badge>
							) : (
								<Avatar
									shape="square"
									icon={<ShoppingCartOutlined />}
									size="large"
								/>
							)}
						</span>
					</div>
					<div className={styles["product-card-delivery"]}>
						<span
							className={`${styles["delivery"]} ${styles["delivery-time"]}`}
						>
							<span className={styles["delivery-time-icon"]}>
								<ClockCircleOutlined />
							</span>
							{deliveryTime}
						</span>
						<span
							className={`${styles["delivery"]} ${styles["delivery-min-sum"]}`}
						>
							<span className={styles["circle"]}></span>$
							{deliveryMinSum} min sum
						</span>
					</div>
					<div className={styles["cart"]}></div>
					<div className={styles["chips"]}>
						{chips.map((chip) => {
							return <Chip chip={chip} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductCard;
