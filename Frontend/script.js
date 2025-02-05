// Handle button actions
function handleButtonClick(action) {
  switch (action) {
      case "➕ Register Students":
          alert("Navigating to Student Registration...");
          window.location.href = "#register-students.html"; // Replace with actual URL
          break;

      case "👥 Authorize Students":
          alert("Navigating to Authorize Students...");
          window.location.href = "#authorize-students.html"; // Replace with actual URL
          break;

      case "📷 Mark Attendance":
          alert("Navigating to Mark Attendance...");
          window.location.href = "#mark-attendance.html"; // Replace with actual URL
          break;

      case "📋 View Attendance":
          alert("Navigating to View Attendance...");
          window.location.href = "#view-attendance.html"; // Replace with actual URL
          break;

      case "⚙️ Configure Camera":
          alert("Navigating to Camera Configuration...");
          window.location.href = "#configure-camera.html"; // Replace with actual URL
          break;

      case "🔒 Student Login":
          alert("Navigating to Student Login...");
          window.location.href = "student_login.html"; // Added URL for student login page
          break;

      default:
          alert("Action not recognized!");
  }
}

const btnRegister = document.getElementById('btn-register');
const btnAuthorize = document.getElementById('btn-authorize');
const btnMark = document.getElementById('btn-mark');
const btnView = document.getElementById('btn-view');
const btnConfig = document.getElementById('btn-config');
const btnLogin = document.getElementById('btn-login'); // Added login button

// Function to handle page navigation
function navigateTo(page) {
switch (page) {
  case 'register':
    window.location.href = 'register_students.html';
    break;
  case 'authorize':
    window.location.href = 'authorize_students.html';
    break;
  case 'mark':
    window.location.href = 'mark_attendance.html';
    break;
  case 'view':
    window.location.href = 'view_attendance.html';
    break;
  case 'config':
    window.location.href = 'camera_config.html';
    break;
  case 'login':
    window.location.href = 'student_login.html'; // Added navigation for student login
    break;
  default:
    console.error('Invalid page:', page);
}
}

// Event listeners for buttons
btnRegister.addEventListener('click', () => navigateTo('register'));
btnAuthorize.addEventListener('click', () => navigateTo('authorize'));
btnMark.addEventListener('click', () => navigateTo('mark'));
btnView.addEventListener('click', () => navigateTo('view'));
btnConfig.addEventListener('click', () => navigateTo('config'));
btnLogin.addEventListener('click', () => navigateTo('login')); // Added listener for login button
