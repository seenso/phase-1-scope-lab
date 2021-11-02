var customerName = 'bob';
var upperCaseCustomerName = () => {
  customerName = customerName.toUpperCase();
};

var bestCustomer;
var setBestCustomer = () => {
  bestCustomer = `not ${customerName}`;
};

var overwriteBestCustomer = () => {};

const leastFavoriteCustomer = () => {};