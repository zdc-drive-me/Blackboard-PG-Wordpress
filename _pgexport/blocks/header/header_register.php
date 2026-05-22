<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/header',
            'title' => __( 'Header', 'blackboard_by_zdc' ),
            'description' => __( 'Main site header with logo', 'blackboard_by_zdc' ),
            'category' => 'blackboard_blocks',
            'enqueue_script' => get_template_directory_uri() . '/assets/js/header-anim.js',
            'render_template' => 'blocks/header/header.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/header/header.js',
            'attributes' => array(
                'logo' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/assets/images/blackboard.svg' ), 'size' => '', 'svg' => '', 'alt' => 'Blackboard Digital Studio logo')
                )
            ),
            'example' => array(
'logo' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/assets/images/blackboard.svg' ), 'size' => '', 'svg' => '', 'alt' => 'Blackboard Digital Studio logo')
            ),
            'dynamic' => true,
            'version' => '1.0.122'
        ) );
