//Estados iniciales
import {
  ventasInitialState,
  productosInitialState,
  usersInitialState
} from './initialStates'


//Adaptadores
import { productsAdapter } from './adapters';


//Reducers
export const userReducer = (state = usersInitialState, action: any) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          userLogin: action.payload,
        };

      case 'CREATEACCOUNT':
        return {
          ...state,
          messageCreate: action.payload
        }

      case 'SIGNIN':
        return {
          ...state,
          data: action.payload
        }
      
      default:
        return state;
    }
};

export const productsReducer = (state = productosInitialState, action: any) => {
    switch (action.type) {
      case 'NEWPRODUCTO':
        return {
          ...state,
          newproducto: action.payload
        }

      case 'PRODUCTOS':
        return {
            ...state,
            productos: productsAdapter(action.payload),
        };
      
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
      case 'CARRITO':
        return {
          ...state,
          carrito: action.payload
      }

      case 'DELETEPRODUCT':
        return {
          ...state,
          messageDelete: action.payload
        }
        case 'TIPOS':
            return {
                ...state,
                tipos: action.payload,
            };

        default:
          return state;
    }
};
  
export const ventasReducer = (state = ventasInitialState, action: any) => {
    switch (action.type) {
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

    default:
      return state
    }
};