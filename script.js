// Mobile menu
const bm=document.getElementById('burger-menu'),nm=document.getElementById('nav-menu');
bm&&bm.addEventListener('click',()=>nm.querySelector('ul').classList.toggle('show'));
document.querySelectorAll('nav a').forEach(l=>l.addEventListener('click',()=>nm.querySelector('ul').classList.remove('show')));

// Header scroll
const hdr=document.getElementById('header');
window.addEventListener('scroll',()=>hdr.style.boxShadow=window.scrollY>100?'0 4px 12px rgba(0,0,0,.15)':'0 4px 6px rgba(0,0,0,.1)');

// Slider
const pt=document.getElementById('portfolio-track'),pb=document.getElementById('prev-slide'),nb=document.getElementById('next-slide'),dots=document.querySelectorAll('.dot');
let ci=0,ts=4;
const upd=()=>{pt&&(pt.style.transform=`translateX(-${ci*100}%)`);dots.forEach((d,i)=>d.classList.toggle('active',i===ci))};
pb&&pb.addEventListener('click',()=>{ci=(ci-1+ts)%ts;upd()});
nb&&nb.addEventListener('click',()=>{ci=(ci+1)%ts;upd()});
dots.forEach((d,i)=>d.addEventListener('click',()=>{ci=i;upd()}));
setInterval(()=>{ci=(ci+1)%ts;upd()},6e3);

// Calculator
const rr=document.getElementById('rooms-range'),fr=document.getElementById('floor-range'),rv=document.getElementById('rooms-value'),fv=document.getElementById('floor-value'),tp=document.getElementById('total-price');
const calc=()=>{const r=+rr.value,f=+fr.value,p=2e3*r+(f>1?500*(f-1)*r:0);rv.textContent=r;fv.textContent=f;tp.textContent=p.toLocaleString('ru-RU')};
rr&&rr.addEventListener('input',calc);fr&&fr.addEventListener('input',calc);calc();

// Form
const cf=document.getElementById('contact-form');
cf&&cf.addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('name').value,p=document.getElementById('phone').value,m=document.getElementById('message').value;if(n&&p&&m){alert(`Спасибо, ${n}! Свяжемся по ${p}`);cf.reset()}else alert('Заполните все поля')});

// Phone mask
const pi=document.getElementById('phone');
pi&&pi.addEventListener('input',e=>{let v=e.target.value.replace(/\D/g,'');if(v.length>0){if(v[0]==='7'||v[0]==='8')v=v.slice(1);let f='+7';if(v.length>0)f+=' ('+v.slice(0,3);if(v.length>=3)f+=') '+v.slice(3,6);if(v.length>=6)f+='-'+v.slice(6,8);if(v.length>=8)f+='-'+v.slice(8,10);e.target.value=f}});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const t=document.querySelector(a.getAttribute('href'));t&&t.scrollIntoView({behavior:'smooth',block:'start'})}));

// Scroll animations
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)'}}),{threshold:.1,rootMargin:'0 0 -100px 0'});
document.querySelectorAll('.service-card,.testimonial-card,.stat-item').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(30px)';el.style.transition='opacity .6s ease,transform .6s ease';obs.observe(el)});