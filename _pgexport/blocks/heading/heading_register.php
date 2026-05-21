<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/heading',
            'title' => __( 'Heading', 'blackboard_by_zdc' ),
            'description' => __( 'A standalone heading block', 'blackboard_by_zdc' ),
            'render_template' => 'blocks/heading/heading.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/heading/heading.js',
            'attributes' => array(
                'heading_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'What gets built depends on the clarity of the decisions behind it.'
                )
            ),
            'example' => array(
'heading_text' => 'What gets built depends on the clarity of the decisions behind it.'
            ),
            'dynamic' => true,
            'version' => '1.0.99'
        ) );
