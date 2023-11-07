// Question 1: Manipulating array using Map and Filter and Reduce

// Description: Consider a Loyalty Application for a Small Retailer, where data is stored in array of objects -

// customerID, customerName, totalBillingAmount

// A Retailer would want select customers who have the total Billing amount more than Rs. 3000/-

// Write a program using your JavaScript Skills to print the list of Such Customer Names along with their purchase details.

const customers = [
    { customerID: 1, customerName: "Mr. Abhishek", totalBillingAmount: 2500 },
    { customerID: 2, customerName: "Ms. Akansha", totalBillingAmount: 3500 },
    { customerID: 3, customerName: "Mr. Durgesh", totalBillingAmount: 5000 },
    { customerID: 4, customerName: "Mr. Kushagra", totalBillingAmount: 2800 },
    { customerID: 5, customerName: "Ms. Shefali", totalBillingAmount: 4000 },
  ];
  
  const filteredCustomers = customers.filter(customer => customer.totalBillingAmount > 3000).map(customer => ({
      customerName: customer.customerName,
      purchaseDetails: `Total Billing Amount: Rs. ${customer.totalBillingAmount}`,
    }));
  
  const result = filteredCustomers.reduce((output, customer, index) => {
    output += `${index + 1}. Customer Name: ${customer.customerName}\n`;
    output += `${customer.purchaseDetails}\n\n`;
    return output;
  }, "");
  
  console.log(result);
  