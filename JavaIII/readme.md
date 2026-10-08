# Java III — Klinika e CSS: shpëto afishen

Afisha e Klubit të Debatit, e kthyer në një ftesë të lexueshme dhe pa overflow.

## Çfarë u bë

- **HTML** (`index.html`): strukturë semantike me titull, datë (`<time>`), vend, përshkrim, lidhje regjistrimi dhe tri etiketa (falas / vende të kufizuara / edhe online).
- **CSS** (`style.css`): variabla `:root` për ngjyra e hapësira, klasa të ripërdorshme (`.poster`, `.tag`, `.btn`), gjendje `:focus-visible` e dukshme, `box-sizing: border-box` global.
- **gabime.css**: diagnostikuar dhe riparuar pa `!important` (shih komentin brenda skedarit).

## Reflektim individual

**Cili rregull fitoi në kaskadë dhe pse?**

Në `gabime.css` origjinal, rregulli `#poster { ... }` fitonte mbi `.poster { ... }`, jo sepse vinte i pari në skedar, por sepse një selektor ID ka specifikë më të lartë (1-0-0) se një selektor klase (0-1-0). Kaskada CSS zgjedh rregullin me specifikën më të lartë, pavarësisht renditjes, kur dy rregulla synojnë të njëjtin element me deklarata konfliktuale. Kjo shkaktoi dy probleme: tekst i bardhë mbi sfond të bardhë (color) dhe një gjerësi fikse që shkaktonte overflow (width). Zgjidhja ishte heqja e selektorit ID dhe mbajtja vetëm e klasës `.poster`, në mënyrë që të mos ketë konflikt specifike për t'u zgjidhur me `!important`.

## Si të testohet

Hap `index.html` në shfletues, zvogëlo dritaren në 360px gjerësi dhe lundro me tastin **Tab** te butoni i regjistrimit për të parë `focus-visible`.