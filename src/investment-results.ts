// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it

import { Injectable } from '@angular/core';
import { InvestmentValue } from './app/investment-results/investment-result.model';

export interface AnnualData {
  year: number;
  interest: number;
  valueEndOfYear: any;
  annualInvestment: any;
  totalInterest: number;
  totalAmountInvested: any;
}


export function calculateInvestmentResults(
  initialInvestment: number,
  expectedReturn: number,
  annualInvestment: number,
  duration: number
): AnnualData[] {
  const annualInvestmentData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualInvestmentData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  return annualInvestmentData;
}
