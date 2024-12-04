const express = require("express");
const { sendMail } = require("./Utils/sendMail");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  })
);

app.post("/submit", async (req, res) => {
 
    const { name, email, message } = req.body;
    // console.log(`Name: ${name}, Email: ${email}`);
    await sendMail(name, email, message);
    return res.status(200).send({ message: "Email Sent!" });
});

// Start the server
app.listen(4000, () => {
  console.log(`Server is running on http://localhost:${4000}`);
});
