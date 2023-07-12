<template>
  <div id="myEcharts">
    <div ref="mychart" id="mychart" class="mychart"></div>
    <el-button @click="showData=!showData">123123</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" v-show="showData"/>
      <el-table-column prop="name" label="Name" width="180"/>
      <el-table-column prop="address" label="Address"/>
    </el-table>
  </div>
</template>

<script>
// import * as echarts from 'echarts/core';
import {init} from 'echarts';

export default {
  name: 'myEcharts',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
      showData: false,
    }
  },
  mounted() {
    this.initEcharts()
  },
  methods: {
    initEcharts() {
      let option = {
        color: ['', 'red', 'green'],
        grid: {
          top: '80'
        }
        ,
        tooltip: {
          postion: 'top',
          trigger: 'axis',
        }
        ,
        xAxis: [
          {
            type: 'category',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            name: '小时/h',
            nameLocation: "center",
            nameGap: 43,
            show: true,
          },
          {

            type: 'time',
            show: false,
            axisLabel: {
              formatter: function (value) {
                var showH = moment(value).format('HH')
                return showH
              }
            },
            splitNumber: 24,
          }],
        yAxis: [
          {
            name: '分钟/min',
            nameLocation: "center",
            nameGap: 43,
            type: 'category',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
          },
          {
            name: '深度/m',
            type: 'value',
            nameGap: 43,
            nameLocation: "center",
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },

          }],
        // visualMap: {
        //   show: false,
        //   type: "piecewise",
        //   orient: "vertical",
        //   // orient: 'horizontal',
        //   calculate: true,
        //   left: '10',
        //   top: '0',


        // },
        visualMap: [],
        legend: {
          show: false,
          data: ['', '井深', '钻头位置'],
          top: '60'
        }
        ,
        series: [
          {
            name: 'Punch Card',
            type: 'heatmap',
            xAxisIndex: 0,
            label: {
              show: true
            },
            data: [],
            itemStyle: {
              borderColor: '#ccc',
              borderWidth: 1
            },
            emphasis: {
              show: false,
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            tooltip: {
              show: false,
              trigger: 'axis'
            }
          },
          {
            name: '井深',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: [],
            yAxisIndex: 1,
            xAxisIndex: 1,
            lineStyle: {
              color: 'red'
            },
            large: true,
            tooltip: {
              show: false,
              trigger: 'axis',
              position: function (pt) {
                return pt
              },
              formatter: function (params) {
                return params
              }

            }
          },
          {
            name: '钻头位置',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: [],
            xAxisIndex: 1,
            yAxisIndex: 1,
            lineStyle: {
              color: 'green'
            },
            large: true,
            tooltip: {
              show: false,
              trigger: 'axis',
              position: function (pt) {
                return pt
              },
              formatter: function (params) {
                return params
              }

            }
          }
        ]
      }
      this.$nextTick(() => {
        let chart = init(document.getElementById(('mychart')))
        chart.setOption(option)
      })
    }
  }
}
</script>
<style>
#myEcharts {
  width: 100%;
  height: 100%;

  .mychart {
    width: 450px;
    height: 750px;
    margin: 20px auto;
    background: aquamarine;
  }
}
</style>
