import { FC } from "react";
import "./emoji.scss";

interface EmojiType {
	emoji: string;
	customStyle: string;
	bgStyle: string;
	msg?: string;
	selected?: boolean;
	moodHandler?: () => void;
}

const Emoji: FC<EmojiType> = ({
	emoji,
	selected,
	customStyle,
	bgStyle,
	moodHandler,
}) => {
	return (
		<div className="emoji" onClick={moodHandler}>
			<div
				className={`emoji__box ${selected && customStyle} ${
					selected && bgStyle
				}`}
			>
				<img src={emoji} alt="emoji" />
			</div>
		</div>
	);
};

export default Emoji;
