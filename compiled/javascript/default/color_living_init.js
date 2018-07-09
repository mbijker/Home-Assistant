$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Kleur woonkamer");
    content_width = (122 + 5) * 8 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [122, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 8,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseweather-default-weather" id="default-weather"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><div data-bind="attr: {style: main_style}"><p class="primary-climacon" data-bind="css: icon"></p><p class="primary-info" data-bind="text: temperature"></p><p class="primary-unit" data-bind="html: unit, attr: {style: unit_style}"></p><br></div><div data-bind="attr: {style: sub_style}"><p class="secondary-detail" data-bind="visible: apparent_temperature"><span class="secondary-icon mdi mdi-thermometer-lines" title="Apparent Temp" data-bind="visible: prefer_icons"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Apparent Temp:&nbsp;</span><span class="secondary-info" data-bind="html: apparent_temperature"></span><span class="secondary-info" data-bind="html: unit, attr: {style: sub_unit_style}"></span></p><p class="secondary-detail" data-bind="visible: humidity"><span class="secondary-icon mdi mdi-water-percent" title="Humidity" data-bind="visible: prefer_icons"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Humidity:&nbsp;</span><span class="secondary-info" data-bind="text: humidity"></span><span class="secondary-unit" data-bind="attr: {style: sub_unit_style}">%</span><br></p><p class="secondary-detail"  data-bind="visible: precip_probability() || precip_intensity()"><span data-bind="visible: precip_probability"><span class="secondary-icon mdi" title="Rain" data-bind="visible: prefer_icons, css: precip_type_icon"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Rain:&nbsp;</span><span class="secondary-info" data-bind="text: precip_probability"></span><span class="secondary-unit" data-bind="attr: {style: sub_unit_style}">%</span></span><span data-bind="visible: precip_intensity"><span class="secondary-info" data-bind="visible: precip_intensity() && precip_probability()">&nbsp;/&nbsp;</span><span class="secondary-info" data-bind="text: precip_intensity"></span><span class="secondary-unit" data-bind="text: rain_unit, attr: {style: sub_unit_style}"></span></span></p><p class="secondary-detail" data-bind="visible: wind_speed"><span class="secondary-icon mdi mdi-weather-windy" data-bind="visible: prefer_icons, css: bearing_icon, attr: {title: wind_bearing() + \'&deg;\'}"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Wind:&nbsp;</span><span class="secondary-info" data-bind="text: wind_speed"></span><span class="secondary-unit" data-bind="text: wind_unit, attr: {style: sub_unit_style}"></span></p><p class="secondary-detail" data-bind="visible: wind_bearing() && !prefer_icons()"><span class="secondary-info" data-bind="html: wind_bearing"></span><span class="secondary-unit" data-bind="attr: {style: sub_unit_style}">&deg;</span></p><p class="secondary-detail" data-bind="visible: pressure() != \'\'"><span class="secondary-icon mdi mdi-gauge" data-bind="visible: prefer_icons"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Pressure:&nbsp;</span><span class="secondary-info" data-bind="text: pressure"></span><span class="secondary-info" data-bind="text: pressure_unit, attr: {style: sub_unit_style}"></span></p><div data-bind="visible: show_forecast"> <hr><h1 class="title" data-bind="text: forecast_title, attr:{ style: title_style}, visible: show_forecast"></h1><p class="secondary-detail" data-bind="visible: forecast_temperature_min"><span class="secondary-climacon" data-bind="css: forecast_icon"></span></p><p class="secondary-detail" data-bind="visible: forecast_temperature_min"><span class="secondary-info" data-bind="text: forecast_temperature_min"></span><span class="secondary-info" data-bind="visible: forecast_temperature_max"><span>/</span><span class="secondary-info" data-bind="text: forecast_temperature_max"></span></span></p><p class="secondary-detail" data-bind="visible: forecast_precip_probability"><span class="secondary-icon mdi" title="Rain" data-bind="visible: prefer_icons, css: forecast_precip_type_icon"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Rain:&nbsp;</span><span class="secondary-info" data-bind="text: forecast_precip_probability"></span><span class="secondary-icon" data-bind="attr: {style: sub_unit_style}">%</span></p></div></div></div></li>', 2, 2, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock" id="default-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-mark-presence" id="default-mark-presence"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 5, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-miranda-presence" id="default-miranda-presence"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 7, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-temp-shed" id="default-temp-shed"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-humid-shed" id="default-humid-shed"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basegauge-default-disk" id="default-disk"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="graph"></div></div></li>', 1, 1, 5, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-speedtest-down" id="default-speedtest-down"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-solar-generation" id="default-solar-generation"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-solar-power" id="default-solar-power"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 8, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-script-color-red" id="default-script-color-red"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-script-color-orange" id="default-script-color-orange"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-script-color-white" id="default-script-color-white"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-script-color-blue" id="default-script-color-blue"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-script-color-purple" id="default-script-color-purple"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseerror-default-back" id="default-back"><h1 class="error" data-bind="text: error"></h1></div></li>', 1, 1, 3, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-main-panel" id="default-load-main-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-living" id="default-load-living"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 2, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-bedroom-panel" id="default-load-bedroom-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 3, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-shed" id="default-load-shed"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 4, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-downstairs" id="default-load-downstairs"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 5, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-upstairs" id="default-load-upstairs"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 6, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-controls" id="default-load-controls"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 7, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 8, 5)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-weather"] = new baseweather("default-weather", "", "default", {'icons': {'rain': 'mdi-umbrella', 'unknown': 'mdi-umbrella', 'sleet': 'mdi-weather-snowy-rainy', 'snow': 'mdi-snowflake'}, 'prefer_icons': 1, 'widget_type': 'baseweather', 'css': {}, 'static_css': {'main_style': 'color: #ffaa00;', 'sub_style': 'color: #00aaff;', 'widget_style': 'background-color: #444;', 'sub_unit_style': 'color: #00aaff;', 'unit_style': 'color: #ffaa00;', 'title_style': 'color: #00aaff;'}, 'entities': {'apparent_temperature': 'sensor.dark_sky_apparent_temperature', 'temperature': 'sensor.dark_sky_temperature', 'precip_intensity': 'sensor.dark_sky_precip_intensity', 'precip_probability': 'sensor.dark_sky_precip_probability', 'forecast_precip_type': 'sensor.dark_sky_precip_1', 'forecast_precip_probability': 'sensor.dark_sky_precip_probability_1', 'humidity': 'sensor.dark_sky_humidity', 'forecast_temperature_min': 'sensor.dark_sky_daily_low_temperature_1', 'wind_bearing': 'sensor.dark_sky_wind_bearing', 'forecast_temperature_max': 'sensor.dark_sky_daily_high_temperature_1', 'pressure': 'sensor.dark_sky_pressure', 'icon': 'sensor.dark_sky_icon', 'precip_type': 'sensor.dark_sky_precip', 'wind_speed': 'sensor.dark_sky_wind_speed', 'forecast_icon': 'sensor.dark_sky_icon_1'}, 'fields': {'wind_unit': '', 'temperature': '', 'precip_intensity': '', 'forecast_precip_probability': '', 'forecast_title': '', 'wind_bearing': '', 'prefer_icons': 1, 'icon': '', 'forecast_precip_type_icon': 'mdi-umbrella', 'precip_type': '', 'title': '', 'forecast_icon': '', 'unit': '', 'apparent_temperature': '', 'precip_type_icon': 'mdi-umbrella', 'precip_probability': '', 'forecast_precip_type': '', 'rain_unit': '', 'humidity': '', 'forecast_temperature_min': '', 'pressure_unit': '', 'forecast_temperature_max': '', 'pressure': '', 'wind_speed': '', 'show_forecast': 0, 'bearing_icon': 'mdi-rotate-0'}, 'static_icons': [], 'units': '&deg;C', 'shorten': 'one', 'namespace': 'default'})
    
        widgets["default-clock"] = new baseclock("default-clock", "", "default", {'icons': [], 'widget_type': 'baseclock', 'static_icons': [], 'css': {}, 'static_css': {'widget_style': 'background-color: #444;', 'time_style': 'color: #aa00ff;', 'date_style': 'color: #fff;'}, 'fields': {'date': '', 'time': ''}, 'time_format': '24hr', 'namespace': 'default'})
    
        widgets["default-mark-presence"] = new baseswitch("default-mark-presence", "", "default", {'state_active': 'home', 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icon_off': 'fa-male', 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon_style': '', 'icon': '', 'state_text': '', 'title': 'Mark'}, 'post_service_inactive': {'location_name': 'not_home', 'dev_id': 'google_maps_113826688961459892833', 'service': 'device_tracker/see'}, 'state_map': {'not_home': 'AWAY', 'home': 'HOME'}, 'namespace': 'default', 'icons': {'icon_on': 'fa-male', 'icon_off': 'fa-male'}, 'widget_type': 'baseswitch', 'icon_on': 'fa-male', 'state_text': 1, 'state_inactive': 'not_home', 'post_service_active': {'location_name': 'home', 'dev_id': 'google_maps_113826688961459892833', 'service': 'device_tracker/see'}, 'static_icons': [], 'enable': 0, 'entity': 'device_tracker.google_maps_113826688961459892833'})
    
        widgets["default-miranda-presence"] = new baseswitch("default-miranda-presence", "", "default", {'state_active': 'home', 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icon_off': 'fa-female', 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon_style': '', 'icon': '', 'state_text': '', 'title': 'Miranda'}, 'post_service_inactive': {'location_name': 'not_home', 'dev_id': 'google_maps_102683890919398491687', 'service': 'device_tracker/see'}, 'state_map': {'not_home': 'AWAY', 'home': 'HOME'}, 'namespace': 'default', 'icons': {'icon_on': 'fa-female', 'icon_off': 'fa-female'}, 'widget_type': 'baseswitch', 'icon_on': 'fa-female', 'state_text': 1, 'state_inactive': 'not_home', 'post_service_active': {'location_name': 'home', 'dev_id': 'google_maps_102683890919398491687', 'service': 'device_tracker/see'}, 'static_icons': [], 'enable': 0, 'entity': 'device_tracker.google_maps_102683890919398491687'})
    
        widgets["default-temp-shed"] = new basedisplay("default-temp-shed", "", "default", {'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'text_style': 'color: #fff;font-size: 100%;'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'container_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'value': '', 'unit': '', 'state_text': '', 'title': 'Temperatuur Schuur'}, 'namespace': 'default', 'icons': [], 'widget_type': 'basedisplay', 'sub_entity_to_entity_attribute': '', 'precision': 1, 'static_icons': [], 'entity': 'sensor.temperature_shed'})
    
        widgets["default-humid-shed"] = new basedisplay("default-humid-shed", "", "default", {'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'text_style': 'color: #fff;font-size: 100%;'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'container_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'value': '', 'unit': '', 'state_text': '', 'title': 'Luchtvochtigheid Schuur'}, 'namespace': 'default', 'icons': [], 'widget_type': 'basedisplay', 'sub_entity_to_entity_attribute': '', 'precision': 1, 'static_icons': [], 'entity': 'sensor.humidity_shed'})
    
        widgets["default-disk"] = new basegauge("default-disk", "", "default", {'min': 0, 'low_color': '#00aaff', 'css': {}, 'static_css': {'value_style': '', 'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'unit_style': '', 'title_style': 'color: #fff;'}, 'high_color': '#00aaff', 'fields': {'title2': '', 'unit': '', 'title': 'Opslag'}, 'units': 'GB', 'max': 14, 'namespace': 'default', 'icons': [], 'widget_type': 'basegauge', 'bgcolor': '#666', 'med_color': '#00aaff', 'color': '#00aaff', 'static_icons': [], 'entity': 'sensor.disk_use_'})
    
        widgets["default-speedtest-down"] = new basedisplay("default-speedtest-down", "", "default", {'icons': [], 'entity_to_sub_entity_attribute': '', 'widget_type': 'basedisplay', 'static_icons': [], 'namespace': 'default', 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'text_style': 'color: #fff;font-size: 100%;'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'container_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'title_style': 'color: #fff;'}, 'fields': {'title2': 'download', 'value': '', 'unit': '', 'state_text': '', 'title': 'Speedtest'}, 'sub_entity': '', 'entity': 'sensor.speedtest_download', 'sub_entity_to_entity_attribute': ''})
    
        widgets["default-solar-generation"] = new basedisplay("default-solar-generation", "", "default", {'icons': [], 'entity_to_sub_entity_attribute': '', 'widget_type': 'basedisplay', 'static_icons': [], 'namespace': 'default', 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'text_style': 'color: #fff;font-size: 100%;'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'container_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'title_style': 'color: #fff;'}, 'fields': {'title2': 'zonnepanelen', 'value': '', 'unit': '', 'state_text': '', 'title': 'Opbrengst'}, 'sub_entity': '', 'entity': 'sensor.energy_generation', 'sub_entity_to_entity_attribute': ''})
    
        widgets["default-solar-power"] = new basedisplay("default-solar-power", "", "default", {'icons': [], 'entity_to_sub_entity_attribute': '', 'widget_type': 'basedisplay', 'static_icons': [], 'namespace': 'default', 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'text_style': 'color: #fff;font-size: 100%;'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'container_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'title_style': 'color: #fff;'}, 'fields': {'title2': 'zonnepanelen', 'value': '', 'unit': '', 'state_text': '', 'title': 'Vermogen'}, 'sub_entity': '', 'entity': 'sensor.power_generation', 'sub_entity_to_entity_attribute': ''})
    
        widgets["default-script-color-red"] = new baseswitch("default-script-color-red", "", "default", {'static_icons': [], 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icon_off': 'fa-paint-brush', 'static_css': {'widget_style': 'background: red;background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon_style': '', 'icon': '', 'state_text': '', 'title': 'Rood'}, 'post_service_inactive': {'entity_id': 'script.color_bedroom_red', 'service': 'homeassistant/turn_off'}, 'namespace': 'default', 'icons': {'icon_on': 'fa-paint-brush', 'icon_off': 'fa-paint-brush'}, 'widget_style': 'background: red;', 'widget_type': 'baseswitch', 'icon_on': 'fa-paint-brush', 'enable': 1, 'state_inactive': 'off', 'post_service_active': {'entity_id': 'script.color_bedroom_red', 'service': 'homeassistant/turn_on'}, 'momentary': 1000, 'state_active': 'on', 'entity': 'script.color_bedroom_red', 'ignore_state': 1})
    
        widgets["default-script-color-orange"] = new baseswitch("default-script-color-orange", "", "default", {'static_icons': [], 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icon_off': 'fa-paint-brush', 'static_css': {'widget_style': 'background: orange;background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon_style': '', 'icon': '', 'state_text': '', 'title': 'Oranje'}, 'post_service_inactive': {'entity_id': 'script.color_bedroom_orange', 'service': 'homeassistant/turn_off'}, 'namespace': 'default', 'icons': {'icon_on': 'fa-paint-brush', 'icon_off': 'fa-paint-brush'}, 'widget_style': 'background: orange;', 'widget_type': 'baseswitch', 'icon_on': 'fa-paint-brush', 'enable': 1, 'state_inactive': 'off', 'post_service_active': {'entity_id': 'script.color_bedroom_orange', 'service': 'homeassistant/turn_on'}, 'momentary': 1000, 'state_active': 'on', 'entity': 'script.color_bedroom_orange', 'ignore_state': 1})
    
        widgets["default-script-color-white"] = new baseswitch("default-script-color-white", "", "default", {'static_icons': [], 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icon_off': 'fa-paint-brush', 'static_css': {'widget_style': 'background: white;background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon_style': '', 'icon': '', 'state_text': '', 'title': 'Wit'}, 'post_service_inactive': {'entity_id': 'script.color_bedroom_white', 'service': 'homeassistant/turn_off'}, 'namespace': 'default', 'icons': {'icon_on': 'fa-paint-brush', 'icon_off': 'fa-paint-brush'}, 'widget_style': 'background: white;', 'widget_type': 'baseswitch', 'icon_on': 'fa-paint-brush', 'enable': 1, 'state_inactive': 'off', 'post_service_active': {'entity_id': 'script.color_bedroom_white', 'service': 'homeassistant/turn_on'}, 'momentary': 1000, 'state_active': 'on', 'entity': 'script.color_bedroom_white', 'ignore_state': 1})
    
        widgets["default-script-color-blue"] = new baseswitch("default-script-color-blue", "", "default", {'static_icons': [], 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icon_off': 'fa-paint-brush', 'static_css': {'widget_style': 'background: blue;background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon_style': '', 'icon': '', 'state_text': '', 'title': 'Blauw'}, 'post_service_inactive': {'entity_id': 'script.color_bedroom_blue', 'service': 'homeassistant/turn_off'}, 'namespace': 'default', 'icons': {'icon_on': 'fa-paint-brush', 'icon_off': 'fa-paint-brush'}, 'widget_style': 'background: blue;', 'widget_type': 'baseswitch', 'icon_on': 'fa-paint-brush', 'enable': 1, 'state_inactive': 'off', 'post_service_active': {'entity_id': 'script.color_bedroom_blue', 'service': 'homeassistant/turn_on'}, 'momentary': 1000, 'state_active': 'on', 'entity': 'script.color_bedroom_blue', 'ignore_state': 1})
    
        widgets["default-script-color-purple"] = new baseswitch("default-script-color-purple", "", "default", {'static_icons': [], 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'icon_off': 'fa-paint-brush', 'static_css': {'widget_style': 'background: blue;background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon_style': '', 'icon': '', 'state_text': '', 'title': 'Blauw'}, 'post_service_inactive': {'entity_id': 'script.color_living_blue', 'service': 'homeassistant/turn_off'}, 'namespace': 'default', 'icons': {'icon_on': 'fa-paint-brush', 'icon_off': 'fa-paint-brush'}, 'widget_style': 'background: blue;', 'widget_type': 'baseswitch', 'icon_on': 'fa-paint-brush', 'enable': 1, 'state_inactive': 'off', 'post_service_active': {'entity_id': 'script.color_living_blue', 'service': 'homeassistant/turn_on'}, 'momentary': 1000, 'state_active': 'on', 'entity': 'script.color_living_blue', 'ignore_state': 1})
    
        widgets["default-back"] = new baseerror("default-back", "", "default", {'widget_type': 'baseerror', 'fields': {'error': 'Widget definition not found'}, 'static_css': {'widget_style': ''}})
    
        widgets["default-load-main-panel"] = new basejavascript("default-load-main-panel", "", "default", {'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'widget_type': 'basejavascript', 'url': '/home', 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon_style': '', 'icon': 'fa-home', 'title': 'Hoofd Panel'}, 'static_icons': [], 'icon': 'fa-home', 'namespace': 'default'})
    
        widgets["default-load-living"] = new basejavascript("default-load-living", "", "default", {'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'widget_type': 'basejavascript', 'url': '/living', 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon_style': '', 'icon': 'fa-lock', 'title': 'Woonkamer'}, 'static_icons': [], 'icon': 'fa-lock', 'namespace': 'default'})
    
        widgets["default-load-bedroom-panel"] = new basejavascript("default-load-bedroom-panel", "", "default", {'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'widget_type': 'basejavascript', 'url': '/slaapkamer', 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon_style': '', 'icon': 'fa-windows', 'title': 'Slaapkamer Panel'}, 'static_icons': [], 'icon': 'fa-windows', 'namespace': 'default'})
    
        widgets["default-load-shed"] = new basejavascript("default-load-shed", "", "default", {'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'widget_type': 'basejavascript', 'url': '/schuur', 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon_style': '', 'icon': 'fa-bed', 'title': 'Schuur'}, 'static_icons': [], 'icon': 'fa-bed', 'namespace': 'default'})
    
        widgets["default-load-downstairs"] = new basejavascript("default-load-downstairs", "", "default", {'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'widget_type': 'basejavascript', 'url': '/beneden', 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon_style': '', 'icon': 'fa-tv', 'title': 'Beneden'}, 'static_icons': [], 'icon': 'fa-tv', 'namespace': 'default'})
    
        widgets["default-load-upstairs"] = new basejavascript("default-load-upstairs", "", "default", {'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'widget_type': 'basejavascript', 'url': '/boven', 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon_style': '', 'icon': 'fa-twitter', 'title': 'Boven'}, 'static_icons': [], 'icon': 'fa-twitter', 'namespace': 'default'})
    
        widgets["default-load-controls"] = new basejavascript("default-load-controls", "", "default", {'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'widget_type': 'basejavascript', 'url': '/controls', 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon_style': '', 'icon': 'fa-dashboard', 'title': 'Controls'}, 'static_icons': [], 'icon': 'fa-dashboard', 'namespace': 'default'})
    
        widgets["default-reload"] = new basejavascript("default-reload", "", "default", {'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-refresh'}, 'widget_type': 'basejavascript', 'command': 'location.reload(true)', 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon_style': '', 'icon': '', 'title': 'Reload'}, 'static_icons': [], 'namespace': 'default'})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
        if (myTimeoutSticky) {
            myTimeout = setTimeout(function() { navigate(myTimeoutUrl); }, myTimeoutDelay);
        }
    });

    // Set up timeout

    var myTimeout;
    var myTimeoutUrl;
    var myTimeoutDelay;
    var myTimeoutSticky = 0;

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return" && arg != "sticky")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            if ("sticky" in result)
            {
                myTimeoutSticky = (result.sticky == "1");
            }
            myTimeoutUrl = url;
            myTimeoutDelay = result.timeout * 1000;
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "Kleur woonkamer", widgets);

});