async function getData(uId) {
    const promise = new Promise(resolve => {
        setTimeout(() => {
            console.log("Fetched the data!");
            return resolve("skc@gmail.com");
        }, 4000);
    });
    return promise;
}


const emailGET = async () => {
    
    const email = await getData("skc");
    console.log("fetched email is "+email);
    console.log("end");
}

console.log("start");
emailGET();