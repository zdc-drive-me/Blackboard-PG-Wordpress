<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/price-factor',
            'title' => __( 'Price Factor', 'blackboard_by_zdc' ),
            'render_template' => 'blocks/price-factor/price-factor.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/price-factor/price-factor.js',
            'attributes' => array(
                'factor_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Structure'
                ),
                'factor_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Information architecture, navigation, content hierarchy and key decisions before design begins.'
                )
            ),
            'example' => array(
'factor_title' => 'Structure', 'factor_description' => 'Information architecture, navigation, content hierarchy and key decisions before design begins.'
            ),
            'dynamic' => true,
            'version' => '1.0.137'
        ) );
