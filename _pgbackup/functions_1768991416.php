<?php
if ( ! function_exists( 'blackboard_by_zdc_setup' ) ) :

function blackboard_by_zdc_setup() {

    /*
     * Make theme available for translation.
     * Translations can be filed in the /languages/ directory.
     */
    /* Pinegrow generated Load Text Domain Begin */
    load_theme_textdomain( 'blackboard_by_zdc', get_template_directory() . '/languages' );
    /* Pinegrow generated Load Text Domain End */

    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    /*
     * Let WordPress manage the document title.
     */
    add_theme_support( 'title-tag' );
    
    /*
     * Enable support for Post Thumbnails on posts and pages.
     */
    add_theme_support( 'post-thumbnails' );
    //Support custom logo
    add_theme_support( 'custom-logo' );

    // Add menus.
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'blackboard_by_zdc' ),
        'social'  => __( 'Social Links Menu', 'blackboard_by_zdc' ),
    ) );

/*
     * Register custom menu locations
     */
    /* Pinegrow generated Register Menus Begin */

    register_nav_menu(  'footer_one', __( 'Footer Menu 1', 'blackboard_by_zdc' )  );

    register_nav_menu(  'footer_two', __( 'Footer Menu 2', 'blackboard_by_zdc' )  );

    register_nav_menu(  'footer_three', __( 'Footer Menu 3', 'blackboard_by_zdc' )  );

    /* Pinegrow generated Register Menus End */
    
/*
    * Set image sizes
     */
    /* Pinegrow generated Image sizes Begin */

    /* Pinegrow generated Image sizes End */
    
    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support( 'html5', array(
        'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
    ) );

    /*
     * Enable support for Post Formats.
     */
    add_theme_support( 'post-formats', array(
        'aside', 'image', 'video', 'quote', 'link', 'gallery', 'status', 'audio', 'chat'
    ) );

    /*
     * Enable support for Page excerpts.
     */
     add_post_type_support( 'page', 'excerpt' );
}
endif; // blackboard_by_zdc_setup

add_action( 'after_setup_theme', 'blackboard_by_zdc_setup' );


if ( ! function_exists( 'blackboard_by_zdc_init' ) ) :

function blackboard_by_zdc_init() {

    
    // Use categories and tags with attachments
    register_taxonomy_for_object_type( 'category', 'attachment' );
    register_taxonomy_for_object_type( 'post_tag', 'attachment' );

    /*
     * Register custom post types. You can also move this code to a plugin.
     */
    /* Pinegrow generated Custom Post Types Begin */

    /* Pinegrow generated Custom Post Types End */
    
    /*
     * Register custom taxonomies. You can also move this code to a plugin.
     */
    /* Pinegrow generated Taxonomies Begin */

    /* Pinegrow generated Taxonomies End */

}
endif; // blackboard_by_zdc_setup

add_action( 'init', 'blackboard_by_zdc_init' );


if ( ! function_exists( 'blackboard_by_zdc_custom_image_sizes_names' ) ) :

function blackboard_by_zdc_custom_image_sizes_names( $sizes ) {

    /*
     * Add names of custom image sizes.
     */
    /* Pinegrow generated Image Sizes Names Begin*/
    /* This code will be replaced by returning names of custom image sizes. */
    /* Pinegrow generated Image Sizes Names End */
    return $sizes;
}
add_action( 'image_size_names_choose', 'blackboard_by_zdc_custom_image_sizes_names' );
endif;// blackboard_by_zdc_custom_image_sizes_names



if ( ! function_exists( 'blackboard_by_zdc_widgets_init' ) ) :

function blackboard_by_zdc_widgets_init() {

    /*
     * Register widget areas.
     */
    /* Pinegrow generated Register Sidebars Begin */

    /* Pinegrow generated Register Sidebars End */
}
add_action( 'widgets_init', 'blackboard_by_zdc_widgets_init' );
endif;// blackboard_by_zdc_widgets_init



if ( ! function_exists( 'blackboard_by_zdc_customize_register' ) ) :

function blackboard_by_zdc_customize_register( $wp_customize ) {
    // Do stuff with $wp_customize, the WP_Customize_Manager object.

    /* Pinegrow generated Customizer Controls Begin */

    /* Pinegrow generated Customizer Controls End */

}
add_action( 'customize_register', 'blackboard_by_zdc_customize_register' );
endif;// blackboard_by_zdc_customize_register


if ( ! function_exists( 'blackboard_by_zdc_enqueue_scripts' ) ) :
    function blackboard_by_zdc_enqueue_scripts() {

        /* Pinegrow generated Enqueue Scripts Begin */

    /* Pinegrow generated Enqueue Scripts End */

        /* Pinegrow generated Enqueue Styles Begin */

    wp_deregister_style( 'blackboard_by_zdc-tailwind' );
    wp_enqueue_style( 'blackboard_by_zdc-tailwind', get_template_directory_uri() . '/tailwind_theme/tailwind.css', [], '1.0.33', 'all');

    wp_deregister_style( 'blackboard_by_zdc-style' );
    wp_enqueue_style( 'blackboard_by_zdc-style', get_bloginfo('stylesheet_url'), [], '1.0.33', 'all');

    /* Pinegrow generated Enqueue Styles End */

    }
    add_action( 'wp_enqueue_scripts', 'blackboard_by_zdc_enqueue_scripts' );
endif;

function pgwp_sanitize_placeholder($input) { return $input; }
/*
 * Resource files included by Pinegrow.
 */
/* Pinegrow generated Include Resources Begin */
require_once "inc/custom.php";
if( !class_exists( 'PG_Helper_v2' ) ) { require_once "inc/wp_pg_helpers.php"; }
if( !class_exists( 'PG_Blocks_v4' ) ) { require_once "inc/wp_pg_blocks_helpers.php"; }
if( !class_exists( 'PG_Smart_Walker_Nav_Menu' ) ) { require_once "inc/wp_smart_navwalker.php"; }

    /* Pinegrow generated Include Resources End */

/* Creating Editor Blocks with Pinegrow */

if ( ! function_exists('blackboard_by_zdc_blocks_init') ) :
function blackboard_by_zdc_blocks_init() {
    // Register blocks. Don't edit anything between the following comments.
    /* Pinegrow generated Register Pinegrow Blocks Begin */
    require_once 'blocks/contact-grid/contact-grid_register.php';
    require_once 'blocks/header/header_register.php';
    require_once 'blocks/project/project_register.php';
    require_once 'blocks/portfolio/portfolio_register.php';
    require_once 'blocks/footer/footer_register.php';
    require_once 'blocks/header-alt/header-alt_register.php';
    require_once 'blocks/privacy-policy-block/privacy-policy-block_register.php';
    require_once 'blocks/services/services_register.php';

    /* Pinegrow generated Register Pinegrow Blocks End */
}
add_action('init', 'blackboard_by_zdc_blocks_init');
endif;

/* End of creating Editor Blocks with Pinegrow */


/* Setting up theme supports options */

function blackboard_by_zdc_setup_theme_supports() {
    // Don't edit anything between the following comments.
    /* Pinegrow generated Theme Supports Begin */
    
//Enable site editor                    
add_theme_support('block-templates');
add_theme_support('block-template-parts');    
//Tell WP to scope loaded editor styles to the block editor                    
add_theme_support( 'editor-styles' );
    /* Pinegrow generated Theme Supports End */
}
add_action('after_setup_theme', 'blackboard_by_zdc_setup_theme_supports');

/* End of setting up theme supports options */


/* Loading editor styles for blocks */

function blackboard_by_zdc_add_blocks_editor_styles() {
// Add blocks editor styles. Don't edit anything between the following comments.
/* Pinegrow generated Load Blocks Editor Styles Begin */
    add_editor_style( 'tailwind_theme/tailwind_for_wp_editor.css' );

    /* Pinegrow generated Load Blocks Editor Styles End */
}
add_action('admin_init', 'blackboard_by_zdc_add_blocks_editor_styles');

/* End of loading editor styles for blocks */


/* Control how block assets are loaded on the front-end */
function blackboard_by_zdc_should_load_separate_core_block_assets() {
    /* Pinegrow generated Load Block Assets Separately Begin */
    //Load only assets of blocks that are used on the page
    add_filter( 'should_load_separate_core_block_assets', '__return_true' );

    /* Pinegrow generated Load Block Assets Separately End */
}
add_action('init', 'blackboard_by_zdc_should_load_separate_core_block_assets');
/* End of controlling how block assets are loaded on the front-end */


/* Register Blocks Categories */

function blackboard_by_zdc_register_blocks_categories( $categories ) {

    // Don't edit anything between the following comments.
    /* Pinegrow generated Register Blocks Category Begin */

$categories = array_merge( $categories, array( array(
        'slug' => 'inner_pages_blocks',
        'title' => __( 'General Pages Blocks', 'blackboard_by_zdc' )
    ) ) );

$categories = array_merge( $categories, array( array(
        'slug' => 'inner_pages_blocks',
        'title' => __( 'Service Blocks', 'blackboard_by_zdc' )
    ) ) );

$categories = array_merge( $categories, array( array(
        'slug' => 'blackboard_blocks',
        'title' => __( 'Blackboard Blocks', 'blackboard_by_zdc' )
    ) ) );

    /* Pinegrow generated Register Blocks Category End */
    
    return $categories;
}
add_action( version_compare('5.8', get_bloginfo('version'), '<=' ) ? 'block_categories_all' : 'block_categories', 'blackboard_by_zdc_register_blocks_categories');

/* End of registering Blocks Categories */

?>