<?php
/*
Plugin Name: Custom Plugin
Description: Customizations for WooCommerce checkout.
Version: 1.0
Author: Tejas
*/

add_action('woocommerce_checkout_shipping', 'custom_checkout_datepicker');

function custom_checkout_datepicker()
{
	echo '<div class="custom-datepicker" style="width:53%;">';
	woocommerce_form_field('pickup_date', array(
		'type' => 'date',
		'class' => array('pickup-date-class form-row-wide'),
		'label' => __('Pickup Date'), 'placeholder' => __('Pickup Date'), 'required' => true,
	), '');
	echo '</div>';
}

add_action('woocommerce_checkout_update_order_meta', 'save_pickup_date');
function save_pickup_date($order_id)
{
	if (isset($_POST['pickup_date']) && !empty($_POST['pickup_date'])) {
		$pickup_date = sanitize_text_field($_POST['pickup_date']);
		update_post_meta($order_id, 'pickup_date', $pickup_date);
	}
}

add_action('woocommerce_thankyou', 'display_pickup_date', 10, 1);
function display_pickup_date($order_id)
{
	$pickup_date = get_post_meta($order_id, 'pickup_date', true);

	if ($pickup_date) {
		echo '<p><strong>Pickup Date:</strong> ' . esc_html($pickup_date) . '</p>';
	} else {
		echo "No pickup";
	}
}


add_action('woocommerce_thankyou', 'send_custom_order_confirmation_email', 10, 1);
function send_custom_order_confirmation_email($order_id)
{
	$address = [
		"Baner Store" => " 202, Second Floor, Akshay Vaibhav, Survey Number:287/8, near Solaris Club, Riviresa Society, Baner, Pune, Maharashtra 411045",
		"Bavdhan Store" => "Ryan International School Bavdhan, Mokai Vasti, Bavdhan, Pune, Maharashtra"
	];

	$order = wc_get_order($order_id);
	$pickup_date = get_post_meta($order_id, 'pickup_date', true);
	$customer_email = $order->get_billing_email();
	$order_total = $order->get_formatted_order_total();


	$shipping_methods = $order->get_shipping_methods();
	$shipping_method_instance = reset($shipping_methods);
	$shipping_zone_name = $shipping_method_instance->get_name();
	$store_address = "";
	switch ($shipping_zone_name) {
		case "Baner Store":
			$store_address = $address["Baner Store"];
			break;
		case "Bavdhan Store":
			$store_address = $address["Bavdhan Store"];
			break;
		default:
			$store_address = "Katraj Pune";
	}
	$subject = 'Order Confirmation';
	$message = '<br>Thank you for your order. <br>Your order Total : ' . $order_total . '<br>Order Pickup Date: ' . $pickup_date . '<br>Store Address: ' . $store_address;
	wp_mail($customer_email, $subject, $message);
	update_post_meta($order_id, 'store_address', $store_address);

	$reminder_date = date('Y-m-d', strtotime($pickup_date . ' -1 day'));
	if (!wp_next_scheduled('send_pickup_reminder_email', array($order_id))) {
		wp_schedule_single_event(strtotime($reminder_date), 'send_pickup_reminder_email', array($order_id));
	}
}
add_action('send_pickup_reminder_email', 'send_pickup_reminder_email_callback');
function send_pickup_reminder_email_callback($order_id)
{
	$order = wc_get_order($order_id);
	$pickup_date = get_post_meta($order_id, 'pickup_date', true);
	$store_address = get_post_meta($order_id, 'store_address', true);
	$customer_email = $order->get_billing_email();

	$subject = 'Reminder: Pickup Date Tomorrow';
	$message = "Hello " . $order->get_billing_first_name() . " ,<br>";
	$message .= "Your pickup date is scheduled for " . $pickup_date . "<br>";
	$message .= "Store Address : " . $store_address . "<br><br>Thank you";
	wp_mail($customer_email, $subject, $message);
}
