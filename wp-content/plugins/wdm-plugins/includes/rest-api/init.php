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

  register_rest_route('wdm/v1', '/rate', [
    'methods' => WP_REST_Server::CREATABLE,
    'callback' => 'wdm_rest_api_add_rating_handler',
    'permission_callback' => 'is_user_logged_in'
  ]);
  register_rest_route('wdm/v1', '/daily-recipe', [
    'methods' => WP_REST_Server::READABLE,
    'callback' => 'wdm_rest_api_daily_recipe_handler',
    'permission_callback' => '__return_true'
  ]);
}
