var employeeLabel = [],
  // employeeSalaryData = [],
  employeeAgeData = []

async function dummyChart() {
  await getDummyData()
  let ctx = document.getElementById('myChart').getContext('2d')
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: employeeLabel,
      datasets: [
        // {
        //   label: 'Employee Salary',
        //   data: employeeSalaryData,
        //   backgroundColor: ['blue'],
        //   borderColor: [
        //     'rgba(255, 99, 132, 1)',
        //     'rgba(54, 162, 235, 1)',
        //     'rgba(255, 206, 86, 1)',
        //     'rgba(75, 192, 192, 1)',
        //     'rgba(153, 102, 255, 1)',
        //     'rgba(255, 159, 64, 1)',
        //   ],
        //   borderWidth: 1,
        // },

        {
          label: 'Employee Age',
          data: employeeAgeData,
          backgroundColor: ['pink'],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  })
}

dummyChart()
//Fetch Data From Dummy REST API

async function getDummyData() {
  const apiUrl = 'https://dummy.restapiexample.com/api/v1/employees'

  const response = await fetch(apiUrl)
  const barChartData = await response.json()

  //const salary = barChartData.data.map((x) => x.employee_salary)
  const age = barChartData.data.map((x) => x.employee_age)
  const name = barChartData.data.map((x) => x.employee_name)

  console.log(age, name)

  employeeLabel = name
  //employeeSalaryData = salary

  employeeAgeData = age
}
