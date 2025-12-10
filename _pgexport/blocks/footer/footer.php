<footer <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array() ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="bg-[#a4ab13] <?php echo PG_Blocks_v4::getAttribute( $args, 'background_color' ) ?>" style=";<?php echo ( PG_Blocks_v4::getImageUrl( $args, 'background_image', 'full' ) ? ( 'background-image: url('.PG_Blocks_v4::getImageUrl( $args, 'background_image', 'full' ).')' ) : '' ); ?>">
        <div class="p-6 pt-12">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div>
                    <h4 class="font-semibold mb-4 text-black text-xs tracking-wide uppercase border-b border-black pb-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'column_title_1' ) ?></h4>
                    <?php if ( has_nav_menu( 'footer_one' ) ) : ?>
                        <?php
                            PG_Smart_Walker_Nav_Menu::init();
                            PG_Smart_Walker_Nav_Menu::$options['template'] = '<li class="{CLASSES}" id="{ID}"><a class="duration-200 hover:text-black text-black text-sm transition-colors" {ATTRS}>{TITLE}</a>
                                                            </li>';
                            wp_nav_menu( array(
                                'container' => '',
                                'theme_location' => 'footer_one',
                                'items_wrap' => '<ul class="%2$s font-thin" id="%1$s">%3$s</ul>',
                                'walker' => new PG_Smart_Walker_Nav_Menu()
                        ) ); ?>
                    <?php endif; ?>
                </div>
                <div>
                    <h4 class="font-semibold mb-4 text-black text-xs tracking-wide uppercase border-b border-black pb-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'column_title_2' ) ?></h4>
                    <?php if ( has_nav_menu( 'footer_two' ) ) : ?>
                        <?php
                            PG_Smart_Walker_Nav_Menu::init();
                            PG_Smart_Walker_Nav_Menu::$options['template'] = '<li class="{CLASSES}" id="{ID}"><a class="text-black hover:text-black transition-colors duration-200 text-sm" {ATTRS}>{TITLE}</a>
                                                            </li>';
                            wp_nav_menu( array(
                                'container' => '',
                                'theme_location' => 'footer_two',
                                'items_wrap' => '<ul class="%2$s font-thin" id="%1$s">%3$s</ul>',
                                'walker' => new PG_Smart_Walker_Nav_Menu()
                        ) ); ?>
                    <?php endif; ?>
                </div>
                <div>
                    <h4 class="font-semibold mb-4 text-black text-xs tracking-wide uppercase border-b border-black pb-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'column_title_3' ) ?></h4>
                    <?php if ( has_nav_menu( 'footer_three' ) ) : ?>
                        <?php
                            PG_Smart_Walker_Nav_Menu::init();
                            PG_Smart_Walker_Nav_Menu::$options['template'] = '<li class="{CLASSES}" id="{ID}"><a class="text-black hover:text-black transition-colors duration-200 text-sm" {ATTRS}>{TITLE}</a>
                                                            </li>';
                            wp_nav_menu( array(
                                'container' => '',
                                'theme_location' => 'footer_three',
                                'items_wrap' => '<ul class="%2$s font-thin" id="%1$s">%3$s</ul>',
                                'walker' => new PG_Smart_Walker_Nav_Menu()
                        ) ); ?>
                    <?php endif; ?>
                </div>
            </div>
            <!-- Grid container with 3 columns -->
            <div class="mb-10 mt-10"><a href="<?php echo esc_url( home_url() ); ?>"><?php if ( !PG_Blocks_v4::getImageSVG( $args, 'logo_image', false) && PG_Blocks_v4::getImageUrl( $args, 'logo_image', 'full' ) ) : ?><img width="100%" src="<?php echo PG_Blocks_v4::getImageUrl( $args, 'logo_image', 'full' ) ?>" class="<?php echo (PG_Blocks_v4::getImageField( $args, 'logo_image', 'id', true) ? ('wp-image-' . PG_Blocks_v4::getImageField( $args, 'logo_image', 'id', true)) : '') ?>" alt="<?php echo PG_Blocks_v4::getImageField( $args, 'logo_image', 'alt', true); ?>"><?php endif; ?><?php if ( PG_Blocks_v4::getImageSVG( $args, 'logo_image', false) ) : ?><?php echo PG_Blocks_v4::mergeInlineSVGAttributes( PG_Blocks_v4::getImageSVG( $args, 'logo_image' ), array() ) ?><?php endif; ?></a>
            </div>
            <!-- Copyright section -->
            <div class="grid grid-cols-2 gap-x-4">
                <span class="font-thin self-end text-sm"><?php echo PG_Blocks_v4::getAttribute( $args, 'address' ) ?></span>
                <p class="self-end justify-self-end m-0 leading-none"><?php echo PG_Blocks_v4::getAttribute( $args, 'vat_number' ) ?></p>
            </div>
        </div>
    </div>
</footer>