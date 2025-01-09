import axiosInstance from './axiosConfig';
import { ApiResponse } from '../../interfaces';

const passportService = {
    getOnePassport: async (id: number): Promise<ApiResponse> => {
        try {
        
            const { data } = await axiosInstance.get<ApiResponse>(`/passeport/${id}`);
            return data;
        } catch (error: unknown) {
            
            console.error('Erreur interceptée:', error);
            throw error; 
        }
    }
};

export default passportService;
