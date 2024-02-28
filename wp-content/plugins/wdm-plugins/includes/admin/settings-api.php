<?php
function wdm_settings_api()
{
    register_setting('wdm_options_group', 'wdm_options');
    add_settings_section(
        'wdm_options_section',
        __('WDM Settings', 'wdm-plugins'),
        'wdm_options_section_cb',
        'wdm-options-page'
    );
    add_settings_field(
        'og_title_input',
        __('Open Graph Title'),
        'og_title_input_cb',
        'wdm-options-page',
        'wdm_options_section'
    );
    add_settings_field(
        'og_image_input',
        __('Open Graph Image'),
        'og_image_input_cb',
        'wdm-options-page',
        'wdm_options_section'
    );
    add_settings_field(
        'og_description_input',
        __('Open Description Title'),
        'og_description_input_cb',
        'wdm-options-page',
        'wdm_options_section'
    );
    add_settings_field(
        'og_enable_input',
        __('Open Graph Enable'),
        'og_enable_input_cb',
        'wdm-options-page',
        'wdm_options_section'
    );
}
function og_title_input_cb()
{
    $options = get_option('wdm_options');
?>
    <input class="regular-text" type="text" name="wdm_options[og_title]" value="<?php echo esc_attr($options['og_title']) ?>" />
<?php
}

function wdm_options_section_cb()
{
?>
    <p>An alternative form for updating options with settings api</p>
<?php
}
function og_image_input_cb()
{
    $options = get_option('wdm_options');
?>
    <input type="hidden" name="wdm_options[og_img]" id="wdm_og_image" value="<?php echo esc_attr($options['og_img']); ?>">
    <img src="<?php echo esc_attr($options['og_img']); ?>" id="og-img-preview">
    <a href="#" class="button-primary" id="og-img-btn">
        Select Image
    </a>
<?php
}

function og_description_input_cb()
{
    $options = get_option('wdm_options');
?>
    <textarea name="wdm_options[og_description]" class="large-text"><?php echo esc_html($options['og_description']); ?></textarea>
<?php
}

function og_enable_input_cb()
{
    $options = get_option('wdm_options');
?>
    <label for="wdm_enable_og">
        <input name="wdm_options[enable_og]" type="checkbox" id="wdm_enable_og" value="1" <?php checked('1', $options['enable_og']); ?> />
        <span>Enable</span>
    </label>
<?php
}
