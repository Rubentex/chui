var direcciones = new Array("http://www.terra.es", "http://www.ozu.es", "http://www.hispavista.com", "http://www.lycos.com", "http://www.yahoo.es", "http://www.altavista.com", "http://www.hotbot.com", "http://www.buscopio.com", "http://www.sol.es", "http://www.excite.com", "http://www.elbuscador.com", "http://www.ya.com", "http://www.wanadoo.es", "http://www.buscador.com.mx", "http://www.msn.com", "http://www.astrolabio.net")
    function enlaceAleatorio(){
       aleat = Math.random() * direcciones.length
       aleat = Math.floor(aleat)
       window.location=direcciones[aleat]
    }