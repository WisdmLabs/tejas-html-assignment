<?php

function wdm_rest_api_init()
{
    register_rest_route('wdm/v1', '/signup', ['methods' => 'POST', 'callback' => 'wdm_rest_api_signup_handler', 'permission_callback' => '__return_true']);
}
