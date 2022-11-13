import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'truc',
    initialState: [
        {
            id: 1 , text: " Faire les courses", done: false
        }
    ],
    /* Le reducer récupère l'état actuel, et l'action a performé
    dessus
    Il faut imaginer les reducers comme un ensemble d'action
    possible de notre etat  */ 
    reducers: {
        // exemple
        // le state dans la function est DEJA une copie <3 
        addTask : (state, action) => {
            // {type : " todo/addTask", payload: "Faire les courses"}
            const newTask = {
                id: Date.now(),
                done: false,
                text: action.payload
            }

            state.push(newTask)
        },
        toggleTask: (state,action) => {
            // {type : " todo/toggleTask", payload: 20}
            const task = state.find((t) => t.id === action.payload);
            task.done = !task.done;

        },
        deleteTask: (state, action) => {
            // {type : " todo/deleteTask", payload: 20}
            state = state.filter((t) => t.id !== action.payload)
            // on a écrasé l'état, donc faut qu'on return le state
            return state
            // return le state sans le payload 20
        }
        // reçois l'étal actuel et l'action
        /* l'action a un type ('SUPPRIMER') et un payload (la tache
        avec l'id 3) */

    }
})

// On appelle " dispatcher " une action le fait de donner une
// tâche à Redux


// Création de l'entrepot global 
// on l'export pour l'utiliser dans d'autres fichiers
export const store = configureStore({
    // toutes les fonctions reducers vont être réuni en une seule
    reducer: {
        todo: userSlice.reducer
    }
})

// const action = {
//     type: "todo/toggleTask",
//     payload: 20
// }


// Action creator
export const createToggle = (id) => {
    return{
        type: "todo/toggleTask",
        payload: id
    }
}

