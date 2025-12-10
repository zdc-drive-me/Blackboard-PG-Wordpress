
( function ( blocks, element, blockEditor ) {
    const el = element.createElement,
        registerBlockType = blocks.registerBlockType,
        ServerSideRender = pgGetFeature4("PgGetServerSideRender")(),
        InspectorControls = blockEditor.InspectorControls,
        useBlockProps = blockEditor.useBlockProps;
        
    const {__} = wp.i18n;
    const {ColorPicker, TextControl, ToggleControl, SelectControl, Panel, PanelBody, Disabled, TextareaControl, BaseControl} = wp.components;
    const {useSelect} = wp.data;
    const {RawHTML, Fragment} = element;
   
    const {InnerBlocks, URLInputButton, RichText} = wp.blockEditor;
    const useInnerBlocksProps = blockEditor.useInnerBlocksProps || blockEditor.__experimentalUseInnerBlocksProps;
    
    const propOrDefault = function(val, prop, field) {
        if(block.attributes[prop] && (val === null || val === '')) {
            return field ? block.attributes[prop].default[field] : block.attributes[prop].default;
        }
        return val;
    }
    
    const block = registerBlockType( 'blackboard-by-zdc/contact-grid', {
        apiVersion: 2,
        title: 'Contact Info Block',
        description: 'Contact details in a responsive grid',
        icon: 'block-default',
        category: 'inner_pages_blocks',
        keywords: [],
        supports: {},
        attributes: {
            contact_image_link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '', title: '', 'post_type': null},
            },
            contact_image: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_blackboard_by_zdc ? pg_project_data_blackboard_by_zdc.url : '') + 'assets/images/contact.webp', size: '', svg: '', alt: ''},
            },
            address_label: {
                type: ['string', 'null'],
                default: `Office Address`,
            },
            address_line1: {
                type: ['string', 'null'],
                default: `Blackboard`,
            },
            address_line2: {
                type: ['string', 'null'],
                default: `By zdc studio`,
            },
            address_line3: {
                type: ['string', 'null'],
                default: `Via A Corelli 34`,
            },
            address_line4: {
                type: ['string', 'null'],
                default: `20135 Milano`,
            },
            phone_label: {
                type: ['string', 'null'],
                default: `Telephone`,
            },
            phone_text: {
                type: ['string', 'null'],
                default: `+39 34561862989`,
            },
            email_label: {
                type: ['string', 'null'],
                default: `contact us`,
            },
            email_text: {
                type: ['object', 'null'],
                default: {post_id: 0, url: 'mailto:blackboard@zdcstudio.com?subject=type%20the%20subject', title: '', 'post_type': null},
            },
            vat_label: {
                type: ['string', 'null'],
                default: `it vat number`,
            },
            vat_value: {
                type: ['string', 'null'],
                default: `IT12874540961`,
            },
            collab_label: {
                type: ['string', 'null'],
                default: `in collaboration with`,
            },
            link_url: {
                type: ['object', 'null'],
                default: {post_id: 0, url: 'https://www.zdcstudio.com', title: '', 'post_type': null},
            },
            link_label: {
                type: ['string', 'null'],
                default: `zdcstudio.com`,
            },
            studio_email_label: {
                type: ['string', 'null'],
                default: `email zdc studio`,
            },
            studio_email_text: {
                type: ['string', 'null'],
                default: `info@zdcstudio.com`,
            }
        },
        example: { attributes: { contact_image_link: {post_id: 0, url: '', title: '', 'post_type': null}, contact_image: {id: 0, url: (pg_project_data_blackboard_by_zdc ? pg_project_data_blackboard_by_zdc.url : '') + 'assets/images/contact.webp', size: '', svg: '', alt: ''}, address_label: `Office Address`, address_line1: `Blackboard`, address_line2: `By zdc studio`, address_line3: `Via A Corelli 34`, address_line4: `20135 Milano`, phone_label: `Telephone`, phone_text: `+39 34561862989`, email_label: `contact us`, email_text: {post_id: 0, url: 'mailto:blackboard@zdcstudio.com?subject=type%20the%20subject', title: '', 'post_type': null}, vat_label: `it vat number`, vat_value: `IT12874540961`, collab_label: `in collaboration with`, link_url: {post_id: 0, url: 'https://www.zdcstudio.com', title: '', 'post_type': null}, link_label: `zdcstudio.com`, studio_email_label: `email zdc studio`, studio_email_text: `info@zdcstudio.com` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'pl-4 px-4 py-16 sm:px-4' });
            const setAttributes = props.setAttributes; 
            
            props.contact_image = useSelect(function( select ) {
                return {
                    contact_image: props.attributes.contact_image.id ? select('core').getMedia(props.attributes.contact_image.id) : undefined
                };
            }, [props.attributes.contact_image] ).contact_image;
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el('div', { className: 'grid min-w-0 grid-cols-1 gap-4 pl-4 pr-4 sm:grid-cols-2 md:grid-cols-2 md:gap-8 md:pl-1 md:pr-1 lg:grid-cols-12' }, [' ', el('div', { className: 'lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-2' }, [' ', el('a', { href: propOrDefault( props.attributes.contact_image_link.url, 'contact_image_link', 'url' ), onClick: function(e) { e.preventDefault(); } }, [props.attributes.contact_image && props.attributes.contact_image.svg && pgGetFeature4("pgCreateSVG")(RawHTML, {}, pgGetFeature4("pgMergeInlineSVGAttributes")(propOrDefault( props.attributes.contact_image.svg, 'contact_image', 'svg' ), {})), props.attributes.contact_image && !props.attributes.contact_image.svg && propOrDefault( props.attributes.contact_image.url, 'contact_image', 'url' ) && el('img', { src: propOrDefault( props.attributes.contact_image.url, 'contact_image', 'url' ), alt: propOrDefault( props.attributes.contact_image?.alt, 'contact_image', 'alt' ), className: (props.attributes.contact_image.id ? ('wp-image-' + props.attributes.contact_image.id) : '') })]), ' ']), ' ', el('section', { className: 'border-neutral-300 border-t pt-2 lg:col-start-4 lg:col-end-7 lg:row-start-1 lg:row-end-2' }, [' ', el(RichText, { tagName: 'h5', className: 'text-xs uppercase', value: propOrDefault( props.attributes.address_label, 'address_label' ), onChange: function(val) { setAttributes( {address_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('p', { className: 'leading-tight mt-3' }, [' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.address_line1, 'address_line1' ), onChange: function(val) { setAttributes( {address_line1: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), el('br', {}), ' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.address_line2, 'address_line2' ), onChange: function(val) { setAttributes( {address_line2: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), el('br', {}), ' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.address_line3, 'address_line3' ), onChange: function(val) { setAttributes( {address_line3: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), el('br', {}), ' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.address_line4, 'address_line4' ), onChange: function(val) { setAttributes( {address_line4: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'border-b border-stone-700 mt-3' }), ' ']), ' ', el('div', { className: 'space-y-10 lg:col-start-7 lg:col-end-10 lg:row-start-1 lg:row-end-2' }, [' ', el('section', { className: 'border-neutral-300 border-t col-end-8 col-start-6 pt-2 row-end-2 row-start-1' }, [' ', el(RichText, { tagName: 'h5', className: 'text-xs uppercase', value: propOrDefault( props.attributes.phone_label, 'phone_label' ), onChange: function(val) { setAttributes( {phone_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('p', { className: 'leading-tight mt-3 text-sm' }, [' ', el(RichText, { tagName: 'a', href: 'tel:+442035828257', className: '!no-underline underline-offset-2', value: propOrDefault( props.attributes.phone_text, 'phone_text' ), onChange: function(val) { setAttributes( {phone_text: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ', el('section', { className: 'border-neutral-300 border-t col-end-4 col-start-1 pt-2 row-end-2 row-start-1' }, [' ', el(RichText, { tagName: 'h5', className: 'text-black text-xs uppercase', value: propOrDefault( props.attributes.email_label, 'email_label' ), onChange: function(val) { setAttributes( {email_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('p', { className: 'leading-tight mt-3 text-sm' }, [' ', el('a', { href: propOrDefault( props.attributes.email_text.url, 'email_text', 'url' ), className: '!no-underline', onClick: function(e) { e.preventDefault(); } }, 'General Enquiries'), ' ']), ' ', el('div', { className: 'border-b border-stone-700 mt-3' }), ' ']), ' ']), ' ', el('div', { className: 'space-y-10 lg:col-start-10 lg:col-end-13 lg:row-start-1 lg:row-end-2' }, [' ', el('section', { className: 'border-t border-neutral-300 pt-2' }, [' ', el(RichText, { tagName: 'h5', className: 'text-xs uppercase', value: propOrDefault( props.attributes.vat_label, 'vat_label' ), onChange: function(val) { setAttributes( {vat_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'leading-tight mt-3 text-sm', value: propOrDefault( props.attributes.vat_value, 'vat_value' ), onChange: function(val) { setAttributes( {vat_value: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('div', { className: 'mt-3 border-b border-neutral-300' }), ' ']), ' ', el('section', { className: 'border-t border-neutral-300 pt-2' }, [' ', el(RichText, { tagName: 'h5', className: 'text-xs uppercase', value: propOrDefault( props.attributes.collab_label, 'collab_label' ), onChange: function(val) { setAttributes( {collab_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('p', { className: 'leading-tight mt-3 text-sm' }, [' ', el(RichText, { tagName: 'a', href: propOrDefault( props.attributes.link_url.url, 'link_url', 'url' ), target: '_blank', className: '!no-underline', onClick: function(e) { e.preventDefault(); }, value: propOrDefault( props.attributes.link_label, 'link_label' ), onChange: function(val) { setAttributes( {link_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'mt-3 border-b border-neutral-300' }), ' ']), ' ', el('section', { className: 'border-t border-neutral-300 pt-2' }, [' ', el(RichText, { tagName: 'h5', className: 'text-xs uppercase', value: propOrDefault( props.attributes.studio_email_label, 'studio_email_label' ), onChange: function(val) { setAttributes( {studio_email_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('p', { className: 'leading-tight mt-3 text-sm' }, [' ', el(RichText, { tagName: 'a', href: 'mailto:info@zdcstudio.com?subject=type%20the%20subject', className: '!no-underline', value: propOrDefault( props.attributes.studio_email_text, 'studio_email_text' ), onChange: function(val) { setAttributes( {studio_email_text: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'border-b border-stone-700 mt-3' }), ' ']), ' ']), ' ']), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                        pgGetFeature4("pgMediaImageControl")('contact_image', setAttributes, props, 'full', true, 'Contact Image', '' ),
                                        
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    pgGetFeature4("pgUrlControl")('contact_image_link', setAttributes, props, 'Contact: Image Link', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.address_label,
                                        help: __( '' ),
                                        label: __( 'Address: Label' ),
                                        onChange: function(val) { setAttributes({address_label: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.address_line1,
                                        help: __( '' ),
                                        label: __( 'Address: Line 1' ),
                                        onChange: function(val) { setAttributes({address_line1: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.address_line2,
                                        help: __( '' ),
                                        label: __( 'Address: Line 2' ),
                                        onChange: function(val) { setAttributes({address_line2: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.address_line3,
                                        help: __( '' ),
                                        label: __( 'Address: Line 3' ),
                                        onChange: function(val) { setAttributes({address_line3: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.address_line4,
                                        help: __( '' ),
                                        label: __( 'Address: Line 4' ),
                                        onChange: function(val) { setAttributes({address_line4: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.phone_label,
                                        help: __( '' ),
                                        label: __( 'Phone: Label' ),
                                        onChange: function(val) { setAttributes({phone_label: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.phone_text,
                                        help: __( '' ),
                                        label: __( 'Phone: Number (Text)' ),
                                        onChange: function(val) { setAttributes({phone_text: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.email_label,
                                        help: __( '' ),
                                        label: __( 'Email: Label' ),
                                        onChange: function(val) { setAttributes({email_label: val}) },
                                        type: 'text'
                                    }),
                                    pgGetFeature4("pgUrlControl")('email_text', setAttributes, props, 'Email: Link Text', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.vat_label,
                                        help: __( '' ),
                                        label: __( 'VAT: Label' ),
                                        onChange: function(val) { setAttributes({vat_label: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.vat_value,
                                        help: __( '' ),
                                        label: __( 'VAT: Value' ),
                                        onChange: function(val) { setAttributes({vat_value: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.collab_label,
                                        help: __( '' ),
                                        label: __( 'Collaboration: Label' ),
                                        onChange: function(val) { setAttributes({collab_label: val}) },
                                        type: 'text'
                                    }),
                                    pgGetFeature4("pgUrlControl")('link_url', setAttributes, props, 'Link', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.link_label,
                                        help: __( '' ),
                                        label: __( 'Link label' ),
                                        onChange: function(val) { setAttributes({link_label: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.studio_email_label,
                                        help: __( '' ),
                                        label: __( 'Studio Email: Label' ),
                                        onChange: function(val) { setAttributes({studio_email_label: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.studio_email_text,
                                        help: __( '' ),
                                        label: __( 'Studio Email: Link Text' ),
                                        onChange: function(val) { setAttributes({studio_email_text: val}) },
                                        type: 'text'
                                    }),    
                                ])
                            )
                        ]
                    )                            

            ]);
        },

        save: function(props) {
            return null;
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
