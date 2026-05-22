
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
    
    const block = registerBlockType( 'blackboard-by-zdc/header-alt', {
        apiVersion: 2,
        title: 'Header – Alt',
        description: 'Alternative site header without JS animation',
        icon: 'block-default',
        category: 'blackboard_blocks',
        keywords: [],
        supports: {},
        attributes: {
            logo: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_blackboard_by_zdc ? pg_project_data_blackboard_by_zdc.url : '') + 'assets/images/blackboard.svg', size: '', svg: '', alt: null},
            }
        },
        example: { attributes: { logo: {id: 0, url: (pg_project_data_blackboard_by_zdc ? pg_project_data_blackboard_by_zdc.url : '') + 'assets/images/blackboard.svg', size: '', svg: '', alt: null} } },
        edit: function ( props ) {
            const blockProps = useBlockProps({});
            const setAttributes = props.setAttributes; 
            
            props.logo = useSelect(function( select ) {
                return {
                    logo: props.attributes.logo.id ? select('core').getMedia(props.attributes.logo.id) : undefined
                };
            }, [props.attributes.logo] ).logo;
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('header', { ...blockProps }, [' ', el('nav', { className: 'border-b-1 border-black m-4 pb-4 md:m-6 md:pb-6' }, [' ', el('a', { href: '/' }, [' ', props.attributes.logo && props.attributes.logo.svg && pgGetFeature4("pgCreateSVG")(RawHTML, {}, pgGetFeature4("pgMergeInlineSVGAttributes")(propOrDefault( props.attributes.logo.svg, 'logo', 'svg' ), { className: 'block site-logo w-full' })), props.attributes.logo && !props.attributes.logo.svg && propOrDefault( props.attributes.logo.url, 'logo', 'url' ) && el('img', { src: propOrDefault( props.attributes.logo.url, 'logo', 'url' ), className: 'block site-logo w-full ' + (props.attributes.logo.id ? ('wp-image-' + props.attributes.logo.id) : ''), alt: propOrDefault( props.attributes.logo?.alt, 'logo', 'alt' ) }), ' ']), ' ']), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                        pgGetFeature4("pgMediaImageControl")('logo', setAttributes, props, 'full', true, 'Logo', '' ),
                                        
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
