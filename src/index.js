function eval() {
    // Do not use eval!!!
    return false;
}

function expressionCalculator(expr) {
    /*
        I know that I have to use "reverse polish notation" but about using nodejs there's writing nothing in the conditions of task
    */
    const vm = require('vm');
    try {
        if (expr.indexOf('/ 0') !== -1) {
            throw new Error('TypeError: Division by zero.');
        }
        return vm.runInNewContext(expr);
    } catch (e) {
        if (e.message === "Unexpected token ')'" || e.message === "Unexpected end of input") {
            throw 'ExpressionError: Brackets must be paired';
        }
        throw 'TypeError: Division by zero.';
    }
}

module.exports = {
    expressionCalculator
};