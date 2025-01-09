"use client";

import { useState, useEffect } from "react";
import passportService from "@/app/services/api/passportService";
import { Data } from "@/app/interfaces";
import PaysVisitables from "../components/PaysVisitables";
import { barlow, montserrat } from "../fonts";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import MyLoader from "../components/MyLoader";

export default function Avantages() {
	const router = useRouter();
	const [avantages, setAvantages] = useState<Data | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			const id = localStorage.getItem("passport");

			if (!id) {
				setError("Aucun passeport sélectionné.");
				setLoading(false);
				return;
			}

			try {
				const response = await passportService.getOnePassport(Number(id));

				if (response.success) {
					setAvantages(response.data);
				} else {
					setError(response.message || "Impossible de récupérer les données.");
				}
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<main className="flex flex-col gap-8 items-center sm:items-center">
			<h1 className={`text-[#1E4147] text-5xl text-left ${barlow.className}`}>
				Avantages
			</h1>

			{loading && (
				<div className="m-5">
					<MyLoader />
				</div>
			)}

			{error && <p className="text-red-500">{error}</p>}

			{avantages && (
				<div className="mr-4 ml-4">
					<h2 className="text-xl font-bold text-[#1E4147]">{avantages.pays}</h2>
					<p
						className={`text-[#1E4147] text-left font-extrabold ${montserrat.className} mb-6`}
					>
						{avantages.description}
					</p>
					{avantages?.avantages.map((avantage) => (
						<PaysVisitables
							key={avantage.id}
							nombres={avantage.paysVisitables}
						/>
					))}
					<div className="flex flex-row border border-[#1E4147] p-4 rounded-lg mt-6">
						<IoIosCheckmarkCircleOutline color="#1E4147" size={36} />
						<div className="ml-4">
							<h3 className="text-lg font-semibold text-[#1E4147]">
								Avantages :
							</h3>
							<ul className="list-disc pl-5">
								{avantages.avantages.map((avantage) => (
									<li
										key={avantage.id}
										className={`text-[#1E4147] text-left font-extrabold ${montserrat.className}`}
									>
										{avantage.contenu}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			)}
			<div className="flex flex-row gap-6">
				<Button
					colorClass="bg-[#1E4147]"
					hoverColorClass="hover:bg-[#ffff] hover:text-[#1E4147]"
					text={"Pays"}
					onClick={() => router.push("/pays")}
				>
					<GoArrowUpRight color="#ffff" />
				</Button>
				<Button text={"Accueil"} onClick={() => router.push("/")}>
					<GoArrowUpRight color="#1E4147" />
				</Button>
			</div>
		</main>
	);
}
