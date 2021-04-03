const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d');



const draw = () => {

    const cHeight = window.innerHeight
    const cWidth = window.innerWidth

    ctx.canvas.height = cHeight;
    ctx.canvas.width = cWidth;

    ctx.clearRect(0, 0, cWidth, cHeight)
    

    // Squiggle
    ctx.beginPath();
    let squiggleX = cWidth+10
    let squiggleY = cHeight / 3;
    let direction = 1;
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#F7C1C0'

    ctx.moveTo(squiggleX, squiggleY);
    for (let i = 0; i < 10; i++) {
        direction *= -1;
        squiggleX -= 50;
        squiggleY += 50 * direction;

        ctx.lineTo(squiggleX, squiggleY);
    }

    ctx.stroke();

    // L shape
    ctx.beginPath();
    ctx.moveTo(cWidth * 3 / 5, 0)
    ctx.lineTo(cWidth * 3 / 5, 100)
    ctx.lineTo(cWidth * 3 / 5 + 50, 100)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.stroke();

    // Slashes
    ctx.beginPath();
    ctx.moveTo(cWidth * 1 / 5, cHeight)
    ctx.lineTo(cWidth * 1 / 5 + 50, cHeight - 100)
    ctx.moveTo(cWidth * 1 / 5 + 50, cHeight)
    ctx.lineTo(cWidth * 1 / 5 + 50 + 50, cHeight - 100)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.strokeStyle = '#E2E9EF'
    ctx.stroke();

    // Circle
    const radius = 125;
    ctx.beginPath();
    ctx.arc(cWidth - radius * .99, cHeight - radius * .75, radius, 0, 2 * Math.PI)
    ctx.stroke();

}

draw()

window.addEventListener('resize', draw)