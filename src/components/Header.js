import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#ffffff'
        // backgroundColor: '#3c3c3c'
    },
    logo: {
        height: '200px',
        // width: '200px'
        zIndex: '0',
    },
    backgroundSvg: {
        position: 'absolute',
        backgroundColor: 'white',
        opacity: '0.6'
    },
    particle: {
        zIndex: '0',
        height: '50px',
        backgroundColor: 'white'
    }
}));

function initStartBlock() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const minSpaceForParticle = 50;
    const mainBackground = document.getElementById('backgroundSvg');
    const newMainBackgroundWidth = screenWidth - screenWidth  % minSpaceForParticle;
    const newMainBackgroundHeight = screenHeight - screenHeight % minSpaceForParticle;
    const cellRowsCount = Math.floor(newMainBackgroundWidth / minSpaceForParticle);
    const cellColumnsCount = Math.floor(newMainBackgroundHeight / minSpaceForParticle);

    mainBackground.setAttribute("width", `${newMainBackgroundWidth}px`);
    mainBackground.setAttribute("height", `${newMainBackgroundHeight}px`);

    for (let i = 0; i < cellRowsCount; i++) {
        for (let j = 0; j < cellColumnsCount; j++) {
            if (Math.random() < 0.2) {
                const [x, y] = [i * minSpaceForParticle, j * minSpaceForParticle];
                const [centerX, centerY] = [x + minSpaceForParticle / 2, y + minSpaceForParticle / 2];
                mainBackground.innerHTML += `<image href='./assets/${Math.random() > 0.5 ? 'bot' : 'top'}.svg' transform='rotate(${Math.random() * 10 - 5} ${centerX} ${centerY})'x='${i * minSpaceForParticle}' y='${j * minSpaceForParticle}' width='50' height='50'>`;
            }
        }
    }
}

// function placeParticles() {
//     const mainBackground = document.getElementById('backgroundSvg')
//     const {width, height} = mainBackground.getBoundingClientRect()
//     const particles = Array(40).fill(0).map(()=>({
//         x: Math.random() * (width-50),
//         y: Math.random() * (height-50),
//     }));
//     const [logoX, logoY] = [0, 0]
//     mainBackground.innerHTML = [
//         `<image href='./assets/logo.jpg' height='200' width='200' x='${logoX}' y='${logoY}'/>`,
//         ...particles.map(e => `<image href='./assets/woman-bikini.svg' height='50' width='50' x='${e.x}' y='${e.y}'/>`)
//     ].join('')
//     // console.log(width, height)
//     // console.log(mainBackground.getBoundingClientRect())

//     const [gridWidth, gridHeight] = [4, height/width*4]
// }

//   function svgAnimation() {
//       const objectArray = Array(10).fill({
//         speed: 0, // скорость
//         x: Math.random() * 560 - 280, // начальные координаты
//         y: Math.random() * 170 - 85   // --
//       })
//   }  

export default function Header() {
    const classes = useStyles();
    useEffect(() => {
        initStartBlock();
        // placeParticles()
    })
    return <div className={classes.root} id='header'>
        <svg className={classes.backgroundSvg} id='backgroundSvg'>
        </svg>
    </div>
}