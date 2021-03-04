import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { SvgDynamic } from '../services/svgDynamic.service';

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
        // opacity: '0.6'
    },
    particle: {
        zIndex: '0',
        height: '50px',
        backgroundColor: 'white'
    }
}));

export default function Header() {
    const classes = useStyles();
    const svgDynamic = new SvgDynamic({
        svgId: 'backgroundSvg',
        // particleUrl: '',
        logoUrl: './assets/logo.jpg'
        
    });
    useEffect(() => {
        svgDynamic.init();
        // placeParticles()
    })
    return <div className={classes.root} id='header'>
        <svg className={classes.backgroundSvg} id='backgroundSvg'>
        </svg>

    </div>
}