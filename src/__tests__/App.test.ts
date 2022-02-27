import { suite } from 'uvu'
import * as assert from 'uvu/assert';
import { screen, render } from "solid-testing-library";
import TodoList from "../App";

const isInDom = (node: Node): boolean => !!node.parentNode && 
  (node.parentNode === document || isInDom(node.parentNode));

const test = suite('TodoList');

test("render without error", async () => {
  await render(TodoList);

  assert.ok(isInDom(screen.getByTestId("todos")))
});
