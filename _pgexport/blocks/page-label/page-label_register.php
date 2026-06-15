<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/page-label',
            'title' => __( 'Page Label', 'blackboard_by_zdc' ),
            'description' => __( 'Top label bar with page topic and live clock', 'blackboard_by_zdc' ),
            'render_template' => 'blocks/page-label/page-label.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/page-label/page-label.js',
            'attributes' => array(
                'label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'How much does a website cost <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                )
            ),
            'example' => array(
'label' => 'How much does a website cost <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
            ),
            'dynamic' => true,
            'version' => '1.0.139'
        ) );
