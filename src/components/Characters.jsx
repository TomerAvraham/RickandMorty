import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid } from '@material-ui/core'
import CharacterCard from './CharacterCard';
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';
import '../Css/characters.css'




function Characters() {
    const characters = useSelector(state => state.characters)
    const dispatch = useDispatch()

    const handelApi = async (number = 1) => {
        const respond = await fetch(`https://rickandmortyapi.com/api/character?page=${number}`)
        const data = await respond.json()
        dispatch({
            type: 'SET_CHARACTERS',
            payload: data.results
        })
    }
    
    const handelRerollButton = () => {
        const number = Math.floor(Math.random()* 34)
        handelApi(number)
    }
    
    useEffect(() => {
        handelApi()
    },[])

    return (
        <div className="main__container">
            <header>
                <Button
                variant="contained"
                startIcon={<ReplayIcon/>}
                onClick={handelRerollButton}
                >
                    ReRoll
                </Button>
            </header>
            <div className="card__container">
                <Grid spacing={8} alignContent='space-around' container >
                    {characters.map((character, i) => (
                        <Grid  item xs={12} md={6} lg={4} xl={4} key={i} >
                            <CharacterCard character={character}  key={i} />
                        </Grid>
                    ) )}
                </Grid>
            </div>
        </div>
    )
}

export default Characters
