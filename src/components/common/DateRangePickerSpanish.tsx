import {
  DateRangePicker,
  DateRangePickerItem,
  DateRangePickerValue,
} from "@tremor/react";
import { es } from "date-fns/locale";

export function DateRangePickerSpanish({
  value,
  onValue,
}: {
  value: DateRangePickerValue | undefined;
  onValue: (value: DateRangePickerValue) => void;
}) {
  return (
    <DateRangePicker
      className="max-w-md mx-auto"
      value={value}
      onValueChange={onValue}
      locale={es}
      selectPlaceholder="Seleccionar"
      color="rose"
      enableYearNavigation={true}
    >
      <DateRangePickerItem
        key="half"
        value="half"
        from={new Date(2023, 0, 1)}
        to={new Date(2023, 5, 31)}
      >
        Primer semestre
      </DateRangePickerItem>
      <DateRangePickerItem key="ytd" value="ytd" from={new Date(2023, 0, 1)}>
        Año transcurrido
      </DateRangePickerItem>
      <DateRangePickerItem
        key="y2010"
        value="y2010"
        from={new Date(2010, 0, 1)}
        to={new Date(2010, 11, 31)}
      >
        Año 2010
      </DateRangePickerItem>
    </DateRangePicker>
  );
}
