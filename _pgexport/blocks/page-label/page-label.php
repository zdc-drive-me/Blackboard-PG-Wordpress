<div <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "hidden md:flex justify-between items-start gap-2 min-w-0", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <h2 class="flex font-semibold gap-2 items-center text-xs uppercase min-w-0"><?php echo PG_Blocks_v4::getAttribute( $args, 'label' ) ?></h2>
    <div class="flex justify-end min-w-0 flex-shrink-0">
        <h3 id="dynamic-date" class="flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap"> <span id="date-display" class="font-sans text-right flex items-center gap-1"> <span id="date-text" class="font-sans"><?php _e( 'Fri 29 May 2026', 'blackboard_by_zdc' ); ?></span> <span>&bull;</span> <span id="time-text" class="font-mono tabular-nums"><?php _e( '15:09:46', 'blackboard_by_zdc' ); ?></span> </span> </h3>
    </div>
</div>