import { DateRangePickerSpanish, TableCard } from "../components/common";
import { useTramos } from "../hooks/useTramos";


const TramosPage = () => {
  const {date,setDate,tramosQuery}=useTramos()
 
  const colunm = [
    { key: "Linea", title: "Linea" },
    { key: "consumo", title: "Consumo" },
    { key: "costo", title: "Costo" },
    { key: "perdidas", title: "Perdidas" },
  ];
  
  if(tramosQuery.error){
    console.log(tramosQuery.error)
  }
  return (
    <>
      <header className="bg-white ">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Tramos
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <TableCard
            data ={tramosQuery?.data  || []}
            columns={colunm}
            dateRangePicker={<DateRangePickerSpanish value={date} onValue={setDate}/>}
            isLoading={(tramosQuery.isLoading || tramosQuery.isFetching)}
          />
        </div>
      </main>
    </>
  );
};

export default TramosPage;
