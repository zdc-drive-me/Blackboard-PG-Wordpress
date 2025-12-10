<?php
/**
 * Custom theme functionality (safe to edit).
 * Keep Pinegrow’s functions.php as generated; put YOUR code here.
 */

if ( ! defined('BB_THEME_TD') ) {
    define('BB_THEME_TD', 'blackboad_by_zdc'); // textdomain
}

/* -----------------------------
 * Small utilities
 * --------------------------- */
function bb_asset_ver( $rel_path ) {
    $file = get_theme_file_path( $rel_path );
    if ( file_exists( $file ) ) return (string) filemtime( $file );
    $theme = wp_get_theme();
    return $theme ? (string) $theme->get('Version') : '1.0.0';
}
function bb_has( $rel_path ) {
    return file_exists( get_theme_file_path( $rel_path ) );
}

/* -----------------------------
 * Optional: supports / menus
 * --------------------------- */
add_action( 'after_setup_theme', function () {
    add_theme_support( 'editor-styles' );
    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'appearance-tools' );

    if ( bb_has('assets/css/editor.css') ) {
        add_editor_style( 'assets/css/editor.css' );
    }

    // Example menu registrations (uncomment if you need them)
    // register_nav_menus([
    //     'primary' => __('Primary Menu', BB_THEME_TD),
    //     'footer'  => __('Footer Menu',  BB_THEME_TD),
    // ]);
} );

/* -------------------------------------------------------
 * FRONT-END enqueues
 *  - HLS + your auto-video helper
 *  - GSAP + ScrollTrigger + your header animation
 * ----------------------------------------------------- */
add_action('wp_enqueue_scripts', function () {
    $uri  = get_theme_file_uri();
    $path = function ($rel) { return get_theme_file_path($rel); };

    // HLS for front‑end (needed by your video-auto helper)
    if ( file_exists($path('assets/js/hls.min.js')) && ! wp_script_is('hlsjs','enqueued') ) {
        wp_enqueue_script(
            'hlsjs',
            $uri.'/assets/js/hls.min.js',
            [],
            filemtime($path('assets/js/hls.min.js')),
            true
        );
    }
    if ( file_exists($path('assets/js/video-auto.js')) ) {
        wp_enqueue_script(
            'bb-video-auto',
            $uri.'/assets/js/video-auto.js',
            [ 'hlsjs' ],
            filemtime($path('assets/js/video-auto.js')),
            true
        );
    }

    // Header animation: GSAP + ScrollTrigger + your init
    if ( file_exists($path('assets/js/gsap.min.js')) ) {
        wp_enqueue_script('bb-gsap', $uri.'/assets/js/gsap.min.js', [], filemtime($path('assets/js/gsap.min.js')), true);
    }
    if ( file_exists($path('assets/js/ScrollTrigger.min.js')) ) {
        wp_enqueue_script('bb-gsap-scrolltrigger', $uri.'/assets/js/ScrollTrigger.min.js', [ 'bb-gsap' ], filemtime($path('assets/js/ScrollTrigger.min.js')), true);
    }
    if ( file_exists($path('assets/js/header-anim.js')) ) {
        wp_enqueue_script('bb-header-anim', $uri.'/assets/js/header-anim.js', [ 'bb-gsap','bb-gsap-scrolltrigger' ], filemtime($path('assets/js/header-anim.js')), true);
    }

    // Optional extra CSS/JS (only if present)
    if ( file_exists($path('assets/css/app.css')) ) {
        wp_enqueue_style('bb-app', $uri.'/assets/css/app.css', [], filemtime($path('assets/css/app.css')), 'all');
    }
    if ( file_exists($path('assets/js/date-ticker.js')) ) {
        wp_enqueue_script('bb-date-ticker', $uri.'/assets/js/date-ticker.js', [], filemtime($path('assets/js/date-ticker.js')), true);
    }
}, 25);

/* -------------------------------------------------------
 * BLOCK EDITOR (iframe) enqueues
 *  - HLS + your editor bootstrapping (Chrome)
 *  - Tailwind editor CSS + robust SuisseIntl font fallback
 * ----------------------------------------------------- */
add_action('enqueue_block_editor_assets', function () {
    $uri  = get_theme_file_uri();
    $path = function ($rel) { return get_theme_file_path($rel); };

    // Hls.js in editor
    if ( file_exists($path('assets/js/hls.min.js')) ) {
        wp_enqueue_script('bb-editor-hls', $uri.'/assets/js/hls.min.js', [], filemtime($path('assets/js/hls.min.js')), true);
    }
    // Your editor bootstrap (observes Gutenberg re-renders, attaches HLS, disables autoplay)
    if ( file_exists($path('assets/js/hls-editor.js')) ) {
        wp_enqueue_script('bb-editor-hls-init', $uri.'/assets/js/hls-editor.js', [ 'bb-editor-hls' ], filemtime($path('assets/js/hls-editor.js')), true);
    }

    // Tailwind editor stylesheet so its @imports run inside the iframe
    if ( file_exists($path('tailwind_theme/tailwind_for_wp_editor.css')) ) {
        wp_enqueue_style(
            'bb-editor-tailwind',
            $uri.'/tailwind_theme/tailwind_for_wp_editor.css',
            [],
            filemtime($path('tailwind_theme/tailwind_for_wp_editor.css'))
        );

        // Inline @font-face fallback for SuisseIntl (matches your Tailwind var)
        // Try common locations and inject whichever exists.
        $candidates = [
            'fonts/SuisseIntl.woff2',
            'fonts/suisseintl.woff2',
            'assets/fonts/SuisseIntl.woff2',
            'assets/fonts/suisseintl.woff2',
        ];
        $found = null;
        foreach ($candidates as $rel) {
            if ( file_exists($path($rel)) ) { $found = $uri.'/'.$rel; break; }
        }
        if ( $found ) {
            $inline = "
            @font-face{
              font-family:'SuisseIntl';
              src:url('{$found}') format('woff2');
              font-weight:400;
              font-style:normal;
              font-display:swap;
            }";
            wp_add_inline_style('bb-editor-tailwind', $inline);
        }
    }
}, 21);

/* -------------------------------------------------------
 * OPTIONAL: merge extra block categories (don’t replace)
 * Keep ONLY if you really need PHP-side categories.
 * Pinegrow normally registers categories during export.
 * ----------------------------------------------------- */
add_filter('block_categories_all', function ($cats, $post) {
    $add = [
        [ 'slug' => 'blackboard_blocks', 'title' => __( 'Blackboard Blocks', BB_THEME_TD ) ],
        [ 'slug' => 'wildcards',         'title' => __( 'WildCards',        BB_THEME_TD ) ],
    ];
    $existing = array_map(static function($c){ return is_array($c)&&isset($c['slug']) ? $c['slug'] : null; }, $cats);
    foreach ($add as $cat) {
        if ( $cat['slug'] && ! in_array($cat['slug'], $existing, true) ) {
            $cats[] = $cat;
            $existing[] = $cat['slug'];
        }
    }
    return $cats;
}, 10, 2);

/* -------------------------------------------------------
 * SPACE for any CPTs, sidebars, customizer, shortcodes, etc.
 * (move them here from your old backup if you had them)
 * ----------------------------------------------------- */
// add_action('init', function(){ register_post_type(...); });
// add_action('widgets_init', function(){ register_sidebar(...); });
// add_action('customize_register', function($wp_customize){ /* ... */ });
// add_shortcode('bb_box', function($atts,$content=null){ return '<div class="bb-box">'.$content.'</div>'; });

// Editor: load SuisseIntl and use it in the canvas
add_action('enqueue_block_editor_assets', function () {
    $css_file = get_theme_file_path('fonts/suisseintl.css');
    if ( file_exists($css_file) ) {
        wp_enqueue_style(
            'bb-editor-suisseintl',
            get_theme_file_uri('fonts/suisseintl.css'),
            [], // no deps required
            filemtime($css_file)
        );
    }

    // Make the editor iframe actually use the font family
    $inline = ".editor-styles-wrapper{font-family:'SuisseIntl',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;}";
    // Attach to our handle if present, else to core editor styles
    if ( wp_style_is('bb-editor-suisseintl','enqueued') ) {
        wp_add_inline_style('bb-editor-suisseintl', $inline);
    } else {
        wp_add_inline_style('wp-block-library', $inline);
    }
}, 21);