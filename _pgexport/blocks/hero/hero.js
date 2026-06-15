
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
    
    const block = registerBlockType( 'blackboard-by-zdc/hero', {
        apiVersion: 2,
        title: 'Hero',
        description: 'Main hero section with title and introduction text',
        icon: 'block-default',
        category: 'blackboard_blocks',
        keywords: [],
        supports: {},
        attributes: {
            title: {
                type: ['string', 'null'],
                default: `How much does&nbsp;<br>a website cost?`,
            },
            intro_text: {
                type: ['string', 'null'],
                default: `The price of a website is not defined by the number of pages alone. It depends on what the site needs to do, how it is structured, and how much it has to support over time.`,
            },
            description_left: {
                type: ['string', 'null'],
                default: `There is no single answer because &quot;a website&quot; can mean very different things. A simple online presence, a structured company website, an editorial system, an e-commerce platform and a custom digital product do not require the same level of work.`,
            },
            description_right: {
                type: ['string', 'null'],
                default: `The real question is not only how much a website costs. It is what kind of structure, design and development the project needs in order to work properly.`,
            }
        },
        example: { attributes: { title: `How much does&nbsp;<br>a website cost?`, intro_text: `The price of a website is not defined by the number of pages alone. It depends on what the site needs to do, how it is structured, and how much it has to support over time.`, description_left: `There is no single answer because &quot;a website&quot; can mean very different things. A simple online presence, a structured company website, an editorial system, an e-commerce platform and a custom digital product do not require the same level of work.`, description_right: `The real question is not only how much a website costs. It is what kind of structure, design and development the project needs in order to work properly.` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ 'aria-labelledby': 'hero-heading', className: 'md:mt-10 mt-8' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el(RichText, { tagName: 'h1', id: 'hero-heading', className: 'font-bold leading-none mb-6 tracking-tight md:text-4xl lg:text-7xl', value: propOrDefault( props.attributes.title, 'title' ), onChange: function(val) { setAttributes( {title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light italic leading-relaxed max-w-xl mb-6 text-lg text-neutral-700', value: propOrDefault( props.attributes.intro_text, 'intro_text' ), onChange: function(val) { setAttributes( {intro_text: val }) } }), ' ', el('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl' }, [' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-900', value: propOrDefault( props.attributes.description_left, 'description_left' ), onChange: function(val) { setAttributes( {description_left: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-900', value: propOrDefault( props.attributes.description_right, 'description_right' ), onChange: function(val) { setAttributes( {description_right: val }) } }), ' ']), ' ']),                        
                
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
                                        label: __( 'Intro text' ),
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
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Description left' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.description_left,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({description_left: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Description right' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.description_right,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({description_right: val}) },
                                        })
                                    ]),    
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
