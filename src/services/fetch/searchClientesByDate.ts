import { backendApi } from "../../api/backendApi";
import { formatDateRange } from "../../helpers/formatDateRange";
import { ClienteData } from "../../models/DTO/ClienteDTO";
import { DateRange } from "../../models/interfaces/DateRange";


export const searchClientesByDate = async ({fechainicial=new Date(1900, 1, 1),fechafinal=new Date()}: DateRange): Promise<ClienteData[]> => {
 
  const dateRangeFormat = formatDateRange({fechainicial,fechafinal})
  
  const { data } = await backendApi.post("cliente", dateRangeFormat);
 
  return data;
};
