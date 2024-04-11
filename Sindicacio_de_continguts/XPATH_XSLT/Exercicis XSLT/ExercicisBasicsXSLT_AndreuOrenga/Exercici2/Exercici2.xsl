<!-- Arxiu XSLT -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <!-- Plantilla per a transformar l'element 'civilitzacio' -->
    <xsl:template match="civilitzacio">

        <div class="civilitzacio">
            <h2><xsl:value-of select="nom"/></h2>
            <p><strong>Ciutat:</strong><xsl:value-of select="ciutat"/></p>
            <p><strong>Lider:</strong><xsl:value-of select="lider"/></p>

        </div>

    </xsl:template>

    <!-- Plantilla per a transformar l'element root 'civilizacions' -->
    <xsl:template match="civilizacions">

        <html>
            <head>
                <title>Civilitzacions Antigues</title>
            </head>
            <body>
                <h1>Llista de Civilitzacions Antigues</h1>
                <xsl:apply-templates select="civilitzacio"/>
            </body>
        </html>

    </xsl:template>

</xsl:stylesheet>
