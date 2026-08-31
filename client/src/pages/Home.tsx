import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Copy,
  Facebook,
  Instagram,
  LockKeyhole,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smartphone,
  Star,
  WalletCards,
} from "lucide-react";

const coverImages = {
  errors: "/manus-storage/ebook-erros_a609d80b.jpg",
  communication: "/manus-storage/ebook-comunicacao_7e12409f.jpg",
  marketing: "/manus-storage/ebook-marketing_4a59f0ed.jpg",
};

const ebooks = [
  {
    number: "01",
    title: "Os 30 Erros que Fecham Empresas",
    keywords: ["Erros de gestão", "Falência", "Sobrevivência do negócio"],
    description: "Para quem não quer repetir os erros que já fecharam centenas de empresas.",
    image: coverImages.errors,
    accent: "red",
  },
  {
    number: "02",
    title: "Comunicação que Conecta",
    keywords: ["Relacionamento", "Persuasão", "Dia a dia"],
    description: "Para quem quer ser levado a sério em reuniões, mensagens e conversas de trabalho.",
    image: coverImages.communication,
    accent: "yellow",
  },
  {
    number: "03",
    title: "Estratégias de Marketing Digital que Geram Vendas Todos os Dias",
    keywords: ["Marketing digital", "Redes sociais", "Vendas online"],
    description: "Para quem quer vender todos os dias usando o telemóvel e as redes sociais.",
    image: coverImages.marketing,
    accent: "green",
  },
];

const paymentValues = {
  multicaixa: ["+244 940 357 219", "000600004765678130148"],
  paypay: ["AO06 0420 0000 0000 0740 3616 9", "926 251 868"],
};

export default function Home() {
  const [copied, setCopied] = useState("");
  const [selectedMethod, setSelectedMethod] = useState<"multicaixa" | "paypay">("multicaixa");

  const copyValue = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      window.setTimeout(() => setCopied(""), 1800);
    } catch {
      setCopied("");
    }
  };

  return (
    <div className="site-shell">
      <div className="topline">
        <div className="container topline-inner">
          <span>Materiais práticos para negócios reais.</span>
          <span className="topline-detail"><Clock3 size={14} /> Atendimento das 10h às 22h</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-inner">
          <a href="#inicio" className="brand-mark" aria-label="Bernardo Armando — início">
            <span className="brand-monogram">BA</span>
            <span className="brand-name">Bernardo<br /><em>Armando</em></span>
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#catalogo">Catálogo <span>01</span></a>
            <a href="#oferta">Oferta <span>02</span></a>
            <a href="#pagamento">Pagamento <span>03</span></a>
          </nav>
          <a className="nav-cta" href="#oferta">Ver o pacote <ArrowRight size={16} /></a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-grid-pattern" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow light-eyebrow"><span className="eyebrow-dot" /> Biblioteca de negócio · 2026</div>
              <h1>Menos tentativa.<br /><span>Mais direção.</span></h1>
              <p className="hero-lead">Ebooks que ajudam o teu negócio a crescer.</p>
              <p className="hero-description">Materiais práticos escritos por Bernardo Armando. Escolhe o teu, paga e recebe em minutos.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#catalogo">Quero o meu guia <ArrowRight size={18} /></a>
                <a className="text-link light-link" href="#oferta">Conhecer a oferta <ChevronRight size={17} /></a>
              </div>
              <div className="hero-trust">
                <div className="avatar-stack" aria-hidden="true"><span>BA</span><span>✓</span><span>+</span></div>
                <div><strong>Leitura rápida, aplicação imediata.</strong><small>Entrega digital em PDF, direto no teu telemóvel.</small></div>
              </div>
            </div>

            <div className="hero-art" aria-label="Capas dos três ebooks">
              <div className="art-sun" aria-hidden="true" />
              <div className="art-note art-note-top">3 guias<br /><strong>1 pacote</strong></div>
              <div className="art-note art-note-bottom">para quem<br /><strong>faz acontecer</strong></div>
              <div className="cover cover-back"><img src={coverImages.communication} alt="Capa Comunicação que Conecta" /></div>
              <div className="cover cover-middle"><img src={coverImages.marketing} alt="Capa Estratégias de Marketing Digital que Geram Vendas Todos os Dias" /></div>
              <div className="cover cover-front"><img src={coverImages.errors} alt="Capa Os 30 Erros que Fecham Empresas" /></div>
              <span className="hero-stamp"><span>PDF</span><small>acesso<br />simples</small></span>
            </div>
          </div>
          <a className="scroll-cue" href="#catalogo"><ArrowDown size={16} /> <span>Explorar catálogo</span></a>
        </section>

        <section className="proof-strip" aria-label="Vantagens dos ebooks">
          <div className="container proof-grid">
            <div><strong>03</strong><span>guias práticos</span></div>
            <div><strong>PDF</strong><span>no teu telemóvel</span></div>
            <div><strong>01</strong><span>pagamento único</span></div>
            <div><strong>10—22h</strong><span>atendimento diário</span></div>
          </div>
        </section>

        <section id="catalogo" className="catalog-section section-pad">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <div className="eyebrow"><span className="eyebrow-dot" /> Página 01 · Catálogo</div>
                <h2>Escolhe o guia<br /><em>certo para agora.</em></h2>
              </div>
              <p>Três leituras objetivas para os momentos que mais exigem clareza: gerir melhor, comunicar com impacto e vender com consistência.</p>
            </div>
            <div className="ebook-grid">
              {ebooks.map((ebook) => (
                <article className={`ebook-card accent-${ebook.accent}`} key={ebook.title}>
                  <div className="ebook-image-wrap">
                    <img src={ebook.image} alt={`Capa do ebook ${ebook.title}`} />
                    <span className="ebook-number">{ebook.number}</span>
                  </div>
                  <div className="ebook-card-body">
                    <div className="keyword-row">{ebook.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div>
                    <h3>{ebook.title}</h3>
                    <p>{ebook.description}</p>
                    <a className="card-link" href="#oferta">Quero este guia <ArrowRight size={16} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="oferta" className="offer-section section-pad">
          <div className="container offer-layout">
            <div className="offer-copy">
              <div className="eyebrow light-eyebrow"><span className="eyebrow-dot" /> Página 02 · Oferta</div>
              <div className="limited-badge"><Clock3 size={16} /> Oferta por tempo limitado</div>
              <h2>Os 3 guias,<br /><em>num único pacote.</em></h2>
              <p>Os 30 Erros que Fecham Empresas, Comunicação que Conecta e Estratégias de Marketing Digital que Geram Vendas Todos os Dias — tudo o que precisas para não errar, comunicar melhor e vender mais.</p>
              <div className="offer-quote"><span>“</span><p>Conhecimento que sai do papel e entra no teu dia a dia.</p></div>
            </div>
            <div className="offer-card">
              <div className="offer-card-top"><span>O pacote completo</span><span className="offer-card-mark">BA</span></div>
              <div className="mini-covers">
                <img src={coverImages.errors} alt="" />
                <img src={coverImages.communication} alt="" />
                <img src={coverImages.marketing} alt="" />
              </div>
              <h3>Inclui os 3 ebooks</h3>
              <ul className="included-list">
                <li><CheckCircle2 size={18} /> Ebook Os 30 Erros que Fecham Empresas</li>
                <li><CheckCircle2 size={18} /> Ebook Comunicação que Conecta</li>
                <li><CheckCircle2 size={18} /> Ebook Estratégias de Marketing Digital que Geram Vendas Todos os Dias</li>
                <li><CheckCircle2 size={18} /> Entrega em PDF, direto no teu telemóvel</li>
              </ul>
              <div className="price-row"><div><span>Pagamento único · os 3 ebooks</span><strong>5.300 <small>Kz</small></strong></div><div className="rating"><span>★★★★★</span><small>4.9 de 5</small></div></div>
              <a className="button button-accent" href="#pagamento">Pagar agora <ArrowRight size={18} /></a>
              <p className="offer-footnote"><ShieldCheck size={14} /> Compra simples, sem subscrição.</p>
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="container testimonials-layout">
            <div className="rating-lockup"><div className="stars">★★★★★</div><strong>4.9<span>/5</span></strong><p>Avaliado por quem<br />já comprou</p></div>
            <div className="testimonial"><span className="quote-mark">“</span><p>Depois de ler os 30 erros, mudei logo 3 coisas na minha empresa.</p><small>— Cliente verificado</small></div>
            <div className="testimonial"><span className="quote-mark">“</span><p>O ebook de marketing digital ensinou-me a vender pelo Instagram sem gastar em anúncios.</p><small>— Cliente verificado</small></div>
          </div>
        </section>

        <section id="pagamento" className="payment-section section-pad">
          <div className="container payment-layout">
            <div className="payment-intro">
              <div className="eyebrow"><span className="eyebrow-dot" /> Página 03 · Pagamento</div>
              <h2>Finaliza o teu<br /><em>pagamento.</em></h2>
              <p>Escolhe uma das formas abaixo e paga <strong>5.300 Kz</strong> pelos 3 ebooks.</p>
              <div className="secure-line"><span className="secure-icon"><LockKeyhole size={17} /></span><span><strong>Pagamento 100% seguro</strong><small>Os teus dados ficam protegidos.</small></span></div>
              <div className="payment-help"><MessageCircle size={20} /><span>Precisas de ajuda?<br /><a href="https://wa.me/244926251868" target="_blank" rel="noreferrer">Fala connosco no WhatsApp</a></span></div>
            </div>
            <div className="payment-panel">
              <div className="method-tabs" role="tablist" aria-label="Formas de pagamento">
                <button className={selectedMethod === "multicaixa" ? "method-tab active" : "method-tab"} onClick={() => setSelectedMethod("multicaixa")} role="tab" aria-selected={selectedMethod === "multicaixa"}><span className="method-icon mc">M</span><span>Multicaixa<br /><small>Express</small></span></button>
                <button className={selectedMethod === "paypay" ? "method-tab active" : "method-tab"} onClick={() => setSelectedMethod("paypay")} role="tab" aria-selected={selectedMethod === "paypay"}><span className="method-icon pp">P</span><span>PayPay<br /><small>Transferência</small></span></button>
              </div>
              {selectedMethod === "multicaixa" ? (
                <div className="method-content" role="tabpanel">
                  <div className="method-heading"><div><span>Multicaixa Express</span><h3>Transfere pelo teu telemóvel.</h3></div><Smartphone size={28} /></div>
                  <div className="detail-list"><div><span>Número</span><strong>{paymentValues.multicaixa[0]}</strong><button onClick={() => copyValue(paymentValues.multicaixa[0])} aria-label="Copiar número Multicaixa"><Copy size={15} />{copied === paymentValues.multicaixa[0] ? "Copiado" : "Copiar"}</button></div><div><span>Conta</span><strong>{paymentValues.multicaixa[1]}</strong><button onClick={() => copyValue(paymentValues.multicaixa[1])} aria-label="Copiar conta Multicaixa"><Copy size={15} />{copied === paymentValues.multicaixa[1] ? "Copiado" : "Copiar"}</button></div><div><span>Titular</span><strong>Fernando Valente Armando</strong></div></div>
                </div>
              ) : (
                <div className="method-content" role="tabpanel">
                  <div className="method-heading"><div><span>PayPay</span><h3>Envia a transferência com segurança.</h3></div><WalletCards size={28} /></div>
                  <div className="detail-list"><div><span>IBAN</span><strong>{paymentValues.paypay[0]}</strong><button onClick={() => copyValue(paymentValues.paypay[0])} aria-label="Copiar IBAN PayPay"><Copy size={15} />{copied === paymentValues.paypay[0] ? "Copiado" : "Copiar"}</button></div><div><span>Número</span><strong>{paymentValues.paypay[1]}</strong><button onClick={() => copyValue(paymentValues.paypay[1])} aria-label="Copiar número PayPay"><Copy size={15} />{copied === paymentValues.paypay[1] ? "Copiado" : "Copiar"}</button></div></div>
                </div>
              )}
              <div className="whatsapp-box"><div className="whatsapp-icon"><MessageCircle size={21} /></div><div><strong>Já pagaste?</strong><p>Envia o comprovativo pelo WhatsApp para receberes os teus ebooks.</p></div><a className="whatsapp-button" href="https://wa.me/244926251868?text=Olá%20Bernardo%2C%20já%20efetuei%20o%20pagamento%20dos%20ebooks.%20Segue%20o%20comprovativo." target="_blank" rel="noreferrer">Enviar comprovativo <ArrowRight size={16} /></a></div>
              <div className="waiting-note"><Clock3 size={16} /><span>Depois de enviares o comprovativo, aguarda até 15 minutos para receberes os teus ebooks.</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top"><a href="#inicio" className="brand-mark footer-brand"><span className="brand-monogram">BA</span><span className="brand-name">Bernardo<br /><em>Armando</em></span></a><p>Ebooks de negócios<br />para quem quer crescer.</p><div className="footer-contact"><span>Segue / fala connosco</span><div><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={19} /></a><a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={19} /></a><a href="tel:+244926251868" aria-label="Telefone"><Phone size={18} /></a></div></div></div>
        <div className="container footer-bottom"><span>© 2026 Bernardo Armando. Todos os direitos reservados.</span><span>Atendimento das 10h às 22h · Luanda, Angola</span></div>
      </footer>
    </div>
  );
}
