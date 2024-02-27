<?php
function wdm_plugins_options_page()
{
    $options = get_option('wdm_options');
?>
    <div class="wrap">
        <h1><?php esc_html_e('Wdm Plugin Settings', 'wdm-plugins'); ?></h1>
        <form novalidate="novalidate" method="POST" action="admin-post.php">
            <input type="hidden" name="action" value="wdm_save_options" />
            <?php wp_nonce_field('wdm_options_verify') ?>
            <table class="form-table">
                <tbody>
                    <!-- Open Graph Title -->
                    <tr>
                        <th>
                            <label for="wdm_og_title">
                                <?php esc_html_e('Open Graph Title', 'wdm-plugins'); ?>
                            </label>
                        </th>
                        <td>
                            <input name="wdm_og_title" type="text" id="wdm_og_title" class="regular-text" value="<?php echo esc_attr($options['og_title']) ?>" />
                        </td>
                    </tr>
                    <!-- Open Graph Image -->
                    <tr>
                        <th>
                            <label for="wdm_og_image">
                                <?php esc_html_e('Open Graph Image', 'wdm-plugins'); ?>
                            </label>
                        </th>
                        <td>
                            <input type="hidden" name="wdm_og_image" id="wdm_og_image" value="<?php echo esc_attr($options['og_img']) ?>" />
                            <img id="og-img-preview" src="<?php echo esc_attr($options['og_img']) ?>">
                            <a href="#" class="button-primary" id="og-img-btn">
                                Select Image
                            </a>
                        </td>
                    </tr>
                    <!-- Open Graph Description -->
                    <tr>
                        <th>
                            <label for="wdm_og_description">
                                <?php esc_html_e('Open Graph Description', 'wdm-plugins'); ?>
                            </label>
                        </th>
                        <td>
                            <textarea id="wdm_og_description" name="wdm_og_description" class="large-text">
                            <?php echo esc_html($options['og_description']) ?>"
                            </textarea>
                        </td>
                    </tr>
                    <!-- Enable Open Graph -->
                    <tr>
                        <th>
                            <?php esc_html_e('Open Graph', 'wdm-plugins'); ?>
                        </th>
                        <td>
                            <label for="wdm_enable_og">
                                <input name="wdm_enable_og" type="checkbox" id="wdm_enable_og" value="1" <?php checked(1, $options['enable_og']) ?> />
                                <span>Enable</span>
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
            <?php submit_button(); ?>
        </form>
    </div>
<?php
}
