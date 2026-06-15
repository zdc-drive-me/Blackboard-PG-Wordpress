
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
    
    const block = registerBlockType( 'blackboard-by-zdc/separate-cost-item', {
        apiVersion: 2,
        title: 'Separate Cost Item',
        description: '',
        icon: 'block-default',
        category: 'blackboard_blocks',
        parent: [ 'blackboard-by-zdc/separate-costs' ],

        keywords: [],
        supports: {},
        attributes: {
            item_title: {
                type: ['string', 'null'],
                default: `Domain`,
            },
            item_description: {
                type: ['string', 'null'],
                default: `Usually a small annual cost, but ownership and renewal should be clear from the start.`,
            }
        },
        example: { attributes: { item_title: `Domain`, item_description: `Usually a small annual cost, but ownership and renewal should be clear from the start.` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'p-5 md:p-6 border-b border-black/15 md:border-r' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('div', { ...blockProps }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.item_title, 'item_title' ), onChange: function(val) { setAttributes( {item_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.item_description, 'item_description' ), onChange: function(val) { setAttributes( {item_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.item_title,
                                        help: __( '' ),
                                        label: __( 'Item title' ),
                                        onChange: function(val) { setAttributes({item_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.item_description,
                                        help: __( '' ),
                                        label: __( 'Item description' ),
                                        onChange: function(val) { setAttributes({item_description: val}) },
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
