var authenticatedEmployee = null;

var employees = [
    {
        id: 1,
        username: "alex",
        password: "pass",
        name: "Alexandre Oliveira",
        department: "Consultoria",
        birthDate: new Date(2000, 05, 23),
        hiredDate: new Date(2019, 08, 14),
        isActive: true,
        canEvaluate: false,
        history: [
            {
                evaluatorEmployeeId: 6,
                date: new Date(2020, 00, 01),
                role: "Developer",
                traits: {
                    knowhow: 3,
                    punctuality: 3,
                    assiduity: 3,
                    appearence: 4,
                    honesty: 2
                },
                behaviour: {
                    initiative: 2,
                    cooperation: 3,
                    responsability: 3,
                    leadership: 3,
                    criativity: 2
                },
                results: {
                    quantity: 2,
                    quality: 3,
                    deadlines: 2,
                    accidents: 3,
                    focus: 3
                },
                comments: "Nada a apontar.",
                calculatedGrade: "Above Target",
                oldSalary: 9000,
                newSalary: 9900
            },
            {
                evaluatorEmployeeId: 6,
                date: new Date(2020, 06, 01),
                role: "Developer",
                traits: {
                    knowhow: 4,
                    punctuality: 3,
                    assiduity: 4,
                    appearence: 4,
                    honesty: 4
                },
                behaviour: {
                    initiative: 3,
                    cooperation: 5,
                    responsability: 4,
                    leadership: 4,
                    criativity: 3
                },
                results: {
                    quantity: 3,
                    quality: 4,
                    deadlines: 4,
                    accidents: 3,
                    focus: 4
                },
                comments: "Nada a apontar.",
                calculatedGrade: "High Performance",
                oldSalary: 9900,
                newSalary: 11385
            },
            {
                evaluatorEmployeeId: 6,
                date: new Date(2021, 00, 01),
                role: "Developer",
                traits: {
                    knowhow: 2,
                    punctuality: 3,
                    assiduity: 2,
                    appearence: 2,
                    honesty: 3
                },
                behaviour: {
                    initiative: 3,
                    cooperation: 3,
                    responsability: 2,
                    leadership: 2,
                    criativity: 2
                },
                results: {
                    quantity: 2,
                    quality: 2,
                    deadlines: 3,
                    accidents: 2,
                    focus: 3
                },
                comments: "Nada a apontar.",
                calculatedGrade: "On Target",
                oldSalary: 11385,
                newSalary: 11954
            },
            {
                evaluatorEmployeeId: 6,
                date: new Date(2021, 06, 01),
                role: "Programmer",
                traits: {
                    knowhow: 2,
                    punctuality: 3,
                    assiduity: 3,
                    appearence: 3,
                    honesty: 3
                },
                behaviour: {
                    initiative: 3,
                    cooperation: 3,
                    responsability: 2,
                    leadership: 2,
                    criativity: 2
                },
                results: {
                    quantity: 2,
                    quality: 2,
                    deadlines: 3,
                    accidents: 2,
                    focus: 4
                },
                comments: "Nada a apontar.",
                calculatedGrade: "Above Target",
                oldSalary: 11954,
                newSalary: 13149
            },
            {
                evaluatorEmployeeId: 6,
                date: new Date(2022, 00, 01),
                role: "Programmer",
                traits: {
                    knowhow: 2,
                    punctuality: 2,
                    assiduity: 2,
                    appearence: 2,
                    honesty: 1
                },
                behaviour: {
                    initiative: 1,
                    cooperation: 2,
                    responsability: 2,
                    leadership: 1,
                    criativity: 2
                },
                results: {
                    quantity: 1,
                    quality: 2,
                    deadlines: 1,
                    accidents: 2,
                    focus: 1
                },
                comments: "Nada a apontar.",
                calculatedGrade: "On Target",
                oldSalary: 13149,
                newSalary: 13807
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
        hiredDate: new Date(2021, 10, 09),
        isActive: true,
        canEvaluate: false,
        history: [
            {
                evaluatorEmployeeId: 3,
                date: new Date(2022, 00, 01),
                role: "Programmer",
                traits: {
                    knowhow: 4,
                    punctuality: 4,
                    assiduity: 3,
                    appearence: 3,
                    honesty: 2
                },
                behaviour: {
                    initiative: 3,
                    cooperation: 4,
                    responsability: 3,
                    leadership: 3,
                    criativity: 3
                },
                results: {
                    quantity: 3,
                    quality: 2,
                    deadlines: 4,
                    accidents: 3,
                    focus: 2
                },
                comments: "Nada a apontar.",
                calculatedGrade: "Above Target",
                oldSalary: 10000,
                newSalary: 11000
            },
            {
                evaluatorEmployeeId: 3,
                date: new Date(2022, 06, 01),
                role: "Programmer",
                traits: {
                    knowhow: 3,
                    punctuality: 2,
                    assiduity: 3,
                    appearence: 4,
                    honesty: 2
                },
                behaviour: {
                    initiative: 3,
                    cooperation: 4,
                    responsability: 3,
                    leadership: 4,
                    criativity: 3
                },
                results: {
                    quantity: 3,
                    quality: 4,
                    deadlines: 3,
                    accidents: 3,
                    focus: 2
                },
                comments: "Nada a apontar.",
                calculatedGrade: "Above Target",
                oldSalary: 11000,
                newSalary: 12100
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
        hiredDate: new Date(2020, 07, 05),
        isActive: true,
        canEvaluate: true,
        history: [
            {
                evaluatorEmployeeId: 3,
                date: new Date(2021, 00, 01),
                role: "Manager",
                traits: {
                    knowhow: 3,
                    punctuality: 4,
                    assiduity: 4,
                    appearence: 3,
                    honesty: 4
                },
                behaviour: {
                    initiative: 4,
                    cooperation: 2,
                    responsability: 4,
                    leadership: 3,
                    criativity: 3
                },
                results: {
                    quantity: 3,
                    quality: 4,
                    deadlines: 3,
                    accidents: 3,
                    focus: 4
                },
                comments: "Nada a apontar.",
                calculatedGrade: "Above Target",
                oldSalary: 14000,
                newSalary: 15400
            },
            {
                evaluatorEmployeeId: 3,
                date: new Date(2021, 06, 01),
                role: "Manager",
                traits: {
                    knowhow: 3,
                    punctuality: 4,
                    assiduity: 4,
                    appearence: 4,
                    honesty: 4
                },
                behaviour: {
                    initiative: 4,
                    cooperation: 4,
                    responsability: 4,
                    leadership: 4,
                    criativity: 3
                },
                results: {
                    quantity: 5,
                    quality: 4,
                    deadlines: 3,
                    accidents: 5,
                    focus: 4
                },
                comments: "Nada a apontar.",
                calculatedGrade: "High Performance",
                oldSalary: 15400,
                newSalary: 17710
            },
            {
                evaluatorEmployeeId: 3,
                date: new Date(2022, 00, 01),
                role: "Manager",
                traits: {
                    knowhow: 2,
                    punctuality: 2,
                    assiduity: 2,
                    appearence: 3,
                    honesty: 2
                },
                behaviour: {
                    initiative: 2,
                    cooperation: 3,
                    responsability: 2,
                    leadership: 4,
                    criativity: 2
                },
                results: {
                    quantity: 2,
                    quality: 2,
                    deadlines: 2,
                    accidents: 1,
                    focus: 3
                },
                comments: "Nada a apontar.",
                calculatedGrade: "On Target",
                oldSalary: 17710,
                newSalary: 18596
            }
        ]
    },
    {
        id: 4,
        username: "pedrofernandes",
        password: "pass",
        name: "Pedro Fernandes",
        department: "Auditoria",
        birthDate: new Date(1992, 04, 27),
        hiredDate: new Date(2021, 11, 30),
        isActive: true,
        canEvaluate: false,
        history: [
            {
                evaluatorEmployeeId: 3,
                date: new Date(2022, 00, 01),
                role: "Team Leader",
                traits: {
                    knowhow: 3,
                    punctuality: 2,
                    assiduity: 4,
                    appearence: 5,
                    honesty: 1
                },
                behaviour: {
                    initiative: 1,
                    cooperation: 1,
                    responsability: 2,
                    leadership: 2,
                    criativity: 1
                },
                results: {
                    quantity: 4,
                    quality: 1,
                    deadlines: 2,
                    accidents: 3,
                    focus: 3
                },
                comments: "Nada a apontar.",
                calculatedGrade: "On Target",
                oldSalary: 10500,
                newSalary: 11025
            }
        ]
    },
    {
        id: 5,
        username: "marianagoncalves",
        password: "pass",
        name: "Mariana Gonçalves",
        department: "Auditoria",
        birthDate: new Date(1995, 02, 12),
        hiredDate: new Date(2021, 11, 30),
        isActive: true,
        canEvaluate: false,
        history: [
            {
                evaluatorEmployeeId: 3,
                date: new Date(2021, 06, 01),
                role: "Team Leader",
                traits: {
                    knowhow: 4,
                    punctuality: 4,
                    assiduity: 3,
                    appearence: 5,
                    honesty: 4
                },
                behaviour: {
                    initiative: 2,
                    cooperation: 3,
                    responsability: 5,
                    leadership: 4,
                    criativity: 4
                },
                results: {
                    quantity: 3,
                    quality: 3,
                    deadlines: 3,
                    accidents: 2,
                    focus: 5
                },
                comments: "Nada a apontar.",
                calculatedGrade: "On Target",
                oldSalary: 10500,
                newSalary: 11025
            }
        ]
    },
    {
        id: 6,
        username: "analeite",
        password: "pass",
        name: "Ana Leite",
        department: "Consultoria",
        birthDate: new Date(1976, 07, 08),
        hiredDate: new Date(2021, 02, 11),
        isActive: true,
        canEvaluate: true,
        history: [
            {
                evaluatorEmployeeId: 6,
                date: new Date(2021, 06, 01),
                role: "Senior Manager",
                traits: {
                    knowhow: 3,
                    punctuality: 5,
                    assiduity: 5,
                    appearence: 5,
                    honesty: 2
                },
                behaviour: {
                    initiative: 4,
                    cooperation: 4,
                    responsability: 5,
                    leadership: 3,
                    criativity: 5
                },
                results: {
                    quantity: 5,
                    quality: 4,
                    deadlines: 2,
                    accidents: 5,
                    focus: 4
                },
                comments: "Nada a apontar.",
                calculatedGrade: "High Performance",
                oldSalary: 13000,
                newSalary: 14950
            }
        ]
    }
]

let calculateGrade = function(evaluation) {
    let sum = 0;
    for (value in evaluation.traits) sum += evaluation.traits[value];
    for (value in evaluation.behaviour) sum += evaluation.behaviour[value];;
    for (value in evaluation.results) sum += evaluation.results[value];;
    let grade = Math.round(sum/15);
    return valueToPerformance(grade);
}

let calculateSalary = function(evaluation) {
    switch (evaluation.calculatedGrade) {
        case "Below Target": return evaluation.oldSalary;
        case "Mostly on Target": return evaluation.oldSalary * 1.02;
        case "On Target": return evaluation.oldSalary * 1.05;
        case "Above Target": return evaluation.oldSalary * 1.10;
        case "High Performance": return evaluation.oldSalary * 1.15;
        default: return evaluation.oldSalary * 1.20;
    }
}

let performanceToValue = function(performance) {
    switch(performance) {
        case "Below Target": return 0;
        case "Mostly on Target": return 1;
        case "On Target": return 2;
        case "Above Target": return 3;
        case "High Performance": return 4;
        default: return 5;
    }
}

let valueToPerformance = function(value) {
    switch(value) {
        case 0: return "Below Target";
        case 1: return "Mostly on Target";
        case 2: return "On Target";
        case 3: return "Above Target";
        case 4: return "High Performance";
        default: return "Exceptional Performance";
    }
}