export const productsAdapter = (productos : any) => {
    return productos.map((producto: any) => {
        return {
            _id: producto._id,
            producto: producto.producto,
            marca: producto.marca,
            animal: producto.animal,
            etapa: producto.etapa,
            empaque: producto.empaque,
            peso: producto.peso,
            unidad: producto.unidad,
            __v: producto.__v,
            idUser: producto.idUser
        }
    } )
}