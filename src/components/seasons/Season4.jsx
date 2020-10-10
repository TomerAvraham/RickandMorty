/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { Link } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

function Season4() {
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
            src="https://www.youtube.com/embed/J99G8NJfRxw"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
            </iframe>
            <div className="buttons">
                <Link style={{color: 'black' }} to='/so3' >
                    <SkipPreviousIcon style={{fontSize: '35px'}}/>
                </Link>
            </div>
        </div>
    )
}

export default Season4