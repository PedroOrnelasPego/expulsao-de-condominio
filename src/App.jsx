import "./App.scss";
import React from "react";
import Container from "react-bootstrap/Container";
import Menubar from "./components/Menubar";
import { Card, Button } from "react-bootstrap";
import logo from "./assets/background/logo.jpg";

function App() {
  return (
    <div className="app">
      <Menubar />

      <section
        id="home"
        className="section home-section d-flex align-items-center"
      >
        <Container className="d-flex justify-content-center">
          <Card className="home-card text-center p-4">
            <Card.Body>
              <img src={logo} alt="Logo" className="home-logo mb-4" />
              <Card.Title className="mb-3">
                JOSIMAR BEZERRA & ADVOGADOS
              </Card.Title>
              <Card.Subtitle className="mb-3 fs-4">
                Direito condominial - Expulsão de Condôminos antissociais
              </Card.Subtitle>
              <Card.Text className="mb-3">
                O Escritório de advocacia JOSIMAR BEZERRA & ADVOGADOS ASSOCIADOS
                atua com foco em direito condominial e gestão de conflitos com
                condôminos antissociais.
              </Card.Text>
              <Card.Text>
                Contamos com uma equipe altamente qualificada, com ampla
                experiência em soluções jurídicas voltadas ao setor condominial.
                Nosso compromisso é auxiliar nossos clientes na busca pela tão
                desejada harmonia e tranquilidade nas relações comunitárias,
                oferecendo um atendimento personalizado e ágil, com ética e
                excelência.
              </Card.Text>
              <Button variant="success" className="whatsapp-button mt-4">
                FALE COM ESPECIALISTA
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </section>

      <section
        id="about"
        className="section about-section d-flex align-items-center"
      >
        <Container className="d-flex justify-content-center">
          <Card className="p-4 about-card">
            <Card.Body>
              <Card.Title>O que é Direito condominial?</Card.Title>
              <Card.Text>
                O Direito Condominial é a área jurídica que regulamenta as
                relações e resolve conflitos no âmbito dos condomínios. Ele
                estabelece regras para o uso adequado das propriedades e prevê
                penalidades em casos de descumprimento. Essas normas estão
                previstas no Código Civil e na legislação condominial
                específica.
              </Card.Text>
              <Card.Text>
                Por isso, é obrigação dos condôminos cumprir tanto as
                disposições do Código Civil quanto as normas internas que regem
                a convivência em condomínios. O Direito Condominial define
                direitos e deveres, assegurando a ordem e a harmonia na
                coletividade condominial.
              </Card.Text>
              <Card.Text>
                No nosso escritório, os advogados especializados em Direito
                Condominial estão capacitados para resolver conflitos com base
                na legislação vigente. Além disso, orientam e promovem ações
                específicas, como a expulsão de condôminos antissociais,
                garantindo que os direitos dos demais sejam preservados.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </section>

      <section
        id="contact"
        className="section contact-section d-flex align-items-center"
      >
        <Container className="d-flex justify-content-center">
          <Card className="text-center p-4 contact-card">
            <Card.Body>
              <Card.Title>Contato</Card.Title>
              <Card.Text>Entre em contato conosco!</Card.Text>
              <Card.Text>Email: contato@exemplo.com</Card.Text>
              <Card.Text>Telefone: (31) 1234-5678</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </section>

      <footer className="bg-dark text-light py-4">
        <Container>
          <p className="text-center">
            &copy; 2024 Minha Empresa. Todos os direitos reservados.
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
