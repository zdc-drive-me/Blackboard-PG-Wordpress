<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('aria-labelledby' => "hero-heading", 'class' => "md:mt-10 mt-8", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <h1 id="hero-heading" class="font-bold leading-none mb-6 tracking-tight md:text-4xl lg:text-7xl"><?php echo PG_Blocks_v4::getAttribute( $args, 'title' ) ?></h1>
    <p class="font-light italic leading-relaxed max-w-xl mb-6 text-lg text-neutral-700"><?php echo PG_Blocks_v4::getAttribute( $args, 'intro_text' ) ?></p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        <p class="font-light leading-relaxed text-base text-neutral-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'description_left' ) ?></p>
        <p class="font-light leading-relaxed text-base text-neutral-900"><?php echo PG_Blocks_v4::getAttribute( $args, 'description_right' ) ?></p>
    </div>
</section>