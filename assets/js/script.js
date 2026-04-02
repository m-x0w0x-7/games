document.addEventListener('DOMContentLoaded', () => {
  // contact account
  function account() {
    const u = 'mio';
    const d = 'lunamare';

    const target = document.querySelector('.contact_account');
    const link = 'https://x.com/' + u + '_' + d;
    const text = '@' + u + '_' + d;

    const a = document.createElement('a');
    a.setAttribute('href', link);
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
    a.textContent = text;
    target.append(a);
  }
  account();
});
