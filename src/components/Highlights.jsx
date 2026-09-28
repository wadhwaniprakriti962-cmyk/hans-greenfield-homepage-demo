import * as I from 'lucide-react';import {highlights} from '../data/schoolData';import {Container,Reveal} from './ui';
export default function Highlights(){return <section aria-label="Highlights" className="border-b bg-white"><Container className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
{highlights.map(([t,d,ic],i)=>{const Ic=I[ic];return <Reveal key={t} delay={i*80} className="flex items-start gap-4 py-7 lg:px-6 lg:first:pl-0">
<div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-light text-gold"><Ic size={20}/></div>
<div><p className="text-xs font-bold text-gold">0{i+1}</p><h3 className="font-bold text-forest">{t}</h3><p className="text-sm text-ink/65">{d}</p></div></Reveal>})}
</Container></section>}
