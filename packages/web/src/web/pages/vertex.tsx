import { InoviHero } from "../components/inovi-hero";
import { VertexBio } from "../components/vertex-bio";
import { InoviWhatsapp } from "../components/inovi-whatsapp";
import { InoviScrollProsthesis } from "../components/inovi-scroll-prosthesis";

export default function Vertex() {
  return (
    <main className="inovi-migration">
      <InoviHero />
      <InoviScrollProsthesis />
      <VertexBio />
      <InoviWhatsapp />
    </main>
  );
}