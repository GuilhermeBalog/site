import React from "react"

const FORMSUBMIT_PUBLIC_TOKEN = '7f6cf6921639c69916dbd96252ed8959'
const FORMSUBMIT_URL = `https://formsubmit.co/${FORMSUBMIT_PUBLIC_TOKEN}`;

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contato</h2>

      <form
        className="contact__form"
        action={FORMSUBMIT_URL}
        method="post"
      >
        <div className="contact__input-group">
          <label htmlFor="name">Seu nome</label>
          <input type="text" name="name" id="name" placeholder="Uncle Bob" />
        </div>

        <div className="contact__input-group">
          <label htmlFor="email">Seu email</label>
          <input type="email" name="email" id="email" placeholder="unclebob@gmail.com" />
        </div>

        <div className="contact__input-group">
          <label htmlFor="message">Sua mensagem</label>
          <textarea name="message" id="message" rows={6}></textarea>
        </div>

        <input type="hidden" name="_subject" value="Contato pelo site de Guilherme Balog" />

        <button type="submit" className="contact__submit">Enviar</button>
      </form>
    </section>
  );
}
