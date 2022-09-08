import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

interface DateValue {
    count: number,
    date: string
}

const Calendar = () => {
  return (
    <div className="container">
      <h1>Calendar test</h1>
      <div>
        <CalendarHeatmap
          // 表示させる月
          startDate={new Date("2022-07-01")}
          endDate={new Date("2022-12-01")}

          values={[
            { date: "2022-07-03", count: 1 },
            { date: "2022-08-22", count: 2 },
            { date: "2022-07-29", count: 4 },
            { date: '2022-10-01', count: 1 },
            { date: '2022-10-03', count: 2 },
            { date: '2022-10-06', count: 3 },
            { date: '2022-10-10', count: 4 },
            { date: '2022-10-07', count: 1 },
            { date: '2022-09-15', count: 3 },
            // ...and so on
          ]}

          // color
          classForValue={(value: DateValue) => {
            if (!value) {
              return "color-empty";
            }
            return `color-scale-${value.count}`;
          }}
        />
      </div>
    </div>
  );
};

export default Calendar;
