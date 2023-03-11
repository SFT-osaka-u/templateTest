


async function postInfo(data) {
    const repoName = location.pathname; // "/"除く
    // const data = {
    //     type:type,
    //     repoName:repoName,
    //     rsvInfo:{
    //         name: this.name,
    //         faculty: this.faculty === "その他" ? this.otherF : this.faculty,
    //         grade: this.grade === "その他" ? this.otherG : this.grade,
    //         date: this.date,
    //         email: this.email
    //     },
    //     books:[]
    // }

    data = {
        ...data,
        repoName: repoName
    }
    let url;
    console.log("post:", data);

    if(data.type === "reserve"){ url = "https://script.google.com/macros/s/AKfycbykLnW45WGwUJgJu_XAONK7t6hR9v2C93jEdeT37xbjHCupB-UMcEypdkzVf4AgGqmO/exec"}

    // Promise

    let params = new URLSearchParams();
    params.append('postData', JSON.stringify(data))

    const response = await fetch(url,
        {
            "method": "POST",
            "mode": "cors",
            "headers":{
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            "body": params
        }
    )
    return response;
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