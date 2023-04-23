const initialState = {
    userLogin: [],
    productos: [],
    tipos: [],
    newproducto: [],
    productoID: [],
    messageUpdate: [],
    data: [],
    messageCreate: [],
    messageDelete: "",
    carrito: [],
};
  
  export const userReducer = (state = initialState, action: any) => {

    console.log(action.type)
  
    switch (action.type) {
      // Login //
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
      
        // Default //
      default:
        return state;
    }
  };


  const productosInitialState = {
    productos: [],
    newproducto: [],
    productoID:[],
    messageUpdate: [],
    carrito: [],
    tipos: [],
    messageDelete: [],
  }



  export const productsReducer = (state = productosInitialState, action: any) => {

    console.log(action.type)

    switch (action.type) {
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
  }
  


  const ventasInitialState = {
    ventas:[],
    top5: [],
    top5pay: [],
  }

  export const ventasReducer = (state = ventasInitialState, action: any) => {
    console.log(action.type)

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
  }