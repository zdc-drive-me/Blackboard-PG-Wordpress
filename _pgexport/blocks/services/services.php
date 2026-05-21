<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "min-h-screen min-w-0", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="grid grid-cols-1 min-w-0 gap-4 md:gap-8 pl-4 pr-4 md:grid-cols-12 md:pl-6 md:pr-6">
        <!-- ============================================================
                         SIDEBAR
                         Role: sticky philosophical anchor. Single statement + contact.
                         The about block is stripped to what matters here.
                    ============================================================ -->
        <aside class="col-span-12 min-w-0 self-start top-[9vh] md:col-span-3 md:sticky" aria-labelledby="sidebar-heading">
            <div>
                <section class="mb-6" aria-labelledby="about-us-heading">
                    <div class="border-solid">
                        <div class="flex justify-between items-center md:block">
                            <h3 id="about-us-heading" class="flex font-semibold gap-2 items-center text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'about_heading' ) ?></h3>
                            <!-- Clock mobile -->
                            <div class="md:hidden flex justify-end min-w-0 flex-shrink-0">
                                <h3 id="dynamic-date-mobile" class="flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap"> <span id="date-display-mobile" class="font-sans text-right flex items-center gap-1"> <span id="date-text-mobile" class="font-sans"></span> <span>•</span> <span id="time-text-mobile" class="font-mono tabular-nums"></span> </span> </h3>
                            </div>
                        </div>
                        <div class="bg-custom_pink-200 mt-8 p-2.5">
                            <!-- PRIMARY ANCHOR STATEMENT -->
                            <!-- Stripped to one authoritative statement. -->
                            <!-- Operational details (email, location) moved to footer or contact page. -->
                            <div>
                                <h5 class="font-semibold mb-12 text-4xl"><?php echo PG_Blocks_v4::getAttribute( $args, 'heading_text' ) ?></h5>
                            </div>
                            <div>
                                <h3 class="font-semibold leading-relaxed mb-0 text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'sidebar_block_1_title' ) ?></h3>
                                <p class="text-sm leading-relaxed mb-6"><?php echo PG_Blocks_v4::getAttribute( $args, 'sidebar_p1' ) ?></p>
                            </div>
                            <div>
                                <h3 class="font-semibold mb-0 text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'sidebar_block_2_title' ) ?></h3>
                                <p class="text-sm leading-relaxed mb-6"><?php echo PG_Blocks_v4::getAttribute( $args, 'sidebar_p2' ) ?></p>
                            </div>
                            <div>
                                <h3 class="font-semibold leading-relaxed mb-0 text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'sidebar_block_3_title' ) ?></h3>
                                <p class="text-sm leading-relaxed mb-6"><?php echo PG_Blocks_v4::getAttribute( $args, 'sidebar_p3' ) ?></p>
                            </div>
                            <div>
                                <h3 class="font-semibold leading-relaxed mb-0 text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'sidebar_block_4_title' ) ?></h3>
                                <p class="text-sm leading-relaxed mb-6"><?php echo PG_Blocks_v4::getAttribute( $args, 'sidebar_p4' ) ?></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </aside>
        <!-- ============================================================
                         MAIN CONTENT COLUMN
                    ============================================================ -->
        <div id="main-content" class="col-span-12 min-w-0 md:col-span-9">
            <!-- Section label + clock -->
            <div class="hidden md:flex justify-between items-start gap-2 min-w-0">
                <h2 class="flex font-semibold gap-2 items-center text-xs uppercase min-w-0"><?php echo PG_Blocks_v4::getAttribute( $args, 'top_label' ) ?></h2>
                <div class="flex justify-end min-w-0 flex-shrink-0">
                    <h3 id="dynamic-date" class="flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap"> <span id="date-display" class="font-sans text-right flex items-center gap-1"> <span id="date-text" class="font-sans"></span> <span>•</span> <span id="time-text" class="font-mono tabular-nums"></span> </span> </h3>
                </div>
            </div>
            <!-- ====================================================
                             BLOCK 1 — HERO / ENTRY POINT
                             Purpose: services entry. Not a methodology statement —
                             that lives in the sidebar. This block establishes how
                             every engagement starts: a direct conversation.
                        ==================================================== -->
            <div class="gap-4 grid items-center max-w-6xl mt-0 mx-auto md:gap-6 lg:gap-6 md:grid-cols-[minmax(0,2fr),minmax(0,1.4fr)] md:mt-8">
                <figure class="overflow-hidden rounded-xs">
                    <?php if ( !PG_Blocks_v4::getImageSVG( $args, 'hero_image', false) && PG_Blocks_v4::getImageUrl( $args, 'hero_image', 'full' ) ) : ?>
                        <img src="<?php echo PG_Blocks_v4::getImageUrl( $args, 'hero_image', 'full' ) ?>" alt="<?php echo PG_Blocks_v4::getImageField( $args, 'hero_image', 'alt', true); ?>" class="<?php echo (PG_Blocks_v4::getImageField( $args, 'hero_image', 'id', true) ? ('wp-image-' . PG_Blocks_v4::getImageField( $args, 'hero_image', 'id', true)) : '') ?> h-70 object-cover w-full"/>
                    <?php endif; ?>
                    <?php if ( PG_Blocks_v4::getImageSVG( $args, 'hero_image', false) ) : ?>
                        <?php echo PG_Blocks_v4::mergeInlineSVGAttributes( PG_Blocks_v4::getImageSVG( $args, 'hero_image' ), array( 'class' => 'h-70 object-cover w-full' ) ) ?>
                    <?php endif; ?>
                </figure>
            </div>
            <!-- ====================================================
                             BLOCK 2 — STRATEGIC SUPPORT
                             Moved before pricing. Establishes: we are consultants
                             first, builders second. Sets context for the plans below.
                             Reframed from "add-on list" to "how we think".
                        ==================================================== -->
            <section class="mt-12" aria-labelledby="strategic-support-heading">
                <!-- Four thinking areas — horizontal cards, full width -->
                <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <div class="bg-white/60 border border-gray-200 p-4 rounded-xs">
                        <h5 class="block font-semibold mb-1 text-2xl tracking-wide uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'plus1_title' ) ?></h5>
                        <span class="text-sm font-thin text-gray-700 leading-relaxed"><?php echo PG_Blocks_v4::getAttribute( $args, 'plus1_desc' ) ?></span>
                    </div>
                    <div class="bg-white/60 border border-gray-200 p-4 rounded-xs">
                        <h5 class="block font-semibold mb-1 text-2xl tracking-wide uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'plus2_title' ) ?></h5>
                        <span class="text-sm font-thin text-gray-700 leading-relaxed"><?php echo PG_Blocks_v4::getAttribute( $args, 'plus2_desc' ) ?></span>
                    </div>
                    <div class="bg-white/60 border border-gray-200 p-4 rounded-xs">
                        <h5 class="block font-semibold mb-1 text-2xl tracking-wide uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'plus3_title' ) ?></h5>
                        <span class="text-sm font-thin text-gray-700 leading-relaxed"><?php echo PG_Blocks_v4::getAttribute( $args, 'plus3_desc' ) ?></span>
                    </div>
                    <div class="bg-white/60 border border-gray-200 p-4 rounded-xs">
                        <h5 class="block uppercase font-semibold mb-1 tracking-wide text-2xl"><?php echo PG_Blocks_v4::getAttribute( $args, 'plus4_title' ) ?></h5>
                        <span class="text-sm font-thin text-gray-700 leading-relaxed"><?php echo PG_Blocks_v4::getAttribute( $args, 'plus4_desc' ) ?></span>
                    </div>
                </div>
            </section>
            <!-- ====================================================
                             BLOCK 3 — PROJECT SCALES (PRICING)
                             Arrives with context now established above.
                             Language cleaned: no jargon, progressive complexity.
                             Descriptions rewritten for non-technical readers.
                        ==================================================== -->
            <section class="mt-12" aria-labelledby="plans-heading">
                <div class="mb-6">
                    <h2 class="flex font-semibold gap-2 items-center text-xs uppercase min-w-0" id="plans-heading"><?php echo PG_Blocks_v4::getAttribute( $args, 'plans_heading' ) ?></h2>
                    <p class="mt-2 text-sm text-gray-800 leading-relaxed"><?php echo PG_Blocks_v4::getAttribute( $args, 'plans_intro' ) ?></p>
                </div>
                <div class="gap-6 grid grid-cols-1 pb-0 md:grid-cols-3">
                    <!-- FOUNDATION -->
                    <div class="flex flex-col h-full">
                        <div class="mb-4">
                            <div class="inline-flex items-center bg-stone-900 text-white hover:bg-[#a4ab13] hover:text-white transition-colors duration-200 px-4 py-2 text-lg leading-none rounded-xs">
                                <h3 class="font-semibold leading-none text-sm"> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg1_title' ) ?></span> </h3>
                            </div>
                        </div>
                        <div class="space-y-2 text-sm flex-grow">
                            <div>
                                <span class="font-normal"><?php _e( 'From&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg1_price' ) ?></span>
                            </div>
                            <p class="font-thin text-gray-700 leading-relaxed pb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg1_desc' ) ?></p>
                            <hr class="border-t border-black/10 my-2">
                            <div>
                                <span class="font-normal"><?php _e( 'Pages:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg1_pages' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Design:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg1_design' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Contact:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg1_forms' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Blog:', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg1_blog' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Newsletter:', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg1_newsletter' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Search visibility:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg1_seo' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Speed:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg1_perf' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Analytics:', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg1_analytics' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Accessibility:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg1_access' ) ?></span>
                            </div>
                        </div>
                    </div>
                    <!-- STRUCTURED -->
                    <!-- EXTENDED -->
                    <div class="flex flex-col h-full">
                        <div class="mb-4">
                            <div class="inline-flex items-center bg-stone-900 text-white hover:bg-[#a4ab13] hover:text-white transition-colors duration-200 px-4 py-2 text-lg leading-none rounded-xs">
                                <h3 class="font-semibold leading-none text-sm"> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_title' ) ?></span> </h3>
                            </div>
                        </div>
                        <div class="space-y-2 text-sm flex-grow">
                            <div>
                                <span class="font-normal"><?php _e( 'From&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_price' ) ?></span>
                            </div>
                            <p class="font-thin text-gray-700 leading-relaxed pb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_desc' ) ?></p>
                            <hr class="border-t border-black/10 my-2">
                            <div>
                                <span class="font-normal"><?php _e( 'Pages:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_pages' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Design:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_design' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Contact:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_forms' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Blog:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_blog' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Newsletter:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_newsletter' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Search visibility:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_seo' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Speed:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_perf' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Analytics:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_analytics' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Accessibility:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_access' ) ?></span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col h-full">
                        <div class="mb-4">
                            <div class="inline-flex items-center bg-stone-900 text-white hover:bg-[#a4ab13] hover:text-white transition-colors duration-200 px-4 py-2 text-lg leading-none rounded-xs">
                                <h3 class="font-semibold leading-none text-sm"> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_title' ) ?></span> </h3>
                            </div>
                        </div>
                        <div class="space-y-2 text-sm flex-grow">
                            <div>
                                <span class="font-normal"><?php _e( 'From&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_price' ) ?></span>
                            </div>
                            <p class="font-thin text-gray-700 leading-relaxed pb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_desc' ) ?></p>
                            <hr class="border-t border-black/10 my-2">
                            <div>
                                <span class="font-normal"><?php _e( 'Pages:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_pages' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Design:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_design' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Contact:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_forms' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Blog:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_blog' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Newsletter:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_newsletter' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Search visibility:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_seo' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Speed:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_perf' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Analytics:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_analytics' ) ?></span>
                            </div>
                            <div>
                                <span class="font-normal"><?php _e( 'Accessibility:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_access' ) ?></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-black/10 border-t flex flex-col items-center mt-6 pt-5 space-y-4">
                    <a class="font-thin leading-snug max-w-xl text-black text-xs" href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v4::getLinkUrl( $args, 'link' ) ?>"><?php echo PG_Blocks_v4::getAttribute( $args, 'label' ) ?></a>
                    <a href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v4::getLinkUrl( $args, 'start_project_email_link' ) ?>" role="button" class="group bg-black flex flex-col font-normal gap-2 px-4 py-4 rounded-xs shrink-0 text-center text-sm text-white tracking-wide transition-colors w-full focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white/60 focus:outline-none hover:bg-[#a4ab13] md:w-auto"> <h3 class="font-thin leading-relaxed text-slate-200 text-xs md:max-w-lg group-hover:text-black"><?php _e( 'Each projects begins with a conversation', 'blackboard_by_zdc' ); ?> </h3> <h5 class="font-normal text-lg uppercase group-hover:text-black"> <?php _e( 'start a project', 'blackboard_by_zdc' ); ?></h5> </a>
                </div>
            </section>
            <!-- ====================================================
                             BLOCK 4 — HOSTING & CARE
                             Directly follows pricing — logically connected.
                             Restructured: two paths, not three tiers.
                             Logic: Care plan leads, hosting is included in it.
                             Design: workflow-card style (matching "How we work"),
                             not pricing table style.
                             Human touchpoints made explicit (content credit).
                        ==================================================== -->
            <section class="mt-12" aria-labelledby="care-heading">
                <div class="mb-6">
                    <h2 class="flex font-semibold gap-2 items-center text-xs uppercase min-w-0" id="care-heading"><?php echo PG_Blocks_v4::getAttribute( $args, 'hosting_title' ) ?></h2>
                    <!-- 
                                     Rewritten intro: establishes the logic of why care exists,
                                     presents two paths clearly, avoids commodity language.
                                -->
                    <p class="mt-2 text-sm text-gray-800 max-w-xl leading-relaxed"><?php echo PG_Blocks_v4::getAttribute( $args, 'hosting_intro' ) ?></p>
                </div>
                <!-- TWO PATHS — workflow card style, not pricing table -->
                <div class="space-y-6 text-sm text-gray-800">
                    <!-- PATH A: Self-managed -->
                    <div class="bg-white/60 border border-gray-200 p-4 rounded-xs md:p-5">
                        <div class="flex items-baseline justify-between gap-2 flex-wrap">
                            <h3 class="text-xs uppercase font-semibold flex items-center gap-2"> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'care1_title' ) ?></span> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3>
                            <span class="text-[11px] text-gray-500 uppercase tracking-wide"><?php echo PG_Blocks_v4::getAttribute( $args, 'care1_tagline' ) ?></span>
                        </div>
                        <p class="mt-3 text-gray-800 leading-relaxed"><?php echo PG_Blocks_v4::getAttribute( $args, 'care1_body' ) ?></p>
                        <div class="mt-4 pt-3 border-t border-black/10">
                            <h4 class="text-[11px] uppercase font-semibold text-gray-700 mb-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'care1_includes_title' ) ?></h4>
                            <ul class="space-y-1 text-gray-700">
                                <?php echo PG_Blocks_v4::getAttribute( $args, 'care1_includes' ) ?>
                            </ul>
                        </div>
                    </div>
                    <!-- PATH B: Managed Care -->
                    <div class="bg-white/60 border border-gray-200 p-4 rounded-xs md:p-5">
                        <div class="flex items-baseline justify-between gap-2 flex-wrap">
                            <h3 class="text-xs uppercase font-semibold flex items-center gap-2"> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'care2_title' ) ?></span> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3>
                            <span class="text-[11px] text-gray-500 uppercase tracking-wide"><?php echo PG_Blocks_v4::getAttribute( $args, 'care2_price' ) ?></span>
                        </div>
                        <p class="mt-3 text-gray-800 leading-relaxed"><?php echo PG_Blocks_v4::getAttribute( $args, 'care2_body' ) ?></p>
                        <div class="mt-4 pt-3 border-t border-black/10">
                            <h4 class="text-[11px] uppercase font-semibold text-gray-700 mb-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'care2_includes_title' ) ?></h4>
                            <ul class="space-y-1 text-gray-700">
                                <?php echo PG_Blocks_v4::getAttribute( $args, 'care2_includes' ) ?>
                            </ul>
                            <p class="mt-3 text-[11px] text-gray-500 leading-relaxed"><?php echo PG_Blocks_v4::getAttribute( $args, 'care2_note' ) ?></p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ====================================================
                             BLOCK 5 — HOW WE WORK
                             Moved to last position. Now functions as a closing,
                             "this is how it actually unfolds" section.
                             Redundancy removed: no sub-lists, no overlap with
                             the Care section or the hero. Four steps, tightened.
                             The four V2 names are preserved.
                        ==================================================== -->
        </div>
        <!-- /#main-content -->
    </div>
    <!-- /.grid -->
</section>