
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
    
    const block = registerBlockType( 'blackboard-by-zdc/text-link', {
        apiVersion: 2,
        title: 'Text Link',
        description: 'A simple text link',
        icon: 'block-default',
        category: 'blackboard_blocks',
        keywords: [],
        supports: {},
        attributes: {
            link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            label: {
                type: ['string', 'null'],
                default: `How much does a website cost`,
            }
        },
        example: { attributes: { link: {post_id: 0, url: '#', title: '', 'post_type': null}, label: `How much does a website cost` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ tagName: 'a', className: 'font-thin leading-snug max-w-xl text-black text-xs', href: propOrDefault( props.attributes.link.url, 'link', 'url' ), onClick: function(e) { e.preventDefault(); }, value: propOrDefault( props.attributes.label, 'label' ), onChange: function(val) { setAttributes( {label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] });
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
                                    
                                    pgGetFeature4("pgUrlControl")('link', setAttributes, props, 'Link URL', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.label,
                                        help: __( '' ),
                                        label: __( 'Link Text' ),
                                        onChange: function(val) { setAttributes({label: val}) },
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
