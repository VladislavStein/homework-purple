function convert (amount, baseCurrency, convertedCurrency) {
    if (baseCurrency === undefined || convertedCurrency === undefined) {
        return null;
    }
    if (baseCurrency !== convertedCurrency) {
        switch (convertedCurrency) {
        case 'usd':
            if (baseCurrency === 'rub') {
                return amount / 10;
            } else if (baseCurrency === 'eur') {
                return amount * 1.1;
            }
            break;
        case 'eur':
            if (baseCurrency === 'rub') {
                return amount / 11;
            } else if (baseCurrency === 'usd') {
                return amount / 1.1;
            }
            break;
        case 'rub':
            if (baseCurrency === 'usd') {
                return amount * 10;
            } else if (baseCurrency === 'eur') {
                return amount * 11;
            }
            break;
        default:
            return null;
        }
    } else {
        return null;
    }
}