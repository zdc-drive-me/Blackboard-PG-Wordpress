<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('aria-labelledby' => "starting-points-heading", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <h2 id="starting-points-heading" class="flex font-semibold gap-2 items-center text-xs uppercase mb-4"><?php echo PG_Blocks_v4::getAttribute( $args, 'section_title' ) ?></h2>
    <p class="font-light leading-relaxed max-w-xl mb-6 text-base text-neutral-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'intro_text' ) ?></p>
    <!-- Three-column starting points — editorial, not cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/15 bg-white/40 rounded-xs overflow-hidden">
        <div class="p-5 md:p-6 border-b border-black/15 md:border-b-0 md:border-r border-black/15">
            <div class="inline-flex items-center bg-stone-900 text-white px-3 py-1.5 text-xs leading-none rounded-xs mb-3 hover:bg-[#a4ab13] hover:text-black transition-colors duration-200">
                <span class="font-semibold uppercase tracking-wide"><?php echo PG_Blocks_v4::getAttribute( $args, 'tier_1_label' ) ?></span>
            </div>
            <div class="text-base mb-2">
                <span class="font-normal"><?php echo PG_Blocks_v4::getAttribute( $args, 'tier_1_prefix' ) ?></span>
                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'tier_1_price' ) ?></span>
            </div>
            <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'tier_1_description' ) ?></p>
        </div>
        <div class="p-5 md:p-6 border-b border-black/15 md:border-b-0 md:border-r border-black/15">
            <div class="inline-flex items-center bg-stone-900 text-white px-3 py-1.5 text-xs leading-none rounded-xs mb-3 hover:bg-[#a4ab13] hover:text-black transition-colors duration-200">
                <span class="font-semibold uppercase tracking-wide"><?php echo PG_Blocks_v4::getAttribute( $args, 'tier_2_label' ) ?></span>
            </div>
            <div class="text-base mb-2">
                <span class="font-normal"><?php echo PG_Blocks_v4::getAttribute( $args, 'tier_2_prefix' ) ?></span>
                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'tier_2_price' ) ?></span>
            </div>
            <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'tier_2_description' ) ?></p>
        </div>
        <div class="p-5 md:p-6">
            <div class="inline-flex items-center bg-stone-900 text-white px-3 py-1.5 text-xs leading-none rounded-xs mb-3 hover:bg-[#a4ab13] hover:text-black transition-colors duration-200">
                <span class="font-semibold uppercase tracking-wide"><?php echo PG_Blocks_v4::getAttribute( $args, 'tier_3_label' ) ?></span>
            </div>
            <div class="text-base mb-2">
                <span class="font-normal"><?php echo PG_Blocks_v4::getAttribute( $args, 'tier_3_prefix' ) ?></span>
                <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'tier_3_price' ) ?></span>
            </div>
            <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'tier_3_description' ) ?></p>
        </div>
    </div>
    <p class="font-light leading-relaxed mt-3 text-neutral-600 text-xs"><?php echo PG_Blocks_v4::getAttribute( $args, 'footnote' ) ?></p>
</section>