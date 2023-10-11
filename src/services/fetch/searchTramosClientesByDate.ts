import { backendApi } from "../../api/backendApi";
import { formatDateRange } from "../../helpers/formatDateRange";
import { TramoClienteData } from "../../models/DTO/TramosClienteDTO";
import { DateRange } from "../../models/interfaces/DateRange";

export const searchTramosClientesByDate = async ({fechainicial=new Date(1900, 1, 1),fechafinal=new Date()}: DateRange): Promise<TramoClienteData[]> => {
 
  const dateRangeFormat = formatDateRange({fechainicial,fechafinal});
  
  const { data } = await backendApi.post("tramos-cliente", dateRangeFormat);
  return data;
};
