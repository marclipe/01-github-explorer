export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository}</strong>
      <p>Forms in ReactJS</p>

      <a href="#">Acessar repositórios</a>
    </li>
  ); 
}