import { DataItem } from "../DataItem";

export interface TramoClienteData extends DataItem {
  Linea: string;
  TipoConsumo: number;
  perdidas: number;
}