import { ReactNode } from "react";
import {
  Card,
  Flex,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
} from "@tremor/react";

interface TableColumn {
  key: string;
  title: string;
}
export type DataItem= { [key: string]: string | number }

type TableCardProps<T extends DataItem> ={
  data: Array<T>;
  columns: TableColumn[];
  isLoading?: boolean;
  dateRangePicker?: ReactNode;
  className?: string; // Clase CSS opcional
}
export function TableCard<T extends DataItem>({
  data,
  columns,
  dateRangePicker,
  className,
  isLoading = false,
}: TableCardProps<T>) {
  return (
    <Card>
      {dateRangePicker && (
        <Flex justifyContent="start" className="mt-6">
          {dateRangePicker}
        </Flex>
      )}
      {
        <Table className={`mt-6 ${className}`}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableHeaderCell key={column.key}>
                  {column.title}
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {isLoading && (
              <TableRow key={"loading"} className="text-center ">
                <TableCell
                  className="text-center "
                  colSpan={columns.length}
                  key={"loadingCell"}
                >
                  Loading...
                </TableCell>
              </TableRow>
            )}
            {!isLoading && data.length === 0 && (
              <TableRow key={"empty"} className="text-center ">
                <TableCell
                  className="text-center "
                  colSpan={columns.length}
                  key={"emptyCell"}
                >
                  No hay datos disponibles.
                </TableCell>
              </TableRow>
            )}
            {!isLoading &&
              data.length > 0 &&
              data.map((item,index) => (
                <TableRow key={`${item[columns[0].key]} ${index}`}>
                  {columns.map((column) => (
                    <TableCell key={column.key + item[column.key]}>
                      {item[column.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      }
    </Card>
  );
}
