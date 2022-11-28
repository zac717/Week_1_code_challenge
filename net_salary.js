// prompt the user to enter the taxable income

const net = require("prompt-sync");
const prompt = net()

let salary = prompt("what is your income?");
// if else used to calculate the tax rate
function taxRate(){
    if(salary<= 24000){
        return (salary*10)/100
    }
    else if(salary > 24000 && salary <= 32333){
        return 4000
    }else{
        return(salary*0.03)
    }
}
let tax = taxRate();

// if else to calculate the medical cover
function medicalCover(){
    if (salary < 100000) {
        return salary*(0.025)
    }else {
        return 1700
    }
}
let NHIF=medicalCover()

function nationalSecurity(){
if (salary <= 10000){
    return (salary*0.06)
}else
{return 6000}
}
let NSSF = nationalSecurity()
console.log(`gross salary:KSH.${salary}`)
console.log(`Tax:KSH.${tax}`)
console.log(`NHIF Deductions: KSH.${NHIF}`)
console.log(`NSSF Deduction: KSH.${NSSF}`)

let netSalary = salary-(tax + NSSF + NHIF);
console.log(`Net salary: KSH.${netSalary}`)