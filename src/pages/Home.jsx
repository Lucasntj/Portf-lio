import { useEffect, useRef, useState } from "react";
import profile from "../assets/profile.jfif";
import projectsData from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const featuredCase = projectsData[0];
  const [activeMediaIndex, setActiveMediaIndex] = useState(null);
  const touchStartXRef = useRef(null);
  const touchEndXRef = useRef(null);
  const FEATURED_MEDIA_PREVIEW_COUNT = 4;

  const mediaList = featuredCase.media || [];
  const previewMedia = mediaList.slice(0, FEATURED_MEDIA_PREVIEW_COUNT);
  const hasHiddenMedia = mediaList.length > FEATURED_MEDIA_PREVIEW_COUNT;
  const hiddenMediaCount = Math.max(
    0,
    mediaList.length - FEATURED_MEDIA_PREVIEW_COUNT,
  );

  const openMedia = (index) => setActiveMediaIndex(index);
  const closeMedia = () => setActiveMediaIndex(null);

  const goPrevMedia = () => {
    setActiveMediaIndex((current) => {
      if (current === null || mediaList.length === 0) {
        return current;
      }
      return (current - 1 + mediaList.length) % mediaList.length;
    });
  };

  const goNextMedia = () => {
    setActiveMediaIndex((current) => {
      if (current === null || mediaList.length === 0) {
        return current;
      }
      return (current + 1) % mediaList.length;
    });
  };

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    touchEndXRef.current = event.changedTouches[0].clientX;

    if (touchStartXRef.current === null || touchEndXRef.current === null) {
      return;
    }

    const deltaX = touchEndXRef.current - touchStartXRef.current;
    const SWIPE_THRESHOLD = 45;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) {
      return;
    }

    if (deltaX > 0) {
      goPrevMedia();
    } else {
      goNextMedia();
    }
  };

  useEffect(() => {
    if (activeMediaIndex === null) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMedia();
      }

      if (event.key === "ArrowLeft") {
        goPrevMedia();
      }

      if (event.key === "ArrowRight") {
        goNextMedia();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeMediaIndex]);

  return (
    <section className="home container">
      <div className="hero-ambient hero-ambient-a" aria-hidden="true" />
      <div className="hero-ambient hero-ambient-b" aria-hidden="true" />

      <section className="landing-hero" id="inicio">
        <div className="landing-copy">
          <p className="landing-kicker">PORTFÓLIO | FULLSTACK JÚNIOR</p>
          <h1>
            Desenvolvedor Fullstack Júnior em busca de oportunidade para aplicar
            boas práticas e evoluir em projetos reais.
          </h1>
          <p className="landing-description">
            Sou Lucas Macedo e estou em evolução constante, transformando estudo
            em entregas práticas com React, Node.js e MongoDB para resolver
            problemas reais em time de produto.
          </p>

          <div className="landing-cta-row">
            <a
              href={`${process.env.PUBLIC_URL}/curriculo-lucas.pdf`}
              download
              className="btn-primary"
            >
              Baixar Currículo
            </a>
            <a href="#case" className="btn-ghost">
              Ver Case Principal
            </a>
          </div>

          <div className="landing-tag-row" aria-label="principais stacks">
            <span>React 18</span>
            <span>Node.js</span>
            <span>TypeScript</span>
            <span>MongoDB</span>
            <span>Arquitetura de APIs</span>
          </div>
        </div>

        <aside className="landing-profile-card">
          <img
            src={profile}
            alt="Foto de perfil de Lucas Macedo"
            className="profile-img"
          />
          <p className="profile-name">Lucas Macedo</p>
          <p className="profile-role">Desenvolvedor Fullstack Júnior</p>
          <div className="profile-stats">
            <div>
              <strong>4+</strong>
              <span>Projetos publicados</span>
            </div>
            <div>
              <strong>Aberto</strong>
              <span>Vaga júnior/estágio</span>
            </div>
          </div>
          <div className="profile-links">
            <a
              href="https://www.linkedin.com/in/lucasmacedodev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Lucasntj"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </aside>
      </section>

      <article className="future-case" id="case">
        <header className="future-case-head">
          <p className="projects-kicker">Case Principal</p>
          <h2>{featuredCase.title}</h2>
          <p>{featuredCase.summary}</p>
        </header>

        <div className="future-case-grid">
          <div className="future-case-line">
            <h3>Desafio</h3>
            <p>{featuredCase.challenge}</p>
          </div>
          <div className="future-case-line">
            <h3>Solução</h3>
            <p>{featuredCase.solution}</p>
          </div>
          <div className="future-case-line">
            <h3>Impacto</h3>
            <ul>
              {featuredCase.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="future-case-line">
            <h3>Segurança e Qualidade</h3>
            <ul>
              {featuredCase.security.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {featuredCase.media?.length ? (
          <div className="featured-media-section">
            <div className="featured-media-grid" aria-label="mídias do projeto">
              {previewMedia.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className="featured-media-button"
                  onClick={() => openMedia(index)}
                  aria-label={`Ampliar Fufu das Aguas - mídia ${index + 1}`}
                >
                  <img
                    src={item}
                    alt={`Fufu das Aguas - mídia ${index + 1}`}
                    className="featured-media-img"
                  />
                  {hasHiddenMedia && index === previewMedia.length - 1 ? (
                    <span className="featured-media-overlay">
                      +{hiddenMediaCount}
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </article>

      <section className="projects-section" id="projetos">
        <div className="projects-head">
          <p className="projects-kicker">Cases Recentes</p>
          <h2>Outros Projetos</h2>
          <p>
            Projetos de estudo aplicado com foco em experiência, boas práticas e
            evolução técnica.
          </p>
        </div>

        <div className="projects-container">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="contact-cta" id="contato">
        <div className="contact-head">
          <h2>Pronto para processos seletivos</h2>
          <p>
            Vamos conversar sobre vaga júnior, estágio ou projeto onde eu possa
            aprender, contribuir e crescer com o time.
          </p>
        </div>

        <div className="contact-grid">
          <article className="contact-card">
            <h3>WhatsApp</h3>
            <p>Canal mais rápido para iniciar conversa e alinhar contexto.</p>
            <span className="contact-meta">Resposta média: no mesmo dia</span>
          </article>
          <article className="contact-card">
            <h3>E-mail</h3>
            <p>Ideal para proposta formal, detalhes técnicos e anexos.</p>
            <span className="contact-meta">Retorno em até 24h</span>
          </article>
          <article className="contact-card">
            <h3>Disponibilidade</h3>
            <p>Atuação remota, híbrida ou presencial conforme necessidade.</p>
            <span className="contact-meta">Brasil, com realocação</span>
          </article>
        </div>

        <div className="cta-actions">
          <a
            href="https://wa.me/5579996463241"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Iniciar conversa no WhatsApp
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=edumaster.0990@gmail.com&su=Contato%20via%20Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Enviar proposta por E-mail
          </a>
        </div>
      </section>

      {activeMediaIndex !== null ? (
        <div
          className="media-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da imagem"
          onClick={closeMedia}
        >
          <div
            className="media-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="media-lightbox-close"
              onClick={closeMedia}
              aria-label="Fechar imagem"
            >
              Fechar
            </button>

            <div className="media-lightbox-stage">
              <button
                type="button"
                className="media-lightbox-nav media-lightbox-prev"
                onClick={goPrevMedia}
                aria-label="Imagem anterior"
              >
                ‹
              </button>

              <img
                src={mediaList[activeMediaIndex]}
                alt={`Fufu das Aguas - mídia ${activeMediaIndex + 1}`}
                className="media-lightbox-img"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              />

              <button
                type="button"
                className="media-lightbox-nav media-lightbox-next"
                onClick={goNextMedia}
                aria-label="Próxima imagem"
              >
                ›
              </button>
            </div>

            <p className="media-lightbox-counter">
              {activeMediaIndex + 1} / {mediaList.length}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
