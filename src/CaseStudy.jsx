import React from 'react';
import { ArrowLeft, ArrowUpRight, ArrowDown, CheckCircle2, Layers3, Target, Users, Workflow, ShieldCheck } from 'lucide-react';

const studies = {
  banking: {
    number:'01', category:'FINTECH · ENTERPRISE SAAS', title:'Enterprise Banking Platform',
    subtitle:'Making complex banking operations feel clear, connected and effortless.',
    role:'Senior UX/UI Designer', domain:'Digital banking · Core banking', focus:'Product UX · IA · Design systems',
    intro:'A connected digital banking experience designed to simplify high-value workflows for banking customers and operations teams.',
    context:'Enterprise banking platforms often carry years of accumulated complexity: fragmented journeys, dense information, inconsistent patterns and workflows that ask users to move between too many places to complete a task.',
    challenge:'Create a more coherent experience across core banking journeys while keeping the depth, control and reliability expected from a financial platform.',
    approach:[['Understand the workflow','Map existing journeys, identify friction and clarify the different user needs across the platform.'],['Simplify the structure','Improve information architecture and make related actions, information and states easier to discover.'],['Create a consistent system','Unify interaction patterns and visual components so modules feel connected and can scale.'],['Refine the experience','Improve clarity, accessibility and feedback across important payment and account workflows.']],
    decisions:[['Clearer payment journeys','Reduce unnecessary steps and make the next action and transaction state easier to understand.'],['More useful information hierarchy','Prioritise the information people need to make decisions, with progressive disclosure for secondary detail.'],['Reusable design language','Establish consistent components and patterns across modules rather than solving each screen in isolation.']],
    outcome:'A more cohesive UX direction for the platform, with simplified payment journeys, clearer information architecture and a scalable UI foundation. Quantitative impact is not stated here because verified measurement data has not been supplied.',
    caveat:'This case study describes design contributions and direction. No unverified performance metrics or research outcomes are claimed.'
  },
  authenticator: {
    number:'02', category:'CYBERSECURITY · DIGITAL IDENTITY', title:'V-Key ID & V-Key OS',
    subtitle:'Making secure digital identity feel simple, trusted and human.',
    role:'Product Designer', domain:'Cybersecurity · Biometrics', focus:'Mobile authentication · SaaS dashboard',
    intro:'A connected identity experience spanning biometric authentication and the management tools that support secure digital identity.',
    context:'Authentication is a critical moment in a digital journey. It needs to feel fast and understandable for the person signing in, while giving institutions the controls and visibility required to manage identity securely.',
    challenge:'Design clear, dependable experiences across a user-facing biometric identity product and an enterprise SaaS dashboard.',
    approach:[['Understand both sides','Consider the needs of the person authenticating and the teams managing identity services.'],['Make security legible','Use clear states, feedback and language so people understand what is happening during authentication.'],['Organise operational tools','Structure dashboard information and controls to support scanning, monitoring and administration.'],['Align the ecosystem','Create consistent patterns across the mobile identity experience and SaaS product.']],
    decisions:[['Clarity at critical moments','Keep authentication states and next steps understandable, especially when a user needs to retry or recover.'],['Operational visibility','Present dashboard information in a structured way that supports oversight and management.'],['Consistency across surfaces','Connect the product experience and management experience through a coherent interaction language.']],
    outcome:'A design contribution across V-Key ID (biometric identity) and V-Key OS (SaaS dashboard) for banking contexts. Specific security, adoption or conversion metrics are not claimed without verified data.',
    caveat:'The case study focuses on product design decisions. Security efficacy and business outcomes require separate validated evidence.'
  },
  jusmoto: {
    number:'03', category:'AUTOMOTIVE · SAAS', title:'Jusmoto',
    subtitle:'Bringing clarity to the everyday operations of automotive workshops.',
    role:'Product Design · Case study in progress', domain:'Automotive · Workshop management', focus:'Discovery · Workflow design · SaaS',
    intro:'An automotive SaaS concept focused on helping workshops bring their everyday work into a clearer, more connected operating experience.',
    context:'Workshop operations involve multiple moving parts: customer requests, vehicle details, job progress, service coordination and business administration. When these activities are disconnected, it becomes harder to see what needs attention.',
    challenge:'Shape a coherent product experience around workshop workflows, with a foundation that can grow as the product and its operational needs evolve.',
    approach:[['Frame the problem','Organise the key workshop jobs, roles and information that a management platform needs to support.'],['Map core workflows','Explore how work moves from intake through service activity and completion.'],['Establish product structure','Define a scalable information architecture and reusable interface patterns.'],['Plan validation','Identify the assumptions and workflows that need testing with real workshop users.']],
    decisions:[['Workflow-first structure','Organise the experience around the work people need to complete, not just a collection of modules.'],['Progress visibility','Make status and next steps easier to scan across ongoing jobs.'],['Scalable foundations','Create patterns that can support additional workshop capabilities over time.']],
    outcome:'The project is in progress. This page documents the product direction and design framework; it does not claim a launched product, validated user outcomes or measured business impact.',
    caveat:'Pre-launch / in progress. Research findings, validation results and product performance will be added only when they are available and verified.'
  },
  vr: {
    number:'04', category:'EXPERIENCE DESIGN · SPATIAL UX', title:'VR Ticket Booking',
    subtitle:'Exploring a more immersive way to discover and book live experiences.',
    role:'Product Designer', domain:'Ticketing · Virtual reality', focus:'Experience architecture · IA · Prototyping',
    intro:'An exploration of how spatial interfaces could help people understand a venue and make more confident ticket choices before an event.',
    context:'Traditional ticket selection can make it difficult to understand the relationship between a seat, the venue and the actual viewing experience. A spatial preview offers an opportunity to make that decision more tangible.',
    challenge:'Design an intuitive journey that connects event discovery, venue exploration, seat understanding and ticket selection without overwhelming the user.',
    approach:[['Understand the decision','Identify what people need to know before choosing a ticket, including venue layout and viewing perspective.'],['Structure the experience','Connect discovery, stadium exploration and seat selection in a clear end-to-end journey.'],['Explore spatial interaction','Use immersive venue views to help people orient themselves and understand the environment.'],['Prototype the concept','Make the proposed interactions tangible and explore the feasibility of a WebXR experience.']],
    decisions:[['Venue-first exploration','Give users a way to understand the stadium before committing to a seat.'],['Progressive journey','Introduce spatial detail when it helps the decision, rather than presenting everything at once.'],['Contextual seat choice','Connect seat selection to a meaningful view of the venue and event environment.']],
    outcome:'A concept and experience architecture exploring immersive stadium discovery and ticket selection. No live booking integration or commercial performance is claimed.',
    caveat:'This is a design exploration/prototype case study. Any prototype capability should be distinguished from a production ticketing service.'
  }
};

function Section({icon:Icon,title,children}){return <section className="cs-section"><div className="cs-section-title"><Icon size={17}/><h2>{title}</h2></div>{children}</section>}
export default function CaseStudy({id,onBack}) {
  const s=studies[id] || studies.banking;
  return <main id="main-content" className="case-study">
    <div className="cs-top"><button onClick={onBack} className="cs-back"><ArrowLeft size={15}/> Back to all work</button><span>{s.number} / SELECTED WORK</span></div>
    <header className="cs-hero"><p className="eyebrow">{s.category}</p><h1>{s.title}</h1><p className="cs-subtitle">{s.subtitle}</p><div className="cs-meta"><div><small>ROLE</small><b>{s.role}</b></div><div><small>DOMAIN</small><b>{s.domain}</b></div><div><small>FOCUS</small><b>{s.focus}</b></div></div></header>
    <div className={'cs-cover cs-cover-'+id}><div className="cs-cover-mark">{id==='banking'?'◈':id==='authenticator'?'◎':id==='jusmoto'?'J.':'360°'}</div><div className="cs-cover-caption">PRODUCT EXPERIENCE / {s.number}</div></div>
    <div className="cs-body"><aside className="cs-toc"><span>ON THIS PAGE</span><a href="#overview">Overview</a><a href="#challenge">The challenge</a><a href="#approach">Approach</a><a href="#decisions">Design decisions</a><a href="#outcome">Outcome</a></aside><article>
      <div id="overview"><p className="cs-lead">{s.intro}</p><p>{s.context}</p></div>
      <div id="challenge"><Section icon={Target} title="The challenge"><p>{s.challenge}</p></Section></div>
      <div id="approach"><Section icon={Workflow} title="How I approached it"><div className="cs-steps">{s.approach.map(([t,d],i)=><div className="cs-step" key={t}><span>0{i+1}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></Section></div>
      <div id="decisions"><Section icon={Layers3} title="Key design decisions"><div className="cs-decisions">{s.decisions.map(([t,d])=><div key={t}><CheckCircle2 size={16}/><h3>{t}</h3><p>{d}</p></div>)}</div></Section></div>
      <div id="outcome"><Section icon={ShieldCheck} title="Outcome & reflection"><p>{s.outcome}</p><div className="cs-note">{s.caveat}</div></Section></div>
      <a className="cs-next" href="#home" onClick={onBack}><span>BACK TO SELECTED WORK</span><ArrowDown size={16}/></a>
    </article></div>
  </main>
}