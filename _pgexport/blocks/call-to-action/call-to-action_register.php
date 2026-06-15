<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/call-to-action',
            'title' => __( 'Call to Action', 'blackboard_by_zdc' ),
            'description' => __( 'Final call to action section with contact link', 'blackboard_by_zdc' ),
            'render_template' => 'blocks/call-to-action/call-to-action.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/call-to-action/call-to-action.js',
            'attributes' => array(
                'title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Need to understand the right scale?'
                ),
                'description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'The starting points above are useful references, but the right budget depends on what the website needs to hold, communicate and support.'
                ),
                'secondary_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Send us a few details and we will help clarify the right scale.'
                ),
                'cta_link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => 'mailto:blackboard@zdcstudio.com?subject=Start%20a%20Project', 'post_type' => '', 'title' => '')
                ),
                'cta_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Each project starts with a short exchange to clarify scope, direction and complexity.'
                ),
                'cta_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Start a project'
                ),
                'services_link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => 'services.html', 'post_type' => '', 'title' => '')
                ),
                'services_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'View Services'
                )
            ),
            'example' => array(
'title' => 'Need to understand the right scale?', 'description' => 'The starting points above are useful references, but the right budget depends on what the website needs to hold, communicate and support.', 'secondary_description' => 'Send us a few details and we will help clarify the right scale.', 'cta_link' => array('post_id' => 0, 'url' => 'mailto:blackboard@zdcstudio.com?subject=Start%20a%20Project', 'post_type' => '', 'title' => ''), 'cta_description' => 'Each project starts with a short exchange to clarify scope, direction and complexity.', 'cta_label' => 'Start a project', 'services_link' => array('post_id' => 0, 'url' => 'services.html', 'post_type' => '', 'title' => ''), 'services_label' => 'View Services'
            ),
            'dynamic' => true,
            'version' => '1.0.139'
        ) );
