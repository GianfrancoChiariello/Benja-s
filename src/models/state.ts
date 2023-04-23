import {
  messageCreate
} from '../pages/login/models/model.user'

export interface State {
    user: {
        userLogin: [],
        productos: [],
        tipos: [],
        newproducto: [],
        productoID: [],
        messageUpdate: [],
        data: {
          message: string,
          token: string
      },
        messageCreate: messageCreate,
        messageDelete: string,
        carrito: []
      },
      
      productos: {
        productos: [],
        newproducto: [],
        productoID: [],
        messageUpdate: [],
        carrito: [],
        tipos: [],
        messageDelete: []
      },
      
      ventas: { 
        ventas: [],
        top5: [], 
        top5pay: []
      }
}