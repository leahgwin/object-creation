
// Your job is to create an object that represents a financial advisor and has the following properties and methods.



// Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. 

// When you invoke the worth() method, it should look at every transaction and calculate the advisor's net worth.


const financialAdvisor = Object.create({}, {
    company: {
        value: "NSS",
        enumerable: true,
        writable: true
    },
    specialty: {
        value: "Software",
        enumerable: true,
        writable: true
    },
    name: {
        value: "Leah",
        enumerable: true
    },
    portfolio: {
        value: [
            {
                ticker: "FB",
                quantity: 75,
                price: 100
            },
            {
                ticker: "GOOGL",
                quantity: 500,
                price: 250
            },
            {
                ticker: "SPOT",
                quantity: 100,
                price: 60
            }
        ],
        writable: true,
        enumerable: true
    },
    worth: {
        value: function () {
            let multiply = 0;
            this.portfolio.forEach(item => {
                multiply += item.quantity * item.price;
            });
            return multiply;

        },
        writable: true
    },
    purchase: {
        value: function (ticker, quantity, price) {
            this.portfolio.push(
                {ticker: ticker,
                quantity: quantity,
                price: price,
                purchased: true}
            )
        },
        
    },
    sell: {
        value: function (ticker, quantity, price) {
            this.portfolio.push(
                {ticker: ticker,
                quantity: quantity,
                price: price,
                sold: true}
            )
        }, 
    },
})

financialAdvisor.purchase("HELLO", 10, 20);


console.log(financialAdvisor.worth())
console.log(financialAdvisor.portfolio);
