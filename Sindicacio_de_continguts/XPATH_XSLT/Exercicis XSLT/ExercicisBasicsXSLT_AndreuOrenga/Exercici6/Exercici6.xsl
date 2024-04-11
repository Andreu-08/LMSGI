<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:param name="colorFons" select="'#9db0ce'"/>

    <xsl:template match="civilitzacio">
        <div class="civilitzacio">
            <h2><xsl:value-of select="nom"/></h2>
            <xsl:apply-templates select="ciutat"/>
            <xsl:apply-templates select="lider"/>
            <h4>Contribucions</h4>
            <ul>
                <xsl:apply-templates select="contribucions/contribucio"/>
            </ul>
        </div>
    </xsl:template>

    <xsl:template match="contribucio">
        <li><xsl:value-of select="."/></li>
    </xsl:template>

    <xsl:template match="ciutat">
        <p><strong>Ciutat:</strong> <xsl:value-of select="."/></p>
    </xsl:template>

    <xsl:template match="lider">
        <p><strong>Lider:</strong> <xsl:value-of select="."/></p>
    </xsl:template>

    <xsl:template match="civilizacions">
        <html>
            <head>
                <title>Civilitzacions Antigues</title>
            </head>
            <body style="background-color:{$colorFons};">
                <h1>Llista de Civilitzacions Antigues</h1>
                <!-- Utilizando xsl:if para mostrar la civilización con año "500 aC" y su líder -->
                <xsl:for-each select="civilitzacio">
                    <xsl:if test="@any = '500 aC'">
                        <div>
                            <h2><xsl:value-of select="nom"/></h2>
                            <p><strong>Ciutat:</strong> <xsl:value-of select="ciutat"/></p>
                            <p><strong>Lider:</strong> <xsl:value-of select="lider"/></p>
                        </div>
                    </xsl:if>
                </xsl:for-each>

                <!-- Utilizando xsl:choose para mostrar la civilización con año "1500 aC" y la ciudad, y la civilización con año "300 aC" y su líder -->
                <xsl:for-each select="civilitzacio">
                    <xsl:choose>
                        <!-- Civilització amb l'any = "1500 aC" i la ciutat -->
                        <xsl:when test="@any = '1500 aC'">
                            <div>
                                <h2><xsl:value-of select="nom"/></h2>
                                <p><strong>Ciutat:</strong> <xsl:value-of select="ciutat"/></p>
                            </div>
                        </xsl:when>

                        <!-- Civilització amb l'any = "300 aC" i el seu lider -->
                        <xsl:when test="@any = '300 aC'">
                            <div>
                                <h2><xsl:value-of select="nom"/></h2>
                                <p><strong>Lider:</strong> <xsl:value-of select="lider"/></p>
                            </div>
                        </xsl:when>

                    </xsl:choose>
                </xsl:for-each>

            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>