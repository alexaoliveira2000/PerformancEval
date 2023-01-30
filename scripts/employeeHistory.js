var loadEmployeeHistoryPage = function (id) {
    clearElementChildren("wrapper");
    let employee = authenticatedEmployee.id === id ? authenticatedEmployee : employees.filter(e => e.id === id)[0];

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
            <li class="nav-item"><a role="button" class="nav-link" onClick="loadBestEmployee()"><i class="fas fa-medal"></i><span>Best Employees</span></a></li>
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
                <h3 class="text-dark mb-0">Histórico de Avaliações - ${employee.name}</h3>
                <a class="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" onClick="loadProfilePage(${employee.id})">Voltar ao Perfil</a>
            </div>
            ${buildEvaluationCards(employee)}
        </div>
    </div>
    <footer class="bg-white sticky-footer">
        <div class="container my-auto">
            <div class="text-center my-auto copyright"><span>IPS - Gestão de Recursos Humanos</span></div>
        </div>
    </footer>
</div>
    `;

    [...employee.history].reverse().forEach(function (history, index) {
        evaluationChart(history, index);
    });
}

let buildEvaluationCards = function(employee) {

    let today = new Date();
    let newEvaluationDate = new Date(today.setMonth(today.getMonth() + 6));
    let evaluator = employees.filter(e => e.canEvaluate && e.department === employee.department)[0];

    let cards = `
        <div class="card shadow">
            <div class="card-header py-3" style="height: 50px">
                <div class="d-sm-flex justify-content-between align-items-center mb-4">
                    <div><p class="text-primary m-0 fw-bold">${getSemester(newEvaluationDate) + " " +newEvaluationDate.getFullYear()}</p></div>
                    <div><strong>Avaliado por: <button class="button-text" onClick="loadProfilePage(${evaluator.id})">${evaluator.name}</button></strong></div>
                </div>
            </div>
            <div class="card-body">
                <i>Próxima Avaliação</i>
            </div>
        </div>
        <hr />
    `;

    let employeeHistory = [...employee.history].reverse();
    employeeHistory.forEach(function (history, index) {
        cards += buildEvaluationCard(history, index);
    });

    return cards;
}

let buildEvaluationCard = function(evaluation, index) {
    let evaluator = employees.filter(e => e.id === evaluation.evaluatorEmployeeId)[0];
    let card = `
    <div class="card shadow">
                <div class="card-header py-3" style="height: 50px">
                    <div class="d-sm-flex justify-content-between align-items-center mb-4">
                        <div><p class="text-primary m-0 fw-bold">${getSemester(evaluation.date) + " " + evaluation.date.getFullYear()}</p></div>
                        <div><strong>Avaliado por: <button class="button-text" onClick="loadProfilePage(${evaluator.id})">${evaluator.name}</button></strong></div>
                    </div>
                </div>
                <div class="card-body">
                            
                <div class="container">
    <div class="row">
        <div class="col-md-3">
            <div style="height: 240px">
                <canvas id="evaluationChart${index}" style="display: block;">
            </div>
        </div>
        <div class="col-md-3">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Traços</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Habilidade</td>
                            <td>${evaluation.traits.knowhow}</td>
                        </tr>
                        <tr>
                            <td>Pontualidade</td>
                            <td>${evaluation.traits.punctuality}</td>
                        </tr>
                        <tr>
                            <td>Assiduidade</td>
                            <td>${evaluation.traits.assiduity}</td>
                        </tr>
                        <tr>
                            <td>Apresentação</td>
                            <td>${evaluation.traits.appearence}</td>
                        </tr>
                        <tr>
                            <td>Honestidade</td>
                            <td>${evaluation.traits.honesty}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-md-3">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Comportamento</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Iniciativa</td>
                            <td>${evaluation.behaviour.initiative}</td>
                        </tr>
                        <tr>
                            <td>Cooperação</td>
                            <td>${evaluation.behaviour.cooperation}</td>
                        </tr>
                        <tr>
                            <td>Responsabilidade</td>
                            <td>${evaluation.behaviour.responsability}</td>
                        </tr>
                        <tr>
                            <td>Liderança</td>
                            <td>${evaluation.behaviour.leadership}</td>
                        </tr>
                        <tr>
                            <td>Criatividade</td>
                            <td>${evaluation.behaviour.criativity}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-md-3">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Resultados</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Quantidade</td>
                            <td>${evaluation.results.quantity}</td>
                        </tr>
                        <tr>
                            <td>Qualidade</td>
                            <td>${evaluation.results.quality}</td>
                        </tr>
                        <tr>
                            <td>Prazos</td>
                            <td>${evaluation.results.deadlines}</td>
                        </tr>
                        <tr>
                            <td>Acidentes</td>
                            <td>${evaluation.results.accidents}</td>
                        </tr>
                        <tr>
                            <td>Foco</td>
                            <td>${evaluation.results.focus}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
                    <div style="color: black">Comentários:</div>
                    <i>${evaluation.comments}</i>
                    <p></p>
                    <p style="color: black"> Avaliação Final: <b>${evaluation.calculatedGrade}</b> </p>
                </div>
            </div>
        <hr />
    `
    return card;
}


let evaluationChart = function (evaluation, index) {

    let traitsSum = 0;
    let behaviourSum = 0;
    let resultsSum = 0;

    for (value in evaluation.traits) traitsSum += evaluation.traits[value];
    for (value in evaluation.behaviour) behaviourSum += evaluation.behaviour[value];
    for (value in evaluation.results) resultsSum += evaluation.results[value];

    const evalChart = document.getElementById('evaluationChart' + index);
    new Chart(evalChart, {
        type: 'pie',
        data: {
            labels: ["Traços", "Comportamento", "Resultados"],
            datasets: [{
                label: 'Avaliação',
                data: [traitsSum, behaviourSum, resultsSum],
                borderWidth: 1,
                backgroundColor: [
                    '#00008B',
                    '#1F75FE',
                    '#74BBFB'
                  ]
            }],
            hoverOffset: 4
        }
    });

    return evalChart;

}