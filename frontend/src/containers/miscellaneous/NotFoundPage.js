import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
	const navigate = useNavigate();
	const onBackToHomepageClick = () => {
		navigate("/");
	};
	return (
		<div className="flex flex-wrap bg-purple-700 min-h-screen justify-center items-center">
			<div className="text-center">
				<div className="font-black text-4xl">Error : 404</div>
				<div className="font-bold">Page Not Found</div>
				<button
					onClick={onBackToHomepageClick}
					className="border-2 mt-3 rounded-full px-3 py-1 font-bold hover:bg-purple-950 hover:scale-125 hover:text-white"
				>
					Back to Homepage
				</button>
			</div>
		</div>
	);
};

export default NotFoundPage;
