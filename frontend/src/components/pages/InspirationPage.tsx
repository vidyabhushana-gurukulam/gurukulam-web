/*
  src/components/pages/InspirationPage.tsx
  Introduces the two figures the Gurukulam looks to: Srila Prabhupada, Founder-Acharya of ISKCON,
  and Srila Baladeva Vidyabhushana, the eighteenth-century scholar whose name the school carries.
  Portraits are rendered plainly rather than through PhotoFrame; the drift and crop that suit
  programme photography would sit badly on a devotional image.
*/
import { PageCta, PageHero } from "@/components/pages/InnerPage";
import { SectionIntro, GoldRule } from "@/components/home/SectionIntro";
import { Reveal } from "@/components/motion/Reveal";
import { Img } from "@/components/ui/Img";
import { INSPIRATION } from "@/data/media";

/** Works attributed to Srila Baladeva Vidyabhushana, shown as a short bibliography. */
const BALADEVA_WORKS = [
  { title: "Govinda-bhashya", note: "Commentary on the Vedanta-sutra" },
  { title: "Prameya-ratnavali", note: "A summary of Gaudiya Vaishnava conclusions" },
  { title: "Siddhanta-ratna", note: "On the tradition's philosophical positions" },
  { title: "Gita-bhushana", note: "Commentary on the Bhagavad-gita" },
];

export function InspirationPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Inspiration"
        title="The teachers this school looks to"
        lead="Vidyabhushana Gurukulam rests on two lives: the scholar whose name it carries, and the teacher who carried Vedic education to the world."
      />

      <Prabhupada />
      <Baladeva />
      <ClosingThought />

      <PageCta
        title="See how this shapes the school day"
        body="The daily rhythm, the curriculum, and the character framework all follow from what these two taught."
        primaryLabel="Explore Our Approach"
        primaryHref="/approach"
        secondaryLabel="Admission Enquiry"
        secondaryHref="/admissions"
      />
    </>
  );
}

function Prabhupada() {
  return (
    <section className="overflow-hidden bg-header px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="prabhupada-title">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal x={-24} className="mx-auto w-full max-w-[380px]">
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-4 rounded-full border border-theme/25" />
            <Img src={INSPIRATION.prabhupada.src} alt={INSPIRATION.prabhupada.alt} className="relative w-full drop-shadow-[0_24px_48px_rgb(0_0_0_/_0.35)]" />
          </div>
        </Reveal>

        <Reveal x={24}>
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-theme">Founder-Acharya of ISKCON</p>
          <h2 id="prabhupada-title" className="mt-4 font-heading text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.1] text-white">
            His Divine Grace A. C. Bhaktivedanta Swami Prabhupada
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/55">1896 &ndash; 1977</p>

          <div className="mt-7 flex flex-col gap-5 text-[17px] leading-8 text-white/75">
            <p>
              In 1965, at the age of sixty-nine, Srila Prabhupada sailed from Calcutta to New York with a trunk of books and little else. His own spiritual master, Srila Bhaktisiddhanta Sarasvati Thakura, had asked him to carry Vedic knowledge into the English-speaking world, and he had waited more than forty years for the opportunity to do it.
            </p>
            <p>
              In the eleven years that followed he founded the International Society for Krishna Consciousness, established temples, farm communities, and schools across six continents, and translated and commented on the Bhagavad-gita, the Srimad-Bhagavatam, and the Sri Chaitanya-charitamrita — some eighty volumes, written mostly in the hours before dawn.
            </p>
            <p>
              He was unambiguous about children. A gurukula, as he described it, was not a place that withdrew a child from the world but one that prepared them for it — literate, capable, disciplined, and settled in their own culture. He wanted students who could hold their own in any classroom and still know exactly who they were.
            </p>
          </div>

          <blockquote className="mt-8 border-l-2 border-theme/60 pl-6">
            <p className="font-heading text-[19px] leading-8 text-white/90">
              That is the school we are trying to build. Our daily rhythm, our scriptural curriculum, and our insistence that academics be taken seriously all follow from his instruction.
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

function Baladeva() {
  return (
    <section className="bg-bg-cream px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="baladeva-title">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal x={-24} className="lg:order-1">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-theme">The name we carry</p>
          <h2 id="baladeva-title" className="mt-4 font-heading text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.1] text-header">
            Srila Baladeva Vidyabhushana
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-text/65">Eighteenth century</p>

          <div className="mt-7 flex flex-col gap-5 text-[17px] leading-8 text-text">
            <p>
              This school is named after him. He was among the most formidable scholars the Gaudiya Vaishnava tradition has produced, trained first in logic and Vedanta, and he came to the tradition already carrying the full apparatus of classical debate.
            </p>
            <p>
              In the account preserved by the tradition, the Gaudiya Vaishnavas at Jaipur were challenged to show that theirs was a bona fide line of Vedanta — which required a commentary on the Vedanta-sutra that the tradition did not yet possess. Baladeva wrote one. The assembly that had set the challenge conferred on him the title <em>Vidyabhushana</em>: ornament of learning.
            </p>
            <p>
              We chose the name deliberately. It says that knowledge is something a person wears — carried lightly, and with dignity. That is what we want for every child here: not learning endured, but learning that becomes part of who they are. And his life makes the argument this school exists to make, that a devotee has every reason to be the most rigorous scholar in the room.
            </p>
          </div>
        </Reveal>

        <Reveal x={24} className="mx-auto w-full max-w-[420px] lg:order-2">
          <div className="overflow-hidden rounded-b-[28px] rounded-t-[clamp(120px,20vw,200px)] border border-theme/35 bg-white shadow-card">
            <Img src={INSPIRATION.baladeva.src} alt={INSPIRATION.baladeva.alt} className="h-auto w-full" />
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-[1180px]">
        <p className="text-center font-heading text-sm font-semibold uppercase tracking-[0.18em] text-theme">Among his works</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {BALADEVA_WORKS.map((work, index) => (
            <Reveal key={work.title} delay={index * 0.05}>
              <article className="h-full rounded-[24px] border border-header/10 bg-white/70 p-5">
                <h3 className="font-heading text-lg font-medium leading-tight text-header">{work.title}</h3>
                <p className="mt-2 text-[14px] leading-5 text-text">{work.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingThought() {
  return (
    <section className="bg-body px-5 py-20 sm:px-8 lg:py-24" aria-labelledby="inspiration-closing-title">
      <Reveal className="mx-auto max-w-[860px] text-center">
        <SectionIntro
          eyebrow="What we take from them"
          title="Scholarship and reach, brought to one classroom"
          headingId="inspiration-closing-title"
          className="mx-auto"
        />
        <GoldRule className="my-8" />
        <p className="text-[18px] leading-8 text-text">
          From Srila Baladeva Vidyabhushana we take the standard: that the tradition deserves real intellectual rigour, and that a child raised in it should never have to choose between faith and thinking clearly. From Srila Prabhupada we take the method: an education that is practical, disciplined, and unembarrassed about its own culture. Between them they describe the whole of what we are attempting in Vadodara.
        </p>
      </Reveal>
    </section>
  );
}

export default InspirationPage;
