import * as I from 'lucide-react';import {why} from '../data/schoolData';import {Container,Reveal,Eyebrow,H2} from './ui';
export default function WhyChooseUs(){return <section className="bg-forest py-20 text-white lg:py-28"><Container>
<Reveal className="mx-auto max-w-3xl text-center"><div className="flex justify-center"><Eyebrow light>Why Choose Us</Eyebrow></div><H2 light>More Than Education — A Foundation for Life</H2><p className="mt-5 text-lg text-white/75">Helping students develop the knowledge, confidence and values they need for tomorrow.</p></Reveal>
<div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
{why.map(([t,d,ic],i)=>{const Ic=I[ic];return <Reveal key={t} delay={i*80} className="bg-forest p-8 transition hover:bg-forest-dark"><span className="text-4xl font-extrabold text-gold/50">0{i+1}</span>
<Ic className="mt-6 text-gold" size={28}/><h3 className="mt-4 text-xl font-bold">{t}</h3><p className="mt-2 text-sm leading-relaxed text-white/70">{d}</p></Reveal>})}</div></Container></section>}
