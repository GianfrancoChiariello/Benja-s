export interface reducerStates {
    userLogin: any;
    productos: any;
    tipos: any;
    ventas: any;
    top5: any;
}

const initialState = {
    userLogin: [],
    productos: [],
    tipos: [],
    ventas:[],
    top5: []
};
  
  export const userReducer = (state = initialState, action: any) => {
  
    switch (action.type) {
      // Login //
      case 'LOGIN':
        return {
          ...state,
          userLogin: action.payload,
        };

        case 'PRODUCTOS':
            return {
                ...state,
                productos: action.payload,
            };

        case 'TIPOS':
            return {
                ...state,
                tipos: action.payload,
            };

        case 'VENTAS':
          return {
            ...state,
            ventas: action.payload
          }

        case 'TOP5':
          return {
            ...state,
            top5: action.payload
          }

      
        // Default //
      default:
        return state;
    }
  };
  