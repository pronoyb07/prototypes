const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Custom function to convert strings to snake case with the first letter in uppercase
function toSnakeCase(str) {
    return str.replace(/[-\s]/g, '_').replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}

// Custom function to convert values to snake case with the first letter in uppercase
function valueToSnakeCase(value) {
    const words = value.split(/[-_\s]/);
    const snakeCaseValue = words.map((word, index) => {
        if (index === 0) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return word.toLowerCase();
    }).join('_');
    return snakeCaseValue;
}

// Custom middleware to convert JSON values to snake case
app.use((req, res, next) => {
    function convertKeysAndValues(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && (key === 'type' || key === 'status') && typeof obj[key] === 'string') {
                obj[key] = valueToSnakeCase(toSnakeCase(obj[key]));
            } else if (typeof obj[key] === 'object') {
                convertKeysAndValues(obj[key]);
            }
        }
    }

    convertKeysAndValues(req.body);
    next();
});

// Example route to handle the incoming JSON
app.post('/process', (req, res) => {
    res.json(req.body);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});