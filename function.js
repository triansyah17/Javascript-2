const seleksiNum = (numAwal, numAkhir, dataArr, callback) => {
    
    const validator = callback(numAwal, numAkhir, dataArr)

    if (validator !== undefined){
        console.log(validator)
    }

}

// callback function validation
const validator = (awal, akhir, dataArr) => {
    let arr = []
    
    try {
        if(awal < akhir && dataArr.length > 5){
            let sort = dataArr.sort((a, b) => {
                return a-b;
            })
    
            sort.map(number => {
                if(number > awal && number < akhir)
                arr.push(number)              
            })
            if (arr.length <= 1) throw "Nilai tidak ditemukan"
        } 
        else if(awal > akhir) throw "Nilai akhir harus lebih besar dari nilai awal"
        else if(dataArr.length <= 5) throw "Jumlah angka dalam dataArray harus lebih dari 5"
        
        return arr;
    } catch (error) {
        console.log(error)
    }

    
}

seleksiNum(5, 20, [2, 25, 4, 14, 17, 30, 8], validator)
seleksiNum(15, 3, [2, 25, 4, 14, 17, 30, 8], validator)
seleksiNum(5, 17, [2, 25, 4], validator)
seleksiNum(5, 17, [2, 25, 4, 1, 30, 18], validator)