import {createContext, useReducer, useContext, useEffect} from 'react'

const Adapt = createContext()

function adaptReducer(state, action){
    

    switch (action.type) {
        case 'increase': // Aumenta o tamanho da fonte
          return  ((state.letters < 1.9 ) ? {...state, letters: state.letters + 0.2 } : {...state});
        case 'decrease': // Diminui o tamanho da fonte
          return  ((state.letters > 1.0 ) ? {...state, letters: state.letters - 0.2 } : {...state}) ;
        default:
          return state;
      }
      
}

export const AdaptProvider = ({children} )=>{
    const [sizeOfLetters, dispatch] = useReducer(adaptReducer, {letters: 1})

    

    return(
        <Adapt.Provider value={{sizeOfLetters, dispatch}}>
            {children}
        </Adapt.Provider>
    )
}

export function AdaptContext(){
    const context = useContext(Adapt)
    if(!context){
        return
    }

    return context;

}

