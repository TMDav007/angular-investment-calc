import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentValue } from '../investment-results/investment-result.model';
import { InvestmentService } from '../../investment-results';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  constructor(private investmentService: InvestmentService) {}

  calculate = output<InvestmentValue>();
  enteredInitInvestment = signal('0');
  enteredAnnualInvestment = signal('5');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    this.investmentService.calcuateInvestmentReturns(
      +this.enteredInitInvestment(),
      +this.enteredExpectedReturn(),
      +this.enteredAnnualInvestment(),
      +this.enteredDuration()
    );

    //reset
    this.enteredInitInvestment.set('0');
    this.enteredAnnualInvestment.set('5');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
