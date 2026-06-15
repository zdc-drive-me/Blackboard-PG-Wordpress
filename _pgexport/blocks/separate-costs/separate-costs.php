<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('aria-labelledby' => "clarify-heading", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <h2 id="clarify-heading" class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'section_title' ) ?></h2>
    <p class="font-light leading-relaxed max-w-xl mb-6 text-base text-neutral-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'intro_text' ) ?></p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-0 border border-black/15 bg-white/40 rounded-xs overflow-hidden">
        <div class="p-5 md:p-6 border-b border-black/15 md:border-r">
            <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'cost_1_title' ) ?></h3>
            <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'cost_1_description' ) ?></p>
        </div>
        <div class="p-5 md:p-6 border-b border-black/15">
            <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'cost_2_title' ) ?></h3>
            <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'cost_2_description' ) ?></p>
        </div>
        <div class="p-5 md:p-6 border-b border-black/15 md:border-r">
            <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'cost_3_title' ) ?></h3>
            <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'cost_3_description' ) ?></p>
        </div>
        <div class="p-5 md:p-6 border-b border-black/15">
            <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'cost_4_title' ) ?></h3>
            <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'cost_4_description' ) ?></p>
        </div>
        <div class="p-5 md:p-6 border-b border-black/15 md:border-r md:border-b-0">
            <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'cost_5_title' ) ?></h3>
            <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'cost_5_description' ) ?></p>
        </div>
        <div class="p-5 md:p-6">
            <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'cost_6_title' ) ?></h3>
            <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'cost_6_description' ) ?></p>
        </div>
    </div>
</section>