<?php
 $to = "bakery.marlie@gmail.com" ;
 $from = $_REQUEST['Email'] ;
 $name = $_REQUEST['Name'] ;
 $headers = "From: $from";
 $subject = "Bakery request";

 $selectedProducts  = 'None';
 if(isset($_POST['waffles']) && is_array($_POST['waffles']) && count($_POST['waffles']) > 0){
     $selectedProducts = implode(', ', $_POST['waffles']);
 }

 $body .= 'Selected Products: ' . $selectedProducts;

 $headers2 = "From: bakery.marlie@gmail.com";
 $subject2 = "Thank you for placing your order";
 $autoreply = "Your order has been received. We will get in touch soon and let you know at what time your order is ready for pick up.";

 if($from == '') {print "You have not entered an email, please go back and try again";}
 else {
 if($name == '') {print "You have not entered a name, please go back and try again";}
 else {
 $send = mail($to, $subject, $body, $headers);
 $send2 = mail($from, $subject2, $autoreply, $headers2);
 if($send)
 {print "Success";}
 else
 {print "We encountered an error sending your mail, please try again"; }
 }
}
 ?>
