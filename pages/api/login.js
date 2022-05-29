import clientPromise from "../../middleware/mongodbConn";

export default async function handler(req, res) {
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
			res.json({ status: 200, data: user });
			break;
		case "GET":
			const posts = await db.collection("users").find({}).toArray();
			res.json({ status: 200, data: posts });
			break;
	}
}
