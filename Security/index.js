const express = require('express');
const app = express();
const port = 3000;


app.use((req, res, next) =>{
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self';" + 
        "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;"   // here we allow the specific script to be loaded from the unsecure.com
        // we cannot see the nonce at the browser, it is only for the server to identify the script
    )
    next();

})
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(___dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
