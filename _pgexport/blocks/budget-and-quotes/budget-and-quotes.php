<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('aria-labelledby' => "invest-more-heading", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <!-- Invest more -->
        <div>
            <h2 id="invest-more-heading" class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'budget_title' ) ?></h2>
            <p class="font-light leading-relaxed mb-4 text-base text-neutral-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'budget_intro' ) ?></p>
            <ul class="font-light space-y-2 text-base text-neutral-900">
                <?php echo PG_Blocks_v4::getAttribute( $args, 'budget_items' ) ?>
            </ul>
            <p class="font-light leading-relaxed mt-4 text-neutral-600 text-xs"><?php echo PG_Blocks_v4::getAttribute( $args, 'budget_note' ) ?></p>
        </div>
        <!-- How to read a quote -->
        <div>
            <h2 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'quotes_title' ) ?></h2>
            <p class="font-light leading-relaxed mb-4 text-base text-neutral-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'quotes_intro' ) ?></p>
            <ul class="font-light space-y-2 text-base text-neutral-900">
                <?php echo PG_Blocks_v4::getAttribute( $args, 'quotes_items' ) ?>
            </ul>
        </div>
    </div>
</section>