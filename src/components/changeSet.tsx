import useActionSet from "@/hooks/useActionSet";
import { FunctionComponent } from "react";
import styled from "styled-components";

const ChangeControls = styled.div`
	display: flex;
	justify-content: space-between;
	padding: var(--gutter);
	width: 100vw;
`;

const ChangeSet: FunctionComponent = () => {
	const { getSetName, incSet, decSet } = useActionSet();
	return <ChangeControls>
		<button onClick={decSet}>Prev</button>
		{getSetName() }
		<button onClick={incSet}>Next</button>
	</ChangeControls>;
};

export default ChangeSet;
