import "./mainContent.scss";
import { useState } from "react";
import HeaderContent from "../headerContent/HeaderContent";
import ListContent from "../listContent/ListContent";
import Emoji from "../../components/emoji/Emoji";
import { catMoods } from "../../data/data";
import { SaveButton } from "../../components/inputs/Inputs";
import Mood from "../../model/model";

export interface MoodType {
	id: string;
	emoji: string;
	message: string;
	customStyle: string;
	textStyle: string;
	bgStyle: string;
	name: string;
	isSelected: boolean;
	date?: string;
}

const initialState: MoodType = {
	id: "",
	emoji: "",
	message: "",
	customStyle: "",
	textStyle: "",
	bgStyle: "",
	name: "",
	isSelected: false,
};

const MainContent = () => {
	const [moods, setMoods] = useState<MoodType[]>([]);
	const [currentMood, setCurrentMood] = useState<MoodType>(initialState);

	// handles the current mood (state)
	const handleMood = ({
		emoji,
		id,
		name,
		message,
		customStyle,
		textStyle,
		bgStyle,
	}: MoodType) => {
		setCurrentMood((prevData) => ({
			...prevData,
			id,
			emoji,
			name,
			message,
			customStyle,
			textStyle,
			bgStyle,
			isSelected: true,
		}));
	};

	// adds to the moods when the button is clicked
	const addMoodHandler = () => {
		const {
			id,
			emoji,
			message,
			customStyle,
			isSelected,
			name,
			textStyle,
			bgStyle,
		} = currentMood;
		const newMood = new Mood(
			id,
			emoji,
			message,
			new Date().getTime().toString(),
			customStyle,
			textStyle,
			bgStyle,
			name,
			isSelected
		);

		setMoods((moods) => {
			return [newMood, ...moods];
		});
		setCurrentMood(initialState);
	};

	return (
		<>
			<section className="card card--first">
				<HeaderContent />
				<div className="card__emoji">
					{catMoods.map((mood) => (
						<Emoji
							emoji={mood.emoji}
							selected={
								mood.id === currentMood.id
									? currentMood.isSelected
									: mood.isSelected
							}
							key={mood.id}
							customStyle={
								mood.id === currentMood.id
									? currentMood.customStyle
									: mood.customStyle
							}
							bgStyle={
								mood.id === currentMood.id ? currentMood.bgStyle : mood.bgStyle
							}
							msg={currentMood.message}
							moodHandler={() => handleMood(mood)}
						/>
					))}
				</div>
				<div className={`card__msg ${currentMood.textStyle}`}>
					<p>{currentMood.message}</p>
				</div>
				<SaveButton
					title="Save mood"
					isActive={currentMood.isSelected && true}
					addMood={addMoodHandler}
				/>
			</section>

			<section className="card card--second">
				<ListContent data={moods} />
			</section>
		</>
	);
};

export default MainContent;
