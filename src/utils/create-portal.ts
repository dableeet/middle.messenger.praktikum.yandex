export default function createPortal(className?: string) {
  const portal = document.createElement('div');
  portal.setAttribute('id', 'portal');

  className && portal.setAttribute('class', className);

  document.querySelector('body')?.appendChild(portal);

  return portal;
}
