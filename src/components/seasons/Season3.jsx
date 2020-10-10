/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { Link } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

function Season3() {
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
            src="https://www.youtube.com/embed/9_LTYgUL8t8"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
            </iframe>
            <div className="buttons">
                <Link style={{color: 'black' }} to='/so2' >
                    <SkipPreviousIcon style={{fontSize: '35px'}}/>
                </Link>
                <Link style={{color: 'black' }} to='/so4' >
                    <SkipNextIcon style={{fontSize: '35px'}}/>
                </Link>
            </div>
        </div>
    )
}

export default Season3