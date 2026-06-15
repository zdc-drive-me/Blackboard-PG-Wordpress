<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/separate-costs',
            'title' => __( 'Separate Costs', 'blackboard_by_zdc' ),
            'description' => __( 'Items that should be clarified separately from the website build', 'blackboard_by_zdc' ),
            'render_template' => 'blocks/separate-costs/separate-costs.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/separate-costs/separate-costs.js',
            'attributes' => array(
                'section_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'What should be clarified separately <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'intro_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Some costs are not always part of the initial website build and should be made explicit before starting.'
                ),
                'cost_1_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Domain'
                ),
                'cost_1_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Usually a small annual cost, but ownership and renewal should be clear from the start.'
                ),
                'cost_2_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Hosting'
                ),
                'cost_2_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Depends on performance, traffic, security and management needs. Can be self-managed or included in a care plan.'
                ),
                'cost_3_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Maintenance'
                ),
                'cost_3_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Updates, monitoring, backups and technical care after launch. Offered as a separate care arrangement.'
                ),
                'cost_4_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Content production'
                ),
                'cost_4_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Copywriting, photography, image editing, translations or editorial planning are separate from the build.'
                ),
                'cost_5_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'SEO strategy'
                ),
                'cost_5_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Search-ready foundations can be included, but ongoing SEO work is a separate and ongoing activity.'
                ),
                'cost_6_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Marketing'
                ),
                'cost_6_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Campaigns, ads, email flows and content distribution are distinct from building the website itself.'
                )
            ),
            'example' => array(
'section_title' => 'What should be clarified separately <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'intro_text' => 'Some costs are not always part of the initial website build and should be made explicit before starting.', 'cost_1_title' => 'Domain', 'cost_1_description' => 'Usually a small annual cost, but ownership and renewal should be clear from the start.', 'cost_2_title' => 'Hosting', 'cost_2_description' => 'Depends on performance, traffic, security and management needs. Can be self-managed or included in a care plan.', 'cost_3_title' => 'Maintenance', 'cost_3_description' => 'Updates, monitoring, backups and technical care after launch. Offered as a separate care arrangement.', 'cost_4_title' => 'Content production', 'cost_4_description' => 'Copywriting, photography, image editing, translations or editorial planning are separate from the build.', 'cost_5_title' => 'SEO strategy', 'cost_5_description' => 'Search-ready foundations can be included, but ongoing SEO work is a separate and ongoing activity.', 'cost_6_title' => 'Marketing', 'cost_6_description' => 'Campaigns, ads, email flows and content distribution are distinct from building the website itself.'
            ),
            'dynamic' => true,
            'version' => '1.0.139'
        ) );
