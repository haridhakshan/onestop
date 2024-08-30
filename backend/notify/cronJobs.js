const cron = require('node-cron');
const Patent = require('../models/Patent');
const nodemailer = require('nodemailer');

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',  // replace with your email
        pass: 'your-email-password'    // replace with your email password
    }
});

// Schedule the task to run daily at midnight
cron.schedule('0 0 * * *', async () => {
    try {
        const today = new Date();
        const nextWeek = new Date(today);
        nextWeek.setDate(today.getDate() + 7);

        const patents = await Patent.findAll({
            where: {
                renewalDate: {
                    [Op.between]: [today, nextWeek]
                }
            }
        });

        patents.forEach((patent) => {
            // Send an email reminder
            const mailOptions = {
                from: 'your-email@gmail.com',
                to: patent.email,
                subject: `Reminder: Patent Renewal Due for ${patent.title}`,
                text: `Your patent titled "${patent.title}" is due for renewal on ${patent.renewalDate}. Please ensure it is renewed on time to avoid any issues.`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('Error sending email:', error);
                } else {
                    console.log('Email sent:', info.response);
                }
            });
        });
    } catch (err) {
        console.log('Error running scheduled job:', err.message);
    }
});