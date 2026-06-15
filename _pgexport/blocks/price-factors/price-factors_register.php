<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/price-factors',
            'title' => __( 'Price Factors', 'blackboard_by_zdc' ),
            'description' => __( 'Explains why website prices vary with detailed factor breakdowns', 'blackboard_by_zdc' ),
            'render_template' => 'blocks/price-factors/price-factors.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/price-factors/price-factors.js',
            'attributes' => array(
                'section_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Why prices vary so much <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'intro_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'The cost of a website changes because the work behind it changes. Two websites may look similar from the outside, but they can be completely different in structure, flexibility, speed, content logic and long-term maintainability.'
                ),
                'factor_1_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Structure'
                ),
                'factor_1_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Information architecture, navigation, content hierarchy and key decisions before design begins.'
                ),
                'factor_2_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Design'
                ),
                'factor_2_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Custom layout, visual system, responsive behaviour, interaction details and consistency across pages.'
                ),
                'factor_3_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Development'
                ),
                'factor_3_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Front-end quality, CMS implementation, performance, accessibility, technical precision and future editing logic.'
                ),
                'factor_4_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Content'
                ),
                'factor_4_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Number of pages, content preparation, editorial structure, blog or journal systems, multilingual content and media management.'
                ),
                'factor_5_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Integrations'
                ),
                'factor_5_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Forms, newsletter, analytics, CRM, e-commerce, booking systems, third-party tools or custom workflows.'
                ),
                'factor_6_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Performance and SEO foundations'
                ),
                'factor_6_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Speed, technical structure, metadata, indexability, clean markup and search visibility foundations.'
                ),
                'factor_7_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Care and maintenance'
                ),
                'factor_7_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Hosting, updates, backup, monitoring, adjustments and ongoing support after launch.'
                )
            ),
            'example' => array(
'section_title' => 'Why prices vary so much <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'intro_text' => 'The cost of a website changes because the work behind it changes. Two websites may look similar from the outside, but they can be completely different in structure, flexibility, speed, content logic and long-term maintainability.', 'factor_1_title' => 'Structure', 'factor_1_description' => 'Information architecture, navigation, content hierarchy and key decisions before design begins.', 'factor_2_title' => 'Design', 'factor_2_description' => 'Custom layout, visual system, responsive behaviour, interaction details and consistency across pages.', 'factor_3_title' => 'Development', 'factor_3_description' => 'Front-end quality, CMS implementation, performance, accessibility, technical precision and future editing logic.', 'factor_4_title' => 'Content', 'factor_4_description' => 'Number of pages, content preparation, editorial structure, blog or journal systems, multilingual content and media management.', 'factor_5_title' => 'Integrations', 'factor_5_description' => 'Forms, newsletter, analytics, CRM, e-commerce, booking systems, third-party tools or custom workflows.', 'factor_6_title' => 'Performance and SEO foundations', 'factor_6_description' => 'Speed, technical structure, metadata, indexability, clean markup and search visibility foundations.', 'factor_7_title' => 'Care and maintenance', 'factor_7_description' => 'Hosting, updates, backup, monitoring, adjustments and ongoing support after launch.'
            ),
            'dynamic' => true,
            'version' => '1.0.139'
        ) );
