import {studentLife,images} from '../data/schoolData';import {Btn,Container,Img,Reveal,Eyebrow,H2} from './ui';
export default function StudentLife(){return <section className="py-20 lg:py-28"><Container className="grid items-center gap-12 lg:grid-cols-12">
<Reveal className="lg:col-span-4"><Eyebrow>Student Life</Eyebrow><H2>Learning Beyond the Classroom</H2>
<p className="mt-5 text-lg leading-relaxed text-ink/75">Students learn through participation, collaboration, creativity and experiences beyond the classroom.</p><Btn className="mt-8" variant="outline">Explore Student Life →</Btn></Reveal>
<div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:grid-cols-3 lg:col-span-8">{studentLife.map(([t,k,s],i)=><Reveal key={t} delay={i*60} className={s}>
<figure className="group relative h-full overflow-hidden rounded-lg"><Img src={images[k]} alt={t} className="h-full w-full transition duration-700 group-hover:scale-105"/>
<figcaption className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 text-sm font-semibold text-white">{t}</figcaption></figure></Reveal>)}</div></Container></section>}
