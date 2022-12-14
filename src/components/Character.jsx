function Character({ name, image, origin }) {
  return (
    <div className="text-center p-5">
      <h2> {name} </h2>
      <img className="img-fluid rounded-pill" src={image} alt={name} />
      <p>{origin} </p>
    </div>
  );
}

export default Character;

{
  /* <div>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
    </div> */
}
