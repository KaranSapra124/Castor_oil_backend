const nodemailer = require("nodemailer");
exports.sendMail = async (name, email, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use a service like Gmail, Outlook, or custom SMTP
    auth: {
      user: "chetan.webtakersit@gmail.com", // Your email address
      pass: "heql gyto azmh vlgp", // Your email password (or app-specific password)
    },
  });
  const mailOptions = {
    from: "chetan.webtakersit@gmail.com",
    to: "Bestcreativeyouth@gmail.com",
    subject: "Test Mail",
    text: "Hello, this is a test mail!",
    html:`<table style="width: 100%; max-width: 600px; margin: 20px auto; border-collapse: collapse; background-color: #f9f9f9; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 8px;">
  <tr>
    <th style="font-size: 2rem; color: #333; font-weight: bold; padding: 10px 20px; text-align: left; border-top-left-radius: 8px;">Name</th>
    <td style="font-size: 1.5rem; color: #333; padding: 10px 20px;">${name}</td>
  </tr>
  <tr>
    <th style="font-size: 1rem; color: #555; font-weight: normal; padding: 10px 20px;">Email</th>
    <td style="font-size: 1rem; color: #555; padding: 10px 20px; font-style: italic;">${email}</td>
  </tr>
  <tr>
    <th style="font-size: 1.25rem; color: #444; font-weight: normal; padding: 10px 20px; border-bottom-left-radius: 8px;">Message</th>
    <td style="font-size: 1.25rem; color: #444; line-height: 1.6; padding: 10px 20px; border-bottom-right-radius: 8px; border-left: 4px solid #007bff; padding-left: 10px;">${message}</td>
  </tr>
</table>
`,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("Error occurred:", err);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
