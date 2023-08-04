import { useEffect, useState } from "react";

const Sudoku = () => {
	const [timer, setTimer] = useState(-1);
	const [isSolving, setIsSolving] = useState(false);
	const [sudoku, setSudoku] = useState([
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
	]);
	const [initialSudoku, setInitialSudoku] = useState([
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
	]);
	const [selectedKey, setSelectedKey] = useState(0);
	const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	useEffect(() => {
		newSudoku();
	}, []);

	useEffect(() => {
		if (isSolving) {
			setTimeout(() => setTimer(timer + 1), 1000);
			console.log("Hello");
		} else {
			console.log("Nope");
		}
	}, [timer]);

	const newSudoku = async () => {
		setIsSolving(false);
		setTimer(-1);
		const response = await fetch(
			"https://sudoku-api.vercel.app/api/dosuku"
		);
		const data = await response.json();
		const newSudoku = data["newboard"]["grids"][0]["value"];
		setSudoku(newSudoku);
		setInitialSudoku(newSudoku);
		setTimer(0);
		setIsSolving(true);
	};

	const onCellClick = (i, j) => {
		if (initialSudoku[i][j] != 0) return;
		let tempSudoku = sudoku;
		tempSudoku[i][j] = selectedKey;
		setSudoku(tempSudoku);
	};

	return (
		<div>
			<div className="text-center font-black text-6xl">Sudoku</div>
			<div className="flex justify-center">
				<button onClick={newSudoku}>Generate new Sudoku</button>
			</div>
			<div className="flex justify-center">Timer : {timer} seconds</div>
			<div className="flex justify-center">
				<div className="grid grid-cols-9 w-[30vw] h-[30vw] min-w-[300px] min-h-[300px]">
					{sudoku.map((row, rowNumber) => {
						return row.map((cellElement, cellElementNumber) => {
							return (
								<div
									className={
										(cellElementNumber % 3 == 2
											? "border-r-2 "
											: "border-r ") +
										(cellElementNumber % 3 == 0
											? "border-l-2 "
											: "border-l ") +
										(rowNumber % 3 == 0
											? "border-t-2 "
											: "border-t ") +
										(rowNumber % 3 == 2
											? "border-b-2 "
											: "border-b ") +
										(initialSudoku[rowNumber][
											cellElementNumber
										] != 0
											? "bg-teal-500 "
											: " ") +
										"flex items-center justify-center border-black"
									}
									onClick={() => {
										onCellClick(
											rowNumber,
											cellElementNumber
										);
									}}
								>
									{cellElement}
								</div>
							);
						});
					})}
				</div>
			</div>
			<div className="flex justify-center">
				{keys.map((keyNumber, keyIndex) => {
					return (
						<div
							className={
								"border-2 border-black rounded-full " +
								"w-[4vw] h-[4vw] min-w-[30px] min-h-[30px] " +
								"flex items-center justify-center m-1 " +
								(selectedKey == keyIndex ? "bg-teal-400 " : " ")
							}
							onClick={() => {
								setSelectedKey(keyIndex);
							}}
						>
							{keyNumber}
						</div>
					);
				})}
			</div>
			<div>Solved</div>
		</div>
	);
};

export default Sudoku;
