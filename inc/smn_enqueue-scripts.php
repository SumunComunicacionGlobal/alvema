<?php
/**
 * Enqueue scripts and styles.
 */

 function smn_scripts() {

	wp_enqueue_script( 'jquery' );
	wp_enqueue_script( 'alvema-js', get_template_directory_uri() . '/assets/js/alvema.js', array(), true );
	
	if ( has_block( 'cb/carousel' ) ) {
        wp_enqueue_style( 'slick-css', get_template_directory_uri() . '/assets/slick/slick.min.css' );
        wp_enqueue_script( 'slick-js', get_template_directory_uri() . '/assets/slick/slick.min.js', array('jquery'), null, true );
        wp_enqueue_script( 'slick-init-js', get_template_directory_uri() . '/assets/slick/init.js', array('jquery'), null, true );
    }

    wp_localize_script('alvema-js', 'alvemaVars', [
        'themeUrl' => get_stylesheet_directory_uri()
    ]);

}
add_action( 'wp_enqueue_scripts', 'smn_scripts' );

/** 
* Gutenberg scripts and styles
*/
function smn_gutenberg_scripts() {

	wp_enqueue_script(
		'be-editor', 
		get_stylesheet_directory_uri() . '/assets/js/editor.js', 
		array( 'wp-blocks', 'wp-dom', 'wp-dom-ready', 'wp-edit-post' ), 
		filemtime( get_stylesheet_directory() . '/assets/js/editor.js' ),
		true
	);
}
add_action( 'enqueue_block_editor_assets', 'smn_gutenberg_scripts' );


/**
 * GSAP script in WordPress
*/

function theme_gsap_script(){
    // The core GSAP library
    wp_enqueue_script( 'gsap-js', 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js', array(), false, true );
    // ScrollTrigger - with gsap.js passed as a dependency
    wp_enqueue_script( 'gsap-st', 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js', array('gsap-js'), false, true );
    // ScrollToPlugin - with gsap.js passed as a dependency
    wp_enqueue_script( 'gsap-scrollto', 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollToPlugin.min.js', array('gsap-js'), false, true );
    // Your animation code file - with gsap.js, gsap-st, and gsap-scrollto passed as dependencies
    wp_enqueue_script( 'gsap-js2', get_template_directory_uri() . '/assets/js/gsap.js', array('gsap-js', 'gsap-st', 'gsap-scrollto'), false, true );
}

add_action( 'wp_enqueue_scripts', 'theme_gsap_script' );