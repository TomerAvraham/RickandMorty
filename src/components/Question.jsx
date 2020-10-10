import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const useStyle = makeStyles({
    root: {
        width: '500px',
        height: '600px',
        margin: '20px ',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-evenly"
    },
    img: {
        width: '100%',
        height: '50%',
        borderRadius: '4px'
    },
    box: {
        width: '100% - 20px',
        height: '2vh',
        border: '1px solid lightgrey',
        borderRadius: '4px',
        padding: '10px',
        margin: '8px 0',
        cursor: 'pointer',
        '&:hover' : {
            fontSize: '18px',
            boxShadow: ' -3px 4px 14px -7px rgba(0,0,0,0.75)'
        }
    },
    false: {
        backgroundColor: '#e32529',
        pointerEvents: 'none',
        color: 'white',
    },
    true: {
        backgroundColor: '#2dcc70',
        pointerEvents: 'none',
        color: 'white'
    }
})



function Question({ question }) {
    const classes = useStyle()
    
    const handelClick = event => {
        if (event.target.id === 'false') {
            event.target.classList.add(classes.false)
        }else{
            event.target.classList.add(classes.true)
        }
    }

    return (
        <Paper elevation={4} className={classes.root} >
            <Typography variant="h5" component="h4">
                {question.question}
            </Typography>
            <img className={classes.img} src={question.image} alt=""/>
            <Box onClick={handelClick} id={question.optionOne.correct} className={classes.box} >
                {question.optionOne.option}
            </Box>
            <Box onClick={handelClick} id={question.optionTwo.correct} className={classes.box} >
                {question.optionTwo.option}
            </Box>
            <Box onClick={handelClick} id={question.optionThree.correct} className={classes.box} >
                {question.optionThree.option}
            </Box>
            <Box onClick={handelClick} id={question.optionFour.correct} className={classes.box} >
                {question.optionFour.option} 
            </Box>
        </Paper>
    )
}

export default Question
