export const clipBord = (text: string) => {
  if (navigator.clipboard) {

    navigator.clipboard.writeText(text)
      .then(() => console.log('copy success'))
      .catch(() => console.log('copy error'));
    return
  }

  const input = document.createElement('textarea');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
}
