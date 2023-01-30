var loadEmployeesPage = function () {
    clearElementChildren("wrapper");
    let wrapper = document.getElementById("wrapper");
    wrapper.innerHTML = `
        <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div class="container-fluid d-flex flex-column p-0"><a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                    <div class="sidebar-brand-text mx-3"><span>PerformancEval</span></div>
                </a>
                <hr class="sidebar-divider my-0">
                <ul class="navbar-nav text-light" id="accordionSidebar">
                <li class="nav-item"><a role="button" class="nav-link active" onClick="loadEmployeesPage()"><i class="fas fa-table"></i><span>Colaboradores</span></a></li>
                    <li class="nav-item"><a role="button" class="nav-link" onClick="loadProfilePage(${authenticatedEmployee.id})"><i class="fas fa-user"></i><span>Perfil</span></a></li>
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
                    <h3 class="text-dark mb-4">Colaboradores</h3>

                    <div class="card shadow">
                        <div class="card-header py-3" style="height: 55px;">
                                    <div class="d-sm-flex justify-content-between align-items-center mb-4" style="height: 30px;">
                                        <div class="d-inline-flex float-start align-items-center" style="height: 100%;">
                                            <p class="text-primary m-0 fw-bold justify-content-start align-items-center">Meu Departamento</p>
                                        </div>
                                    </div>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                <table class="table my-0" id="dataTable">
                                    ${buildEmployeesTable(authenticatedEmployee.department)}
                                </table>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="card shadow">
                        <div class="card-header py-3" style="height: 55px;">
                                    <div class="d-sm-flex justify-content-between align-items-center mb-4" style="height: 30px;">
                                        <div class="d-inline-flex float-start align-items-center" style="height: 100%;">
                                            <p class="text-primary m-0 fw-bold justify-content-start align-items-center">Todos os Colaboradores</p>
                                        </div>
                                        <div class="d-inline-flex float-end" style="height: 100%;">
                                            <h6 class="d-flex float-start d-sm-flex d-xl-flex justify-content-start align-items-center align-items-sm-center justify-content-xl-center align-items-xl-center" style="height: 30px;">Sort by:</h6>
                                            <div class="dropdown float-end" style="height: 100%;">
                                            <button class="btn btn-primary dropdown-toggle d-flex d-sm-flex d-xl-flex align-items-center align-items-sm-center align-items-xl-center" aria-expanded="false" data-bs-toggle="dropdown" type="button" style="background: rgba(13,110,253,0);color: rgb(0,0,0);height: 30px;border-style: none;font-weight: bold;">Salary</button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">First Item</a>
                                                    <a class="dropdown-item" href="#">Second Item</a>
                                                    <a class="dropdown-item" href="#">Third Item</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                <table class="table my-0" id="dataTable">
                                    ${buildEmployeesTable()}
                                </table>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <footer class="bg-white sticky-footer">
                <div class="container my-auto">
                    <div class="text-center my-auto copyright"><span>IPS - Gestão de Recursos Humanos</span></div>
                </div>
            </footer>
        </div>
    `
}

function getAge(birthDate) {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

let buildEmployeesTable = function (department) {
    let table = "";
    table = `
    <thead>
        <tr>
            <th>Nome</th>
            <th>Posição</th>
            <th>Departamento</th>
            <th>Idade</th>
            <th>Desde</th>
            <th>Salário</th>
        </tr>
    </thead>
    `
    employees.forEach(function (employee) {
        if (department == null || employee.department === department) {
            let lastHistory = employee.history[employee.history.length - 1];
            let age = getAge(employee.birthDate);
            let sinceYear = employee.history.filter(evaluation => evaluation.role === lastHistory.role)[0].date.getFullYear();

            if (employee.canEvaluate) {
                table += `
            <tr>
                <td><button class="button-text" onClick="loadProfilePage(${employee.id})">${employee.name}</button><i style="margin-left: 10px" class="fas fa-star"></i></td>
                <td>${lastHistory.role}</td>
                <td>${employee.department}</td>
                <td>${age}</td>
                <td>${sinceYear}<br></td>
                <td>${lastHistory.newSalary + " €"}</td>
            </tr>
            `;
            } else {
                table += `
            <tr>
            <td><button class="button-text" onClick="loadProfilePage(${employee.id})">${employee.name}</button></td>
            <td>${lastHistory.role}</td>
            <td>${employee.department}</td>
            <td>${age}</td>
            <td>${sinceYear}<br></td>
            <td>${lastHistory.newSalary + " €"}</td>
            </tr>
            `;
            }
        }
    });
    return table;
}

