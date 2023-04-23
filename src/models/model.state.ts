import { 
  Products,
  Tipos,
} from '@/pages/productos/models/model.productos'

import {
  messageCreate,
} from '../pages/login/models/model.user'

export interface State {
    user: {
        userLogin: [],
        messageUpdate: [],
        data: {
          message: string,
          token: string
        },
    },
      
      productos: {
        productos: Products[],
        tipos: Tipos,
        newproducto: [],
        messageCreate: messageCreate,
        messageDelete: string,
        productoID: [],
        messageUpdate: [],
        carrito: [],
      },
      
      ventas: { 
        ventas: [],
        top5: [], 
        top5pay: []
      }
}