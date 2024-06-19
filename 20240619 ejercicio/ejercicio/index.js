(async () => {

  const fs = require('fs/promises')
  
  try {
            // Leer el archivo JSON

    const data = await fs.readFile('data.json', 'utf-8')
    const ticket = JSON.parse(data)
    const products = ticket.factura.productos

            // Sumar los valores de precio_total
            let total = products.reduce((sum, product) => sum + product.precio_total, 0);

    console.log(products, total)
    
  } catch (error) {
    console.log(error)
  }

})()