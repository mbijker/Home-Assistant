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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basegauge-default-cpu" id="default-cpu"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="graph"></div></div></li>', 1, 1, 5, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basegauge-default-mem" id="default-mem"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="graph"></div></div></li>', 1, 1, 6, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basegauge-default-disk" id="default-disk"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="graph"></div></div></li>', 1, 1, 7, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-speedtest-down" id="default-speedtest-down"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 8, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-script-color-red" id="default-script-color-red"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-script-color-orange" id="default-script-color-orange"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-script-color-white" id="default-script-color-white"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-script-color-blue" id="default-script-color-blue"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-main-panel" id="default-load-main-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-living" id="default-load-living"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 2, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-bedroom-panel" id="default-load-bedroom-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 3, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-shed" id="default-load-shed"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 4, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-downstairs" id="default-load-downstairs"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 5, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-upstairs" id="default-load-upstairs"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 6, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-controls" id="default-load-controls"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 7, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 8, 4)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-weather"] = new baseweather("default-weather", "", "default", {'widget_type': 'baseweather', 'entities': {'wind_bearing': 'sensor.dark_sky_wind_bearing', 'wind_speed': 'sensor.dark_sky_wind_speed', 'forecast_temperature_min': 'sensor.dark_sky_daily_low_temperature_1', 'forecast_precip_probability': 'sensor.dark_sky_precip_probability_1', 'precip_probability': 'sensor.dark_sky_precip_probability', 'forecast_icon': 'sensor.dark_sky_icon_1', 'precip_type': 'sensor.dark_sky_precip', 'forecast_precip_type': 'sensor.dark_sky_precip_1', 'forecast_temperature_max': 'sensor.dark_sky_daily_high_temperature_1', 'apparent_temperature': 'sensor.dark_sky_apparent_temperature', 'humidity': 'sensor.dark_sky_humidity', 'temperature': 'sensor.dark_sky_temperature', 'pressure': 'sensor.dark_sky_pressure', 'precip_intensity': 'sensor.dark_sky_precip_intensity', 'icon': 'sensor.dark_sky_icon'}, 'fields': {'wind_bearing': '', 'bearing_icon': 'mdi-rotate-0', 'humidity': '', 'precip_intensity': '', 'forecast_precip_type': '', 'title': '', 'apparent_temperature': '', 'forecast_title': '', 'unit': '', 'forecast_precip_type_icon': 'mdi-umbrella', 'wind_speed': '', 'forecast_temperature_min': '', 'forecast_precip_probability': '', 'wind_unit': '', 'rain_unit': '', 'precip_probability': '', 'forecast_icon': '', 'precip_type': '', 'precip_type_icon': 'mdi-umbrella', 'prefer_icons': 0, 'forecast_temperature_max': '', 'pressure_unit': '', 'temperature': '', 'show_forecast': 0, 'pressure': '', 'icon': ''}, 'css': {}, 'shorten': 'one', 'namespace': 'default', 'static_icons': [], 'icons': {'rain': 'mdi-umbrella', 'sleet': 'mdi-weather-snowy-rainy', 'snow': 'mdi-snowflake', 'unknown': 'mdi-umbrella'}, 'units': '&deg;C', 'static_css': {'main_style': 'color: #ffaa00;', 'sub_style': 'color: #00aaff;', 'title_style': 'color: #00aaff;', 'unit_style': 'color: #ffaa00;', 'sub_unit_style': 'color: #00aaff;', 'widget_style': 'background-color: #444;'}})
    
        widgets["default-clock"] = new baseclock("default-clock", "", "default", {'static_css': {'time_style': 'color: #aa00ff;', 'date_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'fields': {'date': '', 'time': ''}, 'css': {}, 'widget_type': 'baseclock', 'namespace': 'default', 'static_icons': [], 'icons': [], 'time_format': '24hr'})
    
        widgets["default-mark-presence"] = new baseswitch("default-mark-presence", "", "default", {'icon_off': 'fa-male', 'state_active': 'home', 'static_icons': [], 'icon_on': 'fa-male', 'widget_type': 'baseswitch', 'state_map': {'home': 'HOME', 'not_home': 'AWAY'}, 'icons': {'icon_off': 'fa-male', 'icon_on': 'fa-male'}, 'state_inactive': 'not_home', 'post_service_inactive': {'service': 'device_tracker/see', 'location_name': 'not_home', 'dev_id': 'samsunggalaxys7edge'}, 'state_text': 1, 'fields': {'title': 'Mark', 'title2': '', 'icon_style': '', 'state_text': '', 'icon': ''}, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'post_service_active': {'service': 'device_tracker/see', 'location_name': 'home', 'dev_id': 'samsunggalaxys7edge'}, 'namespace': 'default', 'entity': 'device_tracker.samsunggalaxys7edge', 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'enable': 0})
    
        widgets["default-miranda-presence"] = new baseswitch("default-miranda-presence", "", "default", {'icon_off': 'fa-female', 'state_active': 'home', 'static_icons': [], 'icon_on': 'fa-female', 'widget_type': 'baseswitch', 'state_map': {'home': 'HOME', 'not_home': 'AWAY'}, 'icons': {'icon_off': 'fa-female', 'icon_on': 'fa-female'}, 'state_inactive': 'not_home', 'post_service_inactive': {'service': 'device_tracker/see', 'location_name': 'not_home', 'dev_id': 'miran000siphone'}, 'state_text': 1, 'fields': {'title': 'Miranda', 'title2': '', 'icon_style': '', 'state_text': '', 'icon': ''}, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'post_service_active': {'service': 'device_tracker/see', 'location_name': 'home', 'dev_id': 'miran000siphone'}, 'namespace': 'default', 'entity': 'device_tracker.miran000siphone', 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'enable': 0})
    
        widgets["default-temp-shed"] = new basedisplay("default-temp-shed", "", "default", {'sub_entity': '', 'entity_to_sub_entity_attribute': '', 'widget_type': 'basedisplay', 'static_icons': [], 'icons': [], 'entity': 'sensor.temperature_shed', 'fields': {'title': 'Temperatuur Schuur', 'title2': '', 'unit': '', 'value': '', 'state_text': ''}, 'css': {'unit_style': 'font-size: 100%;color: #00aaff;', 'value_style': 'font-size: 250%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;'}, 'namespace': 'default', 'sub_entity_to_entity_attribute': '', 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'font-size: 100%;color: #fff;', 'title2_style': 'color: #fff;', 'container_style': '', 'widget_style': 'background-color: #444;'}, 'precision': 1})
    
        widgets["default-humid-shed"] = new basedisplay("default-humid-shed", "", "default", {'sub_entity': '', 'entity_to_sub_entity_attribute': '', 'widget_type': 'basedisplay', 'static_icons': [], 'icons': [], 'entity': 'sensor.humidity_shed', 'fields': {'title': 'Luchtvochtigheid Schuur', 'title2': '', 'unit': '', 'value': '', 'state_text': ''}, 'css': {'unit_style': 'font-size: 100%;color: #00aaff;', 'value_style': 'font-size: 250%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;'}, 'namespace': 'default', 'sub_entity_to_entity_attribute': '', 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'font-size: 100%;color: #fff;', 'title2_style': 'color: #fff;', 'container_style': '', 'widget_style': 'background-color: #444;'}, 'precision': 1})
    
        widgets["default-cpu"] = new basegauge("default-cpu", "", "default", {'med_color': '#00aaff', 'widget_type': 'basegauge', 'icons': [], 'static_icons': [], 'low_color': '#00aaff', 'units': '%', 'bgcolor': '#666', 'color': '#00aaff', 'fields': {'title': 'Processor', 'title2': '', 'unit': ''}, 'css': {}, 'max': 0, 'namespace': 'default', 'min': 0, 'high_color': '#00aaff', 'entity': 'sensor.processor_use', 'static_css': {'value_style': '', 'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'widget_style': 'background-color: #444;'}})
    
        widgets["default-mem"] = new basegauge("default-mem", "", "default", {'med_color': '#00aaff', 'widget_type': 'basegauge', 'icons': [], 'static_icons': [], 'low_color': '#00aaff', 'units': 'MB', 'bgcolor': '#666', 'color': '#00aaff', 'fields': {'title': 'Geheugen', 'title2': '', 'unit': ''}, 'css': {}, 'max': 1024, 'namespace': 'default', 'min': 0, 'high_color': '#00aaff', 'entity': 'sensor.memory_use', 'static_css': {'value_style': '', 'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'widget_style': 'background-color: #444;'}})
    
        widgets["default-disk"] = new basegauge("default-disk", "", "default", {'med_color': '#00aaff', 'widget_type': 'basegauge', 'icons': [], 'static_icons': [], 'low_color': '#00aaff', 'units': 'GB', 'bgcolor': '#666', 'color': '#00aaff', 'fields': {'title': 'Opslag', 'title2': '', 'unit': ''}, 'css': {}, 'max': 14, 'namespace': 'default', 'min': 0, 'high_color': '#00aaff', 'entity': 'sensor.disk_use_', 'static_css': {'value_style': '', 'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'widget_style': 'background-color: #444;'}})
    
        widgets["default-speedtest-down"] = new basedisplay("default-speedtest-down", "", "default", {'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'font-size: 100%;color: #fff;', 'title2_style': 'color: #fff;', 'container_style': '', 'widget_style': 'background-color: #444;'}, 'fields': {'title': 'Speedtest', 'title2': '', 'unit': '', 'value': '', 'state_text': ''}, 'sub_entity': '', 'entity_to_sub_entity_attribute': '', 'widget_type': 'basedisplay', 'namespace': 'default', 'static_icons': [], 'icons': [], 'sub_entity_to_entity_attribute': '', 'css': {'unit_style': 'font-size: 100%;color: #00aaff;', 'value_style': 'font-size: 250%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;'}, 'entity': 'sensor.speedtest_download'})
    
        widgets["default-script-color-red"] = new baseswitch("default-script-color-red", "", "default", {'icon_off': 'fa-paint-brush', 'state_active': 'on', 'ignore_state': 1, 'icon_on': 'fa-paint-brush', 'widget_type': 'baseswitch', 'static_icons': [], 'icons': {'icon_off': 'fa-paint-brush', 'icon_on': 'fa-paint-brush'}, 'momentary': 1000, 'widget_style': 'background: red;', 'state_inactive': 'off', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'script.color_living_red'}, 'enable': 1, 'fields': {'title': 'Rood', 'title2': '', 'icon_style': '', 'state_text': '', 'icon': ''}, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'script.color_living_red'}, 'namespace': 'default', 'entity': 'script.color_living_red', 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background: red;background-color: #444;'}})
    
        widgets["default-script-color-orange"] = new baseswitch("default-script-color-orange", "", "default", {'icon_off': 'fa-paint-brush', 'state_active': 'on', 'ignore_state': 1, 'icon_on': 'fa-paint-brush', 'widget_type': 'baseswitch', 'static_icons': [], 'icons': {'icon_off': 'fa-paint-brush', 'icon_on': 'fa-paint-brush'}, 'momentary': 1000, 'widget_style': 'background: orange;', 'state_inactive': 'off', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'script.color_living_orange'}, 'enable': 1, 'fields': {'title': 'Oranje', 'title2': '', 'icon_style': '', 'state_text': '', 'icon': ''}, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'script.color_living_orange'}, 'namespace': 'default', 'entity': 'script.color_living_orange', 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background: orange;background-color: #444;'}})
    
        widgets["default-script-color-white"] = new baseswitch("default-script-color-white", "", "default", {'icon_off': 'fa-paint-brush', 'state_active': 'on', 'ignore_state': 1, 'icon_on': 'fa-paint-brush', 'widget_type': 'baseswitch', 'static_icons': [], 'icons': {'icon_off': 'fa-paint-brush', 'icon_on': 'fa-paint-brush'}, 'momentary': 1000, 'widget_style': 'background: white;', 'state_inactive': 'off', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'script.color_living_white'}, 'enable': 1, 'fields': {'title': 'Wit', 'title2': '', 'icon_style': '', 'state_text': '', 'icon': ''}, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'script.color_living_white'}, 'namespace': 'default', 'entity': 'script.color_living_white', 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background: white;background-color: #444;'}})
    
        widgets["default-script-color-blue"] = new baseswitch("default-script-color-blue", "", "default", {'icon_off': 'fa-paint-brush', 'state_active': 'on', 'ignore_state': 1, 'icon_on': 'fa-paint-brush', 'widget_type': 'baseswitch', 'static_icons': [], 'icons': {'icon_off': 'fa-paint-brush', 'icon_on': 'fa-paint-brush'}, 'momentary': 1000, 'widget_style': 'background: blue;', 'state_inactive': 'off', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'script.color_living_blue'}, 'enable': 1, 'fields': {'title': 'Blauw', 'title2': '', 'icon_style': '', 'state_text': '', 'icon': ''}, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'script.color_living_blue'}, 'namespace': 'default', 'entity': 'script.color_living_blue', 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background: blue;background-color: #444;'}})
    
        widgets["default-load-main-panel"] = new basejavascript("default-load-main-panel", "", "default", {'fields': {'title': 'Hoofd Panel', 'title2': '', 'icon_style': '', 'icon': 'fa-home'}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_inactive': 'fa-gear', 'icon_active': 'fa-spinner fa-spin'}, 'namespace': 'default', 'static_icons': [], 'url': '/home', 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'icon': 'fa-home'})
    
        widgets["default-load-living"] = new basejavascript("default-load-living", "", "default", {'fields': {'title': 'Woonkamer', 'title2': '', 'icon_style': '', 'icon': 'fa-lock'}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_inactive': 'fa-gear', 'icon_active': 'fa-spinner fa-spin'}, 'namespace': 'default', 'static_icons': [], 'url': '/living', 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'icon': 'fa-lock'})
    
        widgets["default-load-bedroom-panel"] = new basejavascript("default-load-bedroom-panel", "", "default", {'fields': {'title': 'Slaapkamer Panel', 'title2': '', 'icon_style': '', 'icon': 'fa-windows'}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_inactive': 'fa-gear', 'icon_active': 'fa-spinner fa-spin'}, 'namespace': 'default', 'static_icons': [], 'url': '/slaapkamer', 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'icon': 'fa-windows'})
    
        widgets["default-load-shed"] = new basejavascript("default-load-shed", "", "default", {'fields': {'title': 'Schuur', 'title2': '', 'icon_style': '', 'icon': 'fa-bed'}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_inactive': 'fa-gear', 'icon_active': 'fa-spinner fa-spin'}, 'namespace': 'default', 'static_icons': [], 'url': '/schuur', 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'icon': 'fa-bed'})
    
        widgets["default-load-downstairs"] = new basejavascript("default-load-downstairs", "", "default", {'fields': {'title': 'Beneden', 'title2': '', 'icon_style': '', 'icon': 'fa-tv'}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_inactive': 'fa-gear', 'icon_active': 'fa-spinner fa-spin'}, 'namespace': 'default', 'static_icons': [], 'url': '/beneden', 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'icon': 'fa-tv'})
    
        widgets["default-load-upstairs"] = new basejavascript("default-load-upstairs", "", "default", {'fields': {'title': 'Boven', 'title2': '', 'icon_style': '', 'icon': 'fa-twitter'}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_inactive': 'fa-gear', 'icon_active': 'fa-spinner fa-spin'}, 'namespace': 'default', 'static_icons': [], 'url': '/boven', 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'icon': 'fa-twitter'})
    
        widgets["default-load-controls"] = new basejavascript("default-load-controls", "", "default", {'fields': {'title': 'Controls', 'title2': '', 'icon_style': '', 'icon': 'fa-dashboard'}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_inactive': 'fa-gear', 'icon_active': 'fa-spinner fa-spin'}, 'namespace': 'default', 'static_icons': [], 'url': '/controls', 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'icon': 'fa-dashboard'})
    
        widgets["default-reload"] = new basejavascript("default-reload", "", "default", {'static_icons': [], 'fields': {'title': 'Reload', 'title2': '', 'icon_style': '', 'icon': ''}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'widget_type': 'basejavascript', 'namespace': 'default', 'command': 'location.reload(true)', 'icons': {'icon_inactive': 'fa-refresh', 'icon_active': 'fa-spinner fa-spin'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}})
    

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