
const profile = {
  nombre: "Batman",
  imagen: "https://images3.alphacoders.com/103/1033318.jpg",
  descripcion: "Batman, también conocido como Bruce Wayne, es un superhéroe de DC Comics. Después de ser testigo del asesinato de sus padres cuando era niño, juró venganza contra los criminales y luchó incansablemente para proteger a Gotham City de la delincuencia.",
}
export default function Profile(){

  return(
    <>
      <h1>{profile.nombre}</h1>
      <img src={profile.imagen} />
      <p>{profile.descripcion}</p>
    </>
  )
}