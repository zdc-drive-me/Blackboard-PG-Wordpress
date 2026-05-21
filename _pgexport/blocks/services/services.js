
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
            plans_heading: {
                type: ['string', 'null'],
                default: `Project scales <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            plans_intro: {
                type: ['string', 'null'],
                default: `Projects vary in scope. Each follows the same approach — structure first, then design and execution — adapted to scale and complexity.`,
            },
            pkg1_title: {
                type: ['string', 'null'],
                default: `Foundation`,
            },
            pkg1_price: {
                type: ['string', 'null'],
                default: `€3,200`,
            },
            pkg1_desc: {
                type: ['string', 'null'],
                default: `A focused build with essential structure, custom design and core functionality.`,
            },
            pkg1_pages: {
                type: ['string', 'null'],
                default: `Up to 6`,
            },
            pkg1_design: {
                type: ['string', 'null'],
                default: `Custom layout &amp; visual system`,
            },
            pkg1_forms: {
                type: ['string', 'null'],
                default: `1 contact form`,
            },
            pkg1_blog: {
                type: ['string', 'null'],
                default: `&ensp;—`,
            },
            pkg1_newsletter: {
                type: ['string', 'null'],
                default: `&ensp;—`,
            },
            pkg1_seo: {
                type: ['string', 'null'],
                default: `Search-ready foundation`,
            },
            pkg1_perf: {
                type: ['string', 'null'],
                default: `Fast load, mobile-ready`,
            },
            pkg1_analytics: {
                type: ['string', 'null'],
                default: `&ensp;—`,
            },
            pkg1_access: {
                type: ['string', 'null'],
                default: `Works for everyone`,
            },
            pkg2_featured: {
                type: ['string', 'null'],
                default: 'true',
            },
            pkg2_title: {
                type: ['string', 'null'],
                default: `Structured`,
            },
            pkg2_price: {
                type: ['string', 'null'],
                default: `€4,100`,
            },
            pkg2_desc: {
                type: ['string', 'null'],
                default: `A content-driven system with expanded pages, flexible layouts and integrated features.`,
            },
            pkg2_pages: {
                type: ['string', 'null'],
                default: `Up to 10`,
            },
            pkg2_design: {
                type: ['string', 'null'],
                default: `Content-driven layout, structured for growth`,
            },
            pkg2_forms: {
                type: ['string', 'null'],
                default: `Smart forms with routing logic`,
            },
            pkg2_blog: {
                type: ['string', 'null'],
                default: `Blog-ready, structured for content`,
            },
            pkg2_newsletter: {
                type: ['string', 'null'],
                default: `Email signup integration`,
            },
            pkg2_seo: {
                type: ['string', 'null'],
                default: `On-page SEO, thoughtfully applied`,
            },
            pkg2_perf: {
                type: ['string', 'null'],
                default: `Optimised loading &amp; delivery`,
            },
            pkg2_analytics: {
                type: ['string', 'null'],
                default: `Traffic &amp; behaviour tracking`,
            },
            pkg2_access: {
                type: ['string', 'null'],
                default: `Inclusive by design`,
            },
            pkg3_title: {
                type: ['string', 'null'],
                default: `Extended`,
            },
            pkg3_price: {
                type: ['string', 'null'],
                default: `€6,300`,
            },
            pkg3_desc: {
                type: ['string', 'null'],
                default: `A more complex system with custom builds, integrations and advanced performance.`,
            },
            pkg3_pages: {
                type: ['string', 'null'],
                default: `12+ or custom scope`,
            },
            pkg3_design: {
                type: ['string', 'null'],
                default: `Fully custom theme, built from scratch`,
            },
            pkg3_forms: {
                type: ['string', 'null'],
                default: `Complex forms &amp; third-party connections`,
            },
            pkg3_blog: {
                type: ['string', 'null'],
                default: `Full editorial system + search structure`,
            },
            pkg3_newsletter: {
                type: ['string', 'null'],
                default: `Automation-ready`,
            },
            pkg3_seo: {
                type: ['string', 'null'],
                default: `Structured data + full technical audit`,
            },
            pkg3_perf: {
                type: ['string', 'null'],
                default: `Loads fast globally, fully optimised`,
            },
            pkg3_analytics: {
                type: ['string', 'null'],
                default: `Detailed tracking &amp; event mapping`,
            },
            pkg3_access: {
                type: ['string', 'null'],
                default: `Rigorously tested`,
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
            },
            hosting_title: {
                type: ['string', 'null'],
                default: `Hosting &amp; Care <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            hosting_intro: {
                type: ['string', 'null'],
                default: `Every WordPress site needs ongoing technical maintenance &#8212; updates, backups, security checks. The question is not whether, but who handles it.<br><br>You can manage your own hosting, provided it meets a minimum quality standard we agree on together. Or we manage everything under one of our care plans, which include hosting as part of the service.<br><br>Either way, the site remains yours.`,
            },
            care_path_a: {
                type: ['string', 'null'],
                default: '',
            },
            care1_title: {
                type: ['string', 'null'],
                default: `Self-managed`,
            },
            care1_tagline: {
                type: ['string', 'null'],
                default: `You handle hosting. We remain available.`,
            },
            care1_body: {
                type: ['string', 'null'],
                default: `You host the site with your own provider. We will advise on minimum requirements — server environment, caching, SSL, backup policy — so the site continues to perform as built. Technical maintenance is your responsibility, though we remain available for agreed support when needed.`,
            },
            care1_includes_title: {
                type: ['string', 'null'],
                default: `What this includes`,
            },
            care1_includes: {
                type: ['string', 'null'],
                default: `<li>Hosting requirements brief at project handover</li> <li>One post-launch technical check (30 days)</li> <li>Documentation so your team can manage day-to-day updates</li> <li>Support available separately, on request</li>`,
            },
            care_path_b: {
                type: ['string', 'null'],
                default: '',
            },
            care2_title: {
                type: ['string', 'null'],
                default: `Managed care`,
            },
            care2_price: {
                type: ['string', 'null'],
                default: `From €60 / month — hosting included`,
            },
            care2_body: {
                type: ['string', 'null'],
                default: `We manage the full technical layer of your site — hosting, updates, security, backups — on our managed infrastructure via SiteGround or Hostinger. You focus on the work. We ensure the system stays stable, secure and current.`,
            },
            care2_includes_title: {
                type: ['string', 'null'],
                default: `What this includes`,
            },
            care2_includes: {
                type: ['string', 'null'],
                default: `<li>Managed hosting on EU-based servers (SiteGround / Hostinger)</li> <li>Regular WordPress core, theme &amp; plugin updates</li> <li>Daily backups with rolling retention</li> <li>Security monitoring, firewall &amp; malware checks</li> <li>Performance checks &amp; uptime monitoring</li> <li>2 hours / month content credit — page edits, text updates, image swaps (not new features)</li> <li>One strategic check-in per year</li>`,
            },
            care2_note: {
                type: ['string', 'null'],
                default: `Scope and pricing vary by project complexity. Full details available on request.`,
            }
        },
        example: { attributes: { about_heading: `how we think and build<span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, heading_text: `What gets built depends on the clarity of the decisions behind it.`, sidebar_block_1_title: `Structure`, sidebar_p1: `Architecture, content, navigation and key decisions &#8212; including what to build, and what to leave out. Nothing is designed until the structure is clear.`, sidebar_block_2_title: `Design &amp; Development`, sidebar_p2: `Custom layout, type system and visual logic &#8212; no generic themes. Each component is built to the structure, with attention to performance, balance and precision.`, sidebar_block_3_title: `Evolution`, sidebar_p3: `Digital systems are not finished at launch. Content shifts, priorities change, pages are added. The structure is built to accommodate this &#8212; not to resist it.`, sidebar_block_4_title: `Care`, sidebar_p4: `Handover, documentation and &#8212; where needed &#8212; ongoing support. The system is yours. We make sure you can use it with confidence, and that someone is on hand when things need attention.`, top_label: `Services <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, hero_image: {id: 0, url: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80', size: '', svg: '', alt: 'Design and development workspace'}, plus1_block: '', plus1_title: `web design &amp; development`, plus1_desc: `Custom websites and digital systems, designed and developed from scratch with attention to structure, performance and long-term use.`, plus2_block: '', plus2_title: `digital &amp; brand consulting`, plus2_desc: `Offer, positioning, audience and direction for digital projects that need to be clarified before they are built or reworked.`, plus3_block: '', plus3_title: `content and copy support`, plus3_desc: `Messaging, website copy and content hierarchy for projects that need to explain themselves more clearly.`, plus4_block: '', plus4_title: `photography&nbsp; &amp; art direction<br>`, plus4_desc: `Image direction, photography briefs and visual guidance for web and digital use.`, plans_heading: `Project scales <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, plans_intro: `Projects vary in scope. Each follows the same approach — structure first, then design and execution — adapted to scale and complexity.`, pkg1_title: `Foundation`, pkg1_price: `€3,200`, pkg1_desc: `A focused build with essential structure, custom design and core functionality.`, pkg1_pages: `Up to 6`, pkg1_design: `Custom layout &amp; visual system`, pkg1_forms: `1 contact form`, pkg1_blog: `&ensp;—`, pkg1_newsletter: `&ensp;—`, pkg1_seo: `Search-ready foundation`, pkg1_perf: `Fast load, mobile-ready`, pkg1_analytics: `&ensp;—`, pkg1_access: `Works for everyone`, pkg2_featured: '', pkg2_title: `Structured`, pkg2_price: `€4,100`, pkg2_desc: `A content-driven system with expanded pages, flexible layouts and integrated features.`, pkg2_pages: `Up to 10`, pkg2_design: `Content-driven layout, structured for growth`, pkg2_forms: `Smart forms with routing logic`, pkg2_blog: `Blog-ready, structured for content`, pkg2_newsletter: `Email signup integration`, pkg2_seo: `On-page SEO, thoughtfully applied`, pkg2_perf: `Optimised loading &amp; delivery`, pkg2_analytics: `Traffic &amp; behaviour tracking`, pkg2_access: `Inclusive by design`, pkg3_title: `Extended`, pkg3_price: `€6,300`, pkg3_desc: `A more complex system with custom builds, integrations and advanced performance.`, pkg3_pages: `12+ or custom scope`, pkg3_design: `Fully custom theme, built from scratch`, pkg3_forms: `Complex forms &amp; third-party connections`, pkg3_blog: `Full editorial system + search structure`, pkg3_newsletter: `Automation-ready`, pkg3_seo: `Structured data + full technical audit`, pkg3_perf: `Loads fast globally, fully optimised`, pkg3_analytics: `Detailed tracking &amp; event mapping`, pkg3_access: `Rigorously tested`, link: {post_id: 0, url: '#', title: '', 'post_type': null}, label: `How much does a website cost ?`, start_project_email_link: {post_id: 0, url: 'mailto:blackboard@zdcstudio.com?subject=Start%20a%20Project', title: '', 'post_type': null}, hosting_title: `Hosting &amp; Care <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, hosting_intro: `Every WordPress site needs ongoing technical maintenance &#8212; updates, backups, security checks. The question is not whether, but who handles it.<br><br>You can manage your own hosting, provided it meets a minimum quality standard we agree on together. Or we manage everything under one of our care plans, which include hosting as part of the service.<br><br>Either way, the site remains yours.`, care_path_a: '', care1_title: `Self-managed`, care1_tagline: `You handle hosting. We remain available.`, care1_body: `You host the site with your own provider. We will advise on minimum requirements — server environment, caching, SSL, backup policy — so the site continues to perform as built. Technical maintenance is your responsibility, though we remain available for agreed support when needed.`, care1_includes_title: `What this includes`, care1_includes: `<li>Hosting requirements brief at project handover</li> <li>One post-launch technical check (30 days)</li> <li>Documentation so your team can manage day-to-day updates</li> <li>Support available separately, on request</li>`, care_path_b: '', care2_title: `Managed care`, care2_price: `From €60 / month — hosting included`, care2_body: `We manage the full technical layer of your site — hosting, updates, security, backups — on our managed infrastructure via SiteGround or Hostinger. You focus on the work. We ensure the system stays stable, secure and current.`, care2_includes_title: `What this includes`, care2_includes: `<li>Managed hosting on EU-based servers (SiteGround / Hostinger)</li> <li>Regular WordPress core, theme &amp; plugin updates</li> <li>Daily backups with rolling retention</li> <li>Security monitoring, firewall &amp; malware checks</li> <li>Performance checks &amp; uptime monitoring</li> <li>2 hours / month content credit — page edits, text updates, image swaps (not new features)</li> <li>One strategic check-in per year</li>`, care2_note: `Scope and pricing vary by project complexity. Full details available on request.` } },
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
                el('section', { ...blockProps }, [' ', el('div', { className: 'grid grid-cols-1 min-w-0 gap-4 md:gap-8 pl-4 pr-4 md:grid-cols-12 md:pl-6 md:pr-6' }, [' ', ' ', el('aside', { className: 'col-span-12 min-w-0 self-start top-[9vh] md:col-span-3 md:sticky', 'aria-labelledby': 'sidebar-heading' }, [' ', el('div', {}, [' ', el('section', { className: 'mb-6', 'aria-labelledby': 'about-us-heading' }, [' ', el('div', { className: 'border-solid' }, [' ', el('div', { className: 'flex justify-between items-center md:block' }, [' ', el(RichText, { tagName: 'h3', id: 'about-us-heading', className: 'flex font-semibold gap-2 items-center text-xs uppercase', value: propOrDefault( props.attributes.about_heading, 'about_heading' ), onChange: function(val) { setAttributes( {about_heading: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ', el('div', { className: 'md:hidden flex justify-end min-w-0 flex-shrink-0' }, [' ', el('h3', { id: 'dynamic-date-mobile', className: 'flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap' }, [' ', el('span', { id: 'date-display-mobile', className: 'font-sans text-right flex items-center gap-1' }, [' ', el('span', { id: 'date-text-mobile', className: 'font-sans' }), ' ', el('span', {}, '•'), ' ', el('span', { id: 'time-text-mobile', className: 'font-mono tabular-nums' }), ' ']), ' ']), ' ']), ' ']), ' ', el('div', { className: 'bg-custom_pink-200 mt-8 p-2.5' }, [' ', ' ', ' ', ' ', el('div', {}, [' ', el(RichText, { tagName: 'h5', className: 'font-semibold mb-12 text-4xl', value: propOrDefault( props.attributes.heading_text, 'heading_text' ), onChange: function(val) { setAttributes( {heading_text: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold leading-relaxed mb-0 text-xs uppercase', value: propOrDefault( props.attributes.sidebar_block_1_title, 'sidebar_block_1_title' ), onChange: function(val) { setAttributes( {sidebar_block_1_title: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'text-sm leading-relaxed mb-6', value: propOrDefault( props.attributes.sidebar_p1, 'sidebar_p1' ), onChange: function(val) { setAttributes( {sidebar_p1: val }) } }), ' ']), ' ', el('div', {}, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold mb-0 text-xs uppercase', value: propOrDefault( props.attributes.sidebar_block_2_title, 'sidebar_block_2_title' ), onChange: function(val) { setAttributes( {sidebar_block_2_title: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'text-sm leading-relaxed mb-6', value: propOrDefault( props.attributes.sidebar_p2, 'sidebar_p2' ), onChange: function(val) { setAttributes( {sidebar_p2: val }) } }), ' ']), ' ', el('div', {}, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold leading-relaxed mb-0 text-xs uppercase', value: propOrDefault( props.attributes.sidebar_block_3_title, 'sidebar_block_3_title' ), onChange: function(val) { setAttributes( {sidebar_block_3_title: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'text-sm leading-relaxed mb-6', value: propOrDefault( props.attributes.sidebar_p3, 'sidebar_p3' ), onChange: function(val) { setAttributes( {sidebar_p3: val }) } }), ' ']), ' ', el('div', {}, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold leading-relaxed mb-0 text-xs uppercase', value: propOrDefault( props.attributes.sidebar_block_4_title, 'sidebar_block_4_title' ), onChange: function(val) { setAttributes( {sidebar_block_4_title: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'text-sm leading-relaxed mb-6', value: propOrDefault( props.attributes.sidebar_p4, 'sidebar_p4' ), onChange: function(val) { setAttributes( {sidebar_p4: val }) } }), ' ']), ' ']), ' ']), ' ']), ' ']), ' ']), ' ', ' ', el('div', { id: 'main-content', className: 'col-span-12 min-w-0 md:col-span-9' }, [' ', ' ', el('div', { className: 'hidden md:flex justify-between items-start gap-2 min-w-0' }, [' ', el(RichText, { tagName: 'h2', className: 'flex font-semibold gap-2 items-center text-xs uppercase min-w-0', value: propOrDefault( props.attributes.top_label, 'top_label' ), onChange: function(val) { setAttributes( {top_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('div', { className: 'flex justify-end min-w-0 flex-shrink-0' }, [' ', el('h3', { id: 'dynamic-date', className: 'flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap' }, [' ', el('span', { id: 'date-display', className: 'font-sans text-right flex items-center gap-1' }, [' ', el('span', { id: 'date-text', className: 'font-sans' }), ' ', el('span', {}, '•'), ' ', el('span', { id: 'time-text', className: 'font-mono tabular-nums' }), ' ']), ' ']), ' ']), ' ']), ' ', ' ', el('div', { className: 'gap-4 grid items-center max-w-6xl mt-0 mx-auto md:gap-6 lg:gap-6 md:grid-cols-[minmax(0,2fr),minmax(0,1.4fr)] md:mt-8' }, [' ', el('figure', { className: 'overflow-hidden rounded-xs' }, [' ', props.attributes.hero_image && props.attributes.hero_image.svg && pgGetFeature4("pgCreateSVG")(RawHTML, {}, pgGetFeature4("pgMergeInlineSVGAttributes")(propOrDefault( props.attributes.hero_image.svg, 'hero_image', 'svg' ), { className: 'h-70 object-cover w-full' })), props.attributes.hero_image && !props.attributes.hero_image.svg && propOrDefault( props.attributes.hero_image.url, 'hero_image', 'url' ) && el('img', { src: propOrDefault( props.attributes.hero_image.url, 'hero_image', 'url' ), alt: propOrDefault( props.attributes.hero_image?.alt, 'hero_image', 'alt' ), className: 'h-70 object-cover w-full ' + (props.attributes.hero_image.id ? ('wp-image-' + props.attributes.hero_image.id) : '') }), ' ']), ' ']), ' ', ' ', el('section', { className: 'mt-12', 'aria-labelledby': 'strategic-support-heading' }, [' ', ' ', el('div', { className: 'grid grid-cols-1 gap-3 md:grid-cols-2' }, [' ', el('div', { className: 'bg-white/60 border border-gray-200 p-4 rounded-xs' }, [' ', el(RichText, { tagName: 'h5', className: 'block font-semibold mb-1 text-2xl tracking-wide uppercase', value: propOrDefault( props.attributes.plus1_title, 'plus1_title' ), onChange: function(val) { setAttributes( {plus1_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'text-sm font-thin text-gray-700 leading-relaxed', value: propOrDefault( props.attributes.plus1_desc, 'plus1_desc' ), onChange: function(val) { setAttributes( {plus1_desc: val }) } }), ' ']), ' ', el('div', { className: 'bg-white/60 border border-gray-200 p-4 rounded-xs' }, [' ', el(RichText, { tagName: 'h5', className: 'block font-semibold mb-1 text-2xl tracking-wide uppercase', value: propOrDefault( props.attributes.plus2_title, 'plus2_title' ), onChange: function(val) { setAttributes( {plus2_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'text-sm font-thin text-gray-700 leading-relaxed', value: propOrDefault( props.attributes.plus2_desc, 'plus2_desc' ), onChange: function(val) { setAttributes( {plus2_desc: val }) } }), ' ']), ' ', el('div', { className: 'bg-white/60 border border-gray-200 p-4 rounded-xs' }, [' ', el(RichText, { tagName: 'h5', className: 'block font-semibold mb-1 text-2xl tracking-wide uppercase', value: propOrDefault( props.attributes.plus3_title, 'plus3_title' ), onChange: function(val) { setAttributes( {plus3_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'text-sm font-thin text-gray-700 leading-relaxed', value: propOrDefault( props.attributes.plus3_desc, 'plus3_desc' ), onChange: function(val) { setAttributes( {plus3_desc: val }) } }), ' ']), ' ', el('div', { className: 'bg-white/60 border border-gray-200 p-4 rounded-xs' }, [' ', el(RichText, { tagName: 'h5', className: 'block uppercase font-semibold mb-1 tracking-wide text-2xl', value: propOrDefault( props.attributes.plus4_title, 'plus4_title' ), onChange: function(val) { setAttributes( {plus4_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'text-sm font-thin text-gray-700 leading-relaxed', value: propOrDefault( props.attributes.plus4_desc, 'plus4_desc' ), onChange: function(val) { setAttributes( {plus4_desc: val }) } }), ' ']), ' ']), ' ']), ' ', ' ', el('section', { className: 'mt-12', 'aria-labelledby': 'plans-heading' }, [' ', el('div', { className: 'mb-6' }, [' ', el(RichText, { tagName: 'h2', className: 'flex font-semibold gap-2 items-center text-xs uppercase min-w-0', id: 'plans-heading', value: propOrDefault( props.attributes.plans_heading, 'plans_heading' ), onChange: function(val) { setAttributes( {plans_heading: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'mt-2 text-sm text-gray-800 leading-relaxed', value: propOrDefault( props.attributes.plans_intro, 'plans_intro' ), onChange: function(val) { setAttributes( {plans_intro: val }) } }), ' ']), ' ', el('div', { className: 'gap-6 grid grid-cols-1 pb-0 md:grid-cols-3' }, [' ', ' ', el('div', { className: 'flex flex-col h-full' }, [' ', el('div', { className: 'mb-4' }, [' ', el('div', { className: 'inline-flex items-center bg-stone-900 text-white hover:bg-[#a4ab13] hover:text-white transition-colors duration-200 px-4 py-2 text-lg leading-none rounded-xs' }, [' ', el('h3', { className: 'font-semibold leading-none text-sm' }, [' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.pkg1_title, 'pkg1_title' ), onChange: function(val) { setAttributes( {pkg1_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']), ' ', el('div', { className: 'space-y-2 text-sm flex-grow' }, [' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'From '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_price, 'pkg1_price' ), onChange: function(val) { setAttributes( {pkg1_price: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el(RichText, { tagName: 'p', className: 'font-thin text-gray-700 leading-relaxed pb-1', value: propOrDefault( props.attributes.pkg1_desc, 'pkg1_desc' ), onChange: function(val) { setAttributes( {pkg1_desc: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('hr', { className: 'border-t border-black/10 my-2' }), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Pages: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_pages, 'pkg1_pages' ), onChange: function(val) { setAttributes( {pkg1_pages: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Design: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_design, 'pkg1_design' ), onChange: function(val) { setAttributes( {pkg1_design: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Contact: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_forms, 'pkg1_forms' ), onChange: function(val) { setAttributes( {pkg1_forms: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Blog:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_blog, 'pkg1_blog' ), onChange: function(val) { setAttributes( {pkg1_blog: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Newsletter:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_newsletter, 'pkg1_newsletter' ), onChange: function(val) { setAttributes( {pkg1_newsletter: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Search visibility: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_seo, 'pkg1_seo' ), onChange: function(val) { setAttributes( {pkg1_seo: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Speed: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_perf, 'pkg1_perf' ), onChange: function(val) { setAttributes( {pkg1_perf: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Analytics:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_analytics, 'pkg1_analytics' ), onChange: function(val) { setAttributes( {pkg1_analytics: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Accessibility: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_access, 'pkg1_access' ), onChange: function(val) { setAttributes( {pkg1_access: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']), ' ', ' ', ' ', el('div', { className: 'flex flex-col h-full' }, [' ', el('div', { className: 'mb-4' }, [' ', el('div', { className: 'inline-flex items-center bg-stone-900 text-white hover:bg-[#a4ab13] hover:text-white transition-colors duration-200 px-4 py-2 text-lg leading-none rounded-xs' }, [' ', el('h3', { className: 'font-semibold leading-none text-sm' }, [' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.pkg2_title, 'pkg2_title' ), onChange: function(val) { setAttributes( {pkg2_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']), ' ', el('div', { className: 'space-y-2 text-sm flex-grow' }, [' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'From '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_price, 'pkg2_price' ), onChange: function(val) { setAttributes( {pkg2_price: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el(RichText, { tagName: 'p', className: 'font-thin text-gray-700 leading-relaxed pb-1', value: propOrDefault( props.attributes.pkg2_desc, 'pkg2_desc' ), onChange: function(val) { setAttributes( {pkg2_desc: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('hr', { className: 'border-t border-black/10 my-2' }), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Pages: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_pages, 'pkg2_pages' ), onChange: function(val) { setAttributes( {pkg2_pages: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Design: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_design, 'pkg2_design' ), onChange: function(val) { setAttributes( {pkg2_design: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Contact: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_forms, 'pkg2_forms' ), onChange: function(val) { setAttributes( {pkg2_forms: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Blog: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_blog, 'pkg2_blog' ), onChange: function(val) { setAttributes( {pkg2_blog: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Newsletter: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_newsletter, 'pkg2_newsletter' ), onChange: function(val) { setAttributes( {pkg2_newsletter: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Search visibility: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_seo, 'pkg2_seo' ), onChange: function(val) { setAttributes( {pkg2_seo: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Speed: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_perf, 'pkg2_perf' ), onChange: function(val) { setAttributes( {pkg2_perf: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Analytics: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_analytics, 'pkg2_analytics' ), onChange: function(val) { setAttributes( {pkg2_analytics: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Accessibility: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_access, 'pkg2_access' ), onChange: function(val) { setAttributes( {pkg2_access: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']), ' ', el('div', { className: 'flex flex-col h-full' }, [' ', el('div', { className: 'mb-4' }, [' ', el('div', { className: 'inline-flex items-center bg-stone-900 text-white hover:bg-[#a4ab13] hover:text-white transition-colors duration-200 px-4 py-2 text-lg leading-none rounded-xs' }, [' ', el('h3', { className: 'font-semibold leading-none text-sm' }, [' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.pkg3_title, 'pkg3_title' ), onChange: function(val) { setAttributes( {pkg3_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']), ' ', el('div', { className: 'space-y-2 text-sm flex-grow' }, [' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'From '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_price, 'pkg3_price' ), onChange: function(val) { setAttributes( {pkg3_price: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el(RichText, { tagName: 'p', className: 'font-thin text-gray-700 leading-relaxed pb-1', value: propOrDefault( props.attributes.pkg3_desc, 'pkg3_desc' ), onChange: function(val) { setAttributes( {pkg3_desc: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('hr', { className: 'border-t border-black/10 my-2' }), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Pages: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_pages, 'pkg3_pages' ), onChange: function(val) { setAttributes( {pkg3_pages: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Design: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_design, 'pkg3_design' ), onChange: function(val) { setAttributes( {pkg3_design: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Contact: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_forms, 'pkg3_forms' ), onChange: function(val) { setAttributes( {pkg3_forms: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Blog: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_blog, 'pkg3_blog' ), onChange: function(val) { setAttributes( {pkg3_blog: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Newsletter: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_newsletter, 'pkg3_newsletter' ), onChange: function(val) { setAttributes( {pkg3_newsletter: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Search visibility: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_seo, 'pkg3_seo' ), onChange: function(val) { setAttributes( {pkg3_seo: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Speed: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_perf, 'pkg3_perf' ), onChange: function(val) { setAttributes( {pkg3_perf: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Analytics: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_analytics, 'pkg3_analytics' ), onChange: function(val) { setAttributes( {pkg3_analytics: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Accessibility: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_access, 'pkg3_access' ), onChange: function(val) { setAttributes( {pkg3_access: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']), ' ']), ' ', el('div', { className: 'border-black/10 border-t flex flex-col items-center mt-6 pt-5 space-y-4' }, [' ', el(RichText, { tagName: 'a', className: 'font-thin leading-snug max-w-xl text-black text-xs', href: propOrDefault( props.attributes.link.url, 'link', 'url' ), onClick: function(e) { e.preventDefault(); }, value: propOrDefault( props.attributes.label, 'label' ), onChange: function(val) { setAttributes( {label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('a', { href: propOrDefault( props.attributes.start_project_email_link.url, 'start_project_email_link', 'url' ), role: 'button', className: 'group bg-black flex flex-col font-normal gap-2 px-4 py-4 rounded-xs shrink-0 text-center text-sm text-white tracking-wide transition-colors w-full focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white/60 focus:outline-none hover:bg-[#a4ab13] md:w-auto', onClick: function(e) { e.preventDefault(); } }, [' 	 ', el('h3', { className: 'font-thin leading-relaxed text-slate-200 text-xs md:max-w-lg group-hover:text-black' }, 'Each projects begins with a conversation '), ' 	 ', el('h5', { className: 'font-normal text-lg uppercase group-hover:text-black' }, ' 			 start a project'), ' 	 ']), ' ']), ' ']), ' ', ' ', el('section', { className: 'mt-12', 'aria-labelledby': 'care-heading' }, [' ', el('div', { className: 'mb-6' }, [' ', el(RichText, { tagName: 'h2', className: 'flex font-semibold gap-2 items-center text-xs uppercase min-w-0', id: 'care-heading', value: propOrDefault( props.attributes.hosting_title, 'hosting_title' ), onChange: function(val) { setAttributes( {hosting_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ', el(RichText, { tagName: 'p', className: 'mt-2 text-sm text-gray-800 max-w-xl leading-relaxed', value: propOrDefault( props.attributes.hosting_intro, 'hosting_intro' ), onChange: function(val) { setAttributes( {hosting_intro: val }) } }), ' ']), ' ', ' ', el('div', { className: 'space-y-6 text-sm text-gray-800' }, [' ', ' ', el('div', { className: 'bg-white/60 border border-gray-200 p-4 rounded-xs md:p-5' }, [' ', el('div', { className: 'flex items-baseline justify-between gap-2 flex-wrap' }, [' ', el('h3', { className: 'text-xs uppercase font-semibold flex items-center gap-2' }, [' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.care1_title, 'care1_title' ), onChange: function(val) { setAttributes( {care1_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('span', { className: 'bg-black h-2 w-2 rounded-full relative -top-[1px]', 'aria-hidden': 'true' }), ' ']), ' ', el(RichText, { tagName: 'span', className: 'text-[11px] text-gray-500 uppercase tracking-wide', value: propOrDefault( props.attributes.care1_tagline, 'care1_tagline' ), onChange: function(val) { setAttributes( {care1_tagline: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el(RichText, { tagName: 'p', className: 'mt-3 text-gray-800 leading-relaxed', value: propOrDefault( props.attributes.care1_body, 'care1_body' ), onChange: function(val) { setAttributes( {care1_body: val }) } }), ' ', el('div', { className: 'mt-4 pt-3 border-t border-black/10' }, [' ', el(RichText, { tagName: 'h4', className: 'text-[11px] uppercase font-semibold text-gray-700 mb-2', value: propOrDefault( props.attributes.care1_includes_title, 'care1_includes_title' ), onChange: function(val) { setAttributes( {care1_includes_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'ul', className: 'space-y-1 text-gray-700', value: propOrDefault( props.attributes.care1_includes, 'care1_includes' ), onChange: function(val) { setAttributes( {care1_includes: val }) } }), ' ']), ' ']), ' ', ' ', el('div', { className: 'bg-white/60 border border-gray-200 p-4 rounded-xs md:p-5' }, [' ', el('div', { className: 'flex items-baseline justify-between gap-2 flex-wrap' }, [' ', el('h3', { className: 'text-xs uppercase font-semibold flex items-center gap-2' }, [' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.care2_title, 'care2_title' ), onChange: function(val) { setAttributes( {care2_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('span', { className: 'bg-black h-2 w-2 rounded-full relative -top-[1px]', 'aria-hidden': 'true' }), ' ']), ' ', el(RichText, { tagName: 'span', className: 'text-[11px] text-gray-500 uppercase tracking-wide', value: propOrDefault( props.attributes.care2_price, 'care2_price' ), onChange: function(val) { setAttributes( {care2_price: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el(RichText, { tagName: 'p', className: 'mt-3 text-gray-800 leading-relaxed', value: propOrDefault( props.attributes.care2_body, 'care2_body' ), onChange: function(val) { setAttributes( {care2_body: val }) } }), ' ', el('div', { className: 'mt-4 pt-3 border-t border-black/10' }, [' ', el(RichText, { tagName: 'h4', className: 'text-[11px] uppercase font-semibold text-gray-700 mb-2', value: propOrDefault( props.attributes.care2_includes_title, 'care2_includes_title' ), onChange: function(val) { setAttributes( {care2_includes_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'ul', className: 'space-y-1 text-gray-700', value: propOrDefault( props.attributes.care2_includes, 'care2_includes' ), onChange: function(val) { setAttributes( {care2_includes: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'mt-3 text-[11px] text-gray-500 leading-relaxed', value: propOrDefault( props.attributes.care2_note, 'care2_note' ), onChange: function(val) { setAttributes( {care2_note: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']), ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']),                        
                
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
                                    el(TextControl, {
                                        value: props.attributes.plans_heading,
                                        help: __( '' ),
                                        label: __( 'Plans Heading' ),
                                        onChange: function(val) { setAttributes({plans_heading: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Plans Intro' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.plans_intro,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({plans_intro: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.pkg1_title,
                                        help: __( '' ),
                                        label: __( 'Package 1 Title' ),
                                        onChange: function(val) { setAttributes({pkg1_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg1_price,
                                        help: __( '' ),
                                        label: __( 'Pkg1 Price' ),
                                        onChange: function(val) { setAttributes({pkg1_price: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg1_desc,
                                        help: __( '' ),
                                        label: __( 'Pkg1 Description' ),
                                        onChange: function(val) { setAttributes({pkg1_desc: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg1_pages,
                                        help: __( '' ),
                                        label: __( 'Pkg1 Pages' ),
                                        onChange: function(val) { setAttributes({pkg1_pages: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg1_design,
                                        help: __( '' ),
                                        label: __( 'Pkg1 Design' ),
                                        onChange: function(val) { setAttributes({pkg1_design: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg1_forms,
                                        help: __( '' ),
                                        label: __( 'Pkg1 Contact Forms' ),
                                        onChange: function(val) { setAttributes({pkg1_forms: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg1_blog,
                                        help: __( '' ),
                                        label: __( 'Pkg1 Blog' ),
                                        onChange: function(val) { setAttributes({pkg1_blog: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg1_newsletter,
                                        help: __( '' ),
                                        label: __( 'Pkg1 Newsletter' ),
                                        onChange: function(val) { setAttributes({pkg1_newsletter: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg1_seo,
                                        help: __( '' ),
                                        label: __( 'Pkg1 SEO' ),
                                        onChange: function(val) { setAttributes({pkg1_seo: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg1_perf,
                                        help: __( '' ),
                                        label: __( 'Pkg1 Performance' ),
                                        onChange: function(val) { setAttributes({pkg1_perf: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg1_analytics,
                                        help: __( '' ),
                                        label: __( 'Pkg1 Analytics' ),
                                        onChange: function(val) { setAttributes({pkg1_analytics: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg1_access,
                                        help: __( '' ),
                                        label: __( 'Pkg1 Accessibility' ),
                                        onChange: function(val) { setAttributes({pkg1_access: val}) },
                                        type: 'text'
                                    }),
                                    el(ToggleControl, {
                                        checked: props.attributes.pkg2_featured === '',
                                        label: __( 'Package 2 Featured' ),
                                        onChange: function(val) { setAttributes({pkg2_featured: val ? '' : ''}) },
                                        help: __( '' ),
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg2_title,
                                        help: __( '' ),
                                        label: __( 'Package 2 Title' ),
                                        onChange: function(val) { setAttributes({pkg2_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg2_price,
                                        help: __( '' ),
                                        label: __( 'Pkg2 Price' ),
                                        onChange: function(val) { setAttributes({pkg2_price: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg2_desc,
                                        help: __( '' ),
                                        label: __( 'Pkg2 Description' ),
                                        onChange: function(val) { setAttributes({pkg2_desc: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg2_pages,
                                        help: __( '' ),
                                        label: __( 'Pkg2 Pages' ),
                                        onChange: function(val) { setAttributes({pkg2_pages: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg2_design,
                                        help: __( '' ),
                                        label: __( 'Pkg2 Design' ),
                                        onChange: function(val) { setAttributes({pkg2_design: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg2_forms,
                                        help: __( '' ),
                                        label: __( 'Pkg2 Contact Forms' ),
                                        onChange: function(val) { setAttributes({pkg2_forms: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg2_blog,
                                        help: __( '' ),
                                        label: __( 'Pkg2 Blog' ),
                                        onChange: function(val) { setAttributes({pkg2_blog: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg2_newsletter,
                                        help: __( '' ),
                                        label: __( 'Pkg2 Newsletter' ),
                                        onChange: function(val) { setAttributes({pkg2_newsletter: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg2_seo,
                                        help: __( '' ),
                                        label: __( 'Pkg2 SEO' ),
                                        onChange: function(val) { setAttributes({pkg2_seo: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg2_perf,
                                        help: __( '' ),
                                        label: __( 'Pkg2 Performance' ),
                                        onChange: function(val) { setAttributes({pkg2_perf: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg2_analytics,
                                        help: __( '' ),
                                        label: __( 'Pkg2 Analytics' ),
                                        onChange: function(val) { setAttributes({pkg2_analytics: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg2_access,
                                        help: __( '' ),
                                        label: __( 'Pkg2 Accessibility' ),
                                        onChange: function(val) { setAttributes({pkg2_access: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg3_title,
                                        help: __( '' ),
                                        label: __( 'Package 3 Title' ),
                                        onChange: function(val) { setAttributes({pkg3_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg3_price,
                                        help: __( '' ),
                                        label: __( 'Pkg3 Price' ),
                                        onChange: function(val) { setAttributes({pkg3_price: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg3_desc,
                                        help: __( '' ),
                                        label: __( 'Pkg3 Description' ),
                                        onChange: function(val) { setAttributes({pkg3_desc: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg3_pages,
                                        help: __( '' ),
                                        label: __( 'Pkg3 Pages' ),
                                        onChange: function(val) { setAttributes({pkg3_pages: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg3_design,
                                        help: __( '' ),
                                        label: __( 'Pkg3 Design' ),
                                        onChange: function(val) { setAttributes({pkg3_design: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg3_forms,
                                        help: __( '' ),
                                        label: __( 'Pkg3 Contact Forms' ),
                                        onChange: function(val) { setAttributes({pkg3_forms: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg3_blog,
                                        help: __( '' ),
                                        label: __( 'Pkg3 Blog' ),
                                        onChange: function(val) { setAttributes({pkg3_blog: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg3_newsletter,
                                        help: __( '' ),
                                        label: __( 'Pkg3 Newsletter' ),
                                        onChange: function(val) { setAttributes({pkg3_newsletter: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg3_seo,
                                        help: __( '' ),
                                        label: __( 'Pkg3 SEO' ),
                                        onChange: function(val) { setAttributes({pkg3_seo: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg3_perf,
                                        help: __( '' ),
                                        label: __( 'Pkg3 Performance' ),
                                        onChange: function(val) { setAttributes({pkg3_perf: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg3_analytics,
                                        help: __( '' ),
                                        label: __( 'Pkg3 Analytics' ),
                                        onChange: function(val) { setAttributes({pkg3_analytics: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pkg3_access,
                                        help: __( '' ),
                                        label: __( 'Pkg3 Accessibility' ),
                                        onChange: function(val) { setAttributes({pkg3_access: val}) },
                                        type: 'text'
                                    }),
                                    pgGetFeature4("pgUrlControl")('link', setAttributes, props, 'Link URL', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.label,
                                        help: __( '' ),
                                        label: __( 'Link Text' ),
                                        onChange: function(val) { setAttributes({label: val}) },
                                        type: 'text'
                                    }),
                                    pgGetFeature4("pgUrlControl")('start_project_email_link', setAttributes, props, 'Start Project: Email Link', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.hosting_title,
                                        help: __( '' ),
                                        label: __( 'Hosting Title' ),
                                        onChange: function(val) { setAttributes({hosting_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Hosting Intro' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.hosting_intro,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({hosting_intro: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.care_path_a,
                                        help: __( '' ),
                                        label: __( 'Care Path A' ),
                                        onChange: function(val) { setAttributes({care_path_a: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care1_title,
                                        help: __( '' ),
                                        label: __( 'Care 1 Title' ),
                                        onChange: function(val) { setAttributes({care1_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care1_tagline,
                                        help: __( '' ),
                                        label: __( 'Care 1 Tagline' ),
                                        onChange: function(val) { setAttributes({care1_tagline: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Care 1 Body' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.care1_body,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({care1_body: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.care1_includes_title,
                                        help: __( '' ),
                                        label: __( 'Care 1 Includes Title' ),
                                        onChange: function(val) { setAttributes({care1_includes_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Care 1 Includes' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.care1_includes,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({care1_includes: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.care_path_b,
                                        help: __( '' ),
                                        label: __( 'Care Path B' ),
                                        onChange: function(val) { setAttributes({care_path_b: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care2_title,
                                        help: __( '' ),
                                        label: __( 'Care 2 Title' ),
                                        onChange: function(val) { setAttributes({care2_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care2_price,
                                        help: __( '' ),
                                        label: __( 'Care 2 Price' ),
                                        onChange: function(val) { setAttributes({care2_price: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Care 2 Body' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.care2_body,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({care2_body: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.care2_includes_title,
                                        help: __( '' ),
                                        label: __( 'Care 2 Includes Title' ),
                                        onChange: function(val) { setAttributes({care2_includes_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Care 2 Includes' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.care2_includes,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({care2_includes: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.care2_note,
                                        help: __( '' ),
                                        label: __( 'Care 2 Note' ),
                                        onChange: function(val) { setAttributes({care2_note: val}) },
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
