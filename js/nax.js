var edit_flag = false;
var screen_height;
$(function(){
	//$("#calendar").datepicker();

	$(".left-content .header span").click(function(){
		$(".left-content .header span").removeClass('selected');
		$("div[id*='state_']").hide();
		$(this).addClass('selected');
		var index = $(this).attr('id').substr(5);
		//var mapUrl = 'img/map'+index+'.png';
		//alert(mapUrl);
		$(".img-date").show();
		if(index == '6') $(".img-date").text('MES 2,5');
		if(index == '4') $(".img-date").hide();
		//$(".map").css('background',"url("+mapUrl+") no-repeat top center");
		//alert("#view_"+index);
		$("#state_"+index).show();
	});

	screen_height = window.innerHeight;
	$('.map').css('height',screen_height-160);
	$("#btn_edit").click(function(){
		if(!edit_flag)
		{
			$(this).attr("src","img/edit_active.png");
			edit_flag = true;
			addInteraction();
			
		}
		else
		{
			$(this).attr("src","img/edit.png");
			edit_flag = false;
			map.removeInteraction(draw);

		}
		

	});
	var raster = new ol.layer.Tile({
  source: new ol.source.OSM()
});

var source = new ol.source.Vector();

var vector = new ol.layer.Vector({
  source: source,
  style: new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 255, 0.2)'
    }),
    stroke: new ol.style.Stroke({
      color: '#ffcc33',
      width: 2
    }),
    image: new ol.style.Circle({
      radius: 7,
      fill: new ol.style.Fill({
        color: '#ffcc33'
      })
    })
  })
});

var map = new ol.Map({
  layers: [raster,vector],
  target: 'gmap',
  view: new ol.View({
    center: [-11000000, 4600000],
    zoom: 4
  })
});
var draw;
function addInteraction() {
  var value = "Polygon";
  if (edit_flag==true){
    draw = new ol.interaction.Draw({
      source: source,
      type:(value)
    });
    map.addInteraction(draw);
  }
 };
addInteraction();

});
