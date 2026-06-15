<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/header-alternative',
            'title' => __( 'Header – Alternative', 'blackboard_by_zdc' ),
            'description' => __( 'Alternative site header.', 'blackboard_by_zdc' ),
            'category' => 'blackboard_blocks',
            'render_template' => 'blocks/header-alternative/header-alternative.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/header-alternative/header-alternative.js',
            'attributes' => array(
                'logo' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/assets/images/blackboard.svg' ), 'size' => '', 'svg' => '', 'alt' => null)
                )
            ),
            'example' => array(
'logo' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/assets/images/blackboard.svg' ), 'size' => '', 'svg' => '', 'alt' => null)
            ),
            'dynamic' => true,
            'version' => '1.0.150'
        ) );
