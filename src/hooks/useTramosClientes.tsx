import { useState,useEffect } from 'react'
import { useQuery } from '@tanstack/react-query';

import { DateRangePickerValue } from '@tremor/react';
import { searchTramosClientesByDate } from '../services/fetch';


export const useTramosClientes = () => {
  const [date, setDate] = useState<DateRangePickerValue>();
  const tramosClientesQuery = useQuery(
    ['tramos-clientes'],
    () => searchTramosClientesByDate({fechainicial:date?.from,fechafinal:date?.from}),
  );
  useEffect(()=>{
    if(date?.from && date?.to){
      tramosClientesQuery.refetch()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[date])

  return (
    {
      tramosClientesQuery,
      date,
      setDate
    }
  )
}