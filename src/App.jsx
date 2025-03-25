import "./App.scss";
import React from "react";
import Container from "react-bootstrap/Container";
import Menubar from "./components/Menubar";
import { Card, Button } from "react-bootstrap";
import logo from "./assets/background/logo.png";
import aboutImg from "./assets/background/about-img.jpg";
import actionsImg from "./assets/background/actions-img.jpg";
import identifyImg from "./assets/background/identify-img.jpg";
import importantImg from "./assets/background/important-img.jpg";
import contactImg from "./assets/background/contact-img.png";
import { FaWhatsapp } from "react-icons/fa";

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
            DIREITO CONDOMINIAL
          </h2>
          <h2 className="text-2xl md:text-3xl font-semibold text-center  mt-4">
            Expulsão de Condôminos Antissociais
          </h2>
          <p className="text-lg md:text-xl  mt-6 text-justify leading-relaxed">
            O Escritório de advocacia JOSIMAR BEZERRA & ADVOGADOS atua com foco
            em DIREITO CONDOMINIAL e gestão de conflitos com condôminos
            antissociais.
          </p>
          <p className="text-lg md:text-xl  mt-4 text-justify leading-relaxed">
            Contamos com uma equipe altamente qualificada, com ampla experiência
            em soluções jurídicas voltadas ao setor condominial. Nosso
            compromisso é auxiliar nossos clientes na busca pela tão desejada
            harmonia e tranquilidade nas relações comunitárias, oferecendo um
            atendimento personalizado e ágil, com ética e excelência.
          </p>
          <div className="mt-6 flex justify-end">
            <a
              href="https://wa.me/5531987533343?text=Gostaria%20de%20saber%20mais%20sobre%20Expuls%C3%A3o%20de%20Cond%C3%B4minos%20Antissociais."
              target="_blank"
              rel="noopener noreferrer"
              className="botao-wpp btn btn-success btn-lg items-center gap-2"
            >
              FALE COM ESPECIALISTA
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="flex flex-col md:flex-row bg-[#d4d3d3]">
        {/* Imagem */}
        <div className="w-full md:w-1/2 h-screen">
          <img
            src={aboutImg}
            alt="Edifícios modernos"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 px-8 md:px-12 flex items-center">
          <div>
            <h2 className="text-3xl md:text-4xl max-md:mt-7 font-bold text-black mb-6">
              O que é Direito Condominial?
            </h2>
            <p className="text-lg md:text-xl text-black leading-relaxed mb-4">
              O Direito Condominial é a área jurídica que regulamenta as
              relações e resolve conflitos no âmbito dos condomínios. Ele
              estabelece regras para o uso adequado das propriedades e prevê
              penalidades em casos de descumprimento. Essas normas estão
              previstas no Código Civil e na legislação condominial específica.
            </p>
            <p className="text-lg md:text-xl text-black leading-relaxed mb-4">
              Por isso, é obrigação dos condôminos cumprir tanto as disposições
              do Código Civil quanto as normas internas que regem a convivência
              em condomínios. O Direito Condominial define direitos e deveres,
              assegurando a ordem e a harmonia na coletividade condominial.
            </p>
            <p className="text-lg md:text-xl text-black leading-relaxed">
              No nosso escritório, os advogados especializados em Direito
              Condominial estão capacitados para resolver conflitos com base na
              legislação vigente. Além disso, orientam e promovem ações
              específicas, como a expulsão de condôminos antissociais,
              garantindo que os direitos dos demais sejam preservados.
            </p>
            <div className="mt-6 flex justify-end">
              <a
                href="https://wa.me/5531987533343?text=Gostaria%20de%20saber%20mais%20sobre%20Expuls%C3%A3o%20de%20Cond%C3%B4minos%20Antissociais."
                target="_blank"
                rel="noopener noreferrer"
                className="botao-wpps flex btn btn-success btn-lg items-center gap-2"
              >
                <span>FALE COM ESPECIALISTA</span>
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="actions" className="flex flex-col md:flex-row bg-[#d4d3d3]">
        {/* Texto */}
        <div className="w-full md:w-1/2 px-8 md:px-12 flex items-center">
          <div>
            <h2 className="text-3xl md:text-4xl max-md:mt-7 font-bold text-black mb-6">
              O que fazer diante de um condômino antissocial no seu condomínio?
            </h2>
            <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
              A legislação, juntamente com a Convenção do Condomínio e o
              Regulamento Interno, prevê uma série de penalidades para lidar com
              condôminos que apresentem comportamentos antissociais. Essas
              penalidades devem ser aplicadas de forma progressiva, buscando
              restaurar o sossego e a harmonia no condomínio. Veja o passo a
              passo:
            </p>

            {/* Tópicos 1 e 2 */}
            <div className="flex flex-col md:flex-row md:gap-8 mb-1">
              <div className="flex-1">
                <p className="text-base md:text-lg text-black leading-relaxed mb-4">
                  <strong>1- Notificação extrajudicial:</strong>
                  <br />O condômino infrator deve ser notificado por escrito com
                  uma advertência clara sobre sua infração. É importante
                  conceder prazo e oportunidade para que ele apresente sua
                  defesa, encaminhando o documento ao(a) síndico(a),
                  sub-síndico(a) e ao conselho do condomínio.
                </p>
              </div>
              <div className="flex-1">
                <p className="text-base md:text-lg text-black leading-relaxed mb-4">
                  <strong>2- Aplicação de multa inicial:</strong>
                  <br />
                  Caso a advertência não surta efeito, o(a) síndico(a) poderá
                  aplicar uma multa com base na convenção ou no regimento
                  interno do condomínio. Na ausência de regras específicas,
                  aplica-se o disposto no artigo 1.336, § 2º, do Código Civil,
                  que permite uma multa de até cinco vezes o valor da taxa
                  condominial para a infração cometida.
                </p>
              </div>
            </div>

            {/* Tópicos 3 e 4 */}
            <div className="flex flex-col md:flex-row md:gap-8 mb-1">
              <div className="flex-1">
                <p className="text-base md:text-lg text-black leading-relaxed mb-4">
                  <strong>3- Assembleia para agravamento da multa:</strong>
                  <br />
                  Persistindo o comportamento inadequado, deve ser convocada uma
                  assembleia geral extraordinária. Nesse encontro, será votada a
                  aplicação de uma multa agravada, conforme o artigo 1.337 do
                  Código Civil, podendo chegar a até cinco vezes o valor do
                  condomínio. O infrator terá direito de apresentar sua defesa
                  antes da deliberação dos condôminos, sendo necessária a
                  aprovação de 3/4 dos condôminos restantes para validar a
                  penalidade.
                </p>
              </div>
              <div className="flex-1">
                <p className="text-base md:text-lg text-black leading-relaxed mb-4">
                  <strong>
                    4- Nova assembleia para aplicação de penalidade máxima:
                  </strong>
                  <br />
                  (trocar plano de fundo) Em caso de reincidência, convoca-se
                  outra assembleia geral extraordinária, onde os condôminos
                  podem decidir pela aplicação de uma multa de até dez vezes o
                  valor do condomínio, conforme o artigo 1.337 parágrafo único
                  do Código Civil. Novamente, o infrator deverá ter a
                  oportunidade de se defender, e a deliberação seguirá o quórum
                  qualificado de 3/4 dos condôminos restantes.
                </p>
              </div>
            </div>

            <p className="text-lg md:text-xl text-black leading-relaxed">
              Esse processo garante que as ações tomadas estejam em conformidade
              com a legislação e respeitem o direito de defesa, ao mesmo tempo
              em que protege o bem-estar coletivo no condomínio.
            </p>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2 h-screen">
          <img
            src={actionsImg}
            alt="Condomínio"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section id="identify" className="flex flex-col md:flex-row bg-[#d4d3d3]">
        {/* Imagem */}
        <div className="w-full md:w-1/2 h-screen">
          <img
            src={identifyImg}
            alt="Condomínio"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 px-8 md:px-12 flex items-center">
          <div>
            <h2 className="text-3xl md:text-4xl max-md:mt-7 font-bold text-black mb-6">
              Como identificar um condômino antissocial?
            </h2>
            <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
              Um condômino antissocial é aquele que, de forma reiterada,
              desrespeita normas, leis e comete atos graves, muitas vezes
              configurados como crimes. É importante destacar que não basta ser
              alguém com quem você tem desavenças pessoais; é necessário que
              suas condutas causem prejuízo significativo à convivência no
              condomínio, gerando reclamações, registros de ocorrência policial
              ou situações graves.
            </p>
            <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
              Alguns exemplos de comportamentos antissociais incluem:
            </p>
            <ul className="list-disc text-lg md:text-xl text-black pl-6">
              <li className="mb-4">
                <strong>Agressividade verbal ou física:</strong> Xingamentos,
                assédio moral, agressões físicas, perseguição ou stalking contra
                síndico(a), moradores ou funcionários.
              </li>
              <li className="mb-4">
                <strong>Desrespeito às regras de ruído:</strong> Persistência em
                ultrapassar os limites de horário para barulhos, como festas ou
                música alta, especialmente à noite.
              </li>
              <li className="mb-4">
                <strong>Atentados ao pudor:</strong> Atitudes como andar nu ou
                seminu pelas áreas comuns do edifício.
              </li>
              <li>
                <strong>Uso inadequado do imóvel:</strong> Realização de
                atividades profissionais nocivas ou impróprias em unidades
                residenciais.
              </li>
              <li>
                calunica, injuria e difamação lesando a honra entre condominios
                ou sindicos
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="important"
        className="flex flex-col md:flex-row bg-[#d4d3d3]"
      >
        {/* Texto */}
        <div className="w-full md:w-1/2 px-8 md:px-12 flex items-center">
          <div>
            <ul className="list-disc text-lg md:text-xl text-black pl-6">
              <li className="mb-4">
                <strong>Uso de drogas ilícitas:</strong> Consumo em áreas comuns
                do condomínio.
              </li>
              <li className="mb-4">
                <strong>Falta de higiene e segurança:</strong> Violação de
                normas que comprometem a saúde ou a segurança dos demais
                condôminos.
              </li>
              <li className="mb-4">
                <strong>Perturbação permanente:</strong>Ensaios de banda ou
                ruídos intensos e frequentes, mesmo que fora de horários
                restritivos.
              </li>
              <li>
                <strong>Ofensas recorrentes:</strong> Calúnia, injúria e
                difamação direcionadas ao síndico(a), funcionários ou vizinhos
                de forma contínua.
              </li>
              <li>
                <strong>Outras condutas criminosas:</strong> Qualquer
                comportamento que infrinja a lei ou ameace o bem-estar coletivo.
              </li>
            </ul>
            <p className="text-lg md:text-xl text-black leading-relaxed mt-6">
              Identificar esses comportamentos é o primeiro passo para tomar
              medidas cabíveis, sempre com base na legislação e no regimento
              interno do condomínio. É fundamental documentar os casos, reunir
              provas e agir de forma criteriosa para proteger a paz e a
              segurança da comunidade condominial.
            </p>
            <div className="mt-6 flex justify-end max-md:mb-7">
              <a
                href="https://wa.me/5531987533343?text=Gostaria%20de%20saber%20mais%20sobre%20Expuls%C3%A3o%20de%20Cond%C3%B4minos%20Antissociais."
                target="_blank"
                rel="noopener noreferrer"
                className="botao-wpps flex btn btn-success btn-lg items-center gap-2"
              >
                <span>FALE COM ESPECIALISTA</span>
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2 h-screen">
          <img
            src={importantImg}
            alt="Condomínio"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section
        id="centralized"
        className="flex flex-col items-center bg-[#1A1A0D] py-12 px-8"
      >
        <div className="max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Principais atuações da Assessoria Jurídica Condominial
          </h2>
          <p className="text-lg md:text-xl text-white leading-relaxed mb-6 text-justify">
            O escritório JOSIMAR BEZERRA & ADVOGADOS possui
            <strong>advogados especialistas em Direito Condominial</strong>,
            atendendo a todas as necessidades de seus clientes de forma
            personalizada, com ética, excelência e agilidade. Nossa Assessoria
            contempla as seguintes atividades no âmbito do Direito Condominial:
          </p>
          <ul className="list-disc text-lg md:text-xl text-white leading-relaxed pl-6 md:pl-12 text-justify">
            <li className="mb-4">
              Assessoria jurídica especializada em condomínios residenciais,
              comerciais e associação de moradores através da consultoria
              preventiva ou judicialmente.
            </li>
            <li className="mb-4">
              Acompanhamento de assembleias ordinárias e extraordinárias e de
              todos os atos inerentes à sua realização, tais como: elaboração de
              edital de convocação, verificação da validade dos votos e assuntos
              tratados na reunião, auxílio nas deliberações através de
              esclarecimentos de dúvidas por advogado especializado em Direito
              Condominial e nos temas tratados durante a Assembleia.
            </li>
            <li className="mb-4 text-justify">
              Participação em assembleia de instalação.
            </li>
            <li className="mb-4 text-justify">
              Análise de propostas de prestação de serviços e contratos.
            </li>
            <li className="mb-4">
              Análise da Convenção, Regulamento e outras normas relativas ao
              condomínio, elaboração e envio de advertências, multas e
              notificações extrajudiciais.
            </li>
            <li className="mb-4">
              Atuação direta na cobrança de unidades inadimplentes na esfera
              extrajudicial com o departamento especializado, inclusive com
              plantões para recuperação de crédito permanente e rigorosa
              cobrança judicial.
            </li>
            <li className="mb-4">
              Elaboração de pareceres jurídicos para consolidação de assuntos
              polêmicos, tais como: sorteio de vagas de garagem, voto
              proporcional à fração ideal, responsabilidade do síndico,
              prestação de contas, direito de voto, responsabilidade do conselho
              e condôminos, vizinhança, animais no condomínio, dentre outros
              assuntos.
            </li>
            <li className="mb-4">
              Representação processual em todas as esferas judiciais,
              departamento especializado em elaboração de petições iniciais,
              defesas e recursos, inclusive para Tribunais Superiores.
            </li>
            <li>Renegociação de debitos com a copasa</li>
          </ul>
          <div className="mt-6 flex justify-end">
            <a
              href="https://wa.me/5531987533343?text=Gostaria%20de%20saber%20mais%20sobre%20Expuls%C3%A3o%20de%20Cond%C3%B4minos%20Antissociais."
              target="_blank"
              rel="noopener noreferrer"
              className="botao-wpps flex btn btn-success btn-lg items-center gap-2"
            >
              <span>FALE COM ESPECIALISTA</span>
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="flex flex-col md:flex-row bg-[#d4d3d3]">
        {/* Imagem */}
        <div className="w-full md:w-1/2 h-screen">
          <img
            src={contactImg}
            alt="Contato"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 px-8 md:px-12 flex flex-col justify-center items-start">
          <div className="max-md:my-7">
            <img
              src={logo}
              alt="Logo Josimar Bezerra & Advogados"
              className="mx-auto mb-6 w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              JOSIMAR BEZERRA & ADVOGADOS
            </h2>
            <h3 className="text-2xl md:text-3xl text-black mb-4">
              Entre em Contato
            </h3>
            <p className="text-lg md:text-xl text-black leading-relaxed mb-4">
              Avenida Raja Gabáglia n° 1.000, Conj. 1103 / 1104, Cidade Jardim,
              Belo Horizonte/MG, CEP: 30.441-070.
            </p>
            <p className="text-lg md:text-xl text-black leading-relaxed mb-4">
              Rua das Canoas, 757, Betânia, Belo Horizonte/MG, CEP: 30.540-040.
            </p>
            <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
              De Segunda à Sexta-feira das 8h às 17h.
            </p>
            <p className="text-lg md:text-xl text-black leading-relaxed flex items-center mb-6">
              (31) 98753-3343
            </p>
            <p className="text-lg md:text-xl text-black leading-relaxed flex items-center mb-6">
              contato@josimarbezerraadvogados.com.br
            </p>
            <div className="mt-6 flex">
              <a
                href="https://wa.me/5531987533343?text=Gostaria%20de%20saber%20mais%20sobre%20Expuls%C3%A3o%20de%20Cond%C3%B4minos%20Antissociais."
                target="_blank"
                rel="noopener noreferrer"
                className="botao-wpps flex btn btn-success btn-lg items-center gap-2"
              >
                <span>FALE COM ESPECIALISTA</span>
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-light py-4">
        <Container>
          <p className="text-center">
            &copy; 2024 Josimar Bezerra & Advogados . Todos os direitos
            reservados.
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
