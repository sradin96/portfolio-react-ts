import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function App() {
	return (
		<>
		<Routes>
			{
				routes?.map((route, i) => {
					return <Route key={i} path={route.path} element={<route.component />}/>
				})
			}
		</Routes>
		</>
	);
}

export default App;
