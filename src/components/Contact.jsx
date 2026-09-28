import {MapPin,Phone,Mail} from 'lucide-react';import {school as s} from '../data/schoolData';import {Btn,Container,Reveal,Eyebrow,H2} from './ui';
export default function Contact(){const rows=[[MapPin,'Address',s.address],[Phone,'Phone',s.phone],[Mail,'Email',s.email]];
return <section id="contact" className="py-20 lg:py-28"><Container className="grid gap-10 lg:grid-cols-2">
<Reveal><Eyebrow>Contact</Eyebrow><H2>Get in Touch With Us</H2>
<ul className="mt-8 space-y-5">{rows.map(([Ic,l,v])=><li key={l} className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest-light text-forest"><Ic size={20}/></span><div><p className="text-sm font-bold text-forest">{l}</p><p className="text-ink/70">{v}</p></div></li>)}</ul>
<div className="mt-8 flex flex-col gap-3 sm:flex-row"><Btn>Contact Us</Btn><Btn variant="outline">Admission Enquiry</Btn></div></Reveal>
<Reveal delay={120}><div className="grid min-h-[320px] place-items-center rounded-lg border border-dashed border-forest/40 bg-forest-light text-center"><div><MapPin className="mx-auto text-forest" size={36}/><p className="mt-3 font-bold text-forest">Google Map</p><p className="text-sm text-ink/60">Embed map here — {s.city}</p></div></div></Reveal></Container></section>}
