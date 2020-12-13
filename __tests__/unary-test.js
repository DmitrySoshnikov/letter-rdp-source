/**
 * Building a Parser from scratch
 *
 * Course info: http://dmitrysoshnikov.com/courses/parser-from-scratch/
 *
 * (C) 2020-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

module.exports = test => {
  test('-x;', {
    type: 'Program',
    body: [
      {
        type: 'ExpressionStatement',
        expression: {
          type: 'UnaryExpression',
          operator: '-',
          argument: {
            type: 'Identifier',
            name: 'x',
          },
        },
      },
    ],
  });

  test('!x;', {
    type: 'Program',
    body: [
      {
        type: 'ExpressionStatement',
        expression: {
          type: 'UnaryExpression',
          operator: '!',
          argument: {
            type: 'Identifier',
            name: 'x',
          },
        },
      },
    ],
  });
};
