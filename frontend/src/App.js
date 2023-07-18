import { Routes, Route } from "react-router-dom";
import BackendAbsent from "./containers/miscellaneous/BackendAbsent";
import LoadingHomepage from "./containers/LoadHomePage";
import NotFoundPage from "./containers/miscellaneous/NotFoundPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LoadingHomepage />} />
			<Route path="/backendabsent" element={<BackendAbsent />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
