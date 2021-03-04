export class SvgDynamic {
    constructor(options) {
        this.svgId = options.svgId;
        this.minSpaceForParticle = options.minSpaceForParticle || 50;
        this.logo = {
            url: options.logoUrl,
            x: null,
            y: null,
            width: options.logoWidth || 200,
            height: options.logoHeight || 200,
        };
        this.particleParams = {
            width: options.particleWidth || 30,
            height: options.particleHeight || 30
        }
        this.particles = [];
    }

    init() {
        this.mainBackground = document.getElementById(this.svgId);
        const [screenWidth, screenHeight] = [window.innerWidth, window.innerHeight]
    
        const [newMainBackgroundWidth, newMainBackgroundHeight] = [screenWidth - screenWidth % this.minSpaceForParticle, screenHeight - screenHeight % this.minSpaceForParticle];
        [this.logo.x, this.logo.y] = [newMainBackgroundWidth / 2 - this.logo.width / 2, newMainBackgroundHeight / 2 - this.logo.height / 2];
        const [cellRowsCount, cellColumnsCount] = [Math.floor(newMainBackgroundWidth / this.minSpaceForParticle), Math.floor(newMainBackgroundHeight / this.minSpaceForParticle)];
    
        this.mainBackground.setAttribute("width", `${newMainBackgroundWidth}px`);
        this.mainBackground.setAttribute("height", `${newMainBackgroundHeight}px`);
    
        for (let i = 0; i < cellRowsCount; i++) {
            for (let j = 0; j < cellColumnsCount; j++) {
                const [x, y] = [i * this.minSpaceForParticle, j * this.minSpaceForParticle];
                if (
                    ((x <= this.logo.x || x >= this.logo.x + this.logo.width) && y >= this.logo.y && y <= this.logo.y + this.logo.height || y <= this.logo.y || y >= this.logo.y + this.logo.height)
                    && ((x + this.minSpaceForParticle <= this.logo.x || x + this.minSpaceForParticle >= this.logo.x + this.logo.width) && y >= this.logo.y && y <= this.logo.y + this.logo.height || y <= this.logo.y || y >= this.logo.y + this.logo.height)
                    && ((x <= this.logo.x || x >= this.logo.x + this.logo.width) && y + this.minSpaceForParticle >= this.logo.y && y + this.minSpaceForParticle <= this.logo.y + this.logo.height || y + this.minSpaceForParticle <= this.logo.y || y + this.minSpaceForParticle >= this.logo.y + this.logo.height)
                    && ((x + this.minSpaceForParticle <= this.logo.x || x + this.minSpaceForParticle >= this.logo.x + this.logo.width) && y + this.minSpaceForParticle >= this.logo.y && y + this.minSpaceForParticle <= this.logo.y + this.logo.height || y + this.minSpaceForParticle <= this.logo.y || y + this.minSpaceForParticle >= this.logo.y + this.logo.height)
                    && Math.random() < 0.3
                ) {
                    const [dX, dY] = [Math.random() * (this.minSpaceForParticle - this.particleParams.width), Math.random() * (this.minSpaceForParticle - this.particleParams.height)];
                    // const [centerX, centerY] = [x + this.minSpaceForParticle / 2, y + this.minSpaceForParticle / 2];
                    this.particles.push({
                        url: `./assets/${Math.random() > 0.5 ? 'bot' : 'top'}.svg`,
                        rotate: Math.random() * 20 - 10,
                        centerX: x + dX + this.particleParams.width / 2,
                        centerY: y + dY + this.particleParams.height / 2,
                        x: x + dX,
                        y: y + dY,
                    });
                }
            }
        }
        this.render();
    }

    render() {
        this.mainBackground.innerHTML = `<image href='${this.logo.url}' x='${this.logo.x}' y='${this.logo.y}' width = '${this.logo.width}' heigth = '${this.logo.height}'>`
        this.particles.forEach(particle => {
            const randomDeg = (Math.random() * 20 + 5)*(Math.random()>0.5 ? 1 : -1);
            const dur = Math.random() * 7 + 8;
            this.mainBackground.innerHTML += `<image href='${particle.url}' transform='rotate(${particle.rotate} ${particle.centerX} ${particle.centerY})'x='${particle.x}' y='${particle.y}' width='${this.particleParams.width}' height='${this.particleParams.height}'>
            <animate attributeName="opacity" dur="${dur}s" values="0;0;1;0;0;0;0" repeatCount="indefinite"></animate>
            <animateTransform attributeName="transform" type="rotate" dur="${dur}s" values="${-randomDeg} ${particle.centerX} ${particle.centerY}; ${randomDeg} ${particle.centerX} ${particle.centerY}; ${-randomDeg} ${particle.centerX} ${particle.centerY}" additive="sum" repeatCount="indefinite" ></animateTransform>
            </image>`;
        });
    }

}