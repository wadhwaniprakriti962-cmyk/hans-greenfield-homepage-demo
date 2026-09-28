import {useState} from 'react';import {Eye} from 'lucide-react';import {gallery,galleryFilters,images} from '../data/schoolData';import {Btn,Container,Img,Eyebrow,H2} from './ui';
export default function Gallery(){const [f,setF]=useState('All');const list=gallery.filter(g=>f==='All'||g[1]===f);
return <section id="gallery" className="py-20 lg:py-28"><Container>
<div className="text-center"><div className="flex justify-center"><Eyebrow>Gallery</Eyebrow></div><H2>Moments From Our School</H2></div>
<div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter gallery">{galleryFilters.map(x=><button key={x} aria-pressed={f===x} onClick={()=>setF(x)} className={`min-h-[44px] rounded-full border px-5 text-sm font-semibold transition ${f===x?'border-forest bg-forest text-white':'border-neutral-300 hover:border-forest'}`}>{x}</button>)}</div>
<div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">{list.map(([k,,alt],i)=><figure key={k} className={`group relative overflow-hidden rounded-lg ${i%5===0?'md:col-span-2':''} h-40 sm:h-56`}>
<Img src={images[k]} alt={alt} className="h-full w-full transition duration-700 group-hover:scale-105"/>
<div className="absolute inset-0 grid place-items-center bg-forest/60 opacity-0 transition group-hover:opacity-100"><Eye className="text-white"/></div></figure>)}</div>
<div className="mt-10 text-center"><Btn variant="outline">View Full Gallery →</Btn></div></Container></section>}
