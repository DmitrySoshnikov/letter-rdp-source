/**
 * Building a Parser from scratch
 *
 * Course info: http://dmitrysoshnikov.com/courses/parser-from-scratch/
 *
 * (C) 2020-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

module.exports = test => {
  test(
    `
    do {
      x -= 1;
    } while (x > 10);

    `,
    {
      type: 'Program',
      body: [
        {
          type: 'DoWhileStatement',
          body: {
            type: 'BlockStatement',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  operator: '-=',
                  left: {
                    type: 'Identifier',
                    name: 'x',
                  },
                  right: {
                    type: 'NumericLiteral',
                    value: 1,
                  },
                },
              },
            ],
          },
          test: {
            type: 'BinaryExpression',
            operator: '>',
            left: {
              type: 'Identifier',
              name: 'x',
            },
            right: {
              type: 'NumericLiteral',
              value: 10,
            },
          },
        },
      ],
    },
  );
};
