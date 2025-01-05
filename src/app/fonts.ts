import { Barlow_Condensed } from "next/font/google";
import { Montserrat } from "next/font/google";

const barlow = Barlow_Condensed({
	subsets: ["latin"],
	weight: ["900"], // Ajoutez les poids que vous souhaitez utiliser
});

const montserrat = Montserrat({
	weight: ["400"],
	subsets: ["latin"],
});

export { barlow, montserrat }