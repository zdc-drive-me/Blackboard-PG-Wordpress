<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/text-link',
            'title' => __( 'Text Link', 'blackboard_by_zdc' ),
            'description' => __( 'A simple text link', 'blackboard_by_zdc' ),
            'render_template' => 'blocks/text-link/text-link.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/text-link/text-link.js',
            'attributes' => array(
                'link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'How much does a website cost'
                )
            ),
            'example' => array(
'link' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'label' => 'How much does a website cost'
            ),
            'dynamic' => true,
            'version' => '1.0.101'
        ) );
