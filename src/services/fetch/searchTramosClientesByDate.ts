import { backendApi } from "../../api/backendApi";
import { DataItem } from "../../components/common";

export interface TramoClienteData extends DataItem {
  Linea: string;
  TipoConsumo: number;
  perdidas: number;
}
export const searchTramosClientesByDate = async ({fechainicial=new Date(1900, 1, 1),fechafinal=new Date()}: {
  fechainicial: Date | undefined;
  fechafinal: Date | undefined;
}): Promise<TramoClienteData[]> => {
 
  const dateRangeFormat = {
    fechainicial: new Intl.DateTimeFormat("az").format(fechainicial),
    fechafinal: new Intl.DateTimeFormat("az").format(fechafinal),
  };
  const { data } = await backendApi.post("tramos-cliente", dateRangeFormat);
  return data;
};
