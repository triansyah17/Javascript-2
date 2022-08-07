const name = [
    "Abigail",
    "Alexandra",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
  ];
  function searchName(input, outputCount, callback) {
    try {
        validasiInput(input);
        validasiOutputCount(outputCount);
        prosesSearchName(input, outputCount, callback);
    } catch (error) {
        console.log(error)
    }
};


function validasiInput(input) {
    if (input === "") throw "Data Search Kosong";
    if (!isNaN(input)) throw "Data Search Harus String";
};



function validasiOutputCount(outputCount) {
    if (outputCount === "") throw "Data Output Kosong";
    if (isNaN(outputCount)) throw "Data Output Harus Number";
    outputCount = Number(outputCount);
};



function prosesSearchName(input, outputCount, callback) {
    filter = input.toLowerCase();

    dataElement = [];

    name.map((element) => {
        const isiElement = element.toLowerCase();
        if (isiElement.indexOf(filter) != -1) {
            dataElement.push(element);
        }
    });

    result = dataElement.slice(0, outputCount);

    if (result == "") {
        console.log(`Data Search ${input} tidak ditemukan`)
    } else {
        callback(result);
    };

}



function callback(result) {
    console.log(result);
};


searchName("an", 3, callback);

// testing error

searchName("ami", 3, callback);

searchName("", 3, callback);

searchName(1, 3, callback);

searchName("an", "", callback);

searchName("an", "saya", callback);