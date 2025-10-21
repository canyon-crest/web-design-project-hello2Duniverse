// Compute and set the top of #sidebar so it aligns with the top of #p2
function alignSidebarToP2() {
  const sidebar = document.getElementById('sidebar');
  const p2 = document.getElementById('p2');
  const container = document.getElementById('container');
  if (!sidebar || !p2 || !container) return;

  // Get the offset of p2 relative to the container
  const containerRect = container.getBoundingClientRect();
  const p2Rect = p2.getBoundingClientRect();

  const top = p2Rect.top - containerRect.top;

  // Only position absolutely on wider screens (when sidebar is visible)
  if (window.innerWidth > 768) {
    sidebar.style.top = Math.max(0, Math.round(top)) + 'px';
    sidebar.style.position = 'absolute';
  } else {
    // restore default flow on small screens
    sidebar.style.position = '';
    sidebar.style.top = '';
  }
}

window.addEventListener('load', alignSidebarToP2);
window.addEventListener('resize', () => {
  // debounce-ish: use rAF to avoid too many layout thrashes
  window.requestAnimationFrame(alignSidebarToP2);
});
