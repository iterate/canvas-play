# Lek med `<canvas>`

_IV-dagene 2022_ - iterate.no

## Få en nettleser som viser endringene dine når du lagerer:

Installer avhengigheter (`live-server`):

    $ npm i
    
Start dev-server:

    $ npm start
    
Nå kjører du en dev-server på en lokal port. Se hva som skjer i terminalen hvis
du ikke får åpnet en nettleser.

## Hvordan å bruke <canvas>-elementet

Mozilla Developer Network (MDN) er en flott (den beste?) ressursen for å lære
webteknologi. Her er to lenker for å få dere i gang med `<canvas>`-elementet:

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors

## Koding og innlevering

Her velger dere litt selv. Dere kan presentere på egen PC, eller vi kan vise på
vår. For å komme i gang, bestem et gruppenavn. Velg gjerne noe annet enn BANAN
:)

```bash
GRUPPENAVN=BANAN
cp -r template $GRUPPENAVN/
```

Da kan dere kode i `$GRUPPENAVN`. Hvis dere skal levere med PR, blir dette
lettere for oss å ta imot.

Dere kan levere med PR eller på mail.

**Mail**: send en zip med filene deres til `teodor@iterate.no`

**PR**: lag PR til https://github.com/iterate/canvas-play med koden deres under
`$GRUPPENAVN/`. For `BANAN` (ikke velg gruppenavn BANAN alle sammen, da):

    BANAN/
    index.html
    mic/
    mouse/
    package.json
    package-lock.json
    README.md
    template/

Bare la `index.html` på toppnivå være - da unngår vi merge-konflikter.
