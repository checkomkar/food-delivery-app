export default function getCookie(name) {
	const value = `; ${document.cookie}`;
	console.log("value", value);
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(";").shift();
}
