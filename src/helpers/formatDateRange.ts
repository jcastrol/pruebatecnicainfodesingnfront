import { DateRange } from "../models/interfaces/DateRange";

export const formatDateRange = ({fechainicial,fechafinal}:DateRange):{fechainicial:string,fechafinal:string} => {
  return (
    {
      fechainicial: new Intl.DateTimeFormat("az").format(fechainicial),
      fechafinal: new Intl.DateTimeFormat("az").format(fechafinal),
    }
  )
}