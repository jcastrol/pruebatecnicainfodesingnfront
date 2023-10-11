import { useState,useEffect } from 'react'
import { useQuery } from '@tanstack/react-query';

import { DateRangePickerValue } from '@tremor/react';
import { searchClientesByDate } from '../services/fetch';


export const useClientes = () => {
  const [date, setDate] = useState<DateRangePickerValue>();
  const clientesQuery = useQuery(
    ['clientes'],
    () => searchClientesByDate({fechainicial:date?.from,fechafinal:date?.from}),
  );
  useEffect(()=>{
    if(date?.from && date?.to){
      clientesQuery.refetch()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[date])

  return (
    {
      clientesQuery,
      date,
      setDate
    }
  )
}