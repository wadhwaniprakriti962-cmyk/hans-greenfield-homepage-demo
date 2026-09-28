import {CalendarDays} from 'lucide-react';import {news} from '../data/schoolData';import {Container,Reveal,Eyebrow,H2} from './ui';
export default function News(){return <section className="bg-neutral-50 py-20"><Container>
<Reveal><Eyebrow>Updates</Eyebrow><H2>Latest News & Notices</H2></Reveal>
<div className="mt-10 grid gap-5 md:grid-cols-3">{news.map(([t],i)=><Reveal key={t} delay={i*80}><article className="h-full rounded-lg border border-neutral-200 border-t-4 border-t-gold bg-white p-7">
<p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink/50"><CalendarDays size={14}/>Date to be updated</p>
<h3 className="mt-4 text-xl font-bold text-forest">{t}</h3><p className="mt-2 text-ink/60">Details to be updated</p></article></Reveal>)}</div></Container></section>}
