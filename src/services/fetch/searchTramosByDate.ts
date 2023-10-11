import { backendApi } from "../../api/backendApi";
import { formatDateRange } from "../../helpers/formatDateRange";
import { TramoData } from "../../models/DTO/TramosDTO";
import { DateRange } from "../../models/interfaces/DateRange";

export const searchTramosByDate = async ({fechainicial=new Date(1900, 1, 1),fechafinal=new Date()}: DateRange): Promise<TramoData[]> => {
  
  const dateRangeFormat = formatDateRange({fechainicial,fechafinal})

  const { data } = await backendApi.post("tramos", dateRangeFormat);

  return data;
};
