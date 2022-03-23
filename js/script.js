window.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button');
    const colorText = document.querySelector('.color-display span');
    const switchButton = document.querySelector('.label');
    
    let switchIsOn = false;

    // switchButton.addEventListener('click', function() {
    //     if (switchIsOn) {
    //         console.log(switchIsOn);
    //         switchIsOn = false;
    //     } 
    //     if(!switchIsOn) {
    //         console.log(switchIsOn)
    //         switchIsOn = true;
    //     }
    // })
    
    button.addEventListener('click', () => {
        getRandomColor()
    })

    const autoPlayOn = () => {
            const playInterval = setInterval(() => {
                getRandomColor();
            }, 2000)
            this.classList.remove('off');
            this.classList.add('on');
        }

    const autoPlayOff = () => {
            clearInterval(playInterval);
            this.classList.remove('on');
            this.classList.add('off');
    }
    

    const getRandomColor = () => {
        let str = '#';
        while (str.length < 7) {
            str += Math.floor(Math.random() * 0x10).toString(16);
        }
        document.body.style.backgroundColor = str;
        colorText.textContent = str;
        colorText.style.color = str;
    }
})