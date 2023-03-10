export default async function handler(req, res) {
  let keyword = req.query.keywords;
  let payload = { locationIds: [2724], keyword: keyword };
  let respuesta = await fetch(
    "https://tools.wordstream.com/api/free-tools/google/keywords",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  let salida = await respuesta.json();
  //Return the content of the data file in json format
  res.status(200).json(salida);
}

/* 
get https://tools.wordstream.com/api/free-tools/google/geotarget/Spain
{
	"geotargetSearchResults": [
		{
			"id": 31079,
			"criteriaId": 2724,
			"name": "Spain",
			"parentId": "",
			"countryCode": "ES",
			"targetType": "Country",
			"status": "Active\r"
		}
	]
}

https://tools.wordstream.com/api/free-tools/google/keywords/76dea5dd-1741-4ffe-88a5-b95d322a1d9c/download

https://storage.googleapis.com/wordstream-kwds/keywords-76dea5dd-1741-4ffe-88a5-b95d322a1d9c.csv
https://storage.googleapis.com/wordstream-kwds/keywords-5886b4c6-d809-4ced-b5fa-f49b3a886193.csv

5886b4c6-d809-4ced-b5fa-f49b3a886193 */
