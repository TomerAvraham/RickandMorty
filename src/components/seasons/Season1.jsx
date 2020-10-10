/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { Link } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SkipNextIcon from '@material-ui/icons/SkipNext';

function Season1() {
    return (
        <div className="youtube__container" >
            <div className="back__menu">
                <Link style={{color: 'black' }} to='/season' >
                    <ExitToAppIcon style={{fontSize: '35px'}}/>
                </Link>
            </div>
            <iframe
            width="600"
            height="400"
            src="https://www.youtube.com/embed/FLZ0GVhsVbM" 
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>    
            </iframe>
            <div className="buttons">
                <Link style={{color: 'black' }} to='/so2' >
                    <SkipNextIcon style={{fontSize: '35px'}} />
                </Link>
            </div>
        </div>
    )
}

export default Season1


