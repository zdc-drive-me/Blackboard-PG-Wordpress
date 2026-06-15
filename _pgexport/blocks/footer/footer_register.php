<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/footer',
            'title' => __( 'Footer', 'blackboard_by_zdc' ),
            'description' => __( 'Website footer with links, social media, and copyright information', 'blackboard_by_zdc' ),
            'category' => 'blackboard_blocks',
            'render_template' => 'blocks/footer/footer.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/footer/footer.js',
            'attributes' => array(
                'background_image' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => '', 'size' => '', 'svg' => '', 'alt' => null)
                ),
                'background_color' => array(
                    'type' => array('string', 'null'),
                    'default' => ''
                ),
                'column_title_1' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Contact'
                ),
                'column_title_2' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Links'
                ),
                'column_title_3' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Language'
                ),
                'logo_image' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/assets/images/blackboard.svg' ), 'size' => '', 'svg' => '', 'alt' => null)
                ),
                'address' => array(
                    'type' => array('string', 'null'),
                    'default' => '&copy; <span>2024</span> <span>zdc srl</span>. Via Arcangelo Corelli 34, 20134. Milano.'
                ),
                'vat_number' => array(
                    'type' => array('string', 'null'),
                    'default' => 'IT12874540961&nbsp;'
                )
            ),
            'example' => array(
'background_image' => array('id' => 0, 'url' => '', 'size' => '', 'svg' => '', 'alt' => null), 'background_color' => '', 'column_title_1' => 'Contact', 'column_title_2' => 'Links', 'column_title_3' => 'Language', 'logo_image' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/assets/images/blackboard.svg' ), 'size' => '', 'svg' => '', 'alt' => null), 'address' => '&copy; <span>2024</span> <span>zdc srl</span>. Via Arcangelo Corelli 34, 20134. Milano.', 'vat_number' => 'IT12874540961&nbsp;'
            ),
            'dynamic' => true,
            'version' => '1.0.150'
        ) );
