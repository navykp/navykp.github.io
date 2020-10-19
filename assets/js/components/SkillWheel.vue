<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  data: () => ({
    chartdata: {
      labels: ['.Net Technologies, Javascript, Angular',
                   'RDBMS(MSSQL)', 'Web API, Scripting Languages',
                   'Python, JSP, OOSP Concepts', 'Version Control: Team Foundation Server, Git'],
      datasets: [
        {
          label: 'Data One',
          borderWidth: 0,
          backgroundColor: ['#669cfd','#f5e369','#6cd962',
              '#ff986c','#8e3c3c'],
          hoverBackgroundColor: ['#0439a1','#e0c300','#026d12',
              '#ff5400','#000000'],
          data: [47, 33, 5, 15, 5]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {position: 'left',
          labels: {fontColor: '#fff'}}
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>