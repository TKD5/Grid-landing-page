const toggleBtn = document.getElementById('toggle-btn');
const closeBtn = document.getElementById('close-btn') || toggleBtn;
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');

// Open sidebar & apply overlay color
if (toggleBtn) {
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.add('active');
  });
}

// Function to reset sidebar and background
function closeSidebar() {
  sidebar.classList.remove('active');
  if (mainContent) {
    mainContent.style.backgroundColor = ""; // Resets back to your CSS default
  }
}

// Close sidebar on close button click
if (closeBtn) {
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeSidebar();
  });
}

// Close when clicking outside the sidebar
document.addEventListener('click', (e) => {
  if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && e.target !== toggleBtn) {
    closeSidebar();
  }
});