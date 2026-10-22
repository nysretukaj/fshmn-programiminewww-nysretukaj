# Java IV — Festivali që përshtatet në çdo ekran

## Çfarë mëson

Flexbox, Grid, media queries dhe pamje responsive.

Referencë tematike: kap. 6–7 të librit.

## Skenari

Programi i një festivali shkencor duhet të lexohet si në telefon ashtu edhe në ekran të gjerë.

## Kërkesat

1. Krijo gjashtë karta aktivitetesh dhe një menu fleksibile.
2. Përdor Grid: një kolonë nën 600 px, dy nga 600 deri në 899 px dhe tri nga 900 px.
3. Kartat kanë titull, kategori, orar dhe lidhje detajesh; teksti i gjatë nuk duhet të dalë jashtë.
4. Përdor imazh fleksibël dhe mos përdor lartësi fikse për tekstin.
5. Testo në 360, 768 dhe 1280 px; ruaj rezultatet në README.

## Rastet e pranimit

- [x] Në 360/768/1280 px shfaqen përkatësisht 1/2/3 kolona.
- [x] Nuk ka scroll horizontal në faqen e plotë.
- [x] Menuja mbetet e përdorshme me tastierë.

## Rezultatet e testimit

Hap `index.html` në shfletues, hap mjetet e zhvilluesit (F12) → pamja responsive, dhe vendos secilën gjerësi më poshtë. Shëno rezultatin e vërtetë pas testimit (jo atë të pritshmin).

| Gjerësia | Hyrja (veprimi) | Rezultati i pritur | Rezultati i marrë |
|---|---|---|---|
| 360 px | Hap faqen në 360 px | 1 kolonë, pa scroll horizontal | kalon|
| 768 px | Hap faqen në 768 px | 2 kolona, pa scroll horizontal | kalon |
| 1280 px | Hap faqen në 1280 px | 3 kolona, pa scroll horizontal | kalon |
| Tastierë | Shtyp Tab deri te "Menu", pastaj Enter | Menuja hapet/mbyllet, fokusi dukshëm i theksuar | kalon |

## Çfarë u realizua

- Menu fleksibël (Flexbox) me buton "hamburger" që shfaqet nën 600 px dhe shtrihet në rresht mbi 600 px.
- Grid me `grid-template-columns`: 1 kolonë nën 600 px, 2 kolona 600–899 px, 3 kolona nga 900 px.
- 6 karta aktivitetesh me titull, kategori, orar (`<time>`), përshkrim dhe lidhje detajesh.
- Imazhet janë fleksibël (`width: 100%; height: auto;`) me `aspect-ratio` fiks në vend të lartësisë.
- Teksti nuk ka lartësi fikse; përdor `overflow-wrap`/`hyphens` për tituj të gjatë (shih sfida e transferimit).

## Deklarimi i AI/burimeve

_Shto këtu: Perdora Claude per te me ndihmuar ne stilizim me shum dhe ne integrimin e imazheve, kursse pjesen tjeter dhe testimin i bera vet.

## Sfida e transferimit

Një titull 100-karakterësh duhet të përshtatet pa prishur kartën. Kjo sfidë është formuese; nuk jep bonus jashtë rubrikës.

## Dorëzimi dhe GitHub

Puno në JavaIV/ të repository-t individual. Dorëzo kodin, asetet lokale dhe README.md me: çfarë realizove, hapat e hapjes, hyrje → rezultat i pritur → rezultat i marrë për testet, përgjigjen e reflektimit dhe deklarimin e AI/burimeve. Për React dorëzo edhe package.json dhe lockfile; mos dorëzo node_modules/ ose dist/.



## Reflektim individual

Kur do të zgjidhje Flexbox dhe kur Grid?
Do të zgjidhja Flexbox kur elementet duhet të rreshtohen në një drejtim të vetëm — rresht ose kolonë — siç bëra me menunë time, ku lidhjet duhet të jenë në rresht në ekran të gjerë dhe në kolonë në telefon. Do të zgjidhja Grid kur kam nevojë për kontroll mbi rreshta DHE kolona njëkohësisht, siç bëra me kartat e aktiviteteve, ku numri i kolonave ndryshon (1/2/3) sipas gjerësisë së ekranit. Nëse do i kisha përdorur të kundërtën — Grid për menunë dhe Flexbox për kartat — do ishte më e vështirë të kontrolloja saktësisht se sa kolona shfaqen te kartat në çdo pikë ndërprerjeje, sepse Flexbox nuk menaxhon automatikisht numrin e kolonave si Grid-i.