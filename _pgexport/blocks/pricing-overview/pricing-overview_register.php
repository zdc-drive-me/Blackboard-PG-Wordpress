<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/pricing-overview',
            'title' => __( 'Pricing Overview', 'blackboard_by_zdc' ),
            'description' => __( 'Starting price points for different project scales', 'blackboard_by_zdc' ),
            'render_template' => 'blocks/pricing-overview/pricing-overview.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/pricing-overview/pricing-overview.js',
            'attributes' => array(
                'section_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A useful starting point <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'intro_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Projects vary in scope. Each follows the same approach &#8212; structure first, then design and execution &#8212; adapted to scale and complexity.'
                ),
                'tier_1_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Foundation'
                ),
                'tier_1_prefix' => array(
                    'type' => array('string', 'null'),
                    'default' => 'From'
                ),
                'tier_1_price' => array(
                    'type' => array('string', 'null'),
                    'default' => '&euro;3,500'
                ),
                'tier_1_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A focused build with essential structure, custom design and core functionality.'
                ),
                'tier_2_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Structured'
                ),
                'tier_2_prefix' => array(
                    'type' => array('string', 'null'),
                    'default' => 'From'
                ),
                'tier_2_price' => array(
                    'type' => array('string', 'null'),
                    'default' => '&euro;4,500'
                ),
                'tier_2_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A content-driven system with expanded pages, flexible layouts and integrated features.'
                ),
                'tier_3_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Extended'
                ),
                'tier_3_prefix' => array(
                    'type' => array('string', 'null'),
                    'default' => 'From'
                ),
                'tier_3_price' => array(
                    'type' => array('string', 'null'),
                    'default' => '&euro;7,000'
                ),
                'tier_3_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A more complex system with custom builds, integrations and advanced performance.'
                ),
                'footnote' => array(
                    'type' => array('string', 'null'),
                    'default' => 'These are starting points, not fixed packages. The right scale is defined after understanding the project.'
                )
            ),
            'example' => array(
'section_title' => 'A useful starting point <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'intro_text' => 'Projects vary in scope. Each follows the same approach &#8212; structure first, then design and execution &#8212; adapted to scale and complexity.', 'tier_1_label' => 'Foundation', 'tier_1_prefix' => 'From', 'tier_1_price' => '&euro;3,500', 'tier_1_description' => 'A focused build with essential structure, custom design and core functionality.', 'tier_2_label' => 'Structured', 'tier_2_prefix' => 'From', 'tier_2_price' => '&euro;4,500', 'tier_2_description' => 'A content-driven system with expanded pages, flexible layouts and integrated features.', 'tier_3_label' => 'Extended', 'tier_3_prefix' => 'From', 'tier_3_price' => '&euro;7,000', 'tier_3_description' => 'A more complex system with custom builds, integrations and advanced performance.', 'footnote' => 'These are starting points, not fixed packages. The right scale is defined after understanding the project.'
            ),
            'dynamic' => true,
            'version' => '1.0.139'
        ) );
