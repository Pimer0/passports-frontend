import { IoIosAirplane } from "react-icons/io";
import { montserrat } from "../fonts";
import { PaysVisitablesProps } from "../interfaces";

const PaysVisitables: React.FC<PaysVisitablesProps> = ({ nombres }) => {
	return (
		<div className="flex flex-row border border-[#1E4147] p-4 rounded-lg">
			<IoIosAirplane color="#1E4147" size={36} />
			<div className="flex flex-row gap-8 ml-3 content-center flex-wrap">
				<p
					className={`text-[#1E4147] text-left font-extrabold ${montserrat.className}`}
				>
					Pays visitables:
				</p>
				<p
					className={`text-[#1E4147] text-left font-extrabold ${montserrat.className}`}
				>
					{nombres}
				</p>
			</div>
		</div>
	);
};

export default PaysVisitables;
