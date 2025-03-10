import { Component, output, signal } from '@angular/core';  
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

calculate = output<InvestmentValue>();
  enteredInitInvestment = signal('0');
  enteredAnnualInvestment = signal('5');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');



  onSubmit() {
   this.calculate.emit({initialInvestment: +this.enteredInitInvestment(),
   expectedReturn: +this.enteredExpectedReturn(),
   annualInvestment: +this.enteredAnnualInvestment(),
   duration: +this.enteredDuration()})

   //reset
   this.enteredInitInvestment.set('0');
   this.enteredAnnualInvestment.set('5');
   this.enteredExpectedReturn.set('5');
   this.enteredDuration.set('10');
  
  }

  
}

