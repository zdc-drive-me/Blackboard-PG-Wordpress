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
                    'default' => 'Digital practice where direction takes form through structure and execution.'
                ),
                'description_1' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Blackboard is a part of the work developed at ZDC Studio, <b>where research becomes direction, and direction takes form.</b>We clarify, structure and build digital <b>systems</b>.<br><br>We work with studios and brands that need digital to hold, clear, fast and consistent, from initial structure to necessary rework (details in <a href="https://blackboard.zdcstudio.com/services/"><b>services</b></a>).&nbsp;<br><br>Each project is guided by clear decisions and developed with precision, so that it remains coherent as it evolves.<br><br>Blackboard is the digital arm of <b><a href="https://zdcstudio.com"><b>zdc.studio.</b></a></b><br><br>Based in Milan, working internationally.<br><br>Project enquiries and collaborations: <b><a href="mailto:blackboard@zdcstudio.com?subject=info"><b>blackboard@zdcstudio.com</b></a></b><br><br><br>'
                ),
                'work_heading' => array(
                    'type' => array('string', 'null'),
                    'default' => 'some of our WORKs<span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                )
            ),
            'example' => array(
'about_heading' => 'ABOUT <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'h1_text' => 'Digital practice where direction takes form through structure and execution.', 'description_1' => 'Blackboard is a part of the work developed at ZDC Studio, <b>where research becomes direction, and direction takes form.</b>We clarify, structure and build digital <b>systems</b>.<br><br>We work with studios and brands that need digital to hold, clear, fast and consistent, from initial structure to necessary rework (details in <a href="https://blackboard.zdcstudio.com/services/"><b>services</b></a>).&nbsp;<br><br>Each project is guided by clear decisions and developed with precision, so that it remains coherent as it evolves.<br><br>Blackboard is the digital arm of <b><a href="https://zdcstudio.com"><b>zdc.studio.</b></a></b><br><br>Based in Milan, working internationally.<br><br>Project enquiries and collaborations: <b><a href="mailto:blackboard@zdcstudio.com?subject=info"><b>blackboard@zdcstudio.com</b></a></b><br><br><br>', 'work_heading' => 'some of our WORKs<span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
            ),
            'dynamic' => true,
            'has_inner_blocks' => true,
            'version' => '1.0.49'
        ) );
