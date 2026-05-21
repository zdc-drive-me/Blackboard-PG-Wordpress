
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
    
    const block = registerBlockType( 'blackboard-by-zdc/heading', {
        apiVersion: 2,
        title: 'Heading',
        description: 'A standalone heading block',
        icon: 'block-default',
        category: 'blackboard_blocks',
        keywords: [],
        supports: {},
        attributes: {
            heading_text: {
                type: ['string', 'null'],
                default: `What gets built depends on the clarity of the decisions behind it.`,
            }
        },
        example: { attributes: { heading_text: `What gets built depends on the clarity of the decisions behind it.` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ tagName: 'h5', className: 'font-semibold mb-12 text-4xl', value: propOrDefault( props.attributes.heading_text, 'heading_text' ), onChange: function(val) { setAttributes( {heading_text: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el(RichText, { ...blockProps }),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.heading_text,
                                        help: __( '' ),
                                        label: __( 'Heading text' ),
                                        onChange: function(val) { setAttributes({heading_text: val}) },
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
