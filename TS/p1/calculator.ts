// data:
// initail amount
// annual contribution
// expected return
// duration

type InvestmentData = {
    initailAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
};

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
};

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
    const {initailAmount, annualContribution, expectedReturn, duration} = data;

    if (initailAmount < 0) {
        return 'İnitial investment amout must be at least zero.'
    }

    if (duration <= 0) {
        return 'No valid amount of years provided.'
    }

    if (expectedReturn <0) {
        return 'Expected return must be at least zero.'
    }

    let total = initailAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;

    const annualResults: InvestmentResult[] = [];

    for (let i = 0; i < duration; i++){
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initailAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution

        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount
        })
    };







}

function printResults(results) {
    // print (output) the result data
}

const results = calculateInvestment(...)

printResults(results)