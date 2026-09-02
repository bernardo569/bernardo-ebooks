import { Clock3, Facebook, Instagram, Phone } from "lucide-react";
import { Link } from "wouter";

export function SiteHeader({ minimal = false }: { minimal?: boolean }) {
  return (
    <>
      <div className="topline"><div className="container topline-inner"><span>Materiais práticos para negócios reais.</span><span className="topline-detail"><Clock3 size={14} /> Atendimento das 10h às 22h</span><a className="phone-toplink" href="tel:+244926251868"><Phone size={13} /> Ligar 926 251 868</a></div></div>
      <header className="site-header"><div className="container nav-inner">
        <Link href="/" className="brand-mark" aria-label="Bernardo Armando — início"><img className="brand-logo-img" src="./assets/bernardo-logo-transparent.png" alt="" /><span className="brand-name">Bernardo<br /><em>Armando</em></span></Link>
        {!minimal && <nav className="desktop-nav" aria-label="Navegação principal"><Link href="/catalogo">Catálogo <span>01</span></Link><Link href="/oferta">Oferta <span>02</span></Link><Link href="/pagamento">Pagamento <span>03</span></Link></nav>}
      </div></header>
    </>
  );
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-top"><Link href="/" className="brand-mark footer-brand"><img className="brand-logo-img" src="./assets/bernardo-logo-transparent.png" alt="" /><span className="brand-name">Bernardo<br /><em>Armando</em></span></Link><p>Ebooks de negócios<br />para quem quer crescer.</p><div className="footer-contact"><span>Segue / fala connosco</span><div><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={19} /></a><a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={19} /></a><a href="tel:+244926251868" aria-label="Telefone"><Phone size={18} /></a></div></div></div><div className="container footer-bottom"><span>© 2026 Bernardo Armando. Todos os direitos reservados.</span><span>Atendimento das 10h às 22h · Luanda, Angola</span></div></footer>;
}
