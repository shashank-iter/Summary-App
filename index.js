async function getSummary(){
    const text = document.getElementById('text').value;
    console.log(text);

    const requestBody ={
    text: text.toString(),
    min_length: 100,
    max_length: 300,
    };
    

    try{
        const response = await fetch('https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-text/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-key': "",
                'x-rapidapi-host': 'tldrthis.p.rapidapi.com'
            },
            body: JSON.stringify(requestBody)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json(); // Assuming the response is JSON, use response.text() if it's plain text
        console.log(result);

        const set = document.getElementById("summary");
        set.innerText = result.summary.toString();
    }catch (e){
        console.log(e);
    }
}
    
