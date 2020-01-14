<?php
use Drupal\debug_log\debugLog;
use Drupal\Core\Template\Attribute;

/**
 * Implements hook_theme_suggestions_HOOK_alter()
 */
function theme_builder_theme_suggestions_views_view_unformatted_alter(&$suggestions, &$variables, $hook) {
  if( $variables['view']->id() ){
  	//dpm($variables['view']->id());
  	$suggestions[] = 'views_view_unformatted__'.$variables['view']->id();
  }
}

/**
 *
 * @param int $variables
 */
function theme_builder_preprocess_views_view_unformatted(&$variables){
  //dump($variables);
	if(!empty($variables['view']->id() ) ){
  	if(isset($variables['view']->current_display)){
  		//dump($variables['rows'][0]['content']["#view"]->query->displayHandler->output);
  		//debugLog::logs( $variables, 'front-view-variables', 'kint');
  		$group = 'theme_builder_row_view';
  		$name = $variables['view']->id() . $variables['view']->current_display;
  		$file = format_template_views_view_unformatted($group . $name);
  		if($file){
  			//dump($file);
  			$variables['template_format'] = $file;
  			/*
  			#* node_teaser_theme_builder
  			if( !empty($file['formatter']['value']) && $file['formatter']['value'] == "node_teaser_theme_builder" ){
  				foreach ($variables['rows'] as $key=>$value){
  					$items = ['content'=>['#theme'=> 'node_teaser_theme_builder'], 'attributes'=> new Attribute(),];
  					$fields = $value['content']["#view"]->query->displayHandler->handlers['field'];
  					//dump($fields);
  					foreach ( $fields as $field_name=>$field ) {
  						if(isset($file['fields'][$field_name])){
  							if(!empty($file['fields'][$field_name]['data']['value']) ){
  								$items['content'][$file['fields'][$field_name]['data']['value']][]=['#type' => 'inline_template', '#template' => $field->last_render];
  							}
  						}
  					}
  					$variables['new_template_format'][] = $items;
  				}
  			}
  			/* */

  		}
  	}
  }
}

/**
 *
 * @param array $variables
 */
function theme_builder_preprocess_views_view_fields(&$variables){
	$group = 'theme_builder_row_view';
	$name = $variables['view']->id() . $variables['view']->current_display;
	$file = format_template_views_view_unformatted($group . $name);
	if($file){
		//dump($file);
		$variables['template_format'] = $file;
		#* node_teaser_theme_builder
		if( !empty($file['formatter']['value']) ){
			$template = $file['formatter']['value'];
			$items = ['#theme'=> $template];
			foreach ( $variables['fields'] as $k => $value ) {
				if(!empty( $file['fields'][$k]['data']['value'] )){
					$items[$file['fields'][$k]['data']['value']][] = ['#theme'=> 'views_view_field_cutom', '#field'=> $value];
				}
			}
			$variables['new_template_format'] = $items;
		}
	}
}

/**
 *
 * Implements hook_theme_suggestions_HOOK_alter()
 */
function theme_builder_theme_suggestions_views_view_alter (&$suggestions, &$variables, $hook) {
  if( $variables['view']->id() ){
  	//dpm($variables['view']->id());
  	if(isset($variables['view']->current_display)){
  		//dpm($variables['view']->id());
  		//debugLog::logs( $variables['view'], 'front-view' );
  		$group = 'theme_builder_row_view';
  		$name = $variables['view']->id() . $variables['view']->current_display;
  		$file = format_template_views_view($group . $name);
  		//dpm($file);
  		if($file){
  			$suggestions[] = 'views_view__' . $file;
  		}
  	}
  	$suggestions[] = 'views_view__'.$variables['view']->id();
  }
  //debugLog::logs( $variables['view'], 'front-view' );
}

/**
 *
 * @param array $field_name
 * @return string|boolean
 */
function format_template_views_view($field_name){
	$name = $field_name;
	$value = theme_get_setting($name, 'theme_builder');
	if($value){
		$name = $field_name . 'cfg';
		$value = theme_get_setting($name, 'theme_builder');
		$values = json_decode($value, true);
		//dpm($values);
		if( $values['template']['value'] == 'bootstrap-grid'){
			return 'row';
		}
		elseif( $values['template']['value'] != ''){
			return 'default';
		}
	}
	return false;
}

function format_template_views_view_unformatted($field_name){
	$name = $field_name;
	$value = theme_get_setting($name, 'theme_builder');
	if($value){
		$name = $field_name . 'cfg';
		$value = theme_get_setting($name, 'theme_builder');
		$values = json_decode($value, true);
		//dump($values);
		if( $values['template']['value'] != ''){
			return $values;
		}
	}
	return false;
}

/**
 *
 * @param int $variables
 */
function theme_builder_preprocess_views_view(&$variables){
  //dump($variables);
}




