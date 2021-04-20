const source = process.argv[2]
const operations = ['+', '-', '*', '/'];

const reducer = (stack, currentValue) => {

    if (!isNaN(currentValue)) {
        stack.push(currentValue)
    }

    if (operations.includes(currentValue)) {
        const operator = currentValue;
        const result = eval(stack.join(operator));
        stack = [result];
    }

    return stack;
}

const result = source
    .replace(/ /g, '')
    .split('')
    .reduce(reducer, [])


console.log(result.toString());
