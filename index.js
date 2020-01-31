const osmosis = require("osmosis");
const fs = require("fs");
let savedData = [];
osmosis
    .get("https://www.last.fm/ru/user/Madam_Kaplan/loved")
    .paginate(".pagination ul > li a[href]", 12)
    .find("#user-loved-tracks-section")
    .set({"Loved Tracks": ["table tbody tr .chartlist-name a"]})
    .log(console.log)
    .data((data) => {
        console.log(data);
        savedData.push(data);
    })
    .done(() => {
        fs.writeFile("data.json", JSON.stringify)(savedData, null, 4),
        (err) => {
            err ? console.error(err) : console.log("Succesfully saved")
        }
    })