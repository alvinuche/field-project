import "./placeholder.scss";
import cat from "../../assets/images/inactive-cat.png";

const PlaceHolder = () => {
	return (
		<div className="placeholder">
			<div className="placeholder__img">
				<img src={cat} alt="cat" />
			</div>
			<p className="placeholder__img">
				No mood history <br /> to show yet
			</p>
		</div>
	);
};

export default PlaceHolder;
