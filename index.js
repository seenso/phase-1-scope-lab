var customerName = 'bob';
var upperCaseCustomerName = () => {
  customerName = customerName.toUpperCase();
};

var bestCustomer;
var setBestCustomer = () => {
  bestCustomer = `not bob`;
};

var overwriteBestCustomer = () => {
  bestCustomer = 'maybe bob';
};

const leastFavoriteCustomer = 'Pan Cake';
var changeLeastFavoriteCustomer = () => {
  leastFavoriteCustomer = 'Maple Syrup';
};