<template>
  <div id="myEcharts">
<!--    <el-button @click="showData=!showData">123123</el-button>-->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" v-show="showData"/>
      <el-table-column prop="name" label="Name" width="180"/>
      <el-table-column prop="address" label="Address"/>
    </el-table>
  </div>
</template>

<script>
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

  },
  methods: {

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
