const fs = require("fs");
let [N, ...infos] = fs.readFileSync("test.txt").toString().trim().split("\r\n");

const n = parseInt(N);
const info = infos.map((item) => item.split(" "));

const tree = {};
info.forEach(([node, left, right]) => {
  tree[node] = { left, right };
});

function preorder(node) {
  if (node === ".") return "";
  const { left, right } = tree[node];
  return node + preorder(left) + preorder(right);
}

function inorder(node) {
  if (node === ".") return "";
  const { left, right } = tree[node];
  return inorder(left) + node + inorder(right);
}

function postorder(node) {
  if (node === ".") return "";
  const { left, right } = tree[node];
  return postorder(left) + postorder(right) + node;
}

console.log(preorder("A"));
console.log(inorder("A"));
console.log(postorder("A"));