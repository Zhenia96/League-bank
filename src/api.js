const BASE_URL = 'https://api.frankfurter.app';

const getCourse = async (fromCurrency, toCurrency, date) => {
  if (fromCurrency === toCurrency) {
    return 1;
  }

  const response = await fetch(`${BASE_URL}/${date}?from=${fromCurrency}`);
  const json = await response.json();
  const rate = await json.rates[toCurrency];

  return rate;
};

export default getCourse;
