//  I decided to normalize the operators replacing some values to make the eval funcion works
//  Without eval function I would choose this kind of object approach instead a switch
const normalizeOperator = {
  x: '*',
  '÷': '/',
};

const Node = (operator, value, left, right) => {
  const getResult = () =>
    !operator
      ? value
      : eval(
          left.getResult() +
            (normalizeOperator[operator] || operator) +
            right.getResult()
        );

  const toString = () =>
    !operator ? value : `(${left.toString()} ${operator} ${right.toString()})`;

  return {
    getResult,
    toString,
  };
};

module.exports = Node;
