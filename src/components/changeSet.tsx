import useActionSet from "@/hooks/useActionSet";
import useAspectRatio, { AspectRatio } from "@/hooks/useAspectRatio";
import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import arrow from "../../assets/arrow.svg";
import Image from "next/image";

const ChangeControls = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: var(--gutter);
	width: 100vw;
`;

interface PagerProps {
	orientation: AspectRatio;
}

const Pager = styled.button<PagerProps>`
	background: #333;
	border-radius: 8px;
	font-size: 10vh;
	border: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	${ p => {
		if ( p.orientation === AspectRatio.LANDSCAPE ) return css`
			width: 10vw;
			height: 30vh;
		`;
		else return css`
			width: 20vw;
			height: 20vh;
		`;
	} }

	> img {
		max-width: 50px;
	}
`;

const RevImage = styled(Image)`
	transform: rotate(180deg);
`;

const ChangeSet: FunctionComponent = () => {
	const { getSetName, incSet, decSet } = useActionSet();
	const orientation = useAspectRatio();
	return <ChangeControls>
		<Pager onClick={decSet} orientation={orientation}>
			<RevImage src={arrow} alt=""/>
		</Pager>
		{getSetName() }
		<Pager onClick={incSet} orientation={orientation}>
			<Image src={arrow} alt=""/>
		</Pager>
	</ChangeControls>;
};

export default ChangeSet;
