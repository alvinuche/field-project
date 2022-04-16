import { FC } from "react";
import "./inputs.scss";

export const SaveButton: FC<{
	title: string;
	isActive: boolean;
	addMood: () => void;
}> = ({ isActive, addMood, title }) => {
	return (
		<div className="save">
			<button
				className={`save__button ${isActive && "save__button--active "}`}
				disabled={!isActive}
				onClick={addMood}
			>
				{title}
			</button>
		</div>
	);
};
