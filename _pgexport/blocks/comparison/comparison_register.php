<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/comparison',
            'title' => __( 'Comparison', 'blackboard_by_zdc' ),
            'description' => __( 'Side-by-side comparison of low-cost vs professional websites', 'blackboard_by_zdc' ),
            'render_template' => 'blocks/comparison/comparison.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/comparison/comparison.js',
            'attributes' => array(
                'section_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'What is and isn&apos;t included'
                ),
                'low_cost_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'What is usually missing in a low-cost website <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'low_cost_intro' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A very low price is not always wrong, but it usually means the scope is limited. The site may exist online, but some decisions are often skipped.'
                ),
                'low_cost_items' => array(
                    'type' => array('string', 'null'),
                    'default' => '<li class="border-t border-black/10 pt-2">Little or no structure before building</li> <li class="border-t border-black/10 pt-2">Template-based design</li> <li class="border-t border-black/10 pt-2">Generic layouts</li> <li class="border-t border-black/10 pt-2">Limited flexibility</li> <li class="border-t border-black/10 pt-2">Weak content hierarchy</li> <li class="border-t border-black/10 pt-2">Basic SEO setup only</li> <li class="border-t border-black/10 pt-2">Limited performance work</li> <li class="border-t border-black/10 pt-2">No long-term maintenance logic</li> <li class="border-t border-black/10 pt-2">No documentation or handover</li> <li class="border-t border-black/10 pt-2">Difficult future evolution</li>'
                ),
                'low_cost_note' => array(
                    'type' => array('string', 'null'),
                    'default' => 'The problem is not the low price itself. The problem is not knowing what has been excluded.'
                ),
                'pro_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'What a professional website should include <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'pro_intro' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A professional website should not only look finished. It should be understandable, manageable and able to evolve.'
                ),
                'pro_phase1_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Before design'
                ),
                'pro_phase1_items' => array(
                    'type' => array('string', 'null'),
                    'default' => '<li class="border-t border-black/10 pt-2">Scope clarification</li> <li class="border-t border-black/10 pt-2">Content and navigation logic</li> <li class="border-t border-black/10 pt-2">Key user paths</li> <li class="border-t border-black/10 pt-2">Functional requirements</li> <li class="border-t border-black/10 pt-2">Technical direction</li>'
                ),
                'pro_phase2_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'During design and development'
                ),
                'pro_phase2_items' => array(
                    'type' => array('string', 'null'),
                    'default' => '<li class="border-t border-black/10 pt-2">Custom design system</li> <li class="border-t border-black/10 pt-2">Responsive layouts</li> <li class="border-t border-black/10 pt-2">CMS structure</li> <li class="border-t border-black/10 pt-2">Performance-conscious development</li> <li class="border-t border-black/10 pt-2">Accessibility-aware implementation</li> <li class="border-t border-black/10 pt-2">Search-ready foundations</li>'
                ),
                'pro_phase3_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'After launch'
                ),
                'pro_phase3_items' => array(
                    'type' => array('string', 'null'),
                    'default' => '<li class="border-t border-black/10 pt-2">Testing</li> <li class="border-t border-black/10 pt-2">Handover</li> <li class="border-t border-black/10 pt-2">Documentation</li> <li class="border-t border-black/10 pt-2">Maintenance options</li> <li class="border-t border-black/10 pt-2">Future adjustments when needed</li>'
                )
            ),
            'example' => array(
'section_title' => 'What is and isn&apos;t included', 'low_cost_title' => 'What is usually missing in a low-cost website <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'low_cost_intro' => 'A very low price is not always wrong, but it usually means the scope is limited. The site may exist online, but some decisions are often skipped.', 'low_cost_items' => '<li class="border-t border-black/10 pt-2">Little or no structure before building</li> <li class="border-t border-black/10 pt-2">Template-based design</li> <li class="border-t border-black/10 pt-2">Generic layouts</li> <li class="border-t border-black/10 pt-2">Limited flexibility</li> <li class="border-t border-black/10 pt-2">Weak content hierarchy</li> <li class="border-t border-black/10 pt-2">Basic SEO setup only</li> <li class="border-t border-black/10 pt-2">Limited performance work</li> <li class="border-t border-black/10 pt-2">No long-term maintenance logic</li> <li class="border-t border-black/10 pt-2">No documentation or handover</li> <li class="border-t border-black/10 pt-2">Difficult future evolution</li>', 'low_cost_note' => 'The problem is not the low price itself. The problem is not knowing what has been excluded.', 'pro_title' => 'What a professional website should include <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'pro_intro' => 'A professional website should not only look finished. It should be understandable, manageable and able to evolve.', 'pro_phase1_title' => 'Before design', 'pro_phase1_items' => '<li class="border-t border-black/10 pt-2">Scope clarification</li> <li class="border-t border-black/10 pt-2">Content and navigation logic</li> <li class="border-t border-black/10 pt-2">Key user paths</li> <li class="border-t border-black/10 pt-2">Functional requirements</li> <li class="border-t border-black/10 pt-2">Technical direction</li>', 'pro_phase2_title' => 'During design and development', 'pro_phase2_items' => '<li class="border-t border-black/10 pt-2">Custom design system</li> <li class="border-t border-black/10 pt-2">Responsive layouts</li> <li class="border-t border-black/10 pt-2">CMS structure</li> <li class="border-t border-black/10 pt-2">Performance-conscious development</li> <li class="border-t border-black/10 pt-2">Accessibility-aware implementation</li> <li class="border-t border-black/10 pt-2">Search-ready foundations</li>', 'pro_phase3_title' => 'After launch', 'pro_phase3_items' => '<li class="border-t border-black/10 pt-2">Testing</li> <li class="border-t border-black/10 pt-2">Handover</li> <li class="border-t border-black/10 pt-2">Documentation</li> <li class="border-t border-black/10 pt-2">Maintenance options</li> <li class="border-t border-black/10 pt-2">Future adjustments when needed</li>'
            ),
            'dynamic' => true,
            'version' => '1.0.139'
        ) );
