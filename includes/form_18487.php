<?php	
	if (empty($_POST['name_18487']) && strlen($_POST['name_18487']) == 0 || empty($_POST['email_18487']) && strlen($_POST['email_18487']) == 0 || empty($_POST['message_18487']) && strlen($_POST['message_18487']) == 0)
	{
		return false;
	}
	
	$name_18487 = $_POST['name_18487'];
	$email_18487 = $_POST['email_18487'];
	$message_18487 = $_POST['message_18487'];
	
	$to = 'receiver@yoursite.com'; // Email submissions are sent to this email

	// Create email	
	$email_subject = "Message from a Blocs website.";
	$email_body = "You have received a new message. \n\n".
				  "Name_18487: $name_18487 \nEmail_18487: $email_18487 \nMessage_18487: $message_18487 \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: contact@yoursite.com\r\n";
	$headers .= "Reply-To: $email_18487";	
	
	mail($to,$email_subject,$email_body,$headers); // Post message
	return true;			
?>