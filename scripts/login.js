window.onload = function () {
    loadLoginPage();
}

var loadLoginPage = function() {
    authenticatedEmployee = null;
    let wrapper = document.getElementById("wrapper");
    wrapper.innerHTML = `
    <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-12 col-xl-10">
                    <div class="card shadow-lg o-hidden border-0 my-5" style="margin-right: 200px; margin-left: 200px;">
                        <div class="card-body p-0">
                            <div class="p-5">
                                <div class="text-center">
                                    <h4 class="text-dark mb-4">PerformancEval</h4>
                                </div>
                                <form class="user">
                                    <div class="mb-3"><input class="form-control form-control-user" type="username"
                                            id="username" placeholder="Username" name="username"></div>
                                    <div class="mb-3"><input class="form-control form-control-user" type="password"
                                            id="password" placeholder="Password" name="password"></div>
                                    <button id="loginButton" class="btn btn-primary d-block btn-user w-100"
                                        type="button">Login</button>
                                    <hr>
                                    <hr>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

    let loginButton = document.getElementById("loginButton")

    loginButton.addEventListener("click", function () {
        let usernameInput = document.getElementById("username")
        let passwordInput = document.getElementById("password")
        employee = employees.filter(employee => employee.username === usernameInput.value)[0];

        if (!usernameInput.value) {
            return;
        } else if (!employee) {
            window.alert("O username \"" + usernameInput.value + "\" não existe!");
            return;
        } else if (employee.password != passwordInput.value) {
            window.alert("A password do utilizador \"" + usernameInput.value + "\" está incorreta!");
            return;
        }
        authenticatedEmployee = employee;
        loadEmployeesPage();
    })

}

var clearElementChildren = function (elementId, elementType) {
    let element = document.getElementById(elementId);
    let node = element.firstChild;
    while (node) {
        let tempNode = node.nextSibling;
        if (!elementType || node.tagName === elementType) {
            element.removeChild(node);
        }
        node = tempNode;
    }
}