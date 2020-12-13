/**
 * Building a Parser from scratch
 *
 * Course info: http://dmitrysoshnikov.com/courses/parser-from-scratch/
 *
 * (C) 2020-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

module.exports = test => {
  test('x > 0 == true;', {
    type: 'Program',
    body: [
      {
        type: 'ExpressionStatement',
        expression: {
          type: 'BinaryExpression',
          operator: '==',
          left: {
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
          right: {
            type: 'BooleanLiteral',
            value: true,
          },
        },
      },
    ],
  });

  test('x >= 0 != false;', {
    type: 'Program',
    body: [
      {
        type: 'ExpressionStatement',
        expression: {
          type: 'BinaryExpression',
          operator: '!=',
          left: {
            type: 'BinaryExpression',
            operator: '>=',
            left: {
              type: 'Identifier',
              name: 'x',
            },
            right: {
              type: 'NumericLiteral',
              value: 0,
            },
          },
          right: {
            type: 'BooleanLiteral',
            value: false,
          },
        },
      },
    ],
  });
};
