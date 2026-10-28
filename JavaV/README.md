# Shënime para kodimit — Formulari i misionit sekret

## Hyrjet (fushat e formularit)
- **Pseudonimi** — tekst, 3–20 karaktere, i detyrueshëm.
- **Email i sajuar** — tekst në format email (p.sh. `emer@domen.xx`), i detyrueshëm.
- **Persona** — numër i plotë nga 1 deri në 5, i detyrueshëm.
- **Kategoria** — një zgjedhje e vetme nga dy opsione: Art ose Shkencë, e detyrueshme.
- **Pranimi i rregullave** — checkbox, duhet të jetë i shënuar (i detyrueshëm).

## Daljet
- Nëse **ndonjë** fushë nuk është valide → shfletuesi ndalon dërgimin dhe tregon mesazhin përkatës të validimit nën fushën problematike; faqja s'ndryshon.
- Nëse **të gjitha** fushat janë valide → formulari dërgohet me metodën `GET` te `pranuar.html`, të dhënat shfaqen në URL (si parametra query) dhe faqja e pranimit i liston ato në një tabelë, bashkë me shënimin që asgjë s'ruhet në server.

## Rasti normal
- Pseudonimi: `Arta92` (6 karaktere) · Email: `arta92@example.org` · Persona: `3` · Kategoria: `Art` · Rregullat: të shënuara.
- Pritet: kalon validimin, dërgohet te `pranuar.html?pseudonimi=Arta92&email=arta92%40example.org&persona=3&kategoria=Art&rregullat=po`.

## Rastet kufitare
1. **Persona jashtë intervalit (0 ose 6):** të gjitha fushat e tjera valide, por `persona = 0` ose `persona = 6`.
   - Pritet: s'kalon — `min="1"` / `max="5"` e ndalojnë dërgimin, shfletuesi tregon mesazh gabimi.
2. **Pseudonimi shumë i shkurtër (2 karaktere) ose email pa format të saktë** (p.sh. `pseudonimi = "Ab"` ose `email = "arta92"` pa `@domen`):
   - Pritet: s'kalon — `minlength="3"` e ndalon rastin e parë, `type="email"` e ndalon të dytin; shfletuesi tregon mesazhet përkatëse nën fushat e prekura.

## Pse required në front-end nuk mjafton
`required`, `minlength/maxlength`, `min/max` dhe `type` kontrollohen vetëm nga shfletuesi i përdoruesit — pra nga klienti. Dikush mund t'i anashkalojë lehtë (çaktivizon JS/validimin, modifikon HTML-në në DevTools, ose dërgon kërkesën direkt me curl/Postman pa kaluar fare nëpër formular). Prandaj në një sistem real duhet gjithmonë edhe **validim në server**, sepse vetëm serveri është pika që klienti s'mund ta anashkalojë.