import React, {
	Component
} from 'react';
import logo from './logo.svg';
import './App.css';
//get image data
var imageDatas = require("./imageData.json");
//transit image name to image url
imageDatas = (function genImgURL(imageDataArr) {
	for (var i = 0; i < imageDataArr.length; i++) {
		var singleImgData = imageDataArr[i];
		singleImgData.imageURL = require("../images/" + singleImgData.filename);
		imageDataArr[i] = singleImgData;
	}
	return imageDataArr;
})(imageDatas);

class App extends Component {
	render() {
		return (
			<div className="app">
				<section className="stage">
					<section className="img-sec">
					</section>
					<nav className="controller-nav">
					</nav>
				</section>
			</div>
		);
	}
}

export default App;