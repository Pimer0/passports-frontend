"use client";

import Button from "./components/Button";
import { montserrat, barlow } from "./fonts";
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from "next/navigation";
export default function Home() {
	const router = useRouter();

	return (
		<main className="flex flex-col gap-8 items-center sm:items-center">
			<div className="flex gap-4 items-center flex-col sm:flex-col">
				<h1 className={`text-[#1E4147] text-5xl text-left ${barlow.className}`}>
					Quel passeport avoir ?
				</h1>
				<p className={`text-[#1E4147] text-left ${montserrat.className}`}>
					Trouvez tout les avantages qui viennent avec un passeport en
					particulier.
				</p>
				<div className="flex flex-row gap-5">
					<Button
						text={"API"}
						onClick={() =>
							router.push("https://passportmagician.com/swagger/index.html")
						}
					>
						<GoArrowUpRight color="#1E4147" />
					</Button>
					<Button
						text={"Portfolio"}
						onClick={() => router.push("https://www.paulmerandon.fr/")}
					>
						<GoArrowUpRight color="#1E4147" />
					</Button>
					<Button text={"Pays"} onClick={() => router.push("/pays")}>
						<GoArrowUpRight color="#1E4147" />
					</Button>
				</div>
			</div>
		</main>
	);
}
