import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";
import { useEffect, useState } from "react";

const repository = {
  name: "uniform",
  description: "Forms in React",
  link: "http://github.com/uniform/uniform",
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  //dois parametros = 1-Qual função eu quero executar 2-Quando que eu quero executar essa função?
  useEffect(() => {
    fetch("https://api.github.com/users/marclipe/repos")
    .then(response => response.json()) //pego minha resposta e converto para JSON
    .then(data => console.log(data)) //quando eu pegar os dados dos meus repositórios e mostro eles
  }, [repositories])

  console.log(repositories) //Vai vir vazio []

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  );
}