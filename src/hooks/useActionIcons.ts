import secret1 from "../../assets/1-secret.svg";
import discard1 from "../../assets/1-discard.svg";
import discard2 from "../../assets/2-discard.svg";
import secret2 from "../../assets/2-secret.svg";
import gift3 from "../../assets/3-gift.svg";
import transmit3 from "../../assets/3-transmit.svg";
import competition4 from "../../assets/4-competition.svg";
import gift4 from "../../assets/4-gift.svg";
import { useCallback, useState } from "react";

const sets = [
	// Original
	[ secret1, discard2, gift3, competition4 ],
	// Expansion 1
	[ discard1, secret2, transmit3, gift4 ],
];

const useActionSet = () => {
	const [currentSet, setCurrentSet] = useState(0);
	const [setName, setSetName] = useState("Original");

	// const getIcon = useCallback((n: 1 | 2 | 3 | 4) => sets[currentSet][n - 1], [currentSet]);
	const getIcon = useCallback((n: 1 | 2 | 3 | 4) => {
		console.log('xxy get icon', { n, currentSet })
		return sets[currentSet][n - 1];
	}, [currentSet]);

	const setSet = (set: number) => {
		const newSet = set % sets.length;
		setCurrentSet(newSet);
		setSetName( newSet ? `Expansion ${newSet}` : "Original" );
	};

	const incSet = () => setSet(currentSet + 1);
	const decSet = () => setSet(currentSet - 1);

	return {
		getIcon,
		setSet,
		incSet,
		decSet,
		setName,
		currentSet,
	};
};

export default useActionSet;
