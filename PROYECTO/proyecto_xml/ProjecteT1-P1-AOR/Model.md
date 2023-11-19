# **PROJECTE XML ANDREU ORENGA**

## BIBLIOTECA 
Creacio de una xml y un dtd per a estructurar una biblioteca, que contindra llibres y autors.

### ELEMENTS Y ATRIBUTS
#### Biblioteca
*El element arrel sera biblioteca i contindra tota la resta de elemnts del xml.*

#### Libro
*Dins de l'element "Libro" tindrem cuatre elements que el descriuran:*
- *titulo* (contindra text amb el nom del titul del llibre)
- *año de publicacion* (contindra text que indicara el any que ha sigut publicat)
- *genero* (indicara mijançant un atribut el genere al que perteneix el llibre, aquest atribut sera un ID per a relacionar tots els llibres perteneixents al mateix genere, en el cas de existir el genere pasara a ser un IDREF amb el ID del genere)
- *editorial* (ens indicara mijançant els elements de text el nom de la editorial que he publicat el llibre, en un atribut opcional podra tindre una url a la pagina web de la editorial)

*"Libro" tambe contindra els seguents atributs:*
- *autor* (este atribut ens permitira mijançant un IDREF vincular cada llibre amb el ID del del seu autro)
- *portada* (el atribut portada contindra un enllaç a la imatge de la portada del llibre al que ens referim)
- *coleccion* (este atribut ens dira si el llibre perteneix a una coleccio o si es autocunclusiu, podrem elegir entre SI o NO sent NO el valor per defecte)
- *ref* (en aqueste atribut es podra añadir un ID del llibre que estara relacionat en el element biliografia del autor mijançant un IDREF)

#### Autor
*Dins de l'element "Autor" tindrem cuatre elements que el descriuran:
- *nombre* (contindra valors de text que ens indicaran el nom del autor)
- *nacionalidad* (contindra valors de text que ens indicaran la nacionalitat del autor)
- *fecha_nacimiento* (contindra valors de text que indicaran el dia mes i any en el que va naixer el autor)
- *bibliografia* (seera un element biut que mijançant un atribut IDREFS en indicaran els IDs dels llibres que ha escrit el autor al que ens referim)

*"Autor" tambe contindra els seguents atributs:*
- *foto* (aquest atribut contindra un enllaç a una foto del autor)
- *id* (aquest atribut sera el ID del autor que es referenciara en el IDREF de cada llibre que ha escrit)


    