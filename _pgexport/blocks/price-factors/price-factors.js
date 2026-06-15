
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
    
    const block = registerBlockType( 'blackboard-by-zdc/price-factors', {
        apiVersion: 2,
        title: 'Price Factors',
        description: 'Explains why website prices vary with detailed factor breakdowns',
        icon: 'block-default',
        category: 'blackboard_blocks',
        keywords: [],
        supports: {},
        attributes: {
            section_title: {
                type: ['string', 'null'],
                default: `Why prices vary so much <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            intro_text: {
                type: ['string', 'null'],
                default: `The cost of a website changes because the work behind it changes. Two websites may look similar from the outside, but they can be completely different in structure, flexibility, speed, content logic and long-term maintainability.`,
            },
            factor_1_title: {
                type: ['string', 'null'],
                default: `Structure`,
            },
            factor_1_description: {
                type: ['string', 'null'],
                default: `Information architecture, navigation, content hierarchy and key decisions before design begins.`,
            },
            factor_2_title: {
                type: ['string', 'null'],
                default: `Design`,
            },
            factor_2_description: {
                type: ['string', 'null'],
                default: `Custom layout, visual system, responsive behaviour, interaction details and consistency across pages.`,
            },
            factor_3_title: {
                type: ['string', 'null'],
                default: `Development`,
            },
            factor_3_description: {
                type: ['string', 'null'],
                default: `Front-end quality, CMS implementation, performance, accessibility, technical precision and future editing logic.`,
            },
            factor_4_title: {
                type: ['string', 'null'],
                default: `Content`,
            },
            factor_4_description: {
                type: ['string', 'null'],
                default: `Number of pages, content preparation, editorial structure, blog or journal systems, multilingual content and media management.`,
            },
            factor_5_title: {
                type: ['string', 'null'],
                default: `Integrations`,
            },
            factor_5_description: {
                type: ['string', 'null'],
                default: `Forms, newsletter, analytics, CRM, e-commerce, booking systems, third-party tools or custom workflows.`,
            },
            factor_6_title: {
                type: ['string', 'null'],
                default: `Performance and SEO foundations`,
            },
            factor_6_description: {
                type: ['string', 'null'],
                default: `Speed, technical structure, metadata, indexability, clean markup and search visibility foundations.`,
            },
            factor_7_title: {
                type: ['string', 'null'],
                default: `Care and maintenance`,
            },
            factor_7_description: {
                type: ['string', 'null'],
                default: `Hosting, updates, backup, monitoring, adjustments and ongoing support after launch.`,
            }
        },
        example: { attributes: { section_title: `Why prices vary so much <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, intro_text: `The cost of a website changes because the work behind it changes. Two websites may look similar from the outside, but they can be completely different in structure, flexibility, speed, content logic and long-term maintainability.`, factor_1_title: `Structure`, factor_1_description: `Information architecture, navigation, content hierarchy and key decisions before design begins.`, factor_2_title: `Design`, factor_2_description: `Custom layout, visual system, responsive behaviour, interaction details and consistency across pages.`, factor_3_title: `Development`, factor_3_description: `Front-end quality, CMS implementation, performance, accessibility, technical precision and future editing logic.`, factor_4_title: `Content`, factor_4_description: `Number of pages, content preparation, editorial structure, blog or journal systems, multilingual content and media management.`, factor_5_title: `Integrations`, factor_5_description: `Forms, newsletter, analytics, CRM, e-commerce, booking systems, third-party tools or custom workflows.`, factor_6_title: `Performance and SEO foundations`, factor_6_description: `Speed, technical structure, metadata, indexability, clean markup and search visibility foundations.`, factor_7_title: `Care and maintenance`, factor_7_description: `Hosting, updates, backup, monitoring, adjustments and ongoing support after launch.` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ 'aria-labelledby': 'why-vary-heading' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10' }, [' ', el('div', {}, [' ', el(RichText, { tagName: 'h2', id: 'why-vary-heading', className: 'flex font-semibold gap-2 items-center text-xs uppercase mb-4', value: propOrDefault( props.attributes.section_title, 'section_title' ), onChange: function(val) { setAttributes( {section_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-900', value: propOrDefault( props.attributes.intro_text, 'intro_text' ), onChange: function(val) { setAttributes( {intro_text: val }) } }), ' ']), ' ', el('div', { className: 'space-y-4' }, [' ', el('div', { className: 'border-t border-black/15 pt-3' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.factor_1_title, 'factor_1_title' ), onChange: function(val) { setAttributes( {factor_1_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.factor_1_description, 'factor_1_description' ), onChange: function(val) { setAttributes( {factor_1_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'border-t border-black/15 pt-3' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.factor_2_title, 'factor_2_title' ), onChange: function(val) { setAttributes( {factor_2_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.factor_2_description, 'factor_2_description' ), onChange: function(val) { setAttributes( {factor_2_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'border-t border-black/15 pt-3' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.factor_3_title, 'factor_3_title' ), onChange: function(val) { setAttributes( {factor_3_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.factor_3_description, 'factor_3_description' ), onChange: function(val) { setAttributes( {factor_3_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'border-t border-black/15 pt-3' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.factor_4_title, 'factor_4_title' ), onChange: function(val) { setAttributes( {factor_4_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.factor_4_description, 'factor_4_description' ), onChange: function(val) { setAttributes( {factor_4_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'border-t border-black/15 pt-3' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.factor_5_title, 'factor_5_title' ), onChange: function(val) { setAttributes( {factor_5_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.factor_5_description, 'factor_5_description' ), onChange: function(val) { setAttributes( {factor_5_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'border-t border-black/15 pt-3' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.factor_6_title, 'factor_6_title' ), onChange: function(val) { setAttributes( {factor_6_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.factor_6_description, 'factor_6_description' ), onChange: function(val) { setAttributes( {factor_6_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'border-t border-black/15 pt-3' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.factor_7_title, 'factor_7_title' ), onChange: function(val) { setAttributes( {factor_7_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.factor_7_description, 'factor_7_description' ), onChange: function(val) { setAttributes( {factor_7_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']), ' ']),                        
                
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
                                        value: props.attributes.factor_1_title,
                                        help: __( '' ),
                                        label: __( 'Factor 1 title' ),
                                        onChange: function(val) { setAttributes({factor_1_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.factor_1_description,
                                        help: __( '' ),
                                        label: __( 'Factor 1 description' ),
                                        onChange: function(val) { setAttributes({factor_1_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.factor_2_title,
                                        help: __( '' ),
                                        label: __( 'Factor 2 title' ),
                                        onChange: function(val) { setAttributes({factor_2_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.factor_2_description,
                                        help: __( '' ),
                                        label: __( 'Factor 2 description' ),
                                        onChange: function(val) { setAttributes({factor_2_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.factor_3_title,
                                        help: __( '' ),
                                        label: __( 'Factor 3 title' ),
                                        onChange: function(val) { setAttributes({factor_3_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.factor_3_description,
                                        help: __( '' ),
                                        label: __( 'Factor 3 description' ),
                                        onChange: function(val) { setAttributes({factor_3_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.factor_4_title,
                                        help: __( '' ),
                                        label: __( 'Factor 4 title' ),
                                        onChange: function(val) { setAttributes({factor_4_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.factor_4_description,
                                        help: __( '' ),
                                        label: __( 'Factor 4 description' ),
                                        onChange: function(val) { setAttributes({factor_4_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.factor_5_title,
                                        help: __( '' ),
                                        label: __( 'Factor 5 title' ),
                                        onChange: function(val) { setAttributes({factor_5_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.factor_5_description,
                                        help: __( '' ),
                                        label: __( 'Factor 5 description' ),
                                        onChange: function(val) { setAttributes({factor_5_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.factor_6_title,
                                        help: __( '' ),
                                        label: __( 'Factor 6 title' ),
                                        onChange: function(val) { setAttributes({factor_6_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.factor_6_description,
                                        help: __( '' ),
                                        label: __( 'Factor 6 description' ),
                                        onChange: function(val) { setAttributes({factor_6_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.factor_7_title,
                                        help: __( '' ),
                                        label: __( 'Factor 7 title' ),
                                        onChange: function(val) { setAttributes({factor_7_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.factor_7_description,
                                        help: __( '' ),
                                        label: __( 'Factor 7 description' ),
                                        onChange: function(val) { setAttributes({factor_7_description: val}) },
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
