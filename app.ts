import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PremiumAccount } from './class/PremiumAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Antonio', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
console.log(peopleAccount.getBalance())

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(1000)
console.log(companyAccount.getBalance())
companyAccount.withdraw(1000)
console.log(companyAccount.getBalance())
companyAccount.getLoan(500)
console.log(companyAccount.getBalance())

const premiumAccount: PremiumAccount = new PremiumAccount('jose',2)
console.log(premiumAccount)
premiumAccount.deposit(100)
console.log(premiumAccount.getBalance())
premiumAccount.withdraw(50)
console.log(premiumAccount.getBalance())


