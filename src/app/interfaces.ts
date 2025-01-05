import { ReactNode } from "react";

export interface ButtonProps {
    text: string;
    colorClass?: string;
    hoverColorClass?: string;
    widthClass?: string;
    onClick?: () => void;
    children?: ReactNode;
  }