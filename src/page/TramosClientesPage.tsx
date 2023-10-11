import { DateRangePickerSpanish, TableCard } from "../components/common";
import { useTramosClientes } from "../hooks/useTramosClientes";


const TramosClientesPage = () => {
  const {date,setDate,tramosClientesQuery}=useTramosClientes()
 
  const columnMapping = [
    { key: "Linea", title: "Linea" },
    { key: "TipoConsumo", title: "Tipo Consumo" },
    { key: "Perdidas", title: "Perdidas" },
  ];
  
  if(tramosClientesQuery.error){
    console.error(tramosClientesQuery.error)
  }
  return (
    <>
      <header className="bg-white ">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Tramos Clientes
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <TableCard
            data ={tramosClientesQuery?.data  || []}
            columns={columnMapping}
            dateRangePicker={<DateRangePickerSpanish value={date} onValue={setDate}/>}
            isLoading={(tramosClientesQuery.isLoading || tramosClientesQuery.isFetching)}
          />
        </div>
      </main>
    </>
  );
};

export default TramosClientesPage;
