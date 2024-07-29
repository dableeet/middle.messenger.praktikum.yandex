export default function createDomNode<T extends keyof HTMLElementTagNameMap>(
  tagName: T,
  id?: string,
  className?: string,
): HTMLElementTagNameMap[T] {
  const node = document.createElement(tagName);

  id && node.setAttribute('id', id);
  className && node.setAttribute('class', className);

  return node;
}
