<div <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "border-t border-black/15 pt-3", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <h3 class="font-semibold text-xs uppercase mb-1"><?php echo PG_Blocks_v4::getAttribute( $args, 'factor_title' ) ?></h3>
    <p class="font-light leading-relaxed text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'factor_description' ) ?></p>
</div>