"use client";

import { useRouter } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";
import Button from "../components/Button";
import { barlow, montserrat } from "../fonts";

export default function Pays() {
	const router = useRouter();
	return (
		<main className="flex flex-col gap-8 items-center sm:items-center">
			<div className="flex gap-4 items-center flex-col sm:flex-col">
				<h1 className={`text-[#1E4147] text-5xl text-left ${barlow.className}`}>
					Quel passeport vous intéresse ?
				</h1>
				<p className={`text-[#1E4147] text-left ${montserrat.className}`}>
					Sélectionnez le pays correspondant au passeports dont vous voulez
					connaitre les détails:
				</p>
				<Button text={"Accueil"} onClick={() => router.push("/")}>
					<GoArrowUpRight color="#1E4147" />
				</Button>
			</div>
		</main>
	);
}
