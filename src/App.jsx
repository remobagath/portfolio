import React, { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, ArrowRight, Menu, X, Sun, Moon, MoveUpRight, Sparkles } from 'lucide-react';

const projects = [
  {
    number: '01', type: 'FINTECH · ENTERPRISE SAAS', title: 'Enterprise Banking Platform',
    description: 'Making complex banking operations feel clear, connected and effortless.',
    tags: ['Product strategy', 'Core banking', 'Design systems'], tone: 'banking', size: 'large',
    visual: 'banking', href: 'https://bagathsingh.lovable.app/case-studies/enterprise-banking-platform'
  },
  {
    number: '02', type: 'CYBERSECURITY · BIOMETRICS', title: 'Authenticator',
    description: 'A simpler, more human way to secure digital identity.',
    tags: ['Identity', 'Biometrics'], tone: 'auth', size: 'small', visual: 'auth',
    href: 'https://bagathsingh.lovable.app/'
  },
  {
    number: '03', type: 'AUTOMOTIVE · SAAS', title: 'Jusmoto',
    description: 'Bringing clarity to the everyday operations of automotive workshops.',
    tags: ['Workflow design', 'SaaS'], tone: 'jusmoto', size: 'small', visual: 'garage',
    href: 'https://bagathsingh.lovable.app/'
  },
  {
    number: '04', type: 'EXPERIENCE DESIGN · VR', title: 'VR Ticket Booking',
    description: 'Exploring a more immersive way to discover and book live experiences.',
    tags: ['Spatial UX', 'Prototyping'], tone: 'vr', size: 'wide', visual: 'stadium',
    href: 'https://bagathsingh.lovable.app/case-studies/vr-ticket-booking'
  }
];

function BankingVisual() {
  return <div className="bank-window">
    <div className="window-top"><span className="window-dots"><i/><i/><i/></span><span>ANB · Digital Banking Platform</span><span className="window-avatar">A</span></div>
    <div className="bank-body">
      <aside className="bank-sidebar"><b className="bank-mark">◈</b><span className="active">▦</span><span>◷</span><span>▤</span><span>⚙</span></aside>
      <div className="bank-content"><div className="bank-greeting"><div><small>MONDAY, 02 NOVEMBER</small><b>Good morning, Alex</b></div><span className="bank-pill">● All systems operational</span></div>
        <div className="bank-metrics"><div><small>Total transactions</small><b>24,891</b><em>↗ 12.8%</em></div><div><small>Pending approvals</small><b>1,204</b><em>↘ 4.2%</em></div><div><small>Success rate</small><b>98.6%</b><em>↗ 2.1%</em></div></div>
        <div className="bank-chart"><div className="chart-head"><b>Transaction overview</b><small>Last 7 days　⌄</small></div><div className="chart-bars">{[34,52,43,69,48,78,60,88,57,73,92,68,82,58,76,95,70,85,62,90].map((h,i)=><i key={i} style={{height:h+'%'}} />)}</div><div className="chart-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div>
      </div>
    </div>
  </div>;
}

function AuthVisual(){return <div className="auth-visual"><div className="phone"><div className="phone-camera"/><div className="phone-brand">◈ <span>v-key</span></div><div className="fingerprint">◎</div><b>Identity verified</b><small>Your identity is protected</small><div className="phone-line"/></div><div className="auth-orbit orbit-one"/><div className="auth-orbit orbit-two"/></div>}
function GarageVisual(){return <div className="garage-visual"><div className="garage-sun"/><div className="garage-road"/><div className="garage-car"><span/><i/><b/></div><div className="garage-label">WORKSHOP<br/>MANAGEMENT</div></div>}
function StadiumVisual(){return <div className="stadium-visual"><div className="stadium-glow"/><div className="stadium-roof"/><div className="stadium-bowl"><div className="stadium-lights"/><div className="stadium-field"/></div><div className="vr-chip">IMMERSIVE EXPERIENCE</div></div>}

function ProjectCard({project}) {
  const Visual = {banking:BankingVisual,auth:AuthVisual,garage:GarageVisual,stadium:StadiumVisual}[project.visual];
  return <a className={'project-card '+project.tone+' '+project.size} href={project.href} target="_blank" rel="noreferrer">
    <div className="project-visual"><Visual/><span className="project-open"><ArrowUpRight size={19}/></span></div>
    <div className="project-info"><div className="project-meta"><span>{project.number} / {project.type}</span><span className="project-arrow"><ArrowUpRight size={17}/></span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(t=><span key={t}>{t}</span>)}</div></div>
  </a>
}

export default function App(){
  const [dark,setDark]=useState(false);
  const [menu,setMenu]=useState(false);
  useEffect(()=>{document.documentElement.dataset.theme=dark?'dark':'light'},[dark]);
  useEffect(()=>{const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));return()=>io.disconnect()},[]);
  return <div className="site-shell">
    <div className="ambient ambient-a"/><div className="ambient ambient-b"/><div className="grain"/>
    <header className="site-header"><a className="brand" href="#home"><span className="brand-symbol">B.</span><span>Bagath Singh<small>PRODUCT DESIGNER</small></span></a>
      <button className="mobile-menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?<X/>:<Menu/>}</button>
      <nav className={menu?'nav-open':''}><a href="#work" onClick={()=>setMenu(false)}>Work</a><a href="#about" onClick={()=>setMenu(false)}>About</a><a href="#approach" onClick={()=>setMenu(false)}>Approach</a><a href="#contact" onClick={()=>setMenu(false)}>Contact</a></nav>
      <div className="header-actions"><button className="theme-toggle" onClick={()=>setDark(!dark)} aria-label="Toggle theme">{dark?<Sun size={16}/>:<Moon size={16}/>}</button><a className="contact-button" href="mailto:hello@bagathsingh.com">Let's talk <ArrowUpRight size={15}/></a></div>
    </header>
    <main id="home">
      <section className="hero">
        <div className="hero-copy reveal"><div className="availability"><span/> OPEN TO PRODUCT DESIGN OPPORTUNITIES</div><p className="eyebrow">HELLO, I'M BAGATH</p><h1>Designing complex products<br/><span>to feel beautifully simple.</span></h1><p className="hero-description">I'm a Senior Product Designer with 12 years of experience turning complex problems into clear, useful digital experiences across fintech, enterprise SaaS and emerging technology.</p><div className="hero-actions"><a className="primary-button" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="text-link" href="#about">A little about me <ArrowUpRight size={15}/></a></div></div>
        <div className="hero-art reveal"><div className="hero-art-orbit orbit-a"/><div className="hero-art-orbit orbit-b"/><div className="hero-note note-top"><Sparkles size={15}/> Thoughtful by design</div><div className="hero-monogram">B<span>.</span></div><div className="hero-note note-bottom">STRATEGY <i/> CRAFT <i/> IMPACT</div><div className="hero-art-caption">CURIOUS MIND. SYSTEMS THINKER.</div></div>
        <div className="hero-foot"><span>BASED IN CHENNAI, INDIA</span><span>SCROLL TO EXPLORE <ArrowDownRight size={14}/></span></div>
      </section>
      <section className="work-section" id="work"><div className="section-heading reveal"><div><p className="eyebrow">SELECTED WORK · 2022—2026</p><h2>Thoughtful work.<br/><span>Meaningful outcomes.</span></h2></div><p>A selection of products and experiences shaped through curiosity, collaboration and a healthy obsession with the details.</p></div>
        <div className="project-grid">{projects.map(p=><div className="reveal" key={p.number}><ProjectCard project={p}/></div>)}</div>
      </section>
      <section className="about-section" id="about"><div className="about-kicker reveal"><p className="eyebrow">A BIT ABOUT ME</p><span>01 — 03</span></div><div className="about-content reveal"><h2>I make the complicated<br/>feel <span>clear and human.</span></h2><div className="about-copy"><p>For 12 years, I've worked at the intersection of user needs, business goals and technology. I enjoy untangling complex workflows, finding the signal in the noise, and helping teams turn ambitious ideas into products people can actually use.</p><p>My experience spans fintech, digital banking, cybersecurity and SaaS—partnering closely with product managers and engineers from early discovery through delivery.</p><a href="mailto:hello@bagathsingh.com" className="text-link">Let's make something meaningful <ArrowUpRight size={15}/></a></div></div></section>
      <section className="approach-section" id="approach"><div className="section-heading reveal"><div><p className="eyebrow">HOW I THINK</p><h2>Good design is a<br/><span>team sport.</span></h2></div><p>Clarity comes from asking better questions, making ideas tangible and staying close to the people we're designing for.</p></div><div className="approach-grid">{[['01','Understand','Research, context and the real problem behind the brief.'],['02','Shape','Structure, journeys and clear interaction models.'],['03','Craft','Accessible interfaces and systems that scale.'],['04','Validate','Prototype, learn and refine with evidence.']].map(([n,t,d])=><div className="approach-item reveal" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></section>
      <section className="contact-section" id="contact"><div className="contact-orb"/><p className="eyebrow reveal">HAVE A GOOD CHALLENGE?</p><div className="contact-inner reveal"><h2>Let's make<br/><span>something matter.</span></h2><a href="mailto:hello@bagathsingh.com" className="contact-round"><ArrowUpRight size={30}/></a></div><div className="contact-bottom"><span>AVAILABLE FOR SELECT OPPORTUNITIES</span><a href="mailto:hello@bagathsingh.com">HELLO@BAGATHSINGH.COM</a></div></section>
    </main>
    <footer><a className="footer-brand" href="#home">B.</a><span>© 2026 BAGATH SINGH · DESIGNED WITH INTENTION</span><div><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN <MoveUpRight size={12}/></a><a href="#home">BACK TO TOP ↑</a></div></footer>
  </div>
}