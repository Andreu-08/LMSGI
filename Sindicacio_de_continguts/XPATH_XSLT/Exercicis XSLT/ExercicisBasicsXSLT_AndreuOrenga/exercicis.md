## Exercicis XSLT

```xml
<?xml version="1.0" encoding="UTF-8"?>
<civilizacions>
    <civilitzacio any="2500 aC">
        <nom>Mesopotàmia</nom>
        <ciutat>Babilònia</ciutat>
        <lider>Hammurabi</lider>
        <contribucions>
            <contribucio>Escriptura cuneïform</contribucio>
            <contribucio>Codi de Hammurabi</contribucio>
        </contribucions>
    </civilitzacio>
    <civilitzacio any="1500 aC">
        <nom>Egipte Antic</nom>
        <ciutat>Giza</ciutat>
        <lider>Khufu</lider>
        <contribucions>
            <contribucio>Piràmides de Giza</contribucio>
            <contribucio>Escritura jeroglífica</contribucio>
        </contribucions>
    </civilitzacio>
    <civilitzacio any="500 aC">
        <nom>Grècia Antiga</nom>
        <ciutat>Atenes</ciutat>
        <lider>Pericles</lider>
        <contribucions>
            <contribucio>Democràcia atenenca</contribucio>
            <contribucio>Filosofia grega</contribucio>
        </contribucions>
    </civilitzacio>
    <civilitzacio any="300 aC">
        <nom>Roma Antiga</nom>
        <ciutat>Roma</ciutat>
        <lider>Julius Caesar</lider>
        <contribucions>
            <contribucio>Llei romana</contribucio>
            <contribucio>Imperi romà</contribucio>
        </contribucions>
    </civilitzacio>
</civilizacions>
```


### Exercici 1: Crear una plantilla bàsica
Crea una plantilla XSLT que transforme l'XML en un document HTML senzill. La sortida ha de contindre els noms de les civilitzacions.

### Exercici 2: Afegir més informació
Modifica la plantilla per afegir més informació a la sortida HTML, com les ciutats i els líders de cada civilització.

### Exercici 3: Utilitzar variables
Defineix una variable per emmagatzemar un color de fons i utilitza-la per estil·litzar la sortida HTML. Assegura't que la variable sigui fàcilment canviada per ajustar l'estil.

### Exercici 4: Iteració amb `<xsl:for-each>`
Utilitza `<xsl:for-each>` per recórrer i mostrar totes les contribucions de cada civilització.

### Exercici 5: Pas de paràmetres a les plantilles
Modifica la plantilla perquè pugui rebre un paràmetre i utilitza'l per canviar el color de fons de manera dinàmica.

### Exercici 6: Exemple complet amb múltiples plantilles
Amplia la teva transformació XSLT per incloure múltiples plantilles que es puguin aplicar a diferents elements del document XML.

### Exercici 7: Condicionals (xsl:choose i xsl:if)
- **Amb xsl:if**
Crea una transformació XSLT que utilitze `xsl:if` per mostrar només la civilització amb l'any = "500 aC", i el seu lider

- **Amb xsl:choose**
Modifica la transformació XSLT per les civilitzacions amb `xsl:choose` que mostre:
- Civilització amb l'any = "1500 aC" i la ciutat.
- Civilització amb l'any = "300 aC" i el seu lider
