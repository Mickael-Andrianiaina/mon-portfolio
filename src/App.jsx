import { useEffect, useRef, useState } from 'react'
import './App.css'
import heroImg from './assets/Mickael.png'

/* ------------------------------------------------------------------ */
/* DONNÉES (modifie ici, tout le site se met à jour)                  */
/* ------------------------------------------------------------------ */

const identity = {
  prenom: 'MATOKY ANDRIANIAINA',
  nom: 'Herrio Mickaël',
  nomComplet: 'MATOKY ANDRIANIAINA Herrio Mickaël',
  titre: 'Développeur logiciel polyvalent',
  phone: '+261 34 56 363 34',
  phoneHref: '+261345636334',
  email: 'mickaelandrianiaina2001@gmail.com',
  adresse: 'LOT II A41 Ambatomainty',
  facebook: 'Mickael Andrianiaina',
  naissance: '27 novembre 2001, Avaradoha',
  age: '24 ans',
  nationalite: 'Malagasy',
  situation: 'Célibataire',
  objectif1:
    'Développeur web polyvalent de niveau Master 1, je souhaite intégrer une entreprise internationale afin de mettre à profit mes compétences techniques, mon esprit d’analyse et ma créativité.',
  objectif2:
    'Passionné par les nouvelles technologies, je souhaite contribuer à des projets informatiques innovants, collaborer avec des équipes pluridisciplinaires et continuer à développer mes compétences.',
}

const skillGroups = [
  {
    id: 'langages',
    label: 'Langages',
    note: 'Du bas niveau au web, pour choisir l’outil adapté à chaque problème.',
    items: ['C', 'C++', 'Java', 'Python', 'C#', 'JavaScript', 'TypeScript', 'PHP'],
  },
  {
    id: 'front',
    label: 'Front-end',
    note: 'Ce que l’utilisateur voit et touche.',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    id: 'back',
    label: 'Back-end',
    note: 'Le côté serveur, avec plusieurs écosystèmes.',
    items: ['PHP + CodeIgniter', 'PHP + Laravel', 'Python + Django', 'Node.js + Express.js'],
  },
  {
    id: 'cms',
    label: 'CMS',
    note: 'Création rapide de sites, blogs et boutiques en ligne.',
    items: ['WordPress', 'WooCommerce'],
  },
  {
    id: 'data',
    label: 'Bases de données',
    note: 'Relationnel et orienté documents.',
    items: ['MySQL', 'MongoDB'],
  },
  {
    id: 'archi',
    label: 'Architecture',
    note: 'Structurer le code pour qu’il reste maintenable.',
    items: ['MVC (Model-View-Controller)'],
  },
]

const projects = [
  {
    id: 'sagit',
    title: 'SAGIT',
    meta: 'Application web · Stage de Licence 3',
    place: 'Point Com Technology Center, du 25 mai au 25 août 2026',
    summary: 'Application web de gestion des tickets d’incidents informatiques.',
    points: [
      'Fonctionnalités de signalement, d’affectation, de traitement et de suivi des tickets.',
      'Supervision des techniciens.',
      'Surveillance du parc informatique.',
    ],
  },
  {
    id: 'inspc',
    title: 'Enquête de couverture vaccinale',
    meta: 'Gestion de données · INSPC',
    place: 'Du 7 novembre au 22 décembre 2025',
    summary: 'Gestionnaire de données sur une enquête de terrain.',
    points: [
      'Gestion et formation des enquêteurs, vérification des pièces justificatives.',
      'Collecte, analyse et contrôle de la qualité et de la complétude des données.',
    ],
  },
  {
    id: 'l1',
    title: 'Mini-véhicule de nettoyage',
    meta: 'Projet académique · Licence 1 · ISPM',
    place: 'Électronique, systèmes informatiques et IA',
    summary: 'Premier projet du parcours ESIIA à l’ISPM.',
    points: [],
  },
  {
    id: 'l2',
    title: 'Robotisation de l’agriculture',
    meta: 'Projet académique · Licence 2 · ISPM',
    place: 'Électronique, systèmes informatiques et IA',
    summary: 'Projet de robotique appliquée à l’agriculture.',
    points: [],
  },
  {
    id: 'l3',
    title: 'Boîtes médicales intelligentes',
    meta: 'Projet académique · Licence 3 · ISPM',
    place: 'Électronique, systèmes informatiques et IA',
    summary: 'Projet de dispositifs médicaux connectés.',
    points: [],
  },
]

const timeline = [
  {
    date: '2026',
    title: 'Stagiaire en développement informatique',
    where: 'Point Com Technology Center',
    text: 'Conception et développement de SAGIT, application de gestion des tickets d’incidents.',
  },
  {
    date: '2025',
    title: 'Gestionnaire de données',
    where: 'INSPC',
    text: 'Enquête de couverture vaccinale : encadrement des enquêteurs et contrôle qualité des données.',
  },
  {
    date: '2025',
    title: 'Formations Orange Digital Center',
    where: 'Orange Digital Center Madagascar',
    text: 'Algorithmique, cybersécurité et automatisation avec IA.',
  },
  {
    date: 'En cours',
    title: 'Master 1, Électronique Système Informatique et IA',
    where: 'Institut Supérieur Polytechnique de Madagascar (ISPM)',
    text: 'Parcours ESIIA, de la Licence 1 au Master 1.',
  },
  {
    date: '2021',
    title: 'Baccalauréat série D',
    where: 'Lycée Privé Christ Roi, Ambatomainty, Antananarivo',
    text: '',
  },
]

/* Lignes de code affichées (et tapées) dans la fenêtre du hero */
const codeLines = [
  [['k', 'const '], ['v', 'mickael'], ['p', ' = {']],
  [['p', '  '], ['v', 'role'], ['p', ': '], ['s', "'Développeur logiciel polyvalent'"], ['p', ',']],
  [['p', '  '], ['v', 'niveau'], ['p', ': '], ['s', "'Master 1, ISPM'"], ['p', ',']],
  [['p', '  '], ['v', 'stack'], ['p', ': ['], ['s', "'React'"], ['p', ', '], ['s', "'Laravel'"], ['p', ', '], ['s', "'Django'"], ['p', ', '], ['s', "'Node.js'"], ['p', '],']],
  [['p', '  '], ['v', 'langues'], ['p', ': ['], ['s', "'Malagasy'"], ['p', ', '], ['s', "'Français'"], ['p', ', '], ['s', "'English'"], ['p', '],']],
  [['p', '  '], ['v', 'recherche'], ['p', ': '], ['s', "'une équipe internationale'"], ['p', ',']],
  [['p', '}']],
]
const codeTotal = codeLines.flat().reduce((n, [, t]) => n + t.length, 0)

/* ------------------------------------------------------------------ */
/* HOOKS                                                              */
/* ------------------------------------------------------------------ */

function useTyper(total, speed = 26, delay = 1100) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(total)
      return
    }
    let i = 0
    let id
    const start = setTimeout(() => {
      id = setInterval(() => {
        i += 1
        setN(i)
        if (i >= total) clearInterval(id)
      }, speed)
    }, delay)
    return () => {
      clearTimeout(start)
      clearInterval(id)
    }
  }, [total, speed, delay])
  return n
}

function useInView(threshold = 0.25) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, seen]
}

/* ------------------------------------------------------------------ */
/* COMPOSANTS                                                         */
/* ------------------------------------------------------------------ */

function CodeWindow() {
  const typed = useTyper(codeTotal)
  let remaining = typed
  const done = typed >= codeTotal

  return (
    <div className="code-window" aria-label="Profil résumé sous forme de code">
      <div className="code-bar">
        <span /><span /><span />
        <em>mickael.js</em>
      </div>
      <pre>
        <code>
          {codeLines.map((line, li) => (
            <div className="code-line" key={li}>
              {line.map(([cls, text], ti) => {
                const part = text.slice(0, Math.max(0, remaining))
                remaining -= text.length
                return (
                  <span className={`t-${cls}`} key={ti}>
                    {part}
                  </span>
                )
              })}
              {li === codeLines.length - 1 && <i className={`caret ${done ? 'blink' : ''}`} />}
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}

function Projects() {
  const [open, setOpen] = useState('sagit')
  return (
    <div className="projects">
      {projects.map((p) => {
        const isOpen = open === p.id
        return (
          <article className={`project ${isOpen ? 'is-open' : ''}`} key={p.id}>
            <button
              className="project-head"
              onClick={() => setOpen(isOpen ? null : p.id)}
              aria-expanded={isOpen}
              aria-controls={`panel-${p.id}`}
            >
              <span>
                <strong>{p.title}</strong>
                <small>{p.meta}</small>
              </span>
              <b className="plus" aria-hidden="true" />
            </button>
            <div className="project-panel" id={`panel-${p.id}`}>
              <div className="project-inner">
                <p className="project-place">{p.place}</p>
                <p>{p.summary}</p>
                {p.points.length > 0 && (
                  <ul>
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

function Skills() {
  const [active, setActive] = useState(skillGroups[0].id)
  const group = skillGroups.find((g) => g.id === active)
  return (
    <div className="skills-box">
      <div className="skill-tabs" role="tablist" aria-label="Catégories de compétences">
        {skillGroups.map((g) => (
          <button
            key={g.id}
            role="tab"
            aria-selected={g.id === active}
            className={g.id === active ? 'on' : ''}
            onClick={() => setActive(g.id)}
          >
            {g.label}
          </button>
        ))}
      </div>
      <div className="skill-panel" role="tabpanel" key={group.id}>
        <p>{group.note}</p>
        <ul>
          {group.items.map((item, i) => (
            <li key={item} style={{ '--i': i }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Timeline() {
  const [ref, seen] = useInView(0.15)
  return (
    <ol className={`timeline ${seen ? 'seen' : ''}`} ref={ref}>
      {timeline.map((t, i) => (
        <li key={t.title} style={{ '--i': i }}>
          <time>{t.date}</time>
          <div>
            <h3>{t.title}</h3>
            <p className="where">{t.where}</p>
            {t.text && <p>{t.text}</p>}
          </div>
        </li>
      ))}
    </ol>
  )
}

/* ------------------------------------------------------------------ */
/* VUE PORTFOLIO                                                      */
/* ------------------------------------------------------------------ */

function Portfolio() {
  return (
    <>
      <section className="hero" id="accueil">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-role">{identity.titre}</p>
            <h1>
              <span>{identity.prenom}</span>
              <span>{identity.nom}</span>
            </h1>
            <p className="hero-lead">
              J’ai conçu SAGIT, une application web de gestion des tickets d’incidents
              informatiques, et je construis des logiciels de la base de données à
              l’interface.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projets">Voir mes projets</a>
              <a className="btn btn-ghost" href={`mailto:${identity.email}`}>Me contacter</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hex">
              <img src={heroImg} alt={`Portrait de ${identity.prenom} ${identity.nom}`} />
            </div>
            <CodeWindow />
          </div>
        </div>
      </section>

      <section className="block" id="projets">
        <div className="wrap">
          <h2>Projets et missions</h2>
          <p className="block-intro">Clique sur un projet pour voir le détail.</p>
          <Projects />
        </div>
      </section>

      <section className="block block-alt" id="competences">
        <div className="wrap">
          <h2>Compétences</h2>
          <p className="block-intro">Choisis une catégorie.</p>
          <Skills />
        </div>
      </section>

      <section className="block" id="parcours">
        <div className="wrap">
          <h2>Parcours</h2>
          <Timeline />
          <div className="langs">
            <h3>Langues</h3>
            <ul>
              <li><strong>Malagasy</strong> langue maternelle</li>
              <li><strong>Français</strong> niveau courant</li>
              <li><strong>Anglais</strong> niveau débutant</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="block contact" id="contact">
        <div className="wrap">
          <h2>Travaillons ensemble</h2>
          <p className="block-intro">
            Je cherche à rejoindre une entreprise internationale sur des projets
            informatiques innovants.
          </p>
          <div className="contact-grid">
            <a href={`mailto:${identity.email}`}>
              <small>E-mail</small>
              {identity.email}
            </a>
            <a href={`tel:${identity.phoneHref}`}>
              <small>Téléphone</small>
              {identity.phone}
            </a>
            <div>
              <small>Adresse</small>
              {identity.adresse}
            </div>
            <div>
              <small>Facebook</small>
              {identity.facebook}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* VUE CV (imprimable)                                                */
/* ------------------------------------------------------------------ */

function CV() {
  return (
    <div className="cv-page">
      <div className="cv-toolbar">
        <p>Ton CV, prêt à imprimer ou à enregistrer en PDF.</p>
        <button className="btn btn-primary" onClick={() => window.print()}>
          Télécharger en PDF
        </button>
      </div>

      <div className="cv-sheet">
        <aside className="cv-side">
          <div className="hex hex-small">
            <img src={heroImg} alt={`Portrait de ${identity.prenom} ${identity.nom}`} />
          </div>

          <ul className="cv-facts">
            <li>Né le {identity.naissance}</li>
            <li>{identity.age}</li>
            <li>Nationalité {identity.nationalite}</li>
            <li>{identity.situation}</li>
          </ul>

          <h2>Contact</h2>
          <ul className="cv-contact">
            <li>{identity.phone}</li>
            <li>{identity.email}</li>
            <li>{identity.adresse}</li>
            <li>{identity.facebook}</li>
          </ul>

          <h2>Compétences</h2>
          {skillGroups.map((g) => (
            <div className="cv-skill" key={g.id}>
              <h3>{g.label}</h3>
              <p>{g.items.join(', ')}</p>
            </div>
          ))}
        </aside>

        <main className="cv-main">
          <h1>{identity.nomComplet}</h1>
          <p className="cv-title">{identity.titre}</p>

          <section>
            <h2>Objectif</h2>
            <p>{identity.objectif1}</p>
            <p>{identity.objectif2}</p>
          </section>

          <section>
            <h2>Éducation et formation</h2>
            <div className="cv-row">
              <div>
                <strong>Master 1, Électronique Système Informatique et IA (ESIIA)</strong>
                <span>Institut Supérieur Polytechnique de Madagascar (ISPM)</span>
              </div>
              <time>En cours</time>
            </div>
            <div className="cv-row">
              <div>
                <strong>Orange Digital Center Madagascar</strong>
                <span>Algorithmique, cybersécurité, automatisation avec IA</span>
              </div>
              <time>2025</time>
            </div>
            <div className="cv-row">
              <div>
                <strong>Baccalauréat série D</strong>
                <span>Lycée Privé Christ Roi, Ambatomainty, Antananarivo</span>
              </div>
              <time>2021</time>
            </div>
          </section>

          <section>
            <h2>Projets académiques à l’ISPM</h2>
            <ul>
              <li><strong>Licence 1 :</strong> mini-véhicule de nettoyage</li>
              <li><strong>Licence 2 :</strong> robotisation de l’agriculture</li>
              <li><strong>Licence 3 :</strong> boîtes médicales intelligentes</li>
            </ul>
          </section>

          <section>
            <h2>Expériences professionnelles</h2>
            <div className="cv-job">
              <strong>Stagiaire en développement informatique, Point Com Technology Center</strong>
              <span>Stage de Licence 3, du 25 mai au 25 août 2026</span>
              <ul>
                <li>Conception et développement de SAGIT, application web de gestion des tickets d’incidents informatiques.</li>
                <li>Fonctionnalités de signalement, d’affectation, de traitement et de suivi des tickets.</li>
                <li>Supervision des techniciens et surveillance du parc informatique.</li>
              </ul>
            </div>
            <div className="cv-job">
              <strong>Gestionnaire de données, INSPC</strong>
              <span>Enquête de couverture vaccinale, du 7 novembre au 22 décembre 2025</span>
              <ul>
                <li>Gestion et formation des enquêteurs, vérification des pièces justificatives.</li>
                <li>Collecte, analyse et contrôle de la qualité et de la complétude des données.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Langues</h2>
            <ul>
              <li>Malagasy : langue maternelle</li>
              <li>Français : niveau courant</li>
              <li>Anglais : niveau débutant</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* APP                                                                */
/* ------------------------------------------------------------------ */

function App() {
  const [view, setView] = useState('portfolio')

  const switchView = (v) => {
    setView(v)
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#accueil" onClick={() => switchView('portfolio')}>
          {identity.prenom} {identity.nom}
        </a>

        {view === 'portfolio' && (
          <nav className="topnav" aria-label="Sections">
            <a href="#projets">Projets</a>
            <a href="#competences">Compétences</a>
            <a href="#parcours">Parcours</a>
            <a href="#contact">Contact</a>
          </nav>
        )}
      </header>

      {view === 'portfolio' ? <Portfolio /> : <CV />}

      <footer className="footer">
        <p>{identity.prenom} {identity.nom}, {identity.titre.toLowerCase()}.</p>
      </footer>
    </div>
  )
}

export default App