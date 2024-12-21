document.getElementById('convertBtn').addEventListener('click', function() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;

    // Exchange rate placeholder (ideally fetch from an API)
    const exchangeRates = {
        USD: { EUR: 0.96, JPY: 156.46, GBP: 0.80, AUD: 1.60, INR: 84.95},
        EUR: { USD: 1.18, JPY: 129.94, GBP: 0.88, AUD: 1.57, INR: 86.19 },
        JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068, AUD: 0.012, INR: 0.563 },
        GBP: { USD: 1.34, EUR: 1.14, JPY: 147.45, AUD: 1.79, INR: 97.0 },
        AUD: { USD: 0.75, EUR: 0.64, JPY: 83.16, GBP: 0.56, INR: 54.77 },
        INR: { USD: 0.014, EUR: 0.012, JPY: 1.77, GBP: 0.010, AUD: 0.018 },
    };

    if (fromCurrency !== toCurrency) {
        const convertedAmount = (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(2);
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        resultDiv.style.opacity = 1; // Fade in effect
    } else {
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = 'Please select different currencies.';
        resultDiv.style.opacity = 1; // Fade in effect
    }
});