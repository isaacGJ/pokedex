import React, {Fragment,useEffect, useState} from "react";
import {
    IonCardContent,
    IonBadge,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle
} from "@ionic/react";

const PokeDetails: React.FC<{ pokemon: object, index: number }> = (props) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const getPokemon = (name) => {
        fetch('https://pokeapi.co/api/v2/pokemon/'+name)
            .then(response => response.json())
            .then(data => setPokemonDetails(data));
    }

    useEffect(() => {
        getPokemon(props.pokemon["name"]);
    }, []);
    return (
        <Fragment>
            <IonCol sizeXs={'12'} sizeSm={'6'} sizeMd={'4'} sizeLg={'4'} sizeXl={'3'} key={props.pokemon["name"]}>
                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>#{(props.index+1).toString()}</IonCardSubtitle>
                        <IonCardTitle className={'ion-text-capitalize'}>{props.pokemon["name"]}</IonCardTitle>
                        <IonCardTitle className={'ion-text-capitalize'}>
                            {pokemonDetails?.types.map(typeList =>
                                <IonBadge className={'ion-margin-end type-'+typeList.type.name} key={typeList.slot} color="medium">{typeList.type.name}</IonBadge>
                            )}
                        </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className={'ion-text-center'}>
                        <img src={pokemonDetails?.sprites.other["official-artwork"].front_default} alt=""/>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </Fragment>
    );
}
export default PokeDetails;