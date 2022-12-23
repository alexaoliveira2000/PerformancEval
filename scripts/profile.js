var loadProfilePage = function (id) {
    clearElementChildren("wrapper");

    let ownProfile = authenticatedEmployee.id === id;
    let employee = ownProfile ? authenticatedEmployee : employees.filter(e => e.id === id)[0];
    let lastHistory = employee.history[employee.history.length - 1];

    let wrapper = document.getElementById("wrapper");
    wrapper.innerHTML = `
        <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div class="container-fluid d-flex flex-column p-0"><a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                    <div class="sidebar-brand-text mx-3"><span>PerformancEval</span></div>
                </a>
                <hr class="sidebar-divider my-0">
                <ul class="navbar-nav text-light" id="accordionSidebar">
                    <li class="nav-item"><a role="button" class="nav-link" onClick="loadEmployeesPage()"><i class="fas fa-table"></i><span>Colaboradores</span></a></li>
                    <li class="nav-item"><a role="button" class="nav-link active" onClick="loadProfilePage(${authenticatedEmployee.id})"><i class="fas fa-user"></i><span>Perfil</span></a></li>
                    <li class="nav-item"><a role="button" class="nav-link" onClick="loadLoginPage()"><i class="far fa-user-circle"></i><span>Logout</span></a></li>
                    <li class="nav-item"></li>
                </ul>
            </div>
        </nav>
        <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                    <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
                        <ul class="navbar-nav flex-nowrap ms-auto">
                            <li class="nav-item dropdown d-sm-none no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i class="fas fa-search"></i></a>
                                <div class="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                    <form class="me-auto navbar-search w-100">
                                        <div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Search for ...">
                                            <div class="input-group-append"><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li class="nav-item dropdown no-arrow mx-1">
                                <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"></a>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                        <h6 class="dropdown-header">alerts center</h6><a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="me-3">
                                                <div class="bg-primary icon-circle"><i class="fas fa-file-alt text-white"></i></div>
                                            </div>
                                            <div><span class="small text-gray-500">December 12, 2019</span>
                                                <p>A new monthly report is ready to download!</p>
                                            </div>
                                        </a><a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="me-3">
                                                <div class="bg-success icon-circle"><i class="fas fa-donate text-white"></i></div>
                                            </div>
                                            <div><span class="small text-gray-500">December 7, 2019</span>
                                                <p>$290.29 has been deposited into your account!</p>
                                            </div>
                                        </a><a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="me-3">
                                                <div class="bg-warning icon-circle"><i class="fas fa-exclamation-triangle text-white"></i></div>
                                            </div>
                                            <div><span class="small text-gray-500">December 2, 2019</span>
                                                <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                            </div>
                                        </a><a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                    </div>
                                </div>
                            </li>
                            <div class="d-none d-sm-block topbar-divider"></div>
                            <li class="nav-item dropdown no-arrow">
                                <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span class="d-none d-lg-inline me-2 text-gray-600 small">${authenticatedEmployee.name}</span></a>
                                    <div class="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                                        <a role="button" class="dropdown-item" onClick="loadProfilePage(${authenticatedEmployee.id})"><i class="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Perfil</a>
                                        <div class="dropdown-divider"></div>
                                        <a role="button" class="dropdown-item" onClick="loadLoginPage()"><i class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
        <div class="container-fluid">
                        <div class="d-sm-flex justify-content-between align-items-center mb-4">
                            <h3 class="text-dark mb-0">Perfil</h3>
                            <a class="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" onClick="loadEmployeeHistoryPage(${employee.id})">Histórico de Avaliações</a>
                        </div>
                    <div class="row mb-3">
                        <div class="col">
                            <div class="row">
                                <div class="col">
                                    <div class="card shadow d-xl-flex mb-3">
                                        <div class="card-header py-3">
                                            <p class="text-primary m-0 fw-bold">Informação do Colaborador</p>
                                        </div>
                                        <div class="card-body">
                                            <form>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="mb-3"><label class="form-label" for="first_name"><strong>Nome</strong></label><strong class="d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">${employee.name}</strong></div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="mb-3"><label class="form-label" for="last_name"><strong>Data de Nascimento</strong></label><strong class="d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">${format(employee.birthDate)}</strong></div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="mb-3"><label class="form-label" for="username"><strong>Cargo</strong></label><strong class="d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">${lastHistory.role}</strong></div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="mb-3"><label class="form-label" for="email"><strong>Departamento</strong></label><strong class="d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">${employee.department}</strong></div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="mb-3"><label class="form-label" for="first_name"><strong>Salário</strong></label><strong class="d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">${lastHistory.newSalary + " €"}</strong></div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="mb-3"><label class="form-label" for="last_name"><strong>Username</strong></label><strong class="d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">${employee.username}</strong></div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3 d-none">
                                <div class="col">
                                    <div class="card text-white bg-primary shadow">
                                        <div class="card-body">
                                            <div class="row mb-2">
                                                <div class="col">
                                                    <p class="m-0">Peformance</p>
                                                    <p class="m-0"><strong>65.2%</strong></p>
                                                </div>
                                                <div class="col-auto"><i class="fas fa-rocket fa-2x"></i></div>
                                            </div>
                                            <p class="text-white-50 small m-0"><i class="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card text-white bg-success shadow">
                                        <div class="card-body">
                                            <div class="row mb-2">
                                                <div class="col">
                                                    <p class="m-0">Peformance</p>
                                                    <p class="m-0"><strong>65.2%</strong></p>
                                                </div>
                                                <div class="col-auto"><i class="fas fa-rocket fa-2x"></i></div>
                                            </div>
                                            <p class="text-white-50 small m-0"><i class="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="chartContainer" style="height: 300px; width: 100%;">
                            <div class="row">
                                <div class="col">
                                    <div class="card shadow mb-4">
                                        <div class="card-header d-flex justify-content-between align-items-center">
                                            <h6 class="text-primary fw-bold m-0">Salário - Visão Geral</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="chart-area">
                                                <canvas id="salaryChart" style="display: block; height: 320px; width: 100%" width: 100%></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card shadow mb-4">
                                        <div class="card-header d-flex justify-content-between align-items-center">
                                            <h6 class="text-primary fw-bold m-0">Performance - Visão Geral</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="chart-area">
                                                <canvas id="performanceChart" style="display: block; height: 320px; width: 100%" width: 100%></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `

    salaryChart(employee);
    performanceChart(employee);
}

function format(inputDate) {
    let date, month, year;

    date = inputDate.getDate();
    month = inputDate.getMonth() + 1;
    year = inputDate.getFullYear();

    date = date
        .toString()
        .padStart(2, '0');

    month = month
        .toString()
        .padStart(2, '0');

    return `${date}/${month}/${year}`;
}

let salaryChart = function (employee) {

    let chartLabels = [];
    employee.history.forEach(function (evaluation) {
        chartLabels.push(String(evaluation.date.getFullYear()));
    });
    let chartData = [];
    employee.history.forEach(function (evaluation) {
        chartData.push(evaluation.newSalary);
    });

    const salaryChart = document.getElementById('salaryChart');
    new Chart(salaryChart, {
        type: 'line',
        data: {
            labels: chartLabels,
            datasets: [{
                label: 'Salário',
                data: chartData,
                borderWidth: 1
            }]
        },
        options: {
            tension: 0.4,
            scales: {
                y: {
                    ticks: {
                        callback: function (value, index, ticks) {
                            return value + ' €';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

}

let performanceChart = function (employee) {

    let chartLabels = [];
    employee.history.forEach(function (evaluation) {
        chartLabels.push(String(evaluation.date.getFullYear()));
    });
    let chartData = [];
    employee.history.forEach(function (h) {
        chartData.push(performanceToValue(h.calculatedGrade));
    });

    const performanceChart = document.getElementById('performanceChart');
    new Chart(performanceChart, {
        type: 'line',
        data: {
            labels: chartLabels,
            datasets: [{
                label: 'Performance',
                data: chartData,
                borderWidth: 1
            }]
        },
        options: {
            tension: 0.4,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value, index, ticks) {
                            if (Number.isInteger(value))
                                return valueToPerformance(value);
                        }
                    },
                    max: 5
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

let getSemester = function (date) {
    return date.getMonth() < 6 ? "1º Semestre" : "2º Semestre";
}