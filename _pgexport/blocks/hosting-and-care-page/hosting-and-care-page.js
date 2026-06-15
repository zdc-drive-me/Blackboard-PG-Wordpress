
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
    
    const block = registerBlockType( 'blackboard-by-zdc/hosting-and-care-page', {
        apiVersion: 2,
        title: 'Hosting and Care Page Block',
        description: 'Full editorial page layout for the hosting and care / website cost page',
        icon: 'block-default',
        category: 'blackboard_blocks',
        keywords: [],
        supports: {},
        attributes: {
            page_label_label: {
                type: ['string', 'null'],
                default: `How much does a website cost <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            hero_title: {
                type: ['string', 'null'],
                default: `How much does&nbsp;<br>a website cost?`,
            },
            hero_intro_text: {
                type: ['string', 'null'],
                default: `The price of a website is not defined by the number of pages alone. It depends on what the site needs to do, how it is structured, and how much it has to support over time.`,
            },
            hero_description_left: {
                type: ['string', 'null'],
                default: `There is no single answer because &quot;a website&quot; can mean very different things. A simple online presence, a structured company website, an editorial system, an e-commerce platform and a custom digital product do not require the same level of work.`,
            },
            hero_description_right: {
                type: ['string', 'null'],
                default: `The real question is not only how much a website costs. It is what kind of structure, design and development the project needs in order to work properly.`,
            },
            pricing_overview_section_title: {
                type: ['string', 'null'],
                default: `A useful starting point <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            pricing_overview_intro_text: {
                type: ['string', 'null'],
                default: `Projects vary in scope. Each follows the same approach , structure first, then design and execution &#8212; adapted to scale and complexity.`,
            },
            pricing_overview_tier_1_label: {
                type: ['string', 'null'],
                default: `Foundation`,
            },
            pricing_overview_tier_1_prefix: {
                type: ['string', 'null'],
                default: `From`,
            },
            pricing_overview_tier_1_price: {
                type: ['string', 'null'],
                default: `&euro; 3,500`,
            },
            pricing_overview_tier_1_description: {
                type: ['string', 'null'],
                default: `A focused build with essential structure, custom design and core functionality.`,
            },
            pricing_overview_tier_2_label: {
                type: ['string', 'null'],
                default: `Structured`,
            },
            pricing_overview_tier_2_prefix: {
                type: ['string', 'null'],
                default: `From`,
            },
            pricing_overview_tier_2_price: {
                type: ['string', 'null'],
                default: `&euro; 4,500`,
            },
            pricing_overview_tier_2_description: {
                type: ['string', 'null'],
                default: `A content-driven system with expanded pages, flexible layouts and integrated features.`,
            },
            pricing_overview_tier_3_label: {
                type: ['string', 'null'],
                default: `Extended`,
            },
            pricing_overview_tier_3_prefix: {
                type: ['string', 'null'],
                default: `From`,
            },
            pricing_overview_tier_3_price: {
                type: ['string', 'null'],
                default: `&euro; 7000`,
            },
            pricing_overview_tier_3_description: {
                type: ['string', 'null'],
                default: `A more complex system with custom builds, integrations and advanced performance.`,
            },
            pricing_overview_footnote: {
                type: ['string', 'null'],
                default: `These are starting points, not fixed packages. The right scale is defined after understanding the project.`,
            },
            price_factors_section_title: {
                type: ['string', 'null'],
                default: `Why prices vary so much <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            price_factors_intro_text: {
                type: ['string', 'null'],
                default: `The cost of a website changes because the work behind it changes. Two websites may look similar from the outside, but they can be completely different in structure, flexibility, speed, content logic and long-term maintainability.`,
            },
            price_factors_factor_1_title: {
                type: ['string', 'null'],
                default: `Structure`,
            },
            price_factors_factor_1_description: {
                type: ['string', 'null'],
                default: `Information architecture, navigation, content hierarchy and key decisions before design begins.`,
            },
            price_factors_factor_2_title: {
                type: ['string', 'null'],
                default: `Design`,
            },
            price_factors_factor_2_description: {
                type: ['string', 'null'],
                default: `Custom layout, visual system, responsive behaviour, interaction details and consistency across pages.`,
            },
            price_factors_factor_3_title: {
                type: ['string', 'null'],
                default: `Development`,
            },
            price_factors_factor_3_description: {
                type: ['string', 'null'],
                default: `Front-end quality, CMS implementation, performance, accessibility, technical precision and future editing logic.`,
            },
            price_factors_factor_4_title: {
                type: ['string', 'null'],
                default: `Content`,
            },
            price_factors_factor_4_description: {
                type: ['string', 'null'],
                default: `Number of pages, content preparation, editorial structure, blog or journal systems, multilingual content and media management.`,
            },
            price_factors_factor_5_title: {
                type: ['string', 'null'],
                default: `Integrations`,
            },
            price_factors_factor_5_description: {
                type: ['string', 'null'],
                default: `Forms, newsletter, analytics, CRM, e-commerce, booking systems, third-party tools or custom workflows.`,
            },
            price_factors_factor_6_title: {
                type: ['string', 'null'],
                default: `Performance and SEO foundations`,
            },
            price_factors_factor_6_description: {
                type: ['string', 'null'],
                default: `Speed, technical structure, metadata, indexability, clean markup and search visibility foundations.`,
            },
            price_factors_factor_7_title: {
                type: ['string', 'null'],
                default: `Care and maintenance`,
            },
            price_factors_factor_7_description: {
                type: ['string', 'null'],
                default: `Hosting, updates, backup, monitoring, adjustments and ongoing support after launch.`,
            },
            comparison_section_title: {
                type: ['string', 'null'],
                default: `What is and isn&apos;t included`,
            },
            comparison_low_cost_title: {
                type: ['string', 'null'],
                default: `What is usually missing in a low-cost website <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            comparison_low_cost_intro: {
                type: ['string', 'null'],
                default: `A very low price is not always wrong, but it usually means the scope is limited. The site may exist online, but some decisions are often skipped.`,
            },
            comparison_low_cost_items: {
                type: ['string', 'null'],
                default: `<li class="border-t border-black/10 pt-2">Little or no structure before building</li> <li class="border-t border-black/10 pt-2">Template-based design</li> <li class="border-t border-black/10 pt-2">Generic layouts</li> <li class="border-t border-black/10 pt-2">Limited flexibility</li> <li class="border-t border-black/10 pt-2">Weak content hierarchy</li> <li class="border-t border-black/10 pt-2">Basic SEO setup only</li> <li class="border-t border-black/10 pt-2">Limited performance work</li> <li class="border-t border-black/10 pt-2">No long-term maintenance logic</li> <li class="border-t border-black/10 pt-2">No documentation or handover</li> <li class="border-t border-black/10 pt-2">Difficult future evolution</li>`,
            },
            comparison_low_cost_note: {
                type: ['string', 'null'],
                default: `The problem is not the low price itself. The problem is not knowing what has been excluded.`,
            },
            comparison_pro_title: {
                type: ['string', 'null'],
                default: `What a professional website should include <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            comparison_pro_intro: {
                type: ['string', 'null'],
                default: `A professional website should not only look finished. It should be understandable, manageable and able to evolve.`,
            },
            comparison_pro_phase1_title: {
                type: ['string', 'null'],
                default: `Before design`,
            },
            comparison_pro_phase1_items: {
                type: ['string', 'null'],
                default: `<li class="border-t border-black/10 pt-2">Scope clarification</li> <li class="border-t border-black/10 pt-2">Content and navigation logic</li> <li class="border-t border-black/10 pt-2">Key user paths</li> <li class="border-t border-black/10 pt-2">Functional requirements</li> <li class="border-t border-black/10 pt-2">Technical direction</li>`,
            },
            comparison_pro_phase2_title: {
                type: ['string', 'null'],
                default: `During design and development`,
            },
            comparison_pro_phase2_items: {
                type: ['string', 'null'],
                default: `<li class="border-t border-black/10 pt-2">Custom design system</li> <li class="border-t border-black/10 pt-2">Responsive layouts</li> <li class="border-t border-black/10 pt-2">CMS structure</li> <li class="border-t border-black/10 pt-2">Performance-conscious development</li> <li class="border-t border-black/10 pt-2">Accessibility-aware implementation</li> <li class="border-t border-black/10 pt-2">Search-ready foundations</li>`,
            },
            comparison_pro_phase3_title: {
                type: ['string', 'null'],
                default: `After launch`,
            },
            comparison_pro_phase3_items: {
                type: ['string', 'null'],
                default: `<li class="border-t border-black/10 pt-2">Testing</li> <li class="border-t border-black/10 pt-2">Handover</li> <li class="border-t border-black/10 pt-2">Documentation</li> <li class="border-t border-black/10 pt-2">Maintenance options</li> <li class="border-t border-black/10 pt-2">Future adjustments when needed</li>`,
            },
            separate_costs_section_title: {
                type: ['string', 'null'],
                default: `What should be clarified separately <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            separate_costs_intro_text: {
                type: ['string', 'null'],
                default: `Some costs are not always part of the initial website build and should be made explicit before starting.`,
            },
            separate_costs_cost_1_title: {
                type: ['string', 'null'],
                default: `Domain`,
            },
            separate_costs_cost_1_description: {
                type: ['string', 'null'],
                default: `Usually a small annual cost, but ownership and renewal should be clear from the start.`,
            },
            separate_costs_cost_2_title: {
                type: ['string', 'null'],
                default: `Hosting`,
            },
            separate_costs_cost_2_description: {
                type: ['string', 'null'],
                default: `Depends on performance, traffic, security and management needs. Can be self-managed or included in a care plan.`,
            },
            separate_costs_cost_3_title: {
                type: ['string', 'null'],
                default: `Maintenance`,
            },
            separate_costs_cost_3_description: {
                type: ['string', 'null'],
                default: `Updates, monitoring, backups and technical care after launch. Offered as a separate care arrangement.`,
            },
            separate_costs_cost_4_title: {
                type: ['string', 'null'],
                default: `Content production`,
            },
            separate_costs_cost_4_description: {
                type: ['string', 'null'],
                default: `Copywriting, photography, image editing, translations or editorial planning are separate from the build.`,
            },
            separate_costs_cost_5_title: {
                type: ['string', 'null'],
                default: `SEO strategy`,
            },
            separate_costs_cost_5_description: {
                type: ['string', 'null'],
                default: `Search-ready foundations can be included, but ongoing SEO work is a separate and ongoing activity.`,
            },
            separate_costs_cost_6_title: {
                type: ['string', 'null'],
                default: `Marketing`,
            },
            separate_costs_cost_6_description: {
                type: ['string', 'null'],
                default: `Campaigns, ads, email flows and content distribution are distinct from building the website itself.`,
            },
            budget_and_quotes_budget_title: {
                type: ['string', 'null'],
                default: `When a higher budget makes sense <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            budget_and_quotes_budget_intro: {
                type: ['string', 'null'],
                default: `A higher budget is justified when the website is expected to support more than a basic presence.`,
            },
            budget_and_quotes_budget_items: {
                type: ['string', 'null'],
                default: `<li class="border-t border-black/10 pt-2">The site needs to generate qualified enquiries</li> <li class="border-t border-black/10 pt-2">Content will grow over time</li> <li class="border-t border-black/10 pt-2">The brand needs stronger digital credibility</li> <li class="border-t border-black/10 pt-2">There are multiple audiences or services</li> <li class="border-t border-black/10 pt-2">The site must be multilingual</li> <li class="border-t border-black/10 pt-2">There are integrations with external tools</li> <li class="border-t border-black/10 pt-2">Performance and search visibility matter</li> <li class="border-t border-black/10 pt-2">The system must be easy to maintain and evolve</li>`,
            },
            budget_and_quotes_budget_note: {
                type: ['string', 'null'],
                default: `In these cases, the website is not just a page online. It becomes part of how the organisation works, communicates and is understood.`,
            },
            budget_and_quotes_quotes_title: {
                type: ['string', 'null'],
                default: `How to read a website quote <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`,
            },
            budget_and_quotes_quotes_intro: {
                type: ['string', 'null'],
                default: `A useful quote should make the work visible. It should not only state a final number.`,
            },
            budget_and_quotes_quotes_items: {
                type: ['string', 'null'],
                default: `<li class="border-t border-black/10 pt-2">What is included?</li> <li class="border-t border-black/10 pt-2">What is excluded?</li> <li class="border-t border-black/10 pt-2">How many pages or templates are included?</li> <li class="border-t border-black/10 pt-2">Is the design custom or template-based?</li> <li class="border-t border-black/10 pt-2">Is the CMS structure defined?</li> <li class="border-t border-black/10 pt-2">Are performance and SEO foundations included?</li> <li class="border-t border-black/10 pt-2">Who owns the domain, hosting and accounts?</li> <li class="border-t border-black/10 pt-2">Is handover included?</li> <li class="border-t border-black/10 pt-2">What happens after launch?</li>`,
            },
            cta_title: {
                type: ['string', 'null'],
                default: `Need to understand the right scale?`,
            },
            cta_description: {
                type: ['string', 'null'],
                default: `The starting points above are useful references.`,
            },
            cta_secondary_description: {
                type: ['string', 'null'],
                default: `Send us a few details and we will help clarify the right scale.`,
            },
            cta_cta_link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: 'mailto:blackboard@zdcstudio.com?subject=Start%20a%20Project', title: '', 'post_type': null},
            },
            cta_cta_description: {
                type: ['string', 'null'],
                default: `Each projects begins with a conversation`,
            },
            cta_cta_label: {
                type: ['string', 'null'],
                default: `Start a project`,
            },
            cta_services_link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: 'services.html', title: '', 'post_type': null},
            },
            cta_services_label: {
                type: ['string', 'null'],
                default: `View Services`,
            }
        },
        example: { attributes: { page_label_label: `How much does a website cost <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, hero_title: `How much does&nbsp;<br>a website cost?`, hero_intro_text: `The price of a website is not defined by the number of pages alone. It depends on what the site needs to do, how it is structured, and how much it has to support over time.`, hero_description_left: `There is no single answer because &quot;a website&quot; can mean very different things. A simple online presence, a structured company website, an editorial system, an e-commerce platform and a custom digital product do not require the same level of work.`, hero_description_right: `The real question is not only how much a website costs. It is what kind of structure, design and development the project needs in order to work properly.`, pricing_overview_section_title: `A useful starting point <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, pricing_overview_intro_text: `Projects vary in scope. Each follows the same approach , structure first, then design and execution &#8212; adapted to scale and complexity.`, pricing_overview_tier_1_label: `Foundation`, pricing_overview_tier_1_prefix: `From`, pricing_overview_tier_1_price: `&euro; 3,500`, pricing_overview_tier_1_description: `A focused build with essential structure, custom design and core functionality.`, pricing_overview_tier_2_label: `Structured`, pricing_overview_tier_2_prefix: `From`, pricing_overview_tier_2_price: `&euro; 4,500`, pricing_overview_tier_2_description: `A content-driven system with expanded pages, flexible layouts and integrated features.`, pricing_overview_tier_3_label: `Extended`, pricing_overview_tier_3_prefix: `From`, pricing_overview_tier_3_price: `&euro; 7000`, pricing_overview_tier_3_description: `A more complex system with custom builds, integrations and advanced performance.`, pricing_overview_footnote: `These are starting points, not fixed packages. The right scale is defined after understanding the project.`, price_factors_section_title: `Why prices vary so much <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, price_factors_intro_text: `The cost of a website changes because the work behind it changes. Two websites may look similar from the outside, but they can be completely different in structure, flexibility, speed, content logic and long-term maintainability.`, price_factors_factor_1_title: `Structure`, price_factors_factor_1_description: `Information architecture, navigation, content hierarchy and key decisions before design begins.`, price_factors_factor_2_title: `Design`, price_factors_factor_2_description: `Custom layout, visual system, responsive behaviour, interaction details and consistency across pages.`, price_factors_factor_3_title: `Development`, price_factors_factor_3_description: `Front-end quality, CMS implementation, performance, accessibility, technical precision and future editing logic.`, price_factors_factor_4_title: `Content`, price_factors_factor_4_description: `Number of pages, content preparation, editorial structure, blog or journal systems, multilingual content and media management.`, price_factors_factor_5_title: `Integrations`, price_factors_factor_5_description: `Forms, newsletter, analytics, CRM, e-commerce, booking systems, third-party tools or custom workflows.`, price_factors_factor_6_title: `Performance and SEO foundations`, price_factors_factor_6_description: `Speed, technical structure, metadata, indexability, clean markup and search visibility foundations.`, price_factors_factor_7_title: `Care and maintenance`, price_factors_factor_7_description: `Hosting, updates, backup, monitoring, adjustments and ongoing support after launch.`, comparison_section_title: `What is and isn&apos;t included`, comparison_low_cost_title: `What is usually missing in a low-cost website <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, comparison_low_cost_intro: `A very low price is not always wrong, but it usually means the scope is limited. The site may exist online, but some decisions are often skipped.`, comparison_low_cost_items: `<li class="border-t border-black/10 pt-2">Little or no structure before building</li> <li class="border-t border-black/10 pt-2">Template-based design</li> <li class="border-t border-black/10 pt-2">Generic layouts</li> <li class="border-t border-black/10 pt-2">Limited flexibility</li> <li class="border-t border-black/10 pt-2">Weak content hierarchy</li> <li class="border-t border-black/10 pt-2">Basic SEO setup only</li> <li class="border-t border-black/10 pt-2">Limited performance work</li> <li class="border-t border-black/10 pt-2">No long-term maintenance logic</li> <li class="border-t border-black/10 pt-2">No documentation or handover</li> <li class="border-t border-black/10 pt-2">Difficult future evolution</li>`, comparison_low_cost_note: `The problem is not the low price itself. The problem is not knowing what has been excluded.`, comparison_pro_title: `What a professional website should include <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, comparison_pro_intro: `A professional website should not only look finished. It should be understandable, manageable and able to evolve.`, comparison_pro_phase1_title: `Before design`, comparison_pro_phase1_items: `<li class="border-t border-black/10 pt-2">Scope clarification</li> <li class="border-t border-black/10 pt-2">Content and navigation logic</li> <li class="border-t border-black/10 pt-2">Key user paths</li> <li class="border-t border-black/10 pt-2">Functional requirements</li> <li class="border-t border-black/10 pt-2">Technical direction</li>`, comparison_pro_phase2_title: `During design and development`, comparison_pro_phase2_items: `<li class="border-t border-black/10 pt-2">Custom design system</li> <li class="border-t border-black/10 pt-2">Responsive layouts</li> <li class="border-t border-black/10 pt-2">CMS structure</li> <li class="border-t border-black/10 pt-2">Performance-conscious development</li> <li class="border-t border-black/10 pt-2">Accessibility-aware implementation</li> <li class="border-t border-black/10 pt-2">Search-ready foundations</li>`, comparison_pro_phase3_title: `After launch`, comparison_pro_phase3_items: `<li class="border-t border-black/10 pt-2">Testing</li> <li class="border-t border-black/10 pt-2">Handover</li> <li class="border-t border-black/10 pt-2">Documentation</li> <li class="border-t border-black/10 pt-2">Maintenance options</li> <li class="border-t border-black/10 pt-2">Future adjustments when needed</li>`, separate_costs_section_title: `What should be clarified separately <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, separate_costs_intro_text: `Some costs are not always part of the initial website build and should be made explicit before starting.`, separate_costs_cost_1_title: `Domain`, separate_costs_cost_1_description: `Usually a small annual cost, but ownership and renewal should be clear from the start.`, separate_costs_cost_2_title: `Hosting`, separate_costs_cost_2_description: `Depends on performance, traffic, security and management needs. Can be self-managed or included in a care plan.`, separate_costs_cost_3_title: `Maintenance`, separate_costs_cost_3_description: `Updates, monitoring, backups and technical care after launch. Offered as a separate care arrangement.`, separate_costs_cost_4_title: `Content production`, separate_costs_cost_4_description: `Copywriting, photography, image editing, translations or editorial planning are separate from the build.`, separate_costs_cost_5_title: `SEO strategy`, separate_costs_cost_5_description: `Search-ready foundations can be included, but ongoing SEO work is a separate and ongoing activity.`, separate_costs_cost_6_title: `Marketing`, separate_costs_cost_6_description: `Campaigns, ads, email flows and content distribution are distinct from building the website itself.`, budget_and_quotes_budget_title: `When a higher budget makes sense <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, budget_and_quotes_budget_intro: `A higher budget is justified when the website is expected to support more than a basic presence.`, budget_and_quotes_budget_items: `<li class="border-t border-black/10 pt-2">The site needs to generate qualified enquiries</li> <li class="border-t border-black/10 pt-2">Content will grow over time</li> <li class="border-t border-black/10 pt-2">The brand needs stronger digital credibility</li> <li class="border-t border-black/10 pt-2">There are multiple audiences or services</li> <li class="border-t border-black/10 pt-2">The site must be multilingual</li> <li class="border-t border-black/10 pt-2">There are integrations with external tools</li> <li class="border-t border-black/10 pt-2">Performance and search visibility matter</li> <li class="border-t border-black/10 pt-2">The system must be easy to maintain and evolve</li>`, budget_and_quotes_budget_note: `In these cases, the website is not just a page online. It becomes part of how the organisation works, communicates and is understood.`, budget_and_quotes_quotes_title: `How to read a website quote <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span>`, budget_and_quotes_quotes_intro: `A useful quote should make the work visible. It should not only state a final number.`, budget_and_quotes_quotes_items: `<li class="border-t border-black/10 pt-2">What is included?</li> <li class="border-t border-black/10 pt-2">What is excluded?</li> <li class="border-t border-black/10 pt-2">How many pages or templates are included?</li> <li class="border-t border-black/10 pt-2">Is the design custom or template-based?</li> <li class="border-t border-black/10 pt-2">Is the CMS structure defined?</li> <li class="border-t border-black/10 pt-2">Are performance and SEO foundations included?</li> <li class="border-t border-black/10 pt-2">Who owns the domain, hosting and accounts?</li> <li class="border-t border-black/10 pt-2">Is handover included?</li> <li class="border-t border-black/10 pt-2">What happens after launch?</li>`, cta_title: `Need to understand the right scale?`, cta_description: `The starting points above are useful references.`, cta_secondary_description: `Send us a few details and we will help clarify the right scale.`, cta_cta_link: {post_id: 0, url: 'mailto:blackboard@zdcstudio.com?subject=Start%20a%20Project', title: '', 'post_type': null}, cta_cta_description: `Each projects begins with a conversation`, cta_cta_label: `Start a project`, cta_services_link: {post_id: 0, url: 'services.html', title: '', 'post_type': null}, cta_services_label: `View Services` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'min-h-screen min-w-0 bg-[#f5f4f0] text-black py-10 md:py-14' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el('div', { className: 'mx-auto grid grid-cols-1 min-w-0 gap-6 md:gap-10 px-4 md:grid-cols-12 md:px-8 max-w-7xl' }, [' ', ' ', ' ', el('div', { id: 'main-content-col', className: 'col-span-12 md:col-span-10 md:col-start-2 md:pt-2 min-w-0' }, [' ', ' ', el('div', { className: 'hidden md:flex justify-between items-start gap-2 min-w-0' }, [' ', el(RichText, { tagName: 'h2', className: 'flex font-semibold gap-2 items-center text-xs uppercase min-w-0', value: propOrDefault( props.attributes.page_label_label, 'page_label_label' ), onChange: function(val) { setAttributes( {page_label_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('div', { className: 'flex justify-end min-w-0 flex-shrink-0' }, [' ', el('h3', { id: 'dynamic-date', className: 'flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap' }, [' ', el('span', { id: 'date-display', className: 'font-sans text-right flex items-center gap-1' }, [' ', el('span', { id: 'date-text', className: 'font-sans' }, 'Fri 29 May 2026'), ' ', el('span', {}, '•'), ' ', el('span', { id: 'time-text', className: 'font-mono tabular-nums' }, '15:09:46'), ' ']), ' ']), ' ']), ' ']), ' ', ' ', el('section', { 'aria-labelledby': 'hero-heading', className: 'md:mt-10 mt-8' }, [' ', el(RichText, { tagName: 'h1', id: 'hero-heading', className: 'font-bold leading-none mb-6 tracking-tight md:text-4xl lg:text-7xl', value: propOrDefault( props.attributes.hero_title, 'hero_title' ), onChange: function(val) { setAttributes( {hero_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light italic leading-relaxed max-w-xl mb-6 text-lg text-neutral-700', value: propOrDefault( props.attributes.hero_intro_text, 'hero_intro_text' ), onChange: function(val) { setAttributes( {hero_intro_text: val }) } }), ' ', el('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl' }, [' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-900', value: propOrDefault( props.attributes.hero_description_left, 'hero_description_left' ), onChange: function(val) { setAttributes( {hero_description_left: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-900', value: propOrDefault( props.attributes.hero_description_right, 'hero_description_right' ), onChange: function(val) { setAttributes( {hero_description_right: val }) } }), ' ']), ' ']), ' ', el('hr', { className: 'border-black/15 border-t md:my-14 my-10' }), ' ', ' ', el('section', { 'aria-labelledby': 'starting-points-heading' }, [' ', el(RichText, { tagName: 'h2', id: 'starting-points-heading', className: 'flex font-semibold gap-2 items-center text-xs uppercase mb-4', value: propOrDefault( props.attributes.pricing_overview_section_title, 'pricing_overview_section_title' ), onChange: function(val) { setAttributes( {pricing_overview_section_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed max-w-xl mb-6 text-base text-neutral-900', value: propOrDefault( props.attributes.pricing_overview_intro_text, 'pricing_overview_intro_text' ), onChange: function(val) { setAttributes( {pricing_overview_intro_text: val }) } }), ' ', ' ', el('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/15 bg-white/40 rounded-xs overflow-hidden' }, [' ', el('div', { className: 'p-5 md:p-6 border-b border-black/15 md:border-b-0 md:border-r border-black/15' }, [' ', el('div', { className: 'inline-flex items-center bg-stone-900 text-white px-3 py-1.5 text-xs leading-none rounded-xs mb-3 hover:bg-[#a4ab13] hover:text-black transition-colors duration-200' }, [' ', el(RichText, { tagName: 'span', className: 'font-semibold uppercase tracking-wide', value: propOrDefault( props.attributes.pricing_overview_tier_1_label, 'pricing_overview_tier_1_label' ), onChange: function(val) { setAttributes( {pricing_overview_tier_1_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'text-base mb-2' }, [' ', el(RichText, { tagName: 'span', className: 'font-normal', value: propOrDefault( props.attributes.pricing_overview_tier_1_prefix, 'pricing_overview_tier_1_prefix' ), onChange: function(val) { setAttributes( {pricing_overview_tier_1_prefix: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pricing_overview_tier_1_price, 'pricing_overview_tier_1_price' ), onChange: function(val) { setAttributes( {pricing_overview_tier_1_price: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.pricing_overview_tier_1_description, 'pricing_overview_tier_1_description' ), onChange: function(val) { setAttributes( {pricing_overview_tier_1_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'p-5 md:p-6 border-b border-black/15 md:border-b-0 md:border-r border-black/15' }, [' ', el('div', { className: 'inline-flex items-center bg-stone-900 text-white px-3 py-1.5 text-xs leading-none rounded-xs mb-3 hover:bg-[#a4ab13] hover:text-black transition-colors duration-200' }, [' ', el(RichText, { tagName: 'span', className: 'font-semibold uppercase tracking-wide', value: propOrDefault( props.attributes.pricing_overview_tier_2_label, 'pricing_overview_tier_2_label' ), onChange: function(val) { setAttributes( {pricing_overview_tier_2_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'text-base mb-2' }, [' ', el(RichText, { tagName: 'span', className: 'font-normal', value: propOrDefault( props.attributes.pricing_overview_tier_2_prefix, 'pricing_overview_tier_2_prefix' ), onChange: function(val) { setAttributes( {pricing_overview_tier_2_prefix: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pricing_overview_tier_2_price, 'pricing_overview_tier_2_price' ), onChange: function(val) { setAttributes( {pricing_overview_tier_2_price: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.pricing_overview_tier_2_description, 'pricing_overview_tier_2_description' ), onChange: function(val) { setAttributes( {pricing_overview_tier_2_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'p-5 md:p-6' }, [' ', el('div', { className: 'inline-flex items-center bg-stone-900 text-white px-3 py-1.5 text-xs leading-none rounded-xs mb-3 hover:bg-[#a4ab13] hover:text-black transition-colors duration-200' }, [' ', el(RichText, { tagName: 'span', className: 'font-semibold uppercase tracking-wide', value: propOrDefault( props.attributes.pricing_overview_tier_3_label, 'pricing_overview_tier_3_label' ), onChange: function(val) { setAttributes( {pricing_overview_tier_3_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'text-base mb-2' }, [' ', el(RichText, { tagName: 'span', className: 'font-normal', value: propOrDefault( props.attributes.pricing_overview_tier_3_prefix, 'pricing_overview_tier_3_prefix' ), onChange: function(val) { setAttributes( {pricing_overview_tier_3_prefix: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'span', className: 'font-thin', value: propOrDefault( props.attributes.pricing_overview_tier_3_price, 'pricing_overview_tier_3_price' ), onChange: function(val) { setAttributes( {pricing_overview_tier_3_price: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.pricing_overview_tier_3_description, 'pricing_overview_tier_3_description' ), onChange: function(val) { setAttributes( {pricing_overview_tier_3_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed mt-3 text-neutral-600 text-xs', value: propOrDefault( props.attributes.pricing_overview_footnote, 'pricing_overview_footnote' ), onChange: function(val) { setAttributes( {pricing_overview_footnote: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('hr', { className: 'border-black/15 border-t md:my-14 my-10' }), ' ', ' ', el('section', { 'aria-labelledby': 'why-vary-heading' }, [' ', el('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10' }, [' ', el('div', {}, [' ', el(RichText, { tagName: 'h2', id: 'why-vary-heading', className: 'flex font-semibold gap-2 items-center text-xs uppercase mb-4', value: propOrDefault( props.attributes.price_factors_section_title, 'price_factors_section_title' ), onChange: function(val) { setAttributes( {price_factors_section_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-900', value: propOrDefault( props.attributes.price_factors_intro_text, 'price_factors_intro_text' ), onChange: function(val) { setAttributes( {price_factors_intro_text: val }) } }), ' ']), ' ', el('div', { className: 'space-y-4' }, [' ', el('div', { className: 'border-t border-black/15 pt-3' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.price_factors_factor_1_title, 'price_factors_factor_1_title' ), onChange: function(val) { setAttributes( {price_factors_factor_1_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.price_factors_factor_1_description, 'price_factors_factor_1_description' ), onChange: function(val) { setAttributes( {price_factors_factor_1_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'border-t border-black/15 pt-3' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.price_factors_factor_2_title, 'price_factors_factor_2_title' ), onChange: function(val) { setAttributes( {price_factors_factor_2_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.price_factors_factor_2_description, 'price_factors_factor_2_description' ), onChange: function(val) { setAttributes( {price_factors_factor_2_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'border-t border-black/15 pt-3' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.price_factors_factor_3_title, 'price_factors_factor_3_title' ), onChange: function(val) { setAttributes( {price_factors_factor_3_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.price_factors_factor_3_description, 'price_factors_factor_3_description' ), onChange: function(val) { setAttributes( {price_factors_factor_3_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'border-t border-black/15 pt-3' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.price_factors_factor_4_title, 'price_factors_factor_4_title' ), onChange: function(val) { setAttributes( {price_factors_factor_4_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.price_factors_factor_4_description, 'price_factors_factor_4_description' ), onChange: function(val) { setAttributes( {price_factors_factor_4_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'border-t border-black/15 pt-3' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.price_factors_factor_5_title, 'price_factors_factor_5_title' ), onChange: function(val) { setAttributes( {price_factors_factor_5_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.price_factors_factor_5_description, 'price_factors_factor_5_description' ), onChange: function(val) { setAttributes( {price_factors_factor_5_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'border-t border-black/15 pt-3' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.price_factors_factor_6_title, 'price_factors_factor_6_title' ), onChange: function(val) { setAttributes( {price_factors_factor_6_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.price_factors_factor_6_description, 'price_factors_factor_6_description' ), onChange: function(val) { setAttributes( {price_factors_factor_6_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'border-t border-black/15 pt-3' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.price_factors_factor_7_title, 'price_factors_factor_7_title' ), onChange: function(val) { setAttributes( {price_factors_factor_7_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.price_factors_factor_7_description, 'price_factors_factor_7_description' ), onChange: function(val) { setAttributes( {price_factors_factor_7_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']), ' ']), ' ', el('hr', { className: 'border-black/15 border-t md:my-14 my-10' }), ' ', ' ', el('section', { 'aria-labelledby': 'comparison-heading' }, [' ', el(RichText, { tagName: 'h2', id: 'comparison-heading', className: 'sr-only', value: propOrDefault( props.attributes.comparison_section_title, 'comparison_section_title' ), onChange: function(val) { setAttributes( {comparison_section_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' }, [' ', ' ', el('div', { className: 'bg-white/80 border border-black/10 p-5 md:p-6 rounded-xs' }, [' ', el(RichText, { tagName: 'h3', className: 'flex font-semibold gap-2 items-center mb-4 text-xs uppercase', value: propOrDefault( props.attributes.comparison_low_cost_title, 'comparison_low_cost_title' ), onChange: function(val) { setAttributes( {comparison_low_cost_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed mb-4 text-base text-neutral-700', value: propOrDefault( props.attributes.comparison_low_cost_intro, 'comparison_low_cost_intro' ), onChange: function(val) { setAttributes( {comparison_low_cost_intro: val }) } }), ' ', el(RichText, { tagName: 'ul', className: 'font-light space-y-2 text-base text-neutral-900', value: propOrDefault( props.attributes.comparison_low_cost_items, 'comparison_low_cost_items' ), onChange: function(val) { setAttributes( {comparison_low_cost_items: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed mt-4 text-neutral-600 text-xs', value: propOrDefault( props.attributes.comparison_low_cost_note, 'comparison_low_cost_note' ), onChange: function(val) { setAttributes( {comparison_low_cost_note: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', ' ', el('div', { className: 'bg-white/80 border border-black/10 p-5 md:p-6 rounded-xs' }, [' ', el(RichText, { tagName: 'h3', className: 'flex font-semibold gap-2 items-center mb-4 text-xs uppercase', value: propOrDefault( props.attributes.comparison_pro_title, 'comparison_pro_title' ), onChange: function(val) { setAttributes( {comparison_pro_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed mb-4 text-base text-neutral-700', value: propOrDefault( props.attributes.comparison_pro_intro, 'comparison_pro_intro' ), onChange: function(val) { setAttributes( {comparison_pro_intro: val }) } }), ' ', el(RichText, { tagName: 'h4', className: 'font-semibold text-xs uppercase text-neutral-600 mb-2', value: propOrDefault( props.attributes.comparison_pro_phase1_title, 'comparison_pro_phase1_title' ), onChange: function(val) { setAttributes( {comparison_pro_phase1_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'ul', className: 'font-light mb-4 space-y-1.5 text-base text-neutral-900', value: propOrDefault( props.attributes.comparison_pro_phase1_items, 'comparison_pro_phase1_items' ), onChange: function(val) { setAttributes( {comparison_pro_phase1_items: val }) } }), ' ', el(RichText, { tagName: 'h4', className: 'font-semibold text-xs uppercase text-neutral-600 mb-2', value: propOrDefault( props.attributes.comparison_pro_phase2_title, 'comparison_pro_phase2_title' ), onChange: function(val) { setAttributes( {comparison_pro_phase2_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'ul', className: 'font-light mb-4 space-y-1.5 text-base text-neutral-900', value: propOrDefault( props.attributes.comparison_pro_phase2_items, 'comparison_pro_phase2_items' ), onChange: function(val) { setAttributes( {comparison_pro_phase2_items: val }) } }), ' ', el(RichText, { tagName: 'h4', className: 'font-semibold text-xs uppercase text-neutral-600 mb-2', value: propOrDefault( props.attributes.comparison_pro_phase3_title, 'comparison_pro_phase3_title' ), onChange: function(val) { setAttributes( {comparison_pro_phase3_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'ul', className: 'font-light space-y-1.5 text-base text-neutral-900', value: propOrDefault( props.attributes.comparison_pro_phase3_items, 'comparison_pro_phase3_items' ), onChange: function(val) { setAttributes( {comparison_pro_phase3_items: val }) } }), ' ']), ' ']), ' ']), ' ', el('hr', { className: 'border-black/15 border-t md:my-14 my-10' }), ' ', ' ', ' ', el('section', { 'aria-labelledby': 'clarify-heading' }, [' ', el(RichText, { tagName: 'h2', id: 'clarify-heading', className: 'flex font-semibold gap-2 items-center mb-4 text-xs uppercase', value: propOrDefault( props.attributes.separate_costs_section_title, 'separate_costs_section_title' ), onChange: function(val) { setAttributes( {separate_costs_section_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed max-w-xl mb-6 text-base text-neutral-900', value: propOrDefault( props.attributes.separate_costs_intro_text, 'separate_costs_intro_text' ), onChange: function(val) { setAttributes( {separate_costs_intro_text: val }) } }), ' ', el('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-0 border border-black/15 bg-white/40 rounded-xs overflow-hidden' }, [' ', el('div', { className: 'p-5 md:p-6 border-b border-black/15 md:border-r' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.separate_costs_cost_1_title, 'separate_costs_cost_1_title' ), onChange: function(val) { setAttributes( {separate_costs_cost_1_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.separate_costs_cost_1_description, 'separate_costs_cost_1_description' ), onChange: function(val) { setAttributes( {separate_costs_cost_1_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'p-5 md:p-6 border-b border-black/15' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.separate_costs_cost_2_title, 'separate_costs_cost_2_title' ), onChange: function(val) { setAttributes( {separate_costs_cost_2_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.separate_costs_cost_2_description, 'separate_costs_cost_2_description' ), onChange: function(val) { setAttributes( {separate_costs_cost_2_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'p-5 md:p-6 border-b border-black/15 md:border-r' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.separate_costs_cost_3_title, 'separate_costs_cost_3_title' ), onChange: function(val) { setAttributes( {separate_costs_cost_3_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.separate_costs_cost_3_description, 'separate_costs_cost_3_description' ), onChange: function(val) { setAttributes( {separate_costs_cost_3_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'p-5 md:p-6 border-b border-black/15' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.separate_costs_cost_4_title, 'separate_costs_cost_4_title' ), onChange: function(val) { setAttributes( {separate_costs_cost_4_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.separate_costs_cost_4_description, 'separate_costs_cost_4_description' ), onChange: function(val) { setAttributes( {separate_costs_cost_4_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'p-5 md:p-6 border-b border-black/15 md:border-r md:border-b-0' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.separate_costs_cost_5_title, 'separate_costs_cost_5_title' ), onChange: function(val) { setAttributes( {separate_costs_cost_5_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.separate_costs_cost_5_description, 'separate_costs_cost_5_description' ), onChange: function(val) { setAttributes( {separate_costs_cost_5_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'p-5 md:p-6' }, [' ', el(RichText, { tagName: 'h3', className: 'font-semibold text-xs uppercase mb-1', value: propOrDefault( props.attributes.separate_costs_cost_6_title, 'separate_costs_cost_6_title' ), onChange: function(val) { setAttributes( {separate_costs_cost_6_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed text-base text-neutral-700', value: propOrDefault( props.attributes.separate_costs_cost_6_description, 'separate_costs_cost_6_description' ), onChange: function(val) { setAttributes( {separate_costs_cost_6_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']), ' ', el('hr', { className: 'border-black/15 border-t md:my-14 my-10' }), ' ', ' ', el('section', { 'aria-labelledby': 'invest-more-heading' }, [' ', el('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10' }, [' ', ' ', el('div', {}, [' ', el(RichText, { tagName: 'h2', id: 'invest-more-heading', className: 'flex font-semibold gap-2 items-center mb-4 text-xs uppercase', value: propOrDefault( props.attributes.budget_and_quotes_budget_title, 'budget_and_quotes_budget_title' ), onChange: function(val) { setAttributes( {budget_and_quotes_budget_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed mb-4 text-base text-neutral-900', value: propOrDefault( props.attributes.budget_and_quotes_budget_intro, 'budget_and_quotes_budget_intro' ), onChange: function(val) { setAttributes( {budget_and_quotes_budget_intro: val }) } }), ' ', el(RichText, { tagName: 'ul', className: 'font-light space-y-2 text-base text-neutral-900', value: propOrDefault( props.attributes.budget_and_quotes_budget_items, 'budget_and_quotes_budget_items' ), onChange: function(val) { setAttributes( {budget_and_quotes_budget_items: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed mt-4 text-neutral-600 text-xs', value: propOrDefault( props.attributes.budget_and_quotes_budget_note, 'budget_and_quotes_budget_note' ), onChange: function(val) { setAttributes( {budget_and_quotes_budget_note: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', ' ', el('div', {}, [' ', el(RichText, { tagName: 'h2', className: 'flex font-semibold gap-2 items-center mb-4 text-xs uppercase', value: propOrDefault( props.attributes.budget_and_quotes_quotes_title, 'budget_and_quotes_quotes_title' ), onChange: function(val) { setAttributes( {budget_and_quotes_quotes_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed mb-4 text-base text-neutral-900', value: propOrDefault( props.attributes.budget_and_quotes_quotes_intro, 'budget_and_quotes_quotes_intro' ), onChange: function(val) { setAttributes( {budget_and_quotes_quotes_intro: val }) } }), ' ', el(RichText, { tagName: 'ul', className: 'font-light space-y-2 text-base text-neutral-900', value: propOrDefault( props.attributes.budget_and_quotes_quotes_items, 'budget_and_quotes_quotes_items' ), onChange: function(val) { setAttributes( {budget_and_quotes_quotes_items: val }) } }), ' ']), ' ']), ' ']), ' ', el('hr', { className: 'border-black/15 border-t md:my-14 my-10' }), ' ', ' ', el('section', { 'aria-labelledby': 'cta-heading', className: 'mb-16 md:mb-20' }, [' ', el('div', { className: 'w-full max-w-none' }, [' ', el(RichText, { tagName: 'h2', id: 'cta-heading', className: 'font-bold leading-tight lg:text-5xl mb-4 md:text-4xl text-3xl', value: propOrDefault( props.attributes.cta_title, 'cta_title' ), onChange: function(val) { setAttributes( {cta_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed mb-2 text-base text-neutral-900', value: propOrDefault( props.attributes.cta_description, 'cta_description' ), onChange: function(val) { setAttributes( {cta_description: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'font-light leading-relaxed mb-8 text-base text-neutral-700', value: propOrDefault( props.attributes.cta_secondary_description, 'cta_secondary_description' ), onChange: function(val) { setAttributes( {cta_secondary_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('div', { className: 'flex flex-col gap-4 items-center' }, [' ', el('a', { href: propOrDefault( props.attributes.cta_cta_link.url, 'cta_cta_link', 'url' ), role: 'button', className: 'group bg-black flex flex-col font-normal gap-2 px-4 py-4 rounded-xs shrink-0 text-center text-sm text-white tracking-wide transition-colors w-full focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white/60 focus:outline-none hover:bg-[#a4ab13] md:w-auto', onClick: function(e) { e.preventDefault(); } }, [' ', el(RichText, { tagName: 'h3', className: 'font-light group-hover:text-black leading-relaxed md:max-w-lg text-slate-200 text-xs', value: propOrDefault( props.attributes.cta_cta_description, 'cta_cta_description' ), onChange: function(val) { setAttributes( {cta_cta_description: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'h5', className: 'font-normal text-lg uppercase group-hover:text-black', value: propOrDefault( props.attributes.cta_cta_label, 'cta_cta_label' ), onChange: function(val) { setAttributes( {cta_cta_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el(RichText, { tagName: 'a', href: propOrDefault( props.attributes.cta_services_link.url, 'cta_services_link', 'url' ), className: '!no-underline duration-200 font-light text-neutral-700 text-xs transition-colors underline-offset-2 hover:text-black', onClick: function(e) { e.preventDefault(); }, value: propOrDefault( props.attributes.cta_services_label, 'cta_services_label' ), onChange: function(val) { setAttributes( {cta_services_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']), ' ']), ' ', ' ']), ' ', ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.page_label_label,
                                        help: __( '' ),
                                        label: __( 'Label' ),
                                        onChange: function(val) { setAttributes({page_label_label: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.hero_title,
                                        help: __( '' ),
                                        label: __( 'Title' ),
                                        onChange: function(val) { setAttributes({hero_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Intro text' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.hero_intro_text,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({hero_intro_text: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Description left' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.hero_description_left,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({hero_description_left: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Description right' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.hero_description_right,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({hero_description_right: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.pricing_overview_section_title,
                                        help: __( '' ),
                                        label: __( 'Section title' ),
                                        onChange: function(val) { setAttributes({pricing_overview_section_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Introduction' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.pricing_overview_intro_text,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({pricing_overview_intro_text: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.pricing_overview_tier_1_label,
                                        help: __( '' ),
                                        label: __( 'Tier 1 label' ),
                                        onChange: function(val) { setAttributes({pricing_overview_tier_1_label: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pricing_overview_tier_1_prefix,
                                        help: __( '' ),
                                        label: __( 'Tier 1 prefix' ),
                                        onChange: function(val) { setAttributes({pricing_overview_tier_1_prefix: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pricing_overview_tier_1_price,
                                        help: __( '' ),
                                        label: __( 'Tier 1 price' ),
                                        onChange: function(val) { setAttributes({pricing_overview_tier_1_price: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pricing_overview_tier_1_description,
                                        help: __( '' ),
                                        label: __( 'Tier 1 description' ),
                                        onChange: function(val) { setAttributes({pricing_overview_tier_1_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pricing_overview_tier_2_label,
                                        help: __( '' ),
                                        label: __( 'Tier 2 label' ),
                                        onChange: function(val) { setAttributes({pricing_overview_tier_2_label: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pricing_overview_tier_2_prefix,
                                        help: __( '' ),
                                        label: __( 'Tier 2 prefix' ),
                                        onChange: function(val) { setAttributes({pricing_overview_tier_2_prefix: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pricing_overview_tier_2_price,
                                        help: __( '' ),
                                        label: __( 'Tier 2 price' ),
                                        onChange: function(val) { setAttributes({pricing_overview_tier_2_price: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pricing_overview_tier_2_description,
                                        help: __( '' ),
                                        label: __( 'Tier 2 description' ),
                                        onChange: function(val) { setAttributes({pricing_overview_tier_2_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pricing_overview_tier_3_label,
                                        help: __( '' ),
                                        label: __( 'Tier 3 label' ),
                                        onChange: function(val) { setAttributes({pricing_overview_tier_3_label: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pricing_overview_tier_3_prefix,
                                        help: __( '' ),
                                        label: __( 'Tier 3 prefix' ),
                                        onChange: function(val) { setAttributes({pricing_overview_tier_3_prefix: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pricing_overview_tier_3_price,
                                        help: __( '' ),
                                        label: __( 'Tier 3 price' ),
                                        onChange: function(val) { setAttributes({pricing_overview_tier_3_price: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pricing_overview_tier_3_description,
                                        help: __( '' ),
                                        label: __( 'Tier 3 description' ),
                                        onChange: function(val) { setAttributes({pricing_overview_tier_3_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.pricing_overview_footnote,
                                        help: __( '' ),
                                        label: __( 'Footnote' ),
                                        onChange: function(val) { setAttributes({pricing_overview_footnote: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.price_factors_section_title,
                                        help: __( '' ),
                                        label: __( 'Section title' ),
                                        onChange: function(val) { setAttributes({price_factors_section_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Introduction' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.price_factors_intro_text,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({price_factors_intro_text: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.price_factors_factor_1_title,
                                        help: __( '' ),
                                        label: __( 'Factor 1 title' ),
                                        onChange: function(val) { setAttributes({price_factors_factor_1_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.price_factors_factor_1_description,
                                        help: __( '' ),
                                        label: __( 'Factor 1 description' ),
                                        onChange: function(val) { setAttributes({price_factors_factor_1_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.price_factors_factor_2_title,
                                        help: __( '' ),
                                        label: __( 'Factor 2 title' ),
                                        onChange: function(val) { setAttributes({price_factors_factor_2_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.price_factors_factor_2_description,
                                        help: __( '' ),
                                        label: __( 'Factor 2 description' ),
                                        onChange: function(val) { setAttributes({price_factors_factor_2_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.price_factors_factor_3_title,
                                        help: __( '' ),
                                        label: __( 'Factor 3 title' ),
                                        onChange: function(val) { setAttributes({price_factors_factor_3_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.price_factors_factor_3_description,
                                        help: __( '' ),
                                        label: __( 'Factor 3 description' ),
                                        onChange: function(val) { setAttributes({price_factors_factor_3_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.price_factors_factor_4_title,
                                        help: __( '' ),
                                        label: __( 'Factor 4 title' ),
                                        onChange: function(val) { setAttributes({price_factors_factor_4_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.price_factors_factor_4_description,
                                        help: __( '' ),
                                        label: __( 'Factor 4 description' ),
                                        onChange: function(val) { setAttributes({price_factors_factor_4_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.price_factors_factor_5_title,
                                        help: __( '' ),
                                        label: __( 'Factor 5 title' ),
                                        onChange: function(val) { setAttributes({price_factors_factor_5_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.price_factors_factor_5_description,
                                        help: __( '' ),
                                        label: __( 'Factor 5 description' ),
                                        onChange: function(val) { setAttributes({price_factors_factor_5_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.price_factors_factor_6_title,
                                        help: __( '' ),
                                        label: __( 'Factor 6 title' ),
                                        onChange: function(val) { setAttributes({price_factors_factor_6_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.price_factors_factor_6_description,
                                        help: __( '' ),
                                        label: __( 'Factor 6 description' ),
                                        onChange: function(val) { setAttributes({price_factors_factor_6_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.price_factors_factor_7_title,
                                        help: __( '' ),
                                        label: __( 'Factor 7 title' ),
                                        onChange: function(val) { setAttributes({price_factors_factor_7_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.price_factors_factor_7_description,
                                        help: __( '' ),
                                        label: __( 'Factor 7 description' ),
                                        onChange: function(val) { setAttributes({price_factors_factor_7_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.comparison_section_title,
                                        help: __( '' ),
                                        label: __( 'Section title' ),
                                        onChange: function(val) { setAttributes({comparison_section_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.comparison_low_cost_title,
                                        help: __( '' ),
                                        label: __( 'Low-cost title' ),
                                        onChange: function(val) { setAttributes({comparison_low_cost_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Low-cost introduction' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.comparison_low_cost_intro,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({comparison_low_cost_intro: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Low-cost items' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.comparison_low_cost_items,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({comparison_low_cost_items: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.comparison_low_cost_note,
                                        help: __( '' ),
                                        label: __( 'Low-cost note' ),
                                        onChange: function(val) { setAttributes({comparison_low_cost_note: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.comparison_pro_title,
                                        help: __( '' ),
                                        label: __( 'Professional title' ),
                                        onChange: function(val) { setAttributes({comparison_pro_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Professional introduction' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.comparison_pro_intro,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({comparison_pro_intro: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.comparison_pro_phase1_title,
                                        help: __( '' ),
                                        label: __( 'Phase 1 title' ),
                                        onChange: function(val) { setAttributes({comparison_pro_phase1_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Phase 1 items' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.comparison_pro_phase1_items,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({comparison_pro_phase1_items: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.comparison_pro_phase2_title,
                                        help: __( '' ),
                                        label: __( 'Phase 2 title' ),
                                        onChange: function(val) { setAttributes({comparison_pro_phase2_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Phase 2 items' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.comparison_pro_phase2_items,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({comparison_pro_phase2_items: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.comparison_pro_phase3_title,
                                        help: __( '' ),
                                        label: __( 'Phase 3 title' ),
                                        onChange: function(val) { setAttributes({comparison_pro_phase3_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Phase 3 items' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.comparison_pro_phase3_items,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({comparison_pro_phase3_items: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.separate_costs_section_title,
                                        help: __( '' ),
                                        label: __( 'Section title' ),
                                        onChange: function(val) { setAttributes({separate_costs_section_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Introduction' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.separate_costs_intro_text,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({separate_costs_intro_text: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.separate_costs_cost_1_title,
                                        help: __( '' ),
                                        label: __( 'Cost 1 title' ),
                                        onChange: function(val) { setAttributes({separate_costs_cost_1_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.separate_costs_cost_1_description,
                                        help: __( '' ),
                                        label: __( 'Cost 1 description' ),
                                        onChange: function(val) { setAttributes({separate_costs_cost_1_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.separate_costs_cost_2_title,
                                        help: __( '' ),
                                        label: __( 'Cost 2 title' ),
                                        onChange: function(val) { setAttributes({separate_costs_cost_2_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.separate_costs_cost_2_description,
                                        help: __( '' ),
                                        label: __( 'Cost 2 description' ),
                                        onChange: function(val) { setAttributes({separate_costs_cost_2_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.separate_costs_cost_3_title,
                                        help: __( '' ),
                                        label: __( 'Cost 3 title' ),
                                        onChange: function(val) { setAttributes({separate_costs_cost_3_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.separate_costs_cost_3_description,
                                        help: __( '' ),
                                        label: __( 'Cost 3 description' ),
                                        onChange: function(val) { setAttributes({separate_costs_cost_3_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.separate_costs_cost_4_title,
                                        help: __( '' ),
                                        label: __( 'Cost 4 title' ),
                                        onChange: function(val) { setAttributes({separate_costs_cost_4_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.separate_costs_cost_4_description,
                                        help: __( '' ),
                                        label: __( 'Cost 4 description' ),
                                        onChange: function(val) { setAttributes({separate_costs_cost_4_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.separate_costs_cost_5_title,
                                        help: __( '' ),
                                        label: __( 'Cost 5 title' ),
                                        onChange: function(val) { setAttributes({separate_costs_cost_5_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.separate_costs_cost_5_description,
                                        help: __( '' ),
                                        label: __( 'Cost 5 description' ),
                                        onChange: function(val) { setAttributes({separate_costs_cost_5_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.separate_costs_cost_6_title,
                                        help: __( '' ),
                                        label: __( 'Cost 6 title' ),
                                        onChange: function(val) { setAttributes({separate_costs_cost_6_title: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.separate_costs_cost_6_description,
                                        help: __( '' ),
                                        label: __( 'Cost 6 description' ),
                                        onChange: function(val) { setAttributes({separate_costs_cost_6_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.budget_and_quotes_budget_title,
                                        help: __( '' ),
                                        label: __( 'Budget title' ),
                                        onChange: function(val) { setAttributes({budget_and_quotes_budget_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Budget introduction' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.budget_and_quotes_budget_intro,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({budget_and_quotes_budget_intro: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Budget items' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.budget_and_quotes_budget_items,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({budget_and_quotes_budget_items: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.budget_and_quotes_budget_note,
                                        help: __( '' ),
                                        label: __( 'Budget note' ),
                                        onChange: function(val) { setAttributes({budget_and_quotes_budget_note: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.budget_and_quotes_quotes_title,
                                        help: __( '' ),
                                        label: __( 'Quotes title' ),
                                        onChange: function(val) { setAttributes({budget_and_quotes_quotes_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Quotes introduction' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.budget_and_quotes_quotes_intro,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({budget_and_quotes_quotes_intro: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Quotes items' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.budget_and_quotes_quotes_items,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({budget_and_quotes_quotes_items: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.cta_title,
                                        help: __( '' ),
                                        label: __( 'Title' ),
                                        onChange: function(val) { setAttributes({cta_title: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Description' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.cta_description,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({cta_description: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.cta_secondary_description,
                                        help: __( '' ),
                                        label: __( 'Secondary description' ),
                                        onChange: function(val) { setAttributes({cta_secondary_description: val}) },
                                        type: 'text'
                                    }),
                                    pgGetFeature4("pgUrlControl")('cta_cta_link', setAttributes, props, 'CTA link', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.cta_cta_description,
                                        help: __( '' ),
                                        label: __( 'CTA description' ),
                                        onChange: function(val) { setAttributes({cta_cta_description: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.cta_cta_label,
                                        help: __( '' ),
                                        label: __( 'CTA label' ),
                                        onChange: function(val) { setAttributes({cta_cta_label: val}) },
                                        type: 'text'
                                    }),
                                    pgGetFeature4("pgUrlControl")('cta_services_link', setAttributes, props, 'Services link', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.cta_services_label,
                                        help: __( '' ),
                                        label: __( 'Services label' ),
                                        onChange: function(val) { setAttributes({cta_services_label: val}) },
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
