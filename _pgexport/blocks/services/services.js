
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
                default: `About <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            sidebar_h1: {
                type: ['string', 'null'],
                default: `CUSTOM WEB DESIGN &amp; CODING`,
            },
            sidebar_intro: {
                type: ['string', 'null'],
                default: `Blackboard is a <b>creative digital services boutique</b>.`,
            },
            sidebar_p1: {
                type: ['string', 'null'],
                default: `We specialise in helping <b>fashion brands, premium companies and artistic ventures</b> turn ideas into a tailor-made online presence – considered, functional and beautifully built.`,
            },
            sidebar_p2: {
                type: ['string', 'null'],
                default: `By combining <span class="font-normal">design, technology and strategy</span>, we develop digital platforms that grow from a vision, intuition or necessity into a fully realised elegant presence.`,
            },
            sidebar_p3: {
                type: ['string', 'null'],
                default: `Backed by 10+ years of hands-on experience, we work at the intersection of precision and creativity.`,
            },
            sidebar_clients: {
                type: ['string', 'null'],
                default: `Selected clients: Bradley Seymour, Dune Studios, Marzotto Group, WP Lavori in Corso, Colombo &amp; Partners, TimeSwapp, Waldorf School of Milan.`,
            },
            sidebar_parent: {
                type: ['string', 'null'],
                default: `Blackboard is the digital arm of <a href="https://zdcstudio.com" target="_blank" class="!no-underline"><b>zdc.studio</b></a>.`,
            },
            sidebar_location: {
                type: ['string', 'null'],
                default: `Based in Milan, partnering with clients across the globe.`,
            },
            sidebar_contact_line: {
                type: ['string', 'null'],
                default: `For enquiries, write us <a href="mailto:blackboard@zdcstudio.com?subject=Project%20enquiry" class="!no-underline"> <span class="font-normal">here</span> </a>.`,
            },
            top_label: {
                type: ['string', 'null'],
                default: `Services <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            hero_title: {
                type: ['string', 'null'],
                default: `Websites plans`,
            },
            hero_text: {
                type: ['string', 'null'],
                default: `The shape of the site changes depending on the plan, but the foundation stays the same: a clear content structure, a custom visual system and a lean WordPress build.`,
            },
            hero_image: {
                type: ['object', 'null'],
                default: {id: 0, url: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80', size: '', svg: '', alt: 'Design and development workspace with sketches and laptop'},
            },
            pkg1_title: {
                type: ['string', 'null'],
                default: `Starting`,
            },
            pkg1_price: {
                type: ['string', 'null'],
                default: `From €3,200`,
            },
            pkg1_desc: {
                type: ['string', 'null'],
                default: `Premium starter presence`,
            },
            pkg1_pages: {
                type: ['string', 'null'],
                default: `Up to 5`,
            },
            pkg1_design: {
                type: ['string', 'null'],
                default: `Custom layout &amp; style`,
            },
            pkg1_forms: {
                type: ['string', 'null'],
                default: `1 standard form`,
            },
            pkg1_blog: {
                type: ['string', 'null'],
                default: `—`,
            },
            pkg1_newsletter: {
                type: ['string', 'null'],
                default: `—`,
            },
            pkg1_seo: {
                type: ['string', 'null'],
                default: `Basic / core SEO setup`,
            },
            pkg1_perf: {
                type: ['string', 'null'],
                default: `Core optimisations`,
            },
            pkg1_analytics: {
                type: ['string', 'null'],
                default: `—`,
            },
            pkg1_access: {
                type: ['string', 'null'],
                default: `Best practices`,
            },
            pkg1_care: {
                type: ['string', 'null'],
                default: `Host anywhere you like – add a maintenance plan and hosting is included.`,
            },
            pkg2_featured: {
                type: ['string', 'null'],
                default: 'true',
            },
            pkg2_title: {
                type: ['string', 'null'],
                default: `Grow`,
            },
            pkg2_price: {
                type: ['string', 'null'],
                default: `From €4,100`,
            },
            pkg2_desc: {
                type: ['string', 'null'],
                default: `Structured, content-driven site`,
            },
            pkg2_pages: {
                type: ['string', 'null'],
                default: `Up to 10`,
            },
            pkg2_design: {
                type: ['string', 'null'],
                default: `Content-driven page design &amp; layout`,
            },
            pkg2_forms: {
                type: ['string', 'null'],
                default: `Advanced logic + blog-ready forms`,
            },
            pkg2_blog: {
                type: ['string', 'null'],
                default: `Setup + layout`,
            },
            pkg2_newsletter: {
                type: ['string', 'null'],
                default: `Basic (Mailchimp)`,
            },
            pkg2_seo: {
                type: ['string', 'null'],
                default: `Thoughtful on-page SEO`,
            },
            pkg2_perf: {
                type: ['string', 'null'],
                default: `Caching &amp; delivery`,
            },
            pkg2_analytics: {
                type: ['string', 'null'],
                default: `GA4`,
            },
            pkg2_access: {
                type: ['string', 'null'],
                default: `AA-focused`,
            },
            pkg2_care: {
                type: ['string', 'null'],
                default: `Host anywhere you like – add a maintenance plan and hosting is included.`,
            },
            pkg3_title: {
                type: ['string', 'null'],
                default: `Pro`,
            },
            pkg3_price: {
                type: ['string', 'null'],
                default: `From €6,300`,
            },
            pkg3_desc: {
                type: ['string', 'null'],
                default: `Shopify store &amp; custom builds`,
            },
            pkg3_pages: {
                type: ['string', 'null'],
                default: `12+ or custom scope`,
            },
            pkg3_design: {
                type: ['string', 'null'],
                default: `Bespoke theme (Kadence/Pinegrow)`,
            },
            pkg3_forms: {
                type: ['string', 'null'],
                default: `Conditional forms &amp; integrations`,
            },
            pkg3_blog: {
                type: ['string', 'null'],
                default: `Extended features + SEO structure`,
            },
            pkg3_newsletter: {
                type: ['string', 'null'],
                default: `Automation-ready`,
            },
            pkg3_seo: {
                type: ['string', 'null'],
                default: `Structured data + technical SEO audit`,
            },
            pkg3_perf: {
                type: ['string', 'null'],
                default: `Full-stack + CDN configuration`,
            },
            pkg3_analytics: {
                type: ['string', 'null'],
                default: `GA4 + events`,
            },
            pkg3_access: {
                type: ['string', 'null'],
                default: `AA+ review`,
            },
            pkg3_care: {
                type: ['string', 'null'],
                default: `Host anywhere you like – add a maintenance plan and hosting is included.`,
            },
            workflow_title: {
                type: ['string', 'null'],
                default: `How we work - workflow <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            workflow_intro: {
                type: ['string', 'null'],
                default: `Every plan starts with a content and structure review, custom layouts and a lean, modern WordPress build.`,
            },
            wf1_title: {
                type: ['string', 'null'],
                default: `01 — Discovery`,
            },
            wf1_tagline: {
                type: ['string', 'null'],
                default: `Intent, audience, constraints`,
            },
            wf1_body: {
                type: ['string', 'null'],
                default: `We map goals, content and guardrails, then set a lean, realistic scope that matches your resources and timeline.`,
            },
            wf1_focus_title: {
                type: ['string', 'null'],
                default: `Detailed focus: Content &amp; structure`,
            },
            wf1_focus_list: {
                type: ['string', 'null'],
                default: `<ul class="list-disc pl-5 space-y-1 text-gray-800"> <li>Content and page mapping before design</li> <li>Navigation and hierarchy that match your project</li> <li>Wireframes / low-fidelity layouts where needed</li> <li>Simple content guidelines (tone, length, image ratios)</li> </ul>`,
            },
            wf2_title: {
                type: ['string', 'null'],
                default: `02 — Design`,
            },
            wf2_tagline: {
                type: ['string', 'null'],
                default: `System &amp; composition`,
            },
            wf2_body: {
                type: ['string', 'null'],
                default: `Grid, type, components. Editorial clarity over noise, with layouts tuned to your photography and visual language.`,
            },
            wf2_focus_title: {
                type: ['string', 'null'],
                default: `Detailed focus: Design &amp; front-end`,
            },
            wf2_focus_list: {
                type: ['string', 'null'],
                default: `<ul class="list-disc pl-5 space-y-1 text-gray-800"> <li>Custom layout and type system (no generic theme skins)</li> <li>Responsive grids, balanced margins and rhythm</li> <li>Gentle motion where it helps pacing (no circus)</li> <li>Design tuned to your existing brand assets and photography</li> </ul>`,
            },
            wf3_title: {
                type: ['string', 'null'],
                default: `03 — Build`,
            },
            wf3_tagline: {
                type: ['string', 'null'],
                default: `From prototype to live site`,
            },
            wf3_body: {
                type: ['string', 'null'],
                default: `We build a custom theme with the right tools for your project (Pinegrow, Kadence, block editor), keeping the stack lean and documented.`,
            },
            wf3_focus_title: {
                type: ['string', 'null'],
                default: `Detailed focus: Build &amp; handover`,
            },
            wf3_focus_list: {
                type: ['string', 'null'],
                default: `<ul class="list-disc pl-5 space-y-1 text-gray-800"> <li>Modern block-based WordPress build (Kadence + custom blocks)</li> <li>Performance-minded decisions (caching, images, fonts)</li> <li>Basic SEO and analytics setup</li> </ul>`,
            },
            wf4_title: {
                type: ['string', 'null'],
                default: `04 — Launch &amp; care`,
            },
            wf4_tagline: {
                type: ['string', 'null'],
                default: `Deploy, optimise, support`,
            },
            wf4_body: {
                type: ['string', 'null'],
                default: `We launch, run basic performance and analytics passes, and—if you want us on call—plug you into a care plan with hosting, updates and strategic time.`,
            },
            wf4_focus_title: {
                type: ['string', 'null'],
                default: `Detailed focus: Launch &amp; support`,
            },
            wf4_focus_list: {
                type: ['string', 'null'],
                default: `<ul class="list-disc pl-5 space-y-1 text-gray-800"> <li>Handover session so you can update comfortably</li> <li>Short, practical documentation (no 40-page PDF)</li> <li>Optional ongoing care plans with hosting included</li> </ul>`,
            },
            hosting_title: {
                type: ['string', 'null'],
                default: `hosting + care`,
            },
            hosting_intro: {
                type: ['string', 'null'],
                default: `Our maintenance plans include fast, secure managed WordPress hosting via our trusted partners SiteGround and Hostinger – so hosting, updates and monitoring all sit under one team. Hosting + Care are optional and work best when we migrate your site to our managed stack, so you can worry about one less thing.`,
            },
            care1_title: {
                type: ['string', 'null'],
                default: `Essential Care`,
            },
            care1_price: {
                type: ['string', 'null'],
                default: `From &euro;60 / month`,
            },
            care1_best: {
                type: ['string', 'null'],
                default: `Small brochure / portfolio sites`,
            },
            care1_hosting: {
                type: ['string', 'null'],
                default: `Included – managed on our EU-based SiteGround / Hostinger servers`,
            },
            care1_updates: {
                type: ['string', 'null'],
                default: `Monthly WordPress core &amp; plugin updates`,
            },
            care1_backups: {
                type: ['string', 'null'],
                default: `Daily backups with 30-day retention`,
            },
            care1_security: {
                type: ['string', 'null'],
                default: `Firewall + malware scans`,
            },
            care1_perf: {
                type: ['string', 'null'],
                default: `Core performance checks &amp; cache tuning`,
            },
            care1_support: {
                type: ['string', 'null'],
                default: `Email support + 1 small content tweak / month`,
            },
            care1_consult: {
                type: ['string', 'null'],
                default: `1× 60 min strategic check-in per year`,
            },
            care2_featured: {
                type: ['string', 'null'],
                default: 'true',
            },
            care2_title: {
                type: ['string', 'null'],
                default: `Growth Care`,
            },
            care2_price: {
                type: ['string', 'null'],
                default: `From €130 / month`,
            },
            care2_best: {
                type: ['string', 'null'],
                default: `Growing content sites &amp; active blogs`,
            },
            care2_hosting: {
                type: ['string', 'null'],
                default: `Included – managed hosting + staging environment (SiteGround / Hostinger)`,
            },
            care2_updates: {
                type: ['string', 'null'],
                default: `Weekly core, theme &amp; plugin updates`,
            },
            care2_backups: {
                type: ['string', 'null'],
                default: `Twice-daily backups with 60-day retention`,
            },
            care2_security: {
                type: ['string', 'null'],
                default: `Advanced firewall, uptime monitoring &amp; alerts`,
            },
            care2_perf: {
                type: ['string', 'null'],
                default: `Caching, image optimisation &amp; CDN guidance`,
            },
            care2_support: {
                type: ['string', 'null'],
                default: `Email support + up to 3 small tasks / month`,
            },
            care2_consult: {
                type: ['string', 'null'],
                default: `2× 60 min growth &amp; UX sessions per year`,
            },
            care3_title: {
                type: ['string', 'null'],
                default: `Pro Care`,
            },
            care3_price: {
                type: ['string', 'null'],
                default: `From €220 / month`,
            },
            care3_best: {
                type: ['string', 'null'],
                default: `E-commerce &amp; mission-critical sites`,
            },
            care3_hosting: {
                type: ['string', 'null'],
                default: `Included – high-availability hosting + CDN (SiteGround / Hostinger)`,
            },
            care3_updates: {
                type: ['string', 'null'],
                default: `Weekly updates with compatibility checks`,
            },
            care3_backups: {
                type: ['string', 'null'],
                default: `Frequent backups with 90-day retention`,
            },
            care3_security: {
                type: ['string', 'null'],
                default: `Extended monitoring &amp; hardening, priority alerts`,
            },
            care3_perf: {
                type: ['string', 'null'],
                default: `Performance sprints &amp; load-time reviews`,
            },
            care3_support: {
                type: ['string', 'null'],
                default: `Priority support &amp; emergency incident handling`,
            },
            care3_consult: {
                type: ['string', 'null'],
                default: `Up to 4× 60 min strategic sessions per year`,
            },
            plus_title: {
                type: ['string', 'null'],
                default: `Plus services`,
            },
            plus1_title: {
                type: ['string', 'null'],
                default: `Digital &amp; brand consulting`,
            },
            plus1_desc: {
                type: ['string', 'null'],
                default: `Ongoing strategic sessions on positioning, site evolution, content priorities and how your digital touchpoints work together.`,
            },
            plus2_title: {
                type: ['string', 'null'],
                default: `Content &amp; copy support`,
            },
            plus2_desc: {
                type: ['string', 'null'],
                default: `Help refining key headlines, microcopy and page flows so the site reads clearly and feels aligned with your brand voice.`,
            },
            plus3_title: {
                type: ['string', 'null'],
                default: `Photography &amp; art direction`,
            },
            plus3_desc: {
                type: ['string', 'null'],
                default: `Guidance on image selection, art direction and how to prepare assets for web so the visual language feels coherent and intentional.`,
            },
            plus4_title: {
                type: ['string', 'null'],
                default: `Training &amp; handover sessions`,
            },
            plus4_desc: {
                type: ['string', 'null'],
                default: `Short, focused workshops to train your team on editing content, using blocks and keeping the site in good shape over time.`,
            }
        },
        example: { attributes: { about_heading: `About <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, sidebar_h1: `CUSTOM WEB DESIGN &amp; CODING`, sidebar_intro: `Blackboard is a <b>creative digital services boutique</b>.`, sidebar_p1: `We specialise in helping <b>fashion brands, premium companies and artistic ventures</b> turn ideas into a tailor-made online presence – considered, functional and beautifully built.`, sidebar_p2: `By combining <span class="font-normal">design, technology and strategy</span>, we develop digital platforms that grow from a vision, intuition or necessity into a fully realised elegant presence.`, sidebar_p3: `Backed by 10+ years of hands-on experience, we work at the intersection of precision and creativity.`, sidebar_clients: `Selected clients: Bradley Seymour, Dune Studios, Marzotto Group, WP Lavori in Corso, Colombo &amp; Partners, TimeSwapp, Waldorf School of Milan.`, sidebar_parent: `Blackboard is the digital arm of <a href="https://zdcstudio.com" target="_blank" class="!no-underline"><b>zdc.studio</b></a>.`, sidebar_location: `Based in Milan, partnering with clients across the globe.`, sidebar_contact_line: `For enquiries, write us <a href="mailto:blackboard@zdcstudio.com?subject=Project%20enquiry" class="!no-underline"> <span class="font-normal">here</span> </a>.`, top_label: `Services <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, hero_title: `Websites plans`, hero_text: `The shape of the site changes depending on the plan, but the foundation stays the same: a clear content structure, a custom visual system and a lean WordPress build.`, hero_image: {id: 0, url: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80', size: '', svg: '', alt: 'Design and development workspace with sketches and laptop'}, pkg1_title: `Starting`, pkg1_price: `From €3,200`, pkg1_desc: `Premium starter presence`, pkg1_pages: `Up to 5`, pkg1_design: `Custom layout &amp; style`, pkg1_forms: `1 standard form`, pkg1_blog: `—`, pkg1_newsletter: `—`, pkg1_seo: `Basic / core SEO setup`, pkg1_perf: `Core optimisations`, pkg1_analytics: `—`, pkg1_access: `Best practices`, pkg1_care: `Host anywhere you like – add a maintenance plan and hosting is included.`, pkg2_featured: '', pkg2_title: `Grow`, pkg2_price: `From €4,100`, pkg2_desc: `Structured, content-driven site`, pkg2_pages: `Up to 10`, pkg2_design: `Content-driven page design &amp; layout`, pkg2_forms: `Advanced logic + blog-ready forms`, pkg2_blog: `Setup + layout`, pkg2_newsletter: `Basic (Mailchimp)`, pkg2_seo: `Thoughtful on-page SEO`, pkg2_perf: `Caching &amp; delivery`, pkg2_analytics: `GA4`, pkg2_access: `AA-focused`, pkg2_care: `Host anywhere you like – add a maintenance plan and hosting is included.`, pkg3_title: `Pro`, pkg3_price: `From €6,300`, pkg3_desc: `Shopify store &amp; custom builds`, pkg3_pages: `12+ or custom scope`, pkg3_design: `Bespoke theme (Kadence/Pinegrow)`, pkg3_forms: `Conditional forms &amp; integrations`, pkg3_blog: `Extended features + SEO structure`, pkg3_newsletter: `Automation-ready`, pkg3_seo: `Structured data + technical SEO audit`, pkg3_perf: `Full-stack + CDN configuration`, pkg3_analytics: `GA4 + events`, pkg3_access: `AA+ review`, pkg3_care: `Host anywhere you like – add a maintenance plan and hosting is included.`, workflow_title: `How we work - workflow <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, workflow_intro: `Every plan starts with a content and structure review, custom layouts and a lean, modern WordPress build.`, wf1_title: `01 — Discovery`, wf1_tagline: `Intent, audience, constraints`, wf1_body: `We map goals, content and guardrails, then set a lean, realistic scope that matches your resources and timeline.`, wf1_focus_title: `Detailed focus: Content &amp; structure`, wf1_focus_list: `<ul class="list-disc pl-5 space-y-1 text-gray-800"> <li>Content and page mapping before design</li> <li>Navigation and hierarchy that match your project</li> <li>Wireframes / low-fidelity layouts where needed</li> <li>Simple content guidelines (tone, length, image ratios)</li> </ul>`, wf2_title: `02 — Design`, wf2_tagline: `System &amp; composition`, wf2_body: `Grid, type, components. Editorial clarity over noise, with layouts tuned to your photography and visual language.`, wf2_focus_title: `Detailed focus: Design &amp; front-end`, wf2_focus_list: `<ul class="list-disc pl-5 space-y-1 text-gray-800"> <li>Custom layout and type system (no generic theme skins)</li> <li>Responsive grids, balanced margins and rhythm</li> <li>Gentle motion where it helps pacing (no circus)</li> <li>Design tuned to your existing brand assets and photography</li> </ul>`, wf3_title: `03 — Build`, wf3_tagline: `From prototype to live site`, wf3_body: `We build a custom theme with the right tools for your project (Pinegrow, Kadence, block editor), keeping the stack lean and documented.`, wf3_focus_title: `Detailed focus: Build &amp; handover`, wf3_focus_list: `<ul class="list-disc pl-5 space-y-1 text-gray-800"> <li>Modern block-based WordPress build (Kadence + custom blocks)</li> <li>Performance-minded decisions (caching, images, fonts)</li> <li>Basic SEO and analytics setup</li> </ul>`, wf4_title: `04 — Launch &amp; care`, wf4_tagline: `Deploy, optimise, support`, wf4_body: `We launch, run basic performance and analytics passes, and—if you want us on call—plug you into a care plan with hosting, updates and strategic time.`, wf4_focus_title: `Detailed focus: Launch &amp; support`, wf4_focus_list: `<ul class="list-disc pl-5 space-y-1 text-gray-800"> <li>Handover session so you can update comfortably</li> <li>Short, practical documentation (no 40-page PDF)</li> <li>Optional ongoing care plans with hosting included</li> </ul>`, hosting_title: `hosting + care`, hosting_intro: `Our maintenance plans include fast, secure managed WordPress hosting via our trusted partners SiteGround and Hostinger – so hosting, updates and monitoring all sit under one team. Hosting + Care are optional and work best when we migrate your site to our managed stack, so you can worry about one less thing.`, care1_title: `Essential Care`, care1_price: `From &euro;60 / month`, care1_best: `Small brochure / portfolio sites`, care1_hosting: `Included – managed on our EU-based SiteGround / Hostinger servers`, care1_updates: `Monthly WordPress core &amp; plugin updates`, care1_backups: `Daily backups with 30-day retention`, care1_security: `Firewall + malware scans`, care1_perf: `Core performance checks &amp; cache tuning`, care1_support: `Email support + 1 small content tweak / month`, care1_consult: `1× 60 min strategic check-in per year`, care2_featured: '', care2_title: `Growth Care`, care2_price: `From €130 / month`, care2_best: `Growing content sites &amp; active blogs`, care2_hosting: `Included – managed hosting + staging environment (SiteGround / Hostinger)`, care2_updates: `Weekly core, theme &amp; plugin updates`, care2_backups: `Twice-daily backups with 60-day retention`, care2_security: `Advanced firewall, uptime monitoring &amp; alerts`, care2_perf: `Caching, image optimisation &amp; CDN guidance`, care2_support: `Email support + up to 3 small tasks / month`, care2_consult: `2× 60 min growth &amp; UX sessions per year`, care3_title: `Pro Care`, care3_price: `From €220 / month`, care3_best: `E-commerce &amp; mission-critical sites`, care3_hosting: `Included – high-availability hosting + CDN (SiteGround / Hostinger)`, care3_updates: `Weekly updates with compatibility checks`, care3_backups: `Frequent backups with 90-day retention`, care3_security: `Extended monitoring &amp; hardening, priority alerts`, care3_perf: `Performance sprints &amp; load-time reviews`, care3_support: `Priority support &amp; emergency incident handling`, care3_consult: `Up to 4× 60 min strategic sessions per year`, plus_title: `Plus services`, plus1_title: `Digital &amp; brand consulting`, plus1_desc: `Ongoing strategic sessions on positioning, site evolution, content priorities and how your digital touchpoints work together.`, plus2_title: `Content &amp; copy support`, plus2_desc: `Help refining key headlines, microcopy and page flows so the site reads clearly and feels aligned with your brand voice.`, plus3_title: `Photography &amp; art direction`, plus3_desc: `Guidance on image selection, art direction and how to prepare assets for web so the visual language feels coherent and intentional.`, plus4_title: `Training &amp; handover sessions`, plus4_desc: `Short, focused workshops to train your team on editing content, using blocks and keeping the site in good shape over time.` } },
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
                el('section', { ...blockProps }, [' ', el('div', { className: 'grid grid-cols-1 min-w-0 gap-4 md:gap-8 pl-4 pr-4 md:grid-cols-12 md:pl-6 md:pr-6' }, [' ', ' ', el('aside', { className: 'col-span-12 min-w-0 self-start top-[9vh] md:col-span-3 md:sticky', 'aria-labelledby': 'sidebar-heading' }, [' ', el('div', {}, [' ', el('section', { className: 'mb-6', 'aria-labelledby': 'about-us-heading' }, [' ', el('div', { className: 'border-solid' }, [' ', el('div', { className: 'flex justify-between items-center md:block' }, [' ', el(RichText, { tagName: 'h3', id: 'about-us-heading', className: 'flex font-semibold gap-2 items-center text-xs uppercase', value: propOrDefault( props.attributes.about_heading, 'about_heading' ), onChange: function(val) { setAttributes( {about_heading: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ', el('div', { className: 'md:hidden flex justify-end min-w-0 flex-shrink-0' }, [' ', el('h3', { id: 'dynamic-date-mobile', className: 'flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap' }, [' ', el('span', { id: 'date-display-mobile', className: 'font-sans text-right flex items-center gap-1' }, [' ', el('span', { id: 'date-text-mobile', className: 'font-sans' }), ' ', el('span', {}, '•'), ' ', el('span', { id: 'time-text-mobile', className: 'font-mono tabular-nums' }), ' ']), ' ']), ' ']), ' ']), ' ', el('div', { className: 'bg-custom_pink-200 mt-6 p-2.5' }, [' ', el(RichText, { tagName: 'h1', className: 'font-bold mb-6 text-4xl', value: propOrDefault( props.attributes.sidebar_h1, 'sidebar_h1' ), onChange: function(val) { setAttributes( {sidebar_h1: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'h2', className: 'font-thin mb-6 text-sm', value: propOrDefault( props.attributes.sidebar_intro, 'sidebar_intro' ), onChange: function(val) { setAttributes( {sidebar_intro: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'mb-6 text-sm', value: propOrDefault( props.attributes.sidebar_p1, 'sidebar_p1' ), onChange: function(val) { setAttributes( {sidebar_p1: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'mb-6 text-sm', value: propOrDefault( props.attributes.sidebar_p2, 'sidebar_p2' ), onChange: function(val) { setAttributes( {sidebar_p2: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'mb-6 text-sm', value: propOrDefault( props.attributes.sidebar_p3, 'sidebar_p3' ), onChange: function(val) { setAttributes( {sidebar_p3: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'mb-6 text-sm', value: propOrDefault( props.attributes.sidebar_clients, 'sidebar_clients' ), onChange: function(val) { setAttributes( {sidebar_clients: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'mb-6 text-sm', value: propOrDefault( props.attributes.sidebar_parent, 'sidebar_parent' ), onChange: function(val) { setAttributes( {sidebar_parent: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'mb-6 text-sm', value: propOrDefault( props.attributes.sidebar_location, 'sidebar_location' ), onChange: function(val) { setAttributes( {sidebar_location: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'mb-0 text-sm', value: propOrDefault( props.attributes.sidebar_contact_line, 'sidebar_contact_line' ), onChange: function(val) { setAttributes( {sidebar_contact_line: val }) } }), ' ']), ' ']), ' ']), ' ']), ' ']), ' ', ' ', el('div', { id: 'main-content', className: 'col-span-12 min-w-0 md:col-span-9' }, [' ', ' ', el('div', { className: 'hidden md:flex justify-between items-start gap-2 min-w-0' }, [' ', el(RichText, { tagName: 'h2', className: 'flex font-semibold gap-2 items-center text-xs uppercase min-w-0', value: propOrDefault( props.attributes.top_label, 'top_label' ), onChange: function(val) { setAttributes( {top_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('div', { className: 'flex justify-end min-w-0 flex-shrink-0' }, [' ', el('h3', { id: 'dynamic-date', className: 'flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap' }, [' ', el('span', { id: 'date-display', className: 'font-sans text-right flex items-center gap-1' }, [' ', el('span', { id: 'date-text', className: 'font-sans' }), ' ', el('span', {}, '•'), ' ', el('span', { id: 'time-text', className: 'font-mono tabular-nums' }), ' ']), ' ']), ' ']), ' ']), ' ', ' ', el('div', { className: 'gap-4 grid items-center max-w-6xl mt-0 mx-auto md:gap-6 lg:gap-6 md:grid-cols-[minmax(0,2fr),minmax(0,1.4fr)] md:mt-8' }, [' ', el('div', {}, [' ', el(RichText, { tagName: 'h1', className: 'font-bold mb-3 text-4xl uppercase md:text-4xl', value: propOrDefault( props.attributes.hero_title, 'hero_title' ), onChange: function(val) { setAttributes( {hero_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'text-sm text-gray-800 mb-3 md:mb-0', value: propOrDefault( props.attributes.hero_text, 'hero_text' ), onChange: function(val) { setAttributes( {hero_text: val }) } }), ' ']), ' ', el('figure', { className: 'overflow-hidden rounded-xs' }, [' ', props.attributes.hero_image && props.attributes.hero_image.svg && pgGetFeature4("pgCreateSVG")(RawHTML, {}, pgGetFeature4("pgMergeInlineSVGAttributes")(propOrDefault( props.attributes.hero_image.svg, 'hero_image', 'svg' ), { className: 'h-70 object-cover w-full' })), props.attributes.hero_image && !props.attributes.hero_image.svg && propOrDefault( props.attributes.hero_image.url, 'hero_image', 'url' ) && el('img', { src: propOrDefault( props.attributes.hero_image.url, 'hero_image', 'url' ), alt: propOrDefault( props.attributes.hero_image?.alt, 'hero_image', 'alt' ), className: 'h-70 object-cover w-full ' + (props.attributes.hero_image.id ? ('wp-image-' + props.attributes.hero_image.id) : '') }), ' ']), ' ']), ' ', ' ', el('div', { className: 'gap-6 grid grid-cols-1 mt-8 pb-0 md:grid-cols-3' }, [' ', ' ', el('div', { className: 'flex flex-col h-full' }, [' ', el('h3', { className: 'flex font-semibold gap-2 items-center mb-4 text-xs uppercase' }, [' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.pkg1_title, 'pkg1_title' ), onChange: function(val) { setAttributes( {pkg1_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('span', { className: 'bg-black h-2 w-2 rounded-full relative -top-[1px]', 'aria-hidden': 'true' }), ' ']), ' ', el('div', { className: 'space-y-2 text-sm flex-grow' }, [' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Price: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_price, 'pkg1_price' ), onChange: function(val) { setAttributes( {pkg1_price: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Description: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_desc, 'pkg1_desc' ), onChange: function(val) { setAttributes( {pkg1_desc: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('hr', { className: 'border-t border-black/10 my-2' }), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Pages: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_pages, 'pkg1_pages' ), onChange: function(val) { setAttributes( {pkg1_pages: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Design: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_design, 'pkg1_design' ), onChange: function(val) { setAttributes( {pkg1_design: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Contact forms: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_forms, 'pkg1_forms' ), onChange: function(val) { setAttributes( {pkg1_forms: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Blog:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_blog, 'pkg1_blog' ), onChange: function(val) { setAttributes( {pkg1_blog: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Newsletter:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_newsletter, 'pkg1_newsletter' ), onChange: function(val) { setAttributes( {pkg1_newsletter: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'SEO: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_seo, 'pkg1_seo' ), onChange: function(val) { setAttributes( {pkg1_seo: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Performance: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_perf, 'pkg1_perf' ), onChange: function(val) { setAttributes( {pkg1_perf: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Analytics:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_analytics, 'pkg1_analytics' ), onChange: function(val) { setAttributes( {pkg1_analytics: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Accessibility: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_access, 'pkg1_access' ), onChange: function(val) { setAttributes( {pkg1_access: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('hr', { className: 'border-t border-black/10 my-2' }), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Hosting & Care: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg1_care, 'pkg1_care' ), onChange: function(val) { setAttributes( {pkg1_care: val }) } }), ' ']), ' ']), el('a', { href: 'mailto:info.blackboard@zdcstudio.com?subject=Info%20Website%20Plans%20-%20Starting', className: 'bg-black font-semibold mt-4 px-4 py-2.5 rounded-xs text-center text-sm text-white transition-colors uppercase hover:bg-gray-800 md:capitalize md:font-normal' }, 'Request info'), ' ']), ' ', ' ', el('div', { className: 'flex flex-col h-full' }, [' ', el('h3', { className: 'flex font-semibold gap-2 items-center mb-4 text-xs uppercase' }, [' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.pkg2_title, 'pkg2_title' ), onChange: function(val) { setAttributes( {pkg2_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('span', { className: 'bg-black h-2 w-2 rounded-full relative -top-[1px]', 'aria-hidden': 'true' }), ' ']), ' ', el('div', { className: 'space-y-2 text-sm flex-grow' }, [' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Price: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_price, 'pkg2_price' ), onChange: function(val) { setAttributes( {pkg2_price: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Description: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_desc, 'pkg2_desc' ), onChange: function(val) { setAttributes( {pkg2_desc: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('hr', { className: 'border-t border-black/10 my-2' }), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Pages:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_pages, 'pkg2_pages' ), onChange: function(val) { setAttributes( {pkg2_pages: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Design:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_design, 'pkg2_design' ), onChange: function(val) { setAttributes( {pkg2_design: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Contact forms:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_forms, 'pkg2_forms' ), onChange: function(val) { setAttributes( {pkg2_forms: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Blog:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_blog, 'pkg2_blog' ), onChange: function(val) { setAttributes( {pkg2_blog: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Newsletter:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_newsletter, 'pkg2_newsletter' ), onChange: function(val) { setAttributes( {pkg2_newsletter: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'SEO:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_seo, 'pkg2_seo' ), onChange: function(val) { setAttributes( {pkg2_seo: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Performance:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_perf, 'pkg2_perf' ), onChange: function(val) { setAttributes( {pkg2_perf: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Analytics:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_analytics, 'pkg2_analytics' ), onChange: function(val) { setAttributes( {pkg2_analytics: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Accessibility:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_access, 'pkg2_access' ), onChange: function(val) { setAttributes( {pkg2_access: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('hr', { className: 'border-t border-black/10 my-2' }), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Hosting & Care: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg2_care, 'pkg2_care' ), onChange: function(val) { setAttributes( {pkg2_care: val }) } }), ' ']), ' ']), el('a', { href: 'mailto:info.blackboard@zdcstudio.com?subject=Info%20Website%20Plans%20-%20Grow', className: 'bg-black font-semibold mt-4 px-4 py-2.5 rounded-xs text-center text-sm text-white transition-colors uppercase hover:bg-gray-800 md:capitalize md:font-normal' }, 'Request info'), ' ']), ' ', ' ', el('div', { className: 'flex flex-col h-full' }, [' ', el('h3', { className: 'flex font-semibold gap-2 items-center mb-4 text-xs uppercase' }, [' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.pkg3_title, 'pkg3_title' ), onChange: function(val) { setAttributes( {pkg3_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('span', { className: 'bg-black h-2 w-2 rounded-full relative -top-[1px]', 'aria-hidden': 'true' }), ' ']), ' ', el('div', { className: 'space-y-2 text-sm flex-grow' }, [' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Price: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_price, 'pkg3_price' ), onChange: function(val) { setAttributes( {pkg3_price: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Description: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_desc, 'pkg3_desc' ), onChange: function(val) { setAttributes( {pkg3_desc: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('hr', { className: 'border-t border-black/10 my-2' }), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Pages:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_pages, 'pkg3_pages' ), onChange: function(val) { setAttributes( {pkg3_pages: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Design:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_design, 'pkg3_design' ), onChange: function(val) { setAttributes( {pkg3_design: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Contact forms:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_forms, 'pkg3_forms' ), onChange: function(val) { setAttributes( {pkg3_forms: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Blog:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_blog, 'pkg3_blog' ), onChange: function(val) { setAttributes( {pkg3_blog: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Newsletter:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_newsletter, 'pkg3_newsletter' ), onChange: function(val) { setAttributes( {pkg3_newsletter: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'SEO:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_seo, 'pkg3_seo' ), onChange: function(val) { setAttributes( {pkg3_seo: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Performance:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_perf, 'pkg3_perf' ), onChange: function(val) { setAttributes( {pkg3_perf: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Analytics:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_analytics, 'pkg3_analytics' ), onChange: function(val) { setAttributes( {pkg3_analytics: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Accessibility:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_access, 'pkg3_access' ), onChange: function(val) { setAttributes( {pkg3_access: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('hr', { className: 'border-t border-black/10 my-2' }), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Hosting & Care: '), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pkg3_care, 'pkg3_care' ), onChange: function(val) { setAttributes( {pkg3_care: val }) } }), ' ']), ' ']), el('a', { href: 'mailto:info.blackboard@zdcstudio.com?subject=Info%20Website%20Plans%20-%20Pro', className: 'bg-black font-semibold mt-4 px-4 py-2.5 rounded-xs text-center text-sm text-white transition-colors uppercase hover:bg-gray-800 md:capitalize md:font-normal' }, 'Request Info'), ' ']), ' ']), ' ', ' ', el('section', { className: 'mt-12' }, [' ', el('div', { className: 'mb-4' }, [' ', el(RichText, { tagName: 'h2', className: 'flex font-semibold gap-2 items-center text-xs uppercase min-w-0', value: propOrDefault( props.attributes.workflow_title, 'workflow_title' ), onChange: function(val) { setAttributes( {workflow_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'mt-2 text-sm text-gray-800', value: propOrDefault( props.attributes.workflow_intro, 'workflow_intro' ), onChange: function(val) { setAttributes( {workflow_intro: val }) } }), ' ']), ' ', el('div', { className: 'space-y-6 text-sm text-gray-800' }, [' ', ' ', el('div', { className: 'bg-white/60 border border-gray-200 p-4 rounded-xs md:p-5' }, [' ', el('div', { className: 'flex items-baseline justify-between gap-2' }, [' ', el('h3', { className: 'text-xs uppercase font-semibold flex items-center gap-2' }, [' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.wf1_title, 'wf1_title' ), onChange: function(val) { setAttributes( {wf1_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('span', { className: 'bg-black h-2 w-2 rounded-full relative -top-[1px]', 'aria-hidden': 'true' }), ' ']), ' ', el(RichText, { tagName: 'span', className: 'text-[11px] text-gray-600 uppercase', value: propOrDefault( props.attributes.wf1_tagline, 'wf1_tagline' ), onChange: function(val) { setAttributes( {wf1_tagline: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el(RichText, { tagName: 'p', className: 'mt-3 text-gray-800', value: propOrDefault( props.attributes.wf1_body, 'wf1_body' ), onChange: function(val) { setAttributes( {wf1_body: val }) } }), ' ', el('div', { className: 'mt-3' }, [' ', el(RichText, { tagName: 'h4', className: 'text-[11px] uppercase font-semibold text-gray-700 mb-1', value: propOrDefault( props.attributes.wf1_focus_title, 'wf1_focus_title' ), onChange: function(val) { setAttributes( {wf1_focus_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'div', value: propOrDefault( props.attributes.wf1_focus_list, 'wf1_focus_list' ), onChange: function(val) { setAttributes( {wf1_focus_list: val }) } }), ' ']), ' ']), ' ', ' ', el('div', { className: 'bg-white/60 border border-gray-200 p-4 rounded-xs md:p-5' }, [' ', el('div', { className: 'flex items-baseline justify-between gap-2' }, [' ', el('h3', { className: 'text-xs uppercase font-semibold flex items-center gap-2' }, [' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.wf2_title, 'wf2_title' ), onChange: function(val) { setAttributes( {wf2_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('span', { className: 'bg-black h-2 w-2 rounded-full relative -top-[1px]', 'aria-hidden': 'true' }), ' ']), ' ', el(RichText, { tagName: 'span', className: 'text-[11px] uppercase tracking-[0.16em] text-gray-600', value: propOrDefault( props.attributes.wf2_tagline, 'wf2_tagline' ), onChange: function(val) { setAttributes( {wf2_tagline: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el(RichText, { tagName: 'p', className: 'mt-3 text-gray-800', value: propOrDefault( props.attributes.wf2_body, 'wf2_body' ), onChange: function(val) { setAttributes( {wf2_body: val }) } }), ' ', el('div', { className: 'mt-3' }, [' ', el(RichText, { tagName: 'h4', className: 'text-[11px] uppercase font-semibold text-gray-700 mb-1', value: propOrDefault( props.attributes.wf2_focus_title, 'wf2_focus_title' ), onChange: function(val) { setAttributes( {wf2_focus_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'div', value: propOrDefault( props.attributes.wf2_focus_list, 'wf2_focus_list' ), onChange: function(val) { setAttributes( {wf2_focus_list: val }) } }), ' ']), ' ']), ' ', ' ', el('div', { className: 'bg-white/60 border border-gray-200 p-4 rounded-xs md:p-5' }, [' ', el('div', { className: 'flex items-baseline justify-between gap-2' }, [' ', el('h3', { className: 'text-xs uppercase font-semibold flex items-center gap-2' }, [' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.wf3_title, 'wf3_title' ), onChange: function(val) { setAttributes( {wf3_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('span', { className: 'bg-black h-2 w-2 rounded-full relative -top-[1px]', 'aria-hidden': 'true' }), ' ']), ' ', el(RichText, { tagName: 'span', className: 'text-[11px] uppercase tracking-[0.16em] text-gray-600', value: propOrDefault( props.attributes.wf3_tagline, 'wf3_tagline' ), onChange: function(val) { setAttributes( {wf3_tagline: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el(RichText, { tagName: 'p', className: 'mt-3 text-gray-800', value: propOrDefault( props.attributes.wf3_body, 'wf3_body' ), onChange: function(val) { setAttributes( {wf3_body: val }) } }), ' ', el('div', { className: 'mt-3' }, [' ', el(RichText, { tagName: 'h4', className: 'text-[11px] uppercase font-semibold text-gray-700 mb-1', value: propOrDefault( props.attributes.wf3_focus_title, 'wf3_focus_title' ), onChange: function(val) { setAttributes( {wf3_focus_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'div', value: propOrDefault( props.attributes.wf3_focus_list, 'wf3_focus_list' ), onChange: function(val) { setAttributes( {wf3_focus_list: val }) } }), ' ']), ' ']), ' ', ' ', el('div', { className: 'bg-white/60 border border-gray-200 p-4 rounded-xs md:p-5' }, [' ', el('div', { className: 'flex items-baseline justify-between gap-2' }, [' ', el('h3', { className: 'text-xs uppercase font-semibold flex items-center gap-2' }, [' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.wf4_title, 'wf4_title' ), onChange: function(val) { setAttributes( {wf4_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('span', { className: 'bg-black h-2 w-2 rounded-full relative -top-[1px]', 'aria-hidden': 'true' }), ' ']), ' ', el(RichText, { tagName: 'span', className: 'text-[11px] uppercase tracking-[0.16em] text-gray-600', value: propOrDefault( props.attributes.wf4_tagline, 'wf4_tagline' ), onChange: function(val) { setAttributes( {wf4_tagline: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el(RichText, { tagName: 'p', className: 'mt-3 text-gray-800', value: propOrDefault( props.attributes.wf4_body, 'wf4_body' ), onChange: function(val) { setAttributes( {wf4_body: val }) } }), ' ', el('div', { className: 'mt-3' }, [' ', el(RichText, { tagName: 'h4', className: 'text-[11px] uppercase font-semibold text-gray-700 mb-1', value: propOrDefault( props.attributes.wf4_focus_title, 'wf4_focus_title' ), onChange: function(val) { setAttributes( {wf4_focus_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'div', value: propOrDefault( props.attributes.wf4_focus_list, 'wf4_focus_list' ), onChange: function(val) { setAttributes( {wf4_focus_list: val }) } }), ' ']), ' ']), ' ']), ' ']), ' ', ' ', el('div', { className: 'mt-10 md:mt-10' }, [' ', el(RichText, { tagName: 'h5', className: 'font-bold mb-3 text-4xl uppercase md:text-4xl', value: propOrDefault( props.attributes.hosting_title, 'hosting_title' ), onChange: function(val) { setAttributes( {hosting_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'mt-2 text-sm text-gray-800', value: propOrDefault( props.attributes.hosting_intro, 'hosting_intro' ), onChange: function(val) { setAttributes( {hosting_intro: val }) } }), ' ']), ' ', ' ', el('div', { className: 'gap-6 grid grid-cols-1 mt-8 pb-0 md:grid-cols-3' }, [' ', ' ', el('div', { className: 'flex flex-col' }, [' ', el('h3', { className: 'flex font-semibold gap-2 items-center mb-4 text-xs uppercase' }, [' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.care1_title, 'care1_title' ), onChange: function(val) { setAttributes( {care1_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('span', { className: 'bg-black h-2 w-2 rounded-full relative -top-[1px]' }), ' ']), ' ', el('div', { className: 'space-y-2 text-sm' }, [' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Price:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care1_price, 'care1_price' ), onChange: function(val) { setAttributes( {care1_price: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Best for:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care1_best, 'care1_best' ), onChange: function(val) { setAttributes( {care1_best: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('hr', { className: 'border-t border-black/10 my-2' }), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Hosting:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care1_hosting, 'care1_hosting' ), onChange: function(val) { setAttributes( {care1_hosting: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Updates:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care1_updates, 'care1_updates' ), onChange: function(val) { setAttributes( {care1_updates: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Backups:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care1_backups, 'care1_backups' ), onChange: function(val) { setAttributes( {care1_backups: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Security:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care1_security, 'care1_security' ), onChange: function(val) { setAttributes( {care1_security: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Performance:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care1_perf, 'care1_perf' ), onChange: function(val) { setAttributes( {care1_perf: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Support:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care1_support, 'care1_support' ), onChange: function(val) { setAttributes( {care1_support: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Consultation:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care1_consult, 'care1_consult' ), onChange: function(val) { setAttributes( {care1_consult: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']), ' ', ' ', el('div', { className: 'flex flex-col' }, [' ', el('h3', { className: 'flex font-semibold gap-2 items-center mb-4 text-xs uppercase' }, [' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.care2_title, 'care2_title' ), onChange: function(val) { setAttributes( {care2_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('span', { className: 'bg-black h-2 w-2 rounded-full relative -top-[1px]' }), ' ']), ' ', el('div', { className: 'space-y-2 text-sm' }, [' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Price:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care2_price, 'care2_price' ), onChange: function(val) { setAttributes( {care2_price: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Best for:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care2_best, 'care2_best' ), onChange: function(val) { setAttributes( {care2_best: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('hr', { className: 'border-t border-black/10 my-2' }), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Hosting:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care2_hosting, 'care2_hosting' ), onChange: function(val) { setAttributes( {care2_hosting: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Updates:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care2_updates, 'care2_updates' ), onChange: function(val) { setAttributes( {care2_updates: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Backups:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care2_backups, 'care2_backups' ), onChange: function(val) { setAttributes( {care2_backups: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Security:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care2_security, 'care2_security' ), onChange: function(val) { setAttributes( {care2_security: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Performance:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care2_perf, 'care2_perf' ), onChange: function(val) { setAttributes( {care2_perf: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Support:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care2_support, 'care2_support' ), onChange: function(val) { setAttributes( {care2_support: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Consultation:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care2_consult, 'care2_consult' ), onChange: function(val) { setAttributes( {care2_consult: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']), ' ', ' ', el('div', { className: 'flex flex-col' }, [' ', el('h3', { className: 'flex font-semibold gap-2 items-center mb-4 text-xs uppercase' }, [' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.care3_title, 'care3_title' ), onChange: function(val) { setAttributes( {care3_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('span', { className: 'bg-black h-2 w-2 rounded-full relative -top-[1px]' }), ' ']), ' ', el('div', { className: 'space-y-2 text-sm' }, [' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Price:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care3_price, 'care3_price' ), onChange: function(val) { setAttributes( {care3_price: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Best for:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care3_best, 'care3_best' ), onChange: function(val) { setAttributes( {care3_best: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('hr', { className: 'border-t border-black/10 my-2' }), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Hosting:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care3_hosting, 'care3_hosting' ), onChange: function(val) { setAttributes( {care3_hosting: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Updates:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care3_updates, 'care3_updates' ), onChange: function(val) { setAttributes( {care3_updates: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Backups:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care3_backups, 'care3_backups' ), onChange: function(val) { setAttributes( {care3_backups: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Security:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care3_security, 'care3_security' ), onChange: function(val) { setAttributes( {care3_security: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Performance:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care3_perf, 'care3_perf' ), onChange: function(val) { setAttributes( {care3_perf: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Support:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care3_support, 'care3_support' ), onChange: function(val) { setAttributes( {care3_support: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', {}, [' ', el('span', { className: 'font-normal' }, 'Consultation:'), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.care3_consult, 'care3_consult' ), onChange: function(val) { setAttributes( {care3_consult: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']), ' ']), ' ', ' ', el('aside', { className: 'bg-white/60 border border-gray-200 flex flex-col gap-4 mt-12 p-5 rounded-xs md:p-6' }, [' ', el(RichText, { tagName: 'h5', className: 'font-semibold text-4xl uppercase', value: propOrDefault( props.attributes.plus_title, 'plus_title' ), onChange: function(val) { setAttributes( {plus_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('ul', { className: 'space-y-4 text-sm text-gray-800' }, [' ', el('li', {}, [' ', el(RichText, { tagName: 'strong', className: 'block text-gray-900', value: propOrDefault( props.attributes.plus1_title, 'plus1_title' ), onChange: function(val) { setAttributes( {plus1_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.plus1_desc, 'plus1_desc' ), onChange: function(val) { setAttributes( {plus1_desc: val }) } }), ' ']), ' ', el('li', {}, [' ', el(RichText, { tagName: 'strong', className: 'block text-gray-900', value: propOrDefault( props.attributes.plus2_title, 'plus2_title' ), onChange: function(val) { setAttributes( {plus2_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.plus2_desc, 'plus2_desc' ), onChange: function(val) { setAttributes( {plus2_desc: val }) } }), ' ']), ' ', el('li', {}, [' ', el(RichText, { tagName: 'strong', className: 'block text-gray-900', value: propOrDefault( props.attributes.plus3_title, 'plus3_title' ), onChange: function(val) { setAttributes( {plus3_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.plus3_desc, 'plus3_desc' ), onChange: function(val) { setAttributes( {plus3_desc: val }) } }), ' ']), ' ', el('li', {}, [' ', el(RichText, { tagName: 'strong', className: 'block text-gray-900', value: propOrDefault( props.attributes.plus4_title, 'plus4_title' ), onChange: function(val) { setAttributes( {plus4_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.plus4_desc, 'plus4_desc' ), onChange: function(val) { setAttributes( {plus4_desc: val }) } }), ' ']), ' ']), ' ']), ' ']), ' ', ' ']), ' ', ' ']),                        
                
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
                                        value: props.attributes.sidebar_h1,
                                        help: __( '' ),
                                        label: __( 'Sidebar H1' ),
                                        onChange: function(val) { setAttributes({sidebar_h1: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Sidebar Intro' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.sidebar_intro,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({sidebar_intro: val}) },
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
                                        label: __( 'Sidebar Clients' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.sidebar_clients,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({sidebar_clients: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Sidebar Parent Line' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.sidebar_parent,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({sidebar_parent: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Sidebar Location' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.sidebar_location,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({sidebar_location: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Sidebar Contact Line' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.sidebar_contact_line,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({sidebar_contact_line: val}) },
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
                                        value: props.attributes.hero_title,
                                        help: __( '' ),
                                        label: __( 'Hero Title' ),
                                        onChange: function(val) { setAttributes({hero_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Hero Text' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.hero_text,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({hero_text: val}) },
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
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Pkg1 Hosting & Care' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.pkg1_care,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({pkg1_care: val}) },
                                        })
                                    ]),
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
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Pkg2 Hosting & Care' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.pkg2_care,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({pkg2_care: val}) },
                                        })
                                    ]),
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
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Pkg3 Hosting & Care' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.pkg3_care,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({pkg3_care: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.workflow_title,
                                        help: __( '' ),
                                        label: __( 'Workflow Title' ),
                                        onChange: function(val) { setAttributes({workflow_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Workflow Intro' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.workflow_intro,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({workflow_intro: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.wf1_title,
                                        help: __( '' ),
                                        label: __( 'WF1 Title' ),
                                        onChange: function(val) { setAttributes({wf1_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.wf1_tagline,
                                        help: __( '' ),
                                        label: __( 'WF1 Tagline' ),
                                        onChange: function(val) { setAttributes({wf1_tagline: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'WF1 Body' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.wf1_body,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({wf1_body: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.wf1_focus_title,
                                        help: __( '' ),
                                        label: __( 'WF1 Focus Title' ),
                                        onChange: function(val) { setAttributes({wf1_focus_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'WF1 Focus List (HTML)' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.wf1_focus_list,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({wf1_focus_list: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.wf2_title,
                                        help: __( '' ),
                                        label: __( 'WF2 Title' ),
                                        onChange: function(val) { setAttributes({wf2_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.wf2_tagline,
                                        help: __( '' ),
                                        label: __( 'WF2 Tagline' ),
                                        onChange: function(val) { setAttributes({wf2_tagline: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'WF2 Body' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.wf2_body,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({wf2_body: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.wf2_focus_title,
                                        help: __( '' ),
                                        label: __( 'WF2 Focus Title' ),
                                        onChange: function(val) { setAttributes({wf2_focus_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'WF2 Focus List (HTML)' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.wf2_focus_list,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({wf2_focus_list: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.wf3_title,
                                        help: __( '' ),
                                        label: __( 'WF3 Title' ),
                                        onChange: function(val) { setAttributes({wf3_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.wf3_tagline,
                                        help: __( '' ),
                                        label: __( 'WF3 Tagline' ),
                                        onChange: function(val) { setAttributes({wf3_tagline: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'WF3 Body' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.wf3_body,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({wf3_body: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.wf3_focus_title,
                                        help: __( '' ),
                                        label: __( 'WF3 Focus Title' ),
                                        onChange: function(val) { setAttributes({wf3_focus_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'WF3 Focus List (HTML)' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.wf3_focus_list,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({wf3_focus_list: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.wf4_title,
                                        help: __( '' ),
                                        label: __( 'WF4 Title' ),
                                        onChange: function(val) { setAttributes({wf4_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.wf4_tagline,
                                        help: __( '' ),
                                        label: __( 'WF4 Tagline' ),
                                        onChange: function(val) { setAttributes({wf4_tagline: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'WF4 Body' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.wf4_body,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({wf4_body: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.wf4_focus_title,
                                        help: __( '' ),
                                        label: __( 'WF4 Focus Title' ),
                                        onChange: function(val) { setAttributes({wf4_focus_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'WF4 Focus List (HTML)' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.wf4_focus_list,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({wf4_focus_list: val}) },
                                        })
                                    ]),
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
                                        value: props.attributes.care1_title,
                                        help: __( '' ),
                                        label: __( 'Care 1 Title' ),
                                        onChange: function(val) { setAttributes({care1_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care1_price,
                                        help: __( '' ),
                                        label: __( 'Care1 Price' ),
                                        onChange: function(val) { setAttributes({care1_price: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care1_best,
                                        help: __( '' ),
                                        label: __( 'Care1 Best For' ),
                                        onChange: function(val) { setAttributes({care1_best: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care1_hosting,
                                        help: __( '' ),
                                        label: __( 'Care1 Hosting' ),
                                        onChange: function(val) { setAttributes({care1_hosting: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care1_updates,
                                        help: __( '' ),
                                        label: __( 'Care1 Updates' ),
                                        onChange: function(val) { setAttributes({care1_updates: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care1_backups,
                                        help: __( '' ),
                                        label: __( 'Care1 Backups' ),
                                        onChange: function(val) { setAttributes({care1_backups: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care1_security,
                                        help: __( '' ),
                                        label: __( 'Care1 Security' ),
                                        onChange: function(val) { setAttributes({care1_security: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care1_perf,
                                        help: __( '' ),
                                        label: __( 'Care1 Performance' ),
                                        onChange: function(val) { setAttributes({care1_perf: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care1_support,
                                        help: __( '' ),
                                        label: __( 'Care1 Support' ),
                                        onChange: function(val) { setAttributes({care1_support: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care1_consult,
                                        help: __( '' ),
                                        label: __( 'Care1 Consultation' ),
                                        onChange: function(val) { setAttributes({care1_consult: val}) },
                                        type: 'text'
                                    }),
                                    el(ToggleControl, {
                                        checked: props.attributes.care2_featured === '',
                                        label: __( 'Care 2 Featured' ),
                                        onChange: function(val) { setAttributes({care2_featured: val ? '' : ''}) },
                                        help: __( '' ),
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
                                        label: __( 'Care2 Price' ),
                                        onChange: function(val) { setAttributes({care2_price: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care2_best,
                                        help: __( '' ),
                                        label: __( 'Care2 Best For' ),
                                        onChange: function(val) { setAttributes({care2_best: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care2_hosting,
                                        help: __( '' ),
                                        label: __( 'Care2 Hosting' ),
                                        onChange: function(val) { setAttributes({care2_hosting: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care2_updates,
                                        help: __( '' ),
                                        label: __( 'Care2 Updates' ),
                                        onChange: function(val) { setAttributes({care2_updates: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care2_backups,
                                        help: __( '' ),
                                        label: __( 'Care2 Backups' ),
                                        onChange: function(val) { setAttributes({care2_backups: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care2_security,
                                        help: __( '' ),
                                        label: __( 'Care2 Security' ),
                                        onChange: function(val) { setAttributes({care2_security: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care2_perf,
                                        help: __( '' ),
                                        label: __( 'Care2 Performance' ),
                                        onChange: function(val) { setAttributes({care2_perf: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care2_support,
                                        help: __( '' ),
                                        label: __( 'Care2 Support' ),
                                        onChange: function(val) { setAttributes({care2_support: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care2_consult,
                                        help: __( '' ),
                                        label: __( 'Care2 Consultation' ),
                                        onChange: function(val) { setAttributes({care2_consult: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care3_title,
                                        help: __( '' ),
                                        label: __( 'Care 3 Title' ),
                                        onChange: function(val) { setAttributes({care3_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care3_price,
                                        help: __( '' ),
                                        label: __( 'Care3 Price' ),
                                        onChange: function(val) { setAttributes({care3_price: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care3_best,
                                        help: __( '' ),
                                        label: __( 'Care3 Best For' ),
                                        onChange: function(val) { setAttributes({care3_best: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care3_hosting,
                                        help: __( '' ),
                                        label: __( 'Care3 Hosting' ),
                                        onChange: function(val) { setAttributes({care3_hosting: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care3_updates,
                                        help: __( '' ),
                                        label: __( 'Care3 Updates' ),
                                        onChange: function(val) { setAttributes({care3_updates: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care3_backups,
                                        help: __( '' ),
                                        label: __( 'Care3 Backups' ),
                                        onChange: function(val) { setAttributes({care3_backups: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care3_security,
                                        help: __( '' ),
                                        label: __( 'Care3 Security' ),
                                        onChange: function(val) { setAttributes({care3_security: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care3_perf,
                                        help: __( '' ),
                                        label: __( 'Care3 Performance' ),
                                        onChange: function(val) { setAttributes({care3_perf: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care3_support,
                                        help: __( '' ),
                                        label: __( 'Care3 Support' ),
                                        onChange: function(val) { setAttributes({care3_support: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.care3_consult,
                                        help: __( '' ),
                                        label: __( 'Care3 Consultation' ),
                                        onChange: function(val) { setAttributes({care3_consult: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.plus_title,
                                        help: __( '' ),
                                        label: __( 'Plus Services Title' ),
                                        onChange: function(val) { setAttributes({plus_title: val}) },
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
