const loadScript = async (url) => {
	return new Promise((resolve) => {
		const script = document.createElement("script");
		script.src = url;

		script.onload = () => {
			resolve(true);
		};

		script.onerror = () => {
			resolve(false);
		};

		document.body.appendChild(script);
	});
};

function usePaymentIntegration(price, user, handler) {
	async function showRazorPay() {
		const res = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js"
		);

		if (!res) {
			alert("Oops something went wrong!");
			return;
		}

		const options = {
			key: process.env.REACT_APP_RAZORPAY_ID,
			amount: price * 100,
			currency: "INR",
			name: "Ani Shoppie",
			description: "Place your order now",
			image:
				"https://res.cloudinary.com/dwubqdebj/image/upload/v1658770075/logo_2_zcdaex.png",
			handler,
			prefill: {
				name: user.name,
				email: user.email,
				contact: "9999999999",
			},
			theme: {
				color: "#008190",
			},
		};

		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}

	return showRazorPay;
}
export default usePaymentIntegration;
