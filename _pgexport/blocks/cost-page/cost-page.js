
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
    
    const block = registerBlockType( 'blackboard-by-zdc/cost-page', {
        apiVersion: 2,
        title: 'Cost of a Website',
        description: 'Editorial page explaining website pricing, project scales and what to expect.',
        icon: 'block-default',
        category: 'blackboard_blocks',
        keywords: [],
        supports: {},
        attributes: {
        },
        example: { attributes: {  } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'min-h-screen min-w-0 bg-[#f5f4f0] text-black py-10 md:py-14' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el('div', { className: 'mx-auto grid grid-cols-1 min-w-0 gap-6 md:gap-10 px-4 md:grid-cols-12 md:px-8 max-w-7xl' }, [' ', ' ', ' ', el('div', { id: 'main-content-col', className: 'col-span-12 md:col-span-10 md:col-start-2 md:pt-2 min-w-0' }, [' ', ' ', ' ', ' ', ' ', el('hr', { className: 'border-black/15 border-t md:my-14 my-10' }), ' ', ' ', ' ', el('hr', { className: 'border-black/15 border-t md:my-14 my-10' }), ' ', ' ', ' ', el('hr', { className: 'border-black/15 border-t md:my-14 my-10' }), ' ', ' ', ' ', el('hr', { className: 'border-black/15 border-t md:my-14 my-10' }), ' ', ' ', ' ', ' ', el('hr', { className: 'border-black/15 border-t md:my-14 my-10' }), ' ', ' ', ' ', el('hr', { className: 'border-black/15 border-t md:my-14 my-10' }), ' ', ' ', ' ']), ' ', ' ']), ' ', ' ']),                        
                
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
