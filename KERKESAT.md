# Prova 1 — Varianti A: Klub shkencor

**Programimi në WWW · Java IV · 40 minuta · Individuale · 6 pikë**

## Çfarë do të ndërtosh

Një faqe HTML/CSS për **Klub shkencor**, duke plotësuar skedarët në Fillimi/. Nuk fillon nga zero dhe nuk kërkohet JavaScript. Dy rregulla CSS janë qëllimisht të gabuara: gjerësia fikse shkakton dalje jashtë ekranit dhe outline: none fsheh fokusin. Duhet t’i riparosh.

## Të dhënat 

| Karta | Titulli h2 | Kategoria |
|---|---|---|
| 1 | Teleskopi | Shkencë |
| 2 | Uji | Shkencë |
| 3 | Energjia | Shkencë |

## Kërkesat, hap pas hapi

1. Hape Fillimi/index.html në shfletues. Ndrysho title dhe h1 në “Klub shkencor”.
2. Brenda seksionit #programi krijo tri article sipas tabelës. Secili ka h2, një paragraf për kategorinë dhe një lidhje “Detaje” me href="#info".
3. Ruaj menunë me lidhjet “Programi” drejt #programi dhe “Info” drejt #info. Mbaji të dy seksionet me këto ID.
4. Me CSS realizo **një kolonë në 360 px** dhe **tri kolona në 1000 px**. Mund të përdorësh Grid ose Flexbox; nuk kërkohet pamje identike me ndonjë model.
5. Korrigjo width: 900px që shkakton overflow. Padding dhe border duhet të përfshihen siç duhet në madhësi. Përmbajtja e gjatë në kartë nuk duhet të dalë jashtë. Për provë shto përkohësisht tekstin AktivitetStudentorPaHapesira123456789012345678901234567890 dhe pastaj hiqe.
6. Riparo fokusin: kur shtyp Tab duhet të shohësh qartë cilën lidhje ke zgjedhur. Lidhjet duhet të aktivizohen me Enter.
7. Plotëso TESTE.md dhe dy përgjigjet në PERGJIGJE.md. Nuk ka pikë shtesë për figura, animacione ose JavaScript.

## Si ta kontrollosh

Në DevTools aktivizo pamjen responsive dhe cakto gjerësinë 360 px, pastaj 1000 px. Kontrollo kolonat dhe scroll-in horizontal. Kliko lidhjet; objektivi duhet të ekzistojë edhe kur seksioni është tashmë në ekran. Kliko zonën bosh të faqes dhe përdor Tab/Enter për tastierën.

## Vlerësimi

| ID | Kriteri | Pikë |
|---|---|---:|
| P1.1 | Tri article me h2 dhe kategorinë e variantit. | 0.75 |
| P1.2 | Menuja lidhet saktë me #programi dhe #info; lidhjet përdoren edhe me tastierë. | 0.75 |
| P1.3 | Kartat shfaqen në një kolonë në gjerësi 360 px. | 0.75 |
| P1.4 | Kartat shfaqen në tri kolona në gjerësi 1000 px. | 0.75 |
| P1.5 | Hiqet shkaku i overflow; edhe teksti i gjatë qëndron brenda në 360 px. | 0.75 |
| P1.6 | Fokusi i lidhjeve është i dukshëm gjatë përdorimit të Tab. | 0.75 |
| P1.7 | Shpjegon box-sizing: border-box me shembull nga kodi. | 0.75 |
| P1.8 | Shpjegon lidhjen për lundrim kundrejt button për veprim. | 0.75 |
| | **Gjithsej** | **6** |

Çdo kriter merr 0 ose 0.75 pikë sipas evidencës. Një gabim në një kriter nuk anulon kriteret e tjera që punojnë. Kërkesat për lidhjet Detaje janë pjesë e ndërtimit të faqes, pa pikë shtesë jashtë këtyre 6 pikëve.

## Rregullat

Lejohen editori, shfletuesi/DevTools dhe REFERENCE.md i paketës. Nuk lejohen AI, zgjidhje të gatshme ose komunikim me studentë të tjerë. Koha përfshin punën dhe raportin; ora e mbylljes shpallet në Classroom.

## Çfarë dorëzon

Në repository-n tënd krijo Vleresime/Prova1/ dhe vendos **index.html, style.css, TESTE.md, PERGJIGJE.md**. Kopjo skedarët e kodit nga Fillimi/ drejtpërdrejt në atë folder. Shëno “Varianti A” në TESTE.md. Bëj commit dhe push. Në assignment dorëzo linkun e folderit dhe linkun e commit-it final (që identifikon versionin/SHA). Mos dorëzo vetëm screenshot. Në ndërprerje interneti, asistenti pranon skedarët lokalisht brenda afatit.
