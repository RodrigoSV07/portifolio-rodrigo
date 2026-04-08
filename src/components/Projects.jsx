const projetos = [
  {
    id: 1,
    titulo: 'projeto 1',
    descricao: 'descrição de projeto',
    imagem: '/img/grandha-img-1.jpg',
    link: null,
  },
  {
    id: 2,
    titulo: 'projeto 1',
    descricao: 'descrição de projeto',
    imagem: '/img/grandha-img-1.jpg',
    link: null,
  },
  {
    id: 3,
    titulo: 'SunSpaceCRM',
    descricao: 'descrição de projeto',
    imagem: '/img/sunspace.jpg',
    link: 'https://sunspacecrm.com.br/',
  },
]

function ProjectCard({ titulo, descricao, imagem, link }) {
  const conteudo = (
    <>
      <img src={imagem} alt={titulo} className="projetos-imagem" />
      <div className="caixa-textos-projetos">
        <h3 className="infos-projetos">{titulo}</h3>
        <p className="paragrafo-projetos">{descricao}</p>
      </div>
    </>
  )

  if (link) {
    return (
      <a className="projetos-card" href={link} target="_blank" rel="noreferrer">
        {conteudo}
      </a>
    )
  }

  return <div className="projetos-card">{conteudo}</div>
}

function Projects() {
  return (
    <section id="projetos" className="projetos">
      <h2 className="projetos-titulos">Projetos</h2>
      <div className="prohjetos-caixa">
        {projetos.map((projeto) => (
          <ProjectCard key={projeto.id} {...projeto} />
        ))}
      </div>
    </section>
  )
}

export default Projects
