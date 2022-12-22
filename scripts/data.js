var authenticatedEmployee = null;

var employees = [
    {
        id: 1,
        username: "alex",
        password: "pass",
        name: "Alexandre Oliveira",
        department: "Consultoria",
        birthDate: new Date(2000, 05, 23),
        isActive: true,
        canEvaluate: false,
        history: [
            {
                year: 2018,
                role: "Developer",
                performance: "On Target",
                salary: 9000,
                evaluatorEmployeeId: 3
            },
            {
                year: 2019,
                role: "Developer",
                performance: "Above Target",
                salary: 9100,
                evaluatorEmployeeId: 3
            },
            {
                year: 2020,
                role: "Developer",
                performance: "High Performance",
                salary: 9200,
                evaluatorEmployeeId: 3
            },
            {
                year: 2021,
                role: "Developer",
                performance: "Above Target",
                salary: 9250,
                evaluatorEmployeeId: 3
            },
            {
                year: 2022,
                role: "Developer",
                performance: "Mostly on Target",
                salary: 9250,
                evaluatorEmployeeId: 3
            }
        ]
    },
    {
        id: 2,
        username: "joaoalmeida",
        password: "pass",
        name: "João Almeida",
        department: "Auditoria",
        birthDate: new Date(1998, 01, 01),
        isActive: true,
        canEvaluate: false,
        history: [
            {
                year: 2021,
                role: "Programmer",
                performance: "Above Target",
                salary: 10000,
                evaluatorEmployeeId: 3
            },
            {
                year: 2022,
                role: "Developer",
                performance: "Above Target",
                salary: 10500,
                evaluatorEmployeeId: 3
            }
        ]
    },
    {
        id: 3,
        username: "tiagosantos",
        password: "pass",
        name: "Tiago Santos",
        department: "Auditoria",
        birthDate: new Date(1995, 11, 19),
        isActive: true,
        canEvaluate: true,
        history: [
            {
                year: 2022,
                role: "Manager",
                performance: "On Target",
                salary: 14000,
                evaluatorEmployeeId: 3
            }
        ]
    }
]

