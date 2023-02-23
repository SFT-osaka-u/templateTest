


function postRsvInfo(info) {
    console.log("post:",info);
    // const info = {
    //     name: this.name,
    //     faculty: this.faculty === "その他" ? this.otherF : this.faculty,
    //     grade: this.grade === "その他" ? this.otherG : this.grade,
    //     date: this.date,
    //     email: this.email
    // }

    fetch(url,
        {
            "method": "POST",
            "mode": "no-cors",
            "Content-Type": "application/x-www-form-urlencoded",
            "body": JSON.stringify(info)
        }
    );
    
}



// function sendData(data) {
//     let url;
//     if(data.sort === "rsv"){
//       url = "https://script.google.com/macros/s/AKfycbxDVJcx4FDfHjabqRyzJI2U5stvkS5SOTSn-tAFyYpIiwxQO6nVLl3_-lzq2nwdF5ne/exec";
//     }else if(data.sort === "rcd"){
//       url = "https://script.google.com/a/macros/studyfortwo.org/s/AKfycbwi6b8ylDyDBFZ8kFngRzudLY6jNtlxB2hj644TLH9qPG6ySSYHDN7h8rnpvBzfGwwAng/exec";
//     }
    
//     fetch(url,
//       {
//         "method": "POST",
//         "mode": "no-cors",
//         "Content-Type": "application/x-www-form-urlencoded",
//         "body": JSON.stringify(data)
//       });
//   }