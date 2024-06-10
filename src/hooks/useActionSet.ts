import { sets } from "@/data/actionSets";
import { atom, useRecoilState } from "recoil";

const setAtom = atom({
	key: "setAtom",
	default: 0,
});

const useActionSet = () => {
	const [currentSet, setCurrentSet] = useRecoilState(setAtom);

	const setSet = (set: number) => setCurrentSet(set % sets.length);
	const incSet = () => setSet(currentSet + 1);
	const decSet = () => setSet(currentSet - 1);

	const getSetName = () => currentSet ? `Expansion ${currentSet}` : "Original";
	const getIcon = (n: 1 | 2 | 3 | 4) => sets[currentSet][n - 1].icon;

	return {
		getIcon,
		setSet,
		incSet,
		decSet,
		getSetName,
	};
};

export default useActionSet;
