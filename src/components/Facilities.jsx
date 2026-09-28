import {facilities,images} from '../data/schoolData';import {Container,Img,Reveal,Eyebrow,H2} from './ui';
const span=['sm:col-span-2 sm:row-span-2 min-h-[320px]','','','','sm:col-span-2','sm:col-span-2'];
export default function Facilities(){return <section id="facilities" className="bg-neutral-50 py-20 lg:py-28"><Container>
<Reveal className="max-w-2xl"><Eyebrow>Infrastructure</Eyebrow><H2>Spaces Designed for Learning</H2><p className="mt-4 text-lg text-ink/70">An environment that supports curiosity, collaboration and growth.</p></Reveal>
<div className="mt-12 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">{facilities.map(([t,d,k],i)=><Reveal key={t} delay={i*60} className={span[i]}>
<article className="group relative h-full overflow-hidden rounded-lg"><Img src={images[k]} alt={t} className="h-full w-full transition duration-700 group-hover:scale-105"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"/>
<div className="absolute bottom-0 p-5 text-white"><h3 className={`font-bold ${i===0?'text-2xl':'text-lg'}`}>{t}</h3><p className="mt-1 max-w-sm text-sm text-white/80 transition group-hover:text-white">{d}</p></div></article></Reveal>)}</div></Container></section>}
