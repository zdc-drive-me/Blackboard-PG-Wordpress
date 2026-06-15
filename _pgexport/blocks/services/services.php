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
                        <img src="<?php echo PG_Blocks_v4::getImageUrl( $args, 'hero_image', 'full' ) ?>" alt="<?php echo PG_Blocks_v4::getImageField( $args, 'hero_image', 'alt', true); ?>" class="<?php echo (PG_Blocks_v4::getImageField( $args, 'hero_image', 'id', true) ? ('wp-image-' . PG_Blocks_v4::getImageField( $args, 'hero_image', 'id', true)) : '') ?> h-70 object-cover w-screen"/>
                    <?php endif; ?>
                    <?php if ( PG_Blocks_v4::getImageSVG( $args, 'hero_image', false) ) : ?>
                        <?php echo PG_Blocks_v4::mergeInlineSVGAttributes( PG_Blocks_v4::getImageSVG( $args, 'hero_image' ), array( 'class' => 'h-70 object-cover w-screen' ) ) ?>
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
                <div class="border-black/10 border-t flex flex-col items-center mt-6 pt-5 space-y-4">
                    <a class="font-thin leading-snug max-w-xl text-black text-xs" href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v4::getLinkUrl( $args, 'link' ) ?>"><?php echo PG_Blocks_v4::getAttribute( $args, 'label' ) ?></a>
                    <a href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v4::getLinkUrl( $args, 'start_project_email_link' ) ?>" role="button" class="group bg-black flex flex-col font-normal gap-2 px-4 py-4 rounded-xs shrink-0 text-center text-sm text-white tracking-wide transition-colors w-full focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white/60 focus:outline-none hover:bg-[#a4ab13] md:w-auto"> <h3 class="font-thin leading-relaxed text-slate-200 text-xs md:max-w-lg group-hover:text-black"><?php _e( 'Each projects begins with a conversation', 'blackboard_by_zdc' ); ?> </h3> <h5 class="font-normal text-lg uppercase group-hover:text-black"> <?php _e( 'start a project', 'blackboard_by_zdc' ); ?></h5> </a>
                </div>
            </section>
            <!-- ====================================================
                             BLOCK 3 — PROJECT SCALES (PRICING)
                             Arrives with context now established above.
                             Language cleaned: no jargon, progressive complexity.
                             Descriptions rewritten for non-technical readers.
                        ==================================================== -->
            <!-- ====================================================
                             BLOCK 4 — HOSTING & CARE
                             Directly follows pricing — logically connected.
                             Restructured: two paths, not three tiers.
                             Logic: Care plan leads, hosting is included in it.
                             Design: workflow-card style (matching "How we work"),
                             not pricing table style.
                             Human touchpoints made explicit (content credit).
                        ==================================================== -->
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