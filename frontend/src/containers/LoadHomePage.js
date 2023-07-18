import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GETUtil } from "../apis/utils";

const Homepage = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		GETUtil("http://localhost:8000").then((data) => {
			if (data.status === 404) navigate("/backendabsent");
		});
	}, []);

	return (
		<>
			<div hidden={!isLoading}>Loading...</div>
			<div hidden={isLoading}>HomePage</div>;
		</>
	);
};

export default Homepage;
