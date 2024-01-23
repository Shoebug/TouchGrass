var simplemaps_continentmap_mapdata={
  main_settings: {
    //General settings
		width: "responsive", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",
    
		//State defaults
		state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "./index.html",
    border_size: 1.5,
    border_color: "#ffffff",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
		//Location defaults
		location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
   
		//Zoom settings
		manual_zoom: "no",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    SA: {
      name: "South America",
      description: "default",
      color: "#756845",
      hover_color: "#574b2c",
      url: "./SA.html"
    },
    NA: {
      name: "North America",
      description: "default",
      color: "#697545",
      hover_color: "#4f5431",
      url: "./NA.html"
    },
    EU: {
      name: "Europe",
      description: "default",
      color: "#757145",
      hover_color: "#494a30",
      url: "./EU.html"
    },
    AF: {
      name: "Africa",
      description: "default",
      color: "#bb9473",
      hover_color: "#a67b56",
      url: "./africa.html"
    },
    NS: {
      name: "Russia",
      description: "default",
      color: "#6d6344",
      hover_color: "#494a30",
      url: "./RU.html"
    },
    SS: {
      name: "South Asia",
      description: "default",
      color: "#b08351",
      hover_color: "#7a5f40",
      url: "./SEA.html"
    },
    ME: {
      name: "Middle East",
      description: "default",
      color: "#997246",
      hover_color: "#7a6537",
      url: "./ME.html"
    },
    OC: {
      name: "Oceania",
      description: "default",
      color: "#cc814b",
      hover_color: "#99623a",
      url: "./OCE.html"
    }
  },
  locations: {
    "0": {
      name: "Waterford City, Ireland",
      lat: 52.2593,
      lng: -9.11101,
      description: "default",
      color: "rgba(255,255,255,0)",
      url: "./waterford.html",
      size: "default"
    },
    
  },
  labels: {}
};