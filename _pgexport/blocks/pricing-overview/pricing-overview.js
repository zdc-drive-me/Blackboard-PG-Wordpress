
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
    
    const block = registerBlockType( 'blackboard-by-zdc/pricing-overview', {
        apiVersion: 2,
        title: 'Pricing Overview',
        description: 'Starting price points for different project scales',
        icon: 'block-default',
        category: 'blackboard_blocks',
        keywords: [],
        supports: {},
        attributes: {
            section_title: {
                type: ['string', 'null'],
                default: `A useful starting point <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            intro_text: {
                type: ['string', 'null'],
                default: `Projects vary in scope. Each follows the same approach &#8212; structure first, then design and execution &#8212; adapted to scale and complexity.`,
            },
            tier_1_label: {
                type: ['string', 'null'],
                default: `Foundation`,
            },
            tier_1_prefix: {
                type: ['string', 'null'],
                default: `From`,
            },
            tier_1_price: {
                type: ['string', 'null'],
                default: `&euro;3,500`,
            },
            tier_1_description: {
                type: ['string', 'null'],
                default: `A focused build with essential structure, custom design and core functionality.`,
            },
            tier_2_label: {
                type: ['string', 'null'],
                default: `Structured`,
            },
            tier_2_prefix: {
                type: ['string', 'null'],
                default: `From`,
            },
            tier_2_price: {
                type: ['string', 'null'],
                default: `&euro;4,500`,
            },
            tier_2_description: {
                type: ['string', 'null'],
                default: `A content-driven system with expanded pages, flexible layouts and integrated features.`,
            },
            tier_3_label: {
                type: ['string', 'null'],
                default: `Extended`,
            },
            tier_3_prefix: {
                type: ['string', 'null'],
                default: `From`,
            },
            tier_3_price: {
                type: ['string', 'null'],
                default: `&euro;7,000`,
            },
            tier_3_description: {
                type: ['string', 'null'],
                default: `A more complex system with custom builds, integrations and advanced performance.`,
            },
            footnote: {
                type: ['string', 'null'],
                default: `These are starting points, not fixed packages. The right scale is defined after understanding the project.`,
            }
        },
        example: { attributes: { section_title: `A useful starting point <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, intro_text: `Projects vary in scope. Each follows the same approach &#8212; structure first, then design and execution &#8212; adapted to scale and complexity.`, tier_1_label: `Foundation`, tier_1_prefix: `From`, tier_1_price: `&euro;3,500`, tier_1_description: `A focused build with essential structure, custom design and core functionality.`, tier_2_label: `Structured`, tier_2_prefix: `From`, tier_2_price: `&euro;4,500`, tier_2_description: `A content-driven system with expanded pages, flexible layouts and integrated features.`, tier_3_label: `Extended`, tier_3_prefix: `From`, tier_3_price: `&euro;7,000`, tier_3_description: `A more complex system with custom builds, integrations and advanced performance.`, footnote: `These are starting points, not fixed packages. The right scale is defined after understanding the project.` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ 'aria-labelledby': 'starting-points-heading' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el(RichText, { tagName: 'h2', id: 'starting-points-heading', className: 'flex font-semibold gap-2 items-center text-xs uppercase mb-4', value: propOrDefault( props.attributes.section_title, 'section_title' ), onChange: function(val) { setAttributes( {section_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed max-w-xl mb-6 text-base text-neutral-900', value: propOrDefault( props.attributes.intro_text, 'intro_text' ), onChange: function(val) { setAttributes( {intro_text: val }) } }), ' ', ' ', el('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/15 bg-white/40 rounded-xs overflow-hidden' }, [' ', el('div', { className: 'p-5 md:p-6 border-b border-black/15 md:border-b-0 md:border-r border-black/15' }, [' ', el('div', { className: 'inline-flex items-center bg-stone-900 text-white px-3 py-1.5 text-xs leading-none rounded-xs mb-3 hover:bg-[#a4ab13] hover:text-black transition-colors duration-200' }, [' ', el(RichText, { tagName: 'span', className: 'font-semibold uppercase tracking-wide', value: propOrDefault( props.attributes.tier_1_label, 'tier_1_label' ), onChange: function(val) { setAttributes( {tier_1_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'text-base mb-2' }, [' ', el(RichText, { tagName: 'span', className: 'font-normal', value: propOrDefault( props.attributes.tier_1_prefix, 'tier_1_prefix' ), onChange: function(val) { setAttributes( {tier_1_prefix: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.tier_1_price, 'tier_1_price' ), onChange: function(val) { setAttributes( {tier_1_price: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.tier_1_description, 'tier_1_description' ), onChange: function(val) { setAttributes( {tier_1_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'p-5 md:p-6 border-b border-black/15 md:border-b-0 md:border-r border-black/15' }, [' ', el('div', { className: 'inline-flex items-center bg-stone-900 text-white px-3 py-1.5 text-xs leading-none rounded-xs mb-3 hover:bg-[#a4ab13] hover:text-black transition-colors duration-200' }, [' ', el(RichText, { tagName: 'span', className: 'font-semibold uppercase tracking-wide', value: propOrDefault( props.attributes.tier_2_label, 'tier_2_label' ), onChange: function(val) { setAttributes( {tier_2_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'text-base mb-2' }, [' ', el(RichText, { tagName: 'span', className: 'font-normal', value: propOrDefault( props.attributes.tier_2_prefix, 'tier_2_prefix' ), onChange: function(val) { setAttributes( {tier_2_prefix: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.tier_2_price, 'tier_2_price' ), onChange: function(val) { setAttributes( {tier_2_price: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.tier_2_description, 'tier_2_description' ), onChange: function(val) { setAttributes( {tier_2_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'p-5 md:p-6' }, [' ', el('div', { className: 'inline-flex items-center bg-stone-900 text-white px-3 py-1.5 text-xs leading-none rounded-xs mb-3 hover:bg-[#a4ab13] hover:text-black transition-colors duration-200' }, [' ', el(RichText, { tagName: 'span', className: 'font-semibold uppercase tracking-wide', value: propOrDefault( props.attributes.tier_3_label, 'tier_3_label' ), onChange: function(val) { setAttributes( {tier_3_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'text-base mb-2' }, [' ', el(RichText, { tagName: 'span', className: 'font-normal', value: propOrDefault( props.attributes.tier_3_prefix, 'tier_3_prefix' ), onChange: function(val) { setAttributes( {tier_3_prefix: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.tier_3_price, 'tier_3_price' ), onChange: function(val) { setAttributes( {tier_3_price: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.tier_3_description, 'tier_3_description' ), onChange: function(val) { setAttributes( {tier_3_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed mt-3 text-neutral-600 text-xs', value: propOrDefault( props.attributes.footnote, 'footnote' ), onChange: function(val) { setAttributes( {footnote: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']),                        
                
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
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Introduction' ),
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
                                        value: props.attributes.tier_1_label,
                                        help: __( '' ),
                                        label: __( 'Tier 1 label' ),
                                        onChange: function(val) { setAttributes({tier_1_label: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.tier_1_prefix,
                                        help: __( '' ),
                                        label: __( 'Tier 1 prefix' ),
                                        onChange: function(val) { setAttributes({tier_1_prefix: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.tier_1_price,
                                        help: __( '' ),
                                        label: __( 'Tier 1 price' ),
                                        onChange: function(val) { setAttributes({tier_1_price: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.tier_1_description,
                                        help: __( '' ),
                                        label: __( 'Tier 1 description' ),
                                        onChange: function(val) { setAttributes({tier_1_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.tier_2_label,
                                        help: __( '' ),
                                        label: __( 'Tier 2 label' ),
                                        onChange: function(val) { setAttributes({tier_2_label: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.tier_2_prefix,
                                        help: __( '' ),
                                        label: __( 'Tier 2 prefix' ),
                                        onChange: function(val) { setAttributes({tier_2_prefix: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.tier_2_price,
                                        help: __( '' ),
                                        label: __( 'Tier 2 price' ),
                                        onChange: function(val) { setAttributes({tier_2_price: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.tier_2_description,
                                        help: __( '' ),
                                        label: __( 'Tier 2 description' ),
                                        onChange: function(val) { setAttributes({tier_2_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.tier_3_label,
                                        help: __( '' ),
                                        label: __( 'Tier 3 label' ),
                                        onChange: function(val) { setAttributes({tier_3_label: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.tier_3_prefix,
                                        help: __( '' ),
                                        label: __( 'Tier 3 prefix' ),
                                        onChange: function(val) { setAttributes({tier_3_prefix: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.tier_3_price,
                                        help: __( '' ),
                                        label: __( 'Tier 3 price' ),
                                        onChange: function(val) { setAttributes({tier_3_price: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.tier_3_description,
                                        help: __( '' ),
                                        label: __( 'Tier 3 description' ),
                                        onChange: function(val) { setAttributes({tier_3_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.footnote,
                                        help: __( '' ),
                                        label: __( 'Footnote' ),
                                        onChange: function(val) { setAttributes({footnote: val}) },
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
