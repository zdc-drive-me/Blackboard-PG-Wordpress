<div <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "max-w-7xl md:px-6 mx-4 px-4 py-12", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <h1 class="text-4xl font-serif mb-6"><?php echo PG_Blocks_v4::getAttribute( $args, 'page_title' ) ?></h1>
    <p class="text-sm mb-4"><?php echo PG_Blocks_v4::getAttribute( $args, 'effective_date' ) ?></p>
    <p class="text-sm mb-4"><?php echo PG_Blocks_v4::getAttribute( $args, 'intro_text' ) ?></p>
    <h2 class="text-xl font-semibold mt-6 mb-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'section1_title' ) ?></h2>
    <p class="text-sm mb-4"><?php echo PG_Blocks_v4::getAttribute( $args, 'section1_content' ) ?></p>
    <h2 class="text-xl font-semibold mt-6 mb-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'section2_title' ) ?></h2>
    <p class="text-sm mb-4"><?php echo PG_Blocks_v4::getAttribute( $args, 'section2_content' ) ?></p>
    <h2 class="text-xl font-semibold mt-6 mb-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'section3_title' ) ?></h2>
    <p class="text-sm mb-4"><?php echo PG_Blocks_v4::getAttribute( $args, 'section3_content' ) ?></p>
    <h2 class="text-xl font-semibold mt-6 mb-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'section4_title' ) ?></h2>
    <p class="text-sm mb-4"><?php echo PG_Blocks_v4::getAttribute( $args, 'section4_content' ) ?></p>
    <h2 class="text-xl font-semibold mt-6 mb-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'section5_title' ) ?></h2>
    <p class="text-sm mb-4"><?php echo PG_Blocks_v4::getAttribute( $args, 'section5_content' ) ?></p>
    <h2 class="text-xl font-semibold mt-6 mb-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'section6_title' ) ?></h2>
    <p class="text-sm mb-4"><?php echo PG_Blocks_v4::getAttribute( $args, 'company_info' ) ?></p>
    <h2 class="text-xl font-semibold mt-6 mb-2"><?php echo PG_Blocks_v4::getAttribute( $args, 'section7_title' ) ?></h2>
    <p class="text-sm mb-4"><?php echo PG_Blocks_v4::getAttribute( $args, 'section7_content' ) ?></p>
    <p class="text-sm mt-8"><?php echo PG_Blocks_v4::getAttribute( $args, 'contact_text' ) ?></p>
</div>