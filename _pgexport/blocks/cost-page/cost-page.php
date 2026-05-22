<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "min-h-screen min-w-0 bg-[#f5f4f0] text-black py-10 md:py-14", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="mx-auto grid grid-cols-1 min-w-0 gap-6 md:gap-10 px-4 md:grid-cols-12 md:px-8 max-w-7xl">
        <!-- ====================================================
             SIDEBAR — sticky anchor
        ==================================================== -->
        <!-- ====================================================
             MAIN CONTENT COLUMN
        ==================================================== -->
        <div id="main-content-col" class="col-span-12 md:col-span-10 md:col-start-2 md:pt-2 min-w-0">
            <!-- Top label + clock (desktop) -->
            <div class="hidden md:flex justify-between items-start gap-2 min-w-0">
                <h2 class="flex font-semibold gap-2 items-center text-xs uppercase min-w-0"> <?php _e( 'How much does a website cost', 'blackboard_by_zdc' ); ?> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span> </h2>
                <div class="flex justify-end min-w-0 flex-shrink-0">
                    <h3 id="dynamic-date" class="flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap"> <span id="date-display" class="font-sans text-right flex items-center gap-1"> <span id="date-text" class="font-sans"></span> <span>•</span> <span id="time-text" class="font-mono tabular-nums"></span> </span> </h3>
                </div>
            </div>
            <!-- ====================================================
               SECTION 1 — HERO / INTRO
          ==================================================== -->
            <section aria-labelledby="hero-heading" class="md:mt-10 mt-8">
                <h1 id="hero-heading" class="font-bold text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight mb-6"><?php _e( 'How much does', 'blackboard_by_zdc' ); ?><br/><?php _e( 'a website cost?', 'blackboard_by_zdc' ); ?></h1>
                <p class="font-light italic leading-relaxed max-w-xl mb-6 text-lg text-neutral-700"><?php _e( 'The price of a website is not defined by the number of pages alone. It depends on what the site needs to do, how it is structured, and how much it has to support over time.', 'blackboard_by_zdc' ); ?></p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                    <p class="font-light leading-relaxed text-base text-neutral-900"><?php _e( 'There is no single answer because "a website" can mean very different things. A simple online presence, a structured company website, an editorial system, an e-commerce platform and a custom digital product do not require the same level of work.', 'blackboard_by_zdc' ); ?></p>
                    <p class="font-light leading-relaxed text-base text-neutral-900"><?php _e( 'The real question is not only how much a website costs. It is what kind of structure, design and development the project needs in order to work properly.', 'blackboard_by_zdc' ); ?></p>
                </div>
            </section>
            <hr class="border-black/15 border-t md:my-14 my-10"/>
            <!-- ====================================================
               SECTION 2 — SHORT ANSWER / STARTING POINTS
          ==================================================== -->
            <section aria-labelledby="starting-points-heading">
                <h2 id="starting-points-heading" class="flex font-semibold gap-2 items-center text-xs uppercase mb-4"> <?php _e( 'A useful starting point', 'blackboard_by_zdc' ); ?> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span> </h2>
                <p class="font-light leading-relaxed max-w-xl mb-6 text-base text-neutral-900"><?php _e( 'Projects vary in scope. Each follows the same approach &#8212; structure first, then design and execution &#8212; adapted to scale and complexity.', 'blackboard_by_zdc' ); ?></p>
                <!-- Three-column starting points — editorial, not cards -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/15 bg-white/40 rounded-xs overflow-hidden">
                    <div class="p-5 md:p-6 border-b border-black/15 md:border-b-0 md:border-r border-black/15">
                        <div class="inline-flex items-center bg-stone-900 text-white px-3 py-1.5 text-xs leading-none rounded-xs mb-3 hover:bg-[#a4ab13] hover:text-black transition-colors duration-200">
                            <span class="font-semibold uppercase tracking-wide"><?php _e( 'Foundation', 'blackboard_by_zdc' ); ?></span>
                        </div>
                        <div class="text-base mb-2">
                            <span class="font-normal"><?php _e( 'From', 'blackboard_by_zdc' ); ?> </span>
                            <span class="font-thin"><?php _e( '&euro;3,500', 'blackboard_by_zdc' ); ?></span>
                        </div>
                        <p class="font-light leading-relaxed text-base text-neutral-700"><?php _e( 'A focused build with essential structure, custom design and core functionality.', 'blackboard_by_zdc' ); ?></p>
                    </div>
                    <div class="p-5 md:p-6 border-b border-black/15 md:border-b-0 md:border-r border-black/15">
                        <div class="inline-flex items-center bg-stone-900 text-white px-3 py-1.5 text-xs leading-none rounded-xs mb-3 hover:bg-[#a4ab13] hover:text-black transition-colors duration-200">
                            <span class="font-semibold uppercase tracking-wide"><?php _e( 'Structured', 'blackboard_by_zdc' ); ?></span>
                        </div>
                        <div class="text-base mb-2">
                            <span class="font-normal"><?php _e( 'From', 'blackboard_by_zdc' ); ?> </span>
                            <span class="font-thin"><?php _e( '&euro;4,500', 'blackboard_by_zdc' ); ?></span>
                        </div>
                        <p class="font-light leading-relaxed text-base text-neutral-700"><?php _e( 'A content-driven system with expanded pages, flexible layouts and integrated features.', 'blackboard_by_zdc' ); ?></p>
                    </div>
                    <div class="p-5 md:p-6">
                        <div class="inline-flex items-center bg-stone-900 text-white px-3 py-1.5 text-xs leading-none rounded-xs mb-3 hover:bg-[#a4ab13] hover:text-black transition-colors duration-200">
                            <span class="font-semibold uppercase tracking-wide"><?php _e( 'Extended', 'blackboard_by_zdc' ); ?></span>
                        </div>
                        <div class="text-base mb-2">
                            <span class="font-normal"><?php _e( 'From', 'blackboard_by_zdc' ); ?> </span>
                            <span class="font-thin"><?php _e( '&euro;7,000', 'blackboard_by_zdc' ); ?></span>
                        </div>
                        <p class="font-light leading-relaxed text-base text-neutral-700"><?php _e( 'A more complex system with custom builds, integrations and advanced performance.', 'blackboard_by_zdc' ); ?></p>
                    </div>
                </div>
                <p class="font-light leading-relaxed mt-3 text-neutral-600 text-xs"><?php _e( 'These are starting points, not fixed packages. The right scale is defined after understanding the project.', 'blackboard_by_zdc' ); ?></p>
            </section>
            <hr class="border-black/15 border-t md:my-14 my-10"/>
            <!-- ====================================================
               SECTION 3 — WHY PRICES VARY
          ==================================================== -->
            <section aria-labelledby="why-vary-heading">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <div>
                        <h2 id="why-vary-heading" class="flex font-semibold gap-2 items-center text-xs uppercase mb-4"> <?php _e( 'Why prices vary so much', 'blackboard_by_zdc' ); ?> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span> </h2>
                        <p class="font-light leading-relaxed text-base text-neutral-900"><?php _e( 'The cost of a website changes because the work behind it changes. Two websites may look similar from the outside, but they can be completely different in structure, flexibility, speed, content logic and long-term maintainability.', 'blackboard_by_zdc' ); ?></p>
                    </div>
                    <div class="space-y-4">
                        <div class="border-t border-black/15 pt-3">
                            <h3 class="font-semibold text-xs uppercase mb-1"><?php _e( 'Structure', 'blackboard_by_zdc' ); ?></h3>
                            <p class="font-light leading-relaxed text-base text-neutral-700"><?php _e( 'Information architecture, navigation, content hierarchy and key decisions before design begins.', 'blackboard_by_zdc' ); ?></p>
                        </div>
                        <div class="border-t border-black/15 pt-3">
                            <h3 class="font-semibold text-xs uppercase mb-1"><?php _e( 'Design', 'blackboard_by_zdc' ); ?></h3>
                            <p class="font-light leading-relaxed text-base text-neutral-700"><?php _e( 'Custom layout, visual system, responsive behaviour, interaction details and consistency across pages.', 'blackboard_by_zdc' ); ?></p>
                        </div>
                        <div class="border-t border-black/15 pt-3">
                            <h3 class="font-semibold text-xs uppercase mb-1"><?php _e( 'Development', 'blackboard_by_zdc' ); ?></h3>
                            <p class="font-light leading-relaxed text-base text-neutral-700"><?php _e( 'Front-end quality, CMS implementation, performance, accessibility, technical precision and future editing logic.', 'blackboard_by_zdc' ); ?></p>
                        </div>
                        <div class="border-t border-black/15 pt-3">
                            <h3 class="font-semibold text-xs uppercase mb-1"><?php _e( 'Content', 'blackboard_by_zdc' ); ?></h3>
                            <p class="font-light leading-relaxed text-base text-neutral-700"><?php _e( 'Number of pages, content preparation, editorial structure, blog or journal systems, multilingual content and media management.', 'blackboard_by_zdc' ); ?></p>
                        </div>
                        <div class="border-t border-black/15 pt-3">
                            <h3 class="font-semibold text-xs uppercase mb-1"><?php _e( 'Integrations', 'blackboard_by_zdc' ); ?></h3>
                            <p class="font-light leading-relaxed text-base text-neutral-700"><?php _e( 'Forms, newsletter, analytics, CRM, e-commerce, booking systems, third-party tools or custom workflows.', 'blackboard_by_zdc' ); ?></p>
                        </div>
                        <div class="border-t border-black/15 pt-3">
                            <h3 class="font-semibold text-xs uppercase mb-1"><?php _e( 'Performance and SEO foundations', 'blackboard_by_zdc' ); ?></h3>
                            <p class="font-light leading-relaxed text-base text-neutral-700"><?php _e( 'Speed, technical structure, metadata, indexability, clean markup and search visibility foundations.', 'blackboard_by_zdc' ); ?></p>
                        </div>
                        <div class="border-t border-black/15 pt-3">
                            <h3 class="font-semibold text-xs uppercase mb-1"><?php _e( 'Care and maintenance', 'blackboard_by_zdc' ); ?></h3>
                            <p class="font-light leading-relaxed text-base text-neutral-700"><?php _e( 'Hosting, updates, backup, monitoring, adjustments and ongoing support after launch.', 'blackboard_by_zdc' ); ?></p>
                        </div>
                    </div>
                </div>
            </section>
            <hr class="border-black/15 border-t md:my-14 my-10"/>
            <!-- ====================================================
               SECTION 4 — WHAT A LOW-COST WEBSITE USUALLY MEANS
               SECTION 5 — WHAT A PROFESSIONAL WEBSITE INCLUDES
               Two-column comparison
          ==================================================== -->
            <section aria-labelledby="comparison-heading">
                <h2 id="comparison-heading" class="sr-only"><?php _e( 'What is and isn\'t included', 'blackboard_by_zdc' ); ?></h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Low-cost -->
                    <div class="bg-white/80 border border-black/10 p-5 md:p-6 rounded-xs">
                        <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"> <?php _e( 'What is usually missing in a low-cost website', 'blackboard_by_zdc' ); ?> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span> </h3>
                        <p class="font-light leading-relaxed mb-4 text-base text-neutral-700"><?php _e( 'A very low price is not always wrong, but it usually means the scope is limited. The site may exist online, but some decisions are often skipped.', 'blackboard_by_zdc' ); ?></p>
                        <ul class="font-light space-y-2 text-base text-neutral-900">
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Little or no structure before building', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Template-based design', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Generic layouts', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Limited flexibility', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Weak content hierarchy', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Basic SEO setup only', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Limited performance work', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'No long-term maintenance logic', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'No documentation or handover', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Difficult future evolution', 'blackboard_by_zdc' ); ?>
                            </li>
                        </ul>
                        <p class="font-light leading-relaxed mt-4 text-neutral-600 text-xs"><?php _e( 'The problem is not the low price itself. The problem is not knowing what has been excluded.', 'blackboard_by_zdc' ); ?></p>
                    </div>
                    <!-- Professional -->
                    <div class="bg-white/80 border border-black/10 p-5 md:p-6 rounded-xs">
                        <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"> <?php _e( 'What a professional website should include', 'blackboard_by_zdc' ); ?> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span> </h3>
                        <p class="font-light leading-relaxed mb-4 text-base text-neutral-700"><?php _e( 'A professional website should not only look finished. It should be understandable, manageable and able to evolve.', 'blackboard_by_zdc' ); ?></p>
                        <h4 class="font-semibold text-xs uppercase text-neutral-600 mb-2"><?php _e( 'Before design', 'blackboard_by_zdc' ); ?></h4>
                        <ul class="font-light mb-4 space-y-1.5 text-base text-neutral-900">
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Scope clarification', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Content and navigation logic', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Key user paths', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Functional requirements', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Technical direction', 'blackboard_by_zdc' ); ?>
                            </li>
                        </ul>
                        <h4 class="font-semibold text-xs uppercase text-neutral-600 mb-2"><?php _e( 'During design and development', 'blackboard_by_zdc' ); ?></h4>
                        <ul class="font-light mb-4 space-y-1.5 text-base text-neutral-900">
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Custom design system', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Responsive layouts', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'CMS structure', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Performance-conscious development', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Accessibility-aware implementation', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Search-ready foundations', 'blackboard_by_zdc' ); ?>
                            </li>
                        </ul>
                        <h4 class="font-semibold text-xs uppercase text-neutral-600 mb-2"><?php _e( 'After launch', 'blackboard_by_zdc' ); ?></h4>
                        <ul class="font-light space-y-1.5 text-base text-neutral-900">
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Testing', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Handover', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Documentation', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Maintenance options', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Future adjustments when needed', 'blackboard_by_zdc' ); ?>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <hr class="border-black/15 border-t md:my-14 my-10"/>
            <!-- ====================================================
               SECTION 6 — PROJECT SCALES (DETAILED)
          ==================================================== -->
            <!-- ====================================================
               SECTION 7 — WHAT IS NOT ALWAYS INCLUDED
          ==================================================== -->
            <section aria-labelledby="clarify-heading">
                <h2 id="clarify-heading" class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"> <?php _e( 'What should be clarified separately', 'blackboard_by_zdc' ); ?> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span> </h2>
                <p class="font-light leading-relaxed max-w-xl mb-6 text-base text-neutral-900"><?php _e( 'Some costs are not always part of the initial website build and should be made explicit before starting.', 'blackboard_by_zdc' ); ?></p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-0 border border-black/15 bg-white/40 rounded-xs overflow-hidden">
                    <div class="p-5 md:p-6 border-b border-black/15 md:border-r">
                        <h3 class="font-semibold text-xs uppercase mb-1"><?php _e( 'Domain', 'blackboard_by_zdc' ); ?></h3>
                        <p class="font-light leading-relaxed text-base text-neutral-700"><?php _e( 'Usually a small annual cost, but ownership and renewal should be clear from the start.', 'blackboard_by_zdc' ); ?></p>
                    </div>
                    <div class="p-5 md:p-6 border-b border-black/15">
                        <h3 class="font-semibold text-xs uppercase mb-1"><?php _e( 'Hosting', 'blackboard_by_zdc' ); ?></h3>
                        <p class="font-light leading-relaxed text-base text-neutral-700"><?php _e( 'Depends on performance, traffic, security and management needs. Can be self-managed or included in a care plan.', 'blackboard_by_zdc' ); ?></p>
                    </div>
                    <div class="p-5 md:p-6 border-b border-black/15 md:border-r">
                        <h3 class="font-semibold text-xs uppercase mb-1"><?php _e( 'Maintenance', 'blackboard_by_zdc' ); ?></h3>
                        <p class="font-light leading-relaxed text-base text-neutral-700"><?php _e( 'Updates, monitoring, backups and technical care after launch. Offered as a separate care arrangement.', 'blackboard_by_zdc' ); ?></p>
                    </div>
                    <div class="p-5 md:p-6 border-b border-black/15">
                        <h3 class="font-semibold text-xs uppercase mb-1"><?php _e( 'Content production', 'blackboard_by_zdc' ); ?></h3>
                        <p class="font-light leading-relaxed text-base text-neutral-700"><?php _e( 'Copywriting, photography, image editing, translations or editorial planning are separate from the build.', 'blackboard_by_zdc' ); ?></p>
                    </div>
                    <div class="p-5 md:p-6 border-b border-black/15 md:border-r md:border-b-0">
                        <h3 class="font-semibold text-xs uppercase mb-1"><?php _e( 'SEO strategy', 'blackboard_by_zdc' ); ?></h3>
                        <p class="font-light leading-relaxed text-base text-neutral-700"><?php _e( 'Search-ready foundations can be included, but ongoing SEO work is a separate and ongoing activity.', 'blackboard_by_zdc' ); ?></p>
                    </div>
                    <div class="p-5 md:p-6">
                        <h3 class="font-semibold text-xs uppercase mb-1"><?php _e( 'Marketing', 'blackboard_by_zdc' ); ?></h3>
                        <p class="font-light leading-relaxed text-base text-neutral-700"><?php _e( 'Campaigns, ads, email flows and content distribution are distinct from building the website itself.', 'blackboard_by_zdc' ); ?></p>
                    </div>
                </div>
            </section>
            <hr class="border-black/15 border-t md:my-14 my-10"/>
            <!-- ====================================================
               SECTION 8 — WHEN IT MAKES SENSE TO INVEST MORE
               SECTION 9 — HOW TO READ A QUOTE
               Two-column layout
          ==================================================== -->
            <section aria-labelledby="invest-more-heading">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <!-- Invest more -->
                    <div>
                        <h2 id="invest-more-heading" class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"> <?php _e( 'When a higher budget makes sense', 'blackboard_by_zdc' ); ?> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span> </h2>
                        <p class="font-light leading-relaxed mb-4 text-base text-neutral-900"><?php _e( 'A higher budget is justified when the website is expected to support more than a basic presence.', 'blackboard_by_zdc' ); ?></p>
                        <ul class="font-light space-y-2 text-base text-neutral-900">
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'The site needs to generate qualified enquiries', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Content will grow over time', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'The brand needs stronger digital credibility', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'There are multiple audiences or services', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'The site must be multilingual', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'There are integrations with external tools', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Performance and search visibility matter', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'The system must be easy to maintain and evolve', 'blackboard_by_zdc' ); ?>
                            </li>
                        </ul>
                        <p class="font-light leading-relaxed mt-4 text-neutral-600 text-xs"><?php _e( 'In these cases, the website is not just a page online. It becomes part of how the organisation works, communicates and is understood.', 'blackboard_by_zdc' ); ?></p>
                    </div>
                    <!-- How to read a quote -->
                    <div>
                        <h2 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"> <?php _e( 'How to read a website quote', 'blackboard_by_zdc' ); ?> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span> </h2>
                        <p class="font-light leading-relaxed mb-4 text-base text-neutral-900"><?php _e( 'A useful quote should make the work visible. It should not only state a final number.', 'blackboard_by_zdc' ); ?></p>
                        <ul class="font-light space-y-2 text-base text-neutral-900">
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'What is included?', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'What is excluded?', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'How many pages or templates are included?', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Is the design custom or template-based?', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Is the CMS structure defined?', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Are performance and SEO foundations included?', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Who owns the domain, hosting and accounts?', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'Is handover included?', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li class="border-t border-black/10 pt-2">
                                <?php _e( 'What happens after launch?', 'blackboard_by_zdc' ); ?>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <hr class="border-black/15 border-t md:my-14 my-10"/>
            <!-- ====================================================
               SECTION 10 — FINAL CTA
          ==================================================== -->
            <section aria-labelledby="cta-heading" class="mb-16 md:mb-20">
                <div class="w-full max-w-none">
                    <h2 id="cta-heading" class="font-bold leading-tight lg:text-5xl mb-4 md:text-4xl text-3xl"><?php _e( 'Need to understand the right scale?', 'blackboard_by_zdc' ); ?></h2>
                    <p class="font-light leading-relaxed mb-2 text-base text-neutral-900"><?php _e( 'The starting points above are useful references, but the right budget depends on what the website needs to hold, communicate and support.', 'blackboard_by_zdc' ); ?></p>
                    <p class="font-light leading-relaxed mb-8 text-base text-neutral-700"><?php _e( 'Send us a few details and we will help clarify the right scale.', 'blackboard_by_zdc' ); ?></p>
                    <div class="flex flex-col items-start gap-4">
                        <a href="mailto:blackboard@zdcstudio.com?subject=Start%20a%20Project" role="button" class="group bg-black flex flex-col font-normal gap-2 px-4 py-4 rounded-xs shrink-0 text-center text-sm text-white tracking-wide transition-colors w-full focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white/60 focus:outline-none hover:bg-[#a4ab13] md:w-auto"> <h3 class="font-light group-hover:text-black leading-relaxed md:max-w-lg text-slate-200 text-xs"><?php _e( 'Each project starts with a short exchange to clarify scope, direction and complexity.', 'blackboard_by_zdc' ); ?></h3> <h5 class="font-normal text-lg uppercase group-hover:text-black"><?php _e( 'Start a project', 'blackboard_by_zdc' ); ?></h5> </a>
                        <a href="services.html" class="duration-200 font-light hover:text-black text-neutral-700 text-xs transition-colors underline underline-offset-2"><?php _e( 'View Services', 'blackboard_by_zdc' ); ?></a>
                    </div>
                </div>
            </section>
        </div>
        <!-- /.col-span-9 -->
    </div>
    <!-- /.grid -->
</section>