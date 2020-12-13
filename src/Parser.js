/**
 * Building a Parser from scratch
 *
 * Course info: http://dmitrysoshnikov.com/courses/parser-from-scratch/
 *
 * (C) 2020-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

/**
 * Letter parser: recursive descent implementation.
 */

const {Tokenizer} = require('./Tokenizer');

class Parser {
  /**
   * Initializes the parser.
   */
  constructor() {
    this._string = '';
    this._tokenizer = new Tokenizer();
  }

  /**
   * Parses a string into an AST.
   */
  parse(string) {
    // Implement here...
  }

  /**
   * Main entry point.
   *
   * Program
   *   : StatementList
   *   ;
   */
  Program() {
    // Implement here...
  }

  /**
   * StatementList
   *   : Statement
   *   | StatementList Statement -> Statement Statement Statement Statement
   *   ;
   */
  StatementList(stopLookahead = null) {
    // Implement here...
  }

  /**
   * Statement
   *   : ExpressionStatement
   *   | BlockStatement
   *   | EmptyStatement
   *   | VariableStatement
   *   | IfStatement
   *   | IterationStatement
   *   | BreakStatement
   *   | ContinueStatement
   *   | FunctionDeclaration
   *   | ReturnStatement
   *   | ClassDeclaration
   *   ;
   */
  Statement() {
    // Implement here...
  }

  /**
   * ClassDeclaration
   *   : 'class' Identifier OptClassExtends BlockStatement
   *   ;
   */
  ClassDeclaration() {
    // Implement here...
  }

  /**
   * ClassExtends
   *   : 'extends' Identifier
   *   ;
   */
  ClassExtends() {
    // Implement here...
  }

  /**
   * FunctionDeclaration
   *   : 'def' Identifier '(' OptFormalParameterList ')' BlockStatement
   *   ;
   */
  FunctionDeclaration() {
    // Implement here...
  }

  /**
   * FormalParameterList
   *   : Identifier
   *   | FormalParameterList ',' Identifier
   *   ;
   */
  FormalParameterList() {
    const params = [];

    do {
      params.push(this.Identifier());
    } while (this._lookahead.type === ',' && this._eat(','));

    return params;
  }

  /**
   * ReturnStatement
   *   : 'return' OptExpression ';'
   *   ;
   */
  ReturnStatement() {
    // Implement here...
  }

  /**
   * IterationStatement
   *   : WhileStatement
   *   | DoWhileStatement
   *   | ForStatement
   *   ;
   */
  IterationStatement() {
    switch (this._lookahead.type) {
      case 'while':
        return this.WhileStatement();
      case 'do':
        return this.DoWhileStatement();
      case 'for':
        return this.ForStatement();
    }
  }

  /**
   * WhileStatement
   *  : 'while' '(' Expression ')' Statement
   *  ;
   */
  WhileStatement() {
    // Implement here...
  }

  /**
   * DoWhileStatement
   *   : 'do' Statement 'while' '(' Expression ')' ';'
   */
  DoWhileStatement() {
    // Implement here...
  }

  /**
   * ForStatement
   *   : 'for' '(' OptForStatementInit ';' OptExpression ';' OptExpression ')' Statement
   *   ;
   */
  ForStatement() {
    // Implement here...
  }

  /**
   * ForStatementInit
   *   : VariableStatementInit
   *   | Expression
   *   ;
   */
  ForStatementInit() {
    // Implement here...
  }

  /**
   * BreakStatement
   *   : 'break' ';'
   *   ;
   */
  BreakStatement() {
    this._eat('break');
    this._eat(';');
    return {
      type: 'BreakStatement',
    };
  }

  /**
   * ContinueStatement
   *   : 'continue' ';'
   *   ;
   */
  ContinueStatement() {
    this._eat('continue');
    this._eat(';');
    return {
      type: 'ContinueStatement',
    };
  }

  /**
   * IfStatement
   *   : 'if' '(' Expression ')' Statement
   *   | 'if' '(' Expression ')' Statement 'else' Statement
   *   ;
   */
  IfStatement() {
    // Implement here...
  }

  /**
   * VariableStatementInit
   *   : 'let' VariableDeclarationList
   *   ;
   */
  VariableStatementInit() {
    // Implement here...
  }

  /**
   * VariableStatement
   *   : VariableStatementInit ';'
   *   ;
   */
  VariableStatement() {
    const variableStatement = this.VariableStatementInit();
    this._eat(';');
    return variableStatement;
  }

  /**
   * VariableDeclarationList
   *   : VariableDeclaration
   *   | VariableDeclarationList ',' VariableDeclaration
   *   ;
   */
  VariableDeclarationList() {
    // Implement here...
  }

  /**
   * VariableDeclaration
   *   : Identifier OptVariableInitializer
   *   ;
   */
  VariableDeclaration() {
    // Implement here...
  }

  /**
   * VariableInitializer
   *   : SIMPLE_ASSIGN AssignmentExpression
   *   ;
   */
  VariableInitializer() {
    this._eat('SIMPLE_ASSIGN');
    return this.AssignmentExpression();
  }

  /**
   * EmptyStatement
   *   : ';'
   *   ;
   */
  EmptyStatement() {
    this._eat(';');
    return {
      type: 'EmptyStatement',
    };
  }

  /**
   * BlockStatement
   *   : '{' OptStatementList '}'
   *   ;
   */
  BlockStatement() {
    // Implement here...
  }

  /**
   * ExpressionStatement
   *   : Expression ';'
   *   ;
   */
  ExpressionStatement() {
    // Implement here...
  }

  /**
   * Expression
   *   : AssignmentExpression
   *   ;
   */
  Expression() {
    return this.AssignmentExpression();
  }

  /**
   * AssignmentExpression
   *   : LogicalORExpression
   *   | LeftHandSideExpression AssignmentOperator AssignmentExpression
   *   ;
   */
  AssignmentExpression() {
    // Implement here...
  }

  /**
   * Identifier
   *   : IDENTIFIER
   *   ;
   */
  Identifier() {
    const name = this._eat('IDENTIFIER').value;
    return {
      type: 'Identifier',
      name,
    };
  }

  /**
   * Extra check whether it's valid assignment target.
   */
  _checkValidAssignmentTarget(node) {
    if (node.type === 'Identifier' || node.type === 'MemberExpression') {
      return node;
    }
    throw new SyntaxError('Invalid left-hand side in assignment expression');
  }

  /**
   * Whether the token is an assignment operator.
   */
  _isAssignmentOperator(tokenType) {
    return tokenType === 'SIMPLE_ASSIGN' || tokenType === 'COMPLEX_ASSIGN';
  }

  /**
   * AssignmentOperator
   *   : SIMPLE_ASSIGN
   *   | COMPLEX_ASSIGN
   *   ;
   */
  AssignmentOperator() {
    if (this._lookahead.type === 'SIMPLE_ASSIGN') {
      return this._eat('SIMPLE_ASSIGN');
    }
    return this._eat('COMPLEX_ASSIGN');
  }

  /**
   * Logical OR expression.
   *
   *   x || y
   *
   * LogicalORExpression
   *   : LogicalORExpression
   *   | LogicalORExpression LOGICAL_OR LogicalANDExpression
   *   ;
   */
  LogicalORExpression() {
    // Implement here...
  }

  /**
   * Logical AND expression.
   *
   *   x && y
   *
   * LogicalANDExpression
   *   : EqualityExpression
   *   | LogicalANDExpression LOGICAL_AND EqualityExpression
   *   ;
   */
  LogicalANDExpression() {
    // Implement here...
  }

  /**
   * EQUALITY_OPERATOR: ==, !=
   *
   *   x == y
   *   x != y
   *
   * EqualityExpression
   *   : RelationalExpression
   *   | EqualityExpression EQUALITY_OPERATOR RelationalExpression
   *   ;
   */
  EqualityExpression() {
    // Implement here...
  }

  /**
   * RELATIONAL_OPERATOR: >, >=, <, <=
   *
   *   x > y
   *   x >= y
   *   x < y
   *   x <= y
   *
   * RelationalExpression
   *   : AdditiveExpression
   *   | RelationalExpression RELATIONAL_OPERATOR AdditiveExpression
   *   ;
   */
  RelationalExpression() {
    // Implement here...
  }

  /**
   * AdditiveExpression
   *   : MultiplicativeExpression
   *   | AdditiveExpression ADDITIVE_OPERATOR MultiplicativeExpression
   *   ;
   */
  AdditiveExpression() {
    // Implement here...
  }

  /**
   * MultiplicativeExpression
   *   : UnaryExpression
   *   | MultiplicativeExpression MULTIPLICATIVE_OPERATOR UnaryExpression
   *   ;
   */
  MultiplicativeExpression() {
    // Implement here...
  }

  /**
   * Generic helper for LogicalExpression nodes.
   */
  _LogicalExpression(builderName, operatorToken) {
    // Implement here...
  }

  /**
   * Generic binary expression.
   */
  _BinaryExpression(builderName, operatorToken) {
    // Implement here...
  }

  /**
   * UnaryExpression
   *   : LeftHandSideExpression
   *   | ADDITIVE_OPERATOR UnaryExpression
   *   | LOGICAL_NOT UnaryExpression
   *   ;
   */
  UnaryExpression() {
    // Implement here...
  }

  /**
   * LeftHandSideExpression
   *   : CallMemberExpression
   *   ;
   */
  LeftHandSideExpression() {
    return this.CallMemberExpression();
  }

  /**
   * CallMemberExpression
   *   : MemberExpression
   *   | CallExpression
   *   ;
   */
  CallMemberExpression() {
    // Implement here...
  }

  /**
   * Generic call expression helper.
   *
   * CallExpression
   *   : Callee Arguments
   *   ;
   *
   * Callee
   *   : MemberExpression
   *   | Super
   *   | CallExpression
   *   ;
   */
  _CallExpression(callee) {
    // Implement here...
  }

  /**
   * Arguments
   *   : '(' OptArgumentList ')'
   *   ;
   */
  Arguments() {
    // Implement here...
  }

  /**
   * ArgumentList
   *   : AssignmentExpression
   *   | ArgumentList ',' AssignmentExpression
   *   ;
   */
  ArgumentList() {
    // Implement here...
  }

  /**
   * MemberExpression
   *   : PrimaryExpression
   *   | MemberExpression '.' Identifier
   *   | MemberExpression '[' Expression ']'
   *   ;
   */
  MemberExpression() {
    // Implement here...
  }

  /**
   * PrimaryExpression
   *   : Literal
   *   | ParenthesizedExpression
   *   | Identifier
   *   | ThisExpression
   *   | NewExpression
   *   ;
   */
  PrimaryExpression() {
    // Implement here...
  }

  /**
   * NewExpression
   *   : 'new' MemberExpression Arguments
   *   ;
   */
  NewExpression() {
    // Implement here...
  }

  /**
   * ThisExpression
   *   : 'this'
   *   ;
   */
  ThisExpression() {
    this._eat('this');
    return {
      type: 'ThisExpression',
    };
  }

  /**
   * Super
   *   : 'super'
   *   ;
   */
  Super() {
    // Implement here...
  }

  /**
   * Whether the token is a literal.
   */
  _isLiteral(tokenType) {
    // Implement here...
  }

  /**
   * ParenthesizedExpression
   *   : '(' Expression ')'
   *   ;
   */
  ParenthesizedExpression() {
    // Implement here...
  }

  /**
   * Literal
   *   : NumericLiteral
   *   | StringLiteral
   *   | BooleanLiteral
   *   | NullLiteral
   *   ;
   */
  Literal() {
    // Implement here...
  }

  /**
   * BooleanLiteral
   *   : 'true'
   *   | 'false'
   *   ;
   */
  BooleanLiteral(value) {
    this._eat(value ? 'true' : 'false');
    return {
      type: 'BooleanLiteral',
      value,
    };
  }

  /**
   * NullLiteral
   *   : 'null'
   *   ;
   */
  NullLiteral() {
    // Implement here...
  }

  /**
   * StringLiteral
   *   : STRING
   *   ;
   */
  StringLiteral() {
    const token = this._eat('STRING');
    return {
      type: 'StringLiteral',
      value: token.value.slice(1, -1),
    };
  }

  /**
   * NumericLiteral
   *   : NUMBER
   *   ;
   */
  NumericLiteral() {
    const token = this._eat('NUMBER');
    return {
      type: 'NumericLiteral',
      value: Number(token.value),
    };
  }

  /**
   * Expects a token of a given type.
   */
  _eat(tokenType) {
    // Implement here...
  }
}

module.exports = {
  Parser,
};
