<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/project',
            'title' => __( 'Project Video Block', 'blackboard_by_zdc' ),
            'category' => 'blackboard_blocks',
            'render_template' => 'blocks/project/project.php',
            'supports' => array( 'spacing' => array( 'margin' => true ) ),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/project/project.js',
            'attributes' => array(
                'show_divider' => array(
                    'type' => array('string', 'null'),
                    'default' => 'true'
                ),
                'video_url' => array(
                    'type' => array('string', 'null'),
                    'default' => 'https://stream.mux.com/jd6YK1YimCu02u7Ebpu1xHp4c2iNESUbui00YGfGmsy7E.m3u8'
                ),
                'client_name' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Dunes Studios'
                ),
                'project_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'This knitwear-focused fashion brand, known for its minimal and refined style, asked us to create a platform that reflects the lightness and clarity that define their design aesthetic.'
                ),
                'services' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Web Design + Site Coding + Custom WordPress Theme'
                )
            ),
            'example' => array(
'show_divider' => '', 'video_url' => 'https://stream.mux.com/jd6YK1YimCu02u7Ebpu1xHp4c2iNESUbui00YGfGmsy7E.m3u8', 'client_name' => 'Dunes Studios', 'project_description' => 'This knitwear-focused fashion brand, known for its minimal and refined style, asked us to create a platform that reflects the lightness and clarity that define their design aesthetic.', 'services' => 'Web Design + Site Coding + Custom WordPress Theme'
            ),
            'dynamic' => true,
            'version' => '1.0.41'
        ) );
