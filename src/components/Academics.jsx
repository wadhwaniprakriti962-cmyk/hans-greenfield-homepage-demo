import {academics,images} from '../data/schoolData';import {Container,Img,Reveal,Eyebrow,H2} from './ui';
export default function Academics(){return <section id="academics" className="py-20 lg:py-28"><Container>
<Reveal className="max-w-2xl"><Eyebrow>Academics</Eyebrow><H2>Learning for a Better Tomorrow</H2></Reveal>
<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{academics.map(([t,d,k],i)=><Reveal key={t} delay={i*80}>
<article className="group relative h-[380px] overflow-hidden rounded-lg lg:h-[460px]"><Img src={images[k]} alt={t} className="h-full w-full transition duration-700 group-hover:scale-105"/>
<div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/50 to-transparent"/>
<div className="absolute inset-x-0 bottom-0 p-6 text-white"><span className="text-xs font-bold text-gold-light">0{i+1}</span><h3 className="mt-1 text-xl font-bold">{t}</h3><div className="my-3 h-px w-10 bg-gold"/><p className="text-sm text-white/85">{d}</p></div></article></Reveal>)}</div></Container></section>}
