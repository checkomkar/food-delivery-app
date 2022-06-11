import clientPromise from "../../middleware/mongodbConn";
import { withIronSessionApiRoute } from "iron-session/next";

const sessionOptions = {
	cookieName: "login_cookiename",
	password: process.env.COOKIE_PASSWORD,
	// secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
	cookieOptions: {
		secure: true,
		httpOnly: false,
	},
};

export default withIronSessionApiRoute(loginHandler, sessionOptions);

async function loginHandler(req, res) {
	const client = await clientPromise;
	const db = client.db("mydb");
	switch (req.method) {
		case "POST":
			console.log(req.body);
			let bodyObject = JSON.parse(JSON.stringify(req.body));

			console.log("******", bodyObject);
			let user = await db.collection("users").findOne(
				{
					email: bodyObject.email,
				},
				{ password: bodyObject.password }
			);
			req.session.user = user;

			//console.log("session", req);
			await req.session.save();
			res.json({
				status: 200,
				data: { id: user._id, email: user.email, name: user.name },
			});
			break;
		case "GET":
			const posts = await db.collection("users").find({}).toArray();
			await req.session.save();
			res.json({ status: 200, data: posts });
			break;
	}
}
