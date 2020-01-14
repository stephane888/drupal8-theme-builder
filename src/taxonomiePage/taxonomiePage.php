<?php

$group = 'theme_builder_taxonomie';
$form[$group] = array(
		'#type' => 'details',
		'#title' => t('Taxonomie Page'),
		'#group' => $vertical_tabs_group,
);

///groups config
$form[$group]['config'] = array(
		'#type' => 'details',
		'#title' => 'Configuration ',
		'#open' => FALSE,
);

$name = 'actif'; $form[$group]['config'][$name] = [];
$form[$group]['config'][$name] = $themes->add_checkbox( $name, $group, $form[$group]['config'][$name], $title='Appliquez les configurations', $default=1 );

$name = 'custom_image'; $form[$group]['config'][$name] = [];
$form[$group]['config'][$name] = $themes->add_checkbox( $name, $group, $form[$group]['config'][$name], $title='Utiliser un champs', $default=false );

$name = 'field_image'; $form[$group]['config'][$name] = [];
$form[$group]['config'][$name] = $themes->add_textfield( $name, $group, $form[$group]['config'][$name], $title='Nom machine du champs', $default='field_image' );

$listVocabulaire = taxonomy_vocabulary_get_names();//\Drupal\taxonomy\Entity\Vocabulary::loadMultiple();

foreach ( $listVocabulaire as $key => $value ) {
	//// groups vocabulary
	$form[$group]['list-vocab'.$key] = array(
			'#type' => 'details',
			'#title' => 'Vocabulary : '.$value,
			'#open' => FALSE,
	);
	$name = $key.'image'; $form[$group]['list-vocab'.$key][$name] = [];
	$form[$group]['list-vocab'.$key][$name] = $themes->add_image($name, $group, $form[$group]['list-vocab'.$key][$name], 'Background image ');
}



