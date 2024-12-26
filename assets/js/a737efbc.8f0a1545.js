"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[45473],{14209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(74848),o=n(28453);const r={id:"post-type",title:"Post Type"},i=void 0,a={id:"legacy/v4/guides/post-type",title:"Post Type",description:"docs-source",source:"@site/docs/legacy/v4/guides/post-type.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/post-type",permalink:"/buanarchery.github.io/docs/legacy/v4/guides/post-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"post-type",title:"Post Type"},sidebar:"docs",previous:{title:"Enqueue",permalink:"/buanarchery.github.io/docs/legacy/v4/guides/enqueue"},next:{title:"Taxonomy",permalink:"/buanarchery.github.io/docs/legacy/v4/guides/taxonomy"}},c={},l=[{value:"Example:",id:"example",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/custom-post-type/class-base-post-type.php",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,s.jsxs)(t.p,{children:["When working on a WordPress project it is possible that, at one point, you will need to register a Custom Post Type.\nCustom Post Type class is located in ",(0,s.jsx)(t.code,{children:"Eightshift Libs"}),". To extend it, use ",(0,s.jsx)(t.code,{children:"Eightshift_Libs\\Custom_Post_Type\\Base_Post_Type"})," class. This is an abstract class."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example:"}),"\n",(0,s.jsx)(t.p,{children:"To create a custom post type:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["make a new class ",(0,s.jsx)(t.code,{children:"src/custom-post-type/class-projects.php"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"implement all the methods provided in the example."}),"\n",(0,s.jsxs)(t.li,{children:["register the class inside the ",(0,s.jsx)(t.code,{children:"class-main.php"})," file."]}),"\n",(0,s.jsx)(t.li,{children:"dump autoload."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"<?php\n/**\n * File that holds class for \"Projects\" custom post type registration.\n *\n * @package Eightshift_Boilerplate\\Custom_Post_Type\n */\n\nnamespace Eightshift_Boilerplate\\Custom_Post_Type;\n\nuse Eightshift_Libs\\Custom_Post_Type\\Base_Post_Type;\nuse Eightshift_Libs\\Custom_Post_Type\\Label_Generator;\n\n/**\n * Class Projects.\n */\nclass Projects extends Base_Post_Type {\n\n  /**\n   * Post type slug constant.\n   *\n   * @var string\n   */\n  const POST_TYPE_SLUG = 'projects-type';\n\n  /**\n   * URL slug for the custom post type.\n   *\n   * @var string\n   */\n  const POST_TYPE_URL_SLUG = 'projects';\n\n  /**\n   * Rest API Endpoint slug constant.\n   *\n   * @var string\n   */\n  const REST_API_ENDPOINT_SLUG = 'projects';\n\n  /**\n   * Capability type for projects post type.\n   *\n   * @var string\n   */\n  const POST_CAPABILITY_TYPE = 'post';\n\n  /**\n   * Location of menu in sidebar.\n   *\n   * @var int\n   */\n  const MENU_POSITION = 20;\n\n  /**\n   * Set menu icon.\n   *\n   * @var string\n   */\n  const MENU_ICON = 'dashicons-analytics';\n\n  /**\n   * Get the slug to use for the Projects custom post type.\n   *\n   * @return string Custom post type slug.\n   */\n  protected function get_post_type_slug() : string {\n    return self::POST_TYPE_SLUG;\n  }\n\n  /**\n   * Get the arguments that configure the Projects custom post type.\n   *\n   * @return array Array of arguments.\n   */\n  protected function get_post_type_arguments() : array {\n\n    $nouns = [\n      Label_Generator::SINGULAR_NAME_UC => esc_html_x( 'Project', 'Projects post uppercase singular name', 'eightshift-boilerplate' ),\n      Label_Generator::SINGULAR_NAME_LC => esc_html_x( 'project', 'Projects post lowercase singular name', 'eightshift-boilerplate' ),\n      Label_Generator::PLURAL_NAME_UC => esc_html_x( 'Projects', 'Projects post uppercase plural name', 'eightshift-boilerplate' ),\n      Label_Generator::PLURAL_NAME_LC => esc_html_x( 'projects', 'Projects post lowercase plural name', 'eightshift-boilerplate' ),\n    ];\n\n    return [\n      'label'              => $nouns[ Label_Generator::SINGULAR_NAME_UC ],\n      'labels'             => ( new Label_Generator() )->get_generated_labels( $nouns ),\n      'public'             => true,\n      'publicly_queryable' => true,\n      'show_ui'            => true,\n      'show_in_menu'       => true,\n      'query_var'          => true,\n      'capability_type'    => self::POST_CAPABILITY_TYPE,\n      'has_archive'        => true,\n      'rewrite'            => [ 'slug' => static::POST_TYPE_URL_SLUG ],\n      'hierarchical'       => false,\n      'menu_icon'          => static::MENU_ICON,\n      'menu_position'      => static::MENU_POSITION,\n      'supports'           => [ 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ],\n      'show_in_rest'       => true,\n      'rest_base'          => static::REST_API_ENDPOINT_SLUG,\n    ];\n  }\n}\n\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);