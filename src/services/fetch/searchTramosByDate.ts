import { backendApi } from "../../api/backendApi";
import { DataItem } from "../../components/common";

export interface TramoData extends DataItem {
  Linea: string;
  consumo: number;
  costo: number;
  perdidas: number;
}
export const searchTramosByDate = async ({fechainicial=new Date(1900, 1, 1),fechafinal=new Date()}: {
  fechainicial: Date | undefined;
  fechafinal: Date | undefined;
}): Promise<TramoData[]> => {
  
  const dateRangeFormat = {
    fechainicial: new Intl.DateTimeFormat("az").format(fechainicial),
    fechafinal: new Intl.DateTimeFormat("az").format(fechafinal),
  };

  const { data } = await backendApi.post("tramos", dateRangeFormat);

  return data;
};
