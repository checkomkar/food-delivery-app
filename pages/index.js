import { useDispatch, useSelector } from "react-redux";
import { getSampleData } from "../store/actions/sampleAction";
import Router from "next/router";
import { useEffect } from "react";
import { Col, Row, Divider, Space } from "antd";
import Header from "../components/Header";
import ProductOffer from "../components/ProductOffer";
import cupCake from "../public/cup-cake.png";
import burger from "../public/burger.png";
import royalSushi from "../public/royalSushi.jpg";
import japaneseShushi from "../public/japaneseShushi.jpg";
import kobe from "../public/kobe.jpg";
import ninjaShushi from "../public/ninjaShushi.jpg";
import shushiMaster from "../public/shushiMaster.jpg";
import burgerAndPizza from "../public/burgerAndPizza.jpg";
import shushiIcon from "../public/shushiCat.png";
import pizzaIcon from "../public/pizza-icon.png";
import burgerIcon from "../public/burger-icon.png";
import bbqIcon from "../public/bbq-icon.png";
import veganIcon from "../public/vegan-icon.png";
import dessertIcon from "../public/dessert-icon.png";
import styles from "../styles/Home.module.css";
import ProductCard from "../components/ProductCard";
import CategoryChip from "../components/CategoryChip";
import getCookie from "../utils/getCookie";
import { validateLogin } from "../store/actions/loginAction";
import { withIronSessionSsr } from "iron-session/next";

export default function Home({ user }) {
	const dispatch = useDispatch();
	const sampleListData = useSelector((state) => state.sampleData);
	const loginUser = useSelector((state) => state.loginUser.user);
	const { sample } = sampleListData;
	useEffect(() => {
		dispatch(getSampleData());
	}, [dispatch]);
	useEffect(() => {
		//console.log("User from server", user);
		let loggedIn = getCookie("login_cookiename");
		//console.log("loggedIn home", loggedIn);
		// console.log("not logged in", loginUser);
		// const getSessionData = JSON.parse(sessionStorage.getItem("user"));
		dispatch(
			validateLogin({
				email: user?.email,
				name: user?.name,
				id: user?.id,
			})
		);
		if (user?.name) {
			Router.push("/");
		} else {
			console.log("not logged in", user);
			Router.push("/login");
		}
		// return () => {
		// 	document.cookie =
		// 		"login_cookiename=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		// };
	}, []);
	const products = [
		{
			title: "Royal Sushi House",
			isFeatured: true,
			deliveryTime: "30-45 min",
			deliveryMinSum: "50",
			productImage: royalSushi,
			chips: [{ image: shushiIcon, text: "Shushi" }],
			inCartNumber: 0,
		},
		{
			title: "Burgers & Pizza",
			isFeatured: true,
			deliveryTime: "30-45 min",
			deliveryMinSum: "50",
			productImage: burgerAndPizza,
			chips: [
				{ image: burgerIcon, text: "Burger" },
				{ image: pizzaIcon, text: "Pizza" },
			],
			inCartNumber: 2,
		},
		{
			title: "Ninja Shushi",
			isFeatured: false,
			deliveryTime: "30-45 min",
			deliveryMinSum: "50",
			productImage: ninjaShushi,
			chips: [{ image: shushiIcon, text: "Shushi" }],
			inCartNumber: 2,
		},
		{
			title: "Shushi Master",
			isFeatured: true,
			deliveryTime: "60-70 min",
			deliveryMinSum: "50",
			productImage: shushiMaster,
			chips: [{ image: shushiIcon, text: "Shushi" }],
			inCartNumber: 0,
		},
		{
			title: "Japanese Shushi",
			isFeatured: false,
			deliveryTime: "30-45 min",
			deliveryMinSum: "150",
			productImage: japaneseShushi,
			chips: [{ image: shushiIcon, text: "Shushi" }],
			inCartNumber: 0,
		},
		{
			title: "Kobe",
			isFeatured: false,
			deliveryTime: "20-30 min",
			deliveryMinSum: "50",
			productImage: kobe,
			chips: [{ image: shushiIcon, text: "Shushi" }],
			inCartNumber: 2,
		},
	];

	const categories = [
		{
			title: "Shushi",
			image: shushiIcon,
			active: true,
		},
		{
			title: "Pizza",
			image: pizzaIcon,
		},
		{
			title: "Burger",
			image: burgerIcon,
			active: true,
		},
		{
			title: "BBQ",
			image: bbqIcon,
		},
		{
			title: "Vegan",
			image: veganIcon,
		},
		{
			title: "Dessert",
			image: dessertIcon,
		},
	];
	return (
		loginUser.name && (
			<>
				{/* <h3>{JSON.stringify(sample)}</h3> */}
				<Row>
					<div className="container">
						<Header />
					</div>
				</Row>
				<Divider />
				<Row justify="center">
					<div className="container">
						<div className={styles["grid-container"]}>
							<div className={styles["grid-item"]}>
								<ProductOffer
									image={cupCake}
									title="All Deserts"
									bgColor={"#F3F4FF"}
									textColor={"#4E60FF"}
									category="Deserty"
									discount={20}
								/>
							</div>
							<div className={styles["grid-item"]}>
								<ProductOffer
									image={burger}
									title="Big Burgers"
									bgColor={"#FFF3ED"}
									textColor={"#FD6D22"}
									category="Foodies"
									discount={50}
								/>
							</div>
						</div>
					</div>
				</Row>
				<Row>
					<div className="container">
						<div className={styles["category-grid-container"]}>
							{categories.map((category, index) => (
								<CategoryChip
									key={index}
									categoryChip={category}
								/>
							))}
						</div>
					</div>
				</Row>
				<Row>
					<div className="container">
						<h3 className={styles["nearby-restaurants"]}>
							Nearby restaurants
						</h3>
						<div className={styles["product-grid-container"]}>
							{products.map((product) => (
								<ProductCard productDetails={product} />
							))}
						</div>
					</div>
				</Row>
			</>
		)
	);
}

export const getServerSideProps = withIronSessionSsr(
	async ({ req, res }) => {
		const user = req.session.user;

		console.log("hello ", user);

		if (!user) {
			return { props: {} };
		}

		return {
			props: {
				user: user,
			},
		};
	},
	{
		cookieName: "login_cookiename",
		password: process.env.COOKIE_PASSWORD,
		// secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
	}
);
