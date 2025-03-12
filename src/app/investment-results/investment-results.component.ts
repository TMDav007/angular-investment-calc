import { Component, inject, input, Input } from '@angular/core';
import { AnnualData, InvestmentService } from '../../investment-results';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService)

 get results() {
  return this.investmentService.annualInvestmentData
 }

}
