---
title: Two.WebGLRenderer
pageClass: docs
lang: en-US
---

# Two.WebGLRenderer


<div class="extends">

Extends: [Two.Events](/docs/events/)

</div>


This class is used by [Two](/docs/two/) when constructing with `type` of `Two.Types.webgl`. It takes Two.js' scenegraph and renders it to a `<canvas />` through the WebGL api.


<div class="meta">
  <custom-button text="Source" type="source" href="https://github.com/jonobr1/two.js/blob/main/src/renderers/webgl.js" />
</div>



### Constructor


| Argument | Description |
| ---- | ----------- |
|  parameters  | This object is inherited when constructing a new instance of [Two](/docs/two/). |
|  parameters.domElement  | The `<canvas />` to draw to. If none given a new one will be constructed. |
|  parameters.offscreenElement  | The offscreen two dimensional `<canvas />` to render each element on WebGL texture updates. |
|  parameters.antialias  | Determines whether the canvas should clear render with antialias on. |



<div class="static member ">

## Utils

<h2 class="longname" aria-hidden="true"><a href="#Utils"><span class="prefix">Two.WebGLRenderer.</span><span class="shortname">Utils</span></a></h2>










<div class="properties">

A massive object filled with utility functions and properties to render Two.js objects to a `<canvas />` through the WebGL API.

</div>










<div class="meta">

  <a class="lineno" target="_blank" rel="noopener noreferrer" href="https://github.com/jonobr1/two.js/blob/main/src/renderers/webgl.js#L1558">
    webgl.js:1558
  </a>

</div>




</div>



<div class="instance member ">

## domElement

<h2 class="longname" aria-hidden="true"><a href="#domElement"><span class="prefix">Two.WebGLRenderer.</span><span class="shortname">domElement</span></a></h2>










<div class="properties">

The `<canvas />` associated with the Two.js scene.

</div>










<div class="meta">

  <a class="lineno" target="_blank" rel="noopener noreferrer" href="https://github.com/jonobr1/two.js/blob/main/src/renderers/webgl.js#L1440">
    webgl.js:1440
  </a>

</div>




</div>



<div class="instance member ">

## scene

<h2 class="longname" aria-hidden="true"><a href="#scene"><span class="prefix">Two.WebGLRenderer.</span><span class="shortname">scene</span></a></h2>










<div class="properties">

The root group of the scenegraph.

</div>










<div class="meta">

  <a class="lineno" target="_blank" rel="noopener noreferrer" href="https://github.com/jonobr1/two.js/blob/main/src/renderers/webgl.js#L1451">
    webgl.js:1451
  </a>

</div>




</div>



<div class="instance member ">

## overdraw

<h2 class="longname" aria-hidden="true"><a href="#overdraw"><span class="prefix">Two.WebGLRenderer.</span><span class="shortname">overdraw</span></a></h2>










<div class="properties">

Determines whether the canvas clears the background each draw call.

</div>










<div class="meta">

  <a class="lineno" target="_blank" rel="noopener noreferrer" href="https://github.com/jonobr1/two.js/blob/main/src/renderers/webgl.js#L1477">
    webgl.js:1477
  </a>

</div>




</div>



<div class="instance member ">

## ctx

<h2 class="longname" aria-hidden="true"><a href="#ctx"><span class="prefix">Two.WebGLRenderer.</span><span class="shortname">ctx</span></a></h2>










<div class="properties">

Associated two dimensional context to render on the `<canvas />`.

</div>










<div class="meta">

  <a class="lineno" target="_blank" rel="noopener noreferrer" href="https://github.com/jonobr1/two.js/blob/main/src/renderers/webgl.js#L1484">
    webgl.js:1484
  </a>

</div>




</div>



<div class="instance member ">

## programs

<h2 class="longname" aria-hidden="true"><a href="#programs"><span class="prefix">Two.WebGLRenderer.</span><span class="shortname">programs</span></a></h2>










<div class="properties">

Associated WebGL programs to render all elements from the scenegraph.

</div>










<div class="meta">

  <a class="lineno" target="_blank" rel="noopener noreferrer" href="https://github.com/jonobr1/two.js/blob/main/src/renderers/webgl.js#L1500">
    webgl.js:1500
  </a>

</div>




</div>



<div class="instance function ">

## setSize

<h2 class="longname" aria-hidden="true"><a href="#setSize"><span class="prefix">Two.WebGLRenderer.</span><span class="shortname">setSize</span></a></h2>








<div class="fires">

__Triggers__:

+ `event:resize`

</div>





<div class="params">

| Argument | Description |
| ---- | ----------- |
|  width  | The new width of the renderer. |
|  height  | The new height of the renderer. |
|  ratio  | The new pixel ratio (pixel density) of the renderer. Defaults to calculate the pixel density of the user's screen. |
</div>




<div class="description">

Change the size of the renderer.

</div>





<div class="meta">

  <a class="lineno" target="_blank" rel="noopener noreferrer" href="https://github.com/jonobr1/two.js/blob/main/src/renderers/webgl.js#L1570">
    webgl.js:1570
  </a>

</div>




</div>



<div class="instance function ">

## render

<h2 class="longname" aria-hidden="true"><a href="#render"><span class="prefix">Two.WebGLRenderer.</span><span class="shortname">render</span></a></h2>















<div class="description">

Render the current scene to the `<canvas />`.

</div>





<div class="meta">

  <a class="lineno" target="_blank" rel="noopener noreferrer" href="https://github.com/jonobr1/two.js/blob/main/src/renderers/webgl.js#L1618">
    webgl.js:1618
  </a>

</div>




</div>


