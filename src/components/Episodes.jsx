import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyle = makeStyles({
    root:{
        paddingTop: '60px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    grid: {
        width: '100%',
    },
    gridItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        maxWidth: 260,
        minWidth: 260,
        minHeight: 300,
        maxHeight: 300,
        borderRadius: '4px',
        boxShadow: '-1px 0px 15px -4px rgba(0,0,0,0.75)',
    }
})


function Episodes() {
    const classes = useStyle()

    return (
        <Container className={classes.root} maxWidth='md'>
            <h1>Montage for each Episode</h1>
            <main>
                <Grid className={classes.grid} container spacing={6}>
                    <Grid className={classes.gridItem} item xs={12} sm={6} md={4} >
                        <Link to='/so1' >
                            <img className={classes.image} src="https://images.genius.com/d043f8f4c06f117c3efeec06dc8761dd.1000x1000x1.jpg" alt=""/>
                        </Link>
                    </Grid>
                    <Grid className={classes.gridItem} item xs={12} sm={6} md={4} >
                        <Link to='/so2'>
                            <img className={classes.image} src="https://s3-eu-west-1.amazonaws.com/images.linnlive.com/ddc3d468a8034d375670aa6508207f76/e29fe1b4-e777-471f-9ee6-6ecb807afdaa.jpg" alt=""/>
                        </Link>
                    </Grid>
                    <Grid className={classes.gridItem} item xs={12} sm={6} md={4} >
                        <Link to='/so3'>
                            <img className={classes.image} src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Rick_and_Morty_season_3.png/250px-Rick_and_Morty_season_3.png" alt=""/>
                        </Link>
                    </Grid>
                    <Grid className={classes.gridItem} item xs={12} sm={6} md={4} >
                        <Link to='/so4'>
                            <img className={classes.image} src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420026_so.jpg" alt=""/>
                        </Link>
                    </Grid>
                </Grid>
            </main>
        </Container>
    )
}

export default Episodes
