<?php
function wdm_save_cuisine_meta($termID)
{
    if (!isset($_POST['wdm_more_info_url'])) {
        return;
    }

    update_term_meta($termID, 'more_info_url', $_POST['wdm_more_info_url']);
}
