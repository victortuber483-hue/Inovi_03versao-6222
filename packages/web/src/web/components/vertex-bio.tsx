import { KineticText } from "./kinetic-text";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Instagram, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useScrollReveal } from "../hooks/use-scroll-reveal";

const whatsapp = "https://wa.me/5583998247412?text=" + encodeURIComponent("Olá! Gostaria de conhecer as soluções em próteses dentárias da INOVI.");

export function VertexBio() {
  const [about, setAbout] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const section = useRef<HTMLElement>(null);
  useScrollReveal(section);
  useEffect(() => {
    if (about) dialog.current?.showModal();
    else dialog.current?.close();
  }, [about]);
  return (
    <section ref={section} id="contatos" className="vertex-bio inovi-silver-section" aria-label="Cards de contato">
      <div className="bio-grid" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
      <div className="bio-column">
        <div className="bio-links">
          <div className="bio-card-reveal" data-scroll-reveal="slide-left"><a className="bio-link-card" href={whatsapp} target="_blank" rel="noopener noreferrer"><span className="bio-icon"><FaWhatsapp /></span><div><h3>WhatsApp</h3><p>Entre em contato para<br />orçamentos e dúvidas.</p><span className="bio-link-label">Clique para acessar</span></div></a></div>
          <div className="bio-card-reveal" data-scroll-reveal="slide-right"><a className="bio-link-card" href="https://www.instagram.com/vfsites/" target="_blank" rel="noopener noreferrer"><span className="bio-icon"><Instagram strokeWidth={1.8} /></span><div><h3>Instagram</h3><p>Explore nosso universo<br />de design e criação.</p><span className="bio-link-label">Clique para acessar</span></div></a></div>
          <div className="bio-card-reveal" data-scroll-reveal="slide-left"><button className="bio-link-card" onClick={() => setAbout(true)}><span className="bio-icon bio-tooth-icon" aria-hidden="true"><img src="/media/inovi-tooth-emblem.png" alt="" /></span><div><h3>Sobre Nós</h3><p>Conheça o que criamos<br />para elevar sua marca.</p><span className="bio-link-label">Clique para acessar</span></div></button></div>
        </div>
      </div>
      <div className="inovi-empty-background" aria-hidden="true" />
      <dialog ref={dialog} className="bio-about-dialog" onCancel={() => setAbout(false)}><button className="bio-dialog-close" aria-label="Fechar Sobre Nós" onClick={() => setAbout(false)}><X size={22} /></button><img src="/media/inovi-logo.png" alt="INOVI Laboratório Dentário" /><h2><KineticText active={about}>Precisão em cada detalhe.<br />Naturalidade em cada sorriso.</KineticText></h2><p>A INOVI é um laboratório de próteses dentárias. Unimos estética e função em parceria com dentistas para cuidar do que faz cada sorriso único.</p><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="bio-dialog-cta">Fale com o laboratório <ArrowUpRight size={17} /></a></dialog>
    </section>
  );
}