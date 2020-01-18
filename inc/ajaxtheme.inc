<?php
use Drupal\Core\Form\FormStateInterface;
use Stephane888\HtmlBootstrap\DefineSetting;
use Drupal\debug_log\debugLog;

/**
 * Action Ajax for imagetextrightleft
 */
function _theme_builder_imagetextrightleft_displays(&$form, FormStateInterface $form_state)
{
  $group = 'imagetextrightleft';
  $sous_group = 'displays';
  return $form['theme_builder_' . $group][$sous_group];
}

function _theme_builder_imagetextrightleft_displays_ajax_submit(&$form, FormStateInterface $form_state)
{
  $group = 'imagetextrightleft';
  _theme_builder_displays_ajax_submit($form_state, $group);
}

function _theme_builder_imagetextrightleft_provider(&$form, FormStateInterface $form_state)
{
  $group = 'imagetextrightleft';
  $sous_group = 'displays';
  // debugLog::logs($form_state->getTriggeringElement(), '_theme_builder_getTriggeringElement', 'dump', true);

  $parents = $form_state->getTriggeringElement()['#parents'];
  $bre_parents = count($parents);
  $id_provider = '';
  for ($i = 1; $i < $bre_parents; $i ++) {
    $id_provider = $parents[$i - 1];
  }
  // debugLog::logs($form_state->getValue('theme_builder_imagetextrightleft')[$sous_group][$id_provider], '_theme_builder_getValues', 'dump', true);
  return $form['theme_builder_' . $group][$sous_group][$id_provider]['options'];
}

/**
 * Action Ajax for cards
 */
function _theme_builder_cards_displays(&$form, FormStateInterface $form_state)
{
  $group = 'cards';
  $sous_group = 'displays';
  return $form['theme_builder_' . $group][$sous_group];
}

function _theme_builder_cards_displays_ajax_submit(&$form, FormStateInterface $form_state)
{
  $group = 'cards';
  _theme_builder_displays_ajax_submit($form_state, $group);
}

function _theme_builder_cards_provider(&$form, FormStateInterface $form_state)
{
  $group = 'cards';
  $sous_group = 'displays';
  // debugLog::logs($form_state->getTriggeringElement(), '_theme_builder_getTriggeringElement', 'dump', true);

  $parents = $form_state->getTriggeringElement()['#parents'];
  $bre_parents = count($parents);
  $id_provider = '';
  for ($i = 1; $i < $bre_parents; $i ++) {
    $id_provider = $parents[$i - 1];
  }
  // debugLog::logs($form_state->getValue('theme_builder_imagetextrightleft')[$sous_group][$id_provider], '_theme_builder_getValues', 'dump', true);
  return $form['theme_builder_' . $group][$sous_group][$id_provider]['options'];
}

/**
 * Ajax action for display
 *
 * @param object $form_state
 * @param string $group
 */
function _theme_builder_displays_ajax_submit($form_state, $group)
{
  $DefineSetting = new DefineSetting('theme_builder', $group);
  // $sous_group = 'displays';
  // $form['theme_builder_' . $group]["#tree"] = true;
  $nbre_imagetextrightleft_displays = $form_state->get('nbre_' . $group . '_displays');
  // $DefineSetting->AjoutBlocAffichage($form, $group, 'theme_builder', $sous_group);
  $DefineSetting->AjoutBloc($nbre_imagetextrightleft_displays);
  $form_state->set('nbre_' . $group . '_displays', $nbre_imagetextrightleft_displays);
  // debugLog::logs($nbre_imagetextrightleft_displays, 'ajax_submit-nbre_imagetextrightleft_displays', 'dump', true);
  // return $form['theme_builder_' . $group][$sous_group];
  $form_state->setRebuild();
}