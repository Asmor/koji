import { FunctionComponent } from "react";
import styled from "styled-components";
import ActionButton from "./action-button";

const ButtonsContainer = styled.div`
	display: flex;
	gap: 4px;
	flex-wrap: wrap;
	height: 25%;
`;

const PlayerActions: FunctionComponent = () => {
	return <>
		<ButtonsContainer>
			<ActionButton number={1}/>
			<ActionButton number={2}/>
			<ActionButton number={3}/>
			<ActionButton number={4}/>
		</ButtonsContainer>
	</>;
};

export default PlayerActions;
