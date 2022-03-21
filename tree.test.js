const Node = require('./tree.js');

const tree = Node(
  '÷',
  null,
  Node(
    '+',
    null,
    Node('', 7, null, null),
    Node(
      'x',
      null,
      Node('-', null, Node('', 3, null, null), Node('', 2, null, null)),
      Node('', 5, null, null)
    )
  ),
  Node('', 6, null, null)
);

test('it should be equals', () => {
  expect(tree.toString()).toEqual('((7 + ((3 - 2) x 5)) ÷ 6)');
});

test('it should the same result', () => {
  expect(tree.result()).toEqual(2);
});
