const envelopeTop = document.querySelector('.envelope-top');
const letter = document.querySelector('.letter');
const imageContainer = document.getElementById('imageContainer');
const music = document.getElementById('backgroundMusic');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

function openEnvelope() {
    envelopeTop.style.transform = 'rotateX(180deg)';
    imageContainer.style.opacity = '1'; // แสดงภาพ
    setTimeout(() => {
        letter.style.transform = 'translateY(0)'; // แสดงข้อความหลังจาก 0.5 วินาที
    }, 500); // 500ms เป็นเวลาในการแสดงภาพ
}

function showPopup() {
    popup.style.display = 'flex';
    overlay.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

function resetEnvelope() {
    envelopeTop.style.transform = 'rotateX(0)';
    letter.style.transform = 'translateY(100%)';
    imageContainer.style.opacity = '0'; // ซ่อนภาพ
    closePopup(); // ปิดป๊อปอัพหลังจากรีเซ็ต
}

window.onload = () => {
    music.play().catch((error) => {
        console.warn('Auto-play was blocked:', error);
        document.body.addEventListener('click', () => music.play(), { once: true });
    });
};
