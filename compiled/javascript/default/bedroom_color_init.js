$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Slaapkamer lichtkleur");
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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-script-color-red" id="default-script-color-red"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-script-color-orange" id="default-script-color-orange"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-script-color-white" id="default-script-color-white"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-script-color-blue" id="default-script-color-blue"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-script-color-purple" id="default-script-color-purple"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-back" id="default-back"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 3, 2)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-script-color-red"] = new baseswitch("default-script-color-red", "", "default", {'ignore_state': 1, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'script.color_bedroom_red'}, 'state_active': 'on', 'icons': {'icon_on': 'fa-paint-brush', 'icon_off': 'fa-paint-brush'}, 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'script.color_bedroom_red'}, 'entity': 'script.color_bedroom_red', 'namespace': 'default', 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'widget_style': 'background: red;', 'icon_on': 'fa-paint-brush', 'momentary': 1000, 'static_css': {'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background: red;background-color: #444;', 'state_text_style': 'color: #fff;'}, 'fields': {'icon': '', 'title': 'Rood', 'state_text': '', 'title2': '', 'icon_style': ''}, 'static_icons': [], 'icon_off': 'fa-paint-brush', 'widget_type': 'baseswitch'})
    
        widgets["default-script-color-orange"] = new baseswitch("default-script-color-orange", "", "default", {'ignore_state': 1, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'script.color_bedroom_orange'}, 'state_active': 'on', 'icons': {'icon_on': 'fa-paint-brush', 'icon_off': 'fa-paint-brush'}, 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'script.color_bedroom_orange'}, 'entity': 'script.color_bedroom_orange', 'namespace': 'default', 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'widget_style': 'background: orange;', 'icon_on': 'fa-paint-brush', 'momentary': 1000, 'static_css': {'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background: orange;background-color: #444;', 'state_text_style': 'color: #fff;'}, 'fields': {'icon': '', 'title': 'Oranje', 'state_text': '', 'title2': '', 'icon_style': ''}, 'static_icons': [], 'icon_off': 'fa-paint-brush', 'widget_type': 'baseswitch'})
    
        widgets["default-script-color-white"] = new baseswitch("default-script-color-white", "", "default", {'ignore_state': 1, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'script.color_bedroom_white'}, 'state_active': 'on', 'icons': {'icon_on': 'fa-paint-brush', 'icon_off': 'fa-paint-brush'}, 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'script.color_bedroom_white'}, 'entity': 'script.color_bedroom_white', 'namespace': 'default', 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'widget_style': 'background: white;', 'icon_on': 'fa-paint-brush', 'momentary': 1000, 'static_css': {'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background: white;background-color: #444;', 'state_text_style': 'color: #fff;'}, 'fields': {'icon': '', 'title': 'Wit', 'state_text': '', 'title2': '', 'icon_style': ''}, 'static_icons': [], 'icon_off': 'fa-paint-brush', 'widget_type': 'baseswitch'})
    
        widgets["default-script-color-blue"] = new baseswitch("default-script-color-blue", "", "default", {'ignore_state': 1, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'script.color_bedroom_blue'}, 'state_active': 'on', 'icons': {'icon_on': 'fa-paint-brush', 'icon_off': 'fa-paint-brush'}, 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'script.color_bedroom_blue'}, 'entity': 'script.color_bedroom_blue', 'namespace': 'default', 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'widget_style': 'background: blue;', 'icon_on': 'fa-paint-brush', 'momentary': 1000, 'static_css': {'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background: blue;background-color: #444;', 'state_text_style': 'color: #fff;'}, 'fields': {'icon': '', 'title': 'Paars', 'state_text': '', 'title2': '', 'icon_style': ''}, 'static_icons': [], 'icon_off': 'fa-paint-brush', 'widget_type': 'baseswitch'})
    
        widgets["default-script-color-purple"] = new baseswitch("default-script-color-purple", "", "default", {'ignore_state': 1, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'script.color_bedroom_purple'}, 'state_active': 'on', 'icons': {'icon_on': 'fa-paint-brush', 'icon_off': 'fa-paint-brush'}, 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'script.color_bedroom_purple'}, 'entity': 'script.color_bedroom_purple', 'namespace': 'default', 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'widget_style': 'background: purple;', 'icon_on': 'fa-paint-brush', 'momentary': 1000, 'static_css': {'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background: purple;background-color: #444;', 'state_text_style': 'color: #fff;'}, 'fields': {'icon': '', 'title': 'Roze', 'state_text': '', 'title2': '', 'icon_style': ''}, 'static_icons': [], 'icon_off': 'fa-paint-brush', 'widget_type': 'baseswitch'})
    
        widgets["default-back"] = new basejavascript("default-back", "", "default", {'namespace': 'default', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'icon_inactive': 'mdi-arrow-left', 'icons': {'icon_inactive': 'mdi-arrow-left', 'icon_active': 'mdi-arrow-left'}, 'fields': {'icon': '', 'title': 'Terug', 'title2': '', 'icon_style': ''}, 'static_icons': [], 'dashboard': 'bedroom', 'icon_active': 'mdi-arrow-left', 'widget_type': 'basejavascript', 'static_css': {'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}})
    

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
    ha_status(stream_url, "Slaapkamer lichtkleur", widgets);

});