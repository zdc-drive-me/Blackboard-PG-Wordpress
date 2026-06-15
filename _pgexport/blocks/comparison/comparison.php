<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('aria-labelledby' => "comparison-heading", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <h2 id="comparison-heading" class="sr-only"><?php echo PG_Blocks_v4::getAttribute( $args, 'section_title' ) ?></h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Low-cost -->
        <div class="bg-white/80 border border-black/10 p-5 md:p-6 rounded-xs">
            <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'low_cost_title' ) ?></h3>
            <p class="font-light leading-relaxed mb-4 text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'low_cost_intro' ) ?></p>
            <ul class="font-light space-y-2 text-base text-neutral-900">
                <?php echo PG_Blocks_v4::getAttribute( $args, 'low_cost_items' ) ?>
            </ul>
            <p class="font-light leading-relaxed mt-4 text-neutral-600 text-xs"><?php echo PG_Blocks_v4::getAttribute( $args, 'low_cost_note' ) ?></p>
        </div>
        <!-- Professional -->
        <div class="bg-white/80 border border-black/10 p-5 md:p-6 rounded-xs">
            <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'pro_title' ) ?></h3>
            <p class="font-light leading-relaxed mb-4 text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'pro_intro' ) ?></p>
            <h4 class="font-semibold text-xs uppercase text-neutral-600 mb-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'pro_phase1_title' ) ?></h4>
            <ul class="font-light mb-4 space-y-1.5 text-base text-neutral-900">
                <?php echo PG_Blocks_v4::getAttribute( $args, 'pro_phase1_items' ) ?>
            </ul>
            <h4 class="font-semibold text-xs uppercase text-neutral-600 mb-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'pro_phase2_title' ) ?></h4>
            <ul class="font-light mb-4 space-y-1.5 text-base text-neutral-900">
                <?php echo PG_Blocks_v4::getAttribute( $args, 'pro_phase2_items' ) ?>
            </ul>
            <h4 class="font-semibold text-xs uppercase text-neutral-600 mb-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'pro_phase3_title' ) ?></h4>
            <ul class="font-light space-y-1.5 text-base text-neutral-900">
                <?php echo PG_Blocks_v4::getAttribute( $args, 'pro_phase3_items' ) ?>
            </ul>
        </div>
    </div>
</section>