import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { PageLabel, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { ebooks } from "@/lib/ebookData";

export default function Catalog() {
  return <div className="site-shell page-shell"><SiteHeader /><main className="page-main catalog-section section-pad"><div className="container"><div className="section-heading split-heading"><div><PageLabel number="01" name="Catálogo" /><h1>Escolhe o guia<br /><em>certo para agora.</em></h1></div><p>Três leituras objetivas para os momentos que mais exigem clareza: gerir melhor, comunicar com impacto e vender com consistência.</p></div><div className="ebook-grid">{ebooks.map((ebook) => <article className={`ebook-card accent-${ebook.accent}`} key={ebook.title}><div className="ebook-image-wrap"><img src={ebook.image} alt={`Capa do ebook ${ebook.title}`} /><span className="ebook-number">{ebook.number}</span></div><div className="ebook-card-body"><div className="keyword-row">{ebook.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div><h2>{ebook.title}</h2><p>{ebook.description}</p><Link className="card-link" href="/oferta">Adicionar ao pacote <ArrowRight size={16} /></Link></div></article>)}</div><div className="catalog-next"><div><CheckCircle2 size={18} /><span>Queres os três?<strong>Vê a oferta especial em pacote.</strong></span></div><Link className="button button-accent" href="/oferta">Ver os 3 guias <ArrowRight size={17} /></Link></div></div></main><SiteFooter /></div>;
}
