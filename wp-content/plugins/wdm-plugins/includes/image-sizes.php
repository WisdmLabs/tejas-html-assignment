<?php

function wdm_custom_image_sizes($sizes)
{
    return array_merge($sizes, [
        'teamMember' => __('Team Member', "wdm-plugins")
    ]);
}
