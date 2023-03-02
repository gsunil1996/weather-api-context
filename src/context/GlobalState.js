import { createContext, useReducer } from "react";
import weatherInitialState from "./initialState/weatherInitialState";
import weatherReducer from "./reducers/weatherReducer";


// Create Context
export const GlobalContext = createContext();
// Provider Component
export const GlobalProvider = ({ children }) => {

    const [weatherState, weatherDispatch] = useReducer(weatherReducer, weatherInitialState);

    const provides = {
        weatherState,
        weatherDispatch
    }
    return (
        <GlobalContext.Provider value={provides}>{children}</GlobalContext.Provider>
    );

}