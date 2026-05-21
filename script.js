const nav=document.querySelector('.nav');
const clock=document.getElementById('clock');
function tick(){if(!clock)return;clock.textContent=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Ho_Chi_Minh',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(new Date())}
tick();setInterval(tick,1000);

const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');const light=e.target.classList.contains('light');nav.classList.toggle('nav-light',light)}})},{threshold:.2});
document.querySelectorAll('[data-section]').forEach(s=>observer.observe(s));

document.querySelector('.sound')?.addEventListener('click',e=>{e.currentTarget.classList.toggle('on');e.currentTarget.textContent=e.currentTarget.classList.contains('on')?'◉':'⌕'});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');const el=document.querySelector(id);if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'})}}));

let last=scrollY;addEventListener('scroll',()=>{const y=scrollY;document.documentElement.style.setProperty('--scroll',y);nav.style.transform=y>last&&y>140?'translateY(-82px)':'translateY(0)';last=y;},{passive:true});