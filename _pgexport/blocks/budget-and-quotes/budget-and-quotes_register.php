<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/budget-and-quotes',
            'title' => __( 'Budget and Quotes', 'blackboard_by_zdc' ),
            'description' => __( 'Guidance on when a higher budget makes sense and how to read a website quote', 'blackboard_by_zdc' ),
            'render_template' => 'blocks/budget-and-quotes/budget-and-quotes.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/budget-and-quotes/budget-and-quotes.js',
            'attributes' => array(
                'budget_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'When a higher budget makes sense <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'budget_intro' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A higher budget is justified when the website is expected to support more than a basic presence.'
                ),
                'budget_items' => array(
                    'type' => array('string', 'null'),
                    'default' => '<li class="border-t border-black/10 pt-2">The site needs to generate qualified enquiries</li> <li class="border-t border-black/10 pt-2">Content will grow over time</li> <li class="border-t border-black/10 pt-2">The brand needs stronger digital credibility</li> <li class="border-t border-black/10 pt-2">There are multiple audiences or services</li> <li class="border-t border-black/10 pt-2">The site must be multilingual</li> <li class="border-t border-black/10 pt-2">There are integrations with external tools</li> <li class="border-t border-black/10 pt-2">Performance and search visibility matter</li> <li class="border-t border-black/10 pt-2">The system must be easy to maintain and evolve</li>'
                ),
                'budget_note' => array(
                    'type' => array('string', 'null'),
                    'default' => 'In these cases, the website is not just a page online. It becomes part of how the organisation works, communicates and is understood.'
                ),
                'quotes_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'How to read a website quote <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'quotes_intro' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A useful quote should make the work visible. It should not only state a final number.'
                ),
                'quotes_items' => array(
                    'type' => array('string', 'null'),
                    'default' => '<li class="border-t border-black/10 pt-2">What is included?</li> <li class="border-t border-black/10 pt-2">What is excluded?</li> <li class="border-t border-black/10 pt-2">How many pages or templates are included?</li> <li class="border-t border-black/10 pt-2">Is the design custom or template-based?</li> <li class="border-t border-black/10 pt-2">Is the CMS structure defined?</li> <li class="border-t border-black/10 pt-2">Are performance and SEO foundations included?</li> <li class="border-t border-black/10 pt-2">Who owns the domain, hosting and accounts?</li> <li class="border-t border-black/10 pt-2">Is handover included?</li> <li class="border-t border-black/10 pt-2">What happens after launch?</li>'
                )
            ),
            'example' => array(
'budget_title' => 'When a higher budget makes sense <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'budget_intro' => 'A higher budget is justified when the website is expected to support more than a basic presence.', 'budget_items' => '<li class="border-t border-black/10 pt-2">The site needs to generate qualified enquiries</li> <li class="border-t border-black/10 pt-2">Content will grow over time</li> <li class="border-t border-black/10 pt-2">The brand needs stronger digital credibility</li> <li class="border-t border-black/10 pt-2">There are multiple audiences or services</li> <li class="border-t border-black/10 pt-2">The site must be multilingual</li> <li class="border-t border-black/10 pt-2">There are integrations with external tools</li> <li class="border-t border-black/10 pt-2">Performance and search visibility matter</li> <li class="border-t border-black/10 pt-2">The system must be easy to maintain and evolve</li>', 'budget_note' => 'In these cases, the website is not just a page online. It becomes part of how the organisation works, communicates and is understood.', 'quotes_title' => 'How to read a website quote <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'quotes_intro' => 'A useful quote should make the work visible. It should not only state a final number.', 'quotes_items' => '<li class="border-t border-black/10 pt-2">What is included?</li> <li class="border-t border-black/10 pt-2">What is excluded?</li> <li class="border-t border-black/10 pt-2">How many pages or templates are included?</li> <li class="border-t border-black/10 pt-2">Is the design custom or template-based?</li> <li class="border-t border-black/10 pt-2">Is the CMS structure defined?</li> <li class="border-t border-black/10 pt-2">Are performance and SEO foundations included?</li> <li class="border-t border-black/10 pt-2">Who owns the domain, hosting and accounts?</li> <li class="border-t border-black/10 pt-2">Is handover included?</li> <li class="border-t border-black/10 pt-2">What happens after launch?</li>'
            ),
            'dynamic' => true,
            'version' => '1.0.139'
        ) );
