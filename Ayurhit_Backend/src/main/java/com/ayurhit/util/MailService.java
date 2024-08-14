package com.ayurhit.util;

import java.time.LocalDateTime;
import java.util.Properties;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class MailService {

	public static void sendEmail(String recipient, String firstName, String lastName) {
		String hospitalName = "Ayurhit Hospitals";
		Properties properties = new Properties();
		properties.put("mail.smtp.host", "smtp.gmail.com");
		properties.put("mail.smtp.port", "587");
		properties.put("mail.smtp.auth", "true");
		properties.put("mail.smtp.starttls.enable", "true");

		Session session = Session.getInstance(properties, new Authenticator() {
			@Override
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("ayurhit.hospital@gmail.com", "ypip tagi ityv zqsj");
			}
		});

		try {
			MimeMessage message = new MimeMessage(session);
			message.setFrom(new InternetAddress("ayurhit.hospital@gmail.com"));
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(recipient));
			message.setSubject("Registration Successful");
			String logo = "<a href=\"https://imgbb.com/\"><img style=\"margin-top: 12px;\" src=\"https://i.ibb.co/whjKXXh/logo.png\"\r\n"
					+ "                        alt=\"logo\" border=\"0\"></a>";
			String emailContent = "<!DOCTYPE html>\n" + "<html lang=\"en\">\n" + "<head>\n"
					+ "    <meta charset=\"UTF-8\">\n"
					+ "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n"
					+ "    <title>Registration Confirmation</title>\n" + "    <style>\n" + "        body {\n"
					+ "            font-family: Arial, sans-serif;\n"
					+ "border: 5px solid #4CAF50; margin-top:10px; margin-bottom:10px;"
					+ "            background-color: #f7f7f7;\n" + "            margin: 0;\n"
					+ "            padding: 0;\n" + "            color: #333;\n" + "        }\n"
					+ "        .email-container {\n" + "            max-width: 600px;\n"
					+ "            margin: 0 auto;\n" + "            background-color: #ffffff;\n"
					+ "            border-radius: 8px;\n" + "            overflow: hidden;\n"
					+ "            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n" + "        }\n"
					+ "        .email-header {\n" + "            background-color: #4CAF50;\n"
					+ "            color: white;\n" + "            padding: 20px;\n"
					+ "            text-align: center;\n" + "        }\n" + "        .email-header img {\n"
					+ "            width: 50px;\n" + "            height: 50px;\n"
					+ "            margin-bottom: 10px;\n" + "        }\n" + "        .email-body {\n"
					+ "            padding: 20px;\n" + "            text-align: center;\n" + "        }\n"
					+ "        .email-body h2 {\n" + "            color: #4CAF50;\n" + "        }\n"
					+ "        .email-body p {\n" + "            margin: 0 0 20px;\n"
					+ "            line-height: 1.6;\n" + "        }\n" + "        .email-footer {\n"
					+ "            background-color: #f1f1f1;\n" + "            padding: 10px;\n"
					+ "            text-align: center;\n" + "            font-size: 12px;\n"
					+ "            color: #777;\n" + "        }\n" + "        .email-footer a {\n"
					+ "            color: #4CAF50;\n" + "            text-decoration: none;\n" + "        }\n"
					+ "    </style>\n" + "</head>\n" + "<body>\n" + "    <div class=\"email-container\">\n"
					+ "        <div class=\"email-header\">\n" + logo + "            <h1>Welcome to " + hospitalName
					+ "</h1>\n" + "        </div>\n" + "        <div class=\"email-body\">\n"
					+ "            <h2>Your Registration is Complete!</h2>\n" + "            <p>Dear " + firstName + " "
					+ lastName + ",</p>\n" + "            <p>\n"
					+ "                We are thrilled to have you join our hospital community. Your account has been successfully created, and\n"
					+ "                you can now access our hospital management system to manage your health records, appointments, and more.\n"
					+ "            </p>\n" + "            <p>\n"
					+ "                <strong>Your Account Details:</strong><br>\n" + "                Username: "
					+ recipient + "<br>\n" + "                Email: " + recipient + "\n" + "            </p>\n"
					+ "            <p>\n"
					+ "                If you have any questions or need further assistance, feel free to contact our support team.\n"
					+ "            </p>\n" + "            <p>\n" + "                Wishing you good health,<br>\n"
					+ "                " + hospitalName + " Team\n" + "            </p>\n" + "        </div>\n"
					+ "        <div class=\"email-footer\">\n" + "            <p>&copy; "
					+ LocalDateTime.now().getYear() + " " + hospitalName + ". All rights reserved.</p>\n"
					+ "            <p>\n"
					+ "                Visit our <a href=\"#\">website</a> | <a href=\"#\">Contact Us</a>\n"
					+ "            </p>\n" + "        </div>\n" + "    </div>\n" + "</body>\n" + "</html>";

			message.setContent(emailContent, "text/html");
			Transport.send(message);
			System.out.println("Email sent successfully!");

		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}
}
