import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AbbScreen from "../components/AbbScreen";
import ConceptosScreen from "../components/ConceptosScreen";
import Navbar from "../components/Navbar";
import RecorridosScreen from "../components/RecorridosScreen";

const RouterApp = () => {
	return (
		<Router>
			{/* TODO: cambiar por navbar */}
			<div>
				<Navbar />
				<hr />

				<Switch>
					<Route exact path="/">
						<ConceptosScreen />
					</Route>
					<Route exact path="/recorridos">
						<RecorridosScreen />
					</Route>
					<Route exact path="/abb">
						<AbbScreen />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default RouterApp;
