import { GET_WEATHER_FAILURE, GET_WEATHER_REQUEST, GET_WEATHER_STATE_RESET, GET_WEATHER_SUCCESS } from "../actionTypes/weatherActionTypes"


const weatherReducer = (state, action) => {
    switch (action.type) {
        case GET_WEATHER_REQUEST:
            return {
                ...state,
                getWeatherInitData: {
                    ...state.getWeatherInitData,
                    loading: true
                }
            }

        case GET_WEATHER_SUCCESS:
            return {
                ...state,
                getWeatherInitData: {
                    ...state.getWeatherInitData,
                    loading: false,
                    data: action.payload,
                }
            }

        case GET_WEATHER_FAILURE:
            return {
                ...state,
                getWeatherInitData: {
                    ...state.getWeatherInitData,
                    loading: false,
                    error: true,
                    errorMessage: action.payload
                }
            }

        case GET_WEATHER_STATE_RESET:
            return {
                ...state,
                getWeatherInitData: {
                    ...state.getWeatherInitData,
                    loading: false,
                    data: [],
                    error: false,
                    errorMessage: ""
                }
            }

        default:
            return state
    }
}

export default weatherReducer