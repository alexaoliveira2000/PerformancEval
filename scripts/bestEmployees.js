var loadBestEmployee = function () {
    clearElementChildren("wrapper");
    let wrapper = document.getElementById("wrapper");
    wrapper.innerHTML = `
        <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div class="container-fluid d-flex flex-column p-0"><a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                    <div class="sidebar-brand-text mx-3"><span>PerformancEval</span></div>
                </a>
                <hr class="sidebar-divider my-0">
                <ul class="navbar-nav text-light" id="accordionSidebar">
                <li class="nav-item"><a role="button" class="nav-link" onClick="loadEmployeesPage()"><i class="fas fa-table"></i><span>Colaboradores</span></a></li>
                    <li class="nav-item"><a role="button" class="nav-link" onClick="loadProfilePage(${authenticatedEmployee.id})"><i class="fas fa-user"></i><span>Perfil</span></a></li>
                    <li class="nav-item"><a role="button" class="nav-link active" onClick="loadBestEmployee()"><i class="fas fa-medal"></i><span>Best Employees</span></a></li>
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
            </div>
            <div class="container-fluid">

            <h3 class="text-dark mb-4">Best Employees</h3>

            <div class="employees">
            
                <div class="cardE">
                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="Avatar" style="width:100%">
                    <div class="containerE">
                    <a role="button" onClick="loadProfilePage(${authenticatedEmployee.id})"> 
                    <h4>${authenticatedEmployee.name}</h4>
                    </a>
                    <p>Programmer</p>
                   </div>
                </div>
                <div class="cardE">
                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="Avatar" style="width:100%">
                    <div class="containerE">
                    <a role="button" onClick="loadProfilePage(${6})"> 
                    <h4>Ana Leite</h4>
                    </a>
                    <p>Manager</p>
                   </div>
                </div>
                <div class="cardE">
                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="Avatar" style="width:100%">
                    <div class="containerE">
                    <a role="button" onClick="loadProfilePage(${5})"> 
                    <h4>Mariana Gonçalves</h4>
                    </a>
                    <p>Programmer</p>
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

