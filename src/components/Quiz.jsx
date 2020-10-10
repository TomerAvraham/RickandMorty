import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Question from './Question'

const useStyle = makeStyles({
    header: {
        marginTop: '40px',
        marginBottom: '30px'
    }
})


function Quiz() {
    const quiz = useSelector(state => state.quiz)
    const classes = useStyle()

    return (
        <div className="main__container">
            <Typography className={classes.header} variant='h2' component='h2'>
                Prove You’re Not a Jerry
            </Typography>
            {quiz.map((question , i) => (
                <Question key={i} question={question}/>
            ))}
        </div>
    )
}

export default Quiz
