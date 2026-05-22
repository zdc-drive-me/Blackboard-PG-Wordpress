<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/cost-page',
            'title' => __( 'Cost of a Website', 'blackboard_by_zdc' ),
            'description' => __( 'Editorial page explaining website pricing, project scales and what to expect.', 'blackboard_by_zdc' ),
            'category' => 'blackboard_blocks',
            'render_template' => 'blocks/cost-page/cost-page.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/cost-page/cost-page.js',
            'attributes' => array(

            ),
            'example' => array(

            ),
            'dynamic' => true,
            'version' => '1.0.122'
        ) );
