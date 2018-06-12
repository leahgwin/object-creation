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

financialAdvisor.purchase("BUY", 10, 20);
financialAdvisor.sell("SELL", 25, 50);


console.log(financialAdvisor.worth())
console.log(financialAdvisor.portfolio);
