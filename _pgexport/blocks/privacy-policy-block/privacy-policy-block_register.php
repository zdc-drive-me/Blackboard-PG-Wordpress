<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/privacy-policy-block',
            'title' => __( 'Privacy Policy Block', 'blackboard_by_zdc' ),
            'description' => __( 'Privacy policy page content with company information and GDPR compliance details', 'blackboard_by_zdc' ),
            'icon' => 'privacy',
            'category' => 'inner_pages_blocks',
            'render_template' => 'blocks/privacy-policy-block/privacy-policy-block.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/privacy-policy-block/privacy-policy-block.js',
            'attributes' => array(
                'page_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Privacy Policy'
                ),
                'effective_date' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Effective date: June 2025'
                ),
                'intro_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'At ZDC SRL, we are committed to protecting your privacy. This policy explains how we handle your data while you visit our site.'
                ),
                'section1_title' => array(
                    'type' => array('string', 'null'),
                    'default' => '1. Data Collection'
                ),
                'section1_content' => array(
                    'type' => array('string', 'null'),
                    'default' => 'We do not use analytics tools such as Google Analytics, nor do we embed fonts from external services like Google Fonts. Our website does not track users for marketing purposes.'
                ),
                'section2_title' => array(
                    'type' => array('string', 'null'),
                    'default' => '2. Cookies'
                ),
                'section2_content' => array(
                    'type' => array('string', 'null'),
                    'default' => 'This is a static website and only uses essential cookies required for proper functioning. No third-party cookies are used.'
                ),
                'section3_title' => array(
                    'type' => array('string', 'null'),
                    'default' => '3. Contact Form'
                ),
                'section3_content' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Our contact form requires your consent before submission. The information you provide is not stored on our servers and is used solely to respond to your request.'
                ),
                'section4_title' => array(
                    'type' => array('string', 'null'),
                    'default' => '4. Data Retention'
                ),
                'section4_content' => array(
                    'type' => array('string', 'null'),
                    'default' => 'We do not retain personal information unless explicitly required to fulfill a request you make.'
                ),
                'section5_title' => array(
                    'type' => array('string', 'null'),
                    'default' => '5. GDPR Compliance'
                ),
                'section5_content' => array(
                    'type' => array('string', 'null'),
                    'default' => 'In accordance with the General Data Protection Regulation (EU 2016/679), you have the right to access, rectify, or delete any personal data you may have submitted. To exercise these rights, please contact us.'
                ),
                'section6_title' => array(
                    'type' => array('string', 'null'),
                    'default' => '6. Company Information'
                ),
                'company_info' => array(
                    'type' => array('string', 'null'),
                    'default' => 'ZDC SRL<br/> Via Corelli 34<br/> 20134 Milan, Italy<br/> P.IVA: IT12874540961<br/> Email: <a href="mailto:info@zdcstudio.com" class="text-neutral-950 hover:text-new_blue-950">info@zdcstudio.com</a>'
                ),
                'section7_title' => array(
                    'type' => array('string', 'null'),
                    'default' => '7. Changes to This Policy'
                ),
                'section7_content' => array(
                    'type' => array('string', 'null'),
                    'default' => 'We reserve the right to update this Privacy Policy. Updates will be posted on this page.'
                ),
                'contact_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'For any questions or concerns, please <span><a href="mailto:info@zdcstudio.com?subject=Privacy Policy info" class="text-blue-600 hover:text-blue-800 underline">contact us.</a></span>'
                )
            ),
            'example' => array(
'page_title' => 'Privacy Policy', 'effective_date' => 'Effective date: June 2025', 'intro_text' => 'At ZDC SRL, we are committed to protecting your privacy. This policy explains how we handle your data while you visit our site.', 'section1_title' => '1. Data Collection', 'section1_content' => 'We do not use analytics tools such as Google Analytics, nor do we embed fonts from external services like Google Fonts. Our website does not track users for marketing purposes.', 'section2_title' => '2. Cookies', 'section2_content' => 'This is a static website and only uses essential cookies required for proper functioning. No third-party cookies are used.', 'section3_title' => '3. Contact Form', 'section3_content' => 'Our contact form requires your consent before submission. The information you provide is not stored on our servers and is used solely to respond to your request.', 'section4_title' => '4. Data Retention', 'section4_content' => 'We do not retain personal information unless explicitly required to fulfill a request you make.', 'section5_title' => '5. GDPR Compliance', 'section5_content' => 'In accordance with the General Data Protection Regulation (EU 2016/679), you have the right to access, rectify, or delete any personal data you may have submitted. To exercise these rights, please contact us.', 'section6_title' => '6. Company Information', 'company_info' => 'ZDC SRL<br/> Via Corelli 34<br/> 20134 Milan, Italy<br/> P.IVA: IT12874540961<br/> Email: <a href="mailto:info@zdcstudio.com" class="text-neutral-950 hover:text-new_blue-950">info@zdcstudio.com</a>', 'section7_title' => '7. Changes to This Policy', 'section7_content' => 'We reserve the right to update this Privacy Policy. Updates will be posted on this page.', 'contact_text' => 'For any questions or concerns, please <span><a href="mailto:info@zdcstudio.com?subject=Privacy Policy info" class="text-blue-600 hover:text-blue-800 underline">contact us.</a></span>'
            ),
            'dynamic' => true,
            'version' => '1.0.102'
        ) );
