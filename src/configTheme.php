<?php

#****************** creation des styles d'images  #############################################
// image 1920*900, use for slide
if(!\Drupal\image\Entity\ImageStyle::load('theme_builder_1920x900')){
	$themes->createStyleImage('theme_builder_1920x900', 1920, 900, 'theme_builder 1920x900');
}

// image 1920*900, use for slide
if(!\Drupal\image\Entity\ImageStyle::load('theme_builder_1620x1080')){
	$themes->createStyleImage('theme_builder_1620x1080', 1620, 1080, 'theme_builder 1620x1080');
}

// image 1920*250, use for taxonamie page
if(!\Drupal\image\Entity\ImageStyle::load('theme_builder_1920x250')){
	$themes->createStyleImage('theme_builder_1920x250', 1920, 250, 'theme_builder 1920x250');
}

// image 1920*250, use for taxonamie page
if(!\Drupal\image\Entity\ImageStyle::load('theme_builder_1400x250')){
	$themes->createStyleImage('theme_builder_1400x250', 1400, 250, 'theme_builder 1400x250');
}

// image 1920*250, use for taxonamie page
if(!\Drupal\image\Entity\ImageStyle::load('theme_builder_992x250')){
	$themes->createStyleImage('theme_builder_992x250', 992, 250, 'theme_builder 992x250');
}

// image 1920*250, use for taxonamie page
if(!\Drupal\image\Entity\ImageStyle::load('theme_builder_577x250')){
	$themes->createStyleImage('theme_builder_577x250', 577, 250, 'theme_builder 577x250');
}



































