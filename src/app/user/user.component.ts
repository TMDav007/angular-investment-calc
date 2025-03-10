import { Component, EventEmitter, inject, Output } from '@angular/core';  
import { FormsModule } from '@angular/forms';
import { InvestmentValue } from '../investment-results/investment-result.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  @Output() calculate = new EventEmitter<InvestmentValue>();


  enteredInitInvestment = '0';
  enteredAnnualInvestment = '5';
  enteredExpectedReturn = '5';
  enteredDuration = '10';



  onSubmit() {
   this.calculate.emit({initialInvestment: +this.enteredInitInvestment,
   expectedReturn: +this.enteredExpectedReturn,
   annualInvestment: +this.enteredAnnualInvestment,
   duration: +this.enteredDuration})
  }
}

