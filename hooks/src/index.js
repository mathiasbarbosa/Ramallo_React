export function crearConexion(){

  return {
    conectar(){
      console.log("✅Conectado...");
    },
    desconectar(){
      console.log("❌ Desconectado...");
    }
  }
} 