"use client";

import { useRouter } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";
import Button from "../components/Button";
import { barlow, montserrat } from "../fonts";
import tokenPaysService from "../services/api/tokenPaysService";
import { useState } from "react";

export default function Pays() {
	const router = useRouter();
	const [idpays, setIdpays] = useState<number | null>(null);

	const handleCheckboxClick = (event: React.MouseEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement;
		setIdpays(Number(target.id));
	};

	return (
		<main className="flex flex-col gap-8 items-center sm:items-center">
			<div className="flex gap-4 items-center flex-col sm:flex-col m-6">
				<h1 className={`text-[#1E4147] text-5xl text-left ${barlow.className}`}>
					Quel passeport vous intéresse ?
				</h1>
				<fieldset>
					<legend
						className={`text-[#1E4147] text-left ${montserrat.className}`}
					>
						Sélectionnez le pays correspondant au passeports dont vous voulez
						connaitre les détails:
					</legend>

					<div>
						<input
							type="checkbox"
							id="11"
							name="Singapour"
							onClick={handleCheckboxClick}
						/>
						<label
							className={`text-[#1E4147] text-left ${montserrat.className} ml-3`}
							htmlFor="Singapour"
						>
							Singapour
						</label>
					</div>

					<div>
						<input
							type="checkbox"
							id="12"
							name="Japon"
							onClick={handleCheckboxClick}
						/>
						<label
							className={`text-[#1E4147] text-left ${montserrat.className} ml-3`}
							htmlFor="Japon"
						>
							Japon
						</label>
					</div>
				</fieldset>
				<div className="flex flex-row gap-6">
					<Button
						text={"Avantages"}
						onClick={() =>
							idpays !== null && tokenPaysService.setToken(idpays, router)
						}
						colorClass="bg-[#1E4147]"
						hoverColorClass="hover:bg-[#ffff] hover:text-[#1E4147]"
					>
						<GoArrowUpRight color="#ffff" />
					</Button>
					<Button text={"Accueil"} onClick={() => router.push("/")}>
						<GoArrowUpRight color="#1E4147" />
					</Button>
				</div>
			</div>
		</main>
	);
}
