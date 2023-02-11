const operations = {
    sum: '+',
    substract: '-',
    multiply: '*',
    divison: '/',
};

function calculate({ a, b, operations}) {
    let result = null;

    switch (operations) {
        case operations.sum:
        result = sum (a, b);
            break;
        
        case operations.substract:
            result = substract(a, b);
            break;
        
        case operations.multiply:
            result = multiply(a, b)

        case operations.division:
            result = divison(a, b);
            break;

            default:
                break;
    }
}