const copyButton = document.getElementById('copyPrompt');
copyButton.addEventListener('click', async () => {
  await navigator.clipboard.writeText(document.getElementById('promptText').textContent);
  copyButton.textContent = '已复制 ✓';
  setTimeout(() => { copyButton.textContent = '复制提示词'; }, 2000);
});
