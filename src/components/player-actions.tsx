import { FunctionComponent, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import ActionButton from "./action-button";
import useActionSet from "@/hooks/useActionSet";
import useAspectRatio, { AspectRatio } from "@/hooks/useAspectRatio";

interface HelpTextProps { orientation: AspectRatio; }

const HelpText = styled.div<HelpTextProps>`
	text-align: center;
	font-size: 20px;
	cursor: pointer;
	background-color: var(--neutral-button);
	border-radius: 8px;
	padding: 4px;
	margin: auto;
	margin-bottom: var(--gutter);
	max-width: ${ p => p.orientation === AspectRatio.LANDSCAPE ? "70vw" : "50vw" };
	width: fit-content;
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
	const orientation = useAspectRatio();
	const showHelp = useCallback((n: 1 | 2 | 3 | 4) => {
		setHelpText(getDesc(n));
	}, [setHelpText, getDesc]);

	const clearHelpText = useCallback(() => setHelpText(""), [setHelpText]);

	// Clear the help text when the set changes
	useEffect(clearHelpText, [currentSet, clearHelpText]);

	return <>
		{helpText && <HelpText
			onClick={clearHelpText}
			orientation={orientation}
		>{ helpText }</HelpText>}
		<ButtonsContainer>
			<ActionButton number={1} clickHandler={showHelp}/>
			<ActionButton number={2} clickHandler={showHelp}/>
			<ActionButton number={3} clickHandler={showHelp}/>
			<ActionButton number={4} clickHandler={showHelp}/>
		</ButtonsContainer>
	</>;
};

export default PlayerActions;
