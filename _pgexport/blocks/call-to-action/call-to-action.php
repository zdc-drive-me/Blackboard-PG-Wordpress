<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('aria-labelledby' => "cta-heading", 'class' => "mb-16 md:mb-20", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="w-full max-w-none">
        <h2 id="cta-heading" class="font-bold leading-tight lg:text-5xl mb-4 md:text-4xl text-3xl"><?php echo PG_Blocks_v4::getAttribute( $args, 'title' ) ?></h2>
        <p class="font-light leading-relaxed mb-2 text-base text-neutral-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'description' ) ?></p>
        <p class="font-light leading-relaxed mb-8 text-base text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'secondary_description' ) ?></p>
        <div class="flex flex-col items-start gap-4">
            <a href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v4::getLinkUrl( $args, 'cta_link' ) ?>" role="button" class="group bg-black flex flex-col font-normal gap-2 px-4 py-4 rounded-xs shrink-0 text-center text-sm text-white tracking-wide transition-colors w-full focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white/60 focus:outline-none hover:bg-[#a4ab13] md:w-auto"> <h3 class="font-light group-hover:text-black leading-relaxed md:max-w-lg text-slate-200 text-xs"><?php echo PG_Blocks_v4::getAttribute( $args, 'cta_description' ) ?></h3> <h5 class="font-normal text-lg uppercase group-hover:text-black"><?php echo PG_Blocks_v4::getAttribute( $args, 'cta_label' ) ?></h5> </a>
            <a href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v4::getLinkUrl( $args, 'services_link' ) ?>" class="duration-200 font-light hover:text-black text-neutral-700 text-xs transition-colors underline underline-offset-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'services_label' ) ?></a>
        </div>
    </div>
</section>