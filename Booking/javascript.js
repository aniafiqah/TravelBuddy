$("#button1").click(function(){

console.log("button clicked");
console.log("country: "+ $("#Country").val());
console.log("State: "+ $("#State").val());
console.log("City: "+ $("#Cities").val());
console.log("Pax: "+ $("#pax").val());
console.log("Date: "+ $("#birthday").val());
console.log("TourGuide: "+ $("input[name='radio']:checked").val());


});



var subjectObject = {
  "Malaysia": {
    "Johor": [
      "Johor Bahru",
      "Tebrau",
      "Pasir Gudang",
      "Bukit Indah",
      "Skudai",
      "Kluang",
      "Batu Pahat",
      "Muar",
      "Ulu Tiram",
      "Senai",
      "Segamat",
      "Kulai",
      "Kota Tinggi",
      "Pontian Kechil",
      "Tangkak",
      "Bukit Bakri",
      "Yong Peng",
      "Pekan Nenas",
      "Labis",
      "Mersing",
      "Simpang Renggam",
      "Parit Raja",
      "Kelapa Sawit",
      "Buloh Kasap",
      "Chaah"
    ],
    "Kedah": [
      "Sungai Petani",
      "Alor Setar",
      "Kulim",
      "Jitra / Kubang Pasu",
      "Baling",
      "Pendang",
      "Langkawi",
      "Yan",
      "Sik",
      "Kuala Nerang",
      "Pokok Sena",
      "Bandar Baharu"
    ],
    "Kelantan": [
      "Kota Bharu",
      "Pangkal Kalong",
      "Tanah Merah",
      "Peringat",
      "Wakaf Baru",
      "Kadok",
      "Pasir Mas",
      "Gua Musang",
      "Kuala Krai",
      "Tumpat"
    ],
    "Melaka": [
      "Bandaraya Melaka",
      "Bukit Baru",
      "Ayer Keroh",
      "Klebang",
      "Masjid Tanah",
      "Sungai Udang",
      "Batu Berendam",
      "Alor Gajah",
      "Bukit Rambai",
      "Ayer Molek",
      "Bemban",
      "Kuala Sungai Baru",
      "Pulau Sebang"
    ],
    "Negeri Sembilan": [
      "Seremban",
      "Port Dickson",
      "Nilai",
      "Bahau",
      "Tampin",
      "Kuala Pilah"
    ],
    "Pahang": [
      "Kuantan",
      "Temerloh",
      "Bentong",
      "Mentakab",
      "Raub",
      "Jerantut",
      "Pekan",
      "Kuala Lipis",
      "Bandar Jengka",
      "Bukit Tinggi"
    ],
    "Perak": [
      "Ipoh",
      "Taiping",
      "Sitiawan",
      "Simpang Empat",
      "Teluk Intan",
      "Batu Gajah",
      "Lumut",
      "Kampung Koh",
      "Kuala Kangsar",
      "Sungai Siput Utara",
      "Tapah",
      "Bidor",
      "Parit Buntar",
      "Ayer Tawar",
      "Bagan Serai",
      "Tanjung Malim",
      "Lawan Kuda Baharu",
      "Pantai Remis",
      "Kampar"
    ],
    "Perlis": [
      "Kangar",
      "Kuala Perlis"
    ],
    "Pulau Pinang": [
      "Bukit Mertajam",
      "Georgetown",
      "Sungai Ara",
      "Gelugor",
      "Ayer Itam",
      "Butterworth",
      "Val d’Or",
      "Perai",
      "Nibong Tebal",
      "Permatang Kucing",
      "Tanjung Tokong",
      "Kepala Batas",
      "Tanjung Bungah",
      "Juru"
    ],
    "Sabah": [
      "Kota Kinabalu",
      "Sandakan",
      "Tawau",
      "Lahad Datu",
      "Keningau",
      "Putatan",
      "Donggongon",
      "Semporna",
      "Kudat",
      "Kunak",
      "Papar",
      "Ranau",
      "Beaufort",
      "Kinarut",
      "Kota Belud"
    ],
    "Sarawak": [
      "Kuching",
      "Miri",
      "Sibu",
      "Bintulu",
      "Limbang",
      "Sarikei",
      "Sri Aman",
      "Kapit",
      "Batu Delapan Bazaar",
      "Kota Samarahan"
    ],
    "Selangor": [
      "Subang Jaya",
      "Klang",
      "Ampang Jaya",
      "Shah Alam",
      "Petaling Jaya",
      "Cheras",
      "Kajang",
      "Selayang Baru",
      "Rawang",
      "Taman Greenwood",
      "Semenyih",
      "Banting",
      "Balakong",
      "Gombak Setia",
      "Kuala Selangor",
      "Serendah",
      "Bukit Beruntung",
      "Pengkalan Kundang",
      "Jenjarom",
      "Sungai Besar",
      "Batu Arang",
      "Tanjung Sepat",
      "Kuang",
      "Kuala Kubu Baharu",
      "Batang Berjuntai",
      "Bandar Baru Salak Tinggi",
      "Sekinchan",
      "Sabak",
      "Tanjung Karang",
      "Beranang",
      "Sungai Pelek"
    ],
    "Terengganu": [
      "Kuala Terengganu",
      "Chukai",
      "Dungun",
      "Kerteh",
      "Kuala Berang",
      "Marang",
      "Paka",
      "Jerteh"
    ],
    "Wilayah Persekutuan": [
      "Kuala Lumpur",
      "Labuan",
      "Putrajaya"
    ]
  }
}

window.onload = function() {

  let map;
  //initMap();

  var countrySel = document.getElementById("Country");
  var StateSel = document.getElementById("State");
  var CitySel = document.getElementById("Cities");
  var cityy = document.querySelector('#city-chose');
  var statee = document.querySelector('#state-chose');


  CitySel.addEventListener('change', (event) => {
    cityy.textContent = $("#Cities").val();
    statee.textContent = $("#State").val();

    console.log("City: "+ $("#Cities").val());

    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 4,
    });


  });

  function initMap() {

  }

  for (var x in subjectObject) {
    countrySel.options[countrySel.options.length] = new Option(x, x);
  }
  countrySel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    CitySel.length = 1;
    StateSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      StateSel.options[StateSel.options.length] = new Option(y, y);
    }
  }
  StateSel.onchange = function() {
    //empty Chapters dropdown
    CitySel.length = 1;
    //display correct values
    var z = subjectObject[countrySel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      CitySel.options[CitySel.options.length] = new Option(z[i], z[i]);
    }
  }
}
