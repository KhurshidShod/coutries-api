function fetchData(url) {

    return new Promise(async (resolve, reject) => {
      let res = await fetch(url);
      if (res.status === 200 && res.ok === true) {
        let data = await res.json();
        resolve(data);
      } else {
        reject(new ErrorResponse(res.status, "Invalid response"));
      }
    });
  }