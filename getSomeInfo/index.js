const osmosis =  require("osmosis");

osmosis
    .get("https://www.last.fm/ru/music")
    .find("#mantle_skin")
    .set({"related": [".music-more-tags-tag-link"]})
    .data((data) => {console.log(data)});