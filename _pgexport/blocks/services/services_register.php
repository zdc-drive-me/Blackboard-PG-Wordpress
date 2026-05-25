<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/services',
            'title' => __( 'Services & Packages', 'blackboard_by_zdc' ),
            'description' => __( 'Services overview with packages, workflow, and hosting & care plans.', 'blackboard_by_zdc' ),
            'icon' => 'layout',
            'category' => 'inner_pages_blocks',
            'keywords' => array( 'services', 'packages', 'workflow', 'hosting', 'care' ),
            'render_template' => 'blocks/services/services.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/services/services.js',
            'attributes' => array(
                'about_heading' => array(
                    'type' => array('string', 'null'),
                    'default' => 'how we think and build<span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'heading_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'What gets built depends on the clarity of the decisions behind it.'
                ),
                'sidebar_block_1_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Structure'
                ),
                'sidebar_p1' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Architecture, content, navigation and key decisions &#8212; including what to build, and what to leave out. Nothing is designed until the structure is clear.'
                ),
                'sidebar_block_2_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Design &amp; Development'
                ),
                'sidebar_p2' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Custom layout, type system and visual logic &#8212; no generic themes. Each component is built to the structure, with attention to performance, balance and precision.'
                ),
                'sidebar_block_3_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Evolution'
                ),
                'sidebar_p3' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Digital systems are not finished at launch. Content shifts, priorities change, pages are added. The structure is built to accommodate this &#8212; not to resist it.'
                ),
                'sidebar_block_4_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Care'
                ),
                'sidebar_p4' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Handover, documentation and &#8212; where needed &#8212; ongoing support. The system is yours. We make sure you can use it with confidence, and that someone is on hand when things need attention.'
                ),
                'top_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Services <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'hero_image' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80', 'size' => '', 'svg' => '', 'alt' => 'Design and development workspace')
                ),
                'plus1_block' => array(
                    'type' => array('string', 'null'),
                    'default' => ''
                ),
                'plus1_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'web design &amp; development'
                ),
                'plus1_desc' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Custom websites and digital systems, designed and developed from scratch with attention to structure, performance and long-term use.'
                ),
                'plus2_block' => array(
                    'type' => array('string', 'null'),
                    'default' => ''
                ),
                'plus2_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'digital &amp; brand consulting'
                ),
                'plus2_desc' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Offer, positioning, audience and direction for digital projects that need to be clarified before they are built or reworked.'
                ),
                'plus3_block' => array(
                    'type' => array('string', 'null'),
                    'default' => ''
                ),
                'plus3_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'content and copy support'
                ),
                'plus3_desc' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Messaging, website copy and content hierarchy for projects that need to explain themselves more clearly.'
                ),
                'plus4_block' => array(
                    'type' => array('string', 'null'),
                    'default' => ''
                ),
                'plus4_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'photography&nbsp; &amp; art direction<br>'
                ),
                'plus4_desc' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Image direction, photography briefs and visual guidance for web and digital use.'
                ),
                'link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'How much does a website cost ?'
                ),
                'start_project_email_link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => 'mailto:blackboard@zdcstudio.com?subject=Start%20a%20Project', 'post_type' => '', 'title' => '')
                )
            ),
            'example' => array(
'about_heading' => 'how we think and build<span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'heading_text' => 'What gets built depends on the clarity of the decisions behind it.', 'sidebar_block_1_title' => 'Structure', 'sidebar_p1' => 'Architecture, content, navigation and key decisions &#8212; including what to build, and what to leave out. Nothing is designed until the structure is clear.', 'sidebar_block_2_title' => 'Design &amp; Development', 'sidebar_p2' => 'Custom layout, type system and visual logic &#8212; no generic themes. Each component is built to the structure, with attention to performance, balance and precision.', 'sidebar_block_3_title' => 'Evolution', 'sidebar_p3' => 'Digital systems are not finished at launch. Content shifts, priorities change, pages are added. The structure is built to accommodate this &#8212; not to resist it.', 'sidebar_block_4_title' => 'Care', 'sidebar_p4' => 'Handover, documentation and &#8212; where needed &#8212; ongoing support. The system is yours. We make sure you can use it with confidence, and that someone is on hand when things need attention.', 'top_label' => 'Services <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'hero_image' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80', 'size' => '', 'svg' => '', 'alt' => 'Design and development workspace'), 'plus1_block' => '', 'plus1_title' => 'web design &amp; development', 'plus1_desc' => 'Custom websites and digital systems, designed and developed from scratch with attention to structure, performance and long-term use.', 'plus2_block' => '', 'plus2_title' => 'digital &amp; brand consulting', 'plus2_desc' => 'Offer, positioning, audience and direction for digital projects that need to be clarified before they are built or reworked.', 'plus3_block' => '', 'plus3_title' => 'content and copy support', 'plus3_desc' => 'Messaging, website copy and content hierarchy for projects that need to explain themselves more clearly.', 'plus4_block' => '', 'plus4_title' => 'photography&nbsp; &amp; art direction<br>', 'plus4_desc' => 'Image direction, photography briefs and visual guidance for web and digital use.', 'link' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'label' => 'How much does a website cost ?', 'start_project_email_link' => array('post_id' => 0, 'url' => 'mailto:blackboard@zdcstudio.com?subject=Start%20a%20Project', 'post_type' => '', 'title' => '')
            ),
            'dynamic' => true,
            'version' => '1.0.123'
        ) );
