import {images,principal as p} from '../data/schoolData';import {Container,Img,Reveal,Eyebrow,H2} from './ui';
export default function PrincipalMessage(){return <section className="bg-cream py-20 lg:py-28"><Container className="grid items-center gap-12 lg:grid-cols-12">
<Reveal className="lg:col-span-4"><Img src={images.principal} alt="Principal portrait (placeholder)" className="mx-auto aspect-[4/5] w-full max-w-sm rounded-lg"/></Reveal>
<Reveal delay={120} className="lg:col-span-8 lg:pl-8"><Eyebrow>Leadership</Eyebrow><H2>Message from the Principal</H2>
<blockquote className="mt-8 border-l-4 border-gold pl-6">{p.message.map((m,i)=><p key={i} className={`leading-relaxed ${i===0?'text-xl font-medium text-forest sm:text-2xl':'mt-4 text-lg text-ink/75'}`}>{m}</p>)}</blockquote>
<div className="mt-8 pl-7"><p className="font-extrabold text-forest">{p.name}</p><p className="text-sm text-ink/60">{p.title}</p></div></Reveal></Container></section>}
