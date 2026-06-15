
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
    
    const block = registerBlockType( 'blackboard-by-zdc/comparison', {
        apiVersion: 2,
        title: 'Comparison',
        description: 'Side-by-side comparison of low-cost vs professional websites',
        icon: 'block-default',
        category: 'blackboard_blocks',
        keywords: [],
        supports: {},
        attributes: {
            section_title: {
                type: ['string', 'null'],
                default: `What is and isn&apos;t included`,
            },
            low_cost_title: {
                type: ['string', 'null'],
                default: `What is usually missing in a low-cost website <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            low_cost_intro: {
                type: ['string', 'null'],
                default: `A very low price is not always wrong, but it usually means the scope is limited. The site may exist online, but some decisions are often skipped.`,
            },
            low_cost_items: {
                type: ['string', 'null'],
                default: `<li class="border-t border-black/10 pt-2">Little or no structure before building</li> <li class="border-t border-black/10 pt-2">Template-based design</li> <li class="border-t border-black/10 pt-2">Generic layouts</li> <li class="border-t border-black/10 pt-2">Limited flexibility</li> <li class="border-t border-black/10 pt-2">Weak content hierarchy</li> <li class="border-t border-black/10 pt-2">Basic SEO setup only</li> <li class="border-t border-black/10 pt-2">Limited performance work</li> <li class="border-t border-black/10 pt-2">No long-term maintenance logic</li> <li class="border-t border-black/10 pt-2">No documentation or handover</li> <li class="border-t border-black/10 pt-2">Difficult future evolution</li>`,
            },
            low_cost_note: {
                type: ['string', 'null'],
                default: `The problem is not the low price itself. The problem is not knowing what has been excluded.`,
            },
            pro_title: {
                type: ['string', 'null'],
                default: `What a professional website should include <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            pro_intro: {
                type: ['string', 'null'],
                default: `A professional website should not only look finished. It should be understandable, manageable and able to evolve.`,
            },
            pro_phase1_title: {
                type: ['string', 'null'],
                default: `Before design`,
            },
            pro_phase1_items: {
                type: ['string', 'null'],
                default: `<li class="border-t border-black/10 pt-2">Scope clarification</li> <li class="border-t border-black/10 pt-2">Content and navigation logic</li> <li class="border-t border-black/10 pt-2">Key user paths</li> <li class="border-t border-black/10 pt-2">Functional requirements</li> <li class="border-t border-black/10 pt-2">Technical direction</li>`,
            },
            pro_phase2_title: {
                type: ['string', 'null'],
                default: `During design and development`,
            },
            pro_phase2_items: {
                type: ['string', 'null'],
                default: `<li class="border-t border-black/10 pt-2">Custom design system</li> <li class="border-t border-black/10 pt-2">Responsive layouts</li> <li class="border-t border-black/10 pt-2">CMS structure</li> <li class="border-t border-black/10 pt-2">Performance-conscious development</li> <li class="border-t border-black/10 pt-2">Accessibility-aware implementation</li> <li class="border-t border-black/10 pt-2">Search-ready foundations</li>`,
            },
            pro_phase3_title: {
                type: ['string', 'null'],
                default: `After launch`,
            },
            pro_phase3_items: {
                type: ['string', 'null'],
                default: `<li class="border-t border-black/10 pt-2">Testing</li> <li class="border-t border-black/10 pt-2">Handover</li> <li class="border-t border-black/10 pt-2">Documentation</li> <li class="border-t border-black/10 pt-2">Maintenance options</li> <li class="border-t border-black/10 pt-2">Future adjustments when needed</li>`,
            }
        },
        example: { attributes: { section_title: `What is and isn&apos;t included`, low_cost_title: `What is usually missing in a low-cost website <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, low_cost_intro: `A very low price is not always wrong, but it usually means the scope is limited. The site may exist online, but some decisions are often skipped.`, low_cost_items: `<li class="border-t border-black/10 pt-2">Little or no structure before building</li> <li class="border-t border-black/10 pt-2">Template-based design</li> <li class="border-t border-black/10 pt-2">Generic layouts</li> <li class="border-t border-black/10 pt-2">Limited flexibility</li> <li class="border-t border-black/10 pt-2">Weak content hierarchy</li> <li class="border-t border-black/10 pt-2">Basic SEO setup only</li> <li class="border-t border-black/10 pt-2">Limited performance work</li> <li class="border-t border-black/10 pt-2">No long-term maintenance logic</li> <li class="border-t border-black/10 pt-2">No documentation or handover</li> <li class="border-t border-black/10 pt-2">Difficult future evolution</li>`, low_cost_note: `The problem is not the low price itself. The problem is not knowing what has been excluded.`, pro_title: `What a professional website should include <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, pro_intro: `A professional website should not only look finished. It should be understandable, manageable and able to evolve.`, pro_phase1_title: `Before design`, pro_phase1_items: `<li class="border-t border-black/10 pt-2">Scope clarification</li> <li class="border-t border-black/10 pt-2">Content and navigation logic</li> <li class="border-t border-black/10 pt-2">Key user paths</li> <li class="border-t border-black/10 pt-2">Functional requirements</li> <li class="border-t border-black/10 pt-2">Technical direction</li>`, pro_phase2_title: `During design and development`, pro_phase2_items: `<li class="border-t border-black/10 pt-2">Custom design system</li> <li class="border-t border-black/10 pt-2">Responsive layouts</li> <li class="border-t border-black/10 pt-2">CMS structure</li> <li class="border-t border-black/10 pt-2">Performance-conscious development</li> <li class="border-t border-black/10 pt-2">Accessibility-aware implementation</li> <li class="border-t border-black/10 pt-2">Search-ready foundations</li>`, pro_phase3_title: `After launch`, pro_phase3_items: `<li class="border-t border-black/10 pt-2">Testing</li> <li class="border-t border-black/10 pt-2">Handover</li> <li class="border-t border-black/10 pt-2">Documentation</li> <li class="border-t border-black/10 pt-2">Maintenance options</li> <li class="border-t border-black/10 pt-2">Future adjustments when needed</li>` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ 'aria-labelledby': 'comparison-heading' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el(RichText, { tagName: 'h2', id: 'comparison-heading', className: 'sr-only', value: propOrDefault( props.attributes.section_title, 'section_title' ), onChange: function(val) { setAttributes( {section_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' }, [' ', ' ', el('div', { className: 'bg-white/80 border border-black/10 p-5 md:p-6 rounded-xs' }, [' ', el(RichText, { tagName: 'h3', className: 'flex font-semibold gap-2 items-center mb-4 text-xs uppercase', value: propOrDefault( props.attributes.low_cost_title, 'low_cost_title' ), onChange: function(val) { setAttributes( {low_cost_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed mb-4 text-base text-neutral-700', value: propOrDefault( props.attributes.low_cost_intro, 'low_cost_intro' ), onChange: function(val) { setAttributes( {low_cost_intro: val }) } }), ' ', el(RichText, { tagName: 'ul', className: 'font-light space-y-2 text-base text-neutral-900', value: propOrDefault( props.attributes.low_cost_items, 'low_cost_items' ), onChange: function(val) { setAttributes( {low_cost_items: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed mt-4 text-neutral-600 text-xs', value: propOrDefault( props.attributes.low_cost_note, 'low_cost_note' ), onChange: function(val) { setAttributes( {low_cost_note: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', ' ', el('div', { className: 'bg-white/80 border border-black/10 p-5 md:p-6 rounded-xs' }, [' ', el(RichText, { tagName: 'h3', className: 'flex font-semibold gap-2 items-center mb-4 text-xs uppercase', value: propOrDefault( props.attributes.pro_title, 'pro_title' ), onChange: function(val) { setAttributes( {pro_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed mb-4 text-base text-neutral-700', value: propOrDefault( props.attributes.pro_intro, 'pro_intro' ), onChange: function(val) { setAttributes( {pro_intro: val }) } }), ' ', el(RichText, { tagName: 'h4', className: 'font-semibold text-xs uppercase text-neutral-600 mb-2', value: propOrDefault( props.attributes.pro_phase1_title, 'pro_phase1_title' ), onChange: function(val) { setAttributes( {pro_phase1_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'ul', className: 'font-light mb-4 space-y-1.5 text-base text-neutral-900', value: propOrDefault( props.attributes.pro_phase1_items, 'pro_phase1_items' ), onChange: function(val) { setAttributes( {pro_phase1_items: val }) } }), ' ', el(RichText, { tagName: 'h4', className: 'font-semibold text-xs uppercase text-neutral-600 mb-2', value: propOrDefault( props.attributes.pro_phase2_title, 'pro_phase2_title' ), onChange: function(val) { setAttributes( {pro_phase2_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'ul', className: 'font-light mb-4 space-y-1.5 text-base text-neutral-900', value: propOrDefault( props.attributes.pro_phase2_items, 'pro_phase2_items' ), onChange: function(val) { setAttributes( {pro_phase2_items: val }) } }), ' ', el(RichText, { tagName: 'h4', className: 'font-semibold text-xs uppercase text-neutral-600 mb-2', value: propOrDefault( props.attributes.pro_phase3_title, 'pro_phase3_title' ), onChange: function(val) { setAttributes( {pro_phase3_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'ul', className: 'font-light space-y-1.5 text-base text-neutral-900', value: propOrDefault( props.attributes.pro_phase3_items, 'pro_phase3_items' ), onChange: function(val) { setAttributes( {pro_phase3_items: val }) } }), ' ']), ' ']), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.section_title,
                                        help: __( '' ),
                                        label: __( 'Section title' ),
                                        onChange: function(val) { setAttributes({section_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.low_cost_title,
                                        help: __( '' ),
                                        label: __( 'Low-cost title' ),
                                        onChange: function(val) { setAttributes({low_cost_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Low-cost introduction' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.low_cost_intro,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({low_cost_intro: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Low-cost items' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.low_cost_items,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({low_cost_items: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.low_cost_note,
                                        help: __( '' ),
                                        label: __( 'Low-cost note' ),
                                        onChange: function(val) { setAttributes({low_cost_note: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pro_title,
                                        help: __( '' ),
                                        label: __( 'Professional title' ),
                                        onChange: function(val) { setAttributes({pro_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Professional introduction' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.pro_intro,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({pro_intro: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.pro_phase1_title,
                                        help: __( '' ),
                                        label: __( 'Phase 1 title' ),
                                        onChange: function(val) { setAttributes({pro_phase1_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Phase 1 items' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.pro_phase1_items,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({pro_phase1_items: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.pro_phase2_title,
                                        help: __( '' ),
                                        label: __( 'Phase 2 title' ),
                                        onChange: function(val) { setAttributes({pro_phase2_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Phase 2 items' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.pro_phase2_items,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({pro_phase2_items: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.pro_phase3_title,
                                        help: __( '' ),
                                        label: __( 'Phase 3 title' ),
                                        onChange: function(val) { setAttributes({pro_phase3_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Phase 3 items' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.pro_phase3_items,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({pro_phase3_items: val}) },
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
