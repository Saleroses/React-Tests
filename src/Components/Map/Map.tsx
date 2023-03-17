import React, {useState} from 'react';


type MapType = {
    banknots: string,
    value: number,
    number: string,
}

const Map = () => {

    const Money = [
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ]

    const Results = Money.map((r, index) => <div key={index}> {"We have a " + r.value + " " + r.banknots + ", code:" + r.number} </div>)

    return (
        <div>
               {Results}
        </div>
    );
};

export default Map;



