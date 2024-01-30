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
    textAlign:'left',

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
    popup_opacity: 0.8,
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
      description: "South America is ideal for a real experience. With amazing destinations such as The Darien it is a perfect holiday for someone who really wants to explore themselves.",
      color: "#756845",
      hover_color: "#574b2c",
      url: "./SA.html"
    },
    NA: {
      name: "North America",
      description: "America is famous for its safety and cuisine. This country is perfect for families travelling as it features many amusement parks and gun shooting ranges.",
      color: "#697545",
      hover_color: "#4f5431",
      url: "./NA.html"
    },
    EU: {
      name: "Europe",
      description: "Rich with culture and history, Europe is the second smallest continent known for its diverse culture and it’s perfect for any kind of traveller. From vibrant countrysides to bustling cities, it's perfect for everyone.",
      color: "#757145",
      hover_color: "#494a30",
      url: "./EU.html"
    },
    AF: {
      name: "Africa",
      description: "Full of nature and wildlife, Africa is perfect for travellers looking for a raw and real experience.",
      color: "#bb9473",
      hover_color: "#a67b56",
      url: "./africa.html"
    },
    NS: {
      name: "Russia",
      description: "With its huge size it brings a lot of different cultures. Russia is often overlooked as a holiday destination but with its amazing weather it is perfect for a beachy holiday.",
      color: "#6d6344",
      hover_color: "#494a30",
      url: "./RU.html"
    },
    SS: {
      name: "South Asia",
      description: "Want to feel like you’re living in 2050 but the quality of life is the same as a century ago? South Asia is perfect for a futuristic dystopian experience.",
      color: "#b08351",
      hover_color: "#7a5f40",
      url: "./SEA.html"
    },
    ME: {
      name: "Middle East",
      description: "The Middle East is a diverse area. From wars and conflicts to skyscrapers that touch the clouds, it is great for travellers who want to feel like royalty and be marginalised at the same time.",
      color: "#997246",
      hover_color: "#7a6537",
      url: "./ME.html"
    },
    OC: {
      name: "Oceania",
      description: "It's not real.",
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
      description: "Waterford is perfect for families. Ireland's oldest city, it has a lot of historic and beautiful elements. Waterford is known for its safety and cleanliness.",
      color: "rgba(255,255,255,0)",
      url: "./waterford.html",
      size: "default"
    },
    
  },
  labels: {}
};