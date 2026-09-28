import {useEffect,useRef,useState} from 'react';
export const go=id=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
export function Img({src,alt,className=''}){const [bad,setBad]=useState(false);
return bad?<div role="img" aria-label={alt} className={`bg-gradient-to-br from-forest to-forest-dark ${className}`}/>:<img src={src} alt={alt} loading="lazy" onError={()=>setBad(true)} className={`object-cover ${className}`}/>}
export function Reveal({children,className='',delay=0}){const r=useRef();
useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){e.target.classList.add('in');o.disconnect()}},{threshold:.12});o.observe(r.current);return()=>o.disconnect()},[]);
return <div ref={r} style={{transitionDelay:`${delay}ms`}} className={`reveal ${className}`}>{children}</div>}
export const Container=({children,className=''})=><div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
export const Eyebrow=({children,light})=><p className={`mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[.18em] ${light?'text-gold-light':'text-gold'}`}><span className="h-px w-8 bg-gold"/>{children}</p>;
export const H2=({children,light})=><h2 className={`text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ${light?'text-white':'text-forest'}`}>{children}</h2>;
export const Btn=({children,variant='primary',onClick,className=''})=>{const v={primary:'bg-forest text-white hover:bg-forest-dark',gold:'bg-gold text-white hover:bg-[#a5853f]',outline:'border border-forest text-forest hover:bg-forest hover:text-white',light:'border border-white/70 text-white hover:bg-white hover:text-forest'}[variant];
return <button onClick={onClick} className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${v} ${className}`}>{children}</button>};
