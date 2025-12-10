
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
    
    const block = registerBlockType( 'blackboard-by-zdc/project', {
        apiVersion: 2,
        title: 'Project Video Block',
        description: '',
        icon: 'block-default',
        category: 'blackboard_blocks',
        parent: [ 'blackboard-by-zdc/portfolio' ],

        keywords: [],
        supports: { spacing: { margin: true } },
        attributes: {
            show_divider: {
                type: ['string', 'null'],
                default: 'true',
            },
            video_url: {
                type: ['string', 'null'],
                default: 'https://stream.mux.com/jd6YK1YimCu02u7Ebpu1xHp4c2iNESUbui00YGfGmsy7E.m3u8',
            },
            client_name: {
                type: ['string', 'null'],
                default: `Dunes Studios`,
            },
            project_description: {
                type: ['string', 'null'],
                default: `This knitwear-focused fashion brand, known for its minimal and refined style, asked us to create a platform that reflects the lightness and clarity that define their design aesthetic.`,
            },
            services: {
                type: ['string', 'null'],
                default: `Web Design + Site Coding + Custom WordPress Theme`,
            }
        },
        example: { attributes: { show_divider: '', video_url: 'https://stream.mux.com/jd6YK1YimCu02u7Ebpu1xHp4c2iNESUbui00YGfGmsy7E.m3u8', client_name: `Dunes Studios`, project_description: `This knitwear-focused fashion brand, known for its minimal and refined style, asked us to create a platform that reflects the lightness and clarity that define their design aesthetic.`, services: `Web Design + Site Coding + Custom WordPress Theme` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'video-wrapper' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('div', { ...blockProps }, [' ', ' ', ' ', ' ', el('div', { className: 'bg-black mt-2 p-4 rounded-md md:mt-6 md:p-6 lg:p-8' }, [' ', ' ', el('video', { className: 'video-player', 'muted': '', 'autoPlay': '', 'loop': '', 'playsInline': '', preload: 'auto', 'aria-label': 'Project video' }, [' ', ' ', el('source', { src: propOrDefault( props.attributes.video_url, 'video_url' ), type: 'application/x-mpegURL' }), ' Your browser doesn\'t support HTML5 video. ', ' ']), ' ', ' ']), ' ', ' ', ' ', ' ', el('div', { className: 'gap-6 grid grid-cols-1 mt-6 pb-6 md:grid-cols-3' }, [' ', ' ', ' ', ' ', el('div', { className: 'flex items-baseline' }, [' ', ' ', el('h3', { className: 'flex font-semibold gap-2 items-center mb-4 text-xs uppercase' }, [' Client ', el('span', { className: 'bg-black h-2 w-2 rounded-full relative -top-[1px]', 'aria-hidden': 'true' }), ' ']), ' ', ' ', el(RichText, { tagName: 'p', className: 'text-sm mb-0 ml-2', value: propOrDefault( props.attributes.client_name, 'client_name' ), onChange: function(val) { setAttributes( {client_name: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ']), ' ', ' ', ' ', ' ', el('div', { className: 'flex items-baseline' }, [' ', ' ', el('h3', { className: 'flex font-extrabold gap-2 items-center mb-4 text-xs uppercase' }, [' About ', el('span', { className: 'bg-black h-2 w-2 rounded-full relative -top-[1px]', 'aria-hidden': 'true' }), ' ']), ' ', ' ', el(RichText, { tagName: 'p', className: 'text-sm mb-0 ml-2', value: propOrDefault( props.attributes.project_description, 'project_description' ), onChange: function(val) { setAttributes( {project_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ']), ' ', ' ', ' ', ' ', el('div', { className: 'flex items-baseline' }, [' ', ' ', el('h3', { className: 'flex font-extrabold gap-2 items-center mb-4 text-xs uppercase' }, [' Services ', el('span', { className: 'bg-black h-2 w-2 rounded-full relative -top-[1px]', 'aria-hidden': 'true' }), ' ']), ' ', ' ', el(RichText, { tagName: 'p', className: 'text-sm mb-0 ml-2', value: propOrDefault( props.attributes.services, 'services' ), onChange: function(val) { setAttributes( {services: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ']), ' ', ' ', ' ', ' ', props.attributes.show_divider  ==  'true' && el('div', { className: 'col-span-full border-b-1 border-black' }), ' ', ' ']), ' ', ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(ToggleControl, {
                                        checked: props.attributes.show_divider === 'true',
                                        label: __( 'Show Divider' ),
                                        onChange: function(val) { setAttributes({show_divider: val ? 'true' : ''}) },
                                        help: __( 'Turn this off to hide the divider line under the block' ),
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.video_url,
                                        help: __( '' ),
                                        label: __( 'Video URL' ),
                                        onChange: function(val) { setAttributes({video_url: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.client_name,
                                        help: __( '' ),
                                        label: __( 'Client Name' ),
                                        onChange: function(val) { setAttributes({client_name: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.project_description,
                                        help: __( '' ),
                                        label: __( 'Project Description' ),
                                        onChange: function(val) { setAttributes({project_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.services,
                                        help: __( '' ),
                                        label: __( 'Services' ),
                                        onChange: function(val) { setAttributes({services: val}) },
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
