export default function Band(props) {
  return (
    <article>
      <img src={props.logo} alt="Logo" />
      <p>{props.logoCredits}</p>
      <h3>{props.name}</h3>
      <p>{props.genre}</p>
      <p>{props.bio}</p>
    </article>
  );
}
