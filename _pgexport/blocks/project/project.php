<div <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "video-wrapper", ) ); else echo 'data-wp-block-props="true"'; ?>> 
    <!-- Video -->     
    <div class="bg-black mt-2 p-4 rounded-md md:mt-6 md:p-6 lg:p-8"> 
        <video class="video-player" muted autoplay loop playsinline preload="auto" aria-label="Project video"> 
            <source src="<?php echo PG_Blocks_v4::getAttribute( $args, 'video_url' ) ?>" type="application/x-mpegURL"/> 
            <?php _e( 'Your browser doesn\'t support HTML5 video.', 'blackboard_by_zdc' ); ?> 
        </video>         
    </div>     
    <!-- Info row (always visible) -->     
    <div class="gap-6 grid grid-cols-1 mt-6 pb-6 md:grid-cols-3"> 
        <!-- Client -->         
        <div class="flex items-baseline"> 
            <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"> <?php _e( 'Client', 'blackboard_by_zdc' ); ?> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3> 
            <p class="text-sm mb-0 ml-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'client_name' ) ?></p> 
        </div>         
        <!-- About -->         
        <div class="flex items-baseline"> 
            <h3 class="flex font-extrabold gap-2 items-center mb-4 text-xs uppercase"> <?php _e( 'About', 'blackboard_by_zdc' ); ?> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3> 
            <p class="text-sm mb-0 ml-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'project_description' ) ?></p> 
        </div>         
        <!-- Services -->         
        <div class="flex items-baseline"> 
            <h3 class="flex font-extrabold gap-2 items-center mb-4 text-xs uppercase"> <?php _e( 'Services', 'blackboard_by_zdc' ); ?> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3> 
            <p class="text-sm mb-0 ml-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'services' ) ?></p> 
        </div>         
        <!-- Divider line toggled by attribute -->         
        <?php if ( PG_Blocks_v4::getAttribute( $args, 'show_divider', false )  ==  'true' ) : ?>
            <div class="col-span-full border-b-1 border-black"></div>
        <?php endif; ?> 
    </div>     
</div>