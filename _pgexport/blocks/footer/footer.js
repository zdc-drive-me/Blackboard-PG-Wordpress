
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
    
    const block = registerBlockType( 'blackboard-by-zdc/footer', {
        apiVersion: 2,
        title: 'Footer',
        description: 'Website footer with links, social media, and copyright information',
        icon: 'block-default',
        category: 'blackboard_blocks',
        keywords: [],
        supports: {},
        attributes: {
            background_image: {
                type: ['object', 'null'],
                default: {id: 0, url: '', size: '', svg: '', alt: null},
            },
            background_color: {
                type: ['string', 'null'],
                default: '',
            },
            column_title_1: {
                type: ['string', 'null'],
                default: `Contact`,
            },
            column_title_2: {
                type: ['string', 'null'],
                default: `Links`,
            },
            column_title_3: {
                type: ['string', 'null'],
                default: `Language`,
            },
            logo_image: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_blackboard_by_zdc ? pg_project_data_blackboard_by_zdc.url : '') + 'assets/images/blackboard.svg', size: '', svg: '', alt: null},
            },
            address: {
                type: ['string', 'null'],
                default: `&copy; <span>2024</span> <span>zdc srl</span>. Via Arcangelo Corelli 34, 20134. Milano.`,
            },
            vat_number: {
                type: ['string', 'null'],
                default: `IT12874540961&nbsp;`,
            }
        },
        example: { attributes: { background_image: {id: 0, url: '', size: '', svg: '', alt: null}, background_color: '', column_title_1: `Contact`, column_title_2: `Links`, column_title_3: `Language`, logo_image: {id: 0, url: (pg_project_data_blackboard_by_zdc ? pg_project_data_blackboard_by_zdc.url : '') + 'assets/images/blackboard.svg', size: '', svg: '', alt: null}, address: `&copy; <span>2024</span> <span>zdc srl</span>. Via Arcangelo Corelli 34, 20134. Milano.`, vat_number: `IT12874540961&nbsp;` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({});
            const setAttributes = props.setAttributes; 
            
            props.background_image = useSelect(function( select ) {
                return {
                    background_image: props.attributes.background_image.id ? select('core').getMedia(props.attributes.background_image.id) : undefined
                };
            }, [props.attributes.background_image] ).background_image;
            

            props.logo_image = useSelect(function( select ) {
                return {
                    logo_image: props.attributes.logo_image.id ? select('core').getMedia(props.attributes.logo_image.id) : undefined
                };
            }, [props.attributes.logo_image] ).logo_image;
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('footer', { ...blockProps }, [' ', el('div', { className: 'bg-[#a4ab13] ' + propOrDefault( props.attributes.background_color, 'background_color' ), style: { ...((propOrDefault( props.attributes.background_image.url, 'background_image', 'url' ) ? ('url(' + propOrDefault( props.attributes.background_image.url, 'background_image', 'url' ) + ')') : null !== null && propOrDefault( props.attributes.background_image.url, 'background_image', 'url' ) ? ('url(' + propOrDefault( props.attributes.background_image.url, 'background_image', 'url' ) + ')') : null !== '') ? {backgroundImage: propOrDefault( props.attributes.background_image.url, 'background_image', 'url' ) ? ('url(' + propOrDefault( props.attributes.background_image.url, 'background_image', 'url' ) + ')') : null} : {}) } }, [' ', el('div', { className: 'p-6 pt-12' }, [' ', el('div', { className: 'grid grid-cols-2 md:grid-cols-4 gap-8 mb-12' }, [' ', el('div', {}, [' ', el(RichText, { tagName: 'h4', className: 'font-semibold mb-4 text-black text-xs tracking-wide uppercase border-b border-black pb-2', value: propOrDefault( props.attributes.column_title_1, 'column_title_1' ), onChange: function(val) { setAttributes( {column_title_1: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('ul', { className: 'font-thin' }, [' ', el('li', {}, [' ', el('a', { href: 'contact.html', className: 'duration-200 hover:text-black text-black text-sm transition-colors' }, 'Contact Us'), ' ']), ' ', el('li', {}, [' ', el('a', { href: 'contact.html', className: 'text-black hover:text-black transition-colors duration-200 text-sm' }, 'Instagram'), ' ']), ' ', el('li', {}, [' ', el('a', { href: 'contact.html', className: 'text-black hover:text-black transition-colors duration-200 text-sm' }, 'LinkedIn'), ' ']), ' ']), ' ']), ' ', el('div', {}, [' ', el(RichText, { tagName: 'h4', className: 'font-semibold mb-4 text-black text-xs tracking-wide uppercase border-b border-black pb-2', value: propOrDefault( props.attributes.column_title_2, 'column_title_2' ), onChange: function(val) { setAttributes( {column_title_2: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('ul', { className: 'font-thin' }, [' ', el('li', {}, [' ', el('a', { href: '#', className: 'text-black hover:text-black transition-colors duration-200 text-sm' }, 'Services'), ' ']), ' ', el('li', {}, [' ', el('a', { href: '#', className: 'text-black hover:text-black transition-colors duration-200 text-sm' }, 'Privacy'), ' ']), ' ', el('li', {}, [' ', el('a', { href: '#', className: 'text-black hover:text-black transition-colors duration-200 text-sm' }, 'Work with Us'), ' ']), ' ']), ' ']), ' ', el('div', {}, [' ', el(RichText, { tagName: 'h4', className: 'font-semibold mb-4 text-black text-xs tracking-wide uppercase border-b border-black pb-2', value: propOrDefault( props.attributes.column_title_3, 'column_title_3' ), onChange: function(val) { setAttributes( {column_title_3: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('ul', { className: 'font-thin' }, [' ', el('li', {}, [' ', el('a', { href: '#', className: 'text-black hover:text-black transition-colors duration-200 text-sm' }, 'Italiano'), ' ']), ' ', el('li', {}, [' ', el('a', { href: '#', className: 'text-black hover:text-black transition-colors duration-200 text-sm' }, 'English'), ' ']), ' ', el('li', {}, [' ', el('a', { href: '#', className: 'text-black hover:text-black transition-colors duration-200 text-sm' }, 'Español'), ' ']), ' ']), ' ']), ' ']), ' ', ' ', el('div', { className: 'mb-10 mt-10' }, [' ', el('a', { href: '' }, [props.attributes.logo_image && props.attributes.logo_image.svg && pgGetFeature4("pgCreateSVG")(RawHTML, {}, pgGetFeature4("pgMergeInlineSVGAttributes")(propOrDefault( props.attributes.logo_image.svg, 'logo_image', 'svg' ), {})), props.attributes.logo_image && !props.attributes.logo_image.svg && propOrDefault( props.attributes.logo_image.url, 'logo_image', 'url' ) && el('img', { width: '100%', src: propOrDefault( props.attributes.logo_image.url, 'logo_image', 'url' ), alt: propOrDefault( props.attributes.logo_image?.alt, 'logo_image', 'alt' ), className: (props.attributes.logo_image.id ? ('wp-image-' + props.attributes.logo_image.id) : '') })]), ' ']), ' ', ' ', el('div', { className: 'grid grid-cols-2 gap-x-4' }, [' ', el(RichText, { tagName: 'span', className: 'font-thin self-end text-sm', value: propOrDefault( props.attributes.address, 'address' ), onChange: function(val) { setAttributes( {address: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'self-end justify-self-end m-0 leading-none', value: propOrDefault( props.attributes.vat_number, 'vat_number' ), onChange: function(val) { setAttributes( {vat_number: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                        pgGetFeature4("pgMediaImageControl")('background_image', setAttributes, props, 'full', true, 'Background image', '' ),
                                        
                        pgGetFeature4("pgMediaImageControl")('logo_image', setAttributes, props, 'full', true, 'Logo image', '' ),
                                        
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.background_color,
                                        help: __( '' ),
                                        label: __( 'Background color class' ),
                                        onChange: function(val) { setAttributes({background_color: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.column_title_1,
                                        help: __( '' ),
                                        label: __( 'Footer Menu 1 Column Name' ),
                                        onChange: function(val) { setAttributes({column_title_1: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.column_title_2,
                                        help: __( '' ),
                                        label: __( 'Footer Menu 2 Column Name' ),
                                        onChange: function(val) { setAttributes({column_title_2: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.column_title_3,
                                        help: __( '' ),
                                        label: __( 'Footer Menu 3 Column Name' ),
                                        onChange: function(val) { setAttributes({column_title_3: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.address,
                                        help: __( '' ),
                                        label: __( 'Address' ),
                                        onChange: function(val) { setAttributes({address: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.vat_number,
                                        help: __( '' ),
                                        label: __( 'VAT number' ),
                                        onChange: function(val) { setAttributes({vat_number: val}) },
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
