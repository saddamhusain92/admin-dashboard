<template>
    <div>
        <div class="text-ceter text-2xl">
            All Reports
        </div>
    <div class="grid grid-rows-1 sm:grid-rows-3 w-full  grid-flow-col gap-2">
  <div class="bg-gray-100 rounded-lg relative h-[300px]" ><BarChart/></div>
  <div class="bg-gray-100 rounded-lg relative"><LineChart/></div>
  <div class="bg-gray-100 rounded-lg relative flex justify-center" ><PeiChart/></div>
</div>
<div class="h-[110px]">

</div>
    </div>
  
</template>
<script>
import BarChart from '@/Dashboard/ChartPage/Charts/BarChart.vue'
import LineChart from '@/Dashboard/ChartPage/Charts/LineChart.vue'
import PeiChart from '@/Dashboard/ChartPage/Charts/PaiChart.vue'
export default {
    name: 'Main',
    components:{
        BarChart,LineChart,PeiChart
    }
}
</script>
<style>
.chartClass{
    position: absolute;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>