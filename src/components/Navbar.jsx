import {useEffect,useState} from 'react';import {Menu,X} from 'lucide-react';
import {nav,school} from '../data/schoolData';import {Btn,Container,go} from './ui';
export default function Navbar(){const [s,setS]=useState(false),[o,setO]=useState(false);
useEffect(()=>{const f=()=>setS(scrollY>30);f();addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]);
const click=id=>{setO(false);go(id)};
return <header className={`sticky top-0 z-50 border-b border-neutral-200 bg-white transition-all ${s?'shadow-md':''}`}>
<Container className={`flex items-center justify-between transition-all ${s?'h-16':'h-20'}`}>
<button onClick={()=>click('home')} className="flex items-center gap-3 text-left" aria-label="Go to top">
<img src={school.logo} alt="Hans Green Field Public School logo" className={`w-auto transition-all ${s?"h-10":"h-14"}`}/>
<span className="leading-tight"><span className="block text-sm font-extrabold text-[#1a7a2e] sm:text-base">{school.name}</span><span className="block text-xs text-neutral-500">{school.city}</span></span></button>
<nav aria-label="Main" className="hidden items-center gap-7 xl:flex">{nav.map(([l,id])=><button key={id} onClick={()=>click(id)} className="text-sm font-medium text-ink/80 transition hover:text-forest">{l}</button>)}</nav>
<div className="flex items-center gap-3"><Btn onClick={()=>click('contact')} className="hidden xl:inline-flex">Admission Enquiry</Btn>
<button className="grid h-11 w-11 place-items-center rounded-md border border-neutral-200 xl:hidden" aria-label="Toggle menu" aria-expanded={o} onClick={()=>setO(!o)}>{o?<X/>:<Menu/>}</button></div></Container>
{o&&<nav aria-label="Mobile" className="max-h-[80vh] overflow-y-auto border-t bg-white xl:hidden"><Container className="flex flex-col py-3">
{nav.map(([l,id])=><button key={id} onClick={()=>click(id)} className="border-b border-neutral-100 py-3.5 text-left font-medium">{l}</button>)}
<Btn onClick={()=>click('contact')} className="my-4">Admission Enquiry</Btn></Container></nav>}</header>}
