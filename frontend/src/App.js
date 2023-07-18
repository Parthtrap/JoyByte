import { Routes, Route } from "react-router-dom";
import Homepage from "./containers/LoadHomePage";
import BackendAbsent from "./containers/miscellaneous/BackendAbsent";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/backendabsent" element={<BackendAbsent />} />
		</Routes>
	);
}

export default App;
