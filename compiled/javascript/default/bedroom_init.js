$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Slaapkamer");
    content_width = (100 + 5) * 3 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [100, 100],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 3,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock-clock" id="default-clock-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 3, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-temperature" id="default-sensor-dark-sky-temperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-precip-probability" id="default-sensor-dark-sky-precip-probability"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-precip-intensity" id="default-sensor-dark-sky-precip-intensity"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-bedlight-mark" id="default-bedlight-mark"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-ceiling-light" id="default-ceiling-light"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-color" id="default-color"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 3, 3)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock-clock"] = new baseclock("default-clock-clock", "", "default", {'title_is_friendly_name': 1, 'static_icons': [], 'static_css': {'time_style': 'color: #aa00ff;', 'widget_style': 'background-color: #444;', 'date_style': 'color: #fff;'}, 'widget_type': 'baseclock', 'css': {}, 'fields': {'time': '', 'date': ''}, 'namespace': 'default', 'entity': 'clock.clock', 'icons': []})
    
        widgets["default-sensor-dark-sky-temperature"] = new basedisplay("default-sensor-dark-sky-temperature", "", "default", {'static_icons': [], 'css': {'unit_style': 'font-size: 100%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;', 'value_style': 'font-size: 250%;color: #00aaff;'}, 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'namespace': 'default', 'icons': [], 'title_is_friendly_name': 1, 'entity_to_sub_entity_attribute': '', 'static_css': {'state_text_style': 'font-size: 100%;color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'container_style': ''}, 'fields': {'title2': '', 'title': '', 'state_text': '', 'value': '', 'unit': ''}, 'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_temperature'})
    
        widgets["default-sensor-dark-sky-precip-probability"] = new basedisplay("default-sensor-dark-sky-precip-probability", "", "default", {'static_icons': [], 'css': {'unit_style': 'font-size: 100%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;', 'value_style': 'font-size: 250%;color: #00aaff;'}, 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'namespace': 'default', 'icons': [], 'title_is_friendly_name': 1, 'entity_to_sub_entity_attribute': '', 'static_css': {'state_text_style': 'font-size: 100%;color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'container_style': ''}, 'fields': {'title2': '', 'title': '', 'state_text': '', 'value': '', 'unit': ''}, 'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_precip_probability'})
    
        widgets["default-sensor-dark-sky-precip-intensity"] = new basedisplay("default-sensor-dark-sky-precip-intensity", "", "default", {'static_icons': [], 'css': {'unit_style': 'font-size: 100%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;', 'value_style': 'font-size: 250%;color: #00aaff;'}, 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'namespace': 'default', 'icons': [], 'title_is_friendly_name': 1, 'entity_to_sub_entity_attribute': '', 'static_css': {'state_text_style': 'font-size: 100%;color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'container_style': ''}, 'fields': {'title2': '', 'title': '', 'state_text': '', 'value': '', 'unit': ''}, 'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_precip_intensity'})
    
        widgets["default-bedlight-mark"] = new baseswitch("default-bedlight-mark", "", "default", {'static_icons': [], 'widget_type': 'baseswitch', 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'state_active': 'on', 'state_inactive': 'off', 'icon_off': 'mdi-lightbulb', 'namespace': 'default', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.bedlight_mark'}, 'enable': 1, 'static_css': {'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'title2_style': 'color: #fff;'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.bedlight_mark'}, 'fields': {'icon': '', 'title2': '', 'title': 'Bedlamp Mark', 'icon_style': '', 'state_text': ''}, 'icon_on': 'mdi-lightbulb-on', 'icons': {'icon_off': 'mdi-lightbulb', 'icon_on': 'mdi-lightbulb-on'}, 'entity': 'light.bedlight_mark'})
    
        widgets["default-ceiling-light"] = new baseswitch("default-ceiling-light", "", "default", {'static_icons': [], 'widget_type': 'baseswitch', 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'state_active': 'on', 'state_inactive': 'off', 'icon_off': 'mdi-ceiling-light', 'namespace': 'default', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.ceilinglight_master_bedroom'}, 'enable': 1, 'static_css': {'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'title2_style': 'color: #fff;'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.ceilinglight_master_bedroom'}, 'fields': {'icon': '', 'title2': '', 'title': 'Plafondlamp', 'icon_style': '', 'state_text': ''}, 'icon_on': 'mdi-ceiling-light', 'icons': {'icon_off': 'mdi-ceiling-light', 'icon_on': 'mdi-ceiling-light'}, 'entity': 'light.ceilinglight_master_bedroom'})
    
        widgets["default-color"] = new basejavascript("default-color", "", "default", {'icons': {'icon_inactive': 'fa-paint-brush', 'icon_active': 'fa-paint-brush'}, 'icon_inactive': 'fa-paint-brush', 'dashboard': 'bedroom_color', 'static_icons': [], 'static_css': {'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'title2_style': 'color: #fff;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'fields': {'icon': '', 'title2': '', 'title': 'Kleur', 'icon_style': ''}, 'namespace': 'default', 'icon_active': 'fa-paint-brush', 'widget_type': 'basejavascript'})
    

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
    ha_status(stream_url, "Slaapkamer", widgets);

});