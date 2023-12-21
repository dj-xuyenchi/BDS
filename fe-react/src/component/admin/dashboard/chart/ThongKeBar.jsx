import { useSelector } from "react-redux";
import { selectLanguage } from "../../../../language/selectLanguage";
import * as echarts from 'echarts';

import { useEffect, useRef } from "react";
function ThongKeBar({
  title = "Doanh số chốt và Khách hàng",
  data = {
    soKhachHangMoi: [],
    soBDSChot: [],
  },
}) {
  const language = useSelector(selectLanguage);
  const chartRef = useRef(null);
  
  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    // Định nghĩa dữ liệu và tùy chọn biểu đồ
    const option = {
      title: {
        text: title,
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Số BDS chốt", "Số khách hàng mới"],
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          // prettier-ignore
          data: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Số BDS chốt",
          type: "bar",
          data: data.soBDSChot,
          markPoint: {
            data: [
              { type: "max", name: "Max" },
              { type: "min", name: "Min" },
            ],
          },
          markLine: {
            data: [{ type: "average", name: "Avg" }],
          },
        },
        {
          name: "Số khách hàng mới",
          type: "bar",
          data: data.soKhachHangMoi,
          markLine: {
            data: [{ type: "average", name: "Avg" }],
          },
        },
      ],
    };

    chart.setOption(option);

    // Đảm bảo rằng biểu đồ được tự động thay đổi kích thước khi cửa sổ trình duyệt thay đổi
    window.addEventListener("resize", () => {
      chart.resize();
    });

    // Xóa sự kiện khi component unmounted
    return () => {
      chart.dispose();
      window.removeEventListener("resize", () => {
        chart.resize();
      });
    };
  }, [data]);
  return (
    <>
      <div ref={chartRef} style={{ width: "100%", height: "400px" }} />
    </>
  );
}

export default ThongKeBar;
