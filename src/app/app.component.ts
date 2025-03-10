import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { AnnualData, calculateInvestmentResults } from '../investment-results';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  resultsData: AnnualData[] = [];
  showTable = false;
  onCalculateInvestmentResults($event: {
    initialInvestment: number;
    expectedReturn: number;
    annualInvestment: number;
    duration: number;
  }) {
    const { initialInvestment, expectedReturn, annualInvestment, duration } =
      $event;
    this.resultsData = calculateInvestmentResults(
      initialInvestment,
      expectedReturn,
      annualInvestment,
      duration
    );

    this.showTable = true;
  }

}
