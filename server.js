const express = require("express");
const app = express();

// Serve static files from the "public" directory
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
