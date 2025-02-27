import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meu Currículo</h1>
      </header>
      
      <section className="section">
        <h2>Informações Pessoais</h2>
        <p><strong>Nome:</strong> Leonam Paulino</p>
        <p><strong>Email:</strong> leonam.g.paulino@gmail.com</p>
        <p><strong>Telefone:</strong> (24) 999689518</p>
        <p><strong>Localização:</strong> Juiz de Fora, MG</p>
      </section>
      
      <section className="section">
        <h2>Experiência Profissional</h2>
        <div className="experience">
          <h3>Desenvolvedor Frontend - Projeto Pessoal</h3>
          <p><strong>Período:</strong> 2025 - Presente</p>
          <p>Desenvolvimento de portfólio e aplicações web utilizando React, JavaScript e Bootstrap.</p>
        </div>
      </section>
      
      <section className="section">
        <h2>Educação</h2>
        <div className="education">
          <h3>Sistemas de Informação - Uniacademia</h3>
          <p><strong>Período:</strong> 3º Período - Cursando</p>
        </div>
      </section>

      <section className="section">
        <h2>Habilidades</h2>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML5 & CSS3</li>
          <li>Git & GitHub</li>
          <li>Bootstrap & Tailwind CSS</li>
        </ul>
      </section>
      
      <footer className="App-footer">
        <p>Feito com React 💻</p>
      </footer>
    </div>
  );
}

export default App;
