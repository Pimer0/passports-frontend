import { ReactNode } from "react";

export interface ButtonProps {
    text: string;
    colorClass?: string;
    hoverColorClass?: string;
    widthClass?: string;
    onClick?: () => void;
    children?: ReactNode;
  }

  export interface PaysVisitablesProps {
nombres: number;
  }

  export interface AvantagesProps {
    avantage: string;
  }

  export interface ApiError {
    message: string;
    status?: number;
    }
  
    export interface ApiResponse {
      data: Data;
      success: boolean;
      message: string | null;
      statusCode: number;
    }

    export interface Avantage {
      id: number;
      contenu: string;
      paysVisitables: number;
    }
    
   export  interface Data {
      id: number;
      pays: string;
      description: string;
      avantages: Avantage[];
      avantageIds: number[];
    }
    
/*     interface ApiResponse {
      data: Data;
      success: boolean;
      message: string | null;
      statusCode: number;
    } */
    