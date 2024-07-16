document.addEventListener('DOMContentLoaded', () => {
  const form = document.forms.namedItem('form');

  form?.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();
  });

  form?.addEventListener('click', (event: MouseEvent) => {
    const { target } = event;

    if (
      target instanceof HTMLButtonElement &&
      target.classList.contains('button_redirect')
    ) {
      window.location.pathname = target.dataset['path']!;
    }
  });
});
