## Enunciat i Solucions

---
**Exercici 1: Mostrar el nom de l'institut.**
- IES Benigaslo

**Exercici 2: Mostrar la pàgina web de l'institut sense etiquetes.**
- https://portal.edu.gva.es/iesbenigaslo/

**Exercici 3: Mostrar el nom dels cicles formatius sense etiquetes.**
- Desenvolupament d'Aplicacions Multiplataforma
- Desenvolupament d'Aplicacions Web
- Sistemas Microinformàtics i Xarxes
- Intel·ligència artificial i Big Data

**Exercici 4: Mostrar les sigles amb les quals es coneixen els cicles formatius.**
- id="DAM"
- id="DAW"
- id="SMX"
- id="IA"

**Exercici 5: Mostrar els anys en què es van publicar els decrets dels cicles formatius.**
- any="2009"
- any="2010"
- any="2008"
- any="2018"

**Exercici 6: Mostrar tota la informació dels cicles formatius de grau mitjà.**
```xml
 <cicle id="SMX">
  <nom>Sistemas Microinformàtics i Xarxes</nom>
  <grau>Mitjà</grau>
  <decret any="2008"/>
</cicle>

```

**Exercici 7: Mostrar els noms dels cicles formatius de grau superior.**
```xml
 <nom>Desenvolupament d'Aplicacions Multiplataforma</nom>   
 <nom>Desenvolupament d'Aplicacions Web</nom>

```

**Exercici 8: Mostrar els noms dels cicles formatius anteriors a 2010 sense etiquetes.**
- Desenvolupament d'Aplicacions Multiplataforma
- Sistemas Microinformàtics i Xarxes

**Exercici 9: Mostrar els noms dels cicles formatius de 2008 o de 2010.**
- Sistemas Microinformàtics i Xarxes
- Desenvolupament d'Aplicacions Web




**Exercici 1: Mostrar el nom de l'institut.**
```xpath
/ies/nom
```
**Exercici 2: Mostrar la pàgina web de l'institut sense etiquetes.**
```xpath
/ies/web/text()
//web/text()
```
**Exercici 3: Mostrar el nom dels cicles formatius sense etiquetes.**
```xpath
/ies/cicles/cicle/nom/text()
//cicle/nom/text()
```
**Exercici 4: Mostrar les sigles amb les quals es coneixen els cicles formatius.**
```xpath
/ies/cicles/cicles/@id
//@id
//cicle/@*
```
**Exercici 5: Mostrar els anys en què es van publicar els decrets dels cicles formatius.**
```xpath
/ies/cicles/cicle/decret/@any
//@any
```
**Exercici 6: Mostrar tota la informació dels cicles formatius de grau mitjà.**
```xpath
/ies/cicles/cicle[grau='Mitjà']
//cicle[grau='Mitjà']
//grau[.='Mitjà']/..
```
**Exercici 7: Mostrar els noms dels cicles formatius de grau superior.**
```xpath
/ies/cicles/cicle[grau='Superior']/nom
//cicle[grau='Superior']/nom
//grau[.='Superior']/../nom

```
**Exercici 8: Mostrar els noms dels cicles formatius anteriors a 2010 sense etiquetes.**
```xpath
/ies/cicles/cicle[decret/@any < 2010]/nom/text()

//@any[.<2010]/../../nom/text()
//decret[@any<2010]/../nom/text()

```
**Exercici 9: Mostrar els noms dels cicles formatius de 2008 o de 2010.**
```xpath
/ies/cicles/cicle[decret/@any = 2008 or decret/@any = 2010]/nom/text()
//nom[../decret/@any=2008 or ../decret/@any=2010]/text()

(//@any[.=2008]|//@any[.=2010])/../../nom/text()
//decret[@any=2008 or @any=2010]/../nom/text()

```