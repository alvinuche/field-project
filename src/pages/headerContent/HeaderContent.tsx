import "./headerContent.scss";
import cat from "../../assets/images/header-cat.png";

const HeaderContent = () => {
	return (
		<section className="header">
			<div className="header__image">
				<img src={cat} alt="a cat" />
			</div>
			<h1 className="header__title">
				What is your cat's <br /> current mood?
			</h1>
		</section>
	);
};

export default HeaderContent;
