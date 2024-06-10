import ChangeSet from "@/components/changeSet";
import PlayerActions from "@/components/player-actions";
import { FunctionComponent } from "react";
import styled from "styled-components";

const Actions = styled.div`
	position: fixed;
	left: var(--gutter);
	right: var(--gutter);
	z-index: var(--playerControlsZIndex);
`;

const P1Actions = styled(Actions)`
	bottom: var(--gutter);
`;

const P2Actions = styled(Actions)`
	top: var(--gutter);
	transform: rotate(180deg);
`;

const SetControls = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: var(--setControlsZIndex);
`;

const GameTracker: FunctionComponent = () => {
	return <>
		<P1Actions>
			<PlayerActions/>
		</P1Actions>
		<P2Actions>
			<PlayerActions/>
		</P2Actions>
		<SetControls>
			<ChangeSet/>
		</SetControls>
	</>;
};

export default GameTracker;