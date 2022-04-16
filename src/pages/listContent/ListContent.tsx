import "./listContent.scss";

import PlaceHolder from "../../components/placeHolder/Placeholder";

import cat from "../../assets/images/sub-cat.png";
import logo from "../../assets/images/logo.png";
import { FC } from "react";
import { MoodType } from "../mainContent/MainContent";
import ListItem from "../../components/listItem/ListItem";

const ListContent: FC<{ data: MoodType[] }> = ({ data }) => {
	return (
		<section className="list">
			<div className="list__icons">
				<span>
					<img src={cat} alt="cat" />
				</span>
				<span>
					<img src={logo} alt="logo" />
				</span>
			</div>
			<h4 className="list__title">Mood history</h4>

			{!data.length ? (
				<PlaceHolder />
			) : (
				data.map((mood) => (
					<ListItem
						key={mood.date}
						id={mood.id}
						emoji={mood.emoji}
						message={mood.message}
						customStyle={mood.customStyle}
						date={mood.date as string}
						textStyle={mood.textStyle}
						bgStyle={mood.bgStyle}
					/>
				))
			)}
		</section>
	);
};

export default ListContent;
