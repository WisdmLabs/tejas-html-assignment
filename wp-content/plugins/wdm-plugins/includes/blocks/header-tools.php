<?php

function wdm_header_tools_render_cb($attr)
{
    $user = wp_get_current_user();
    $name = $user->exists() ? $user->user_login : 'Signin';
    $openClass = $user->exists() ? '' : 'open-modal';
    ob_start();
?>
    <div class="wp-block-wdm-plugins-header-tools">
        <?php
        if ($attr['showAuth']) {
        ?>
            <a class="signin-link <?php echo $openClass; ?>" href="#">
                <div class="signin-icon">
                    <i class="bi bi-person-circle"></i>
                </div>
                <div class="signin-text">
                    <small>Hello, <?php echo $name ?></small>
                    My Account
                </div>
            </a>
        <?php
        }
        ?>

    </div>
<?php

    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}
