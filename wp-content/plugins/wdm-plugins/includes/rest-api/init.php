<?php

function wdm_rest_api_init()
{
    register_rest_route('wdm/v1', '/signup', [
        'methods' => WP_REST_Server::CREATABLE,
        'callback' => 'wdm_rest_api_signup_handler',
        'permission_callback' => '__return_true'
    ]);

    register_rest_route('wdm/v1', '/signin', [
        'methods' => WP_REST_Server::EDITABLE,
        'callback' => 'wdm_rest_api_signin_handler',
        'permission_callback' => '__return_true'
    ]);
}
