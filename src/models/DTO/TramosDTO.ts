import { DataItem } from "../DataItem";

export interface TramoData extends DataItem {
  Linea: string;
  consumo: number;
  costo: number;
  perdidas: number;
}