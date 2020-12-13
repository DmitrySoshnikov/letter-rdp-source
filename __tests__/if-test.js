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

    if (x) {
      x = 1;
    } else {
      x = 2;
    }


    `,
    {
      type: 'Program',
      body: [
        {
          type: 'IfStatement',
          test: {
            type: 'Identifier',
            name: 'x',
          },
          consequent: {
            type: 'BlockStatement',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  operator: '=',
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
          alternate: {
            type: 'BlockStatement',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  operator: '=',
                  left: {
                    type: 'Identifier',
                    name: 'x',
                  },
                  right: {
                    type: 'NumericLiteral',
                    value: 2,
                  },
                },
              },
            ],
          },
        },
      ],
    },
  );

  // No else part:
  test(
    `

    if (x) {
      x = 1;
    }


    `,
    {
      type: 'Program',
      body: [
        {
          type: 'IfStatement',
          test: {
            type: 'Identifier',
            name: 'x',
          },
          consequent: {
            type: 'BlockStatement',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'AssignmentExpression',
                  operator: '=',
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
          alternate: null,
        },
      ],
    },
  );
};
