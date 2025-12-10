<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "min-h-screen min-w-0", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="grid grid-cols-1 min-w-0 gap-4 md:gap-8 pl-4 pr-4 md:grid-cols-12 md:pl-6 md:pr-6">
        <!-- Sidebar -->
        <aside class="col-span-12 min-w-0 self-start top-[9vh] md:col-span-3 md:sticky" aria-labelledby="sidebar-heading">
            <div>
                <section class="mb-6" aria-labelledby="about-us-heading">
                    <div class="border-solid">
                        <div class="flex justify-between items-center md:block">
                            <h3 id="about-us-heading" class="flex font-semibold gap-2 items-center text-xs uppercase"><?php echo PG_Blocks_v4::getAttribute( $args, 'about_heading' ) ?></h3>
                            <!-- Clock for mobile - visible only on small screens -->
                            <div class="md:hidden flex justify-end min-w-0 flex-shrink-0">
                                <h3 id="dynamic-date-mobile" class="flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap"> <span id="date-display-mobile" class="font-sans text-right flex items-center gap-1"> <span id="date-text-mobile" class="font-sans"></span> <span>•</span> <span id="time-text-mobile" class="font-mono tabular-nums"></span> </span> </h3>
                            </div>
                        </div>
                        <div class="bg-custom_pink-200 mt-6 pb-2.5 pl-2.5 pr-2.5 pt-2.5">
                            <h1 class="font-bold mb-6 text-4xl"><?php echo PG_Blocks_v4::getAttribute( $args, 'h1_text' ) ?></h1>
                            <h2 class="font-thin mb-6 text-sm"><?php echo PG_Blocks_v4::getAttribute( $args, 'intro_text' ) ?></h2>
                            <p class="mb-6 text-sm"><?php echo PG_Blocks_v4::getAttribute( $args, 'description_1' ) ?></p>
                            <p class="mb-6 text-sm"><?php echo PG_Blocks_v4::getAttribute( $args, 'description_2' ) ?></p>
                            <p class="mb-6 text-sm"><?php echo PG_Blocks_v4::getAttribute( $args, 'description_3' ) ?></p>
                            <p class="mb-6 text-sm"><?php echo PG_Blocks_v4::getAttribute( $args, 'clients_text' ) ?></p>
                            <p class="mb-6 text-sm"><?php echo PG_Blocks_v4::getAttribute( $args, 'description_4' ) ?></p>
                            <p class="mb-6 text-sm"><?php echo PG_Blocks_v4::getAttribute( $args, 'location_text' ) ?></p>
                            <p class="mb-6 text-sm"><?php echo PG_Blocks_v4::getAttribute( $args, 'contact_text' ) ?></p>
                        </div>
                    </div>
                </section>
            </div>
        </aside>
        <!-- Main Content -->
        <div id="main-content" class="col-span-12 min-w-0 md:col-span-9">
            <div class="hidden md:flex justify-between items-start gap-2 min-w-0">
                <h3 class="flex font-semibold gap-2 items-center text-xs uppercase min-w-0"><?php echo PG_Blocks_v4::getAttribute( $args, 'work_heading' ) ?></h3>
                <div class="flex justify-end min-w-0 flex-shrink-0">
                    <h3 id="dynamic-date" class="flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap"> <span id="date-display" class="font-sans text-right flex items-center gap-1"> <span id="date-text" class="font-sans"></span> <span>•</span> <span id="time-text" class="font-mono tabular-nums"></span> </span> </h3>
                </div>
            </div>
                <div <?php if(!empty($_GET['context']) && $_GET['context'] === 'edit') echo 'data-wp-inner-blocks'; ?>>
                <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo PG_Blocks_v4::getInnerContent( $args ); ?>
            </div>
        </div>
    </div>
</section>