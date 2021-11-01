import React, {useEffect, useState} from "react";
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonRow} from "@ionic/react";
import PokeDetails from "./PokeDetails";

const PokeList: React.FC = () => {
    const [pokeList, setPokeList] = useState([]);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
            .then(response => response.json())
            .then(data => setPokeList(data.results));
    }, []);

    return (
        <IonRow>
            {pokeList?.map((pokemon, index) =>
                <IonCol sizeXs={'12'} sizeSm={'6'} sizeMd={'4'} sizeLg={'4'} sizeXl={'3'} key={pokemon.name}>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardSubtitle>#{(index+1).toString()}</IonCardSubtitle>
                            <IonCardTitle className={'ion-text-capitalize'}>{pokemon.name}</IonCardTitle>
                        </IonCardHeader>
                        <PokeDetails name={pokemon.name} />
                    </IonCard>
                </IonCol>
            )}
        </IonRow>
    );
}
export default PokeList;