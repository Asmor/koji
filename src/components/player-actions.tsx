import { FunctionComponent, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import ActionButton from "./action-button";
import useActionSet from "@/hooks/useActionSet";

const HelpText = styled.div`
	text-align: center;
	font-size: 24px;
	cursor: pointer;
`;

const ButtonsContainer = styled.div`
	display: flex;
	gap: 4px;
	flex-wrap: wrap;
	height: 25%;
`;

const PlayerActions: FunctionComponent = () => {
	const [helpText, setHelpText] = useState("");
	const { getDesc, currentSet } = useActionSet();
	const showHelp = useCallback((n: 1 | 2 | 3 | 4) => {
		setHelpText(getDesc(n));
	}, [setHelpText, getDesc]);

	const clearHelpText = useCallback(() => setHelpText(""), [setHelpText]);

	// Clear the help text when the set changes
	useEffect(clearHelpText, [currentSet, clearHelpText]);

	return <>
		{helpText && <HelpText onClick={clearHelpText}>{ helpText }</HelpText>}
		<ButtonsContainer>
			<ActionButton number={1} clickHandler={showHelp}/>
			<ActionButton number={2} clickHandler={showHelp}/>
			<ActionButton number={3} clickHandler={showHelp}/>
			<ActionButton number={4} clickHandler={showHelp}/>
		</ButtonsContainer>
	</>;
};

export default PlayerActions;
