import happy from "../assets/images/happy.png";
import angry from "../assets/images/angry.png";
import indifferent from "../assets/images/indifferent.png";

export const catMoods = [
	{
		id: "1",
		emoji: angry,
		message: "Cat wasn't having it",
		customStyle: "global--red",
		textStyle: "global--red--text",
		bgStyle: "global--red--bg",
		name: "angry",
		isSelected: false,
	},
	{
		id: "2",
		emoji: indifferent,
		message: "Cat was indifferent",
		customStyle: "global--orange",
		textStyle: "global--orange--text",
		bgStyle: "global--orange--bg",
		name: "indifferent",
		isSelected: false,
	},
	{
		id: "3",
		emoji: happy,
		message: "Cat was super excited!",
		customStyle: "global--green",
		textStyle: "global--green--text",
		bgStyle: "global--green--bg",
		name: "happy",
		isSelected: false,
	},
];
