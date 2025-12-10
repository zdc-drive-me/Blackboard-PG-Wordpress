
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
    
    const block = registerBlockType( 'blackboard-by-zdc/privacy-policy-block', {
        apiVersion: 2,
        title: 'Privacy Policy Block',
        description: 'Privacy policy page content with company information and GDPR compliance details',
        icon: 'privacy',
        category: 'inner_pages_blocks',
        keywords: [],
        supports: {},
        attributes: {
            page_title: {
                type: ['string', 'null'],
                default: `Privacy Policy`,
            },
            effective_date: {
                type: ['string', 'null'],
                default: `Effective date: June 2025`,
            },
            intro_text: {
                type: ['string', 'null'],
                default: `At ZDC SRL, we are committed to protecting your privacy. This policy explains how we handle your data while you visit our site.`,
            },
            section1_title: {
                type: ['string', 'null'],
                default: `1. Data Collection`,
            },
            section1_content: {
                type: ['string', 'null'],
                default: `We do not use analytics tools such as Google Analytics, nor do we embed fonts from external services like Google Fonts. Our website does not track users for marketing purposes.`,
            },
            section2_title: {
                type: ['string', 'null'],
                default: `2. Cookies`,
            },
            section2_content: {
                type: ['string', 'null'],
                default: `This is a static website and only uses essential cookies required for proper functioning. No third-party cookies are used.`,
            },
            section3_title: {
                type: ['string', 'null'],
                default: `3. Contact Form`,
            },
            section3_content: {
                type: ['string', 'null'],
                default: `Our contact form requires your consent before submission. The information you provide is not stored on our servers and is used solely to respond to your request.`,
            },
            section4_title: {
                type: ['string', 'null'],
                default: `4. Data Retention`,
            },
            section4_content: {
                type: ['string', 'null'],
                default: `We do not retain personal information unless explicitly required to fulfill a request you make.`,
            },
            section5_title: {
                type: ['string', 'null'],
                default: `5. GDPR Compliance`,
            },
            section5_content: {
                type: ['string', 'null'],
                default: `In accordance with the General Data Protection Regulation (EU 2016/679), you have the right to access, rectify, or delete any personal data you may have submitted. To exercise these rights, please contact us.`,
            },
            section6_title: {
                type: ['string', 'null'],
                default: `6. Company Information`,
            },
            company_info: {
                type: ['string', 'null'],
                default: `ZDC SRL<br/> Via Corelli 34<br/> 20134 Milan, Italy<br/> P.IVA: IT12874540961<br/> Email: <a href="mailto:info@zdcstudio.com" class="text-neutral-950 hover:text-new_blue-950">info@zdcstudio.com</a>`,
            },
            section7_title: {
                type: ['string', 'null'],
                default: `7. Changes to This Policy`,
            },
            section7_content: {
                type: ['string', 'null'],
                default: `We reserve the right to update this Privacy Policy. Updates will be posted on this page.`,
            },
            contact_text: {
                type: ['string', 'null'],
                default: `For any questions or concerns, please <span><a href="mailto:info@zdcstudio.com?subject=Privacy Policy info" class="text-blue-600 hover:text-blue-800 underline">contact us.</a></span>`,
            }
        },
        example: { attributes: { page_title: `Privacy Policy`, effective_date: `Effective date: June 2025`, intro_text: `At ZDC SRL, we are committed to protecting your privacy. This policy explains how we handle your data while you visit our site.`, section1_title: `1. Data Collection`, section1_content: `We do not use analytics tools such as Google Analytics, nor do we embed fonts from external services like Google Fonts. Our website does not track users for marketing purposes.`, section2_title: `2. Cookies`, section2_content: `This is a static website and only uses essential cookies required for proper functioning. No third-party cookies are used.`, section3_title: `3. Contact Form`, section3_content: `Our contact form requires your consent before submission. The information you provide is not stored on our servers and is used solely to respond to your request.`, section4_title: `4. Data Retention`, section4_content: `We do not retain personal information unless explicitly required to fulfill a request you make.`, section5_title: `5. GDPR Compliance`, section5_content: `In accordance with the General Data Protection Regulation (EU 2016/679), you have the right to access, rectify, or delete any personal data you may have submitted. To exercise these rights, please contact us.`, section6_title: `6. Company Information`, company_info: `ZDC SRL<br/> Via Corelli 34<br/> 20134 Milan, Italy<br/> P.IVA: IT12874540961<br/> Email: <a href="mailto:info@zdcstudio.com" class="text-neutral-950 hover:text-new_blue-950">info@zdcstudio.com</a>`, section7_title: `7. Changes to This Policy`, section7_content: `We reserve the right to update this Privacy Policy. Updates will be posted on this page.`, contact_text: `For any questions or concerns, please <span><a href="mailto:info@zdcstudio.com?subject=Privacy Policy info" class="text-blue-600 hover:text-blue-800 underline">contact us.</a></span>` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'max-w-7xl md:px-6 mx-4 px-4 py-12' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('div', { ...blockProps }, [' ', el(RichText, { tagName: 'h1', className: 'text-4xl font-serif mb-6', value: propOrDefault( props.attributes.page_title, 'page_title' ), onChange: function(val) { setAttributes( {page_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'text-sm mb-4', value: propOrDefault( props.attributes.effective_date, 'effective_date' ), onChange: function(val) { setAttributes( {effective_date: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'text-sm mb-4', value: propOrDefault( props.attributes.intro_text, 'intro_text' ), onChange: function(val) { setAttributes( {intro_text: val }) } }), ' ', el(RichText, { tagName: 'h2', className: 'text-xl font-semibold mt-6 mb-2', value: propOrDefault( props.attributes.section1_title, 'section1_title' ), onChange: function(val) { setAttributes( {section1_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'text-sm mb-4', value: propOrDefault( props.attributes.section1_content, 'section1_content' ), onChange: function(val) { setAttributes( {section1_content: val }) } }), ' ', el(RichText, { tagName: 'h2', className: 'text-xl font-semibold mt-6 mb-2', value: propOrDefault( props.attributes.section2_title, 'section2_title' ), onChange: function(val) { setAttributes( {section2_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'text-sm mb-4', value: propOrDefault( props.attributes.section2_content, 'section2_content' ), onChange: function(val) { setAttributes( {section2_content: val }) } }), ' ', el(RichText, { tagName: 'h2', className: 'text-xl font-semibold mt-6 mb-2', value: propOrDefault( props.attributes.section3_title, 'section3_title' ), onChange: function(val) { setAttributes( {section3_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'text-sm mb-4', value: propOrDefault( props.attributes.section3_content, 'section3_content' ), onChange: function(val) { setAttributes( {section3_content: val }) } }), ' ', el(RichText, { tagName: 'h2', className: 'text-xl font-semibold mt-6 mb-2', value: propOrDefault( props.attributes.section4_title, 'section4_title' ), onChange: function(val) { setAttributes( {section4_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'text-sm mb-4', value: propOrDefault( props.attributes.section4_content, 'section4_content' ), onChange: function(val) { setAttributes( {section4_content: val }) } }), ' ', el(RichText, { tagName: 'h2', className: 'text-xl font-semibold mt-6 mb-2', value: propOrDefault( props.attributes.section5_title, 'section5_title' ), onChange: function(val) { setAttributes( {section5_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'text-sm mb-4', value: propOrDefault( props.attributes.section5_content, 'section5_content' ), onChange: function(val) { setAttributes( {section5_content: val }) } }), ' ', el(RichText, { tagName: 'h2', className: 'text-xl font-semibold mt-6 mb-2', value: propOrDefault( props.attributes.section6_title, 'section6_title' ), onChange: function(val) { setAttributes( {section6_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'text-sm mb-4', value: propOrDefault( props.attributes.company_info, 'company_info' ), onChange: function(val) { setAttributes( {company_info: val }) } }), ' ', el(RichText, { tagName: 'h2', className: 'text-xl font-semibold mt-6 mb-2', value: propOrDefault( props.attributes.section7_title, 'section7_title' ), onChange: function(val) { setAttributes( {section7_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'text-sm mb-4', value: propOrDefault( props.attributes.section7_content, 'section7_content' ), onChange: function(val) { setAttributes( {section7_content: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'text-sm mt-8', value: propOrDefault( props.attributes.contact_text, 'contact_text' ), onChange: function(val) { setAttributes( {contact_text: val }) } }), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.page_title,
                                        help: __( '' ),
                                        label: __( 'Page Title' ),
                                        onChange: function(val) { setAttributes({page_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.effective_date,
                                        help: __( '' ),
                                        label: __( 'Effective Date' ),
                                        onChange: function(val) { setAttributes({effective_date: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Introduction Text' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.intro_text,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({intro_text: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.section1_title,
                                        help: __( '' ),
                                        label: __( 'Section 1 Title' ),
                                        onChange: function(val) { setAttributes({section1_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Section 1 Content' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.section1_content,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({section1_content: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.section2_title,
                                        help: __( '' ),
                                        label: __( 'Section 2 Title' ),
                                        onChange: function(val) { setAttributes({section2_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Section 2 Content' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.section2_content,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({section2_content: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.section3_title,
                                        help: __( '' ),
                                        label: __( 'Section 3 Title' ),
                                        onChange: function(val) { setAttributes({section3_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Section 3 Content' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.section3_content,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({section3_content: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.section4_title,
                                        help: __( '' ),
                                        label: __( 'Section 4 Title' ),
                                        onChange: function(val) { setAttributes({section4_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Section 4 Content' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.section4_content,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({section4_content: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.section5_title,
                                        help: __( '' ),
                                        label: __( 'Section 5 Title' ),
                                        onChange: function(val) { setAttributes({section5_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Section 5 Content' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.section5_content,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({section5_content: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.section6_title,
                                        help: __( '' ),
                                        label: __( 'Section 6 Title' ),
                                        onChange: function(val) { setAttributes({section6_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Company Information' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.company_info,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({company_info: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.section7_title,
                                        help: __( '' ),
                                        label: __( 'Section 7 Title' ),
                                        onChange: function(val) { setAttributes({section7_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Section 7 Content' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.section7_content,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({section7_content: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Contact Text' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.contact_text,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({contact_text: val}) },
                                        })
                                    ]),    
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
