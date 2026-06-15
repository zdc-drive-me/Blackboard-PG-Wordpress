
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
    
    const block = registerBlockType( 'blackboard-by-zdc/pricing-tier', {
        apiVersion: 2,
        title: 'Pricing Tier',
        description: '',
        icon: 'block-default',
        category: 'blackboard_blocks',
        parent: [ 'blackboard-by-zdc/pricing-overview' ],

        keywords: [],
        supports: {},
        attributes: {
            tier_label: {
                type: ['string', 'null'],
                default: `Foundation`,
            },
            price_prefix: {
                type: ['string', 'null'],
                default: `From`,
            },
            price: {
                type: ['string', 'null'],
                default: `&euro;3,500`,
            },
            description: {
                type: ['string', 'null'],
                default: `A focused build with essential structure, custom design and core functionality.`,
            }
        },
        example: { attributes: { tier_label: `Foundation`, price_prefix: `From`, price: `&euro;3,500`, description: `A focused build with essential structure, custom design and core functionality.` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'p-5 md:p-6 border-b border-black/15 md:border-b-0 md:border-r border-black/15' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('div', { ...blockProps }, [' ', el('div', { className: 'inline-flex items-center bg-stone-900 text-white px-3 py-1.5 text-xs leading-none rounded-xs mb-3 hover:bg-[#a4ab13] hover:text-black transition-colors duration-200' }, [' ', el(RichText, { tagName: 'span', className: 'font-semibold uppercase tracking-wide', value: propOrDefault( props.attributes.tier_label, 'tier_label' ), onChange: function(val) { setAttributes( {tier_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'text-base mb-2' }, [' ', el(RichText, { tagName: 'span', className: 'font-normal', value: propOrDefault( props.attributes.price_prefix, 'price_prefix' ), onChange: function(val) { setAttributes( {price_prefix: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.price, 'price' ), onChange: function(val) { setAttributes( {price: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.description, 'description' ), onChange: function(val) { setAttributes( {description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.tier_label,
                                        help: __( '' ),
                                        label: __( 'Tier label' ),
                                        onChange: function(val) { setAttributes({tier_label: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.price_prefix,
                                        help: __( '' ),
                                        label: __( 'Price prefix' ),
                                        onChange: function(val) { setAttributes({price_prefix: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.price,
                                        help: __( '' ),
                                        label: __( 'Price' ),
                                        onChange: function(val) { setAttributes({price: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.description,
                                        help: __( '' ),
                                        label: __( 'Description' ),
                                        onChange: function(val) { setAttributes({description: val}) },
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
