## Enunciat i Solucions
**Exercici 1: Nom de la Universitat**
- Universitat Fondeguilla
```xpath
/universitat/nom/text()
```
**Exercici 2: País de la Universitat**
- Espanya
```xpath
//pais/text()
```
**Exercici 3: Noms de les Carreres**
- Grau Informàtica
- Grau Empresarials
- Grau Relacions Laborals
- Grau Química
- Grau Biologia
- Grau Humanitats
```xpath
//carrera/nom/text()
```
**Exercici 4: Anys de pla d'estudi de les carreres**
- 2003
- 2001
- 2001
- 2003
- 2001
- 1980
```xpath
//carrera/pla/text()
```
**Exercici 5: Noms de tots els alumnes**
- Víctor Manuel
- Lluisa
- Fernando
- María
```xpath
//alumne/nom/text()
```
**Exercici 6: Identificadors de totes les carreres**
- id="c01"
- id="c02"
- id="c03"
- id="c04"
- id="c05"
- id="c06"
```xpath
//carrera/@id
```
**Exercici 7: Dades de la carrera amb id c01**
```xml
<carrera id="c01">
    <nom>Grau Informàtica</nom>
    <pla>2003</pla>
    <credits>250</credits>
    <centre>Escola d'Informàtica</centre>
</carrera>
```
```xpath
//carreres/carrera[@id="c01"]
```
**Exercici 8: Centre on es estudia de la carrera amb id c02**
- Facultat de Ciències Socials
```xpath
//carreres/carrera[@id="c02"]/centre/text()
```
**Exercici 9: Noms de les carreres que tenen subdirector**
- Grau Relacions Laborals
```xpath
//carrera/subdirector/../nom/text()
```
**Exercici 10: Noms dels alumnes que estan fent projecte**
- Lluisa
- María
```xpath
 //alumnes/alumne/estudis/projecte/../../nom/text()
```
**Exercici 11: Codis de les carreres en les quals hi ha algun alumne matriculat**
- c01
- c02
```xpath
/universitat/alumnes/alumne/estudis/carrera/@codi[not(.=preceding::carrera/@codi)]
```
**Exercici 12: Cognoms i Nom dels alumnes amb beca**
- Rivas Santos, Víctor Manuel
- Pérez Romero, Fernando
```xpath

```
**Exercici 13: Noms de les assignatures de la titulació c04**
- Pedagogia
- Tecnologia dels Aliments
```xpath
/universitat/assignatures/assignatura[@titulacio='c04']/nom/text()
```
**Exercici 14: Noms deles assignatures de segon trimestre**
- Enginyeria del Software
- Pedagogia
- Didàctica
- Tecnologia dels Aliments
- Història del Pensament
```xpath
/universitat/assignatures/assignatura[trimestre='2']/nom/text()
```
**Exercici 15: Noms de les assignatures que no tenen 4 crèdits teòrics**
- Ofimàtica
- Enginyeria del Software
- Tecnologia dels Aliments
- Bases de Dades
- Història del Pensament
```xpath
/universitat/assignatures/assignatura[credits_teorics != '4']/nom/text()
```
