function setupPopup() {
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.style.display = 'none';
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.left = '0';
    popup.style.width = '100%';
    popup.style.height = '100%';
    popup.style.backgroundColor = 'rgba(0,0,0,0.5)';
    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';
    popup.style.zIndex = '1000';

    const popupContent = document.createElement('div');
    popupContent.style.backgroundColor = '#1a2a20';
    popupContent.style.padding = '30px';
    popupContent.style.borderRadius = '10px';
    popupContent.style.textAlign = 'center';
    popupContent.style.color = 'white';
    popupContent.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';

    popupContent.innerHTML = `
        <p style="font-size: 1.2rem; margin-bottom: 20px;">Inscrivez-vous pour devenir testeur en écrivant à <a href="mailto:infos@colibriafrica.tech" style="color: #36e27b;">infos@colibriafrica.tech</a></p>
        <button id="close-popup" style="background-color: #36e27b; color: #112117; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Fermer</button>
    `;

    popup.appendChild(popupContent);
    document.body.appendChild(popup);

    document.getElementById('close-popup').addEventListener('click', () => {
        popup.style.display = 'none';
    });

    document.querySelectorAll('.download-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            popup.style.display = 'flex';
        });
    });
}


document.addEventListener("DOMContentLoaded", function() {
    setupPopup();
});
