import React, {createContext, useState} from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books,setBooks] = useState([
        {title: 'love live 1 ',id : 1},
        {title: 'love live 2 ',id : 2},
        {title: 'love live 3 ',id : 3},
        {title: 'love live 4 ',id : 4}
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;