function getSrc () {
 var el = document.querySelector( '._pfyik');
 var url = el.querySelector( '._2di5p').src;
var link = document.createElement( 'a');
link.target = "_blank";
link.download = "img.jpg";
link.href = url;
link.click ();
}
getSrc ();