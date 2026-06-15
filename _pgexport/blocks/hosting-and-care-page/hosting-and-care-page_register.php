<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/hosting-and-care-page',
            'title' => __( 'Hosting and Care Page Block', 'blackboard_by_zdc' ),
            'description' => __( 'Full editorial page layout for the hosting and care / website cost page', 'blackboard_by_zdc' ),
            'render_template' => 'blocks/hosting-and-care-page/hosting-and-care-page.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/hosting-and-care-page/hosting-and-care-page.js',
            'attributes' => array(
                'page_label_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'How much does a website cost <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'hero_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'How much does&nbsp;<br>a website cost?'
                ),
                'hero_intro_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'The price of a website is not defined by the number of pages alone. It depends on what the site needs to do, how it is structured, and how much it has to support over time.'
                ),
                'hero_description_left' => array(
                    'type' => array('string', 'null'),
                    'default' => 'There is no single answer because &quot;a website&quot; can mean very different things. A simple online presence, a structured company website, an editorial system, an e-commerce platform and a custom digital product do not require the same level of work.'
                ),
                'hero_description_right' => array(
                    'type' => array('string', 'null'),
                    'default' => 'The real question is not only how much a website costs. It is what kind of structure, design and development the project needs in order to work properly.'
                ),
                'pricing_overview_section_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A useful starting point <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'pricing_overview_intro_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Projects vary in scope. Each follows the same approach , structure first, then design and execution &#8212; adapted to scale and complexity.'
                ),
                'pricing_overview_tier_1_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Foundation'
                ),
                'pricing_overview_tier_1_prefix' => array(
                    'type' => array('string', 'null'),
                    'default' => 'From'
                ),
                'pricing_overview_tier_1_price' => array(
                    'type' => array('string', 'null'),
                    'default' => '&euro; 3,500'
                ),
                'pricing_overview_tier_1_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A focused build with essential structure, custom design and core functionality.'
                ),
                'pricing_overview_tier_2_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Structured'
                ),
                'pricing_overview_tier_2_prefix' => array(
                    'type' => array('string', 'null'),
                    'default' => 'From'
                ),
                'pricing_overview_tier_2_price' => array(
                    'type' => array('string', 'null'),
                    'default' => '&euro; 4,500'
                ),
                'pricing_overview_tier_2_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A content-driven system with expanded pages, flexible layouts and integrated features.'
                ),
                'pricing_overview_tier_3_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Extended'
                ),
                'pricing_overview_tier_3_prefix' => array(
                    'type' => array('string', 'null'),
                    'default' => 'From'
                ),
                'pricing_overview_tier_3_price' => array(
                    'type' => array('string', 'null'),
                    'default' => '&euro; 7000'
                ),
                'pricing_overview_tier_3_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A more complex system with custom builds, integrations and advanced performance.'
                ),
                'pricing_overview_footnote' => array(
                    'type' => array('string', 'null'),
                    'default' => 'These are starting points, not fixed packages. The right scale is defined after understanding the project.'
                ),
                'price_factors_section_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Why prices vary so much <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'price_factors_intro_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'The cost of a website changes because the work behind it changes. Two websites may look similar from the outside, but they can be completely different in structure, flexibility, speed, content logic and long-term maintainability.'
                ),
                'price_factors_factor_1_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Structure'
                ),
                'price_factors_factor_1_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Information architecture, navigation, content hierarchy and key decisions before design begins.'
                ),
                'price_factors_factor_2_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Design'
                ),
                'price_factors_factor_2_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Custom layout, visual system, responsive behaviour, interaction details and consistency across pages.'
                ),
                'price_factors_factor_3_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Development'
                ),
                'price_factors_factor_3_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Front-end quality, CMS implementation, performance, accessibility, technical precision and future editing logic.'
                ),
                'price_factors_factor_4_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Content'
                ),
                'price_factors_factor_4_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Number of pages, content preparation, editorial structure, blog or journal systems, multilingual content and media management.'
                ),
                'price_factors_factor_5_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Integrations'
                ),
                'price_factors_factor_5_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Forms, newsletter, analytics, CRM, e-commerce, booking systems, third-party tools or custom workflows.'
                ),
                'price_factors_factor_6_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Performance and SEO foundations'
                ),
                'price_factors_factor_6_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Speed, technical structure, metadata, indexability, clean markup and search visibility foundations.'
                ),
                'price_factors_factor_7_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Care and maintenance'
                ),
                'price_factors_factor_7_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Hosting, updates, backup, monitoring, adjustments and ongoing support after launch.'
                ),
                'comparison_section_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'What is and isn&apos;t included'
                ),
                'comparison_low_cost_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'What is usually missing in a low-cost website <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'comparison_low_cost_intro' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A very low price is not always wrong, but it usually means the scope is limited. The site may exist online, but some decisions are often skipped.'
                ),
                'comparison_low_cost_items' => array(
                    'type' => array('string', 'null'),
                    'default' => '<li class="border-t border-black/10 pt-2">Little or no structure before building</li> <li class="border-t border-black/10 pt-2">Template-based design</li> <li class="border-t border-black/10 pt-2">Generic layouts</li> <li class="border-t border-black/10 pt-2">Limited flexibility</li> <li class="border-t border-black/10 pt-2">Weak content hierarchy</li> <li class="border-t border-black/10 pt-2">Basic SEO setup only</li> <li class="border-t border-black/10 pt-2">Limited performance work</li> <li class="border-t border-black/10 pt-2">No long-term maintenance logic</li> <li class="border-t border-black/10 pt-2">No documentation or handover</li> <li class="border-t border-black/10 pt-2">Difficult future evolution</li>'
                ),
                'comparison_low_cost_note' => array(
                    'type' => array('string', 'null'),
                    'default' => 'The problem is not the low price itself. The problem is not knowing what has been excluded.'
                ),
                'comparison_pro_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'What a professional website should include <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'comparison_pro_intro' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A professional website should not only look finished. It should be understandable, manageable and able to evolve.'
                ),
                'comparison_pro_phase1_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Before design'
                ),
                'comparison_pro_phase1_items' => array(
                    'type' => array('string', 'null'),
                    'default' => '<li class="border-t border-black/10 pt-2">Scope clarification</li> <li class="border-t border-black/10 pt-2">Content and navigation logic</li> <li class="border-t border-black/10 pt-2">Key user paths</li> <li class="border-t border-black/10 pt-2">Functional requirements</li> <li class="border-t border-black/10 pt-2">Technical direction</li>'
                ),
                'comparison_pro_phase2_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'During design and development'
                ),
                'comparison_pro_phase2_items' => array(
                    'type' => array('string', 'null'),
                    'default' => '<li class="border-t border-black/10 pt-2">Custom design system</li> <li class="border-t border-black/10 pt-2">Responsive layouts</li> <li class="border-t border-black/10 pt-2">CMS structure</li> <li class="border-t border-black/10 pt-2">Performance-conscious development</li> <li class="border-t border-black/10 pt-2">Accessibility-aware implementation</li> <li class="border-t border-black/10 pt-2">Search-ready foundations</li>'
                ),
                'comparison_pro_phase3_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'After launch'
                ),
                'comparison_pro_phase3_items' => array(
                    'type' => array('string', 'null'),
                    'default' => '<li class="border-t border-black/10 pt-2">Testing</li> <li class="border-t border-black/10 pt-2">Handover</li> <li class="border-t border-black/10 pt-2">Documentation</li> <li class="border-t border-black/10 pt-2">Maintenance options</li> <li class="border-t border-black/10 pt-2">Future adjustments when needed</li>'
                ),
                'separate_costs_section_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'What should be clarified separately <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'separate_costs_intro_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Some costs are not always part of the initial website build and should be made explicit before starting.'
                ),
                'separate_costs_cost_1_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Domain'
                ),
                'separate_costs_cost_1_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Usually a small annual cost, but ownership and renewal should be clear from the start.'
                ),
                'separate_costs_cost_2_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Hosting'
                ),
                'separate_costs_cost_2_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Depends on performance, traffic, security and management needs. Can be self-managed or included in a care plan.'
                ),
                'separate_costs_cost_3_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Maintenance'
                ),
                'separate_costs_cost_3_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Updates, monitoring, backups and technical care after launch. Offered as a separate care arrangement.'
                ),
                'separate_costs_cost_4_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Content production'
                ),
                'separate_costs_cost_4_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Copywriting, photography, image editing, translations or editorial planning are separate from the build.'
                ),
                'separate_costs_cost_5_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'SEO strategy'
                ),
                'separate_costs_cost_5_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Search-ready foundations can be included, but ongoing SEO work is a separate and ongoing activity.'
                ),
                'separate_costs_cost_6_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Marketing'
                ),
                'separate_costs_cost_6_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Campaigns, ads, email flows and content distribution are distinct from building the website itself.'
                ),
                'budget_and_quotes_budget_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'When a higher budget makes sense <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'budget_and_quotes_budget_intro' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A higher budget is justified when the website is expected to support more than a basic presence.'
                ),
                'budget_and_quotes_budget_items' => array(
                    'type' => array('string', 'null'),
                    'default' => '<li class="border-t border-black/10 pt-2">The site needs to generate qualified enquiries</li> <li class="border-t border-black/10 pt-2">Content will grow over time</li> <li class="border-t border-black/10 pt-2">The brand needs stronger digital credibility</li> <li class="border-t border-black/10 pt-2">There are multiple audiences or services</li> <li class="border-t border-black/10 pt-2">The site must be multilingual</li> <li class="border-t border-black/10 pt-2">There are integrations with external tools</li> <li class="border-t border-black/10 pt-2">Performance and search visibility matter</li> <li class="border-t border-black/10 pt-2">The system must be easy to maintain and evolve</li>'
                ),
                'budget_and_quotes_budget_note' => array(
                    'type' => array('string', 'null'),
                    'default' => 'In these cases, the website is not just a page online. It becomes part of how the organisation works, communicates and is understood.'
                ),
                'budget_and_quotes_quotes_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'How to read a website quote <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'budget_and_quotes_quotes_intro' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A useful quote should make the work visible. It should not only state a final number.'
                ),
                'budget_and_quotes_quotes_items' => array(
                    'type' => array('string', 'null'),
                    'default' => '<li class="border-t border-black/10 pt-2">What is included?</li> <li class="border-t border-black/10 pt-2">What is excluded?</li> <li class="border-t border-black/10 pt-2">How many pages or templates are included?</li> <li class="border-t border-black/10 pt-2">Is the design custom or template-based?</li> <li class="border-t border-black/10 pt-2">Is the CMS structure defined?</li> <li class="border-t border-black/10 pt-2">Are performance and SEO foundations included?</li> <li class="border-t border-black/10 pt-2">Who owns the domain, hosting and accounts?</li> <li class="border-t border-black/10 pt-2">Is handover included?</li> <li class="border-t border-black/10 pt-2">What happens after launch?</li>'
                ),
                'cta_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Need to understand the right scale?'
                ),
                'cta_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'The starting points above are useful references.'
                ),
                'cta_secondary_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Send us a few details and we will help clarify the right scale.'
                ),
                'cta_cta_link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => 'mailto:blackboard@zdcstudio.com?subject=Start%20a%20Project', 'post_type' => '', 'title' => '')
                ),
                'cta_cta_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Each projects begins with a conversation'
                ),
                'cta_cta_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Start a project'
                ),
                'cta_services_link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => 'services.html', 'post_type' => '', 'title' => '')
                ),
                'cta_services_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'View Services'
                )
            ),
            'example' => array(
'page_label_label' => 'How much does a website cost <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'hero_title' => 'How much does&nbsp;<br>a website cost?', 'hero_intro_text' => 'The price of a website is not defined by the number of pages alone. It depends on what the site needs to do, how it is structured, and how much it has to support over time.', 'hero_description_left' => 'There is no single answer because &quot;a website&quot; can mean very different things. A simple online presence, a structured company website, an editorial system, an e-commerce platform and a custom digital product do not require the same level of work.', 'hero_description_right' => 'The real question is not only how much a website costs. It is what kind of structure, design and development the project needs in order to work properly.', 'pricing_overview_section_title' => 'A useful starting point <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'pricing_overview_intro_text' => 'Projects vary in scope. Each follows the same approach , structure first, then design and execution &#8212; adapted to scale and complexity.', 'pricing_overview_tier_1_label' => 'Foundation', 'pricing_overview_tier_1_prefix' => 'From', 'pricing_overview_tier_1_price' => '&euro; 3,500', 'pricing_overview_tier_1_description' => 'A focused build with essential structure, custom design and core functionality.', 'pricing_overview_tier_2_label' => 'Structured', 'pricing_overview_tier_2_prefix' => 'From', 'pricing_overview_tier_2_price' => '&euro; 4,500', 'pricing_overview_tier_2_description' => 'A content-driven system with expanded pages, flexible layouts and integrated features.', 'pricing_overview_tier_3_label' => 'Extended', 'pricing_overview_tier_3_prefix' => 'From', 'pricing_overview_tier_3_price' => '&euro; 7000', 'pricing_overview_tier_3_description' => 'A more complex system with custom builds, integrations and advanced performance.', 'pricing_overview_footnote' => 'These are starting points, not fixed packages. The right scale is defined after understanding the project.', 'price_factors_section_title' => 'Why prices vary so much <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'price_factors_intro_text' => 'The cost of a website changes because the work behind it changes. Two websites may look similar from the outside, but they can be completely different in structure, flexibility, speed, content logic and long-term maintainability.', 'price_factors_factor_1_title' => 'Structure', 'price_factors_factor_1_description' => 'Information architecture, navigation, content hierarchy and key decisions before design begins.', 'price_factors_factor_2_title' => 'Design', 'price_factors_factor_2_description' => 'Custom layout, visual system, responsive behaviour, interaction details and consistency across pages.', 'price_factors_factor_3_title' => 'Development', 'price_factors_factor_3_description' => 'Front-end quality, CMS implementation, performance, accessibility, technical precision and future editing logic.', 'price_factors_factor_4_title' => 'Content', 'price_factors_factor_4_description' => 'Number of pages, content preparation, editorial structure, blog or journal systems, multilingual content and media management.', 'price_factors_factor_5_title' => 'Integrations', 'price_factors_factor_5_description' => 'Forms, newsletter, analytics, CRM, e-commerce, booking systems, third-party tools or custom workflows.', 'price_factors_factor_6_title' => 'Performance and SEO foundations', 'price_factors_factor_6_description' => 'Speed, technical structure, metadata, indexability, clean markup and search visibility foundations.', 'price_factors_factor_7_title' => 'Care and maintenance', 'price_factors_factor_7_description' => 'Hosting, updates, backup, monitoring, adjustments and ongoing support after launch.', 'comparison_section_title' => 'What is and isn&apos;t included', 'comparison_low_cost_title' => 'What is usually missing in a low-cost website <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'comparison_low_cost_intro' => 'A very low price is not always wrong, but it usually means the scope is limited. The site may exist online, but some decisions are often skipped.', 'comparison_low_cost_items' => '<li class="border-t border-black/10 pt-2">Little or no structure before building</li> <li class="border-t border-black/10 pt-2">Template-based design</li> <li class="border-t border-black/10 pt-2">Generic layouts</li> <li class="border-t border-black/10 pt-2">Limited flexibility</li> <li class="border-t border-black/10 pt-2">Weak content hierarchy</li> <li class="border-t border-black/10 pt-2">Basic SEO setup only</li> <li class="border-t border-black/10 pt-2">Limited performance work</li> <li class="border-t border-black/10 pt-2">No long-term maintenance logic</li> <li class="border-t border-black/10 pt-2">No documentation or handover</li> <li class="border-t border-black/10 pt-2">Difficult future evolution</li>', 'comparison_low_cost_note' => 'The problem is not the low price itself. The problem is not knowing what has been excluded.', 'comparison_pro_title' => 'What a professional website should include <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'comparison_pro_intro' => 'A professional website should not only look finished. It should be understandable, manageable and able to evolve.', 'comparison_pro_phase1_title' => 'Before design', 'comparison_pro_phase1_items' => '<li class="border-t border-black/10 pt-2">Scope clarification</li> <li class="border-t border-black/10 pt-2">Content and navigation logic</li> <li class="border-t border-black/10 pt-2">Key user paths</li> <li class="border-t border-black/10 pt-2">Functional requirements</li> <li class="border-t border-black/10 pt-2">Technical direction</li>', 'comparison_pro_phase2_title' => 'During design and development', 'comparison_pro_phase2_items' => '<li class="border-t border-black/10 pt-2">Custom design system</li> <li class="border-t border-black/10 pt-2">Responsive layouts</li> <li class="border-t border-black/10 pt-2">CMS structure</li> <li class="border-t border-black/10 pt-2">Performance-conscious development</li> <li class="border-t border-black/10 pt-2">Accessibility-aware implementation</li> <li class="border-t border-black/10 pt-2">Search-ready foundations</li>', 'comparison_pro_phase3_title' => 'After launch', 'comparison_pro_phase3_items' => '<li class="border-t border-black/10 pt-2">Testing</li> <li class="border-t border-black/10 pt-2">Handover</li> <li class="border-t border-black/10 pt-2">Documentation</li> <li class="border-t border-black/10 pt-2">Maintenance options</li> <li class="border-t border-black/10 pt-2">Future adjustments when needed</li>', 'separate_costs_section_title' => 'What should be clarified separately <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'separate_costs_intro_text' => 'Some costs are not always part of the initial website build and should be made explicit before starting.', 'separate_costs_cost_1_title' => 'Domain', 'separate_costs_cost_1_description' => 'Usually a small annual cost, but ownership and renewal should be clear from the start.', 'separate_costs_cost_2_title' => 'Hosting', 'separate_costs_cost_2_description' => 'Depends on performance, traffic, security and management needs. Can be self-managed or included in a care plan.', 'separate_costs_cost_3_title' => 'Maintenance', 'separate_costs_cost_3_description' => 'Updates, monitoring, backups and technical care after launch. Offered as a separate care arrangement.', 'separate_costs_cost_4_title' => 'Content production', 'separate_costs_cost_4_description' => 'Copywriting, photography, image editing, translations or editorial planning are separate from the build.', 'separate_costs_cost_5_title' => 'SEO strategy', 'separate_costs_cost_5_description' => 'Search-ready foundations can be included, but ongoing SEO work is a separate and ongoing activity.', 'separate_costs_cost_6_title' => 'Marketing', 'separate_costs_cost_6_description' => 'Campaigns, ads, email flows and content distribution are distinct from building the website itself.', 'budget_and_quotes_budget_title' => 'When a higher budget makes sense <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'budget_and_quotes_budget_intro' => 'A higher budget is justified when the website is expected to support more than a basic presence.', 'budget_and_quotes_budget_items' => '<li class="border-t border-black/10 pt-2">The site needs to generate qualified enquiries</li> <li class="border-t border-black/10 pt-2">Content will grow over time</li> <li class="border-t border-black/10 pt-2">The brand needs stronger digital credibility</li> <li class="border-t border-black/10 pt-2">There are multiple audiences or services</li> <li class="border-t border-black/10 pt-2">The site must be multilingual</li> <li class="border-t border-black/10 pt-2">There are integrations with external tools</li> <li class="border-t border-black/10 pt-2">Performance and search visibility matter</li> <li class="border-t border-black/10 pt-2">The system must be easy to maintain and evolve</li>', 'budget_and_quotes_budget_note' => 'In these cases, the website is not just a page online. It becomes part of how the organisation works, communicates and is understood.', 'budget_and_quotes_quotes_title' => 'How to read a website quote <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'budget_and_quotes_quotes_intro' => 'A useful quote should make the work visible. It should not only state a final number.', 'budget_and_quotes_quotes_items' => '<li class="border-t border-black/10 pt-2">What is included?</li> <li class="border-t border-black/10 pt-2">What is excluded?</li> <li class="border-t border-black/10 pt-2">How many pages or templates are included?</li> <li class="border-t border-black/10 pt-2">Is the design custom or template-based?</li> <li class="border-t border-black/10 pt-2">Is the CMS structure defined?</li> <li class="border-t border-black/10 pt-2">Are performance and SEO foundations included?</li> <li class="border-t border-black/10 pt-2">Who owns the domain, hosting and accounts?</li> <li class="border-t border-black/10 pt-2">Is handover included?</li> <li class="border-t border-black/10 pt-2">What happens after launch?</li>', 'cta_title' => 'Need to understand the right scale?', 'cta_description' => 'The starting points above are useful references.', 'cta_secondary_description' => 'Send us a few details and we will help clarify the right scale.', 'cta_cta_link' => array('post_id' => 0, 'url' => 'mailto:blackboard@zdcstudio.com?subject=Start%20a%20Project', 'post_type' => '', 'title' => ''), 'cta_cta_description' => 'Each projects begins with a conversation', 'cta_cta_label' => 'Start a project', 'cta_services_link' => array('post_id' => 0, 'url' => 'services.html', 'post_type' => '', 'title' => ''), 'cta_services_label' => 'View Services'
            ),
            'dynamic' => true,
            'version' => '1.0.150'
        ) );
