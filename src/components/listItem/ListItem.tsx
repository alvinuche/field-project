import { FC } from "react";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
import Emoji from "../emoji/Emoji";
import "./listItem.scss";

dayjs.extend(localizedFormat);

interface ListItemType {
	id: string;
	emoji: string;
	message: string;
	date: string;
	customStyle: string;
	bgStyle: string;
	textStyle: string;
}

const ListItem: FC<ListItemType> = ({
	date,
	emoji,
	id,
	message,
	customStyle,
	bgStyle,

	textStyle,
}) => {
	return (
		<div className="listitem">
			<div className={`listitem__content ${customStyle}`}>
				<Emoji
					emoji={emoji}
					msg={message}
					customStyle={customStyle}
					bgStyle={bgStyle}
					selected
				/>
				<article className="listitem__content__info">
					<p className={`listitem__content__msg ${textStyle}`}>{message}</p>
					<small className="listitem__content__date">
						{dayjs(+date).format("MM-DD-YYYY / LT")}
					</small>
				</article>
			</div>
		</div>
	);
};

export default ListItem;
