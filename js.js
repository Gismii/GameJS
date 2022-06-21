
<html>
<head>
    <title>Exemplo Ajax só com JavaScript</title>
</head>
<body>
    <form name='myForm'>
        Trocar ano: <input type='text' id='ano-doc' />
        <input type='button' onclick='ajaxFunction()' value='Ajax!'/>
    </form>
    <div id='ajaxDiv'>Resultado do Ajax</div>

    <script language="javascript" type="text/javascript">
    /**
     * Inspirado em http://www.tutorialspoint.com/php/php_and_ajax.htm
     *
     * @param iniciar Boolean Usando para inicio da página ou envio do formulario
     */
    function ajaxFunction( iniciar ) {
        var ajaxRequest;
        try {
            // Opera 8.0+, Firefox, Safari
            ajaxRequest = new XMLHttpRequest();
        } catch (e) {
            // Internet Explorer Browsers
            try {
                ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {
                    // Não tem jeito
                    alert( 'Seu browser quebrou!' );
                    return false;
                }
            }
        }
        // Listener que recebe retorno do Ajax
        ajaxRequest.onreadystatechange = function() {
            if( ajaxRequest.readyState == 4 ) {
                var ajaxDisplay = document.getElementById('ajaxDiv');
                ajaxDisplay.innerHTML = ajaxRequest.responseText;
            }
        }

        if( iniciar ) {
            ajaxRequest.open( "GET", "ajax-exemplo.php" , true );
            ajaxRequest.send( null ); 
        } else {
             // Capturar valores e fazer chamada Ajax
            var ano_doc = document.getElementById('ano-doc').value;
            var queryString = "?ano=" + ano_doc ;
            ajaxRequest.open( "GET", "ajax-exemplo.php" + queryString, true );
            ajaxRequest.send( null ); 
       }
    }

    // Roda script ao carregar a página
    ajaxFunction(true);
    </script>        
</body>
</html>