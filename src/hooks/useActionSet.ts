import { sets } from "@/data/actionSets";
import { atom, useRecoilState } from "recoil";

const setAtom = atom({
	key: "setAtom",
	default: 0,
});

const useActionSet = () => {
	const [currentSet, setCurrentSet] = useRecoilState(setAtom);

	const setSet = (set: number) => {
		// modulo bug in JS: -1 % n = -1
		const newSet = set === -1
			? sets.length - 1
			: set % sets.length;
		return setCurrentSet(newSet)
	};
	const incSet = () => setSet(currentSet + 1);
	const decSet = () => setSet(currentSet - 1);

	const getSetName = () => currentSet ? `Expansion ${currentSet}` : "Original";
	const getIcon = (n: 1 | 2 | 3 | 4) => sets[currentSet][n - 1].icon;
	const getDesc = (n: 1 | 2 | 3 | 4) => sets[currentSet][n - 1].desc;

	return {
		getIcon,
		getDesc,
		setSet,
		incSet,
		decSet,
		getSetName,
		currentSet,
	};
};

export default useActionSet;
