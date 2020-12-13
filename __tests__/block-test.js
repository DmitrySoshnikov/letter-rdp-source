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

    {
      42;

      "hello";
    }

  `,
    {
      type: 'Program',
      body: [
        {
          type: 'BlockStatement',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'NumericLiteral',
                value: 42,
              },
            },

            {
              type: 'ExpressionStatement',
              expression: {
                type: 'StringLiteral',
                value: 'hello',
              },
            },
          ],
        },
      ],
    },
  );

  // Empty block:

  test(
    `

    {

    }

  `,
    {
      type: 'Program',
      body: [
        {
          type: 'BlockStatement',
          body: [],
        },
      ],
    },
  );

  // Nested blocks:

  test(
    `

    {
      42;
      {
        "hello";
      }
    }

  `,
    {
      type: 'Program',
      body: [
        {
          type: 'BlockStatement',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'NumericLiteral',
                value: 42,
              },
            },
            {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'StringLiteral',
                    value: 'hello',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  );
};
