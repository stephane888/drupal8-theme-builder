<?php

use Drupal\Core\Form\FormStateInterface;
use \Symfony\Cmf\Component\Routing\RouteObjectInterface;
use Drupal\Component\Render\FormattableMarkup;

/**
 * Implements hook_form_FORM_ID_alter().
 * # search-block-form
 * @param $form
 * @param FormStateInterface $form_state
 * @param $form_id
 */
function theme_builder_form_search_block_form_alter (&$form, \Drupal\Core\Form\FormStateInterface $form_state, $form_id){
  $form["actions"]["submit"]["#attributes"]=['class'=>['hello', 'kksa888'], 'fa_icon'=>'fas fa-search'];
  //dump($form);
}

/**
 * Implements hook_form_FORM_ID_alter().
 *
 * @param $form
 * @param \Drupal\Core\Form\FormStateInterface $form_state
 * @param $form_id
 */
function theme_builder_form_user_login_form_alter(&$form, FormStateInterface $form_state, $form_id) {
	//$form['#attributes']["class"][] = "new-form-class" ;
	/*
	$request = \Drupal::request();
	if ($route = $request->attributes->get(RouteObjectInterface::ROUTE_OBJECT)) {
		$title = \Drupal::service('title_resolver')->getTitle($request, $route);
		$form['#prefix'] = '<h2>'.$title.'</h2>';
	}
	*/
	$login = '<div class="d-flex justify-content-center text-center mb-2 loginrx facebook">
                                <div><i class="fab fa-facebook-f"></i></div>
                                <div><a href="#" class="rxconnexion facebook login">Se connecter avec Facebook <i class="fas fa-sync-alt d-none ml-2"></i></a></div>
                              </div>
                              <div class="d-flex justify-content-center text-center mb-2 loginrx google ">
                                <div><i class="fab fa-google"></i></div>
                                <div><a href="#" class="rxconnexion google login">Se connecter avec Google</a></div>
                              </div>';

	if (isset($form['name']) && ( $form['name']['#type'] == 'email' || $form['name']['#type'] == 'textfield' ) ) {
		$form['name']['#prefix']='';
		$form['name']['#suffix']='';
		$form['name']['#attributes']['placeholder'][] = $form['name']['#title'] . ' *';
		$form['name']['#attributes']['data-twig-suggestion'] = 'name_'.$form['#form_id'];
		#$form['name']['#attributes']['class'][] = 'form-control';
		unset($form['name']['#title'], $form['name']['#description']);
	}

	if (isset($form['pass']) && $form['pass']['#type'] == 'password') {
		$form['pass']['#prefix']='';
		$form['pass']['#suffix']='';
		$form['pass']['#attributes']['placeholder'][] = $form['pass']['#title'] . ' *';
		$form['pass']['#attributes']['data-twig-suggestion'] = 'pass_'.$form['#form_id'];
		#$form['pass']['#attributes']['class'][] = 'form-control';
		unset($form['pass']['#title'], $form['pass']['#description']);
	}

	if (isset($form['actions']) ){
		$form['actions']['#attributes']['data-twig-suggestion'] = 'submit_'.$form['#form_id'];
		$form['actions']['submit']['#attributes']['class'][] = 'login loginmodal-submit';
		$form['actions']['submit']['#prefix'] =' ';
		$form['actions']['submit']['#suffix'] =' ';
		$form['actions']['#suffix']=$login;
	}
	//dump($form);
	/* */
}


/**
 * Implements hook_form_FORM_ID_alter().
 *
 * @param $form
 * @param \Drupal\Core\Form\FormStateInterface $form_state
 * @param $form_id
 */
function theme_builder_form_user_pass_alter(&$form, FormStateInterface $form_state, $form_id) {
	//$form['#attributes']["class"][] = "new-form-class" ;
	/*
	$request = \Drupal::request();
	if ($route = $request->attributes->get(RouteObjectInterface::ROUTE_OBJECT)) {
		$title = \Drupal::service('title_resolver')->getTitle($request, $route);
		$form['#prefix'] = '<h2>'.$title.'</h2>';
	}
	*/

	if(isset($form['actions']) ){
		$form['actions']['#attributes']['data-twig-suggestion'] = 'submit_'.$form['#form_id'];
		$form['actions']['submit']['#attributes']['class'][] = 'login loginmodal-submit';
		$form['actions']['submit']['#prefix'] =' ';
		$form['actions']['submit']['#suffix'] =' ';
	}

}



/**
 * Implements hook_form_FORM_ID_alter().
 *
 * @param $form
 * @param \Drupal\Core\Form\FormStateInterface $form_state
 * @param $form_id
 */
function theme_builder_form_user_register_form_alter(&$form, FormStateInterface $form_state, $form_id) {
	//$form['#attributes']["class"][] = "new-form-class" ;
	/*
	$request = \Drupal::request();
	if ($route = $request->attributes->get(RouteObjectInterface::ROUTE_OBJECT)) {
		$title = \Drupal::service('title_resolver')->getTitle($request, $route);
		$form['#prefix'] = '<h2>'.$title.'</h2>';
	}
	*/
	/**
	 * add header message
	 */
	$login = '<div class="d-flex justify-content-center text-center mb-2 loginrx facebook">
                                <div><i class="fab fa-facebook-f"></i></div>
                                <div><a href="#" class="rxconnexion facebook login">S\'inscrire avec Facebook<i class="fas fa-sync-alt d-none ml-2"></i></a></div>
                              </div>
                              <div class="d-flex justify-content-center text-center mb-2 loginrx google ">
                                <div><i class="fab fa-google"></i></div>
                                <div><a href="#" class="rxconnexion google login">S\'inscrire avec Google</a></div>
                              </div>';
	$msg = $login . '<p class="my-3 text-center">OU</p><span class="d-block text-success mb-4">remplissez tous les champs ci-dessous et cliquez sur <b>Enregistrer</b> </span>';
	$form['#prefix'] = new FormattableMarkup($msg, []);


	/**
	 * submit
	 */
	if(isset($form['actions']) ){
		$form['actions']['#attributes']['data-twig-suggestion'] = 'submit_'.$form['#form_id'];
		$form['actions']['submit']['#attributes']['class'][] = 'login loginmodal-submit';
		$form['actions']['submit']['#prefix'] =' ';
		$form['actions']['submit']['#suffix'] =' ';
		$form['actions']['submit']["#value"] = new FormattableMarkup('Enregistrer ', []);
	}
	/**
	 * Nom d'utilisateur
	 */
	if (isset($form['account']['name'])  ) {
		$form['account']['name']['#prefix']='';
		$form['account']['name']['#suffix']='';
		$form['account']['name']['#attributes']['placeholder'][] = $form['account']['name']['#title'] . ' *';
		#$form['account']['name']['#attributes']['data-twig-suggestion'] = 'name_'.$form['#form_id'];
		#$form['name']['#attributes']['class'][] = 'form-control';
		unset($form['account']['name']['#title'], $form['account']['name']['#description']);
	}
	/**
	 * pass
	 */
	if (isset($form['account']['pass'])  ) {
		unset($form['account']['pass']['#description']);
	}
	/**
	 * email
	 */
	if (isset($form['account']['mail'])  ) {
		$form['account']['mail']['#attributes']['placeholder'][] = $form['account']['mail']['#title'] . ' *';
		#$form['account']['mail']['#attributes']['data-twig-suggestion'] = 'name_'.$form['#form_id'];
		#$form['name']['#attributes']['class'][] = 'form-control';
		unset($form['account']['mail']['#title'], $form['account']['mail']['#description']);
	}
	/**
	 * custom field
	 */
	foreach ($form as $key=>$field) {
		if( strstr($key, 'field_')){
			$form[$key]['widget'][0]['value']['#attributes']['placeholder'][] = $form[$key]['widget']['#title'];
			//$form[$key]['widget'][0]['value']['#attributes']['data-twig-suggestion'] = $key.'_'.$form['#form_id'];
			unset($form[$key]['widget'][0]['value']['#title']);
		}
	}
}



function theme_builder_preprocess_input__password(&$variables){
	if (isset($variables['element']['#array_parents'][0]) && $variables['element']['#array_parents'][0]=='account' ) {
		$variables['element']['#attributes']['placeholder'][] = $variables['element']['#title'] . ' *';
		$variables['attributes']['placeholder'][] = $variables['element']['#title'] . ' *';
	}
	//dump($variables);
}
