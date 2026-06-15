<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/pricing-tier',
            'title' => __( 'Pricing Tier', 'blackboard_by_zdc' ),
            'render_template' => 'blocks/pricing-tier/pricing-tier.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/pricing-tier/pricing-tier.js',
            'attributes' => array(
                'tier_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Foundation'
                ),
                'price_prefix' => array(
                    'type' => array('string', 'null'),
                    'default' => 'From'
                ),
                'price' => array(
                    'type' => array('string', 'null'),
                    'default' => '&euro;3,500'
                ),
                'description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A focused build with essential structure, custom design and core functionality.'
                )
            ),
            'example' => array(
'tier_label' => 'Foundation', 'price_prefix' => 'From', 'price' => '&euro;3,500', 'description' => 'A focused build with essential structure, custom design and core functionality.'
            ),
            'dynamic' => true,
            'version' => '1.0.137'
        ) );
