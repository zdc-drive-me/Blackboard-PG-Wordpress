
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
    
    const block = registerBlockType( 'blackboard-by-zdc/budget-and-quotes', {
        apiVersion: 2,
        title: 'Budget and Quotes',
        description: 'Guidance on when a higher budget makes sense and how to read a website quote',
        icon: 'block-default',
        category: 'blackboard_blocks',
        keywords: [],
        supports: {},
        attributes: {
            budget_title: {
                type: ['string', 'null'],
                default: `When a higher budget makes sense <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            budget_intro: {
                type: ['string', 'null'],
                default: `A higher budget is justified when the website is expected to support more than a basic presence.`,
            },
            budget_items: {
                type: ['string', 'null'],
                default: `<li class="border-t border-black/10 pt-2">The site needs to generate qualified enquiries</li> <li class="border-t border-black/10 pt-2">Content will grow over time</li> <li class="border-t border-black/10 pt-2">The brand needs stronger digital credibility</li> <li class="border-t border-black/10 pt-2">There are multiple audiences or services</li> <li class="border-t border-black/10 pt-2">The site must be multilingual</li> <li class="border-t border-black/10 pt-2">There are integrations with external tools</li> <li class="border-t border-black/10 pt-2">Performance and search visibility matter</li> <li class="border-t border-black/10 pt-2">The system must be easy to maintain and evolve</li>`,
            },
            budget_note: {
                type: ['string', 'null'],
                default: `In these cases, the website is not just a page online. It becomes part of how the organisation works, communicates and is understood.`,
            },
            quotes_title: {
                type: ['string', 'null'],
                default: `How to read a website quote <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            quotes_intro: {
                type: ['string', 'null'],
                default: `A useful quote should make the work visible. It should not only state a final number.`,
            },
            quotes_items: {
                type: ['string', 'null'],
                default: `<li class="border-t border-black/10 pt-2">What is included?</li> <li class="border-t border-black/10 pt-2">What is excluded?</li> <li class="border-t border-black/10 pt-2">How many pages or templates are included?</li> <li class="border-t border-black/10 pt-2">Is the design custom or template-based?</li> <li class="border-t border-black/10 pt-2">Is the CMS structure defined?</li> <li class="border-t border-black/10 pt-2">Are performance and SEO foundations included?</li> <li class="border-t border-black/10 pt-2">Who owns the domain, hosting and accounts?</li> <li class="border-t border-black/10 pt-2">Is handover included?</li> <li class="border-t border-black/10 pt-2">What happens after launch?</li>`,
            }
        },
        example: { attributes: { budget_title: `When a higher budget makes sense <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, budget_intro: `A higher budget is justified when the website is expected to support more than a basic presence.`, budget_items: `<li class="border-t border-black/10 pt-2">The site needs to generate qualified enquiries</li> <li class="border-t border-black/10 pt-2">Content will grow over time</li> <li class="border-t border-black/10 pt-2">The brand needs stronger digital credibility</li> <li class="border-t border-black/10 pt-2">There are multiple audiences or services</li> <li class="border-t border-black/10 pt-2">The site must be multilingual</li> <li class="border-t border-black/10 pt-2">There are integrations with external tools</li> <li class="border-t border-black/10 pt-2">Performance and search visibility matter</li> <li class="border-t border-black/10 pt-2">The system must be easy to maintain and evolve</li>`, budget_note: `In these cases, the website is not just a page online. It becomes part of how the organisation works, communicates and is understood.`, quotes_title: `How to read a website quote <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, quotes_intro: `A useful quote should make the work visible. It should not only state a final number.`, quotes_items: `<li class="border-t border-black/10 pt-2">What is included?</li> <li class="border-t border-black/10 pt-2">What is excluded?</li> <li class="border-t border-black/10 pt-2">How many pages or templates are included?</li> <li class="border-t border-black/10 pt-2">Is the design custom or template-based?</li> <li class="border-t border-black/10 pt-2">Is the CMS structure defined?</li> <li class="border-t border-black/10 pt-2">Are performance and SEO foundations included?</li> <li class="border-t border-black/10 pt-2">Who owns the domain, hosting and accounts?</li> <li class="border-t border-black/10 pt-2">Is handover included?</li> <li class="border-t border-black/10 pt-2">What happens after launch?</li>` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ 'aria-labelledby': 'invest-more-heading' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10' }, [' ', ' ', el('div', {}, [' ', el(RichText, { tagName: 'h2', id: 'invest-more-heading', className: 'flex font-semibold gap-2 items-center mb-4 text-xs uppercase', value: propOrDefault( props.attributes.budget_title, 'budget_title' ), onChange: function(val) { setAttributes( {budget_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed mb-4 text-base text-neutral-900', value: propOrDefault( props.attributes.budget_intro, 'budget_intro' ), onChange: function(val) { setAttributes( {budget_intro: val }) } }), ' ', el(RichText, { tagName: 'ul', className: 'font-light space-y-2 text-base text-neutral-900', value: propOrDefault( props.attributes.budget_items, 'budget_items' ), onChange: function(val) { setAttributes( {budget_items: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed mt-4 text-neutral-600 text-xs', value: propOrDefault( props.attributes.budget_note, 'budget_note' ), onChange: function(val) { setAttributes( {budget_note: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', ' ', el('div', {}, [' ', el(RichText, { tagName: 'h2', className: 'flex font-semibold gap-2 items-center mb-4 text-xs uppercase', value: propOrDefault( props.attributes.quotes_title, 'quotes_title' ), onChange: function(val) { setAttributes( {quotes_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed mb-4 text-base text-neutral-900', value: propOrDefault( props.attributes.quotes_intro, 'quotes_intro' ), onChange: function(val) { setAttributes( {quotes_intro: val }) } }), ' ', el(RichText, { tagName: 'ul', className: 'font-light space-y-2 text-base text-neutral-900', value: propOrDefault( props.attributes.quotes_items, 'quotes_items' ), onChange: function(val) { setAttributes( {quotes_items: val }) } }), ' ']), ' ']), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.budget_title,
                                        help: __( '' ),
                                        label: __( 'Budget title' ),
                                        onChange: function(val) { setAttributes({budget_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Budget introduction' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.budget_intro,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({budget_intro: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Budget items' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.budget_items,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({budget_items: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.budget_note,
                                        help: __( '' ),
                                        label: __( 'Budget note' ),
                                        onChange: function(val) { setAttributes({budget_note: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.quotes_title,
                                        help: __( '' ),
                                        label: __( 'Quotes title' ),
                                        onChange: function(val) { setAttributes({quotes_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Quotes introduction' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.quotes_intro,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({quotes_intro: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Quotes items' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.quotes_items,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({quotes_items: val}) },
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
