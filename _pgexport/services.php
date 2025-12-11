<?php get_header(); ?>

        <main>
            <section class="min-h-screen min-w-0">
                <div class="grid grid-cols-1 min-w-0 gap-4 md:gap-8 pl-4 pr-4 md:grid-cols-12 md:pl-6 md:pr-6">
                    <!-- Sidebar -->
                    <aside class="col-span-12 min-w-0 self-start top-[9vh] md:col-span-3 md:sticky" aria-labelledby="sidebar-heading">
                        <div>
                            <section class="mb-6" aria-labelledby="about-us-heading">
                                <div class="border-solid">
                                    <div class="flex justify-between items-center md:block">
                                        <h3 id="about-us-heading" class="flex font-semibold gap-2 items-center text-xs uppercase"> <?php _e( 'ABOUT', 'blackboard_by_zdc' ); ?> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span> </h3>
                                        <!-- Clock for mobile - visible only on small screens -->
                                        <div class="md:hidden flex justify-end min-w-0 flex-shrink-0">
                                            <h3 id="dynamic-date-mobile" class="flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap"> <span id="date-display-mobile" class="font-sans text-right flex items-center gap-1"> <span id="date-text-mobile" class="font-sans"></span> <span>•</span> <span id="time-text-mobile" class="font-mono tabular-nums"></span> </span> </h3>
                                        </div>
                                    </div>
                                    <div class="bg-custom_pink-200 mt-6 pb-2.5 pl-2.5 pr-2.5 pt-2.5">
                                        <h1 class="font-bold mb-6 text-4xl"><?php _e( 'CUSTOM WEB DESING &amp; CODING', 'blackboard_by_zdc' ); ?></h1>
                                        <h2 class="font-thin mb-6 text-sm"> <?php _e( 'Blackboard is a', 'blackboard_by_zdc' ); ?> <b><?php _e( 'creative digital service boutique.', 'blackboard_by_zdc' ); ?></b> </h2>
                                        <p class="mb-6 text-sm"> <?php _e( 'We specialise in helping', 'blackboard_by_zdc' ); ?> <b><?php _e( 'fashion brands, premium firms, and artistic ventures', 'blackboard_by_zdc' ); ?></b> <?php _e( 'transform their ideas into a tailor-made online presence, delivering digital solutions that are both functional and beautifully crafted.', 'blackboard_by_zdc' ); ?> </p>
                                        <p class="mb-6 text-sm"> <?php _e( 'By combining', 'blackboard_by_zdc' ); ?> <span class="font-normal"><?php _e( 'design, technology, and strategy', 'blackboard_by_zdc' ); ?></span><?php _e( ', we develop digital platforms that grow from a vision, intuition, or necessity into a fully realized online presence.&nbsp;', 'blackboard_by_zdc' ); ?> </p>
                                        <p class="mb-6 text-sm"> <?php _e( 'Backed by 10+ years of hands-on experience, we work at the intersection of precision and creativity.', 'blackboard_by_zdc' ); ?> </p>
                                        <p class="mb-6 text-sm"> <?php _e( 'Selected clients: Bradley Seymour, Dune Studios, Marzotto Group, WP Lavori in Corso, Colombo &amp; Partners, TimeSwapp, Waldorf School of Milan', 'blackboard_by_zdc' ); ?> </p>
                                        <p class="mb-6 text-sm"> <?php _e( 'Blackboard is the digital arm of', 'blackboard_by_zdc' ); ?> <a href="https://zdcstudio.com" target="_blank" class="!no-underline"><b><?php _e( 'zdc.studio', 'blackboard_by_zdc' ); ?></b></a>. </p>
                                        <p class="mb-6 text-sm"> <?php _e( 'Based in Milan, partnering with clients across the globe.', 'blackboard_by_zdc' ); ?> </p>
                                        <p class="mb-6 text-sm"> <?php _e( 'For any request write us', 'blackboard_by_zdc' ); ?> <a href="mailto:blackboard@zdcstudio.com?subject=type%20the%20subject" class="!no-underline"> <span class="font-normal"><?php _e( 'here', 'blackboard_by_zdc' ); ?></span> </a> </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </aside>
                    <!-- Main Content -->
                    <div id="main-content" class="col-span-12 min-w-0 md:col-span-9">
                        <!-- Section label + clock -->
                        <div class="hidden md:flex justify-between items-start gap-2 min-w-0">
                            <h3 class="flex font-semibold gap-2 items-center text-xs uppercase min-w-0"> <?php _e( 'Website packages', 'blackboard_by_zdc' ); ?> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]"></span> </h3>
                            <div class="flex justify-end min-w-0 flex-shrink-0">
                                <h3 id="dynamic-date" class="flex font-semibold gap-1 items-center justify-end text-xs uppercase whitespace-nowrap"> <span id="date-display" class="font-sans text-right flex items-center gap-1"> <span id="date-text" class="font-sans"></span> <span>•</span> <span id="time-text" class="font-mono tabular-nums"></span> </span> </h3>
                            </div>
                        </div>
                        <div class="max-w-6xl mx-auto grid gap-10 md:grid-cols-[minmax(0,2fr),minmax(0,1.4fr)] lg:gap-16 items-start"> 
                            <div> 
                                <h1 class="text-3xl md:text-5xl font-bold leading-tight mb-4"><?php _e( 'The shape of the site changes depending on the plan, but the foundation stays the same: We map goals, content, and guardrails. We set a lean, realistic scope', 'blackboard_by_zdc' ); ?></h1>                                                                                                    
                            </div>                                                          
                        </div>
                        <!-- Website packages: Entry / Grow / Pro -->
                        <section class="mt-10">
                            <div class="mb-4">
                                <h2 class="text-xs uppercase tracking-[0.18em] font-semibold text-gray-700"> <?php _e( 'How we work', 'blackboard_by_zdc' ); ?> </h2>
                                <p class="mt-2 text-sm text-gray-800"> <?php _e( 'Senior execution. Clear scope. Short timelines.', 'blackboard_by_zdc' ); ?> </p>
                            </div>
                            <div class="space-y-6 text-sm text-gray-800">
                                <!-- 01 — Discovery -->
                                <div class="border border-gray-200 rounded-2xl p-4 md:p-5 bg-white/60">
                                    <div class="flex items-baseline justify-between gap-2">
                                        <h3 class="text-xs uppercase tracking-[0.18em] font-semibold flex items-center gap-2"> <span><?php _e( '01 — Discovery', 'blackboard_by_zdc' ); ?></span> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3><span class="text-[11px] uppercase tracking-[0.16em] text-gray-600"> <?php _e( 'Intent, audience, constraints', 'blackboard_by_zdc' ); ?> </span>
                                    </div>
                                    <p class="mt-3 text-gray-800"> <?php _e( 'We map goals, content and guardrails, then set a lean, realistic scope that matches your', 'blackboard_by_zdc' ); ?> <?php _e( 'resources and timeline.', 'blackboard_by_zdc' ); ?> </p>
                                    <div class="mt-3">
                                        <h4 class="text-[11px] uppercase tracking-[0.16em] font-semibold text-gray-700 mb-1"> <?php _e( 'Detailed focus: Content &amp; structure', 'blackboard_by_zdc' ); ?> </h4>
                                        <ul class="list-disc pl-5 space-y-1 text-gray-800">
                                            <li>
                                                <?php _e( 'Content and page mapping before design', 'blackboard_by_zdc' ); ?>
                                            </li>
                                            <li>
                                                <?php _e( 'Navigation and hierarchy that match your project', 'blackboard_by_zdc' ); ?>
                                            </li>
                                            <li>
                                                <?php _e( 'Wireframes / low-fidelity layouts where needed', 'blackboard_by_zdc' ); ?>
                                            </li>
                                            <li>
                                                <?php _e( 'Simple content guidelines (tone, length, image ratios)', 'blackboard_by_zdc' ); ?>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- 02 — Design -->
                                <div class="border border-gray-200 rounded-2xl p-4 md:p-5 bg-white/60">
                                    <div class="flex items-baseline justify-between gap-2">
                                        <h3 class="text-xs uppercase tracking-[0.18em] font-semibold flex items-center gap-2"> <span><?php _e( '02 — Design', 'blackboard_by_zdc' ); ?></span> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3><span class="text-[11px] uppercase tracking-[0.16em] text-gray-600"> <?php _e( 'System &amp; composition', 'blackboard_by_zdc' ); ?> </span>
                                    </div>
                                    <p class="mt-3 text-gray-800"> <?php _e( 'Grid, type, components. Editorial clarity over noise, with layouts tuned to your', 'blackboard_by_zdc' ); ?> <?php _e( 'photography and visual language.', 'blackboard_by_zdc' ); ?> </p>
                                    <div class="mt-3">
                                        <h4 class="text-[11px] uppercase tracking-[0.16em] font-semibold text-gray-700 mb-1"> <?php _e( 'Detailed focus: Design &amp; front-end', 'blackboard_by_zdc' ); ?> </h4>
                                        <ul class="list-disc pl-5 space-y-1 text-gray-800">
                                            <li>
                                                <?php _e( 'Custom layout and type system (no generic theme skins)', 'blackboard_by_zdc' ); ?>
                                            </li>
                                            <li>
                                                <?php _e( 'Responsive grids, balanced margins and rhythm', 'blackboard_by_zdc' ); ?>
                                            </li>
                                            <li>
                                                <?php _e( 'Gentle motion where it helps pacing (no circus)', 'blackboard_by_zdc' ); ?>
                                            </li>
                                            <li>
                                                <?php _e( 'Design tuned to your existing brand assets and photography', 'blackboard_by_zdc' ); ?>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- 03 — Build -->
                                <div class="border border-gray-200 rounded-2xl p-4 md:p-5 bg-white/60">
                                    <div class="flex items-baseline justify-between gap-2">
                                        <h3 class="text-xs uppercase tracking-[0.18em] font-semibold flex items-center gap-2"> <span><?php _e( '03 — Build', 'blackboard_by_zdc' ); ?></span> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3><span class="text-[11px] uppercase tracking-[0.16em] text-gray-600"> <?php _e( 'From prototype to live site', 'blackboard_by_zdc' ); ?> </span>
                                    </div>
                                    <p class="mt-3 text-gray-800"> <?php _e( 'We build a custom theme with the right tools for your project (Pinegrow, Kadence, block editor),', 'blackboard_by_zdc' ); ?> <?php _e( 'keeping the stack lean and documented.', 'blackboard_by_zdc' ); ?> </p>
                                    <div class="mt-3">
                                        <h4 class="text-[11px] uppercase tracking-[0.16em] font-semibold text-gray-700 mb-1"> <?php _e( 'Detailed focus: Build &amp; handover', 'blackboard_by_zdc' ); ?> </h4>
                                        <ul class="list-disc pl-5 space-y-1 text-gray-800">
                                            <li>
                                                <?php _e( 'Modern block-based WordPress build (Kadence + custom blocks)', 'blackboard_by_zdc' ); ?>
                                            </li>
                                            <li>
                                                <?php _e( 'Performance-minded decisions (caching, images, fonts)', 'blackboard_by_zdc' ); ?>
                                            </li>
                                            <li>
                                                <?php _e( 'Basic SEO and analytics setup', 'blackboard_by_zdc' ); ?>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- 04 — Launch & Care -->
                                <div class="border border-gray-200 rounded-2xl p-4 md:p-5 bg-white/60">
                                    <div class="flex items-baseline justify-between gap-2">
                                        <h3 class="text-xs uppercase tracking-[0.18em] font-semibold flex items-center gap-2"> <span><?php _e( '04 — Launch &amp; care', 'blackboard_by_zdc' ); ?></span> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3><span class="text-[11px] uppercase tracking-[0.16em] text-gray-600"> <?php _e( 'Deploy, optimise, support', 'blackboard_by_zdc' ); ?> </span>
                                    </div>
                                    <p class="mt-3 text-gray-800"> <?php _e( 'We launch, run basic performance and analytics passes, and—if you want us on call—plug you into', 'blackboard_by_zdc' ); ?> <?php _e( 'a care plan with hosting, updates and strategic time.', 'blackboard_by_zdc' ); ?> </p>
                                    <div class="mt-3">
                                        <h4 class="text-[11px] uppercase tracking-[0.16em] font-semibold text-gray-700 mb-1"> <?php _e( 'Detailed focus: Launch &amp; support', 'blackboard_by_zdc' ); ?> </h4>
                                        <ul class="list-disc pl-5 space-y-1 text-gray-800">
                                            <li>
                                                <?php _e( 'Handover session so you can update comfortably', 'blackboard_by_zdc' ); ?>
                                            </li>
                                            <li>
                                                <?php _e( 'Short, practical documentation (no 40-page PDF)', 'blackboard_by_zdc' ); ?>
                                            </li>
                                            <li>
                                                <?php _e( 'Optional ongoing care plans with hosting included', 'blackboard_by_zdc' ); ?>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div class="gap-6 grid grid-cols-1 mt-6 pb-6 md:grid-cols-3">
                            <!-- Entry -->
                            <div class="flex flex-col">
                                <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"><?php _e( 'Starting', 'blackboard_by_zdc' ); ?><br><span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span></h3>
                                <div class="space-y-2 text-sm">
                                    <div><span class="font-semibold"><?php _e( 'Price:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'From €2,900', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Description:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Essential presence', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <hr class="border-t border-black/10 my-2">
                                    <div><span class="font-semibold"><?php _e( 'Pages:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Up to 5', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Design:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Custom layout &amp; style', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Contact Forms:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( '1 standard', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Blog:', 'blackboard_by_zdc' ); ?></span> &mdash;
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Newsletter:', 'blackboard_by_zdc' ); ?></span> &mdash;
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'SEO:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Basic / Core SEO setup', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Performance:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Core optimizations', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Analytics:', 'blackboard_by_zdc' ); ?></span> &mdash;
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Accessibility:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Best practices', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <hr class="border-t border-black/10 my-2">
                                    <div><span class="font-semibold"><?php _e( 'Hosting &amp; Maintenance:', 'blackboard_by_zdc' ); ?></span>
                                        <?php _e( 'Host anywhere you like – add a maintenance plan and hosting is included.', 'blackboard_by_zdc' ); ?>
                                    </div>
                                </div>
                            </div>
                            <!-- Grow (Most Popular) -->
                            <div class="flex flex-col">
                                <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"> <?php _e( 'Grow', 'blackboard_by_zdc' ); ?> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> <span class="ml-2 text-[10px] uppercase tracking-wide border border-black px-2 py-0.5 rounded-full"> <?php _e( 'Most Popular', 'blackboard_by_zdc' ); ?> </span> </h3>
                                <div class="space-y-2 text-sm">
                                    <div><span class="font-semibold"><?php _e( 'Price:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'From €3,800', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Description:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Structured, content-driven', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <hr class="border-t border-black/10 my-2">
                                    <div><span class="font-semibold"><?php _e( 'Pages:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Up to 10', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Design:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Content-driven page design &amp; layout', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Contact Forms:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Advanced logic / Advanced forms &amp; blog setup', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Blog:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Setup + layout', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Newsletter:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Basic (Mailchimp)', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'SEO:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Image SEO + performance boosts', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Performance:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Caching &amp; delivery', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Analytics:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'GA4', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Accessibility:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'AA-focused', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <hr class="border-t border-black/10 my-2">
                                    <div><span class="font-semibold"><?php _e( 'Hosting &amp; Maintenance:', 'blackboard_by_zdc' ); ?></span>
                                        <?php _e( 'Host anywhere you like – add a maintenance plan and hosting is included.', 'blackboard_by_zdc' ); ?>
                                    </div>
                                </div>
                            </div>
                            <!-- Pro -->
                            <div class="flex flex-col">
                                <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"> <?php _e( 'Pro', 'blackboard_by_zdc' ); ?> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3>
                                <div class="space-y-2 text-sm">
                                    <div><span class="font-semibold"><?php _e( 'Price:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'From €5,500', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Description:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Custom builds &amp; integrations', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <hr class="border-t border-black/10 my-2">
                                    <div><span class="font-semibold"><?php _e( 'Pages:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( '12+ or custom scope', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Design:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Bespoke theme (Kadence/Pinegrow)', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Contact Forms:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Conditional &amp; custom / Conditional forms &amp; integrations', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Blog:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Extended features + SEO structure', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Newsletter:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Automation-ready', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'SEO:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Structured data + technical SEO audit', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Performance:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Full-stack + CDN config', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Analytics:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'GA4 + events', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Accessibility:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'AA+ review', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <hr class="border-t border-black/10 my-2">
                                    <div><span class="font-semibold"><?php _e( 'Hosting &amp; Maintenance:', 'blackboard_by_zdc' ); ?></span>
                                        <?php _e( 'Host anywhere you like – add a maintenance plan and hosting is included.', 'blackboard_by_zdc' ); ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <h2 class="text-xs uppercase tracking-[0.18em] font-semibold text-gray-700"><?php _e( 'website packages', 'blackboard_by_zdc' ); ?></h2>
                            <p class="mt-2 text-sm text-gray-800"><?php _e( 'One website service, three scopes. Every plan starts with a content and structure review, custom layouts and a lean, modern WordPress build', 'blackboard_by_zdc' ); ?></p>
                        </div>
                        <!-- Care & Hosting plans: same 3-column layout, different content -->
                        <aside class="bg-white/60 border border-gray-200 rounded-2xl p-5 md:p-6 flex flex-col gap-4">
                            <h2 class="text-xs uppercase tracking-[0.18em] font-semibold text-gray-700"><?php _e( 'Good to know', 'blackboard_by_zdc' ); ?></h2>
                            <ul class="space-y-4 text-sm text-gray-800">
                                <li>
                                    <strong class="block text-gray-900"><?php _e( 'A single, flexible service', 'blackboard_by_zdc' ); ?></strong>
                                    <span class="text-gray-700"> <?php _e( 'One website service, three scopes. Every plan starts with a content and structure review,', 'blackboard_by_zdc' ); ?> <?php _e( 'custom layouts and a lean, modern WordPress build.', 'blackboard_by_zdc' ); ?> </span>
                                </li>
                                <li>
                                    <strong class="block text-gray-900"><?php _e( 'Designed around your content', 'blackboard_by_zdc' ); ?></strong>
                                    <span class="text-gray-700"> <?php _e( 'We map pages, copy and imagery before touching layouts, so the site grows with your', 'blackboard_by_zdc' ); ?> <?php _e( 'editorial or product rhythm.', 'blackboard_by_zdc' ); ?> </span>
                                </li>
                                <li>
                                    <strong class="block text-gray-900"><?php _e( 'Built on WordPress', 'blackboard_by_zdc' ); ?></strong>
                                    <span class="text-gray-700"> <?php _e( 'Modern block-based theme (Kadence + Pinegrow). Easy to update, no page-builder bloat.', 'blackboard_by_zdc' ); ?> </span>
                                </li>
                                <li>
                                    <strong class="block text-gray-900"><?php _e( 'Maintenance is optional', 'blackboard_by_zdc' ); ?></strong>
                                    <span class="text-gray-700"> <?php _e( 'You can host wherever you like. If you want us close by, our care plans include hosting,', 'blackboard_by_zdc' ); ?> <?php _e( 'updates and strategic time, so everything sits under one team.', 'blackboard_by_zdc' ); ?> </span>
                                </li>
                            </ul>
                        </aside>
                        <div class="gap-6 grid grid-cols-1 mt-4 pb-6 md:grid-cols-3">
                            <!-- Essential Care -->
                            <div class="flex flex-col">
                                <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"> <?php _e( 'Essential Care', 'blackboard_by_zdc' ); ?> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3>
                                <div class="space-y-2 text-sm">
                                    <div><span class="font-semibold"><?php _e( 'Price:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'From €70 / month', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Best for:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Small brochure / portfolio sites', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <hr class="border-t border-black/10 my-2">
                                    <div><span class="font-semibold"><?php _e( 'Hosting:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Included – managed on our premium EU servers', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Updates:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Monthly WordPress core &amp; plugin updates', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Backups:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Daily backups with 30-day retention', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Security:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Firewall + malware scans', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Performance:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Core performance checks &amp; cache tuning', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Support:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Email support + 1 small content tweak / month', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Consultation:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( '1× 60 min strategic check-in per year', 'blackboard_by_zdc' ); ?>
                                    </div>
                                </div>
                            </div>
                            <!-- Growth Care (Most Popular) -->
                            <div class="flex flex-col">
                                <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"> <?php _e( 'Growth Care', 'blackboard_by_zdc' ); ?> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> <span class="ml-2 text-[10px] uppercase tracking-wide border border-black px-2 py-0.5 rounded-full"> <?php _e( 'Most Popular', 'blackboard_by_zdc' ); ?> </span> </h3>
                                <div class="space-y-2 text-sm">
                                    <div><span class="font-semibold"><?php _e( 'Price:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'From €130 / month', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Best for:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Growing content sites &amp; active blogs', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <hr class="border-t border-black/10 my-2">
                                    <div><span class="font-semibold"><?php _e( 'Hosting:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Included – managed hosting + staging environment', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Updates:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Weekly core, theme &amp; plugin updates', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Backups:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Twice-daily backups with 60-day retention', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Security:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Advanced firewall, uptime monitoring &amp; alerts', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Performance:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Caching, image optimization &amp; CDN guidance', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Support:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Email support + up to 3 small tasks / month', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Consultation:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( '2× 60 min growth &amp; UX sessions per year', 'blackboard_by_zdc' ); ?>
                                    </div>
                                </div>
                            </div>
                            <!-- Pro Care -->
                            <div class="flex flex-col">
                                <h3 class="flex font-semibold gap-2 items-center mb-4 text-xs uppercase"> <?php _e( 'Pro Care', 'blackboard_by_zdc' ); ?> <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span> </h3>
                                <div class="space-y-2 text-sm">
                                    <div><span class="font-semibold"><?php _e( 'Price:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'From €220 / month', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Best for:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'E-commerce &amp; mission-critical sites', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <hr class="border-t border-black/10 my-2">
                                    <div><span class="font-semibold"><?php _e( 'Hosting:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Included – high-availability hosting + CDN', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Updates:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Weekly updates with compatibility checks', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Backups:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Frequent backups with 90-day retention', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Security:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Extended monitoring &amp; hardening, priority alerts', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Performance:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Performance sprints &amp; load-time reviews', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Support:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Priority support &amp; emergency incident handling', 'blackboard_by_zdc' ); ?>
                                    </div>
                                    <div><span class="font-semibold"><?php _e( 'Consultation:', 'blackboard_by_zdc' ); ?></span> 
                                        <?php _e( 'Up to 4× 60 min strategic sessions per year', 'blackboard_by_zdc' ); ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Existing comparison tbody snippet (if you’re still using the table elsewhere) -->
                    </div>
                </div>
            </section>
            <!-- Hero -->             
            <section class="py-16 px-4 mx-6">                  
</section>             
            <!-- Plans -->             
            <section id="plans" class="py-10 px-4 mx-6"> 
                <div class="max-w-6xl mx-auto"> 
                    <div class="flex flex-col md:flex-row md:justify-between gap-4 md:items-end mb-8"> 
                        <div> 
                            <h2 class="text-2xl md:text-4xl font-bold"><?php _e( 'One service. Three scopes.', 'blackboard_by_zdc' ); ?></h2> 
                            <p class="mt-2 text-gray-700 max-w-xl">  <?php _e( 'All plans start from a shared base: thoughtful structural design, a lean WordPress build and clear documentation. What changes is how much content we handle and how far we go together.', 'blackboard_by_zdc' ); ?>  </p> 
                        </div>                         
                        <div class="text-xs text-gray-600 max-w-xs"> 
                            <p>  <?php _e( 'Pricing is for guidance and applies to most projects. We’ll confirm a fixed quote once we’ve seen your content, references and goals.', 'blackboard_by_zdc' ); ?>  </p> 
                        </div>                         
                    </div>                     
                    <div class="grid gap-6 lg:grid-cols-3"> 
                        <!-- First plan -->                         
                        <article class="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between"> 
                            <div class="space-y-4"> 
                                <h3 class="text-xs uppercase tracking-[0.18em] font-semibold flex items-center gap-2">  <?php _e( 'Starting', 'blackboard_by_zdc' ); ?>  <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span>  </h3> 
                                <p class="text-sm text-gray-800">  <?php _e( 'For small teams and projects who want a clean, well-structured site to introduce their work, and don’t need a huge content architecture yet.', 'blackboard_by_zdc' ); ?>  </p> 
                                <!-- At a glance -->                                 
                                <div> 
                                    <h4 class="text-xs uppercase tracking-[0.18em] font-semibold mb-2"><?php _e( 'At a Glance', 'blackboard_by_zdc' ); ?></h4> 
                                    <ul class="text-sm text-gray-800 space-y-1"> 
                                        <li>
                                            <?php _e( 'Up to 5 pages', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Custom layout &amp; typography', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Simple, clear navigation', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Mobile-first, fast to load', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                    </ul>                                     
                                </div>                                 
                                <!-- About -->                                 
                                <div class="flex items-baseline"> 
                                    <h3 class="flex font-extrabold gap-2 items-center mb-4 text-xs uppercase tracking-[0.18em]">  <?php _e( 'Starting', 'blackboard_by_zdc' ); ?>  <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span>  </h3> 
                                    <ul class="font-extralight list-none mb-0 ml-2 pl-4 text-sm"> 
                                        <li>
                                            <?php _e( 'Up to 5 pages', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Custom layout &amp; type system', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Simple content structure', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Basic contact form', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Image optimisation', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Essential SEO setup', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Basic analytics (GA4)', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Accessibility: sensible defaults', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li> 
                                            <button type="button" class="inline-flex items-center justify-center px-4 py-1.5 rounded-md text-sm border border-gray-900 bg-gray-900 text-white">
                                                <?php _e( 'From &euro;3,500', 'blackboard_by_zdc' ); ?>
                                            </button>                                             
                                        </li>                                         
                                    </ul>                                     
                                </div>                                 
                            </div>                             
                            <div class="mt-6 text-xs text-gray-600 border-t border-dashed border-gray-200 pt-3"> 
                                <?php _e( 'Typical timeline: 4–6 weeks once content is ready.', 'blackboard_by_zdc' ); ?> 
                            </div>                             
                        </article>                         
                        <!-- Second plan -->                         
                        <article class="bg-white border border-gray-900 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden"> 
                            <div class="absolute right-4 top-4 rounded-full border border-gray-900 px-3 py-1 text-[10px] uppercase tracking-[0.18em] bg-white/80 backdrop-blur"> 
                                <?php _e( 'Most chosen', 'blackboard_by_zdc' ); ?> 
                            </div>                             
                            <div class="space-y-4"> 
                                <h3 class="text-xs uppercase tracking-[0.18em] font-semibold flex items-center gap-2">  <?php _e( 'Growing', 'blackboard_by_zdc' ); ?>  <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span>  </h3> 
                                <p class="text-sm text-gray-800">  <?php _e( 'For studios and brands with more stories to tell: case studies, categories, archives and lightweight editorial flows that can grow over time.', 'blackboard_by_zdc' ); ?>  </p> 
                                <!-- At a glance -->                                 
                                <div> 
                                    <h4 class="text-xs uppercase tracking-[0.18em] font-semibold mb-2"><?php _e( 'At a Glance', 'blackboard_by_zdc' ); ?></h4> 
                                    <ul class="text-sm text-gray-800 space-y-1"> 
                                        <li>
                                            <?php _e( 'Up to 8 pages', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Page storytelling &amp; structure', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Flexible grids &amp; modules', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Blog or journal ready', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                    </ul>                                     
                                </div>                                 
                                <!-- About -->                                 
                                <div class="flex items-baseline"> 
                                    <h3 class="flex font-extrabold gap-2 items-center mb-4 text-xs uppercase tracking-[0.18em]">  <?php _e( 'Growing', 'blackboard_by_zdc' ); ?>  <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span>  </h3> 
                                    <ul class="font-extralight list-none mb-0 ml-2 pl-4 text-sm"> 
                                        <li>
                                            <?php _e( 'Up to 8 pages', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Page storytelling &amp; structure', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Advanced Contact Forms', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Image SEO + performance boosts', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Basic Blog Setup + layout', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Newsletter: Basic (Mailchimp)', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Performance Caching&nbsp;', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Google Analytics GA4', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Accessibility: AA-focused', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li> 
                                            <button type="button" class="inline-flex items-center justify-center px-4 py-1.5 rounded-md text-sm text-white bg-black">
                                                <?php _e( 'From &euro;4,500', 'blackboard_by_zdc' ); ?>
                                            </button>                                             
                                        </li>                                         
                                    </ul>                                     
                                </div>                                 
                            </div>                             
                            <div class="mt-6 text-xs text-gray-600 border-t border-dashed border-gray-200 pt-3"> 
                                <?php _e( 'Typical timeline: 6–8 weeks once content is ready.', 'blackboard_by_zdc' ); ?> 
                            </div>                             
                        </article>                         
                        <!-- Third plan -->                         
                        <article class="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between"> 
                            <div class="space-y-4"> 
                                <h3 class="text-xs uppercase tracking-[0.18em] font-semibold flex items-center gap-2">  <?php _e( 'Established', 'blackboard_by_zdc' ); ?>  <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span>  </h3> 
                                <p class="text-sm text-gray-800">  <?php _e( 'For projects with a larger catalogue or multiple audiences, where we need more complex filtering, content relationships or multi-language structure.', 'blackboard_by_zdc' ); ?>  </p> 
                                <!-- At a glance -->                                 
                                <div> 
                                    <h4 class="text-xs uppercase tracking-[0.18em] font-semibold mb-2"><?php _e( 'At a Glance', 'blackboard_by_zdc' ); ?></h4> 
                                    <ul class="text-sm text-gray-800 space-y-1"> 
                                        <li>
                                            <?php _e( '12+ pages or custom', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Complex structures &amp; filters', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Multi-language ready', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Custom content types', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                    </ul>                                     
                                </div>                                 
                                <!-- About -->                                 
                                <div class="flex items-baseline"> 
                                    <h3 class="flex font-extrabold gap-2 items-center mb-4 text-xs uppercase tracking-[0.18em]">  <?php _e( 'Established', 'blackboard_by_zdc' ); ?>  <span class="bg-black h-2 w-2 rounded-full relative -top-[1px]" aria-hidden="true"></span>  </h3> 
                                    <ul class="font-extralight list-none mb-0 ml-2 pl-4 text-sm"> 
                                        <li>
                                            <?php _e( '12+ or custom page count', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Custom taxonomies &amp; filters', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Case study &amp; archive templates', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Multi-language ready (WPML/TranslatePress)', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Complex forms &amp; integrations', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Structured data where relevant', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Performance &amp; accessibility review', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li>
                                            <?php _e( 'Basic editorial guidelines', 'blackboard_by_zdc' ); ?>
                                        </li>                                         
                                        <li> 
                                            <button type="button" class="inline-flex items-center justify-center px-4 py-1.5 rounded-md text-sm text-white bg-black">
                                                <?php _e( 'From &euro;5,500', 'blackboard_by_zdc' ); ?>
                                            </button>                                             
                                        </li>                                         
                                    </ul>                                     
                                </div>                                 
                            </div>                             
                            <div class="mt-6 text-xs text-gray-600 border-t border-dashed border-gray-200 pt-3"> 
                                <?php _e( 'Typical timeline: 8–12 weeks once content is ready.', 'blackboard_by_zdc' ); ?> 
                            </div>                             
                        </article>                         
                    </div>                     
                </div>                 
            </section>             
            <!-- What's included (kept, slightly tighter) -->             
            <section class="py-14 px-4 mx-6"> 
                <div class="max-w-auto mx-auto"> 
                    <div class="text-center mb-8 md:mb-10"> 
                        <h2 class="text-2xl md:text-4xl font-bold text-gray-900"><?php _e( 'What’s Included', 'blackboard_by_zdc' ); ?></h2> 
                        <p class="mt-2 text-gray-700 max-w-2xl mx-auto text-sm md:text-base">  <?php _e( 'The shape of the site changes depending on the plan, but the foundation stays the same: a clear content map, a tailored visual system and considered technical decisions. No “mystery stack”, just clean, documented work.', 'blackboard_by_zdc' ); ?>  </p> 
                    </div>                     
                    <figure class="relative mb-8 overflow-hidden rounded-2xl border border-gray-200"> 
                        <img src="https://images.unsplash.com/photo-...elopment workstation" alt="Design and development workstation" class="w-full h-44 md:h-64 object-cover"/> 
                        <div class="absolute inset-0 bg-gradient-to-tr from-black/40 to-black/10"></div>                         
                        <figcaption class="absolute inset-0 flex items-center justify-center text-center px-6"> 
                            <p class="max-w-xl text-sm md:text-base text-white/90">  <?php _e( 'We work with a small set of tools (WordPress, Kadence, Pinegrow, GSAP) so we can spend more energy on structure, pacing and how your work is read – not on fighting with plugins.', 'blackboard_by_zdc' ); ?>  </p> 
                        </figcaption>                         
                    </figure>                     
                    <div class="grid gap-6 md:grid-cols-3 text-sm text-gray-800"> 
                        <div class="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col gap-3"> 
                            <h3 class="text-xs uppercase tracking-[0.18em] font-semibold"><?php _e( 'Content &amp; structure', 'blackboard_by_zdc' ); ?></h3> 
                            <ul class="space-y-2"> 
                                <li>
                                    <?php _e( 'Content and page mapping before design', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( 'Navigation and hierarchy that match your project', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( 'Wireframes / low-fidelity layouts where needed', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( 'Simple content guidelines (tone, length, image ratios)', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                            </ul>                             
                        </div>                         
                        <div class="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col gap-3"> 
                            <h3 class="text-xs uppercase tracking-[0.18em] font-semibold"><?php _e( 'Design &amp; front-end', 'blackboard_by_zdc' ); ?></h3> 
                            <ul class="space-y-2"> 
                                <li>
                                    <?php _e( 'Custom layout and type system (no generic theme skins)', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( 'Responsive grids, balanced margins and rhythm', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( 'Gentle motion where it helps pacing (no circus)', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( 'Design tuned to your existing brand assets and photography', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                            </ul>                             
                        </div>                         
                        <div class="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col gap-3"> 
                            <h3 class="text-xs uppercase tracking-[0.18em] font-semibold"><?php _e( 'Build &amp; handover', 'blackboard_by_zdc' ); ?></h3> 
                            <ul class="space-y-2"> 
                                <li>
                                    <?php _e( 'Modern block-based WordPress build (Kadence + custom blocks)', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( 'Performance-minded decisions (caching, images, fonts)', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( 'Basic SEO and analytics setup', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( 'Handover session + short documentation so you can update comfortably', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                            </ul>                             
                        </div>                         
                    </div>                     
                </div>                 
            </section>             
            <!-- Comparison table -->             
            <section class="py-14 px-4 mx-6"> 
                <div class="max-w-6xl mx-auto"> 
                    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6"> 
                        <div> 
                            <h2 class="text-2xl md:text-3xl font-bold"><?php _e( 'Compare scopes', 'blackboard_by_zdc' ); ?></h2> 
                            <p class="mt-2 text-sm text-gray-700 max-w-xl">  <?php _e( 'This isn’t a strict feature matrix – it’s a way to understand where your project might sit. If your needs fall between columns, we can adjust.', 'blackboard_by_zdc' ); ?>  </p> 
                        </div>                         
                        <div class="text-xs text-gray-600 max-w-xs"> 
                            <p>  <?php _e( 'All plans include a basic content and structure review, custom layouts and a considered WordPress build. Maintenance and hosting are optional.', 'blackboard_by_zdc' ); ?>  </p> 
                        </div>                         
                    </div>                     
                    <div class="overflow-x-auto rounded-2xl border border-gray-200 bg-white"> 
                        <div class="min-w-full align-middle"> 
                            <table class="min-w-full divide-y divide-gray-200 text-sm"> 
                                <thead class="bg-gray-50 text-xs uppercase tracking-[0.18em] text-gray-600"> 
                                    <tr> 
                                        <th scope="col" class="px-6 py-3 text-left font-semibold"><?php _e( 'Area', 'blackboard_by_zdc' ); ?></th> 
                                        <th scope="col" class="px-6 py-3 text-left font-semibold"><?php _e( 'Starting', 'blackboard_by_zdc' ); ?></th> 
                                        <th scope="col" class="px-6 py-3 text-left font-semibold"><?php _e( 'Growing', 'blackboard_by_zdc' ); ?></th> 
                                        <th scope="col" class="px-6 py-3 text-left font-semibold"><?php _e( 'Established', 'blackboard_by_zdc' ); ?></th> 
                                    </tr>                                     
                                </thead>                                 
                                <tbody class="divide-y divide-gray-200"> 
                                    <tr class="hover:bg-gray-50 transition-colors"> 
                                        <td class="px-6 py-4 font-semibold text-gray-900"><?php _e( 'Pages', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'Up to 5', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'Up to 8', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( '12+ or custom', 'blackboard_by_zdc' ); ?></td> 
                                    </tr>                                     
                                    <tr class="hover:bg-gray-50 transition-colors"> 
                                        <td class="px-6 py-4 font-semibold text-gray-900"><?php _e( 'Design', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'Custom layout', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'Page storytelling &amp; structure', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'Bespoke theme (Kadence/Pinegrow)', 'blackboard_by_zdc' ); ?></td> 
                                    </tr>                                     
                                    <tr class="hover:bg-gray-50 transition-colors"> 
                                        <td class="px-6 py-4 font-semibold text-gray-900"><?php _e( 'Content', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'You provide, we lightly edit', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'Shared work on key pages', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'Deeper structuring + guidelines', 'blackboard_by_zdc' ); ?></td> 
                                    </tr>                                     
                                    <tr class="hover:bg-gray-50 transition-colors"> 
                                        <td class="px-6 py-4 font-semibold text-gray-900"><?php _e( 'Blog / Journal', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'Optional, basic', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'Included, tailored layouts', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'Included, archives &amp; filters', 'blackboard_by_zdc' ); ?></td> 
                                    </tr>                                     
                                    <tr class="hover:bg-gray-50 transition-colors"> 
                                        <td class="px-6 py-4 font-semibold text-gray-900"><?php _e( 'Integrations', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'Newsletter, basic forms', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'As Starting + simple embeds', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'As Growing + custom workflows', 'blackboard_by_zdc' ); ?></td> 
                                    </tr>                                     
                                    <tr class="hover:bg-gray-50 transition-colors"> 
                                        <td class="px-6 py-4 font-semibold text-gray-900"><?php _e( 'Performance', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'Optimised images + caching', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'Deeper checks (Core Web Vitals)', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'Custom tuning per template', 'blackboard_by_zdc' ); ?></td> 
                                    </tr>                                     
                                    <tr class="hover:bg-gray-50 transition-colors"> 
                                        <td class="px-6 py-4 font-semibold text-gray-900"><?php _e( 'Accessibility', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'Sensible defaults', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'AA-focused', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700"><?php _e( 'AA+ review', 'blackboard_by_zdc' ); ?></td> 
                                    </tr>                                     
                                    <tr class="hover:bg-gray-50 transition-colors bg-gray-50"> 
                                        <td class="px-6 py-4 font-semibold text-gray-900"><?php _e( 'Hosting &amp; Maintenance', 'blackboard_by_zdc' ); ?></td> 
                                        <td class="px-6 py-4 text-gray-700">  <?php _e( 'Host anywhere you like – add a maintenance plan and hosting is included.', 'blackboard_by_zdc' ); ?>  </td> 
                                        <td class="px-6 py-4 text-gray-700">  <?php _e( 'Host anywhere you like – add a maintenance plan and hosting is included.', 'blackboard_by_zdc' ); ?>  </td> 
                                        <td class="px-6 py-4 text-gray-700">  <?php _e( 'Host anywhere you like – add a maintenance plan and hosting is included.', 'blackboard_by_zdc' ); ?>  </td> 
                                    </tr>                                     
                                </tbody>                                 
                            </table>                             
                        </div>                         
                    </div>                     
                </div>                 
            </section>             
            <!-- Hosting & Maintenance -->             
            <section class="bg-white py-16 px-4 mx-6"> 
                <div class="max-w-6xl mx-auto"> 
                    <!-- Hero card -->                     
                    <div class="relative overflow-hidden rounded-2xl border border-gray-200 mb-8"> 
                        <div class="w-full h-44 md:h-60 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>                         
                        <div class="absolute inset-0 bg-black/40"></div>                         
                        <div class="absolute inset-0 flex items-center justify-center text-center px-6"> 
                            <div class="max-w-2xl"> 
                                <h2 class="text-2xl md:text-3xl font-bold text-white">  <?php _e( 'Hosting &amp; Maintenance', 'blackboard_by_zdc' ); ?>  </h2> 
                                <p class="mt-2 text-white/90 text-sm md:text-base">  <?php _e( 'Already have hosting you trust? We’ll work with it.', 'blackboard_by_zdc' ); ?>  </p> 
                                <p class="mt-2 text-white/90 text-sm md:text-base">  <?php _e( 'Prefer one less thing to manage? Our maintenance plans include fast, secure hosting with our selected partners – so hosting, updates and monitoring all sit under one team.', 'blackboard_by_zdc' ); ?>  </p> 
                            </div>                             
                        </div>                         
                    </div>                     
                    <!-- Plans -->                     
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> 
                        <!-- Essential Care -->                         
                        <div class="bg-gray-50 border border-gray-200 p-6 rounded-2xl"> 
                            <h3 class="text-lg font-bold mb-1"><?php _e( 'Essential Care', 'blackboard_by_zdc' ); ?></h3> 
                            <p class="text-gray-600 mb-4"><?php _e( 'Updates, hosting, backups', 'blackboard_by_zdc' ); ?></p> 
                            <div class="mb-4"> <span class="text-2xl font-bold"><?php _e( '€39', 'blackboard_by_zdc' ); ?></span> <span class="text-gray-600"><?php _e( '/mo', 'blackboard_by_zdc' ); ?></span> 
                            </div>                             
                            <ul class="text-sm text-gray-800 space-y-2"> 
                                <li>
                                    <?php _e( 'WordPress &amp; plugin updates', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( 'Daily backups &amp; restore', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( 'SSL &amp; security monitoring', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( 'Email support', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( '1h/year digital &amp; brand consultation', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                            </ul>                             
                        </div>                         
                        <!-- Care+ -->                         
                        <div class="bg-white border-2 border-black p-6 rounded-2xl shadow-xs"> 
                            <h3 class="text-lg font-bold mb-1"><?php _e( 'Care+', 'blackboard_by_zdc' ); ?></h3> 
                            <p class="text-gray-600 mb-4"><?php _e( 'One monthly content revision', 'blackboard_by_zdc' ); ?></p> 
                            <div class="mb-4"> <span class="text-2xl font-bold"><?php _e( '€59', 'blackboard_by_zdc' ); ?></span> <span class="text-gray-600"><?php _e( '/mo', 'blackboard_by_zdc' ); ?></span> 
                            </div>                             
                            <ul class="text-sm text-gray-800 space-y-2"> 
                                <li>
                                    <?php _e( 'Everything in Essential Care', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( 'Monthly content update', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( 'Performance monitoring', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( 'Priority email support', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( '2h/year digital &amp; brand consultation', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                            </ul>                             
                        </div>                         
                        <!-- Growth -->                         
                        <div class="bg-gray-50 border border-gray-200 p-6 rounded-2xl"> 
                            <h3 class="text-lg font-bold mb-1"><?php _e( 'Growth', 'blackboard_by_zdc' ); ?></h3> 
                            <p class="text-gray-600 mb-4"><?php _e( 'Priority support &amp; reporting', 'blackboard_by_zdc' ); ?></p> 
                            <div class="mb-4"> <span class="text-2xl font-bold"><?php _e( '€79', 'blackboard_by_zdc' ); ?></span> <span class="text-gray-600"><?php _e( '/mo', 'blackboard_by_zdc' ); ?></span> 
                            </div>                             
                            <ul class="text-sm text-gray-800 space-y-2"> 
                                <li>
                                    <?php _e( 'Everything in Care+', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( 'Monthly performance reports', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( 'SEO monitoring', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( 'Optional phone support', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                                <li>
                                    <?php _e( '4h/year digital &amp; brand consultation', 'blackboard_by_zdc' ); ?>
                                </li>                                 
                            </ul>                             
                        </div>                         
                    </div>                     
                    <!-- Notes -->                     
                    <div class="mt-6 text-center text-xs text-gray-600"> 
                        <?php _e( 'Prices exclude VAT. Cancel anytime with one month’s notice. Platform fees (if any) billed separately.', 'blackboard_by_zdc' ); ?> 
                    </div>                     
                    <div class="mt-8 rounded-xl border border-gray-200 p-4 bg-gray-50 text-sm text-gray-800"> <strong><?php _e( 'We don’t host email.', 'blackboard_by_zdc' ); ?></strong> <span class="ml-1">  <?php _e( 'I recommend', 'blackboard_by_zdc' ); ?> <span class="underline"><?php _e( 'Zoho Mail', 'blackboard_by_zdc' ); ?></span> <?php _e( 'or', 'blackboard_by_zdc' ); ?> <span class="underline"><?php _e( 'Google Workspace', 'blackboard_by_zdc' ); ?></span> <?php _e( 'for business email, and can configure either for you.', 'blackboard_by_zdc' ); ?>  </span> 
                    </div>                     
                </div>                 
            </section>             
            <!-- Premium, quiet CTA (replaces “Ready to build…” block) -->             
            <section class="bg-[url('https://images.unsplash.com/pho...creative studio background')] bg-center bg-cover md:py-20 px-4 py-16 relative text-white mx-6"> 
                <div class="absolute inset-0 bg-black/70"></div>                 
                <div class="relative max-w-4xl mx-auto text-center"> 
                    <h2 class="font-bold mb-3 text-2xl md:text-3xl"><?php _e( 'Let’s keep it personal.', 'blackboard_by_zdc' ); ?></h2> 
                    <p class="leading-relaxed max-w-2xl mb-8 mx-auto text-sm md:text-base text-white/90">  <?php _e( 'I only take on a small number of projects at a time. If you’d like to talk about your site – or you’re not sure which scope you fit into – send a short message with where you are now and where you’d like to be.', 'blackboard_by_zdc' ); ?>  </p> 
                    <p class="leading-relaxed max-w-2xl mb-8 mx-auto text-sm md:text-base text-white/80">  <?php _e( 'If it sounds like we’re a fit, I’ll map a fixed-scope plan around your goals.', 'blackboard_by_zdc' ); ?>  </p> 
                    <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="mailto:?subject=Project%20Inquiry" class="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-black text-xs uppercase tracking-[0.18em] font-semibold hover:bg-white/90 transition-colors"><?php _e( 'Start a conversation', 'blackboard_by_zdc' ); ?></a> <a href="contact.html" class="border border-white/70 text-xs uppercase tracking-[0.18em] px-5 py-2.5 rounded-full font-semibold transition-colors hover:bg-white hover:text-black"><?php _e( 'Share your brief', 'blackboard_by_zdc' ); ?></a> 
                    </div>                     
                </div>                 
            </section>
        </main>         
        <section class="bg-black bg-center bg-cover pb-16 pt-20 px-4 relative text-white md:pb-24 md:pt-32 bg-[url('https://images.unsplash.com/photo-1518655048521-f130df041f66?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDd8fHdvcmtzcGFjZXxlbnwwfHx8fDE3NjE3Njc5NzZ8MA&ixlib=rb-4.1.0q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop')] mx-6">
            <div class="absolute bg-black/85 inset-0"></div>
            <div class="max-w-auto mx-auto relative z-10">
                <div class="grid md:grid-cols-2 items-start gap-10">
                    <div class="max-w-2xl"><span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] md:text-xs uppercase tracking-widest text-white/80"><?php _e( 'SERVICES &mdash; BOUTIQUE, NOT GENERIC', 'blackboard_by_zdc' ); ?></span>
                        <h1 class="font-bold mt-3 text-4xl md:text-4xl"><?php _e( 'Custom and beatiful Web Design &amp; Development', 'blackboard_by_zdc' ); ?></h1>
                        <p class="mt-3 md:mt-4 text-white/80 md:text-lg"><?php _e( 'Strategy, design, development, and ongoing care from a senior, boutique team. No fluff&mdash;just websites that impress and convert.', 'blackboard_by_zdc' ); ?></p>
                        <ul class="mt-5 md:mt-6 space-y-2 md:space-y-3">
                            <li class="flex items-start gap-3">
                                <svg class="mt-0.5 h-5 w-5 shrink-0 text-white/90" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space fill="currentColor" stroke> 
                                    <path d="M9.55 17.58a1 1 0 0 1-1.53.13l-3.6-3.6a1 1 0 1 1 1.42-1.42l2.76 2.76 8.6-8.6a1 1 0 0 1 1.42 1.41z"/> 
                                </svg>
                                <span class="text-sm md:text-base text-white/90"><?php _e( 'We map goals, content, and guardrails. We set a lean, realistic scope.', 'blackboard_by_zdc' ); ?></span>
                            </li>
                            <li class="flex items-start gap-3">
                                <svg class="mt-0.5 h-5 w-5 shrink-0 text-white/90" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space fill="currentColor" stroke> 
                                    <path d="M9.55 17.58a1 1 0 0 1-1.53.13l-3.6-3.6a1 1 0 1 1 1.42-1.42l2.76 2.76 8.6-8.6a1 1 0 0 1 1.42 1.41z"/> 
                                </svg>
                                <span class="text-sm md:text-base text-white/90"><?php _e( 'Launch in 2&ndash;5 weeks with senior execution.', 'blackboard_by_zdc' ); ?></span>
                            </li>
                            <li class="flex items-start gap-3">
                                <svg class="mt-0.5 h-5 w-5 shrink-0 text-white/90" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space fill="currentColor" stroke> 
                                    <path d="M9.55 17.58a1 1 0 0 1-1.53.13l-3.6-3.6a1 1 0 1 1 1.42-1.42l2.76 2.76 8.6-8.6a1 1 0 0 1 1.42 1.41z"/> 
                                </svg>
                                <span class="text-sm md:text-base text-white/90"><?php _e( 'Ongoing support and improvements—monthly care plans.', 'blackboard_by_zdc' ); ?></span>
                            </li>
                        </ul>
                        <div class="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3"><a href="mailto:?subject=Free%20Consultation" class="inline-flex justify-center rounded-xs bg-white px-6 py-3 text-black font-semibold hover:bg-white/90 transition-colors"> <?php _e( 'Book a free consult', 'blackboard_by_zdc' ); ?> </a><a href="#packages" class="inline-flex justify-center rounded-xs border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition-colors"> <?php _e( 'Compare packages', 'blackboard_by_zdc' ); ?> </a><a href="#work" class="inline-flex justify-center rounded-xs px-6 py-3 font-semibold text-white/90 hover:text-white underline decoration-white/40 hover:decoration-white"> <?php _e( 'See recent work', 'blackboard_by_zdc' ); ?> </a>
                        </div>
                    </div>
                    <div class="col-end-3 col-start-2 max-w-sm md:justify-self-end md:max-w-none row-end-2 row-start-1 w-full">
                        <div class="backdrop-blur-xs bg-white/5 border border-white/70 px-6 py-5 rounded-xs text-center">
                            <div class="text-[11px] md:text-xs uppercase tracking-widest text-white/80 mb-1">
                                <?php _e( 'Projects from', 'blackboard_by_zdc' ); ?>
                            </div>
                            <div class="text-3xl md:text-4xl font-extrabold" id="startingPrice">
                                <?php _e( '&euro; 2,900', 'blackboard_by_zdc' ); ?>
                            </div>
                            <div class="mt-2 text-xs md:text-sm text-white/70">
                                <?php _e( 'Typical timeline: 2–6 weeks', 'blackboard_by_zdc' ); ?>
                            </div>
                        </div>
                        <div class="h-44 md:h-60 mt-4 overflow-hidden rounded-xs shadow-xs w-full">
                            <img alt="Modern creative workspace with coding and design tools" class="w-full h-full object-cover" src="<?php echo get_template_directory_uri(); ?>/assets/images/office-web-design.webp"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="packages" class="px-4 py-16 md:py-24 border-y border-gray-200 bg-white mx-6">
            <div class="max-w-auto mx-auto">
                <div class="flex items-end justify-between gap-6 mb-10">
                    <div>
                        <h2 class="text-2xl md:text-4xl font-bold tracking-tight text-gray-900"><?php _e( 'Packages', 'blackboard_by_zdc' ); ?></h2>
                        <p class="text-sm md:text-base text-gray-700 mt-1"><?php _e( 'Projects from', 'blackboard_by_zdc' ); ?> <span data-min-price>—</span></p>
                    </div>
                    <div class="hidden md:flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600">
                        <span class="h-2 w-2 rounded-full bg-gray-400"></span>
                        <span><?php _e( 'WordPress development', 'blackboard_by_zdc' ); ?></span>
                    </div>
                </div>
                <div class="divide-y divide-gray-200 border-y border-gray-200 rounded-2xl overflow-hidden bg-white">
                    <article class="py-6 md:py-8 grid md:grid-cols-12 gap-4 md:gap-6 hover:bg-gray-50/60 transition-colors px-2 md:px-4">
                        <div class="md:col-span-3">
                            <h3 class="font-bold text-lg md:text-xl text-gray-900"><?php _e( 'Entry', 'blackboard_by_zdc' ); ?></h3>
                            <p class="text-gray-600 text-sm md:text-base"><?php _e( 'Essential presence', 'blackboard_by_zdc' ); ?></p>
                        </div>
                        <ul class="md:col-span-7 text-sm md:text-base text-gray-800 grid grid-cols-1 md:grid-cols-2 gap-y-2">
                            <li class="flex items-start gap-2"><span class="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-gray-900 text-white text-[10px]">✓</span><span><?php _e( 'Up to 5 pages', 'blackboard_by_zdc' ); ?></span>
                            </li>
                            <li class="flex items-start gap-2"><span class="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-gray-900 text-white text-[10px]">✓</span><span><?php _e( 'Custom layout &amp; style', 'blackboard_by_zdc' ); ?></span>
                            </li>
                            <li class="flex items-start gap-2"><span class="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-gray-900 text-white text-[10px]">✓</span><span><?php _e( '1 contact form', 'blackboard_by_zdc' ); ?></span>
                            </li>
                            <li class="flex items-start gap-2"><span class="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-gray-900 text-white text-[10px]">✓</span><span><?php _e( 'Core SEO setup', 'blackboard_by_zdc' ); ?></span>
                            </li>
                        </ul>
                        <div class="md:col-span-2 md:text-right">
                            <span class="inline-flex items-center px-2 py-1 border border-black rounded-full bg-white text-sm font-semibold"><?php _e( 'From', 'blackboard_by_zdc' ); ?> <span class="price ml-1" data-eur="2900"><?php _e( '€2,900', 'blackboard_by_zdc' ); ?></span></span>
                        </div>
                    </article>
                    <article class="py-6 md:py-8 grid md:grid-cols-12 gap-4 md:gap-6 bg-gray-50 hover:bg-gray-100/70 transition-colors px-2 md:px-4 border-y border-gray-200">
                        <div class="md:col-span-3">
                            <span class="block text-[10px] tracking-widest uppercase text-gray-600 mb-1"><?php _e( 'Most popular', 'blackboard_by_zdc' ); ?></span>
                            <h3 class="font-bold text-lg md:text-xl text-gray-900"><?php _e( 'Grow', 'blackboard_by_zdc' ); ?></h3>
                            <p class="text-gray-600 text-sm md:text-base"><?php _e( 'Structured, content‑driven', 'blackboard_by_zdc' ); ?></p>
                        </div>
                        <ul class="md:col-span-7 text-sm md:text-base text-gray-800 grid grid-cols-1 md:grid-cols-2 gap-y-2">
                            <li class="flex items-start gap-2"><span class="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-gray-900 text-white text-[10px]">✓</span><span><?php _e( 'Up to 10 pages', 'blackboard_by_zdc' ); ?></span>
                            </li>
                            <li class="flex items-start gap-2"><span class="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-gray-900 text-white text-[10px]">✓</span><span><?php _e( 'Full content architecture', 'blackboard_by_zdc' ); ?></span>
                            </li>
                            <li class="flex items-start gap-2"><span class="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-gray-900 text-white text-[10px]">✓</span><span><?php _e( 'Advanced forms &amp; blog setup', 'blackboard_by_zdc' ); ?></span>
                            </li>
                            <li class="flex items-start gap-2"><span class="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-gray-900 text-white text-[10px]">✓</span><span><?php _e( 'Image SEO + performance boosts', 'blackboard_by_zdc' ); ?></span>
                            </li>
                        </ul>
                        <div class="md:col-span-2 md:text-right">
                            <span class="inline-flex items-center px-2 py-1 border-2 border-black rounded-full bg-white text-sm font-semibold"><?php _e( 'From', 'blackboard_by_zdc' ); ?> <span class="price ml-1" data-eur="3800"><?php _e( '€3,800', 'blackboard_by_zdc' ); ?></span></span>
                        </div>
                    </article>
                    <article class="py-6 md:py-8 grid md:grid-cols-12 gap-4 md:gap-6 hover:bg-gray-50/60 transition-colors px-2 md:px-4">
                        <div class="md:col-span-3">
                            <h3 class="font-bold text-lg md:text-xl text-gray-900"><?php _e( 'Pro', 'blackboard_by_zdc' ); ?></h3>
                            <p class="text-gray-600 text-sm md:text-base"><?php _e( 'Custom builds &amp; integrations', 'blackboard_by_zdc' ); ?></p>
                        </div>
                        <ul class="md:col-span-7 text-sm md:text-base text-gray-800 grid grid-cols-1 md:grid-cols-2 gap-y-2">
                            <li class="flex items-start gap-2"><span class="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-gray-900 text-white text-[10px]">✓</span><span><?php _e( '12+ pages or custom scope', 'blackboard_by_zdc' ); ?></span>
                            </li>
                            <li class="flex items-start gap-2"><span class="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-gray-900 text-white text-[10px]">✓</span><span><?php _e( 'Bespoke theme (Kadence/Pinegrow)', 'blackboard_by_zdc' ); ?></span>
                            </li>
                            <li class="flex items-start gap-2"><span class="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-gray-900 text-white text-[10px]">✓</span><span><?php _e( 'Conditional forms &amp; integrations', 'blackboard_by_zdc' ); ?></span>
                            </li>
                            <li class="flex items-start gap-2"><span class="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-gray-900 text-white text-[10px]">✓</span><span><?php _e( 'Structured data + technical SEO audit', 'blackboard_by_zdc' ); ?></span>
                            </li>
                        </ul>
                        <div class="md:col-span-2 md:text-right">
                            <span class="inline-flex items-center px-2 py-1 border border-black rounded-full bg-white text-sm font-semibold"><?php _e( 'From', 'blackboard_by_zdc' ); ?> <span class="price ml-1" data-eur="5500"><?php _e( '€5,500', 'blackboard_by_zdc' ); ?></span></span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
        <!-- What's included (kept, slightly tighter) -->
        <section class="py-14 px-4 mx-6">
            <div class="max-w-auto mx-auto">
                <div class="text-center mb-8 md:mb-10">
                    <h2 class="text-2xl md:text-4xl font-bold text-gray-900"><?php _e( 'What’s Included', 'blackboard_by_zdc' ); ?></h2>
                    <p class="mt-2 text-gray-700 max-w-2xl mx-auto"><?php _e( 'Clear deliverables. Accessibility and performance by default.', 'blackboard_by_zdc' ); ?></p>
                </div>
                <figure class="relative mb-8 overflow-hidden rounded-2xl border border-gray-200">
                    <img src="https://images.unsplash.com/photo-1628154797703-0192b1caf994?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDZ8fGRlc2lnbiUyMGRlc2t8ZW58MHx8fHwxNzYxNzY3OTgzfDA&ixlib=rb-4.1.0q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop" alt="Design and development workstation" class="w-full h-44 md:h-64 object-cover"/>
                    <div class="absolute inset-0 bg-gradient-to-tr from-black/40 to-black/10"></div>
                </figure>
                <div class="bg-white overflow-hidden rounded-2xl border border-gray-200">
                    <div class="overflow-x-auto">
                        <table class="min-w-full">
                            <thead class="bg-black text-white">
                                <tr>
                                    <th class="px-6 py-4 text-left font-semibold"><?php _e( 'Feature', 'blackboard_by_zdc' ); ?></th>
                                    <th class="px-6 py-4 text-left font-semibold"><?php _e( 'Entry', 'blackboard_by_zdc' ); ?></th>
                                    <th class="px-6 py-4 text-left font-semibold"><?php _e( 'Grow', 'blackboard_by_zdc' ); ?></th>
                                    <th class="px-6 py-4 text-left font-semibold"><?php _e( 'Pro', 'blackboard_by_zdc' ); ?></th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4 font-semibold text-gray-900"><?php _e( 'Pages', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'Up to 5', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'Up to 10', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( '12+ or custom', 'blackboard_by_zdc' ); ?></td>
                                </tr>
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4 font-semibold text-gray-900"><?php _e( 'Design', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'Custom layout', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'Visual architecture', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'Bespoke theme (Kadence/Pinegrow)', 'blackboard_by_zdc' ); ?></td>
                                </tr>
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4 font-semibold text-gray-900"><?php _e( 'Contact Forms', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( '1 standard', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'Advanced logic', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'Conditional &amp; custom', 'blackboard_by_zdc' ); ?></td>
                                </tr>
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4 font-semibold text-gray-900"><?php _e( 'Blog', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-500">—</td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'Setup + layout', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'Extended features + SEO structure', 'blackboard_by_zdc' ); ?></td>
                                </tr>
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4 font-semibold text-gray-900"><?php _e( 'Newsletter Integration', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-500">—</td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'Basic (Mailchimp)', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'Automation-ready', 'blackboard_by_zdc' ); ?></td>
                                </tr>
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4 font-semibold text-gray-900"><?php _e( 'SEO Setup', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'Basic', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( '+ Image SEO', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( '+ Structured data + audit', 'blackboard_by_zdc' ); ?></td>
                                </tr>
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4 font-semibold text-gray-900"><?php _e( 'Performance', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'Core optimizations', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'Caching &amp; delivery', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'Full-stack + CDN config', 'blackboard_by_zdc' ); ?></td>
                                </tr>
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4 font-semibold text-gray-900"><?php _e( 'Analytics', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-500">—</td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'GA4', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'GA4 + events', 'blackboard_by_zdc' ); ?></td>
                                </tr>
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4 font-semibold text-gray-900"><?php _e( 'Accessibility', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'Best practices', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'AA-focused', 'blackboard_by_zdc' ); ?></td>
                                    <td class="px-6 py-4 text-gray-700"><?php _e( 'AA+ review', 'blackboard_by_zdc' ); ?></td>
                                </tr>
                                <tr class="hover:bg-gray-50 transition-colors bg-gray-50">
                                    <td class="px-6 py-4 font-semibold text-gray-900"><?php _e( 'Hosting &amp; Maintenance', 'blackboard_by_zdc' ); ?></td>
                                    <td class="font-semibold px-6 py-4 text-gray-700 text-left" colspan="3"><?php _e( 'Bring your own high‑performance hosting, or host with our premium partners.', 'blackboard_by_zdc' ); ?></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        <!-- Hosting & Maintenance (rewritten to match your notes) -->
        <section class="bg-white py-16 px-4 mx-6">
            <div class="max-w-auto mx-auto">
                <div class="relative overflow-hidden rounded-2xl border border-gray-200 mb-8">
                    <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDE0fHxob3N0aW5nfGVufDB8fHx8MTc2MTc2Nzk4Nnww&ixlib=rb-4.1.0q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop" alt="Managed WordPress hosting environment" class="w-full h-44 md:h-60 object-cover"/>
                    <div class="absolute inset-0 bg-black/40"></div>
                    <div class="absolute inset-0 flex items-center justify-center text-center px-6">
                        <div>
                            <h2 class="text-2xl md:text-3xl font-bold text-white"><?php _e( 'Hosting &amp; Maintenance', 'blackboard_by_zdc' ); ?></h2>
                            <p class="mt-2 text-white/90 max-w-2xl mx-auto text-base md:text-lg"><?php _e( 'Host with my premium partners—then relax. Maintenance is included when you host through me.', 'blackboard_by_zdc' ); ?></p>
                            <p class="mt-2 text-xs md:text-sm text-white/80 max-w-2xl mx-auto"><?php _e( 'Partners include Hostinger and Cloudways. Bring your own hosting if you prefer.', 'blackboard_by_zdc' ); ?></p>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-gray-50 border border-gray-200 p-6 rounded-2xl">
                        <h3 class="text-lg font-bold mb-1"><?php _e( 'Essential Care', 'blackboard_by_zdc' ); ?></h3>
                        <p class="text-gray-600 mb-4"><?php _e( 'Updates, hosting, backups', 'blackboard_by_zdc' ); ?></p>
                        <div class="mb-4"><span class="text-2xl font-bold"><?php _e( '€39', 'blackboard_by_zdc' ); ?></span><span class="text-gray-600"><?php _e( '/mo', 'blackboard_by_zdc' ); ?></span>
                        </div>
                        <ul class="text-sm text-gray-800 space-y-2">
                            <li>
                                <?php _e( 'WordPress &amp; plugin updates', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li>
                                <?php _e( 'Daily backups &amp; restore', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li>
                                <?php _e( 'SSL &amp; security monitoring', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li>
                                <?php _e( 'Email support', 'blackboard_by_zdc' ); ?>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-white border-2 border-black p-6 rounded-2xl shadow-xs">
                        <h3 class="text-lg font-bold mb-1"><?php _e( 'Care+', 'blackboard_by_zdc' ); ?></h3>
                        <p class="text-gray-600 mb-4"><?php _e( 'One monthly content revision', 'blackboard_by_zdc' ); ?></p>
                        <div class="mb-4"><span class="text-2xl font-bold"><?php _e( '€59', 'blackboard_by_zdc' ); ?></span><span class="text-gray-600"><?php _e( '/mo', 'blackboard_by_zdc' ); ?></span>
                        </div>
                        <ul class="text-sm text-gray-800 space-y-2">
                            <li>
                                <?php _e( 'Everything in Essential Care', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li>
                                <?php _e( 'Monthly content update', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li>
                                <?php _e( 'Performance monitoring', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li>
                                <?php _e( 'Priority email support', 'blackboard_by_zdc' ); ?>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-gray-50 border border-gray-200 p-6 rounded-2xl">
                        <h3 class="text-lg font-bold mb-1"><?php _e( 'Growth', 'blackboard_by_zdc' ); ?></h3>
                        <p class="text-gray-600 mb-4"><?php _e( 'Priority support &amp; reporting', 'blackboard_by_zdc' ); ?></p>
                        <div class="mb-4"><span class="text-2xl font-bold"><?php _e( '€79', 'blackboard_by_zdc' ); ?></span><span class="text-gray-600"><?php _e( '/mo', 'blackboard_by_zdc' ); ?></span>
                        </div>
                        <ul class="text-sm text-gray-800 space-y-2">
                            <li>
                                <?php _e( 'Everything in Care+', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li>
                                <?php _e( 'Monthly performance reports', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li>
                                <?php _e( 'SEO monitoring', 'blackboard_by_zdc' ); ?>
                            </li>
                            <li>
                                <?php _e( 'Optional phone support', 'blackboard_by_zdc' ); ?>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mt-6 text-center text-xs text-gray-600">
                    <?php _e( 'Month‑to‑month. Cancel anytime. Platform fees (if any) billed separately.', 'blackboard_by_zdc' ); ?>
                </div>
                <div class="mt-8 rounded-xl border border-gray-200 p-4 bg-gray-50 text-sm"><strong><?php _e( 'we don&rsquo;t host email.', 'blackboard_by_zdc' ); ?></strong><span><?php _e( 'I recommend', 'blackboard_by_zdc' ); ?> <span class="underline"><?php _e( 'Zoho Mail', 'blackboard_by_zdc' ); ?></span> <?php _e( 'or', 'blackboard_by_zdc' ); ?> <span class="underline"><?php _e( 'Google Workspace', 'blackboard_by_zdc' ); ?></span> <?php _e( 'and can configure either for you.', 'blackboard_by_zdc' ); ?></span>
                </div>
            </div>
        </section>
        <!-- Add‑ons (unchanged, tightened heading) -->
        <section class="bg-gray-50 px-4 py-16 md:py-24 mx-6">
            <div class="max-w-auto mx-auto">
                <div class="text-center mb-10 md:mb-12">
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900"><?php _e( 'Extra Services', 'blackboard_by_zdc' ); ?></h2>
                    <p class="text-base md:text-lg text-gray-700 max-w-2xl mx-auto"><?php _e( 'Enhance functionality and marketing. Available on request.', 'blackboard_by_zdc' ); ?></p>
                </div>
                <div class="rounded-2xl border border-gray-200 bg-white p-6 md:p-10">
                    <div class="grid grid-cols-1 md:grid-cols-5 items-start gap-6 md:gap-8">
                        <div class="order-2 md:order-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            <div class="group flex items-start gap-3 rounded-sm border border-gray-200 bg-gray-50/70 px-4 py-3 transition-colors hover:bg-gray-100/70"><span class="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-gray-900 text-white text-[10px]">✓</span><span class="text-gray-800 text-sm md:text-base"><?php _e( 'Multilingual setup (WPML or TranslatePress)', 'blackboard_by_zdc' ); ?></span>
                            </div>
                            <div class="group flex items-start gap-3 rounded-sm border border-gray-200 bg-gray-50/70 px-4 py-3 transition-colors hover:bg-gray-100/70"><span class="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-gray-900 text-white text-[10px]">✓</span><span class="text-gray-800 text-sm md:text-base"><?php _e( 'Photo Editing', 'blackboard_by_zdc' ); ?></span>
                            </div>
                            <div class="group flex items-start gap-3 rounded-sm border border-gray-200 bg-gray-50/70 px-4 py-3 transition-colors hover:bg-gray-100/70"><span class="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-gray-900 text-white text-[10px]">✓</span><span class="text-gray-800 text-sm md:text-base"><?php _e( 'Blog content setup (3–5 posts)', 'blackboard_by_zdc' ); ?></span>
                            </div>
                            <div class="group flex items-start gap-3 rounded-sm border border-gray-200 bg-gray-50/70 px-4 py-3 transition-colors hover:bg-gray-100/70"><span class="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-gray-900 text-white text-[10px]">✓</span><span class="text-gray-800 text-sm md:text-base"><?php _e( 'Google Workspace or Zoho email configuration', 'blackboard_by_zdc' ); ?></span>
                            </div>
                            <div class="group flex items-start gap-3 rounded-sm border border-gray-200 bg-gray-50/70 px-4 py-3 transition-colors hover:bg-gray-100/70"><span class="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-gray-900 text-white text-[10px]">✓</span><span class="text-gray-800 text-sm md:text-base"><?php _e( 'Content Creation', 'blackboard_by_zdc' ); ?></span>
                            </div>
                            <div class="group flex items-start gap-3 rounded-sm border border-gray-200 bg-gray-50/70 px-4 py-3 transition-colors hover:bg-gray-100/70"><span class="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-gray-900 text-white text-[10px]">✓</span><span class="text-gray-800 text-sm md:text-base"><?php _e( 'On‑page SEO copy refinement', 'blackboard_by_zdc' ); ?></span>
                            </div>
                        </div>
                        <figure class="order-1 md:order-2 md:col-span-2 relative w-full h-56 md:h-full overflow-hidden rounded-2xl border border-gray-200 shadow-xs">
                            <img src="https://images.unsplash.com/photo-1676276375900-dd41f828c985?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDR8fHdoaXRlYm9hcmQlMjBwbGFubmluZ3xlbnwwfHx8fDE3NjE3Njc5OTF8MA&ixlib=rb-4.1.0q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop" alt="Planning add‑ons on a whiteboard" class="w-full h-full object-cover"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"></div>
                            <figcaption class="absolute bottom-3 left-3 right-3 text-white/90 text-xs md:text-sm bg-black/40 px-3 py-2 rounded-xs backdrop-blur-xs border border-white/10">
                                <?php _e( 'Planning add‑ons on a whiteboard', 'blackboard_by_zdc' ); ?>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <!-- Process (added “Design Review” step) -->
        <section class="bg-gray-50 ml-6 mr-6 px-4 py-14 md:px-6 md:py-20">
            <div class="max-w-auto ml-auto mr-auto pl-2.5">
                <div class="text-left mb-10">
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900"><?php _e( 'How we work', 'blackboard_by_zdc' ); ?></h2>
                    <p class="mt-2 text-gray-700 max-w-2xl"><?php _e( 'Senior execution. Clear scope. Short timelines.', 'blackboard_by_zdc' ); ?></p>
                </div>
                <ol class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <li class="reveal rounded-2xl border border-gray-200 bg-white p-6"><span class="text-xs uppercase tracking-widest text-gray-500"><?php _e( '01 — Discovery', 'blackboard_by_zdc' ); ?></span>
                        <p class="mt-2 font-semibold text-gray-900"><?php _e( 'Intent, audience, constraints', 'blackboard_by_zdc' ); ?></p>
                        <p class="mt-1 text-sm text-gray-700"><?php _e( 'We map goals, content, and guardrails. Then we set a lean, realistic scope.', 'blackboard_by_zdc' ); ?></p>
                    </li>
                    <li class="reveal rounded-2xl border border-gray-200 bg-white p-6"><span class="text-xs uppercase tracking-widest text-gray-500"><?php _e( '02 — Design', 'blackboard_by_zdc' ); ?></span>
                        <p class="mt-2 font-semibold text-gray-900"><?php _e( 'System & composition', 'blackboard_by_zdc' ); ?></p>
                        <p class="mt-1 text-sm text-gray-700"><?php _e( 'Grid, type, components. Editorial clarity over noise.', 'blackboard_by_zdc' ); ?></p>
                    </li>
                    <li class="reveal rounded-2xl border border-gray-200 bg-white p-6"><span class="text-xs uppercase tracking-widest text-gray-500"><?php _e( '03 — Build', 'blackboard_by_zdc' ); ?></span>
                        <p class="mt-2 font-semibold text-gray-900"><?php _e( 'From scratch', 'blackboard_by_zdc' ); ?></p>
                        <p class="mt-1 text-sm text-gray-700"><?php _e( 'Custom themes (Pinegrow/Kadence), static or Webflow—whichever best serves the brief.', 'blackboard_by_zdc' ); ?></p>
                    </li>
                    <li class="reveal rounded-2xl border border-gray-200 bg-white p-6"><span class="text-xs uppercase tracking-widest text-gray-500"><?php _e( '04 — Launch & Care', 'blackboard_by_zdc' ); ?></span>
                        <p class="mt-2 font-semibold text-gray-900"><?php _e( 'Deploy, optimize, support', 'blackboard_by_zdc' ); ?></p>
                        <p class="mt-1 text-sm text-gray-700"><?php _e( 'Analytics, performance passes, and ongoing care plans if you want us on call.', 'blackboard_by_zdc' ); ?></p>
                    </li>
                </ol>
            </div>
        </section>
        <!-- Premium, quiet CTA (replaces “Ready to build…” block) -->
        <section class="bg-[url('https://images.unsplash.com/photo-1683770997177-0603bd44d070?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDh8fHRlYW0lMjBkZXNrfGVufDB8fHx8MTc2MTc2Nzk5Mnww&ixlib=rb-4.1.0q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop')] bg-black bg-center bg-cover md:py-20 px-4 py-16 relative text-white mx-6">
            <div class="absolute inset-0 bg-black/70"></div>
            <div class="relative max-w-4xl mx-auto text-center">
                <h2 class="font-bold mb-3 text-2xl md:text-3xl"><?php _e( 'Let’s keep it personal.', 'blackboard_by_zdc' ); ?></h2>
                <p class="leading-relaxed max-w-2xl mb-8 mx-auto text-base md:text-lg text-white/80"><?php _e( 'If we’re a fit, I’ll map a fixed‑scope plan around your goals.', 'blackboard_by_zdc' ); ?></p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="mailto:?subject=Project%20Inquiry" class="inline-block px-6 py-3 bg-white text-black rounded-sm font-semibold hover:bg-white/90 transition-colors"><?php _e( 'Start a conversation', 'blackboard_by_zdc' ); ?></a><a href="contact.html" class="border border-white font-semibold inline-block px-6 py-3 rounded-sm text-white transition-colors hover:bg-white hover:text-black"><?php _e( 'Share your brief', 'blackboard_by_zdc' ); ?></a>
                </div>
            </div>
        </section>        

<?php get_footer(); ?>