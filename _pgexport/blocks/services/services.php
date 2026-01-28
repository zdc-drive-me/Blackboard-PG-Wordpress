<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "min-h-screen min-w-0", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="grid grid-cols-1 min-w-0 gap-4 md:gap-8 pl-4 pr-4 md:grid-cols-12 md:pl-6 md:pr-6">
        <!-- Sidebar -->
        <aside class="col-span-12 min-w-0 self-start top-[9vh] md:col-span-3 md:sticky" aria-labelledby="sidebar-heading">
            <div>
                <section class="mb-6" aria-labelledby="about-us-heading">
                    <div class="border-solid">
                        <div class="flex justify-between items-center md:block">
                            <h3 id="about-us-heading" class="flex font-semibold gap-2 items-center text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'about_heading' ) ?></h3>
                            <!-- Clock for mobile - visible only on small screens -->
                            <div class="md:hidden flex justify-end min-w-0 flex-shrink-0">
                                <h3 id="dynamic-date-mobile" class="flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap"> <span id="date-display-mobile" class="font-sans text-right flex items-center gap-1"> <span id="date-text-mobile" class="font-sans"></span> <span>•</span> <span id="time-text-mobile" class="font-mono tabular-nums"></span> </span> </h3>
                            </div>
                        </div>
                        <div class="bg-custom_pink-200 mt-6 p-2.5">
                            <h1 class="font-bold mb-6 text-4xl"><?php echo PG_Blocks_v4::getAttribute( $args, 'sidebar_h1' ) ?></h1>
                            <h2 class="font-thin mb-6 text-sm"><?php echo PG_Blocks_v4::getAttribute( $args, 'sidebar_intro' ) ?></h2>
                            <p class="mb-6 text-sm"><?php echo PG_Blocks_v4::getAttribute( $args, 'sidebar_p1' ) ?></p>
                            <p class="mb-6 text-sm"><?php echo PG_Blocks_v4::getAttribute( $args, 'sidebar_p2' ) ?></p>
                            <p class="mb-6 text-sm"><?php echo PG_Blocks_v4::getAttribute( $args, 'sidebar_p3' ) ?></p>
                            <p class="mb-6 text-sm"><?php echo PG_Blocks_v4::getAttribute( $args, 'sidebar_clients' ) ?></p>
                            <p class="mb-6 text-sm"><?php echo PG_Blocks_v4::getAttribute( $args, 'sidebar_parent' ) ?></p>
                            <p class="mb-6 text-sm"><?php echo PG_Blocks_v4::getAttribute( $args, 'sidebar_location' ) ?></p>
                            <p class="mb-0 text-sm"><?php echo PG_Blocks_v4::getAttribute( $args, 'sidebar_contact_line' ) ?></p>
                        </div>
                    </div>
                </section>
            </div>
        </aside>
        <!-- Main Content -->
        <div id="main-content" class="col-span-12 min-w-0 md:col-span-9">
            <!-- Section label + clock -->
            <div class="hidden md:flex justify-between items-start gap-2 min-w-0">
                <h2 class="flex font-semibold gap-2 items-center text-xs uppercase min-w-0"><?php echo PG_Blocks_v4::getAttribute( $args, 'top_label' ) ?></h2>
                <div class="flex justify-end min-w-0 flex-shrink-0">
                    <h3 id="dynamic-date" class="flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap"> <span id="date-display" class="font-sans text-right flex items-center gap-1"> <span id="date-text" class="font-sans"></span> <span>•</span> <span id="time-text" class="font-mono tabular-nums"></span> </span> </h3>
                </div>
            </div>
            <!-- Hero intro + image -->
            <div class="gap-4 grid items-center max-w-6xl mt-8 mx-auto md:gap-6 lg:gap-6 md:grid-cols-[minmax(0,2fr),minmax(0,1.4fr)]">
                <div>
                    <h1 class="font-bold mb-3 text-4xl uppercase md:text-4xl"><?php echo PG_Blocks_v4::getAttribute( $args, 'hero_title' ) ?></h1>
                    <p class="text-sm text-gray-800"><?php echo PG_Blocks_v4::getAttribute( $args, 'hero_text' ) ?></p>
                </div>
                <figure class="hidden overflow-hidden rounded-xs md:block">
                    <?php if ( !PG_Blocks_v4::getImageSVG( $args, 'hero_image', false) && PG_Blocks_v4::getImageUrl( $args, 'hero_image', 'full' ) ) : ?>
                        <img src="<?php echo PG_Blocks_v4::getImageUrl( $args, 'hero_image', 'full' ) ?>" alt="<?php echo PG_Blocks_v4::getImageField( $args, 'hero_image', 'alt', true); ?>" class="<?php echo (PG_Blocks_v4::getImageField( $args, 'hero_image', 'id', true) ? ('wp-image-' . PG_Blocks_v4::getImageField( $args, 'hero_image', 'id', true)) : '') ?> h-60 object-cover w-full"/>
                    <?php endif; ?>
                    <?php if ( PG_Blocks_v4::getImageSVG( $args, 'hero_image', false) ) : ?>
                        <?php echo PG_Blocks_v4::mergeInlineSVGAttributes( PG_Blocks_v4::getImageSVG( $args, 'hero_image' ), array( 'class' => 'h-60 object-cover w-full' ) ) ?>
                    <?php endif; ?>
                </figure>
            </div>
            <!-- Website packages: Starting / Grow / Pro -->
            <div class="gap-6 grid grid-cols-1 mt-8 pb-0 md:grid-cols-3">
                <!-- Starting -->
                <div class="flex flex-col">
                    <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg1_title' ) ?></span> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3>
                    <div class="space-y-2 text-sm">
                        <div>
                            <span class="font-normal"><?php _e( 'Price:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                            <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg1_price' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Description:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                            <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg1_desc' ) ?></span>
                        </div>
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
                            <span class="font-normal"><?php _e( 'Contact forms:&nbsp;', 'blackboard_by_zdc' ); ?></span>
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
                            <span class="font-normal"><?php _e( 'SEO:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                            <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg1_seo' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Performance:&nbsp;', 'blackboard_by_zdc' ); ?></span>
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
                        <hr class="border-t border-black/10 my-2">
                        <div>
                            <span class="font-normal"><?php _e( 'Hosting &amp; Care:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                            <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg1_care' ) ?></span>
                        </div>
                    </div>
                </div>
                <!-- Grow -->
                <div class="flex flex-col">
                    <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_title' ) ?></span> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3>
                    <div class="space-y-2 text-sm">
                        <div>
                            <span class="font-normal"><?php _e( 'Price:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                            <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_price' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Description:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                            <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_desc' ) ?></span>
                        </div>
                        <hr class="border-t border-black/10 my-2">
                        <div>
                            <span class="font-normal"><?php _e( 'Pages:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_pages' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Design:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_design' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Contact forms:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_forms' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Blog:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_blog' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Newsletter:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_newsletter' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'SEO:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_seo' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Performance:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_perf' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Analytics:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_analytics' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Accessibility:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_access' ) ?></span>
                        </div>
                        <hr class="border-t border-black/10 my-2">
                        <div>
                            <span class="font-normal"><?php _e( 'Hosting &amp; Care:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                            <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg2_care' ) ?></span>
                        </div>
                    </div>
                </div>
                <!-- Pro -->
                <div class="flex flex-col">
                    <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_title' ) ?></span> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3>
                    <div class="space-y-2 text-sm">
                        <div>
                            <span class="font-normal"><?php _e( 'Price:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                            <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_price' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Description:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                            <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_desc' ) ?></span>
                        </div>
                        <hr class="border-t border-black/10 my-2">
                        <div>
                            <span class="font-normal"><?php _e( 'Pages:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_pages' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Design:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_design' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Contact forms:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_forms' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Blog:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_blog' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Newsletter:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_newsletter' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'SEO:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_seo' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Performance:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_perf' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Analytics:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_analytics' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Accessibility:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_access' ) ?></span>
                        </div>
                        <hr class="border-t border-black/10 my-2">
                        <div>
                            <span class="font-normal"><?php _e( 'Hosting &amp; Care:&nbsp;', 'blackboard_by_zdc' ); ?></span>
                            <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pkg3_care' ) ?></span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Workflow -->
            <section class="mt-12">
                <div class="mb-4">
                    <h2 class="flex font-semibold gap-2 items-center text-xs uppercase min-w-0"><?php echo PG_Blocks_v4::getAttribute( $args, 'workflow_title' ) ?></h2>
                    <p class="mt-2 text-sm text-gray-800"><?php echo PG_Blocks_v4::getAttribute( $args, 'workflow_intro' ) ?></p>
                </div>
                <div class="space-y-6 text-sm text-gray-800">
                    <!-- 01 -->
                    <div class="bg-white/60 border border-gray-200 p-4 rounded-xs md:p-5">
                        <div class="flex items-baseline justify-between gap-2">
                            <h3 class="text-xs uppercase font-semibold flex items-center gap-2"> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'wf1_title' ) ?></span> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3>
                            <span class="text-[11px] text-gray-600 uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'wf1_tagline' ) ?></span>
                        </div>
                        <p class="mt-3 text-gray-800"><?php echo PG_Blocks_v4::getAttribute( $args, 'wf1_body' ) ?></p>
                        <div class="mt-3">
                            <h4 class="text-[11px] uppercase font-semibold text-gray-700 mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'wf1_focus_title' ) ?></h4>
                            <div>
                                <?php echo PG_Blocks_v4::getAttribute( $args, 'wf1_focus_list' ) ?>
                            </div>
                        </div>
                    </div>
                    <!-- 02 -->
                    <div class="bg-white/60 border border-gray-200 p-4 rounded-xs md:p-5">
                        <div class="flex items-baseline justify-between gap-2">
                            <h3 class="text-xs uppercase font-semibold flex items-center gap-2"> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'wf2_title' ) ?></span> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3>
                            <span class="text-[11px] uppercase tracking-[0.16em] text-gray-600"><?php echo PG_Blocks_v4::getAttribute( $args, 'wf2_tagline' ) ?></span>
                        </div>
                        <p class="mt-3 text-gray-800"><?php echo PG_Blocks_v4::getAttribute( $args, 'wf2_body' ) ?></p>
                        <div class="mt-3">
                            <h4 class="text-[11px] uppercase font-semibold text-gray-700 mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'wf2_focus_title' ) ?></h4>
                            <div>
                                <?php echo PG_Blocks_v4::getAttribute( $args, 'wf2_focus_list' ) ?>
                            </div>
                        </div>
                    </div>
                    <!-- 03 -->
                    <div class="bg-white/60 border border-gray-200 p-4 rounded-xs md:p-5">
                        <div class="flex items-baseline justify-between gap-2">
                            <h3 class="text-xs uppercase font-semibold flex items-center gap-2"> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'wf3_title' ) ?></span> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3>
                            <span class="text-[11px] uppercase tracking-[0.16em] text-gray-600"><?php echo PG_Blocks_v4::getAttribute( $args, 'wf3_tagline' ) ?></span>
                        </div>
                        <p class="mt-3 text-gray-800"><?php echo PG_Blocks_v4::getAttribute( $args, 'wf3_body' ) ?></p>
                        <div class="mt-3">
                            <h4 class="text-[11px] uppercase font-semibold text-gray-700 mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'wf3_focus_title' ) ?></h4>
                            <div>
                                <?php echo PG_Blocks_v4::getAttribute( $args, 'wf3_focus_list' ) ?>
                            </div>
                        </div>
                    </div>
                    <!-- 04 -->
                    <div class="bg-white/60 border border-gray-200 p-4 rounded-xs md:p-5">
                        <div class="flex items-baseline justify-between gap-2">
                            <h3 class="text-xs uppercase font-semibold flex items-center gap-2"> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'wf4_title' ) ?></span> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3>
                            <span class="text-[11px] uppercase tracking-[0.16em] text-gray-600"><?php echo PG_Blocks_v4::getAttribute( $args, 'wf4_tagline' ) ?></span>
                        </div>
                        <p class="mt-3 text-gray-800"><?php echo PG_Blocks_v4::getAttribute( $args, 'wf4_body' ) ?></p>
                        <div class="mt-3">
                            <h4 class="text-[11px] uppercase font-semibold text-gray-700 mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'wf4_focus_title' ) ?></h4>
                            <div>
                                <?php echo PG_Blocks_v4::getAttribute( $args, 'wf4_focus_list' ) ?>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Hosting + Care intro -->
            <div class="md:mt-10">
                <h5 class="font-bold mb-3 text-4xl uppercase md:text-4xl"><?php echo PG_Blocks_v4::getAttribute( $args, 'hosting_title' ) ?></h5>
                <p class="mt-2 text-sm text-gray-800"><?php echo PG_Blocks_v4::getAttribute( $args, 'hosting_intro' ) ?></p>
            </div>
            <!-- Care plans -->
            <div class="gap-6 grid grid-cols-1 mt-8 pb-0 md:grid-cols-3">
                <!-- Essential Care -->
                <div class="flex flex-col">
                    <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'care1_title' ) ?></span> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span> </h3>
                    <div class="space-y-2 text-sm">
                        <div>
                            <span class="font-normal"><?php _e( 'Price:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care1_price' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Best for:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care1_best' ) ?></span>
                        </div>
                        <hr class="border-t border-black/10 my-2">
                        <div>
                            <span class="font-normal"><?php _e( 'Hosting:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care1_hosting' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Updates:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care1_updates' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Backups:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care1_backups' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Security:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care1_security' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Performance:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care1_perf' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Support:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care1_support' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Consultation:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care1_consult' ) ?></span>
                        </div>
                    </div>
                </div>
                <!-- Growth Care -->
                <div class="flex flex-col">
                    <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'care2_title' ) ?></span> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span> </h3>
                    <div class="space-y-2 text-sm">
                        <div>
                            <span class="font-normal"><?php _e( 'Price:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care2_price' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Best for:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care2_best' ) ?></span>
                        </div>
                        <hr class="border-t border-black/10 my-2">
                        <div>
                            <span class="font-normal"><?php _e( 'Hosting:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care2_hosting' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Updates:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care2_updates' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Backups:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care2_backups' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Security:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care2_security' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Performance:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care2_perf' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Support:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care2_support' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Consultation:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care2_consult' ) ?></span>
                        </div>
                    </div>
                </div>
                <!-- Pro Care -->
                <div class="flex flex-col">
                    <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'care3_title' ) ?></span> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span> </h3>
                    <div class="space-y-2 text-sm">
                        <div>
                            <span class="font-normal"><?php _e( 'Price:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care3_price' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Best for:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care3_best' ) ?></span>
                        </div>
                        <hr class="border-t border-black/10 my-2">
                        <div>
                            <span class="font-normal"><?php _e( 'Hosting:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care3_hosting' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Updates:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care3_updates' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Backups:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care3_backups' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Security:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care3_security' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Performance:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care3_perf' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Support:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care3_support' ) ?></span>
                        </div>
                        <div>
                            <span class="font-normal"><?php _e( 'Consultation:', 'blackboard_by_zdc' ); ?></span> <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'care3_consult' ) ?></span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Plus services -->
            <aside class="bg-white/60 border border-gray-200 flex flex-col gap-4 mt-12 p-5 rounded-xs md:p-6">
                <h5 class="font-semibold text-4xl uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'plus_title' ) ?></h5>
                <ul class="space-y-4 text-sm text-gray-800">
                    <li>
                        <strong class="block text-gray-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'plus1_title' ) ?></strong>
                        <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'plus1_desc' ) ?></span>
                    </li>
                    <li>
                        <strong class="block text-gray-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'plus2_title' ) ?></strong>
                        <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'plus2_desc' ) ?></span>
                    </li>
                    <li>
                        <strong class="block text-gray-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'plus3_title' ) ?></strong>
                        <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'plus3_desc' ) ?></span>
                    </li>
                    <li>
                        <strong class="block text-gray-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'plus4_title' ) ?></strong>
                        <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'plus4_desc' ) ?></span>
                    </li>
                </ul>
            </aside>
        </div>
        <!-- /#main-content -->
    </div>
    <!-- /.grid -->
</section>