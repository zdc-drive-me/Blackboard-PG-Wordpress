<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/hero',
            'title' => __( 'Hero', 'blackboard_by_zdc' ),
            'description' => __( 'Main hero section with title and introduction text', 'blackboard_by_zdc' ),
            'render_template' => 'blocks/hero/hero.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/hero/hero.js',
            'attributes' => array(
                'title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'How much does&nbsp;<br>a website cost?'
                ),
                'intro_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'The price of a website is not defined by the number of pages alone. It depends on what the site needs to do, how it is structured, and how much it has to support over time.'
                ),
                'description_left' => array(
                    'type' => array('string', 'null'),
                    'default' => 'There is no single answer because &quot;a website&quot; can mean very different things. A simple online presence, a structured company website, an editorial system, an e-commerce platform and a custom digital product do not require the same level of work.'
                ),
                'description_right' => array(
                    'type' => array('string', 'null'),
                    'default' => 'The real question is not only how much a website costs. It is what kind of structure, design and development the project needs in order to work properly.'
                )
            ),
            'example' => array(
'title' => 'How much does&nbsp;<br>a website cost?', 'intro_text' => 'The price of a website is not defined by the number of pages alone. It depends on what the site needs to do, how it is structured, and how much it has to support over time.', 'description_left' => 'There is no single answer because &quot;a website&quot; can mean very different things. A simple online presence, a structured company website, an editorial system, an e-commerce platform and a custom digital product do not require the same level of work.', 'description_right' => 'The real question is not only how much a website costs. It is what kind of structure, design and development the project needs in order to work properly.'
            ),
            'dynamic' => true,
            'version' => '1.0.139'
        ) );
