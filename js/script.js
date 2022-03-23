window.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button');
    const colorText = document.querySelector('.color-display span');
    
    button.addEventListener('click', () => {
        let str = '#';
        while (str.length < 7) {
            str += Math.floor(Math.random() * 0x10).toString(16);
        }
        document.body.style.backgroundColor = str;
        colorText.textContent = str;
        colorText.style.color = str;
    })
})