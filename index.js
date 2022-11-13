const app = require('./src/app')
const {dataBase} = require('./src/db')
const { PORT } =  require('./src/config')



app.listen(PORT, () =>{
   dataBase.sync({force: true})
  console.log(`Corriendo en puerto ${PORT}`);
})