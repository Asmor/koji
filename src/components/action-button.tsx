import useAspectRatio, { AspectRatio } from "@/hooks/useAspectRatio";
import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

import Keep1 from "../../assets/1-keep.svg";
import Image from "next/image";
import useActionSet from "@/hooks/useActionIcons";

interface StyledButtonProps {
	orientation: AspectRatio;
}

const StyledButton = styled.label<StyledButtonProps>`
	flex-grow: 1;

	display: flex;
	justify-content: center;
	align-items: center;

	// goal here is for all 4 buttons in one row in landscape, and two rows in
	// portrait. Don't need to explicitly take up all the space, letting
	// flex-grow handle taking care of the extra space
	width: ${ p => p.orientation === AspectRatio.LANDSCAPE ? "20vw" : "40vw" };
	height: ${ p => p.orientation === AspectRatio.LANDSCAPE ? "25vh" : "12.5vh" };

	border: 2px solid transparent;
	border-radius: 8px;
	background-color: #333;

	user-select: none;

	cursor: pointer;

	> input {
		// opacity 0 to hide it but still let it receive focus
		opacity: 0;
		// absolute so that the checkbox doesn't take up any layout
		position: absolute;
	}

	&:has(:focus) {
		border-color: #ccc;
	}

	&:has(:checked) {
		opacity: 0.5;
	}

	> img {
		max-height: 90%;
		max-width: 90%;
	}
`;

export interface ActionButtonProps {
	// children: ReactNode;
	number: 1 | 2 | 3 | 4;
}

const ActionButton: FunctionComponent<ActionButtonProps> = ({ number }) => {
	const aspectRatio = useAspectRatio();
	const {getIcon, currentSet} = useActionSet();
	return <>
		<StyledButton orientation={aspectRatio}>
			{/* {currentSet} */}
			<Image
				src={getIcon(number)}
				alt=""
			/>
			<input type="checkbox"/>
		</StyledButton>
	</>;
};

export default ActionButton;
