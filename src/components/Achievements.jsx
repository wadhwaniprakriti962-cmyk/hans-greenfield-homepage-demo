import * as I from 'lucide-react';import {achievements} from '../data/schoolData';import {Container,Reveal,Eyebrow,H2} from './ui';
export default function Achievements(){return <section className="bg-cream py-20 lg:py-24"><Container>
<Reveal className="text-center"><div className="flex justify-center"><Eyebrow>Achievements</Eyebrow></div><H2>Celebrating Achievement</H2></Reveal>
<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{achievements.map(([t,ic],i)=>{const Ic=I[ic];return <Reveal key={t} delay={i*80} className="border-t-2 border-gold pt-6 text-center">
<Ic className="mx-auto text-gold" size={32}/><h3 className="mt-4 text-lg font-bold text-forest">{t}</h3><p className="mt-1 text-sm font-semibold">Achievement Highlight</p><p className="text-sm text-ink/55">Details to be updated</p></Reveal>})}</div></Container></section>}
