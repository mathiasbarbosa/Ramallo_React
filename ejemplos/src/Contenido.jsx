
export default function Contenido(){

  const granjas = [
    {
      "codigo": 1,
      "nombre": "Manzana",
      "precio": 1.99,
      "categoria": "Fruta"
    },
    {
      "codigo": 2,
      "nombre": "Naranja",
      "precio": 1.49,
      "categoria": "Fruta"
    },
    {
      "codigo": 3,
      "nombre": "Banana",
      "precio": 0.99,
      "categoria": "Fruta"
    },
    {
      "codigo": 4,
      "nombre": "Pera",
      "precio": 1.79,
      "categoria": "Fruta"
    },
    {
      "codigo": 5,
      "nombre": "Sandía",
      "precio": 3.99,
      "categoria": "Fruta"
    },
    {
      "codigo": 6,
      "nombre": "Melón",
      "precio": 2.99,
      "categoria": "Fruta"
    },
    {
      "codigo": 7,
      "nombre": "Uva",
      "precio": 2.49,
      "categoria": "Fruta"
    },
    {
      "codigo": 8,
      "nombre": "Mango",
      "precio": 2.99,
      "categoria": "Fruta"
    },
    {
      "codigo": 9,
      "nombre": "Fresa",
      "precio": 2.99,
      "categoria": "Fruta"
    },
    {
      "codigo": 10,
      "nombre": "Kiwi",
      "precio": 1.99,
      "categoria": "Fruta"
    },
    {
      "codigo": 11,
      "nombre": "Pomelo",
      "precio": 1.99,
      "categoria": "Fruta"
    },
    {
      "codigo": 12,
      "nombre": "Cereza",
      "precio": 3.99,
      "categoria": "Fruta"
    },
    {
      "codigo": 13,
      "nombre": "Limón",
      "precio": 0.99,
      "categoria": "Fruta"
    },
    {
      "codigo": 14,
      "nombre": "Mandarina",
      "precio": 1.29,
      "categoria": "Fruta"
    },
    {
      "codigo": 15,
      "nombre": "Aguacate",
      "precio": 2.99,
      "categoria": "Fruta"
    },
    {
      "codigo": 16,
      "nombre": "Piña",
      "precio": 2.49,
      "categoria": "Fruta"
    },
    {
      "codigo": 17,
      "nombre": "Papaya",
      "precio": 2.99,
      "categoria": "Fruta"
    },
    {
      "codigo": 18,
      "nombre": "Mora",
      "precio": 3.49,
      "categoria": "Fruta"
    },
    {
      "codigo": 19,
      "nombre": "Ciruela",
      "precio": 1.99,
      "categoria": "Fruta"
    },
    {
      "codigo": 20,
      "nombre": "Acelga",
      "precio": 1.99,
      "categoria": "Verdura"
    },
    {
      "codigo": 21,
      "nombre": "Zanahoria",
      "precio": 0.99,
      "categoria": "Verdura"
    },
    {
      "codigo": 22,
      "nombre": "Lechuga",
      "precio": 1.29,
      "categoria": "Verdura"
    },
    {
      "codigo": 23,
      "nombre": "Pimiento",
      "precio": 1.49,
      "categoria": "Verdura"
    },
    {
      "codigo": 24,
      "nombre": "Tomate",
      "precio": 1.99,
      "categoria": "Verdura"
    },
    {
      "codigo": 25,
      "nombre": "Espinaca",
      "precio": 1.79,
      "categoria": "Verdura"
    },
    {
      "codigo": 26,
      "nombre": "Berenjena",
      "precio": 1.49,
      "categoria": "Verdura"
    },
    {
      "codigo": 27,
      "nombre": "Calabacín",
      "precio": 1.29,
      "categoria": "Verdura"
    },
    {
      "codigo": 28,
      "nombre": "Papa",
      "precio": 1.49,
      "categoria": "Verdura"
    },
    {
      "codigo": 29,
      "nombre": "Cebolla",
      "precio": 0.99,
      "categoria": "Verdura"
    },
    {
      "codigo": 30,
      "nombre": "Espárrago",
      "precio": 2.99,
      "categoria": "Verdura"
    }
  ]  


  return(
    <main>
      {/* TODO Crear el componente item y pasarle sus respectivas propiedades  */}
      <ul>
        {
          granjas.map( item => <li style={{color: item.categoria === 'Fruta' ? 'green' : 'blue'}} key={item.codigo} >{item.nombre} <strong>{item.precio}</strong> </li>)
        }
      </ul>
    </main>
  )
}