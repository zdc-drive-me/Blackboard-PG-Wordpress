<div <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "p-5 md:p-6 border-b border-black/15 md:border-b-0 md:border-r border-black/15", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="inline-flex items-center bg-stone-900 text-white px-3 py-1.5 text-xs leading-none rounded-xs mb-3 hover:bg-[#a4ab13] hover:text-black transition-colors duration-200">
        <span class="font-semibold uppercase tracking-wide"><?php echo PG_Blocks_v4::getAttribute( $args, 'tier_label' ) ?></span>
    </div>
    <div class="text-base mb-2">
        <span class="font-normal"><?php echo PG_Blocks_v4::getAttribute( $args, 'price_prefix' ) ?></span>
        <span class="font-thin"><?php echo PG_Blocks_v4::getAttribute( $args, 'price' ) ?></span>
    </div>
    <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'description' ) ?></p>
</div>