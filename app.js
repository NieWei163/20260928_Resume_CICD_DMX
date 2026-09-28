// app.js · 聂葳个人主页交互脚本
// ----------------------------------------------------
// 1. 为导航中匹配的链接加上 .is-current 与 aria-current。
// 2. 将 footer 的 [data-build-stamp] 占位替换为「回到顶部 yyyyMMdd」。
//    日期由 JS 生成，避免每次部署都修改 HTML。

const navLinks = document.querySelectorAll('nav a');

function updateNavigation() {
  const currentSection = window.location.hash || '#hero';

  navLinks.forEach((link) => {
    const isCurrent = link.getAttribute('href') === currentSection;
    link.classList.toggle('is-current', isCurrent);
    if (isCurrent) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function stampBuildDate() {
  const stamp = document.querySelector('[data-build-stamp]');
  if (!stamp) return;
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  stamp.textContent = `回到顶部${ymd}`;
}

window.addEventListener('hashchange', updateNavigation);
updateNavigation();
stampBuildDate();