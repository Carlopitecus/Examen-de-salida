module.exports={
    devServer:{
        before:(app,server)=>{
            //  API login:
            app.get('/api/login',(req,res)=>{
                const usuarios=require('./src/assets/api/v1/cmodels/users/login/login.json');
                let respuesta;
                let indice =usuarios.findIndex((usuario)=>usuario.usuario==req.query.usuario);
                if (indice >-1) {
                    if (usuarios[indice].clave==req.query.clave) 
                    {
                        respuesta={
                            resultado: "ok",
                            usuario: usuarios[indice]
                        }
                    }else {
                        respuesta={
                            resultado: "error",
                            mensaje: "Clave incorrecta"
                        }
                    }
                } else {
                    respuesta={
                        resultado: "error",
                        mensaje: "Usuario no existe"
                    }
                }
                res.writeHead(200,{'Content-Type': 'application/json'});
                res.end(JSON.stringify(respuesta));
            }),
            app.get('/api/dash', (req, res) => {
                const result = require('./src/assets/api/v1/cmodels/secure/dashboard.json');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result));
            })

        }
    }
}