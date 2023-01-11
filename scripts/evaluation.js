var loadEvaluationPage = function (id, year, semester) {
    clearElementChildren("wrapper");

    let employee = employees.filter(e => e.id === id)[0];

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
                            <h3 class="text-dark mb-0">Avaliação de Desempenho - ${employee.name}</h3>
                            <div>
                                <a class="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" onClick="loadPendingEvaluationsPage(${employee.id})">Voltar às Avaliações Pendentes</a>
                            </div>
                        </div>
                        <strong>Referente ao ${semester}º Semestre ${year}</strong>
                        <p></p>
                        


                        <div class="card shadow mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h6 class="text-primary fw-bold m-0">Traços</h6>
                        </div>
                        <div class="card-body" style="padding-right: 0px;padding-left: 0px;">
                            <div class="container" style="padding-left: 10px;padding-right: 10px;">
                                <div class="row" style="height: 50px;">
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;min-width: 160px;"><strong class="text-center d-xl-flex align-items-xl-center"></strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;"><strong class="text-center d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">Muito abaixo do esperado</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;"><strong class="text-center d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">Abaixo do esperado</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;"><strong class="text-center d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">O esperado</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;"><strong class="text-center d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">Acima do esperado</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;"><strong class="text-center d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">Muito acima do esperado</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;"><strong class="text-center d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">Excecional</strong></div>
                                </div>
                                <div class="row" style="height: 30px;">
                                    <div class="col d-xl-flex justify-content-xl-start" style="height: 30px;min-width: 160px;"><strong class="d-xl-flex align-items-xl-center">Habilidade</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="habilidade" value="0"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="habilidade" value="1"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="habilidade" value="2"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="habilidade" value="3"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="habilidade" value="4"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="habilidade" value="5"/></div>
                                </div>
                                <div class="row" style="height: 30px;">
                                    <div class="col d-xl-flex justify-content-xl-start" style="height: 30px;min-width: 160px;"><strong class="d-xl-flex align-items-xl-center">Pontualidade</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="pontualidade" value="0"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="pontualidade" value="1"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="pontualidade" value="2"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="pontualidade" value="3"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="pontualidade" value="4"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="pontualidade" value="5"/></div>
                                </div>
                                <div class="row" style="height: 30px;">
                                    <div class="col d-xl-flex justify-content-xl-start" style="height: 30px;min-width: 160px;"><strong class="d-xl-flex align-items-xl-center">Assiduidade</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="assiduidade" value="0"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="assiduidade" value="1"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="assiduidade" value="2"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="assiduidade" value="3"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="assiduidade" value="4"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="assiduidade" value="5"/></div>
                                </div>
                                <div class="row" style="height: 30px;">
                                    <div class="col d-xl-flex justify-content-xl-start" style="height: 30px;min-width: 160px;"><strong class="d-xl-flex align-items-xl-center">Apresentação</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="apresentacao" value="0"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="apresentacao" value="1"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="apresentacao" value="2"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="apresentacao" value="3"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="apresentacao" value="4"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="apresentacao" value="5"/></div>
                                </div>
                                <div class="row" style="height: 30px;">
                                    <div class="col d-xl-flex justify-content-xl-start" style="height: 30px;min-width: 160px;"><strong class="d-xl-flex align-items-xl-center">Honestidade</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="honestidade" value="0"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="honestidade" value="1"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="honestidade" value="2"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="honestidade" value="3"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="honestidade" value="4"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="honestidade" value="5"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h6 class="text-primary fw-bold m-0">Comportamento</h6>
                        </div>
                        <div class="card-body" style="padding-right: 0px;padding-left: 0px;">
                            <div class="container" style="padding-right: 10px;padding-left: 10px;">
                                <div class="row" style="height: 50px;">
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;min-width: 160px;"><strong class="text-center d-xl-flex align-items-xl-center"></strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;"><strong class="text-center d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">Muito abaixo do esperado</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;"><strong class="text-center d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">Abaixo do esperado</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;"><strong class="text-center d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">O esperado</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;"><strong class="text-center d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">Acima do esperado</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;"><strong class="text-center d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">Muito acima do esperado</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;"><strong class="text-center d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">Excecional</strong></div>
                                </div>
                                <div class="row" style="height: 30px;">
                                    <div class="col d-xl-flex justify-content-xl-start" style="height: 30px;min-width: 160px;"><strong class="d-xl-flex align-items-xl-center">Iniciativa</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="iniciativa" value="0"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="iniciativa" value="1"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="iniciativa" value="2"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="iniciativa" value="3"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="iniciativa" value="4"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="iniciativa" value="5"/></div>
                                </div>
                                <div class="row" style="height: 30px;">
                                    <div class="col d-xl-flex justify-content-xl-start" style="height: 30px;min-width: 160px;"><strong class="d-xl-flex align-items-xl-center">Cooperação</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="cooperacao" value="0"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="cooperacao" value="1"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="cooperacao" value="2"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="cooperacao" value="3"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="cooperacao" value="4"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="cooperacao" value="5"/></div>
                                </div>
                                <div class="row" style="height: 30px;">
                                    <div class="col d-xl-flex justify-content-xl-start" style="height: 30px;min-width: 160px;"><strong class="d-xl-flex align-items-xl-center">Responsabilidade</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="responsabilidade" value="0"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="responsabilidade" value="1"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="responsabilidade" value="2"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="responsabilidade" value="3"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="responsabilidade" value="4"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="responsabilidade" value="5"/></div>
                                </div>
                                <div class="row" style="height: 30px;">
                                    <div class="col d-xl-flex justify-content-xl-start" style="height: 30px;min-width: 160px;"><strong class="d-xl-flex align-items-xl-center">Liderança</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="lideranca" value="0"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="lideranca" value="1"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="lideranca" value="2"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="lideranca" value="3"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="lideranca" value="4"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="lideranca" value="5"/></div>
                                </div>
                                <div class="row" style="height: 30px;">
                                    <div class="col d-xl-flex justify-content-xl-start" style="height: 30px;min-width: 160px;"><strong class="d-xl-flex align-items-xl-center">Criatividade</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="criatividade" value="0"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="criatividade" value="1"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="criatividade" value="2"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="criatividade" value="3"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="criatividade" value="4"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="criatividade" value="5"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h6 class="text-primary fw-bold m-0">Resultados</h6>
                        </div>
                        <div class="card-body" style="padding-right: 0px;padding-left: 0px;">
                            <div class="container" style="padding-right: 10px;padding-left: 10px;">
                                <div class="row" style="height: 50px;">
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;min-width: 160px;"><strong class="text-center d-xl-flex align-items-xl-center"></strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;"><strong class="text-center d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">Muito abaixo do esperado</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;"><strong class="text-center d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">Abaixo do esperado</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;"><strong class="text-center d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">O esperado</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;"><strong class="text-center d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">Acima do esperado</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;"><strong class="text-center d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">Muito acima do esperado</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 50px;"><strong class="text-center d-xl-flex align-items-xl-center" style="color: rgb(0,0,0);">Excecional</strong></div>
                                </div>
                                <div class="row" style="height: 30px;">
                                    <div class="col d-xl-flex justify-content-xl-start" style="height: 30px;min-width: 160px;"><strong class="d-xl-flex align-items-xl-center">Quantidade</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="quantidade" value="0"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="quantidade" value="1"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="quantidade" value="2"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="quantidade" value="3"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="quantidade" value="4"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="quantidade" value="5"/></div>
                                </div>
                                <div class="row" style="height: 30px;">
                                    <div class="col d-xl-flex justify-content-xl-start" style="height: 30px;min-width: 160px;"><strong class="d-xl-flex align-items-xl-center">Qualidade</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="qualidade" value="0"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="qualidade" value="1"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="qualidade" value="2"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="qualidade" value="3"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="qualidade" value="4"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="qualidade" value="5"/></div>
                                </div>
                                <div class="row" style="height: 30px;">
                                    <div class="col d-xl-flex justify-content-xl-start" style="height: 30px;min-width: 160px;"><strong class="d-xl-flex align-items-xl-center">Prazos</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="prazos" value="0"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="prazos" value="1"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="prazos" value="2"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="prazos" value="3"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="prazos" value="4"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="prazos" value="5"/></div>
                                </div>
                                <div class="row" style="height: 30px;">
                                    <div class="col d-xl-flex justify-content-xl-start" style="height: 30px;min-width: 160px;"><strong class="d-xl-flex align-items-xl-center">Acidentes</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="acidentes" value="0"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="acidentes" value="1"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="acidentes" value="2"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="acidentes" value="3"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="acidentes" value="4"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="acidentes" value="5"/></div>
                                </div>
                                <div class="row" style="height: 30px;">
                                    <div class="col d-xl-flex justify-content-xl-start" style="height: 30px;min-width: 160px;"><strong class="d-xl-flex align-items-xl-center">Foco</strong></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="foco" value="0"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="foco" value="1"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="foco" value="2"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="foco" value="3"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="foco" value="4"/></div>
                                    <div class="col d-xl-flex justify-content-xl-center" style="height: 30px;"><input type="radio" name="foco" value="5"/></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h6 class="text-primary fw-bold m-0">Comentários</h6>
                        <textarea id="comments" style="width: 100%;margin-top: 5px; margin-bottom: 10px;" placeholder="Nada a apontar."></textarea>
                    </div>

                    <div style="margin-bottom: 20px" class="d-xxl-flex justify-content-xxl-center">
                        <button id="submitButton" class="btn btn-primary" type="button" onClick="submitEvaluation(${id},${year},${semester})">Submeter Avaliação</button>
                    </div>

                </div>
            </div>
    `
}

let submitEvaluation = function (id, year, semester) {
    let employee = employees.filter(e => e.id === id)[0];
    let lastEvaluation = employee.history[employee.history.length - 1];
    let evaluationDate = semester == 1 ? new Date(year, 00, 01) : new Date(year, 06, 01);

    var radios = document.getElementsByTagName('input');
    let elements = [];
    let nbChecked = 0;
    for (i = 0; i < radios.length; i++) {
        if (radios[i].type == 'radio' && radios[i].checked) {
            nbChecked++;
            elements.push(radios[i]);
        }
    }
    if (nbChecked !== 15) {
        window.alert("Preencha todos os campos antes de submeter.");
        return;
    }

    let evaluation = {
        evaluatorEmployeeId: authenticatedEmployee.id,
        date: evaluationDate,
        role: lastEvaluation.role,
        traits: {
            knowhow: parseInt(document.querySelector("input[name=habilidade]:checked").value),
            punctuality: parseInt(document.querySelector("input[name=pontualidade]:checked").value),
            assiduity: parseInt(document.querySelector("input[name=assiduidade]:checked").value),
            appearence: parseInt(document.querySelector("input[name=apresentacao]:checked").value),
            honesty: parseInt(document.querySelector("input[name=honestidade]:checked").value)
        },
        behaviour: {
            initiative: parseInt(document.querySelector("input[name=iniciativa]:checked").value),
            cooperation: parseInt(document.querySelector("input[name=cooperacao]:checked").value),
            responsability: parseInt(document.querySelector("input[name=responsabilidade]:checked").value),
            leadership: parseInt(document.querySelector("input[name=lideranca]:checked").value),
            criativity: parseInt(document.querySelector("input[name=criatividade]:checked").value)
        },
        results: {
            quantity: parseInt(document.querySelector("input[name=quantidade]:checked").value),
            quality: parseInt(document.querySelector("input[name=qualidade]:checked").value),
            deadlines: parseInt(document.querySelector("input[name=prazos]:checked").value),
            accidents: parseInt(document.querySelector("input[name=acidentes]:checked").value),
            focus: parseInt(document.querySelector("input[name=foco]:checked").value)
        },
        comments: document.getElementById("comments").value == "" ? "Nada a apontar." : document.getElementById("comments").value,
        calculatedGrade: null,
        oldSalary: lastEvaluation.newSalary,
        newSalary: null
    }

    let calculatedGrade = calculateGrade(evaluation);
    evaluation.calculatedGrade = calculatedGrade;

    let newSalary = parseInt(calculateSalary(evaluation));
    evaluation.newSalary = newSalary;

    employee.history.push(evaluation);

    loadProfilePage(id);
    window.alert("Avaliação submetida!");

}