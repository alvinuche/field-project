class Mood {
	constructor(
		public id: string,
		public emoji: string,
		public message: string,
		public date: string,
		public customStyle: string,
		public textStyle: string,
		public bgStyle: string,
		public name: string,
		public isSelected: boolean
	) {}
}

export default Mood;
