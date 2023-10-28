export const fetchAPI = async () =>{

        const key = 'key=52803b2eb74c427f8bb210616232110';
        const URL = `http://api.weatherapi.com/v1/current.json?${key}&q=tuxtla gutierrez`

        let info = [ ]

        await fetch(URL)
            .then( response => response.json() )
            .then( data => {
                info = data
            })

            .catch( err => {
                console.error("Error en la api", err);
            } )
            const weatherData =  {
                name: info.location.name,
                localTime: info.location.localtime,
                temp_c: info.current.temp_c,
                temp_f: info.current.temp_f,
                icon: info.current.condition.icon,
                wind_mph: info.current.wind_mph,
                wind_kph: info.current.wind_kph,
                humidity: info.current.humidity,

            }

            console.log(weatherData);

            console.log('Comsuption Started');

            return weatherData
}