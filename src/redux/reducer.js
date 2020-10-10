export const charactersReducer = (state = [] , action) => {
    switch (action.type) {
        case "SET_CHARACTERS":
            return action.payload

        default:
            return state
    }
}

const quiz = [
    {
       image: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-11/28/10/enhanced/buzzfeed-prod-fastlane-01/enhanced-30310-1511882607-3.jpg?downsize=600:*&output-format=auto&output-quality=auto',
       question: 'What does Rick use to travel between dimensions?',
       optionOne: {
           option: 'Space laser',
           correct: 'false'  
       },
       optionTwo: {
           option: 'Tardis',
           correct: 'false'
       },
       optionThree: {
           option: 'Portal gun',
           correct: 'true'
       } ,
       optionFour: {
           option: 'Bike',
           correct: 'false'
       }

    },
    {
        image: 'https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/08/12-The-Best-Moments-of-Morty-and-Jessica-Rick-and-Morty-YouTube.jpg',
        question: "What is the name of Morty's crush?",
        optionOne: {
            option: 'Amanda',
            correct: 'false'  
        },
        optionTwo: {
            option: 'Jessica',
            correct: 'true'
        },
        optionThree: {
            option: 'Summer',
            correct: 'false'
        } ,
        optionFour: {
            option: 'Shannon',
            correct: 'false'
        }
 
    },
    {
        image: 'https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/08/12-Rick-and-Morty-Best-of-Mr-Poopy-Butthole-YouTube.jpg',
        question: "What is the name of this character?",
        optionOne: {
            option: 'King Flippy Nips',
            correct: 'false'  
        },
        optionTwo: {
            option: 'Woba Doba',
            correct: 'false'
        },
        optionThree: {
            option: 'Snippy',
            correct: 'false'
        } ,
        optionFour: {
            option: 'Mr. Poopybutthole',
            correct: 'true'
        }
 
    },
    {
        image: 'https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/08/12-Rick-and-Morty-Jerry-is-a-LOSER-compilation-YouTube.jpg',
        question: "What was Jerry's most successful advertising pitch?",
        optionOne: {
            option: 'Hungry for Apples?',
            correct: 'true'  
        },
        optionTwo: {
            option: 'Eat Apples',
            correct: 'false'
        },
        optionThree: {
            option: 'Apples are healthy',
            correct: 'false'
        } ,
        optionFour: {
            option: 'Big Apples',
            correct: 'false'
        }
 
    },
    {
        image: 'https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/04/ice-t.jpg?q=50&fit=crop&w=963&h=541',
        question: "What is Ice-T’s real name?",
        optionOne: {
            option: 'Water-T',
            correct: 'true'  
        },
        optionTwo: {
            option: 'Gold-T',
            correct: 'false'
        },
        optionThree: {
            option: 'Hydrogen-T',
            correct: 'false'
        } ,
        optionFour: {
            option: 'H2O-T',
            correct: 'false'
        }
 
    },
    {
        image: 'https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/04/birdperson-wubba.jpg?q=50&fit=crop&w=963&h=541',
        question: "What does “Wubba lubba dub dub” mean?",
        optionOne: {
            option: 'In your face, yo!',
            correct: 'false'  
        },
        optionTwo: {
            option: 'How could that profit me?',
            correct: 'false'
        },
        optionThree: {
            option: 'I am in grate pain. Please help me',
            correct: 'true'
        } ,
        optionFour: {
            option: 'Life is completely meaningless',
            correct: 'false'
        }
 
    },
]

export const quizReducer = (state = quiz , action) => {
    switch (action.type) {
        case 'SET_QUIZ':
            return state
    
        default:
            return state
    }
}