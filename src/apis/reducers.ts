export interface reducerStates {
    userLogin: any;
    productos: any;
    tipos: any;
    ventas: any;
    top5: any;
    top5pay: any,
    newproducto: any,
    productoID: any,
    messageUpdate: any,
}

const initialState = {
    userLogin: [],
    productos: [],
    tipos: [],
    ventas:[],
    top5: [],
    top5pay: [],
    newproducto: [],
    productoID: [],
    messageUpdate: [],
};
  
  export const userReducer = (state = initialState, action: any) => {
  
    switch (action.type) {
      // Login //
      case 'LOGIN':
        return {
          ...state,
          userLogin: action.payload,
        };

      case 'NEWPRODUCTO':
        return {
          ...state,
          newproducto: action.payload
        }

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

      case 'TOP5PAY':
        return {
          ...state,
          top5pay: action.payload
        }

      case 'PRODUCTOID':
        return {
          ...state,
          productoID: action.payload
        }

      case 'UPDATEPRODUCT': 
        return {
          ...state,
          messageUpdate: action.payload
        }

      
        // Default //
      default:
        return state;
    }
  };
  