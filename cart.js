///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]


const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

// Print statement
// console.log(`The summed price is: ${summedPrice}`);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = function(cartTotal, couponValue, tax) {
    return cartTotal + (cartTotal * tax) - couponValue;
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    (1) The restaurant would need a NAME associated with the order to be able to distribute it. This will be a STRING as a name consists of characters.
    (2) The restaurant would need a PHONE NUMBER to be able to contact the customer. This can also be a STRING as no mathematical operations need to be performed on the phone number.
    (2) The restaurant would need an ADDRESS to deliver the order. This will be a STRING as it consists of characters.
    (3) The restaurant would need to know if the customer is a REWARDS MEMBER so it can add points to the customer's account using the phone number. This status will be a BOOLEAN variable as the customer either is or isn't a member.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: 'John Smith',
    phone: '1234567',
    address: '123 Baker St.',
    rewards: true
}
