import {images} from '../data/schoolData';import {Btn,Container,Img,H2,Eyebrow,go} from './ui';
export default function AdmissionCTA(){return <section id="admissions" className="relative isolate overflow-hidden py-24 text-white lg:py-32">
<Img src={images.admission} alt="" className="absolute inset-0 -z-20 h-full w-full"/><div className="absolute inset-0 -z-10 bg-forest-dark/85"/>
<Container className="max-w-4xl text-center"><div className="flex justify-center"><Eyebrow light>Admissions</Eyebrow></div><H2 light>Give Your Child a Strong Foundation for the Future</H2>
<p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">Explore our admission process, eligibility requirements and other important information.</p>
<div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"><Btn variant="gold">Admission Process</Btn><Btn variant="light" onClick={()=>go('contact')}>Enquire Now</Btn></div></Container></section>}
