
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
    
    const block = registerBlockType( 'blackboard-by-zdc/call-to-action', {
        apiVersion: 2,
        title: 'Call to Action',
        description: 'Final call to action section with contact link',
        icon: 'block-default',
        category: 'blackboard_blocks',
        keywords: [],
        supports: {},
        attributes: {
            title: {
                type: ['string', 'null'],
                default: `Need to understand the right scale?`,
            },
            description: {
                type: ['string', 'null'],
                default: `The starting points above are useful references, but the right budget depends on what the website needs to hold, communicate and support.`,
            },
            secondary_description: {
                type: ['string', 'null'],
                default: `Send us a few details and we will help clarify the right scale.`,
            },
            cta_link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: 'mailto:blackboard@zdcstudio.com?subject=Start%20a%20Project', title: '', 'post_type': null},
            },
            cta_description: {
                type: ['string', 'null'],
                default: `Each project starts with a short exchange to clarify scope, direction and complexity.`,
            },
            cta_label: {
                type: ['string', 'null'],
                default: `Start a project`,
            },
            services_link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: 'services.html', title: '', 'post_type': null},
            },
            services_label: {
                type: ['string', 'null'],
                default: `View Services`,
            }
        },
        example: { attributes: { title: `Need to understand the right scale?`, description: `The starting points above are useful references, but the right budget depends on what the website needs to hold, communicate and support.`, secondary_description: `Send us a few details and we will help clarify the right scale.`, cta_link: {post_id: 0, url: 'mailto:blackboard@zdcstudio.com?subject=Start%20a%20Project', title: '', 'post_type': null}, cta_description: `Each project starts with a short exchange to clarify scope, direction and complexity.`, cta_label: `Start a project`, services_link: {post_id: 0, url: 'services.html', title: '', 'post_type': null}, services_label: `View Services` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ 'aria-labelledby': 'cta-heading', className: 'mb-16 md:mb-20' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el('div', { className: 'w-full max-w-none' }, [' ', el(RichText, { tagName: 'h2', id: 'cta-heading', className: 'font-bold leading-tight lg:text-5xl mb-4 md:text-4xl text-3xl', value: propOrDefault( props.attributes.title, 'title' ), onChange: function(val) { setAttributes( {title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed mb-2 text-base text-neutral-900', value: propOrDefault( props.attributes.description, 'description' ), onChange: function(val) { setAttributes( {description: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed mb-8 text-base text-neutral-700', value: propOrDefault( props.attributes.secondary_description, 'secondary_description' ), onChange: function(val) { setAttributes( {secondary_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('div', { className: 'flex flex-col items-start gap-4' }, [' ', el('a', { href: propOrDefault( props.attributes.cta_link.url, 'cta_link', 'url' ), role: 'button', className: 'group bg-black flex flex-col font-normal gap-2 px-4 py-4 rounded-xs shrink-0 text-center text-sm text-white tracking-wide transition-colors w-full focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white/60 focus:outline-none hover:bg-[#a4ab13] md:w-auto', onClick: function(e) { e.preventDefault(); } }, [' ', el(RichText, { tagName: 'h3', className: 'font-light group-hover:text-black leading-relaxed md:max-w-lg text-slate-200 text-xs', value: propOrDefault( props.attributes.cta_description, 'cta_description' ), onChange: function(val) { setAttributes( {cta_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'h5', className: 'font-normal text-lg uppercase group-hover:text-black', value: propOrDefault( props.attributes.cta_label, 'cta_label' ), onChange: function(val) { setAttributes( {cta_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el(RichText, { tagName: 'a', href: propOrDefault( props.attributes.services_link.url, 'services_link', 'url' ), className: 'duration-200 font-light hover:text-black text-neutral-700 text-xs transition-colors underline underline-offset-2', onClick: function(e) { e.preventDefault(); }, value: propOrDefault( props.attributes.services_label, 'services_label' ), onChange: function(val) { setAttributes( {services_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.title,
                                        help: __( '' ),
                                        label: __( 'Title' ),
                                        onChange: function(val) { setAttributes({title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Description' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.description,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({description: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.secondary_description,
                                        help: __( '' ),
                                        label: __( 'Secondary description' ),
                                        onChange: function(val) { setAttributes({secondary_description: val}) },
                                        type: 'text'
                                    }),
                                    pgGetFeature4("pgUrlControl")('cta_link', setAttributes, props, 'CTA link', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.cta_description,
                                        help: __( '' ),
                                        label: __( 'CTA description' ),
                                        onChange: function(val) { setAttributes({cta_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.cta_label,
                                        help: __( '' ),
                                        label: __( 'CTA label' ),
                                        onChange: function(val) { setAttributes({cta_label: val}) },
                                        type: 'text'
                                    }),
                                    pgGetFeature4("pgUrlControl")('services_link', setAttributes, props, 'Services link', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.services_label,
                                        help: __( '' ),
                                        label: __( 'Services label' ),
                                        onChange: function(val) { setAttributes({services_label: val}) },
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
