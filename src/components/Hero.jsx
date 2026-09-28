import {images,school} from '../data/schoolData';import {Btn,Container,Img,go} from './ui';
export default function Hero(){return <section id="home" className="bg-cream">
<Container className="grid items-center gap-10 py-12 lg:grid-cols-12 lg:gap-14 lg:py-20">
<div className="lg:col-span-6"><p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[.16em] text-gold"><span className="h-px w-8 bg-gold"/>Welcome to Hans Green Field Public School</p>
<h1 className="text-4xl font-extrabold leading-[1.1] text-forest sm:text-5xl lg:text-6xl">Building Bright Futures Through Quality Education</h1>
<p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">Creating an environment where knowledge, confidence, character and creativity come together to prepare students for a meaningful future.</p>
<p className="mt-6 inline-block border-l-2 border-gold pl-3 text-sm font-semibold text-forest">{school.affiliation}</p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row"><Btn onClick={()=>go('about')}>Explore Our School</Btn><Btn variant="outline" onClick={()=>go('contact')}>Admission Enquiry</Btn></div></div>
<div className="relative lg:col-span-6"><div className="absolute -left-4 -top-4 hidden h-full w-full rounded-lg border border-gold/60 sm:block"/>
<Img src={images.hero} alt="Students on the school campus" className="relative h-[320px] w-full rounded-lg sm:h-[440px] lg:h-[520px]"/>
<div className="absolute -bottom-5 left-4 rounded-md bg-forest px-6 py-4 text-white shadow-lg sm:left-8"><p className="text-xs font-bold uppercase tracking-[.2em] text-gold-light">Education • Values • Excellence</p></div></div>
</Container></section>}
