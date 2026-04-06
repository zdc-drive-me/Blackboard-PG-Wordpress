<?php

        PG_Blocks_v4::register_block_type( array(
            'name' => 'blackboard-by-zdc/contact-grid',
            'title' => __( 'Contact Info Block', 'blackboard_by_zdc' ),
            'description' => __( 'Contact details in a responsive grid', 'blackboard_by_zdc' ),
            'category' => 'inner_pages_blocks',
            'render_template' => 'blocks/contact-grid/contact-grid.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/contact-grid/contact-grid.js',
            'attributes' => array(
                'contact_image_link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '', 'post_type' => '', 'title' => '')
                ),
                'contact_image' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/assets/images/contact.webp' ), 'size' => '', 'svg' => '', 'alt' => '')
                ),
                'address_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Office Address'
                ),
                'address_line1' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Blackboard'
                ),
                'address_line2' => array(
                    'type' => array('string', 'null'),
                    'default' => 'By zdc studio'
                ),
                'address_line3' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Via A Corelli 34'
                ),
                'address_line4' => array(
                    'type' => array('string', 'null'),
                    'default' => '20135 Milano'
                ),
                'phone_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Telephone'
                ),
                'phone_text' => array(
                    'type' => array('string', 'null'),
                    'default' => '+39 34561862989'
                ),
                'email_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'contact us'
                ),
                'email_text' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => 'mailto:blackboard@zdcstudio.com?subject=type%20the%20subject', 'post_type' => '', 'title' => '')
                ),
                'vat_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'it vat number'
                ),
                'vat_value' => array(
                    'type' => array('string', 'null'),
                    'default' => 'IT12874540961'
                ),
                'collab_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'in collaboration with'
                ),
                'link_url' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => 'https://www.zdcstudio.com', 'post_type' => '', 'title' => '')
                ),
                'link_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'zdcstudio.com'
                ),
                'studio_email_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'email zdc studio'
                ),
                'studio_email_text' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => 'mailto:info@zdcstudio.com?subject=type%20the%20subject', 'post_type' => '', 'title' => '')
                )
            ),
            'example' => array(
'contact_image_link' => array('post_id' => 0, 'url' => '', 'post_type' => '', 'title' => ''), 'contact_image' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/assets/images/contact.webp' ), 'size' => '', 'svg' => '', 'alt' => ''), 'address_label' => 'Office Address', 'address_line1' => 'Blackboard', 'address_line2' => 'By zdc studio', 'address_line3' => 'Via A Corelli 34', 'address_line4' => '20135 Milano', 'phone_label' => 'Telephone', 'phone_text' => '+39 34561862989', 'email_label' => 'contact us', 'email_text' => array('post_id' => 0, 'url' => 'mailto:blackboard@zdcstudio.com?subject=type%20the%20subject', 'post_type' => '', 'title' => ''), 'vat_label' => 'it vat number', 'vat_value' => 'IT12874540961', 'collab_label' => 'in collaboration with', 'link_url' => array('post_id' => 0, 'url' => 'https://www.zdcstudio.com', 'post_type' => '', 'title' => ''), 'link_label' => 'zdcstudio.com', 'studio_email_label' => 'email zdc studio', 'studio_email_text' => array('post_id' => 0, 'url' => 'mailto:info@zdcstudio.com?subject=type%20the%20subject', 'post_type' => '', 'title' => '')
            ),
            'dynamic' => true,
            'version' => '1.0.41'
        ) );
