
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
    
    const block = registerBlockType( 'blackboard-by-zdc/portfolio', {
        apiVersion: 2,
        title: 'Portfolio Block',
        description: 'Portfolio section with about sidebar and project showcase',
        icon: 'block-default',
        category: 'blackboard_blocks',
        keywords: [],
        supports: {},
        attributes: {
            about_heading: {
                type: ['string', 'null'],
                default: `ABOUT <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            h1_text: {
                type: ['string', 'null'],
                default: `Digital practice where direction takes form through structure and execution.`,
            },
            description_1: {
                type: ['string', 'null'],
                default: `Blackboard is a part of the work developed at ZDC Studio,<b>where research becomes direction, and direction takes form.</b>We clarify, structure and build digital <b>systems</b>.<br><br>We work with studios and brands that need digital to hold,clear, fast and consistent, from initial structure to necessary rework (details in <a href="https://blackboard.zdcstudio.com/services/"><b class="!no-underline">services</b></a>).&nbsp;<br><br>Each project is guided by clear decisions and developed with precision, so that it remains coherent as it evolves.<br><br>Blackboard is the digital arm of <b><a href="https://zdcstudio.com"><b class="!no-underline">zdc.studio.</b></a></b><br><br>Based in Milan, working internationally.<br><br>Project enquiries and collaborations: <b><a href="mailto:blackboard@zdcstudio.com?subject=info"><b class="!no-underline">blackboard@zdcstudio.com</b></a></b><br><br><br>`,
            },
            work_heading: {
                type: ['string', 'null'],
                default: `some of our WORKs<span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            }
        },
        example: { attributes: { about_heading: `ABOUT <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, h1_text: `Digital practice where direction takes form through structure and execution.`, description_1: `Blackboard is a part of the work developed at ZDC Studio,<b>where research becomes direction, and direction takes form.</b>We clarify, structure and build digital <b>systems</b>.<br><br>We work with studios and brands that need digital to hold,clear, fast and consistent, from initial structure to necessary rework (details in <a href="https://blackboard.zdcstudio.com/services/"><b class="!no-underline">services</b></a>).&nbsp;<br><br>Each project is guided by clear decisions and developed with precision, so that it remains coherent as it evolves.<br><br>Blackboard is the digital arm of <b><a href="https://zdcstudio.com"><b class="!no-underline">zdc.studio.</b></a></b><br><br>Based in Milan, working internationally.<br><br>Project enquiries and collaborations: <b><a href="mailto:blackboard@zdcstudio.com?subject=info"><b class="!no-underline">blackboard@zdcstudio.com</b></a></b><br><br><br>`, work_heading: `some of our WORKs<span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'min-h-screen min-w-0' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = useInnerBlocksProps({}, {
                allowedBlocks: [ 'blackboard-by-zdc/project' ],
                template: [
    [ 'blackboard-by-zdc/project', {} ]
],
            } );
                            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el('div', { className: 'grid grid-cols-1 min-w-0 gap-4 md:gap-8 pl-4 pr-4 md:grid-cols-12 md:pl-6 md:pr-6' }, [' ', ' ', el('aside', { className: 'col-span-12 min-w-0 self-start top-[9vh] md:col-span-3 md:sticky', 'aria-labelledby': 'sidebar-heading' }, [' ', el('div', {}, [' ', el('section', { className: 'mb-6', 'aria-labelledby': 'about-us-heading' }, [' ', el('div', { className: 'border-solid' }, [' ', el('div', { className: 'flex justify-between items-center md:block' }, [' ', el(RichText, { tagName: 'h3', id: 'about-us-heading', className: 'flex font-semibold gap-2 items-center text-xs uppercase', value: propOrDefault( props.attributes.about_heading, 'about_heading' ), onChange: function(val) { setAttributes( {about_heading: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ', el('div', { className: 'md:hidden flex justify-end min-w-0 flex-shrink-0' }, [' ', el('h3', { id: 'dynamic-date-mobile', className: 'flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap' }, [' ', el('span', { id: 'date-display-mobile', className: 'font-sans text-right flex items-center gap-1' }, [' ', el('span', { id: 'date-text-mobile', className: 'font-sans' }), ' ', el('span', {}, '•'), ' ', el('span', { id: 'time-text-mobile', className: 'font-mono tabular-nums' }), ' ']), ' ']), ' ']), ' ']), ' ', el('div', { className: 'bg-custom_pink-200 mt-6 pb-2.5 pl-2.5 pr-2.5 pt-2.5' }, [' ', el(RichText, { tagName: 'h1', className: 'font-bold mb-6 text-4xl', value: propOrDefault( props.attributes.h1_text, 'h1_text' ), onChange: function(val) { setAttributes( {h1_text: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'mb-6 text-sm', value: propOrDefault( props.attributes.description_1, 'description_1' ), onChange: function(val) { setAttributes( {description_1: val }) } }), ' ']), ' ']), ' ']), ' ']), ' ']), ' ', ' ', el('div', { id: 'main-content', className: 'col-span-12 min-w-0 md:col-span-9' }, [' ', el('div', { className: 'hidden md:flex justify-between items-start gap-2 min-w-0' }, [' ', el(RichText, { tagName: 'h3', className: 'flex font-semibold gap-2 items-center text-xs uppercase min-w-0', value: propOrDefault( props.attributes.work_heading, 'work_heading' ), onChange: function(val) { setAttributes( {work_heading: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('div', { className: 'flex justify-end min-w-0 flex-shrink-0' }, [' ', el('h3', { id: 'dynamic-date', className: 'flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap' }, [' ', el('span', { id: 'date-display', className: 'font-sans text-right flex items-center gap-1' }, [' ', el('span', { id: 'date-text', className: 'font-sans' }), ' ', el('span', {}, '•'), ' ', el('span', { id: 'time-text', className: 'font-mono tabular-nums' }), ' ']), ' ']), ' ']), ' ']), ' ', el('div', { ...innerBlocksProps }), ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']), ' ']), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.about_heading,
                                        help: __( '' ),
                                        label: __( 'About Heading' ),
                                        onChange: function(val) { setAttributes({about_heading: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.h1_text,
                                        help: __( '' ),
                                        label: __( 'H1 Text' ),
                                        onChange: function(val) { setAttributes({h1_text: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Description 1' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.description_1,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({description_1: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.work_heading,
                                        help: __( '' ),
                                        label: __( 'Work Heading' ),
                                        onChange: function(val) { setAttributes({work_heading: val}) },
                                        type: 'text'
                                    }),    
                                ])
                            )
                        ]
                    )                            

            ]);
        },

            save: function(props) {
                return el(InnerBlocks.Content);
            }                        
    
    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
