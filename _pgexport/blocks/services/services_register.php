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
                    'default' => 'About <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'sidebar_h1' => array(
                    'type' => array('string', 'null'),
                    'default' => 'CUSTOM WEB DESIGN &amp; CODING'
                ),
                'sidebar_intro' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Blackboard is a <b>creative digital services boutique</b>.'
                ),
                'sidebar_p1' => array(
                    'type' => array('string', 'null'),
                    'default' => 'We specialise in helping <b>fashion brands, premium companies and artistic ventures</b> turn ideas into a tailor-made online presence – considered, functional and beautifully built.'
                ),
                'sidebar_p2' => array(
                    'type' => array('string', 'null'),
                    'default' => 'By combining <span class="font-normal">design, technology and strategy</span>, we develop digital platforms that grow from a vision, intuition or necessity into a fully realised elegant presence.'
                ),
                'sidebar_p3' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Backed by 10+ years of hands-on experience, we work at the intersection of precision and creativity.'
                ),
                'sidebar_clients' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Selected clients: Bradley Seymour, Dune Studios, Marzotto Group, WP Lavori in Corso, Colombo &amp; Partners, TimeSwapp, Waldorf School of Milan.'
                ),
                'sidebar_parent' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Blackboard is the digital arm of <a href="https://zdcstudio.com" target="_blank" class="!no-underline"><b>zdc.studio</b></a>.'
                ),
                'sidebar_location' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Based in Milan, partnering with clients across the globe.'
                ),
                'sidebar_contact_line' => array(
                    'type' => array('string', 'null'),
                    'default' => 'For enquiries, write us <a href="mailto:blackboard@zdcstudio.com?subject=Project%20enquiry" class="!no-underline"> <span class="font-normal">here</span> </a>.'
                ),
                'top_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Services <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'hero_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Websites plans'
                ),
                'hero_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'The shape of the site changes depending on the plan, but the foundation stays the same: a clear content structure, a custom visual system and a lean WordPress build.'
                ),
                'hero_image' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80', 'size' => '', 'svg' => '', 'alt' => 'Design and development workspace with sketches and laptop')
                ),
                'pkg1_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Starting'
                ),
                'pkg1_price' => array(
                    'type' => array('string', 'null'),
                    'default' => 'From €3,200'
                ),
                'pkg1_desc' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Premium starter presence'
                ),
                'pkg1_pages' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Up to 5'
                ),
                'pkg1_design' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Custom layout &amp; style'
                ),
                'pkg1_forms' => array(
                    'type' => array('string', 'null'),
                    'default' => '1 standard form'
                ),
                'pkg1_blog' => array(
                    'type' => array('string', 'null'),
                    'default' => '—'
                ),
                'pkg1_newsletter' => array(
                    'type' => array('string', 'null'),
                    'default' => '—'
                ),
                'pkg1_seo' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Basic / core SEO setup'
                ),
                'pkg1_perf' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Core optimisations'
                ),
                'pkg1_analytics' => array(
                    'type' => array('string', 'null'),
                    'default' => '—'
                ),
                'pkg1_access' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Best practices'
                ),
                'pkg1_care' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Host anywhere you like – add a maintenance plan and hosting is included.'
                ),
                'pkg2_featured' => array(
                    'type' => array('string', 'null'),
                    'default' => 'true'
                ),
                'pkg2_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Grow'
                ),
                'pkg2_price' => array(
                    'type' => array('string', 'null'),
                    'default' => 'From €4,100'
                ),
                'pkg2_desc' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Structured, content-driven site'
                ),
                'pkg2_pages' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Up to 10'
                ),
                'pkg2_design' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Content-driven page design &amp; layout'
                ),
                'pkg2_forms' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Advanced logic + blog-ready forms'
                ),
                'pkg2_blog' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Setup + layout'
                ),
                'pkg2_newsletter' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Basic (Mailchimp)'
                ),
                'pkg2_seo' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Thoughtful on-page SEO'
                ),
                'pkg2_perf' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Caching &amp; delivery'
                ),
                'pkg2_analytics' => array(
                    'type' => array('string', 'null'),
                    'default' => 'GA4'
                ),
                'pkg2_access' => array(
                    'type' => array('string', 'null'),
                    'default' => 'AA-focused'
                ),
                'pkg2_care' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Host anywhere you like – add a maintenance plan and hosting is included.'
                ),
                'pkg3_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Pro'
                ),
                'pkg3_price' => array(
                    'type' => array('string', 'null'),
                    'default' => 'From €6,300'
                ),
                'pkg3_desc' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Shopify store &amp; custom builds'
                ),
                'pkg3_pages' => array(
                    'type' => array('string', 'null'),
                    'default' => '12+ or custom scope'
                ),
                'pkg3_design' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Bespoke theme (Kadence/Pinegrow)'
                ),
                'pkg3_forms' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Conditional forms &amp; integrations'
                ),
                'pkg3_blog' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Extended features + SEO structure'
                ),
                'pkg3_newsletter' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Automation-ready'
                ),
                'pkg3_seo' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Structured data + technical SEO audit'
                ),
                'pkg3_perf' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Full-stack + CDN configuration'
                ),
                'pkg3_analytics' => array(
                    'type' => array('string', 'null'),
                    'default' => 'GA4 + events'
                ),
                'pkg3_access' => array(
                    'type' => array('string', 'null'),
                    'default' => 'AA+ review'
                ),
                'pkg3_care' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Host anywhere you like – add a maintenance plan and hosting is included.'
                ),
                'workflow_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'How we work - workflow <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'workflow_intro' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Every plan starts with a content and structure review, custom layouts and a lean, modern WordPress build.'
                ),
                'wf1_title' => array(
                    'type' => array('string', 'null'),
                    'default' => '01 — Discovery'
                ),
                'wf1_tagline' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Intent, audience, constraints'
                ),
                'wf1_body' => array(
                    'type' => array('string', 'null'),
                    'default' => 'We map goals, content and guardrails, then set a lean, realistic scope that matches your resources and timeline.'
                ),
                'wf1_focus_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Detailed focus: Content &amp; structure'
                ),
                'wf1_focus_list' => array(
                    'type' => array('string', 'null'),
                    'default' => '<ul class="list-disc pl-5 space-y-1 text-gray-800"> <li>Content and page mapping before design</li> <li>Navigation and hierarchy that match your project</li> <li>Wireframes / low-fidelity layouts where needed</li> <li>Simple content guidelines (tone, length, image ratios)</li> </ul>'
                ),
                'wf2_title' => array(
                    'type' => array('string', 'null'),
                    'default' => '02 — Design'
                ),
                'wf2_tagline' => array(
                    'type' => array('string', 'null'),
                    'default' => 'System &amp; composition'
                ),
                'wf2_body' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Grid, type, components. Editorial clarity over noise, with layouts tuned to your photography and visual language.'
                ),
                'wf2_focus_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Detailed focus: Design &amp; front-end'
                ),
                'wf2_focus_list' => array(
                    'type' => array('string', 'null'),
                    'default' => '<ul class="list-disc pl-5 space-y-1 text-gray-800"> <li>Custom layout and type system (no generic theme skins)</li> <li>Responsive grids, balanced margins and rhythm</li> <li>Gentle motion where it helps pacing (no circus)</li> <li>Design tuned to your existing brand assets and photography</li> </ul>'
                ),
                'wf3_title' => array(
                    'type' => array('string', 'null'),
                    'default' => '03 — Build'
                ),
                'wf3_tagline' => array(
                    'type' => array('string', 'null'),
                    'default' => 'From prototype to live site'
                ),
                'wf3_body' => array(
                    'type' => array('string', 'null'),
                    'default' => 'We build a custom theme with the right tools for your project (Pinegrow, Kadence, block editor), keeping the stack lean and documented.'
                ),
                'wf3_focus_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Detailed focus: Build &amp; handover'
                ),
                'wf3_focus_list' => array(
                    'type' => array('string', 'null'),
                    'default' => '<ul class="list-disc pl-5 space-y-1 text-gray-800"> <li>Modern block-based WordPress build (Kadence + custom blocks)</li> <li>Performance-minded decisions (caching, images, fonts)</li> <li>Basic SEO and analytics setup</li> </ul>'
                ),
                'wf4_title' => array(
                    'type' => array('string', 'null'),
                    'default' => '04 — Launch &amp; care'
                ),
                'wf4_tagline' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Deploy, optimise, support'
                ),
                'wf4_body' => array(
                    'type' => array('string', 'null'),
                    'default' => 'We launch, run basic performance and analytics passes, and—if you want us on call—plug you into a care plan with hosting, updates and strategic time.'
                ),
                'wf4_focus_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Detailed focus: Launch &amp; support'
                ),
                'wf4_focus_list' => array(
                    'type' => array('string', 'null'),
                    'default' => '<ul class="list-disc pl-5 space-y-1 text-gray-800"> <li>Handover session so you can update comfortably</li> <li>Short, practical documentation (no 40-page PDF)</li> <li>Optional ongoing care plans with hosting included</li> </ul>'
                ),
                'hosting_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'hosting + care'
                ),
                'hosting_intro' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Our maintenance plans include fast, secure managed WordPress hosting via our trusted partners SiteGround and Hostinger – so hosting, updates and monitoring all sit under one team. Hosting + Care are optional and work best when we migrate your site to our managed stack, so you can worry about one less thing.'
                ),
                'care1_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Essential Care'
                ),
                'care1_price' => array(
                    'type' => array('string', 'null'),
                    'default' => 'From &euro;60 / month'
                ),
                'care1_best' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Small brochure / portfolio sites'
                ),
                'care1_hosting' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Included – managed on our EU-based SiteGround / Hostinger servers'
                ),
                'care1_updates' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Monthly WordPress core &amp; plugin updates'
                ),
                'care1_backups' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Daily backups with 30-day retention'
                ),
                'care1_security' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Firewall + malware scans'
                ),
                'care1_perf' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Core performance checks &amp; cache tuning'
                ),
                'care1_support' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Email support + 1 small content tweak / month'
                ),
                'care1_consult' => array(
                    'type' => array('string', 'null'),
                    'default' => '1× 60 min strategic check-in per year'
                ),
                'care2_featured' => array(
                    'type' => array('string', 'null'),
                    'default' => 'true'
                ),
                'care2_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Growth Care'
                ),
                'care2_price' => array(
                    'type' => array('string', 'null'),
                    'default' => 'From €130 / month'
                ),
                'care2_best' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Growing content sites &amp; active blogs'
                ),
                'care2_hosting' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Included – managed hosting + staging environment (SiteGround / Hostinger)'
                ),
                'care2_updates' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Weekly core, theme &amp; plugin updates'
                ),
                'care2_backups' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Twice-daily backups with 60-day retention'
                ),
                'care2_security' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Advanced firewall, uptime monitoring &amp; alerts'
                ),
                'care2_perf' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Caching, image optimisation &amp; CDN guidance'
                ),
                'care2_support' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Email support + up to 3 small tasks / month'
                ),
                'care2_consult' => array(
                    'type' => array('string', 'null'),
                    'default' => '2× 60 min growth &amp; UX sessions per year'
                ),
                'care3_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Pro Care'
                ),
                'care3_price' => array(
                    'type' => array('string', 'null'),
                    'default' => 'From €220 / month'
                ),
                'care3_best' => array(
                    'type' => array('string', 'null'),
                    'default' => 'E-commerce &amp; mission-critical sites'
                ),
                'care3_hosting' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Included – high-availability hosting + CDN (SiteGround / Hostinger)'
                ),
                'care3_updates' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Weekly updates with compatibility checks'
                ),
                'care3_backups' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Frequent backups with 90-day retention'
                ),
                'care3_security' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Extended monitoring &amp; hardening, priority alerts'
                ),
                'care3_perf' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Performance sprints &amp; load-time reviews'
                ),
                'care3_support' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Priority support &amp; emergency incident handling'
                ),
                'care3_consult' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Up to 4× 60 min strategic sessions per year'
                ),
                'plus_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Plus services'
                ),
                'plus1_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Digital &amp; brand consulting'
                ),
                'plus1_desc' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Ongoing strategic sessions on positioning, site evolution, content priorities and how your digital touchpoints work together.'
                ),
                'plus2_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Content &amp; copy support'
                ),
                'plus2_desc' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Help refining key headlines, microcopy and page flows so the site reads clearly and feels aligned with your brand voice.'
                ),
                'plus3_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Photography &amp; art direction'
                ),
                'plus3_desc' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Guidance on image selection, art direction and how to prepare assets for web so the visual language feels coherent and intentional.'
                ),
                'plus4_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Training &amp; handover sessions'
                ),
                'plus4_desc' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Short, focused workshops to train your team on editing content, using blocks and keeping the site in good shape over time.'
                )
            ),
            'example' => array(
'about_heading' => 'About <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'sidebar_h1' => 'CUSTOM WEB DESIGN &amp; CODING', 'sidebar_intro' => 'Blackboard is a <b>creative digital services boutique</b>.', 'sidebar_p1' => 'We specialise in helping <b>fashion brands, premium companies and artistic ventures</b> turn ideas into a tailor-made online presence – considered, functional and beautifully built.', 'sidebar_p2' => 'By combining <span class="font-normal">design, technology and strategy</span>, we develop digital platforms that grow from a vision, intuition or necessity into a fully realised elegant presence.', 'sidebar_p3' => 'Backed by 10+ years of hands-on experience, we work at the intersection of precision and creativity.', 'sidebar_clients' => 'Selected clients: Bradley Seymour, Dune Studios, Marzotto Group, WP Lavori in Corso, Colombo &amp; Partners, TimeSwapp, Waldorf School of Milan.', 'sidebar_parent' => 'Blackboard is the digital arm of <a href="https://zdcstudio.com" target="_blank" class="!no-underline"><b>zdc.studio</b></a>.', 'sidebar_location' => 'Based in Milan, partnering with clients across the globe.', 'sidebar_contact_line' => 'For enquiries, write us <a href="mailto:blackboard@zdcstudio.com?subject=Project%20enquiry" class="!no-underline"> <span class="font-normal">here</span> </a>.', 'top_label' => 'Services <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'hero_title' => 'Websites plans', 'hero_text' => 'The shape of the site changes depending on the plan, but the foundation stays the same: a clear content structure, a custom visual system and a lean WordPress build.', 'hero_image' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80', 'size' => '', 'svg' => '', 'alt' => 'Design and development workspace with sketches and laptop'), 'pkg1_title' => 'Starting', 'pkg1_price' => 'From €3,200', 'pkg1_desc' => 'Premium starter presence', 'pkg1_pages' => 'Up to 5', 'pkg1_design' => 'Custom layout &amp; style', 'pkg1_forms' => '1 standard form', 'pkg1_blog' => '—', 'pkg1_newsletter' => '—', 'pkg1_seo' => 'Basic / core SEO setup', 'pkg1_perf' => 'Core optimisations', 'pkg1_analytics' => '—', 'pkg1_access' => 'Best practices', 'pkg1_care' => 'Host anywhere you like – add a maintenance plan and hosting is included.', 'pkg2_featured' => '', 'pkg2_title' => 'Grow', 'pkg2_price' => 'From €4,100', 'pkg2_desc' => 'Structured, content-driven site', 'pkg2_pages' => 'Up to 10', 'pkg2_design' => 'Content-driven page design &amp; layout', 'pkg2_forms' => 'Advanced logic + blog-ready forms', 'pkg2_blog' => 'Setup + layout', 'pkg2_newsletter' => 'Basic (Mailchimp)', 'pkg2_seo' => 'Thoughtful on-page SEO', 'pkg2_perf' => 'Caching &amp; delivery', 'pkg2_analytics' => 'GA4', 'pkg2_access' => 'AA-focused', 'pkg2_care' => 'Host anywhere you like – add a maintenance plan and hosting is included.', 'pkg3_title' => 'Pro', 'pkg3_price' => 'From €6,300', 'pkg3_desc' => 'Shopify store &amp; custom builds', 'pkg3_pages' => '12+ or custom scope', 'pkg3_design' => 'Bespoke theme (Kadence/Pinegrow)', 'pkg3_forms' => 'Conditional forms &amp; integrations', 'pkg3_blog' => 'Extended features + SEO structure', 'pkg3_newsletter' => 'Automation-ready', 'pkg3_seo' => 'Structured data + technical SEO audit', 'pkg3_perf' => 'Full-stack + CDN configuration', 'pkg3_analytics' => 'GA4 + events', 'pkg3_access' => 'AA+ review', 'pkg3_care' => 'Host anywhere you like – add a maintenance plan and hosting is included.', 'workflow_title' => 'How we work - workflow <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'workflow_intro' => 'Every plan starts with a content and structure review, custom layouts and a lean, modern WordPress build.', 'wf1_title' => '01 — Discovery', 'wf1_tagline' => 'Intent, audience, constraints', 'wf1_body' => 'We map goals, content and guardrails, then set a lean, realistic scope that matches your resources and timeline.', 'wf1_focus_title' => 'Detailed focus: Content &amp; structure', 'wf1_focus_list' => '<ul class="list-disc pl-5 space-y-1 text-gray-800"> <li>Content and page mapping before design</li> <li>Navigation and hierarchy that match your project</li> <li>Wireframes / low-fidelity layouts where needed</li> <li>Simple content guidelines (tone, length, image ratios)</li> </ul>', 'wf2_title' => '02 — Design', 'wf2_tagline' => 'System &amp; composition', 'wf2_body' => 'Grid, type, components. Editorial clarity over noise, with layouts tuned to your photography and visual language.', 'wf2_focus_title' => 'Detailed focus: Design &amp; front-end', 'wf2_focus_list' => '<ul class="list-disc pl-5 space-y-1 text-gray-800"> <li>Custom layout and type system (no generic theme skins)</li> <li>Responsive grids, balanced margins and rhythm</li> <li>Gentle motion where it helps pacing (no circus)</li> <li>Design tuned to your existing brand assets and photography</li> </ul>', 'wf3_title' => '03 — Build', 'wf3_tagline' => 'From prototype to live site', 'wf3_body' => 'We build a custom theme with the right tools for your project (Pinegrow, Kadence, block editor), keeping the stack lean and documented.', 'wf3_focus_title' => 'Detailed focus: Build &amp; handover', 'wf3_focus_list' => '<ul class="list-disc pl-5 space-y-1 text-gray-800"> <li>Modern block-based WordPress build (Kadence + custom blocks)</li> <li>Performance-minded decisions (caching, images, fonts)</li> <li>Basic SEO and analytics setup</li> </ul>', 'wf4_title' => '04 — Launch &amp; care', 'wf4_tagline' => 'Deploy, optimise, support', 'wf4_body' => 'We launch, run basic performance and analytics passes, and—if you want us on call—plug you into a care plan with hosting, updates and strategic time.', 'wf4_focus_title' => 'Detailed focus: Launch &amp; support', 'wf4_focus_list' => '<ul class="list-disc pl-5 space-y-1 text-gray-800"> <li>Handover session so you can update comfortably</li> <li>Short, practical documentation (no 40-page PDF)</li> <li>Optional ongoing care plans with hosting included</li> </ul>', 'hosting_title' => 'hosting + care', 'hosting_intro' => 'Our maintenance plans include fast, secure managed WordPress hosting via our trusted partners SiteGround and Hostinger – so hosting, updates and monitoring all sit under one team. Hosting + Care are optional and work best when we migrate your site to our managed stack, so you can worry about one less thing.', 'care1_title' => 'Essential Care', 'care1_price' => 'From &euro;60 / month', 'care1_best' => 'Small brochure / portfolio sites', 'care1_hosting' => 'Included – managed on our EU-based SiteGround / Hostinger servers', 'care1_updates' => 'Monthly WordPress core &amp; plugin updates', 'care1_backups' => 'Daily backups with 30-day retention', 'care1_security' => 'Firewall + malware scans', 'care1_perf' => 'Core performance checks &amp; cache tuning', 'care1_support' => 'Email support + 1 small content tweak / month', 'care1_consult' => '1× 60 min strategic check-in per year', 'care2_featured' => '', 'care2_title' => 'Growth Care', 'care2_price' => 'From €130 / month', 'care2_best' => 'Growing content sites &amp; active blogs', 'care2_hosting' => 'Included – managed hosting + staging environment (SiteGround / Hostinger)', 'care2_updates' => 'Weekly core, theme &amp; plugin updates', 'care2_backups' => 'Twice-daily backups with 60-day retention', 'care2_security' => 'Advanced firewall, uptime monitoring &amp; alerts', 'care2_perf' => 'Caching, image optimisation &amp; CDN guidance', 'care2_support' => 'Email support + up to 3 small tasks / month', 'care2_consult' => '2× 60 min growth &amp; UX sessions per year', 'care3_title' => 'Pro Care', 'care3_price' => 'From €220 / month', 'care3_best' => 'E-commerce &amp; mission-critical sites', 'care3_hosting' => 'Included – high-availability hosting + CDN (SiteGround / Hostinger)', 'care3_updates' => 'Weekly updates with compatibility checks', 'care3_backups' => 'Frequent backups with 90-day retention', 'care3_security' => 'Extended monitoring &amp; hardening, priority alerts', 'care3_perf' => 'Performance sprints &amp; load-time reviews', 'care3_support' => 'Priority support &amp; emergency incident handling', 'care3_consult' => 'Up to 4× 60 min strategic sessions per year', 'plus_title' => 'Plus services', 'plus1_title' => 'Digital &amp; brand consulting', 'plus1_desc' => 'Ongoing strategic sessions on positioning, site evolution, content priorities and how your digital touchpoints work together.', 'plus2_title' => 'Content &amp; copy support', 'plus2_desc' => 'Help refining key headlines, microcopy and page flows so the site reads clearly and feels aligned with your brand voice.', 'plus3_title' => 'Photography &amp; art direction', 'plus3_desc' => 'Guidance on image selection, art direction and how to prepare assets for web so the visual language feels coherent and intentional.', 'plus4_title' => 'Training &amp; handover sessions', 'plus4_desc' => 'Short, focused workshops to train your team on editing content, using blocks and keeping the site in good shape over time.'
            ),
            'dynamic' => true,
            'version' => '1.0.49'
        ) );
