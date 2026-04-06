<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "pl-4 px-4 py-16 sm:px-4", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="grid min-w-0 grid-cols-1 gap-4 pl-4 pr-4 sm:grid-cols-2 md:grid-cols-2 md:gap-8 md:pl-1 md:pr-1 lg:grid-cols-12">
        <div class="lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-2">
            <a href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v4::getLinkUrl( $args, 'contact_image_link' ) ?>"><?php if ( !PG_Blocks_v4::getImageSVG( $args, 'contact_image', false) && PG_Blocks_v4::getImageUrl( $args, 'contact_image', 'full' ) ) : ?><img src="<?php echo PG_Blocks_v4::getImageUrl( $args, 'contact_image', 'full' ) ?>" alt="<?php echo PG_Blocks_v4::getImageField( $args, 'contact_image', 'alt', true); ?>" class="<?php echo (PG_Blocks_v4::getImageField( $args, 'contact_image', 'id', true) ? ('wp-image-' . PG_Blocks_v4::getImageField( $args, 'contact_image', 'id', true)) : '') ?>"><?php endif; ?><?php if ( PG_Blocks_v4::getImageSVG( $args, 'contact_image', false) ) : ?><?php echo PG_Blocks_v4::mergeInlineSVGAttributes( PG_Blocks_v4::getImageSVG( $args, 'contact_image' ), array() ) ?><?php endif; ?></a>
        </div>
        <section class="border-neutral-300 border-t pt-2 lg:col-start-4 lg:col-end-7 lg:row-start-1 lg:row-end-2">
            <h5 class="text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'address_label' ) ?></h5>
            <p class="leading-tight mt-3"> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'address_line1' ) ?></span><br> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'address_line2' ) ?></span><br> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'address_line3' ) ?></span><br> <span><?php echo PG_Blocks_v4::getAttribute( $args, 'address_line4' ) ?></span> </p>
            <div class="border-b border-stone-700 mt-3"></div>
        </section>
        <div class="space-y-10 lg:col-start-7 lg:col-end-10 lg:row-start-1 lg:row-end-2">
            <section class="border-neutral-300 border-t col-end-8 col-start-6 pt-2 row-end-2 row-start-1">
                <h5 class="text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'phone_label' ) ?></h5>
                <p class="leading-tight mt-3 text-sm"> <a href="tel:+393456186298" class="!no-underline underline-offset-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'phone_text' ) ?></a> </p>
            </section>
            <section class="border-neutral-300 border-t col-end-4 col-start-1 pt-2 row-end-2 row-start-1">
                <h5 class="text-black text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'email_label' ) ?></h5>
                <p class="leading-tight mt-3 text-sm"> <a href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v4::getLinkUrl( $args, 'email_text' ) ?>" class="!no-underline"><?php _e( 'General Enquiries', 'blackboard_by_zdc' ); ?></a> </p>
                <div class="border-b border-stone-700 mt-3"></div>
            </section>
        </div>
        <div class="space-y-10 lg:col-start-10 lg:col-end-13 lg:row-start-1 lg:row-end-2">
            <section class="border-t border-neutral-300 pt-2">
                <h5 class="text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'vat_label' ) ?></h5>
                <p class="leading-tight mt-3 text-sm"><?php echo PG_Blocks_v4::getAttribute( $args, 'vat_value' ) ?></p>
                <div class="mt-3 border-b border-neutral-300"></div>
            </section>
            <section class="border-t border-neutral-300 pt-2">
                <h5 class="text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'collab_label' ) ?></h5>
                <p class="leading-tight mt-3 text-sm"> <a href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v4::getLinkUrl( $args, 'link_url' ) ?>" target="_blank" class="!no-underline"><?php echo PG_Blocks_v4::getAttribute( $args, 'link_label' ) ?></a> </p>
                <div class="mt-3 border-b border-neutral-300"></div>
            </section>
            <section class="border-t border-neutral-300 pt-2">
                <h5 class="text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'studio_email_label' ) ?></h5>
                <p class="leading-tight mt-3 text-sm"> <a href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v4::getLinkUrl( $args, 'studio_email_text' ) ?>" class="!no-underline"><?php _e( 'info@zdcstudio.com', 'blackboard_by_zdc' ); ?></a> </p>
                <div class="border-b border-stone-700 mt-3"></div>
            </section>
        </div>
    </div>
</section>