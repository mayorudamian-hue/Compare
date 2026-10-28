self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{const r=e.request,h=new URL(r.url).host;
  if(r.method!=='GET'||h.includes('googleapis')||h.includes('google.com')||h.includes('firebaseapp'))return;
  e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open('cmp1').then(k=>k.put(r,c));return x}).catch(()=>caches.match(r)))});
