import { ButtonProps } from "../interfaces";

const Button: React.FC<ButtonProps> = ({
	text,
	colorClass = "bg-white text-[#1E4147]",
	hoverColorClass = "hover:bg-[#1E4147] hover:text-white",
	widthClass = "w-full",
	onClick,
	children,
}) => {
	return (
		<button
			onClick={onClick}
			className={`px-4 py-2 rounded transition duration-300 ease-in-out border border-[#1E4147] ${colorClass} ${hoverColorClass} ${widthClass} flex items-center justify-center`}
		>
			{text}
			{children && <span className="ml-2">{children}</span>}
		</button>
	);
};

export default Button;
