var customerName = 'bob';
var upperCaseCustomerName = () => {
  customerName = customerName.toUpperCase();
};

var bestCustomer;
var setBestCustomer = () => {
  // bestCustomer = `not ${customerName}`;
};

var overwriteBestCustomer = () => {
  bestCustomer = 'Henry Cavill';
};

const leastFavoriteCustomer = 'Pan Cake';
var changeLeastFavoriteCustomer = () => {
  leastFavoriteCustomer = 'Maple Syrup';
};