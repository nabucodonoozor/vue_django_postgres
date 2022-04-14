  
export function getUrl(url) {

    const urlBackEnd = {
        midia: 'http://localhost:9090/',
    }
    
    return urlBackEnd[url]
}


function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function exportUserId() {
    
    let interval = Math.round((Math.random() * 10 + 10)); // num. aleatório de 10 a 20

    let part_1 = makeid(interval);

    let currentdate = new Date(); 
    let datetime_day = currentdate.getDate();
    let datetime_month = (currentdate.getMonth()+1);
    let datetime_year = currentdate.getFullYear();
    let datetime_hours = currentdate.getHours();
    let datetime_minutes = currentdate.getMinutes();
    let datetime_seconds = currentdate.getSeconds();
    let datetime_milliseconds = currentdate.getMilliseconds();
  

    let mes_dia_ano_hora_minuto_segundo_milis = `${datetime_month}_${datetime_day}_${datetime_year}_${datetime_hours}_${datetime_minutes}_${datetime_seconds}_${datetime_milliseconds}`;
    let mes_dia_ano_hora_segundo_milis = `${datetime_month}_${datetime_day}_${datetime_year}_${datetime_hours}_${datetime_seconds}_${datetime_milliseconds}`;
    let mes_dia_ano_minuto_segundo = `${datetime_month}_${datetime_day}_${datetime_year}_${datetime_minutes}_${datetime_seconds}`;
    let mes_dia_ano_hora_minuto_milis = `${datetime_month}_${datetime_day}_${datetime_year}_${datetime_hours}_${datetime_minutes}_${datetime_milliseconds}`;
    let dia_ano_hora_minuto_segundo_milis = `${datetime_day}_${datetime_year}_${datetime_hours}_${datetime_minutes}_${datetime_seconds}_${datetime_milliseconds}`;
    
    let array_data_hora = [
        mes_dia_ano_hora_minuto_segundo_milis,
        mes_dia_ano_hora_segundo_milis,
        mes_dia_ano_minuto_segundo,
        mes_dia_ano_hora_minuto_milis,
        dia_ano_hora_minuto_segundo_milis
    ];

    interval = Math.round((Math.random() * 4)); // num. aleatório de 10 a 20
    let part_2 = array_data_hora[interval];

    return `${part_1}_${part_2}`;
}

   
