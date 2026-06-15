
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
    
    const block = registerBlockType( 'blackboard-by-zdc/price-factor', {
        apiVersion: 2,
        title: 'Price Factor',
        description: '',
        icon: 'block-default',
        category: 'blackboard_blocks',
        parent: [ 'blackboard-by-zdc/price-factors' ],

        keywords: [],
        supports: {},
        attributes: {
            factor_title: {
                type: ['string', 'null'],
                default: `Structure`,
            },
            factor_description: {
                type: ['string', 'null'],
                default: `Information architecture, navigation, content hierarchy and key decisions before design begins.`,
            }
        },
        example: { attributes: { factor_title: `Structure`, factor_description: `Information architecture, navigation, content hierarchy and key decisions before design begins.` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'border-t border-black/15 pt-3' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('div', { ...blockProps }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.factor_title, 'factor_title' ), onChange: function(val) { setAttributes( {factor_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.factor_description, 'factor_description' ), onChange: function(val) { setAttributes( {factor_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.factor_title,
                                        help: __( '' ),
                                        label: __( 'Factor title' ),
                                        onChange: function(val) { setAttributes({factor_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.factor_description,
                                        help: __( '' ),
                                        label: __( 'Factor description' ),
                                        onChange: function(val) { setAttributes({factor_description: val}) },
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
