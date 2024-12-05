import "./App.scss";
import React from "react";
import Container from "react-bootstrap/Container";
import Menubar from "./components/Menubar";
import { Card, Button } from "react-bootstrap";
import logo from "./assets/background/logo.png";
import dois from "./assets/background/2.jpg";
import tres from "./assets/background/3.jpg";

function App() {
  return (
    <div className="app">
      <Menubar />
      <section id="home" className="section home-section">
        <div className="container home mt-2 px-4">
          <img
            src={logo}
            alt="Logo Josimar Bezerra & Advogados"
            className="mx-auto mb-6 w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
          />
          <h1 className="text-4xl md:text-5xl text-center font-bold">
            JOSIMAR BEZERRA & ADVOGADOS
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-center  mt-4">
            Direito condominial Expulsão de Condôminos Antissociais
          </h2>
          <p className="text-lg md:text-xl  mt-6 text-justify leading-relaxed">
            O Escritório de advocacia JOSIMAR BEZERRA & ADVOGADOS ASSOCIADOS
            atua com foco em direito condominial e gestão de conflitos com
            condôminos antissociais.
          </p>
          <p className="text-lg md:text-xl  mt-4 text-justify leading-relaxed">
            Contamos com uma equipe altamente qualificada, com ampla experiência
            em soluções jurídicas voltadas ao setor condominial. Nosso
            compromisso é auxiliar nossos clientes na busca pela tão desejada
            harmonia e tranquilidade nas relações comunitárias, oferecendo um
            atendimento personalizado e ágil, com ética e excelência.
          </p>
          <div className="mt-6">
            <a href="#contato" className="btn btn-success btn-lg">
              FALE COM ESPECIALISTA
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="flex flex-col md:flex-row bg-[#272219]">
        {/* Imagem */}
        <div className="w-full md:w-1/2 h-screen">
          <img
            src={dois}
            alt="Edifícios modernos"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 px-8 md:px-12 flex items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              O que é Direito Condominial?
            </h2>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
              O Direito Condominial é a área jurídica que regulamenta as
              relações e resolve conflitos no âmbito dos condomínios. Ele
              estabelece regras para o uso adequado das propriedades e prevê
              penalidades em casos de descumprimento. Essas normas estão
              previstas no Código Civil e na legislação condominial específica.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
              Por isso, é obrigação dos condôminos cumprir tanto as disposições
              do Código Civil quanto as normas internas que regem a convivência
              em condomínios. O Direito Condominial define direitos e deveres,
              assegurando a ordem e a harmonia na coletividade condominial.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              No nosso escritório, os advogados especializados em Direito
              Condominial estão capacitados para resolver conflitos com base na
              legislação vigente. Além disso, orientam e promovem ações
              específicas, como a expulsão de condôminos antissociais,
              garantindo que os direitos dos demais sejam preservados.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="flex flex-col md:flex-row bg-[#272219]">
        {/* Texto */}
        <div className="w-full md:w-1/2 px-8 md:px-12 flex items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              O que fazer diante de um condômino antissocial no seu condomínio?
            </h2>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
              A legislação, juntamente com a Convenção do Condomínio e o
              Regulamento Interno, prevê uma série de penalidades para lidar com
              condôminos que apresentem comportamentos antissociais. Essas
              penalidades devem ser aplicadas de forma progressiva, buscando
              restaurar o sossego e a harmonia no condomínio. Veja o passo a
              passo:
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
              <strong>1- Notificação extrajudicial:</strong>
              <br />O condômino infrator deve ser notificado por escrito com uma
              advertência clara sobre sua infração. É importante conceder prazo
              e oportunidade para que ele apresente sua defesa, encaminhando o
              documento ao(a) síndico(a), sub-síndico(a) e ao conselho do
              condomínio.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              <strong>2- Aplicação de multa inicial:</strong>
              <br />
              Caso a advertência não surta efeito, o(a) síndico(a) poderá
              aplicar uma multa com base na convenção ou no regimento interno do
              condomínio. Na ausência de regras específicas, aplica-se o
              disposto no artigo 1.336, § 2º, do Código Civil, que permite uma
              multa de até cinco vezes o valor da taxa condominial para a
              infração cometida.
            </p>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2 h-screen">
          <img
            src={tres}
            alt="Condomínio"
            className="w-full h-full object-cover"
          />
        </div>
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
