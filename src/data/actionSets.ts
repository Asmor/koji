import secret1 from "../../assets/1-secret.svg";
import discard2 from "../../assets/2-discard.svg";
import gift3 from "../../assets/3-gift.svg";
import competition4 from "../../assets/4-competition.svg";

import discard1 from "../../assets/1-discard.svg";
import secret2 from "../../assets/2-secret.svg";
import transmit3 from "../../assets/3-transmit.svg";
import gift4 from "../../assets/4-gift.svg";

import giveaway1 from "../../assets/1-giveaway.svg";
import reveal2 from "../../assets/2-reveal.svg";
import giftRev3 from "../../assets/3-gift-reverse.svg";
import intercept4 from "../../assets/4-intercept.svg";

import reveal1 from "../../assets/1-reveal.svg";
import referral2 from "../../assets/2-referral.svg";
import intercept3 from "../../assets/3-intercept.svg";
import giftRev4 from "../../assets/4-gift-rev.svg";

import referral1 from "../../assets/1-referral.svg";
// discard2
import competition3 from "../../assets/3-competition.svg";
import giftBig4 from "../../assets/4-gift-big.svg";

export interface Tile {
	icon: any;
	desc: string;
}

const sets: Tile[][] = [
	// Original
	[
		{ icon: secret1, desc: "Keep 1 face down." },
		{ icon: discard2, desc: "Discard 2." },
		{ icon: gift3, desc: "Offer 3. Opponent takes 1." },
		{ icon: competition4, desc: "Offer 2 pairs. Opponent takes 1 pair." }
	],
	// Expansion 1
	[
		{ icon: discard1, desc: "Discard 1." },
		{ icon: secret2, desc: "Keep 2 face down." },
		{ icon: transmit3, desc: "Offer 3 face down. Opponent discards 2 unseen." },
		{ icon: gift4, desc: "Offer 4. Opponent takes 2." }
	],
	// Expansion 2
	[
		{ icon: giveaway1, desc: "Give 1 face down to opponent. May not be looked at." },
		{ icon: reveal2, desc: "Play 2." },
		{ icon: giftRev3, desc: "Offer 3. Opponent takes 2." },
		{ icon: intercept4, desc: "Display 4. Opponent discards 2." }
	],
	// Expansion 3
	[
		{ icon: reveal1, desc: "Play 1." },
		{ icon: referral2, desc: "Put 2 under deck. Keep top 2 cards from deck." },
		{ icon: intercept3, desc: "Display 3. Opponent discards 1." },
		{ icon: giftRev4, desc: "Offer 4. Opponent takes 3." },
	],
	// Expansion 4
	[
		{ icon: referral1, desc: "Put 1 under deck. Keep top card from deck." },
		{ icon: discard2, desc: "Discard 2." },
		{ icon: competition3, desc: "Offer pair and single. Opponent takes choice." },
		{ icon: giftBig4, desc: "Offer 4. Opponent takes 1." },
	],
];

export { sets };
