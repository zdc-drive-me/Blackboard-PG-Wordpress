<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/portfolio',
            'title' => __( 'Portfolio Block', 'blackboard_by_zdc' ),
            'description' => __( 'Portfolio section with about sidebar and project showcase', 'blackboard_by_zdc' ),
            'category' => 'blackboard_blocks',
            'render_template' => 'blocks/portfolio/portfolio.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/portfolio/portfolio.js',
            'attributes' => array(
                'about_heading' => array(
                    'type' => array('string', 'null'),
                    'default' => 'ABOUT <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'h1_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'CUSTOM WEB DESING &amp; CODING'
                ),
                'intro_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Blackboard is a <b>creative digital service boutique.</b>'
                ),
                'description_1' => array(
                    'type' => array('string', 'null'),
                    'default' => 'We specialise in helping <b>fashion brands, premium firms, and artistic ventures</b> transform their ideas into a tailor-made online presence, delivering digital solutions that are both functional and beautifully crafted.'
                ),
                'description_2' => array(
                    'type' => array('string', 'null'),
                    'default' => 'By combining <span class="font-normal">design, technology, and strategy</span>, we develop digital platforms that grow from a vision, intuition, or necessity into a fully realized online presence.&nbsp;'
                ),
                'description_3' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Backed by 10+ years of hands-on experience, we work at the intersection of precision and creativity.'
                ),
                'clients_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Selected clients: Bradley Seymour, Dune Studios, Marzotto Group, WP Lavori in Corso, Colombo &amp; Partners, TimeSwapp, Waldorf School of Milan'
                ),
                'description_4' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Blackboard is the digital arm of <a href="https://zdcstudio.com" target="_blank" class="!no-underline"><b>zdc.studio</b></a>.'
                ),
                'location_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Based in Milan, partnering with clients across the globe.'
                ),
                'contact_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'For any request write us <a href="mailto:blackboard@zdcstudio.com?subject=type%20the%20subject" class="!no-underline"><span class="font-normal">here</span></a>'
                ),
                'work_heading' => array(
                    'type' => array('string', 'null'),
                    'default' => 'some of our WORKs<span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                )
            ),
            'example' => array(
'about_heading' => 'ABOUT <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'h1_text' => 'CUSTOM WEB DESING &amp; CODING', 'intro_text' => 'Blackboard is a <b>creative digital service boutique.</b>', 'description_1' => 'We specialise in helping <b>fashion brands, premium firms, and artistic ventures</b> transform their ideas into a tailor-made online presence, delivering digital solutions that are both functional and beautifully crafted.', 'description_2' => 'By combining <span class="font-normal">design, technology, and strategy</span>, we develop digital platforms that grow from a vision, intuition, or necessity into a fully realized online presence.&nbsp;', 'description_3' => 'Backed by 10+ years of hands-on experience, we work at the intersection of precision and creativity.', 'clients_text' => 'Selected clients: Bradley Seymour, Dune Studios, Marzotto Group, WP Lavori in Corso, Colombo &amp; Partners, TimeSwapp, Waldorf School of Milan', 'description_4' => 'Blackboard is the digital arm of <a href="https://zdcstudio.com" target="_blank" class="!no-underline"><b>zdc.studio</b></a>.', 'location_text' => 'Based in Milan, partnering with clients across the globe.', 'contact_text' => 'For any request write us <a href="mailto:blackboard@zdcstudio.com?subject=type%20the%20subject" class="!no-underline"><span class="font-normal">here</span></a>', 'work_heading' => 'some of our WORKs<span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
            ),
            'dynamic' => true,
            'has_inner_blocks' => true,
            'version' => '1.0.38'
        ) );
