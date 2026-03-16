const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Parse the JSON body
  const payload = JSON.parse(event.body);
  const { name, email, message, disclaimer } = payload;

  // Validate form inputs
  if (!name || !email || !message || !disclaimer) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Please fill in all required fields' }),
    };
  }

  // Configure nodemailer with Gmail
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `Nou missatge per Osona Juga de ${name}`,
    replyTo: email,
    text: `
      Nom: ${name}
      Correu: ${email}
      Missatge: ${message}
    `,
    html: `
      <h3>${name} ha contactat amb Osona Juga amb el següent missatge:</h3>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Correu:</strong> ${email}</p>
      <p><strong>Missatge:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email', error: error.message }),
    };
  }
};
