import { useEffect, useState } from 'react'
import { Button } from './components/Button'
import { business, whatsappLink, type Language } from './data/business'
import { cosmetics, massages } from './data/services'
import { translations } from './i18n'

function App() {
  const [language, setLanguage] = useState<Language>('de')
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [stickyVisible, setStickyVisible] = useState(false)
  const t = translations[language]
  const visibleMassages = showAll ? massages : massages.filter((item) => item.featured)
  const bookingLink = whatsappLink(language)

  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === 'de'
      ? 'Nipa Thaimassage & Kosmetik | Mannheim'
      : 'Nipa Thai Massage & Beauty | Mannheim'
  }, [language])

  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > window.innerHeight * 0.72)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="header">
        <a className="brand" href="#top" aria-label="Nipa Thaimassage & Kosmetik">
          <span className="brand__n">N</span>
          <span className="brand__text">Nipa<br /><small>Thaimassage & Kosmetik</small></span>
        </a>
        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label={t.common.navigation}>
          <a href="#massagen" onClick={closeMenu}>{t.nav.massages}</a>
          <a href="#nipa" onClick={closeMenu}>{t.nav.story}</a>
          <a href="#kosmetik" onClick={closeMenu}>{t.nav.cosmetics}</a>
          <a href="#kontakt" onClick={closeMenu}>{t.nav.contact}</a>
          <Button className="nav__booking" href={bookingLink} target="_blank" rel="noreferrer">{t.hero.book}</Button>
        </nav>
        <div className="header__tools">
          <div className="language" role="group" aria-label={t.common.language}>
            {(['de', 'en'] as Language[]).map((lang) => (
              <button key={lang} className={language === lang ? 'is-active' : ''} onClick={() => setLanguage(lang)} aria-pressed={language === lang}>
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <button className={`menu-button ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? t.nav.close : t.nav.menu}>
            <span /><span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero__grain" />
          <div className="hero__copy reveal">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1><span>{t.hero.line1}</span><em>{t.hero.line2}</em><span>{t.hero.line3}</span></h1>
            <p className="hero__intro">{t.hero.copy}</p>
            <div className="hero__actions">
              <Button href={bookingLink} target="_blank" rel="noreferrer">{t.hero.book}</Button>
              <a className="text-link" href="#massagen">{t.hero.discover}<span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__halo" />
            <div className="hero__image-wrap">
              <img src="/images/nipa-herbal-compress.jpg" alt="" fetchPriority="high" />
            </div>
            <div className="orbit orbit--one" /><div className="orbit orbit--two" />
          </div>
          <div className="hero__location"><span />{t.hero.location}</div>
          <div className="hero__index" aria-hidden="true">01</div>
        </section>

        <section className="section massages" id="massagen">
          <div className="section__head">
            <p className="eyebrow">{t.massages.eyebrow}</p>
            <h2>{t.massages.title}</h2>
            <p>{t.massages.intro}</p>
          </div>
          <div className="treatment-list">
            {visibleMassages.map((item, index) => (
              <article className="treatment" key={item.id}>
                <span className="treatment__number">{String(index + 1).padStart(2, '0')}</span>
                <div className="treatment__main">
                  <h3>{item.name[language]}</h3>
                  <p>{item.detail[language]}</p>
                </div>
                <div className="treatment__prices">
                  {item.prices.map((price) => <span key={price}>{price}</span>)}
                </div>
              </article>
            ))}
          </div>
          <button className="list-toggle" onClick={() => setShowAll(!showAll)} aria-expanded={showAll}>
            <span>{showAll ? t.massages.less : t.massages.all}</span><span aria-hidden="true">{showAll ? '−' : '+'}</span>
          </button>
        </section>

        <section className="story" id="nipa">
          <div className="story__years" aria-hidden="true"><span>1996</span><i /><span>2013</span></div>
          <div className="story__title">
            <p className="eyebrow">{t.story.eyebrow}</p>
            <h2>{t.story.title1}<br /><em>{t.story.title2}</em></h2>
          </div>
          <div className="story__body">
            <p>{t.story.p1}</p>
            <p>{t.story.p2}</p>
            <blockquote>{t.story.quote}</blockquote>
          </div>
          <div className="story__stamp"><strong>2013</strong><span>{t.story.year}</span></div>
        </section>

        <section className="signature">
          <div className="signature__image">
            <img src="/images/nipa-herbal-compress.jpg" alt={t.signature.imageAlt} loading="lazy" />
          </div>
          <div className="signature__content">
            <p className="eyebrow">{t.signature.eyebrow}</p>
            <h2>{t.signature.title1}<br /><em>{t.signature.title2}</em></h2>
            <p>{t.signature.copy}</p>
            <div className="signature__meta"><span>{t.signature.duration}</span><span>{t.signature.price}</span></div>
            <Button href={bookingLink} target="_blank" rel="noreferrer" variant="outline">{t.hero.book}</Button>
          </div>
        </section>

        <section className="section cosmetics" id="kosmetik">
          <div className="section__head section__head--row">
            <div><p className="eyebrow">{t.cosmetics.eyebrow}</p><h2>{t.cosmetics.title}</h2></div>
            <p>{t.cosmetics.copy}</p>
          </div>
          <div className="cosmetics__grid">
            {cosmetics.map((item, index) => (
              <article className="cosmetic" key={item.id}>
                <span>0{index + 1}</span>
                <h3>{item.name[language]}</h3>
                <p>{item.detail[language]}</p>
                <strong>{item.prices[0]}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="trust">
          <p className="eyebrow">{t.trust.eyebrow}</p>
          <blockquote>{t.trust.quote}</blockquote>
          <div className="trust__author"><span>{t.trust.author}</span><small>{t.trust.note}</small></div>
        </section>

        <section className="contact" id="kontakt">
          <div className="contact__top">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>{t.contact.title1}<br /><em>{t.contact.title2}</em></h2>
            <Button href={bookingLink} target="_blank" rel="noreferrer">{t.contact.book}</Button>
          </div>
          <div className="contact__details">
            <div><span>{t.contact.address}</span><strong>{business.address}<br />{business.city}</strong><a href={business.maps} target="_blank" rel="noreferrer">{t.contact.route}</a></div>
            <div><span>{t.contact.hours}</span><strong>{t.contact.hoursValue}<br />{business.hours}</strong></div>
            <div><span>{t.contact.phone}</span><a href={business.phoneHref}>{business.phoneDisplay}</a><span className="contact__sub">{t.contact.whatsapp}</span><a href={bookingLink} target="_blank" rel="noreferrer">{business.whatsappDisplay}</a></div>
          </div>
          <p className="contact__note">{t.contact.note}</p>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__brand"><span>N</span><strong>Nipa</strong></div>
        <p>© {new Date().getFullYear()} {t.footer.rights}</p>
        <p className="footer__legal">{t.footer.legal}</p>
        <a href="#top">{t.footer.top} ↑</a>
      </footer>

      <a className={`sticky-booking ${stickyVisible ? 'is-visible' : ''}`} href={bookingLink} target="_blank" rel="noreferrer">
        <span className="sticky-booking__dot" />{t.hero.book}<span aria-hidden="true">↗</span>
      </a>
    </>
  )
}

export default App
