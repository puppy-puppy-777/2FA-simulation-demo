function goToSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function showCodeInput() {
    const method = document.getElementById('method').value;
    if (method) {
        document.getElementById('codeInput').style.display = 'block';
    } else {
        document.getElementById('codeInput').style.display = 'none';
    }
}

function verifyCode() {
    const code = document.getElementById('verificationCode').value;
    if (code) {
        document.getElementById('setupMessage').style.display = 'block';
        setTimeout(() => goToSection('login'), 2000);
    } else {
        alert('Please enter the verification code.');
    }
}

function login() {
    const loginCode = document.getElementById('loginCode').value;
    if (loginCode) {
        document.getElementById('loginMessage').style.display = 'block';
        setTimeout(() => goToSection('recovery'), 2000);
    } else {
        alert('Please enter the verification code.');
    }
}

function completeRecovery() {
    const recoveryMethod = document.getElementById('recoveryMethod').value;
    if (recoveryMethod) {
        document.getElementById('recoveryMessage').style.display = 'block';
    } else {
        alert('Please select a recovery method.');
    }
}

// Initialize the first section
goToSection('intro');
