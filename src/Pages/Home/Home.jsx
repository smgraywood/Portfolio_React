import skyline from "../../Images/skyline.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
	const [quote, setQuote] = useState([]);
	const [loading, setLoading] = useState(false);

	// const category = "inspirational"
	const options = {
		method: "GET",
		url: "https://api.api-ninjas.com/v1/quotes?category=",
		params: {
			category: "inspirational",
			limit: "1",
		},
		headers: {
			"X-Api-Key": "",
		},
	};
	const apiCall = async () => {
		try {
			const response = await axios.request(options);
			setQuote(response.data);
            setLoading(!loading)
			console.log(quote);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		apiCall();
	}, []);

	return (
		<>
			{loading ? (
				<>
					<h1>Home</h1>
					<img
						src={skyline}
						className="skyline"
						alt="drawn outline of San Jose CA skyline"
					></img>
					<p>{quote[0].quote}</p>
					<p>{quote[0].author}</p>{" "}
				</>
			) : (
				<>
					<h1>Home</h1>
					<img
						src={skyline}
						className="skyline"
						alt="drawn outline of San Jose CA skyline"
					></img>
				</>
			)}
		</>
	);
}

export default Home;
