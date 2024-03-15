<?php
/*
Plugin Name: Custom Plugin
Description: Customizations for WooCommerce checkout.
Version: 1.0
Author: Tejas
*/

add_action('woocommerce_checkout_after_customer_details', 'custom_checkout_datepicker');

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
		$woo_session = WC()->session;
		$woo_session->set('pickup_date', sanitize_text_field($_POST['pickup_date']));
	}
}

add_action('woocommerce_thankyou', 'display_pickup_date', 10, 1);
function display_pickup_date($order_id)
{
	$woo_session = WC()->session;
	$pickup_date = $woo_session->get('pickup_date');

	if ($pickup_date) {
		echo '<p><strong>Pickup Date:</strong> ' . esc_html($pickup_date) . '</p>';
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
	$woo_session = WC()->session;
	$pickup_date = $woo_session->get('pickup_date');
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
}
