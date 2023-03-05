<?php	
	if (empty($_POST['name_18487_25652']) && strlen($_POST['name_18487_25652']) == 0 || empty($_POST['email_18487_25652']) && strlen($_POST['email_18487_25652']) == 0 || empty($_POST['message_18487_25652']) && strlen($_POST['message_18487_25652']) == 0)
	{
		return false;
	}
	
	$name_18487_25652 = $_POST['name_18487_25652'];
	$email_18487_25652 = $_POST['email_18487_25652'];
	$message_18487_25652 = $_POST['message_18487_25652'];
	
	$to = 'receiver@yoursite.com'; // Email submissions are sent to this email

	// Create email	
	$email_subject = "Message from a Blocs website.";
	$email_body = "You have received a new message. \n\n".
				  "Name_18487_25652: $name_18487_25652 \nEmail_18487_25652: $email_18487_25652 \nMessage_18487_25652: $message_18487_25652 \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: contact@yoursite.com\r\n";
	$headers .= "Reply-To: $email_18487_25652";	
	
	mail($to,$email_subject,$email_body,$headers); // Post message
	return true;			
?>