


async function postInfo(data) {
    const repoName = location.pathname; // "/"除く
    data = {
        ...data,
        repoName: repoName
    }
    let url;
    console.log("post:", data);

    if(data.type === "reserve"){ url = "https://script.google.com/macros/s/AKfycbykLnW45WGwUJgJu_XAONK7t6hR9v2C93jEdeT37xbjHCupB-UMcEypdkzVf4AgGqmO/exec"}

    // Promise
    const response = await fetch(url,
        {
            "method": "POST",
            // "mode": "no-cors",
            "Content-Type": "application/x-www-form-urlencoded",
            // "Content-Type": "application/json",
            "body": JSON.stringify(data)
        }
    )
    return response.json();
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