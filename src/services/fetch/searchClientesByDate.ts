import { backendApi } from "../../api/backendApi";
import { DataItem } from "../../components/common";

export interface LineaData extends DataItem {
  Linea: string;
  consumo_residencial: number;
  consumo_comercial: number;
  consumo_industrial: number;
  perdidas_residencial: number;
  perdidas_comercial: number;
  perdidas_industrial: number;
  costo_residencial: number;
  costo_comercial: number;
  costo_industrial: number;
}
export const searchClientesByDate = async ({fechainicial=new Date(1900, 1, 1),fechafinal=new Date()}: {
  fechainicial: Date | undefined;
  fechafinal: Date | undefined;
}): Promise<LineaData[]> => {
 
  const dateRangeFormat = {
    fechainicial: new Intl.DateTimeFormat("az").format(fechainicial),
    fechafinal: new Intl.DateTimeFormat("az").format(fechafinal),
  };
  
  const { data } = await backendApi.post("cliente", dateRangeFormat);
 
  return data;
};
