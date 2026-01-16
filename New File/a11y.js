// 高对比切换
document.getElementById('themeBtn').addEventListener('click', () => {
  document.documentElement.classList.toggle('high-contrast');
});

// 语音朗读
function speak(text) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN';
    speechSynthesis.speak(u);
  }
}