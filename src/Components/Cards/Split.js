import React from "react";
import DonutChart from "react-donut-chart";

const reactDonutChartdata = [
  {
    label: "NDC",
    value: 25,
    color: "#00E396",
  },
  {
    label: "RDC",
    value: 65,
    color: "#FEB019",
  },
  {
    label: "STOCKIST",
    value: 100,
    color: "#FF4560",
  },
  {
    label: "HOSPITAL",
    value: 15,
    color: "#775DD0",
  },
];
const reactDonutChartBackgroundColor = [
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0",
];
const reactDonutChartInnerRadius = 0.7;
const reactDonutChartSelectedOffset = 0.02;
const reactDonutChartHandleClick = (item, toggled) => {
  if (toggled) {
    console.log(item);
  }
};
let reactDonutChartStrokeColor = "#FFFFFF";
let innerTextClassName = "";
const reactDonutChartOnMouseEnter = (item) => {
  let color = reactDonutChartdata.find((q) => q.label === item.label).color;
  reactDonutChartStrokeColor = color;
};

function Split() {
  return (
    <div
      className=" border bg-white rounded-lg my-5 mx-1 lg:mx-2 shadow-lg w-[366.7px] h-[276px] lg:h-[338px] lg:w-[420px]"
      
    >
      <div className="flex  justify-between p-4 md:p-4 ">
        <div className="flex items-center">
          <div className="text-xl">
            <p className="text-black leading-none font-medium	">Dexfund Split</p>
          </div>
        </div>
        <div className="items-center">
          <p className="text-black font-medium">...</p>
        </div>
      </div>
      <div className="flex justify-center h-[288px] pt-5 font-medium">
        <DonutChart
          width={300}
          height={200}
          onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
          strokeColor={reactDonutChartStrokeColor}
          data={reactDonutChartdata}
          colors={reactDonutChartBackgroundColor}
          innerRadius={reactDonutChartInnerRadius}
          selectedOffset={reactDonutChartSelectedOffset}
          onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
        />
      </div>
    </div>
  );
}

export default Split;
