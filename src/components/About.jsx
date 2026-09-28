import {images,aboutPoints} from '../data/schoolData';import {Btn,Container,Img,Reveal,Eyebrow,H2} from './ui';
export default function About(){return <section id="about" className="py-20 lg:py-28"><Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
<Reveal><div className="relative"><Img src={images.about} alt="Students learning in a classroom" className="h-[380px] w-full rounded-lg sm:h-[520px]"/><div className="absolute -bottom-6 -right-2 hidden h-32 w-32 rounded-lg bg-gold-light sm:block -z-10"/></div></Reveal>
<Reveal delay={120}><Eyebrow>About Us</Eyebrow><H2>A Place Where Learning Meets Growth</H2>
<p className="mt-6 text-lg leading-relaxed text-ink/80">Hans Green Field Public School is committed to creating a supportive learning environment where students are encouraged to learn, explore, participate and grow with confidence.</p>
<p className="mt-4 leading-relaxed text-ink/70">Our approach combines academic learning with opportunities for personal development, creativity, discipline and responsible citizenship.</p>
<ul className="mt-8 grid gap-4 border-t pt-6 sm:grid-cols-3">{aboutPoints.map(p=><li key={p} className="border-l-2 border-gold pl-3 text-sm font-bold text-forest">{p}</li>)}</ul>
<Btn className="mt-8" variant="outline">Discover Our School →</Btn></Reveal></Container></section>}
