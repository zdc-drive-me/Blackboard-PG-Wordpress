
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
    
    const block = registerBlockType( 'blackboard-by-zdc/services', {
        apiVersion: 2,
        title: 'Services & Packages',
        description: 'Services overview with packages, workflow, and hosting & care plans.',
        icon: 'layout',
        category: 'inner_pages_blocks',
        keywords: [ __('services'), __('packages'), __('workflow'), __('hosting'), __('care') ],
        supports: {},
        attributes: {
            about_heading: {
                type: ['string', 'null'],
                default: `how we think and build<span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            heading_text: {
                type: ['string', 'null'],
                default: `What gets built depends on the clarity of the decisions behind it.`,
            },
            sidebar_block_1_title: {
                type: ['string', 'null'],
                default: `Structure`,
            },
            sidebar_p1: {
                type: ['string', 'null'],
                default: `Architecture, content, navigation and key decisions &#8212; including what to build, and what to leave out. Nothing is designed until the structure is clear.`,
            },
            sidebar_block_2_title: {
                type: ['string', 'null'],
                default: `Design &amp; Development`,
            },
            sidebar_p2: {
                type: ['string', 'null'],
                default: `Custom layout, type system and visual logic &#8212; no generic themes. Each component is built to the structure, with attention to performance, balance and precision.`,
            },
            sidebar_block_3_title: {
                type: ['string', 'null'],
                default: `Evolution`,
            },
            sidebar_p3: {
                type: ['string', 'null'],
                default: `Digital systems are not finished at launch. Content shifts, priorities change, pages are added. The structure is built to accommodate this &#8212; not to resist it.`,
            },
            sidebar_block_4_title: {
                type: ['string', 'null'],
                default: `Care`,
            },
            sidebar_p4: {
                type: ['string', 'null'],
                default: `Handover, documentation and &#8212; where needed &#8212; ongoing support. The system is yours. We make sure you can use it with confidence, and that someone is on hand when things need attention.`,
            },
            top_label: {
                type: ['string', 'null'],
                default: `Services <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            hero_image: {
                type: ['object', 'null'],
                default: {id: 0, url: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80', size: '', svg: '', alt: 'Design and development workspace'},
            },
            plus1_block: {
                type: ['string', 'null'],
                default: '',
            },
            plus1_title: {
                type: ['string', 'null'],
                default: `web design &amp; development`,
            },
            plus1_desc: {
                type: ['string', 'null'],
                default: `Custom websites and digital systems, designed and developed from scratch with attention to structure, performance and long-term use.`,
            },
            plus2_block: {
                type: ['string', 'null'],
                default: '',
            },
            plus2_title: {
                type: ['string', 'null'],
                default: `digital &amp; brand consulting`,
            },
            plus2_desc: {
                type: ['string', 'null'],
                default: `Offer, positioning, audience and direction for digital projects that need to be clarified before they are built or reworked.`,
            },
            plus3_block: {
                type: ['string', 'null'],
                default: '',
            },
            plus3_title: {
                type: ['string', 'null'],
                default: `content and copy support`,
            },
            plus3_desc: {
                type: ['string', 'null'],
                default: `Messaging, website copy and content hierarchy for projects that need to explain themselves more clearly.`,
            },
            plus4_block: {
                type: ['string', 'null'],
                default: '',
            },
            plus4_title: {
                type: ['string', 'null'],
                default: `photography&nbsp; &amp; art direction<br>`,
            },
            plus4_desc: {
                type: ['string', 'null'],
                default: `Image direction, photography briefs and visual guidance for web and digital use.`,
            },
            link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            label: {
                type: ['string', 'null'],
                default: `How much does a website cost ?`,
            },
            start_project_email_link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: 'mailto:blackboard@zdcstudio.com?subject=Start%20a%20Project', title: '', 'post_type': null},
            }
        },
        example: { attributes: { about_heading: `how we think and build<span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, heading_text: `What gets built depends on the clarity of the decisions behind it.`, sidebar_block_1_title: `Structure`, sidebar_p1: `Architecture, content, navigation and key decisions &#8212; including what to build, and what to leave out. Nothing is designed until the structure is clear.`, sidebar_block_2_title: `Design &amp; Development`, sidebar_p2: `Custom layout, type system and visual logic &#8212; no generic themes. Each component is built to the structure, with attention to performance, balance and precision.`, sidebar_block_3_title: `Evolution`, sidebar_p3: `Digital systems are not finished at launch. Content shifts, priorities change, pages are added. The structure is built to accommodate this &#8212; not to resist it.`, sidebar_block_4_title: `Care`, sidebar_p4: `Handover, documentation and &#8212; where needed &#8212; ongoing support. The system is yours. We make sure you can use it with confidence, and that someone is on hand when things need attention.`, top_label: `Services <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, hero_image: {id: 0, url: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80', size: '', svg: '', alt: 'Design and development workspace'}, plus1_block: '', plus1_title: `web design &amp; development`, plus1_desc: `Custom websites and digital systems, designed and developed from scratch with attention to structure, performance and long-term use.`, plus2_block: '', plus2_title: `digital &amp; brand consulting`, plus2_desc: `Offer, positioning, audience and direction for digital projects that need to be clarified before they are built or reworked.`, plus3_block: '', plus3_title: `content and copy support`, plus3_desc: `Messaging, website copy and content hierarchy for projects that need to explain themselves more clearly.`, plus4_block: '', plus4_title: `photography&nbsp; &amp; art direction<br>`, plus4_desc: `Image direction, photography briefs and visual guidance for web and digital use.`, link: {post_id: 0, url: '#', title: '', 'post_type': null}, label: `How much does a website cost ?`, start_project_email_link: {post_id: 0, url: 'mailto:blackboard@zdcstudio.com?subject=Start%20a%20Project', title: '', 'post_type': null} } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'min-h-screen min-w-0' });
            const setAttributes = props.setAttributes; 
            
            props.hero_image = useSelect(function( select ) {
                return {
                    hero_image: props.attributes.hero_image.id ? select('core').getMedia(props.attributes.hero_image.id) : undefined
                };
            }, [props.attributes.hero_image] ).hero_image;
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el('div', { className: 'grid grid-cols-1 min-w-0 gap-4 md:gap-8 pl-4 pr-4 md:grid-cols-12 md:pl-6 md:pr-6' }, [' ', ' ', el('aside', { className: 'col-span-12 min-w-0 self-start top-[9vh] md:col-span-3 md:sticky', 'aria-labelledby': 'sidebar-heading' }, [' ', el('div', {}, [' ', el('section', { className: 'mb-6', 'aria-labelledby': 'about-us-heading' }, [' ', el('div', { className: 'border-solid' }, [' ', el('div', { className: 'flex justify-between items-center md:block' }, [' ', el(RichText, { tagName: 'h3', id: 'about-us-heading', className: 'flex font-semibold gap-2 items-center text-xs uppercase', value: propOrDefault( props.attributes.about_heading, 'about_heading' ), onChange: function(val) { setAttributes( {about_heading: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ', el('div', { className: 'md:hidden flex justify-end min-w-0 flex-shrink-0' }, [' ', el('h3', { id: 'dynamic-date-mobile', className: 'flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap' }, [' ', el('span', { id: 'date-display-mobile', className: 'font-sans text-right flex items-center gap-1' }, [' ', el('span', { id: 'date-text-mobile', className: 'font-sans' }), ' ', el('span', {}, '•'), ' ', el('span', { id: 'time-text-mobile', className: 'font-mono tabular-nums' }), ' ']), ' ']), ' ']), ' ']), ' ', el('div', { className: 'bg-custom_pink-200 mt-8 p-2.5' }, [' ', ' ', ' ', ' ', el('div', {}, [' ', el(RichText, { tagName: 'h5', className: 'font-semibold mb-12 text-4xl', value: propOrDefault( props.attributes.heading_text, 'heading_text' ), onChange: function(val) { setAttributes( {heading_text: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold leading-relaxed mb-0 text-xs uppercase', value: propOrDefault( props.attributes.sidebar_block_1_title, 'sidebar_block_1_title' ), onChange: function(val) { setAttributes( {sidebar_block_1_title: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'text-sm leading-relaxed mb-6', value: propOrDefault( props.attributes.sidebar_p1, 'sidebar_p1' ), onChange: function(val) { setAttributes( {sidebar_p1: val }) } }), ' ']), ' ', el('div', {}, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold mb-0 text-xs uppercase', value: propOrDefault( props.attributes.sidebar_block_2_title, 'sidebar_block_2_title' ), onChange: function(val) { setAttributes( {sidebar_block_2_title: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'text-sm leading-relaxed mb-6', value: propOrDefault( props.attributes.sidebar_p2, 'sidebar_p2' ), onChange: function(val) { setAttributes( {sidebar_p2: val }) } }), ' ']), ' ', el('div', {}, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold leading-relaxed mb-0 text-xs uppercase', value: propOrDefault( props.attributes.sidebar_block_3_title, 'sidebar_block_3_title' ), onChange: function(val) { setAttributes( {sidebar_block_3_title: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'text-sm leading-relaxed mb-6', value: propOrDefault( props.attributes.sidebar_p3, 'sidebar_p3' ), onChange: function(val) { setAttributes( {sidebar_p3: val }) } }), ' ']), ' ', el('div', {}, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold leading-relaxed mb-0 text-xs uppercase', value: propOrDefault( props.attributes.sidebar_block_4_title, 'sidebar_block_4_title' ), onChange: function(val) { setAttributes( {sidebar_block_4_title: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'text-sm leading-relaxed mb-6', value: propOrDefault( props.attributes.sidebar_p4, 'sidebar_p4' ), onChange: function(val) { setAttributes( {sidebar_p4: val }) } }), ' ']), ' ']), ' ']), ' ']), ' ']), ' ']), ' ', ' ', el('div', { id: 'main-content', className: 'col-span-12 min-w-0 md:col-span-9' }, [' ', ' ', el('div', { className: 'hidden md:flex justify-between items-start gap-2 min-w-0' }, [' ', el(RichText, { tagName: 'h2', className: 'flex font-semibold gap-2 items-center text-xs uppercase min-w-0', value: propOrDefault( props.attributes.top_label, 'top_label' ), onChange: function(val) { setAttributes( {top_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('div', { className: 'flex justify-end min-w-0 flex-shrink-0' }, [' ', el('h3', { id: 'dynamic-date', className: 'flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap' }, [' ', el('span', { id: 'date-display', className: 'font-sans text-right flex items-center gap-1' }, [' ', el('span', { id: 'date-text', className: 'font-sans' }), ' ', el('span', {}, '•'), ' ', el('span', { id: 'time-text', className: 'font-mono tabular-nums' }), ' ']), ' ']), ' ']), ' ']), ' ', ' ', el('div', { className: 'gap-4 grid items-center max-w-6xl mt-0 mx-auto md:gap-6 lg:gap-6 md:grid-cols-[minmax(0,2fr),minmax(0,1.4fr)] md:mt-8' }, [' ', el('figure', { className: 'overflow-hidden rounded-xs' }, [' ', props.attributes.hero_image && props.attributes.hero_image.svg && pgGetFeature4("pgCreateSVG")(RawHTML, {}, pgGetFeature4("pgMergeInlineSVGAttributes")(propOrDefault( props.attributes.hero_image.svg, 'hero_image', 'svg' ), { className: 'h-70 object-cover w-full' })), props.attributes.hero_image && !props.attributes.hero_image.svg && propOrDefault( props.attributes.hero_image.url, 'hero_image', 'url' ) && el('img', { src: propOrDefault( props.attributes.hero_image.url, 'hero_image', 'url' ), alt: propOrDefault( props.attributes.hero_image?.alt, 'hero_image', 'alt' ), className: 'h-70 object-cover w-full ' + (props.attributes.hero_image.id ? ('wp-image-' + props.attributes.hero_image.id) : '') }), ' ']), ' ']), ' ', ' ', el('section', { className: 'mt-12', 'aria-labelledby': 'strategic-support-heading' }, [' ', ' ', el('div', { className: 'grid grid-cols-1 gap-3 md:grid-cols-2' }, [' ', el('div', { className: 'bg-white/60 border border-gray-200 p-4 rounded-xs' }, [' ', el(RichText, { tagName: 'h5', className: 'block font-semibold mb-1 text-2xl tracking-wide uppercase', value: propOrDefault( props.attributes.plus1_title, 'plus1_title' ), onChange: function(val) { setAttributes( {plus1_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'text-sm font-thin text-gray-700 leading-relaxed', value: propOrDefault( props.attributes.plus1_desc, 'plus1_desc' ), onChange: function(val) { setAttributes( {plus1_desc: val }) } }), ' ']), ' ', el('div', { className: 'bg-white/60 border border-gray-200 p-4 rounded-xs' }, [' ', el(RichText, { tagName: 'h5', className: 'block font-semibold mb-1 text-2xl tracking-wide uppercase', value: propOrDefault( props.attributes.plus2_title, 'plus2_title' ), onChange: function(val) { setAttributes( {plus2_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'text-sm font-thin text-gray-700 leading-relaxed', value: propOrDefault( props.attributes.plus2_desc, 'plus2_desc' ), onChange: function(val) { setAttributes( {plus2_desc: val }) } }), ' ']), ' ', el('div', { className: 'bg-white/60 border border-gray-200 p-4 rounded-xs' }, [' ', el(RichText, { tagName: 'h5', className: 'block font-semibold mb-1 text-2xl tracking-wide uppercase', value: propOrDefault( props.attributes.plus3_title, 'plus3_title' ), onChange: function(val) { setAttributes( {plus3_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'text-sm font-thin text-gray-700 leading-relaxed', value: propOrDefault( props.attributes.plus3_desc, 'plus3_desc' ), onChange: function(val) { setAttributes( {plus3_desc: val }) } }), ' ']), ' ', el('div', { className: 'bg-white/60 border border-gray-200 p-4 rounded-xs' }, [' ', el(RichText, { tagName: 'h5', className: 'block uppercase font-semibold mb-1 tracking-wide text-2xl', value: propOrDefault( props.attributes.plus4_title, 'plus4_title' ), onChange: function(val) { setAttributes( {plus4_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'text-sm font-thin text-gray-700 leading-relaxed', value: propOrDefault( props.attributes.plus4_desc, 'plus4_desc' ), onChange: function(val) { setAttributes( {plus4_desc: val }) } }), ' ']), ' ']), el('div', { className: 'border-black/10 border-t flex flex-col items-center mt-6 pt-5 space-y-4' }, [' ', el(RichText, { tagName: 'a', className: 'font-thin leading-snug max-w-xl text-black text-xs', href: propOrDefault( props.attributes.link.url, 'link', 'url' ), onClick: function(e) { e.preventDefault(); }, value: propOrDefault( props.attributes.label, 'label' ), onChange: function(val) { setAttributes( {label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('a', { href: propOrDefault( props.attributes.start_project_email_link.url, 'start_project_email_link', 'url' ), role: 'button', className: 'group bg-black flex flex-col font-normal gap-2 px-4 py-4 rounded-xs shrink-0 text-center text-sm text-white tracking-wide transition-colors w-full focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white/60 focus:outline-none hover:bg-[#a4ab13] md:w-auto', onClick: function(e) { e.preventDefault(); } }, [' ', el('h3', { className: 'font-thin leading-relaxed text-slate-200 text-xs md:max-w-lg group-hover:text-black' }, 'Each projects begins with a conversation '), ' ', el('h5', { className: 'font-normal text-lg uppercase group-hover:text-black' }, ' 			 start a project'), ' ']), ' ']), ' ']), ' ', ' ', ' ', ' ', ' ', ' ']), ' ', ' ']), ' ', ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                        pgGetFeature4("pgMediaImageControl")('hero_image', setAttributes, props, 'full', true, 'Hero Image', '' ),
                                        
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
                                        value: props.attributes.heading_text,
                                        help: __( '' ),
                                        label: __( 'Heading text' ),
                                        onChange: function(val) { setAttributes({heading_text: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Sidebar Block 1 Title' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.sidebar_block_1_title,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({sidebar_block_1_title: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Sidebar Paragraph 1' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.sidebar_p1,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({sidebar_p1: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Sidebar Block 2 Title' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.sidebar_block_2_title,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({sidebar_block_2_title: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Sidebar Paragraph 2' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.sidebar_p2,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({sidebar_p2: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Sidebar Block 3 Title' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.sidebar_block_3_title,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({sidebar_block_3_title: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Sidebar Paragraph 3' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.sidebar_p3,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({sidebar_p3: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Sidebar Block 4 Title' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.sidebar_block_4_title,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({sidebar_block_4_title: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Sidebar Paragraph 4' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.sidebar_p4,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({sidebar_p4: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.top_label,
                                        help: __( '' ),
                                        label: __( 'Top Label' ),
                                        onChange: function(val) { setAttributes({top_label: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.plus1_block,
                                        help: __( '' ),
                                        label: __( 'Strategic Item 1' ),
                                        onChange: function(val) { setAttributes({plus1_block: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.plus1_title,
                                        help: __( '' ),
                                        label: __( 'Plus 1 Title' ),
                                        onChange: function(val) { setAttributes({plus1_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Plus 1 Description' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.plus1_desc,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({plus1_desc: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.plus2_block,
                                        help: __( '' ),
                                        label: __( 'Strategic Item 2' ),
                                        onChange: function(val) { setAttributes({plus2_block: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.plus2_title,
                                        help: __( '' ),
                                        label: __( 'Plus 2 Title' ),
                                        onChange: function(val) { setAttributes({plus2_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Plus 2 Description' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.plus2_desc,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({plus2_desc: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.plus3_block,
                                        help: __( '' ),
                                        label: __( 'Strategic Item 3' ),
                                        onChange: function(val) { setAttributes({plus3_block: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.plus3_title,
                                        help: __( '' ),
                                        label: __( 'Plus 3 Title' ),
                                        onChange: function(val) { setAttributes({plus3_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Plus 3 Description' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.plus3_desc,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({plus3_desc: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.plus4_block,
                                        help: __( '' ),
                                        label: __( 'Strategic Item 4' ),
                                        onChange: function(val) { setAttributes({plus4_block: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.plus4_title,
                                        help: __( '' ),
                                        label: __( 'Plus 4 Title' ),
                                        onChange: function(val) { setAttributes({plus4_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Plus 4 Description' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.plus4_desc,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({plus4_desc: val}) },
                                        })
                                    ]),
                                    pgGetFeature4("pgUrlControl")('link', setAttributes, props, 'Link URL', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.label,
                                        help: __( '' ),
                                        label: __( 'Link Text' ),
                                        onChange: function(val) { setAttributes({label: val}) },
                                        type: 'text'
                                    }),
                                    pgGetFeature4("pgUrlControl")('start_project_email_link', setAttributes, props, 'Start Project: Email Link', '', null ),    
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
