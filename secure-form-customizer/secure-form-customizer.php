<?php

/*
Plugin Name: Secure Form Customizer
Description: Adding Custom security to form
Version: 1.0
Author: Wisdmlabs
Author URI: https://wisdmlabs.com
Text Domain : wdm
*/

/* 
This function will create a shortcode for the form , 
so that we can add the shortcode anywhere in our page to view the form 
*/
function wdm_custom_form_shortcode()
{
?>
    <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post">
        <input type="hidden" name="action" value="custom_form_submission">
        <label>Firstname : </label><input type="text" name="firstname" placeholder="Enter your first name">
        <label>Lastname : </label><input type="text" name="lastname" placeholder="Enter your last name">
        <label>Email : </label><input type="email" name="email" placeholder="Enter your email id"><br><br>
        <input type="hidden" name="nonce" value="<?php echo wp_create_nonce('test_nonce'); ?>">
        <button type="submit">Submit</button>
    </form>

<?php
}
add_shortcode('custom_form', 'wdm_custom_form_shortcode');


add_action('admin_post_custom_form_submission', 'wdm_custom_submission');
add_action('admin_post_nopriv_custom_form_submission', 'wdm_custom_submission');
/*
This function will verify the nonce .
If the nonce is set it will show the information on page , 
if it's not set , it will stop the execution with message
*/
function wdm_custom_submission()
{
    if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'test_nonce')) {
        wp_die('Nonce verification failed');
    }
    $firstname = sanitize_text_field($_POST['firstname']);
    $lastname = sanitize_text_field($_POST['lastname']);
    $email = sanitize_email($_POST['email']);
    if (is_email($email)) {
        echo $firstname . "<br>" . $lastname . "<br>" . $email;
    }
}
