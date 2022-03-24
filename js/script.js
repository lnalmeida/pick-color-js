window.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button');
    const colorText = document.querySelector('.color-display span');
    const switchButton = document.querySelector('.label');
    
    let isOn = false;

    let playInterval;


    const getRandomColor = () => {
        let str = '#';
        while (str.length < 7) {
            str += Math.floor(Math.random() * 0x10).toString(16);
        }
        document.body.style.backgroundColor = str;
        colorText.textContent = str;
        colorText.style.color = str;
    }


    const autoPlayOn = () => {
        playInterval = setInterval(() => {
            getRandomColor();
        }, 1200)
        switchButton.classList.remove('off');
        switchButton.classList.add('on');
    }

    const autoPlayOff = () => {
            clearInterval(playInterval);
            switchButton.classList.remove('on');
            switchButton.classList.add('off');
    }
    
    const playRamdomColors = () => {
        isOn ? autoPlayOff() : autoPlayOn();

    }
    

    switchButton.addEventListener('click', () => {
        isOn = !isOn;
        playRamdomColors();
        console.log(isOn);
    })
    
    button.addEventListener('click', () => {
        getRandomColor()
    })

})