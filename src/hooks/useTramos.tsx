import { useState,useEffect } from 'react'
import { useQuery } from '@tanstack/react-query';
import { searchTramosByDate } from '../services/fetch/searchTramosByDate';
import { DateRangePickerValue } from '@tremor/react';


export const useTramos = () => {
  const [date, setDate] = useState<DateRangePickerValue>();
  const tramosQuery = useQuery(
    ['tramos'],
    () => searchTramosByDate({fechainicial:date?.from,fechafinal:date?.from}),
  );
  useEffect(()=>{
    if(date?.from && date?.to){
      tramosQuery.refetch()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[date])

  return (
    {
      tramosQuery,
      date,
      setDate
    }
  )
}