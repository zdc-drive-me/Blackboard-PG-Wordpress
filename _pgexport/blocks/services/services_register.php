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
                'plans_heading' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Project scales <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'plans_intro' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Projects vary in scope. Each follows the same approach — structure first, then design and execution — adapted to scale and complexity.'
                ),
                'pkg1_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Foundation'
                ),
                'pkg1_price' => array(
                    'type' => array('string', 'null'),
                    'default' => '€3,200'
                ),
                'pkg1_desc' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A focused build with essential structure, custom design and core functionality.'
                ),
                'pkg1_pages' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Up to 6'
                ),
                'pkg1_design' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Custom layout &amp; visual system'
                ),
                'pkg1_forms' => array(
                    'type' => array('string', 'null'),
                    'default' => '1 contact form'
                ),
                'pkg1_blog' => array(
                    'type' => array('string', 'null'),
                    'default' => '&ensp;—'
                ),
                'pkg1_newsletter' => array(
                    'type' => array('string', 'null'),
                    'default' => '&ensp;—'
                ),
                'pkg1_seo' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Search-ready foundation'
                ),
                'pkg1_perf' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Fast load, mobile-ready'
                ),
                'pkg1_analytics' => array(
                    'type' => array('string', 'null'),
                    'default' => '&ensp;—'
                ),
                'pkg1_access' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Works for everyone'
                ),
                'pkg2_featured' => array(
                    'type' => array('string', 'null'),
                    'default' => 'true'
                ),
                'pkg2_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Structured'
                ),
                'pkg2_price' => array(
                    'type' => array('string', 'null'),
                    'default' => '€4,100'
                ),
                'pkg2_desc' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A content-driven system with expanded pages, flexible layouts and integrated features.'
                ),
                'pkg2_pages' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Up to 10'
                ),
                'pkg2_design' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Content-driven layout, structured for growth'
                ),
                'pkg2_forms' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Smart forms with routing logic'
                ),
                'pkg2_blog' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Blog-ready, structured for content'
                ),
                'pkg2_newsletter' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Email signup integration'
                ),
                'pkg2_seo' => array(
                    'type' => array('string', 'null'),
                    'default' => 'On-page SEO, thoughtfully applied'
                ),
                'pkg2_perf' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Optimised loading &amp; delivery'
                ),
                'pkg2_analytics' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Traffic &amp; behaviour tracking'
                ),
                'pkg2_access' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Inclusive by design'
                ),
                'pkg3_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Extended'
                ),
                'pkg3_price' => array(
                    'type' => array('string', 'null'),
                    'default' => '€6,300'
                ),
                'pkg3_desc' => array(
                    'type' => array('string', 'null'),
                    'default' => 'A more complex system with custom builds, integrations and advanced performance.'
                ),
                'pkg3_pages' => array(
                    'type' => array('string', 'null'),
                    'default' => '12+ or custom scope'
                ),
                'pkg3_design' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Fully custom theme, built from scratch'
                ),
                'pkg3_forms' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Complex forms &amp; third-party connections'
                ),
                'pkg3_blog' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Full editorial system + search structure'
                ),
                'pkg3_newsletter' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Automation-ready'
                ),
                'pkg3_seo' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Structured data + full technical audit'
                ),
                'pkg3_perf' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Loads fast globally, fully optimised'
                ),
                'pkg3_analytics' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Detailed tracking &amp; event mapping'
                ),
                'pkg3_access' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Rigorously tested'
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
                ),
                'hosting_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Hosting &amp; Care <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>'
                ),
                'hosting_intro' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Every WordPress site needs ongoing technical maintenance &#8212; updates, backups, security checks. The question is not whether, but who handles it.<br><br>You can manage your own hosting, provided it meets a minimum quality standard we agree on together. Or we manage everything under one of our care plans, which include hosting as part of the service.<br><br>Either way, the site remains yours.'
                ),
                'care_path_a' => array(
                    'type' => array('string', 'null'),
                    'default' => ''
                ),
                'care1_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Self-managed'
                ),
                'care1_tagline' => array(
                    'type' => array('string', 'null'),
                    'default' => 'You handle hosting. We remain available.'
                ),
                'care1_body' => array(
                    'type' => array('string', 'null'),
                    'default' => 'You host the site with your own provider. We will advise on minimum requirements — server environment, caching, SSL, backup policy — so the site continues to perform as built. Technical maintenance is your responsibility, though we remain available for agreed support when needed.'
                ),
                'care1_includes_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'What this includes'
                ),
                'care1_includes' => array(
                    'type' => array('string', 'null'),
                    'default' => '<li>Hosting requirements brief at project handover</li> <li>One post-launch technical check (30 days)</li> <li>Documentation so your team can manage day-to-day updates</li> <li>Support available separately, on request</li>'
                ),
                'care_path_b' => array(
                    'type' => array('string', 'null'),
                    'default' => ''
                ),
                'care2_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Managed care'
                ),
                'care2_price' => array(
                    'type' => array('string', 'null'),
                    'default' => 'From €60 / month — hosting included'
                ),
                'care2_body' => array(
                    'type' => array('string', 'null'),
                    'default' => 'We manage the full technical layer of your site — hosting, updates, security, backups — on our managed infrastructure via SiteGround or Hostinger. You focus on the work. We ensure the system stays stable, secure and current.'
                ),
                'care2_includes_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'What this includes'
                ),
                'care2_includes' => array(
                    'type' => array('string', 'null'),
                    'default' => '<li>Managed hosting on EU-based servers (SiteGround / Hostinger)</li> <li>Regular WordPress core, theme &amp; plugin updates</li> <li>Daily backups with rolling retention</li> <li>Security monitoring, firewall &amp; malware checks</li> <li>Performance checks &amp; uptime monitoring</li> <li>2 hours / month content credit — page edits, text updates, image swaps (not new features)</li> <li>One strategic check-in per year</li>'
                ),
                'care2_note' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Scope and pricing vary by project complexity. Full details available on request.'
                )
            ),
            'example' => array(
'about_heading' => 'how we think and build<span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'heading_text' => 'What gets built depends on the clarity of the decisions behind it.', 'sidebar_block_1_title' => 'Structure', 'sidebar_p1' => 'Architecture, content, navigation and key decisions &#8212; including what to build, and what to leave out. Nothing is designed until the structure is clear.', 'sidebar_block_2_title' => 'Design &amp; Development', 'sidebar_p2' => 'Custom layout, type system and visual logic &#8212; no generic themes. Each component is built to the structure, with attention to performance, balance and precision.', 'sidebar_block_3_title' => 'Evolution', 'sidebar_p3' => 'Digital systems are not finished at launch. Content shifts, priorities change, pages are added. The structure is built to accommodate this &#8212; not to resist it.', 'sidebar_block_4_title' => 'Care', 'sidebar_p4' => 'Handover, documentation and &#8212; where needed &#8212; ongoing support. The system is yours. We make sure you can use it with confidence, and that someone is on hand when things need attention.', 'top_label' => 'Services <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'hero_image' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80', 'size' => '', 'svg' => '', 'alt' => 'Design and development workspace'), 'plus1_block' => '', 'plus1_title' => 'web design &amp; development', 'plus1_desc' => 'Custom websites and digital systems, designed and developed from scratch with attention to structure, performance and long-term use.', 'plus2_block' => '', 'plus2_title' => 'digital &amp; brand consulting', 'plus2_desc' => 'Offer, positioning, audience and direction for digital projects that need to be clarified before they are built or reworked.', 'plus3_block' => '', 'plus3_title' => 'content and copy support', 'plus3_desc' => 'Messaging, website copy and content hierarchy for projects that need to explain themselves more clearly.', 'plus4_block' => '', 'plus4_title' => 'photography&nbsp; &amp; art direction<br>', 'plus4_desc' => 'Image direction, photography briefs and visual guidance for web and digital use.', 'plans_heading' => 'Project scales <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'plans_intro' => 'Projects vary in scope. Each follows the same approach — structure first, then design and execution — adapted to scale and complexity.', 'pkg1_title' => 'Foundation', 'pkg1_price' => '€3,200', 'pkg1_desc' => 'A focused build with essential structure, custom design and core functionality.', 'pkg1_pages' => 'Up to 6', 'pkg1_design' => 'Custom layout &amp; visual system', 'pkg1_forms' => '1 contact form', 'pkg1_blog' => '&ensp;—', 'pkg1_newsletter' => '&ensp;—', 'pkg1_seo' => 'Search-ready foundation', 'pkg1_perf' => 'Fast load, mobile-ready', 'pkg1_analytics' => '&ensp;—', 'pkg1_access' => 'Works for everyone', 'pkg2_featured' => '', 'pkg2_title' => 'Structured', 'pkg2_price' => '€4,100', 'pkg2_desc' => 'A content-driven system with expanded pages, flexible layouts and integrated features.', 'pkg2_pages' => 'Up to 10', 'pkg2_design' => 'Content-driven layout, structured for growth', 'pkg2_forms' => 'Smart forms with routing logic', 'pkg2_blog' => 'Blog-ready, structured for content', 'pkg2_newsletter' => 'Email signup integration', 'pkg2_seo' => 'On-page SEO, thoughtfully applied', 'pkg2_perf' => 'Optimised loading &amp; delivery', 'pkg2_analytics' => 'Traffic &amp; behaviour tracking', 'pkg2_access' => 'Inclusive by design', 'pkg3_title' => 'Extended', 'pkg3_price' => '€6,300', 'pkg3_desc' => 'A more complex system with custom builds, integrations and advanced performance.', 'pkg3_pages' => '12+ or custom scope', 'pkg3_design' => 'Fully custom theme, built from scratch', 'pkg3_forms' => 'Complex forms &amp; third-party connections', 'pkg3_blog' => 'Full editorial system + search structure', 'pkg3_newsletter' => 'Automation-ready', 'pkg3_seo' => 'Structured data + full technical audit', 'pkg3_perf' => 'Loads fast globally, fully optimised', 'pkg3_analytics' => 'Detailed tracking &amp; event mapping', 'pkg3_access' => 'Rigorously tested', 'link' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'label' => 'How much does a website cost ?', 'start_project_email_link' => array('post_id' => 0, 'url' => 'mailto:blackboard@zdcstudio.com?subject=Start%20a%20Project', 'post_type' => '', 'title' => ''), 'hosting_title' => 'Hosting &amp; Care <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>', 'hosting_intro' => 'Every WordPress site needs ongoing technical maintenance &#8212; updates, backups, security checks. The question is not whether, but who handles it.<br><br>You can manage your own hosting, provided it meets a minimum quality standard we agree on together. Or we manage everything under one of our care plans, which include hosting as part of the service.<br><br>Either way, the site remains yours.', 'care_path_a' => '', 'care1_title' => 'Self-managed', 'care1_tagline' => 'You handle hosting. We remain available.', 'care1_body' => 'You host the site with your own provider. We will advise on minimum requirements — server environment, caching, SSL, backup policy — so the site continues to perform as built. Technical maintenance is your responsibility, though we remain available for agreed support when needed.', 'care1_includes_title' => 'What this includes', 'care1_includes' => '<li>Hosting requirements brief at project handover</li> <li>One post-launch technical check (30 days)</li> <li>Documentation so your team can manage day-to-day updates</li> <li>Support available separately, on request</li>', 'care_path_b' => '', 'care2_title' => 'Managed care', 'care2_price' => 'From €60 / month — hosting included', 'care2_body' => 'We manage the full technical layer of your site — hosting, updates, security, backups — on our managed infrastructure via SiteGround or Hostinger. You focus on the work. We ensure the system stays stable, secure and current.', 'care2_includes_title' => 'What this includes', 'care2_includes' => '<li>Managed hosting on EU-based servers (SiteGround / Hostinger)</li> <li>Regular WordPress core, theme &amp; plugin updates</li> <li>Daily backups with rolling retention</li> <li>Security monitoring, firewall &amp; malware checks</li> <li>Performance checks &amp; uptime monitoring</li> <li>2 hours / month content credit — page edits, text updates, image swaps (not new features)</li> <li>One strategic check-in per year</li>', 'care2_note' => 'Scope and pricing vary by project complexity. Full details available on request.'
            ),
            'dynamic' => true,
            'version' => '1.0.103'
        ) );
