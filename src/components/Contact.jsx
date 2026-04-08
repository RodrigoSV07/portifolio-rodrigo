import { useState } from 'react'
import { Github, Linkedin, FileUser } from 'lucide-react'

function Contact() {
  const [nome, setNome] = useState('')
  const [mensagem, setMensagem] = useState('')

  function enviarWhats(event) {
    event.preventDefault()
    const telefone = '5511961472383'
    const texto = `Olá! Me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)
    window.open(`https://wa.me/${telefone}?text=${msgFormatada}`, '_blank')
  }

  return (
    <section id="contato" className="contatos">
      <h2 className="contatos-titulos">Entre em contato</h2>

      <form className="formulario-contato" onSubmit={enviarWhats}>
        <div className="grupo-form">
          <input
            type="text"
            placeholder="Nome"
            className="campo-form"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="grupo-form">
          <textarea
            className="campo-form"
            rows="4"
            placeholder="Digite sua mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />
        </div>

        <footer className="footer-form">
          <button type="submit" className="botao-form">Enviar WhatsApp</button>
        </footer>

        <div className="call">
          <span>Minhas Redes</span>
        </div>

        <div className="wrapper-icons">
          <div className="div-icons">
            <a href="https://github.com/RodrigoSV07" target="_blank" rel="noreferrer">
              <Github />
            </a>
            <span>Github</span>
          </div>

          <div className="div-icons">
            <a href="https://www.linkedin.com/in/rodrigo-sales-602627217/" target="_blank" rel="noreferrer">
              <Linkedin />
            </a>
            <span>Linkedin</span>
          </div>

          <div className="div-icons">
            <a href="" download aria-label="Baixar Currículo" target="_blank">
              <FileUser />
            </a>
            <span>Currículo</span>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Contact
