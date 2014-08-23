<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp-db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '4 xdn*lyHpA5D85(39ARFPfW9r5&8he=``LD(%E*Hi!Wri,NsGahPzdET[FE66E4');
define('SECURE_AUTH_KEY',  'q[yxxy3Ei!.G m1!D7v_w!!+[r[cG06nNn9!;jJb]|fTFFR>IsIz%xQh~tk~`~|l');
define('LOGGED_IN_KEY',    ':rEoJj0(u`O}6)G,^<rdZmF|!&fwU@IonC~_8.:c^}pE2YyI=lAh{$D5602u2M~r');
define('NONCE_KEY',        'Y/-}LBW|HPM-vp#<|7;oH7:+sGA`}WOTT4bI{}D&xcT:G{,$|x<;CG>r8{@Cfg&#');
define('AUTH_SALT',        'LRkWz>(zlt)Ev+a43?X[cF^&rh*d|9M{Su]|eG2X](Mks.?0yPmJ{#*sVIs9&o|0');
define('SECURE_AUTH_SALT', 'mb_# Rh(%?9NYcki+;=!5a|XsM4k$~VM9dE~k;ICT<_0L-*Xd@Lr!tL&J_cdNXnK');
define('LOGGED_IN_SALT',   'w^$!4}x2^r>_C S(c&=Q%I?I#B2V1^{Ur-zJ(6,c55Fv3Z`X9o! gL2;hM[O`szi');
define('NONCE_SALT',       ':aR_EqN/qjL?( QwS&V@532Ps&Fh;8f X(}46Ijm3ZhJl+j>82~)[F9me<!8.}n$');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
