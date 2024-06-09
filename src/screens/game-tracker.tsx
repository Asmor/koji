import PlayerActions from "@/components/player-actions";
import { FunctionComponent } from "react";
import styled from "styled-components";

const Actions = styled.div`
	position: fixed;
	left: var(--gutter);
	right: var(--gutter);
`;

const P1Actions = styled(Actions)`
	bottom: var(--gutter);
`;

const P2Actions = styled(Actions)`
	top: var(--gutter);
	transform: rotate(180deg);
`;

const GameTracker: FunctionComponent = () => {
	return <>
		<P1Actions>
			<PlayerActions/>
		</P1Actions>
		<P2Actions>
			<PlayerActions/>
		</P2Actions>
	</>;
};

export default GameTracker;
