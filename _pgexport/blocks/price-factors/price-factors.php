<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('aria-labelledby' => "why-vary-heading", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div>
            <h2 id="why-vary-heading" class="flex font-semibold gap-2 items-center text-xs uppercase mb-4"><?php echo PG_Blocks_v4::getAttribute( $args, 'section_title' ) ?></h2>
            <p class="font-light leading-relaxed text-base text-neutral-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'intro_text' ) ?></p>
        </div>
        <div class="space-y-4">
            <div class="border-t border-black/15 pt-3">
                <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'factor_1_title' ) ?></h3>
                <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'factor_1_description' ) ?></p>
            </div>
            <div class="border-t border-black/15 pt-3">
                <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'factor_2_title' ) ?></h3>
                <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'factor_2_description' ) ?></p>
            </div>
            <div class="border-t border-black/15 pt-3">
                <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'factor_3_title' ) ?></h3>
                <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'factor_3_description' ) ?></p>
            </div>
            <div class="border-t border-black/15 pt-3">
                <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'factor_4_title' ) ?></h3>
                <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'factor_4_description' ) ?></p>
            </div>
            <div class="border-t border-black/15 pt-3">
                <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'factor_5_title' ) ?></h3>
                <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'factor_5_description' ) ?></p>
            </div>
            <div class="border-t border-black/15 pt-3">
                <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'factor_6_title' ) ?></h3>
                <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'factor_6_description' ) ?></p>
            </div>
            <div class="border-t border-black/15 pt-3">
                <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'factor_7_title' ) ?></h3>
                <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'factor_7_description' ) ?></p>
            </div>
        </div>
    </div>
</section>