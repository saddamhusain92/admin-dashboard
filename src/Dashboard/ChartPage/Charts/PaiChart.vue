<template>
    <Pie :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
        :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>
<script>
import { Pie } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    Plugin
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
    name: 'PeiChart',
    components: { Pie },
    props: {
        chartId: {
            type: String,
            default: 'pie-chart'
        },
        datasetIdKey: {
            type: String,
            default: ''
        },
        width: {
            type: Number,
            default: 200
        },
        height: {
            type: Number,
            default: 300
        },
        cssClasses: {
            default: 'chartClass',
            type: String
        },
        styles: {
            type: Object,
            default: () => { }
        },
        plugins: {
            type: Object,
            default: () => { }
        }
    },
    data() {
        return {
            chartData: {
                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                datasets: [{
                    label: 'Data One',
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [40, 20, 80, 10]
                }]
            },
            chartOptions: {
                responsive: false
            }
        }
    }
}
</script>
<style>

</style>