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

    def square(x) {
      return x * x;
    }


    `,
    {
      type: 'Program',
      body: [
        {
          type: 'FunctionDeclaration',
          name: {
            type: 'Identifier',
            name: 'square',
          },
          params: [
            {
              type: 'Identifier',
              name: 'x',
            },
          ],
          body: {
            type: 'BlockStatement',
            body: [
              {
                type: 'ReturnStatement',
                argument: {
                  type: 'BinaryExpression',
                  operator: '*',
                  left: {
                    type: 'Identifier',
                    name: 'x',
                  },
                  right: {
                    type: 'Identifier',
                    name: 'x',
                  },
                },
              },
            ],
          },
        },
      ],
    },
  );

  test(
    `

    def empty() {
      return;
    }


    `,
    {
      type: 'Program',
      body: [
        {
          type: 'FunctionDeclaration',
          name: {
            type: 'Identifier',
            name: 'empty',
          },
          params: [],
          body: {
            type: 'BlockStatement',
            body: [
              {
                type: 'ReturnStatement',
                argument: null,
              },
            ],
          },
        },
      ],
    },
  );
};
