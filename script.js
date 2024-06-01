$(document).ready(function () {
  $('#example').DataTable({
    pagingType: 'simple_numbers', // Use simple numbers pagination style
    pageLength: 10,
    language: {
      paginate: {
        next: '>',
        previous: '<'
      }
    },
    fixedHeader: {
      header: true,  // Fix the header only
      footer: false  // Don't fix the footer
    }
  });
});
// Check if the canvas element with id 'myChart' exists before initializing a chart
const ctx = document.getElementById('myChart');
if (ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Check if the canvas element with id 'areaChart1' exists before initializing a chart
const ctx1 = document.getElementById('areaChart1');
if (ctx1) {
  new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Page Views',
        data: [5000, 7500, 8000, 6000, 9000],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: 'start'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Page Views'
          }
        }
      },
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20
        }
      }
    }
  });
}

// Check if the canvas element with id 'bar-chart' exists before initializing a chart
const barChartCanvas = document.getElementById('bar-chart');
if (barChartCanvas) {
  new Chart(barChartCanvas, {
    type: 'bar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["blue", "blue", "blue", "blue", "blue"],
        data: [2478, 5267, 734, 784, 433]
      }]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
  });
}

// Check if the canvas element with id 'pie-chart' exists before initializing a chart
const pieChartCanvas = document.getElementById('pie-chart');
if (pieChartCanvas) {
  new Chart(pieChartCanvas, {
    type: 'pie',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["blue", "red", "yellow", "green"],
        data: [2478, 5267, 734, 784]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
  });
}
const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("collapsed");
});