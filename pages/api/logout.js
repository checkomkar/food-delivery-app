import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
	function logoutRoute(req, res, session) {
		req.session.destroy();
		res.send({ ok: true, userLoggedOut: true });
	},
	{
		cookieName: "login_cookiename",
		password: process.env.COOKIE_PASSWORD,
		// secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
		cookieOptions: {
			secure: true,
			httpOnly: false,
		},
	}
);
