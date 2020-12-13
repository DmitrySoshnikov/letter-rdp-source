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
    "hello";

    42;

  `,
    {
      type: 'Program',
      body: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'StringLiteral',
            value: 'hello',
          },
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'NumericLiteral',
            value: 42,
          },
        },
      ],
    },
  );
};
