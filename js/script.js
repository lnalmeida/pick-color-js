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


    const autoPlay = () => {
        if(isOn) {
            clearInterval(playInterval);
            switchButton.classList.remove('on');
            switchButton.classList.add('off');
        } else {
            playInterval = setInterval(() => {
                getRandomColor();
            }, 1200)
            switchButton.classList.remove('off');
            switchButton.classList.add('on');
        }
        isOn = !isOn;
    }

    
  

    switchButton.addEventListener('change', () => {
        autoPlay()
        console.log(isOn);
    })
    
    button.addEventListener('click', () => {
        getRandomColor()
    })

})