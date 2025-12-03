[![Netlify Status](https://api.netlify.com/api/v1/badges/a801c195-10dd-4c04-9ace-6c0a29775cc7/deploy-status)](https://app.netlify.com/sites/contosopizza/deploys)
# Pizza lekérdező oldal - kezdő verzió - React-ban építve
Ez a pizza lekérdező oldal React-ban lett megírva és ASP.NET backend-ről (Linuxos) fetch-el le végpontokat. 
A CRUD teljes és ez az egész csak oktatási célra készült.
A frontend a nemethb.linkpc.net - ingyenes domain alá lett deployolva,
míg a backend egy - szintén ingyenes - sulla.ddns.net domain alá. Egyiknek sincs közvetlen A-rekordja, csak aldomain-t kaptam hozzá, illetve CNAME-et kellett beállítani a Netlify-hoz.

# Frontend
[Frontend](https://nemethb.linkpc.net) (Obsolete)

# Végpontok listája (swagger):
[Swagger](https://pizza.sulla.hu/swagger/index.html)

# Pizza backend:
[Pizza végpont](https://pizza.sulla.hu/pizza)<br>
[Pizza végpont ID-ra (pl.1)](https://pizza.sulla.hu/pizza/1)

# Deploy: 
Netlify-on (link fent), hozzá kapcsoltam egy domain nevet, SSL-el. Sajnos a backend-nek még vannak gyerekbetegségei, így nem kezeli rendesen az SSL-t, ezért a legtöbb böngésző szerint nem biztonságos. (obsolete)

# Known issues / ismert problémák:
UPDATE: ALL ISSUES GONE! Dev-certs issuek megoldódtak!
