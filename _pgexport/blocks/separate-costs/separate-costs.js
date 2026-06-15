
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
    
    const block = registerBlockType( 'blackboard-by-zdc/separate-costs', {
        apiVersion: 2,
        title: 'Separate Costs',
        description: 'Items that should be clarified separately from the website build',
        icon: 'block-default',
        category: 'blackboard_blocks',
        keywords: [],
        supports: {},
        attributes: {
            section_title: {
                type: ['string', 'null'],
                default: `What should be clarified separately <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            intro_text: {
                type: ['string', 'null'],
                default: `Some costs are not always part of the initial website build and should be made explicit before starting.`,
            },
            cost_1_title: {
                type: ['string', 'null'],
                default: `Domain`,
            },
            cost_1_description: {
                type: ['string', 'null'],
                default: `Usually a small annual cost, but ownership and renewal should be clear from the start.`,
            },
            cost_2_title: {
                type: ['string', 'null'],
                default: `Hosting`,
            },
            cost_2_description: {
                type: ['string', 'null'],
                default: `Depends on performance, traffic, security and management needs. Can be self-managed or included in a care plan.`,
            },
            cost_3_title: {
                type: ['string', 'null'],
                default: `Maintenance`,
            },
            cost_3_description: {
                type: ['string', 'null'],
                default: `Updates, monitoring, backups and technical care after launch. Offered as a separate care arrangement.`,
            },
            cost_4_title: {
                type: ['string', 'null'],
                default: `Content production`,
            },
            cost_4_description: {
                type: ['string', 'null'],
                default: `Copywriting, photography, image editing, translations or editorial planning are separate from the build.`,
            },
            cost_5_title: {
                type: ['string', 'null'],
                default: `SEO strategy`,
            },
            cost_5_description: {
                type: ['string', 'null'],
                default: `Search-ready foundations can be included, but ongoing SEO work is a separate and ongoing activity.`,
            },
            cost_6_title: {
                type: ['string', 'null'],
                default: `Marketing`,
            },
            cost_6_description: {
                type: ['string', 'null'],
                default: `Campaigns, ads, email flows and content distribution are distinct from building the website itself.`,
            }
        },
        example: { attributes: { section_title: `What should be clarified separately <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, intro_text: `Some costs are not always part of the initial website build and should be made explicit before starting.`, cost_1_title: `Domain`, cost_1_description: `Usually a small annual cost, but ownership and renewal should be clear from the start.`, cost_2_title: `Hosting`, cost_2_description: `Depends on performance, traffic, security and management needs. Can be self-managed or included in a care plan.`, cost_3_title: `Maintenance`, cost_3_description: `Updates, monitoring, backups and technical care after launch. Offered as a separate care arrangement.`, cost_4_title: `Content production`, cost_4_description: `Copywriting, photography, image editing, translations or editorial planning are separate from the build.`, cost_5_title: `SEO strategy`, cost_5_description: `Search-ready foundations can be included, but ongoing SEO work is a separate and ongoing activity.`, cost_6_title: `Marketing`, cost_6_description: `Campaigns, ads, email flows and content distribution are distinct from building the website itself.` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ 'aria-labelledby': 'clarify-heading' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el(RichText, { tagName: 'h2', id: 'clarify-heading', className: 'flex font-semibold gap-2 items-center mb-4 text-xs uppercase', value: propOrDefault( props.attributes.section_title, 'section_title' ), onChange: function(val) { setAttributes( {section_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed max-w-xl mb-6 text-base text-neutral-900', value: propOrDefault( props.attributes.intro_text, 'intro_text' ), onChange: function(val) { setAttributes( {intro_text: val }) } }), ' ', el('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-0 border border-black/15 bg-white/40 rounded-xs overflow-hidden' }, [' ', el('div', { className: 'p-5 md:p-6 border-b border-black/15 md:border-r' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.cost_1_title, 'cost_1_title' ), onChange: function(val) { setAttributes( {cost_1_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.cost_1_description, 'cost_1_description' ), onChange: function(val) { setAttributes( {cost_1_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'p-5 md:p-6 border-b border-black/15' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.cost_2_title, 'cost_2_title' ), onChange: function(val) { setAttributes( {cost_2_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.cost_2_description, 'cost_2_description' ), onChange: function(val) { setAttributes( {cost_2_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'p-5 md:p-6 border-b border-black/15 md:border-r' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.cost_3_title, 'cost_3_title' ), onChange: function(val) { setAttributes( {cost_3_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.cost_3_description, 'cost_3_description' ), onChange: function(val) { setAttributes( {cost_3_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'p-5 md:p-6 border-b border-black/15' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.cost_4_title, 'cost_4_title' ), onChange: function(val) { setAttributes( {cost_4_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.cost_4_description, 'cost_4_description' ), onChange: function(val) { setAttributes( {cost_4_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'p-5 md:p-6 border-b border-black/15 md:border-r md:border-b-0' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.cost_5_title, 'cost_5_title' ), onChange: function(val) { setAttributes( {cost_5_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.cost_5_description, 'cost_5_description' ), onChange: function(val) { setAttributes( {cost_5_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'p-5 md:p-6' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.cost_6_title, 'cost_6_title' ), onChange: function(val) { setAttributes( {cost_6_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.cost_6_description, 'cost_6_description' ), onChange: function(val) { setAttributes( {cost_6_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']),                        
                
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
                                        value: props.attributes.cost_1_title,
                                        help: __( '' ),
                                        label: __( 'Cost 1 title' ),
                                        onChange: function(val) { setAttributes({cost_1_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.cost_1_description,
                                        help: __( '' ),
                                        label: __( 'Cost 1 description' ),
                                        onChange: function(val) { setAttributes({cost_1_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.cost_2_title,
                                        help: __( '' ),
                                        label: __( 'Cost 2 title' ),
                                        onChange: function(val) { setAttributes({cost_2_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.cost_2_description,
                                        help: __( '' ),
                                        label: __( 'Cost 2 description' ),
                                        onChange: function(val) { setAttributes({cost_2_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.cost_3_title,
                                        help: __( '' ),
                                        label: __( 'Cost 3 title' ),
                                        onChange: function(val) { setAttributes({cost_3_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.cost_3_description,
                                        help: __( '' ),
                                        label: __( 'Cost 3 description' ),
                                        onChange: function(val) { setAttributes({cost_3_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.cost_4_title,
                                        help: __( '' ),
                                        label: __( 'Cost 4 title' ),
                                        onChange: function(val) { setAttributes({cost_4_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.cost_4_description,
                                        help: __( '' ),
                                        label: __( 'Cost 4 description' ),
                                        onChange: function(val) { setAttributes({cost_4_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.cost_5_title,
                                        help: __( '' ),
                                        label: __( 'Cost 5 title' ),
                                        onChange: function(val) { setAttributes({cost_5_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.cost_5_description,
                                        help: __( '' ),
                                        label: __( 'Cost 5 description' ),
                                        onChange: function(val) { setAttributes({cost_5_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.cost_6_title,
                                        help: __( '' ),
                                        label: __( 'Cost 6 title' ),
                                        onChange: function(val) { setAttributes({cost_6_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.cost_6_description,
                                        help: __( '' ),
                                        label: __( 'Cost 6 description' ),
                                        onChange: function(val) { setAttributes({cost_6_description: val}) },
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
