<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/separate-cost-item',
            'title' => __( 'Separate Cost Item', 'blackboard_by_zdc' ),
            'render_template' => 'blocks/separate-cost-item/separate-cost-item.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/separate-cost-item/separate-cost-item.js',
            'attributes' => array(
                'item_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Domain'
                ),
                'item_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Usually a small annual cost, but ownership and renewal should be clear from the start.'
                )
            ),
            'example' => array(
'item_title' => 'Domain', 'item_description' => 'Usually a small annual cost, but ownership and renewal should be clear from the start.'
            ),
            'dynamic' => true,
            'version' => '1.0.137'
        ) );
