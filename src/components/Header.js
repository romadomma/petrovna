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
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
        opacity: '0.6'
    },
    particle: {
        zIndex: '0',
        height: '50px',
        backgroundColor: 'white'
    }
}));

function placeParticles() {
    const mainBackground = document.getElementById('backgroundSvg')
    const {width, height} = mainBackground.getBoundingClientRect()
    const particles = Array(40).fill(0).map(()=>({
        x: Math.random() * (width-50),
        y: Math.random() * (height-50),
    }));
    
    mainBackground.innerHTML = particles.map(e => `<image href='./assets/woman-bikini.svg' height='50' width='50' x='${e.x}' y='${e.y}'/>`)
    console.log(width, height)
    console.log(mainBackground.getBoundingClientRect())
}

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
        placeParticles()
    })
    return <div className={classes.root} id='header'>
        <svg className={classes.backgroundSvg} id='backgroundSvg'>
        </svg>
        <img src="./assets/logo.jpg" alt="logo" className={classes.logo} />
    </div>
}