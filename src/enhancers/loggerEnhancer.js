//Схема работы enhancer

/*
export const loggerEnhancer = (store) =>{
    return function (next) {
        return function (action) {
            //Some code
            return next(action)
        }
    }
}*/

export const loggerEnhancer = store => next => action => {
    console.log(`
    Type of action: ${action.type}, 
    Payload: ${action.payload}, 
    OldState: ${JSON.stringify(store.getState())}
    `);
    return next(action)
}

