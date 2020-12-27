<template>
  <div>
    <div class="div" style="width:400px;height:400px" ref="chart"></div>
    <div class="div" style="width:400px;height:400px" ref="chart2"></div>
    <div class="div" style="width:400px;height:400px" ref="chart3"></div>
  </div>
</template>
<script>
const echarts = require("echarts");
export default {
  data() {
    return {};
  },
  methods: {
    initCharts() {
      let myChart = echarts.init(this.$refs.chart);
      let myChart2 = echarts.init(this.$refs.chart2);
      let myChart3 = echarts.init(this.$refs.chart3);
      // 绘制图表
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });

      myChart2.setOption({
        title: {},
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      });

      myChart3.setOption({
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {},
          },
        },
        series: [
          {
            axisLine: {
              show: true,
              lineStyle: {
                color: [
                  [
                    1,
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0.1,
                        color: "#4ed6b3",
                      },
                      {
                        offset: 0.5,
                        color: "#b2df6b",
                      },
                    ]),
                  ],
                ],
                width: 23,
              },
            },
            name: "温度",
            type: "gauge",
            radius: "40%",
            max: 50,
            startAngle: 180, //开始角度 左侧角度
            endAngle: 0, //结束角度 右侧
            splitNumber: 6,
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              length: "45%",
              width: 3,
            },
            itemStyle: {
              color: "#2adff1",
            },
            detail: {
              formatter: "{value}°C",
              offsetCenter: [0, "-120px"],
              fontSize: 30,
              lineHeight: 24,
              color: "auto",
            },
            data: [
              {
                value: 26.3,
              },
            ],
          },
        ],
      });
      setInterval(function() {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        myChart.setOption(option, true);
      }, 2000);
    },
  },
  mounted() {
    this.initCharts();
  },
};
</script>

<style lang="less">
.div {
  display: inline-block;
}
</style>
