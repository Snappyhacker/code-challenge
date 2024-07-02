const NHIF_RATES = [
    { min: 0, max: 5999, deduction: 150 },
    { min: 6000, max: 7999, deduction: 300 },
    { min: 8000, max: 11999, deduction: 400 },
    { min: 12000, max: 14999, deduction: 500 },
    { min: 15000, max: 19999, deduction: 600 },
    { min: 20000, max: 24999, deduction: 750 },
    { min: 25000, max: 29999, deduction: 850 },
    { min: 30000, max: 34999, deduction: 900 },
    { min: 35000, max: 39999, deduction: 950 },
    { min: 40000, max: 44999, deduction: 1000 },
    { min: 45000, max: 49999, deduction: 1100 },
    { min: 50000, max: 59999, deduction: 1200 },
    { min: 60000, max: 69999, deduction: 1300 },
    { min: 70000, max: 79999, deduction: 1400 },
    { min: 80000, max: 89999, deduction: 1500 },
    { min: 90000, max: 99999, deduction: 1600 },
    { min: 100000, max: Infinity, deduction: 1700 }
];

const NSSF_RATE = 0.06;

function calculatePAYE(grossSalary) {
    let tax;

    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        tax = 2400 + (grossSalary - 24000) * 0.25;
    } else {
        tax = 2400 + 2083.25 + (grossSalary - 32333) * 0.3;
    }

    return tax;
}

function calculateNHIF(grossSalary) {
    for (let rate of NHIF_RATES) {
        if (grossSalary >= rate.min && grossSalary <= rate.max) {
            return rate.deduction;
        }
    }
    return 0;
}

function calculateNSSF(grossSalary) {
    return grossSalary * NSSF_RATE;
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    const netSalary = grossSalary - paye - nhif - nssf;

    return {
        grossSalary,
        paye,
        nhif,
        nssf,
        netSalary
    };
}

const basicSalary = 50000;
const benefits = 10000;

const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log(`Gross Salary: KES ${salaryDetails.grossSalary.toFixed(2)}`);
console.log(`PAYE: KES ${salaryDetails.paye.toFixed(2)}`);
console.log(`NHIF: KES ${salaryDetails.nhif.toFixed(2)}`);
console.log(`NSSF: KES ${salaryDetails.nssf.toFixed(2)}`);
console.log(`Net Salary: KES ${salaryDetails.netSalary.toFixed(2)}`);
