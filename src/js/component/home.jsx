import React, {useState} from "react";
import TrafficLigth from "./TrafficLigth";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	return (
		<div className="container text-center d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
			<TrafficLigth></TrafficLigth>
		</div>
	);
};

export default Home;
