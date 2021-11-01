import React, {Fragment,useEffect, useState} from "react";
import {IonCardContent, IonBadge, IonRow, IonCol} from "@ionic/react";

const PokeDetails: React.FC<{ name: string }> = (props) => {
    const [pokemon, setPokemon] = useState(null);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/'+props.name)
            .then(response => response.json())
            .then(data => setPokemon(data));
    }, []);
    return (
        <Fragment>
            <IonCardContent className={'ion-text-center'}>
                <IonRow>
                    <IonCol className={'ion-text-start'}>
                        {pokemon?.types.map(typeList =>
                            <IonBadge className={'ion-margin-end type-'+typeList.type.name} key={typeList.slot} color="medium">{typeList.type.name}</IonBadge>
                        )}
                    </IonCol>
                </IonRow>


                <img src={pokemon?.sprites.other["official-artwork"].front_default} alt=""/>
            </IonCardContent>
        </Fragment>
    );
}
export default PokeDetails;