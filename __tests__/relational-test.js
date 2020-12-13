/**
 * Building a Parser from scratch
 *
 * Course info: http://dmitrysoshnikov.com/courses/parser-from-scratch/
 *
 * (C) 2020-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

module.exports = test => {
  test('x > 0;', {
    type: 'Program',
    body: [
      {
        type: 'ExpressionStatement',
        expression: {
          type: 'BinaryExpression',
          operator: '>',
          left: {
            type: 'Identifier',
            name: 'x',
          },
          right: {
            type: 'NumericLiteral',
            value: 0,
          },
        },
      },
    ],
  });
};
