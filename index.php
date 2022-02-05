<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Cronometro</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <h1>Crônometro utilizando javaScript</h1>
            <div class="col-1">
                <span class="span" id="segundos">00</span>:<span id="dez">00</span>
                <div class="col-2">
                    <button class="btnStart" id="btnStart">Start</button>
                    <button class="btnStop" id="btnStop">Stop</button>
                    <button class="btnReset" id="btnReset">Reset</button>
                </div>
            </div>
        </div>
    </div>
    <script src="scripts.js"></script>
</body>
</html>