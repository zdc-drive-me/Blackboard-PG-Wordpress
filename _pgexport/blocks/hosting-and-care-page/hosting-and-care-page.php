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
                <h2 class="flex font-semibold gap-2 items-center text-xs uppercase min-w-0"><?php echo PG_Blocks_v4::getAttribute( $args, 'page_label_label' ) ?></h2>
                <div class="flex justify-end min-w-0 flex-shrink-0">
                    <h3 id="dynamic-date" class="flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap"> <span id="date-display" class="font-sans text-right flex items-center gap-1"> <span id="date-text" class="font-sans"><?php _e( 'Fri 29 May 2026', 'blackboard_by_zdc' ); ?></span> <span>&bull;</span> <span id="time-text" class="font-mono tabular-nums"><?php _e( '15:09:46', 'blackboard_by_zdc' ); ?></span> </span> </h3>
                </div>
            </div>
            <!-- ====================================================
               SECTION 1 — HERO / INTRO
          ==================================================== -->
            <section aria-labelledby="hero-heading" class="md:mt-10 mt-8">
                <h1 id="hero-heading" class="font-bold leading-none mb-6 tracking-tight md:text-4xl lg:text-7xl"><?php echo PG_Blocks_v4::getAttribute( $args, 'hero_title' ) ?></h1>
                <p class="font-light italic leading-relaxed max-w-xl mb-6 text-lg text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'hero_intro_text' ) ?></p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                    <p class="font-light leading-relaxed text-base text-neutral-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'hero_description_left' ) ?></p>
                    <p class="font-light leading-relaxed text-base text-neutral-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'hero_description_right' ) ?></p>
                </div>
            </section>
            <hr class="border-black/15 border-t md:my-14 my-10">
            <!-- ====================================================
               SECTION 2 — SHORT ANSWER / STARTING POINTS
          ==================================================== -->
            <section aria-labelledby="starting-points-heading">
                <h2 id="starting-points-heading" class="flex font-semibold gap-2 items-center text-xs uppercase mb-4"><?php echo PG_Blocks_v4::getAttribute( $args, 'pricing_overview_section_title' ) ?></h2>
                <p class="font-light leading-relaxed max-w-xl mb-6 text-base text-neutral-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'pricing_overview_intro_text' ) ?></p>
                <!-- Three-column starting points — editorial, not cards -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/15 bg-white/40 rounded-xs overflow-hidden">
                    <div class="p-5 md:p-6 border-b border-black/15 md:border-b-0 md:border-r border-black/15">
                        <div class="inline-flex items-center bg-stone-900 text-white px-3 py-1.5 text-xs leading-none rounded-xs mb-3 hover:bg-[#a4ab13] hover:text-black transition-colors duration-200">
                            <span class="font-semibold uppercase tracking-wide"><?php echo PG_Blocks_v4::getAttribute( $args, 'pricing_overview_tier_1_label' ) ?></span>
                        </div>
                        <div class="text-base mb-2">
                            <span class="font-normal"><?php echo PG_Blocks_v4::getAttribute( $args, 'pricing_overview_tier_1_prefix' ) ?></span>
                            <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pricing_overview_tier_1_price' ) ?></span>
                        </div>
                        <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'pricing_overview_tier_1_description' ) ?></p>
                    </div>
                    <div class="p-5 md:p-6 border-b border-black/15 md:border-b-0 md:border-r border-black/15">
                        <div class="inline-flex items-center bg-stone-900 text-white px-3 py-1.5 text-xs leading-none rounded-xs mb-3 hover:bg-[#a4ab13] hover:text-black transition-colors duration-200">
                            <span class="font-semibold uppercase tracking-wide"><?php echo PG_Blocks_v4::getAttribute( $args, 'pricing_overview_tier_2_label' ) ?></span>
                        </div>
                        <div class="text-base mb-2">
                            <span class="font-normal"><?php echo PG_Blocks_v4::getAttribute( $args, 'pricing_overview_tier_2_prefix' ) ?></span>
                            <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pricing_overview_tier_2_price' ) ?></span>
                        </div>
                        <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'pricing_overview_tier_2_description' ) ?></p>
                    </div>
                    <div class="p-5 md:p-6">
                        <div class="inline-flex items-center bg-stone-900 text-white px-3 py-1.5 text-xs leading-none rounded-xs mb-3 hover:bg-[#a4ab13] hover:text-black transition-colors duration-200">
                            <span class="font-semibold uppercase tracking-wide"><?php echo PG_Blocks_v4::getAttribute( $args, 'pricing_overview_tier_3_label' ) ?></span>
                        </div>
                        <div class="text-base mb-2">
                            <span class="font-normal"><?php echo PG_Blocks_v4::getAttribute( $args, 'pricing_overview_tier_3_prefix' ) ?></span>
                            <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'pricing_overview_tier_3_price' ) ?></span>
                        </div>
                        <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'pricing_overview_tier_3_description' ) ?></p>
                    </div>
                </div>
                <p class="font-light leading-relaxed mt-3 text-neutral-600 text-xs"><?php echo PG_Blocks_v4::getAttribute( $args, 'pricing_overview_footnote' ) ?></p>
            </section>
            <hr class="border-black/15 border-t md:my-14 my-10">
            <!-- ====================================================
               SECTION 3 — WHY PRICES VARY
          ==================================================== -->
            <section aria-labelledby="why-vary-heading">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <div>
                        <h2 id="why-vary-heading" class="flex font-semibold gap-2 items-center text-xs uppercase mb-4"><?php echo PG_Blocks_v4::getAttribute( $args, 'price_factors_section_title' ) ?></h2>
                        <p class="font-light leading-relaxed text-base text-neutral-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'price_factors_intro_text' ) ?></p>
                    </div>
                    <div class="space-y-4">
                        <div class="border-t border-black/15 pt-3">
                            <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'price_factors_factor_1_title' ) ?></h3>
                            <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'price_factors_factor_1_description' ) ?></p>
                        </div>
                        <div class="border-t border-black/15 pt-3">
                            <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'price_factors_factor_2_title' ) ?></h3>
                            <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'price_factors_factor_2_description' ) ?></p>
                        </div>
                        <div class="border-t border-black/15 pt-3">
                            <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'price_factors_factor_3_title' ) ?></h3>
                            <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'price_factors_factor_3_description' ) ?></p>
                        </div>
                        <div class="border-t border-black/15 pt-3">
                            <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'price_factors_factor_4_title' ) ?></h3>
                            <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'price_factors_factor_4_description' ) ?></p>
                        </div>
                        <div class="border-t border-black/15 pt-3">
                            <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'price_factors_factor_5_title' ) ?></h3>
                            <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'price_factors_factor_5_description' ) ?></p>
                        </div>
                        <div class="border-t border-black/15 pt-3">
                            <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'price_factors_factor_6_title' ) ?></h3>
                            <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'price_factors_factor_6_description' ) ?></p>
                        </div>
                        <div class="border-t border-black/15 pt-3">
                            <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'price_factors_factor_7_title' ) ?></h3>
                            <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'price_factors_factor_7_description' ) ?></p>
                        </div>
                    </div>
                </div>
            </section>
            <hr class="border-black/15 border-t md:my-14 my-10">
            <!-- ====================================================
               SECTION 4 — WHAT A LOW-COST WEBSITE USUALLY MEANS
               SECTION 5 — WHAT A PROFESSIONAL WEBSITE INCLUDES
               Two-column comparison
          ==================================================== -->
            <section aria-labelledby="comparison-heading">
                <h2 id="comparison-heading" class="sr-only"><?php echo PG_Blocks_v4::getAttribute( $args, 'comparison_section_title' ) ?></h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Low-cost -->
                    <div class="bg-white/80 border border-black/10 p-5 md:p-6 rounded-xs">
                        <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'comparison_low_cost_title' ) ?></h3>
                        <p class="font-light leading-relaxed mb-4 text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'comparison_low_cost_intro' ) ?></p>
                        <ul class="font-light space-y-2 text-base text-neutral-900">
                            <?php echo PG_Blocks_v4::getAttribute( $args, 'comparison_low_cost_items' ) ?>
                        </ul>
                        <p class="font-light leading-relaxed mt-4 text-neutral-600 text-xs"><?php echo PG_Blocks_v4::getAttribute( $args, 'comparison_low_cost_note' ) ?></p>
                    </div>
                    <!-- Professional -->
                    <div class="bg-white/80 border border-black/10 p-5 md:p-6 rounded-xs">
                        <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'comparison_pro_title' ) ?></h3>
                        <p class="font-light leading-relaxed mb-4 text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'comparison_pro_intro' ) ?></p>
                        <h4 class="font-semibold text-xs uppercase text-neutral-600 mb-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'comparison_pro_phase1_title' ) ?></h4>
                        <ul class="font-light mb-4 space-y-1.5 text-base text-neutral-900">
                            <?php echo PG_Blocks_v4::getAttribute( $args, 'comparison_pro_phase1_items' ) ?>
                        </ul>
                        <h4 class="font-semibold text-xs uppercase text-neutral-600 mb-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'comparison_pro_phase2_title' ) ?></h4>
                        <ul class="font-light mb-4 space-y-1.5 text-base text-neutral-900">
                            <?php echo PG_Blocks_v4::getAttribute( $args, 'comparison_pro_phase2_items' ) ?>
                        </ul>
                        <h4 class="font-semibold text-xs uppercase text-neutral-600 mb-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'comparison_pro_phase3_title' ) ?></h4>
                        <ul class="font-light space-y-1.5 text-base text-neutral-900">
                            <?php echo PG_Blocks_v4::getAttribute( $args, 'comparison_pro_phase3_items' ) ?>
                        </ul>
                    </div>
                </div>
            </section>
            <hr class="border-black/15 border-t md:my-14 my-10">
            <!-- ====================================================
               SECTION 6 — PROJECT SCALES (DETAILED)
          ==================================================== -->
            <!-- ====================================================
               SECTION 7 — WHAT IS NOT ALWAYS INCLUDED
          ==================================================== -->
            <section aria-labelledby="clarify-heading">
                <h2 id="clarify-heading" class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'separate_costs_section_title' ) ?></h2>
                <p class="font-light leading-relaxed max-w-xl mb-6 text-base text-neutral-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'separate_costs_intro_text' ) ?></p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-0 border border-black/15 bg-white/40 rounded-xs overflow-hidden">
                    <div class="p-5 md:p-6 border-b border-black/15 md:border-r">
                        <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'separate_costs_cost_1_title' ) ?></h3>
                        <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'separate_costs_cost_1_description' ) ?></p>
                    </div>
                    <div class="p-5 md:p-6 border-b border-black/15">
                        <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'separate_costs_cost_2_title' ) ?></h3>
                        <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'separate_costs_cost_2_description' ) ?></p>
                    </div>
                    <div class="p-5 md:p-6 border-b border-black/15 md:border-r">
                        <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'separate_costs_cost_3_title' ) ?></h3>
                        <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'separate_costs_cost_3_description' ) ?></p>
                    </div>
                    <div class="p-5 md:p-6 border-b border-black/15">
                        <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'separate_costs_cost_4_title' ) ?></h3>
                        <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'separate_costs_cost_4_description' ) ?></p>
                    </div>
                    <div class="p-5 md:p-6 border-b border-black/15 md:border-r md:border-b-0">
                        <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'separate_costs_cost_5_title' ) ?></h3>
                        <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'separate_costs_cost_5_description' ) ?></p>
                    </div>
                    <div class="p-5 md:p-6">
                        <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'separate_costs_cost_6_title' ) ?></h3>
                        <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'separate_costs_cost_6_description' ) ?></p>
                    </div>
                </div>
            </section>
            <hr class="border-black/15 border-t md:my-14 my-10">
            <!-- ====================================================
               SECTION 8 — WHEN IT MAKES SENSE TO INVEST MORE
               SECTION 9 — HOW TO READ A QUOTE
               Two-column layout
          ==================================================== -->
            <section aria-labelledby="invest-more-heading">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <!-- Invest more -->
                    <div>
                        <h2 id="invest-more-heading" class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'budget_and_quotes_budget_title' ) ?></h2>
                        <p class="font-light leading-relaxed mb-4 text-base text-neutral-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'budget_and_quotes_budget_intro' ) ?></p>
                        <ul class="font-light space-y-2 text-base text-neutral-900">
                            <?php echo PG_Blocks_v4::getAttribute( $args, 'budget_and_quotes_budget_items' ) ?>
                        </ul>
                        <p class="font-light leading-relaxed mt-4 text-neutral-600 text-xs"><?php echo PG_Blocks_v4::getAttribute( $args, 'budget_and_quotes_budget_note' ) ?></p>
                    </div>
                    <!-- How to read a quote -->
                    <div>
                        <h2 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'budget_and_quotes_quotes_title' ) ?></h2>
                        <p class="font-light leading-relaxed mb-4 text-base text-neutral-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'budget_and_quotes_quotes_intro' ) ?></p>
                        <ul class="font-light space-y-2 text-base text-neutral-900">
                            <?php echo PG_Blocks_v4::getAttribute( $args, 'budget_and_quotes_quotes_items' ) ?>
                        </ul>
                    </div>
                </div>
            </section>
            <hr class="border-black/15 border-t md:my-14 my-10">
            <!-- ====================================================
               SECTION 10 — FINAL CTA
          ==================================================== -->
            <section aria-labelledby="cta-heading" class="mb-16 md:mb-20">
                <div class="w-full max-w-none">
                    <h2 id="cta-heading" class="font-bold leading-tight lg:text-5xl mb-4 md:text-4xl text-3xl"><?php echo PG_Blocks_v4::getAttribute( $args, 'cta_title' ) ?></h2>
                    <p class="font-light leading-relaxed mb-2 text-base text-neutral-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'cta_description' ) ?></p>
                    <p class="font-light leading-relaxed mb-8 text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'cta_secondary_description' ) ?></p>
                    <div class="flex flex-col gap-4 items-center">
                        <a href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v4::getLinkUrl( $args, 'cta_cta_link' ) ?>" role="button" class="group bg-black flex flex-col font-normal gap-2 px-4 py-4 rounded-xs shrink-0 text-center text-sm text-white tracking-wide transition-colors w-full focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white/60 focus:outline-none hover:bg-[#a4ab13] md:w-auto"> <h3 class="font-light group-hover:text-black leading-relaxed md:max-w-lg text-slate-200 text-xs"><?php echo PG_Blocks_v4::getAttribute( $args, 'cta_cta_description' ) ?></h3> <h5 class="font-normal text-lg uppercase group-hover:text-black"><?php echo PG_Blocks_v4::getAttribute( $args, 'cta_cta_label' ) ?></h5> </a>
                        <a href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v4::getLinkUrl( $args, 'cta_services_link' ) ?>" class="!no-underline duration-200 font-light text-neutral-700 text-xs transition-colors underline-offset-2 hover:text-black"><?php echo PG_Blocks_v4::getAttribute( $args, 'cta_services_label' ) ?></a>
                    </div>
                </div>
            </section>
        </div>
        <!-- /.col-span-9 -->
    </div>
    <!-- /.grid -->
</section>