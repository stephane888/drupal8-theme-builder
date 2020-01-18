<?php
namespace Drupal\theme_builder;

use Drupal\theme_builder\Theme;
use Drupal\Component\Render\FormattableMarkup;
use Drupal\debug_log\debugLog;
use Drupal\Core\Url;
use Drupal\Core\Link;
use Drupal\views\Views;
use Drupal\Core\Template\Attribute;
use Stephane888\HtmlBootstrap\LoaderDrupal;
use Drupal\Component\Utility\SortArray;
use Stephane888\HtmlBootstrap\ThemeUtility;

class MdbootstrapWbu {

  public static function wbupreprocess_page(&$variables)
  {
    // dump($variables);
    $LoaderDrupal = new LoaderDrupal();
    /**
     * get top headers
     */
    if (theme_get_setting('theme_builder_topheader_status', 'theme_builder')) {
      MdbootstrapWbu::getTopHeaders($LoaderDrupal, $variables);
    }
    /**
     * get headers
     */
    if (theme_get_setting('theme_builder_header_status', 'theme_builder')) {
      MdbootstrapWbu::getHeaders($LoaderDrupal, $variables);
    }
    /**
     * get sliders
     */
    if (theme_get_setting('theme_builder_slide_status', 'theme_builder') && $LoaderDrupal->filterByRouteName(theme_get_setting('theme_builder_slide_routes', 'theme_builder'))) {
      MdbootstrapWbu::getSliders($LoaderDrupal, $variables);
    }
    /**
     * get card
     */
    if (theme_get_setting('theme_builder_cards_status', 'theme_builder')) {
      MdbootstrapWbu::getCards($LoaderDrupal, $variables);
    }

    /**
     * get PriceLists
     */
    if (theme_get_setting('theme_builder_pricelists_status', 'theme_builder')) {
      MdbootstrapWbu::getPriceLists($LoaderDrupal, $variables);
    }

    /**
     * Get CallActions
     */
    if (theme_get_setting('theme_builder_callactions_status', 'theme_builder') && $LoaderDrupal->filterByRouteName(theme_get_setting('theme_builder_callactions_routes', 'theme_builder'))) {
      MdbootstrapWbu::getCallActions($LoaderDrupal, $variables);
    }

    /**
     * Get carouselcards
     */
    if (theme_get_setting('theme_builder_carouselcards_status', 'theme_builder') && $LoaderDrupal->filterByRouteName(theme_get_setting('theme_builder_carouselcards_routes', 'theme_builder'))) {
      MdbootstrapWbu::getCarouselCards($LoaderDrupal, $variables);
    }

    /**
     * Get Comments
     */
    if (theme_get_setting('theme_builder_comments_status', 'theme_builder') && $LoaderDrupal->filterByRouteName(theme_get_setting('theme_builder_comments_routes', 'theme_builder'))) {
      MdbootstrapWbu::getComments($LoaderDrupal, $variables);
    }

    /**
     */
    if (theme_get_setting('theme_builder_imagetextrightleft_status', 'theme_builder')) {
      MdbootstrapWbu::getImageTextRightLeft($LoaderDrupal, $variables);
    }

    /**
     * Get footers
     */
    if (theme_get_setting('theme_builder_footers_status', 'theme_builder')) {
      MdbootstrapWbu::getFooters($LoaderDrupal, $variables);
    }

    /**
     * et en fin.
     * sort header by weight
     */
    uasort($variables['page']['header'], [
      SortArray::class,
      'sortByWeightProperty'
    ]);

    /**
     * theme_builder_header
     */
    $group = 'theme_builder_header';
    $name = 'position';
    $value = theme_get_setting($group . $name, 'theme_builder');
    $variables[$group][$name] = $value;
    //
    $name = 'container';
    $value = theme_get_setting($group . $name, 'theme_builder');
    $variables[$group][$name] = $value;
    //
    $name = 'texte';
    $value = theme_get_setting($group . $name, 'theme_builder');
    if (! empty($value))
      $variables[$group][$name] = t($value);

    /**
     * theme_builder_bg_img_front
     */
    $group = 'theme_builder_bg_img_front';
    /*
     * $name='texte';
     * $value = theme_get_setting($group . $name, 'theme_builder');
     * if(!empty($value))
     * $variables[$group][$name]=t($value);
     * $name='image_bg';
     * $fid = theme_get_setting($group . $name, 'theme_builder');
     * if(!empty($fid) && $fid[0] > 0){
     * $image_style='theme_builder_1620x1080';
     * $file = \Drupal\file\Entity\File::load($fid[0]);
     * if( $file && \Drupal\image\Entity\ImageStyle::load($image_style) ){
     * $variables[$group][$name] = \Drupal\image\Entity\ImageStyle::load( $image_style )->buildUrl( $file->getFileUri() );
     * $variables['attrib_' . $group] = new Attribute(['style'=>'background-image:url(' . $variables[$group][$name]. ')', 'class'=>['image-bg'] ] );
     * }
     * }else{
     * $variables[$group][$name] = '/themes/theme_builder/img/couple-at-home-eating-outdoor-meal-together-PK7B8TL.jpg';
     * $variables['attrib_' . $group] = new Attribute(['style'=>'background-image:url(' . $variables[$group][$name]. ')', 'class'=>['image-bg'] ] );
     * }
     */
    //
    $name = "nombre_slide";
    $index = intval(theme_get_setting($group . $name, 'theme_builder'));
    for ($i = 1; $i <= $index; $i ++) {
      $name = $i . 'texte';
      $value = theme_get_setting($group . $name, 'theme_builder');
      if (! empty($value)) {
        $variables[$group]['lists'][$i]['content'] = [
          '#type' => 'html_tag',
          '#tag' => 'div',
          '#attributes' => [
            'class' => [
              'container'
            ]
          ],
          [
            '#type' => 'html_tag',
            '#tag' => 'div',
            '#attributes' => [
              'class' => [
                'content-body'
              ]
            ],
            '#value' => t($value)
          ]
        ];
      }
      $name = $i . 'image_bg';
      $fid = theme_get_setting($group . $name, 'theme_builder');
      if (! empty($fid) && $fid[0] > 0) {
        $image_style = 'theme_builder_1620x1080';
        $file = \Drupal\file\Entity\File::load($fid[0]);
        if ($file && \Drupal\image\Entity\ImageStyle::load($image_style)) {
          $attributes = \Drupal\image\Entity\ImageStyle::load($image_style)->buildUrl($file->getFileUri());
          $variables[$group]['lists'][$i]['attributes'] = new Attribute([
            'style' => 'background-image:url(' . $attributes . ')',
            'class' => [
              'image-bg'
            ]
          ]);
        }
      } else {
        $attributes = '/themes/theme_builder/img/couple-at-home-eating-outdoor-meal-together-PK7B8TL.jpg';
        $variables[$group]['lists'][$i]['attributes'] = new Attribute([
          'style' => 'background-image:url(' . $attributes . ')',
          'class' => [
            'image-bg'
          ]
        ]);
      }
    }
  }

  /**
   */
  public static function wbupreprocess_page_getJourJ(&$variables)
  {
    $themes = self::getThemeInfos();
    // ***** retrive date setting
    $variables['JourJ'] = $themes->JourJ('2019-05-28 08:00:00');
  }

  /**
   * Retrieves a theme instance of \Drupal\bootstrap.
   */
  public static function getThemeInfos()
  {
    return new ThemeUtility();
  }

  /**
   * theme setting
   */
  public static function defineSetting(&$form, $form_state)
  {
    $themeName = 'theme_builder';
    $DefineSetting = new \Stephane888\HtmlBootstrap\DefineSetting($themeName);
    if (isset($_GET['build']) && $_GET['build'] == 'scss') {
      _load_scss();
    }
    $host = \Drupal::request()->getHost();
    // dump( \Drupal::request()->get );
    $themes = self::getThemeInfos();

    // verification des paramettres
    include DRUPAL_ROOT . '/themes/theme_builder/src/configTheme.php';
    /**
     * active tree to get name like array.
     */
    // $form['#tree'] = TRUE;
    /**
     * remove cache
     */
    $form_state->setCached(FALSE);
    // add custom submit
    $form['#submit'][] = 'theme_builder_settings_form_submit';
    $form['#attached']['library'][] = 'theme_builder/vue_js';
    $form['#attached']['library'][] = 'theme_builder/styleadmin';
    $form['#attached']['drupalSettings']['theme_builder']['layouts'] = $themes->config_layout_theme();
    // add templates vue js;
    $form['#suffix'] = new FormattableMarkup(file_get_contents(DRUPAL_ROOT . '/' . drupal_get_path('theme', $themeName) . '/plugins/components_vuejs/templates/forms.html.twig'), []);
    // dump($form['#suffix']);
    /*
     * $form['vuejs_preview'] = array(
     * '#type' => 'markup',
     * '#allowed_tags' => ['template','form','formfield','div','button','input'],
     * '#markup' => file_get_contents( DRUPAL_ROOT. '/' . drupal_get_path('theme','theme_builder') . '/plugins/components_vuejs/templates/forms.html.twig' ),
     * );
     */
    // iframe
    $form['theme_builder_markup_vvvbejs'] = array(
      '#type' => 'markup',
      '#allowed_tags' => [
        'iframe',
        'div'
      ],
      '#markup' => '<div id="drupal-builder-iframe" >
      <iframe src="//' . $host . '/themes/theme_builder/plugins/VvvebJs-master/editor.html" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
        <div id="putcontent-iframe"></div>
      </div>'
    );
    $form['theme_builder_markup_images'] = array(
      '#type' => 'markup',
      '#allowed_tags' => [
        'ul',
        'li',
        'div'
      ],
      '#markup' => '<div id="drupal-library-images-json" >' . $themes->load_images() . '</div>'
    );

    // ############################### [ Tous les elements juste apres form doivent avoir le nom du theme ]
    // theme_builder_vertical_tabs
    $vertical_tabs_group = 'theme_builder_vertical_tabs';
    $prefix = 'theme_builder_settings';
    $form[$vertical_tabs_group] = array(
      '#type' => 'vertical_tabs',
      // '#default_tab' => 'edit-publication',
      '#weight' => - 255,
      '#attributes' => [
        'id' => 'theme_builder-contents'
      ]
    );

    // ############################### BEGIN SECTIONS.

    /**
     * Group imagetextrightleft
     */
    if (theme_get_setting($themeName . '_imagetextrightleft_status', $themeName)) {
      $DefineSetting->group = 'imagetextrightleft';
      $DefineSetting->form_imagetextrightleft($form, $vertical_tabs_group, $form_state);
    }

    /**
     * Group cards
     */
    if (theme_get_setting($themeName . '_cards_status', $themeName)) {
      $DefineSetting->group = 'cards';
      $DefineSetting->form_cards($form, $vertical_tabs_group, $form_state);
    }

    /**
     * Customiser row view
     */
    $group = 'theme_builder_row_view';
    $form[$group] = array(
      '#type' => 'details',
      '#title' => t('Customiser row view'),
      '#group' => $vertical_tabs_group
    );
    // sous group liste de views
    $sous_group = 'list';
    $form[$group][$sous_group] = array(
      '#type' => 'details',
      '#title' => 'Liste de views',
      '#open' => false,
      '#attributes' => [
        'class' => [
          'wbu-ui-state-default'
        ]
      ]
    );
    $views = Views::getEnabledViews();
    // debugLog::logs($views['types_de_biens']->get('display'), 'getEnabledViews__types_de_biens0_display', 'kint0');
    // dump($views);
    $i = 0;
    foreach ($views as $view) {
      $i ++;
      // sous sous group view
      $sous_group2 = 'view' . $i;
      $form[$group][$sous_group][$sous_group2] = array(
        '#type' => 'details',
        '#title' => 'View : ' . $view->label(),
        '#open' => false,
        '#attributes' => [
          'class' => [
            'wbu-ui-state-default'
          ]
        ]
      );

      $displays = $view->get('display');
      $fields = [];
      if (isset($displays['default']['display_options']['fields'])) {
        $fields = $displays['default']['display_options']['fields'];
      }
      foreach ($displays as $key => $display) {
        // sous group n3 view display
        $sous_group3 = $key;
        $form[$group][$sous_group][$sous_group2][$sous_group3] = array(
          '#type' => 'details',
          '#title' => 'View : ' . $view->label() . ' : ' . $display['display_title'],
          '#open' => false,
          '#attributes' => [
            'class' => [
              'wbu-ui-state-default'
            ]
          ]
        );
        //
        $name = $view->id() . $key;
        $form[$group][$sous_group][$sous_group2][$sous_group3][$group . $name] = [];
        $value = theme_get_setting($group . $name, 'theme_builder');
        $form[$group][$sous_group][$sous_group2][$sous_group3][$group . $name] = $themes->add_checkbox($name, $group, $form[$group][$sous_group][$sous_group2][$sous_group3][$group . $name], 'Surcharge la vue ', '');
        //
        $name = $view->id() . $key . 'cfg';
        $form[$group][$sous_group][$sous_group2][$sous_group3][$group . $name] = [];

        $value = theme_get_setting($group . $name, 'theme_builder');
        $prefix = new FormattableMarkup('
					<div id="' . $group . $name . '" class="vueJS-bp-bootstrap" data-textarea="' . $group . $name . '">
							<input_select_v2 :input="bp.template" :label="\'Select template\'" :options="templates" :classe="\'col-sm-3\'"></input_select_v2>
							<input_select_v2 :input="formatter" :label="\'Select formater field\'" :classe="\'col-sm-2\'" :options="formatter_options" ></input_select_v2>
							<bootstrap_col_v2 v-if="bp.template.value==\'bootstrap-grid\'"
								:nbr_col="bp.nbr_col"
								:col="bp.col"
								:col_sm="bp.col_sm"
								:col_md="bp.col_md"
								:col_lg="bp.col_lg"
							></bootstrap_col_v2>
							<format_field_view  :fields="fields" v-if="show_formatter" :options="options"></format_field_view>
							<div>${bp}</div>
					</div>
<script>
	window.' . $group . $name . '=' . json_encode($fields) . ';
</script>
				', []);
        $form[$group][$sous_group][$sous_group2][$sous_group3][$group . $name] = $themes->add_textarea($name, $group, $form[$group][$sous_group][$sous_group2][$sous_group3][$group . $name], "Config json data", "", $prefix);
      }
    }
  }

  /**
   *
   * @param array $variables
   */
  public static function displayPreviouwNext(&$variables)
  {
    $route_name = \Drupal::routeMatch()->getParameter('node');
    // debugLog::logs($route_name, 'page__node', 'kint0');
    // dump($route_name->getType());
    $filters = [
      'nid' => $route_name->id(),
      'type' => $route_name->getType()
    ];
    // next node
    $view = Views::getView('wbu_block_next');
    if ($view) {
      $view->setExposedInput($filters);
      $variables['wbu_block_next']['content'] = $view->render();
      $variables['wbu_block_next']['title'] = $view->getTitle();
    }
    // next previous
    $view_2 = Views::getView('wbu_block_previous');
    if ($view_2) {
      $view_2->setExposedInput($filters);
      $variables['wbu_block_previous']['content'] = $view_2->render();
      $variables['wbu_block_previous']['title'] = $view_2->getTitle();
    }
  }

  protected static function getHeaders($LoaderDrupal, &$variables)
  {
    $theme_name = 'theme_builder';
    $options = [
      'type' => 'logo_center'
    ];
    /**
     * On recupere le tableau du branding.
     */
    if (isset($variables['page']['header']['theme_builder_branding'])) {
      $options['branding'] = $variables['page']['header']['theme_builder_branding'];
      unset($variables['page']['header']['theme_builder_branding']);
    }
    /**
     * On recupere le menu des liens.
     */
    if (isset($variables['page']['header']['theme_builder_account_menu'])) {
      $options['account_menu'] = $variables['page']['header']['theme_builder_account_menu'];
      unset($variables['page']['header']['theme_builder_account_menu']);
    }
    $variables['page']['header'][$theme_name . '_Headers'] = $LoaderDrupal->getSectionHeaders($options);
    $variables['page']['header'][$theme_name . '_Headers']["#weight"] = - 100;
  }

  /**
   * Charge le slider.
   *
   * @param object $LoaderDrupal
   * @param object $variables
   */
  protected static function getSliders($LoaderDrupal, &$variables)
  {
    $value = theme_get_setting('theme_builder_slide_value', 'theme_builder');
    $theme_name = 'theme_builder';
    $options = [
      'type' => $value
    ];
    /**
     * get datas and put it in options.
     */
    $LoaderDrupal->loadSlideDatas($options, 'theme_builder_slide', $theme_name);
    $variables['page']['before_content'][$theme_name . '_sliders'] = $LoaderDrupal->getSectionSliders($options);
    $variables['page']['before_content'][$theme_name . '_sliders']["#weight"] = - 100;
  }

  protected static function getImageTextRightLeft($LoaderDrupal, &$variables)
  {
    $group = 'imagetextrightleft';
    $theme_name = 'theme_builder';
    $i = 0;
    $values = theme_get_setting($theme_name . '_' . $group, 'theme_builder');
    /**
     * Gestion de l'affichage.
     */
    if (isset($values['displays']))
      foreach ($values['displays'] as $display) {
        $i ++;
        /**
         * Filtre de l'affichage
         */
        $parameter = (empty($display['nid'])) ? '' : $display['nid'];
        if ($LoaderDrupal->filterByRouteName($display['route'], $parameter)) {

          $options = [
            'type' => $display['model']
          ];
          $LoaderDrupal->loadImageTextRightLeftDatas($options, $group, $theme_name, $display);
          $variables['page'][$display['region']][$theme_name . '_' . $group][$i] = $LoaderDrupal->getImageTextRightLeft($options);
          $variables['page'][$display['region']][$theme_name . '_' . $group][$i]["#weight"] = $display['weight'];
          $variables['page'][$display['region']][$theme_name . '_' . $group]["#weight"] = $display['weight'];
        }
      }
  }

  /**
   * load CallActions.
   *
   * @param object $LoaderDrupal
   * @param object $variables
   */
  protected static function getCallActions($LoaderDrupal, &$variables)
  {
    $group = 'theme_builder_callactions';
    $theme_name = 'theme_builder';
    $options = [
      'type' => 'TextActionModele1'
    ];
    /**
     * Get datas and put it in options.
     */
    $LoaderDrupal->loadCallActionsDatas($options, $group, $theme_name);
    $variables['page']['before_content'][$theme_name . '_CallActions'] = $LoaderDrupal->getCallActions($options);
    $variables['page']['before_content'][$theme_name . '_CallActions']["#weight"] = - 97;
  }

  /**
   * load card.
   *
   * @param object $LoaderDrupal
   * @param object $variables
   */
  protected static function getCards($LoaderDrupal, &$variables)
  {
    $group = 'cards';
    $theme_name = 'theme_builder';
    $i = 0;
    $values = theme_get_setting($theme_name . '_' . $group, 'theme_builder');
    /**
     * Gestion de l'affichage.
     */
    if (isset($values['displays']))
      foreach ($values['displays'] as $display) {
        $i ++;
        /**
         * Filtre de l'affichage
         */
        $parameter = (empty($display['nid'])) ? '' : $display['nid'];
        if ($LoaderDrupal->filterByRouteName($display['route'], $parameter)) {
          $options = [
            'type' => $display['model']
          ];
          $LoaderDrupal->loadCardsDatas($options, $group, $theme_name, $display);
          $variables['page'][$display['region']][$theme_name . '_' . $group][$i] = $LoaderDrupal->getCards($options);
          $variables['page'][$display['region']][$theme_name . '_' . $group][$i]["#weight"] = $display['weight'];
          $variables['page'][$display['region']][$theme_name . '_' . $group]["#weight"] = $display['weight'];
        }
      }
  }

  /**
   * load card.
   *
   * @param object $LoaderDrupal
   * @param object $variables
   */
  protected static function getCarouselCards($LoaderDrupal, &$variables)
  {
    $group = 'theme_builder_carouselcards';
    $theme_name = 'theme_builder';
    $options = [
      'type' => 'Modele1'
    ];
    $options['nombre_item'] = theme_get_setting($group . '_nombre_item', 'theme_builder');
    /**
     * Get datas and put it in options.
     */
    $LoaderDrupal->loadCarouselCardsDatas($options, $group, $theme_name);
    $variables['page']['before_content'][$theme_name . '_CarouselCards'] = $LoaderDrupal->getCarouselCards($options);
    $variables['page']['before_content'][$theme_name . '_CarouselCards']["#weight"] = - 96;
    /**
     * Add library
     */
    $variables['page']['before_content'][$theme_name . '_CarouselCards']['#attached']['library'][] = 'theme_builder/owlcarousel';
  }

  /**
   * load CallActions.
   *
   * @param object $LoaderDrupal
   * @param object $variables
   */
  protected static function getComments($LoaderDrupal, &$variables)
  {
    $group = 'theme_builder_comments';
    $theme_name = 'theme_builder';
    $options = [
      'type' => 'Comments-CarouselM1'
    ];
    /**
     * Get datas and put it in options.
     */
    $LoaderDrupal->loadCommentsDatas($options, $group, $theme_name);
    $variables['page']['before_content'][$theme_name . '_Comments'] = $LoaderDrupal->getComments($options);
    $variables['page']['before_content'][$theme_name . '_Comments']["#weight"] = - 95;
  }

  /**
   * Load getFooters
   */
  protected static function getFooters($LoaderDrupal, &$variables)
  {
    $group = 'theme_builder_comments';
    $theme_name = 'theme_builder';
    $options = [
      'type' => 'footerm1'
    ];
    /**
     * Get datas and put it in options.
     */
    $LoaderDrupal->loadCommentsDatas($options, $group, $theme_name);
    $variables['page']['footer'][$theme_name . '_Footers'] = $LoaderDrupal->getFooters($options);
    $variables['page']['footer'][$theme_name . '_Footers']["#weight"] = - 100;
  }
}



