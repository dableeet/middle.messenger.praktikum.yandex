document.addEventListener('DOMContentLoaded', () => {
  const form = document.forms.namedItem('form');

  form?.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();
  });

  form?.addEventListener('click', (event: MouseEvent) => {
    const { target } = event;

    if (target instanceof HTMLButtonElement && target.dataset.path) {
      window.location.pathname = target.dataset.path;
    }
  });
});
