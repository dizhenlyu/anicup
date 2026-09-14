import { en } from "@/messages/en";
import Link from "next/link";
import { fixtureCandidates } from "../../tests/fixtures/candidates";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">{en.skip}</a>
      <div className="page-shell">
        <header className="flex items-center justify-between gap-4 py-7">
          <Link className="brand" href="/" aria-label={en.brand}><span className="brand-mark" aria-hidden="true">A</span>{en.brand}<span className="brand-dot" aria-hidden="true">.</span></Link>
          <span className="preview-badge"><span aria-hidden="true" />{en.preview}</span>
        </header>
        <main id="main">
          <section className="hero" aria-labelledby="hero-heading">
            <div className="hero-copy">
              <p className="eyebrow">{en.eyebrow}</p>
              <h1 id="hero-heading">{en.heading}<br /><span>{en.headingAccent}</span></h1>
              <p className="intro">{en.intro}</p>
              <p className="category">{en.category}</p>
              <p className="premise">{en.premise}<br />{en.guest}</p>
              <a className="primary-link" href="#fixture-field">{en.browse}<span aria-hidden="true">↗</span></a>
              <p className="hint">{en.browseHint}</p>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" />
              <div className="star star-one">✦</div><div className="star star-two">✦</div>
              <div className="ticket ticket-back"><span>ANICUP / 02</span><strong>{fixtureCandidates[10].title}</strong><i>02</i></div>
              <div className="ticket ticket-front"><span>ANICUP / 01</span><div className="trophy">✦</div><strong>{fixtureCandidates[0].title}</strong><i>01</i></div>
              <span className="art-caption">32 → 16 → 1</span>
            </div>
          </section>
          <section className="steps" aria-label={en.stepsLabel}>
            {en.steps.map((step) => <article key={step.number}><span className="step-number">{step.number}</span><h2>{step.title}</h2><p>{step.description}</p></article>)}
          </section>
          <p className="limits">{en.limits}</p>
          <section id="fixture-field" className="field" aria-labelledby="field-heading">
            <p className="eyebrow">{en.fieldEyebrow}</p>
            <h2 id="field-heading">{en.fieldTitle}<span className="field-count">{fixtureCandidates.length}</span></h2>
            <p className="field-description">{en.fieldDescription}</p>
            <ul className="fixture-grid">
              {fixtureCandidates.map((entry, index) => <li key={entry.id}><span className="entry-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><h3>{entry.title}</h3><p>{en.fixtureLabel}</p></div></li>)}
            </ul>
          </section>
        </main>
        <footer className="flex flex-wrap items-center justify-between gap-4 py-8"><span>{en.footer}</span><a href={en.sourceUrl}>{en.sourceLabel}<span aria-hidden="true"> ↗</span></a></footer>
      </div>
    </>
  );
}
