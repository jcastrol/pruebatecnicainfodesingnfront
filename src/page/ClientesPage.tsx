import { useMemo, useState } from "react";
import { Select, SelectItem } from "@tremor/react";
import { DateRangePickerSpanish, TableCard } from "../components/common";
import { useClientes } from "../hooks/useClientes";

const ClientesPage = () => {
  const { date, setDate, clientesQuery } = useClientes();
  const [select, setselect] = useState<string>('')
  const columnMapping = useMemo(()=>[
    { key: "Linea", title: "Linea" },
    { key: "consumo_residencial", title: "Consumo Residencial" },
    { key: "consumo_comercial", title: "Consumo Comercial" },
    { key: "consumo_industrial", title: "Consumo Industrial" },
    { key: "costo_residencial", title: "Costo Residencial" },
    { key: "costo_comercial", title: "Costo Comercial" },
    { key: "costo_industrial", title: "Costo Industrial" },
    { key: "perdidas_residencial", title: "Perdidas Residenciales" },
    { key: "perdidas_comercial", title: "Perdidas Comercial" },
    { key: "perdidas_industrial", title: "Perdidas Industrial" },
  ].filter((e)=>{
    return e.key==='Linea' || e.key.match(select)
  }),[select]);
  
  if (clientesQuery.error) {
    console.error(clientesQuery.error);
  }

  const component = useMemo(() => {
    return (
      <>
        <DateRangePickerSpanish value={date} onValue={setDate} />
        <div className="max-w-sm mt-auto space-y-6">
        <Select value={select} onValueChange={setselect} placeholder="Filtra por">
          <SelectItem value="residencial">Residencial</SelectItem>
          <SelectItem value="comercial">Comercial</SelectItem>
          <SelectItem value="industrial">Industrial</SelectItem>
        </Select>
        </div>
      </>
    );
  },[date,setDate,select,setselect]);

  return (
    <>
      <header className="bg-white ">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Clientes
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <TableCard
            data={clientesQuery?.data || []}
            columns={columnMapping}
            dateRangePicker={component}
            isLoading={clientesQuery.isLoading || clientesQuery.isFetching}
          />
        </div>
      </main>
    </>
  );
};

export default ClientesPage;
