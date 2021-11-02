import React, {Fragment, useEffect, useState} from "react";
import {IonCard, IonCardHeader,
    IonCardSubtitle, IonCardTitle,
    IonCol, IonRow,
    IonInfiniteScroll, IonInfiniteScrollContent, } from "@ionic/react";
import PokeDetails from "./PokeDetails";

const PokeList: React.FC = () => {
    const limit = 25;
    const [pokeList, setPokeList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
    const getPokemons = (limit, offset) => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
            .then(response => response.json())
            .then(data => setPokeList([...pokeList, ...data.results]));
        setOffset(offset+limit);
    }


    useEffect(() => {
        getPokemons(limit, offset);
    }, []);

    const loadData = (ev: any) => {
        setTimeout(() => {
            getPokemons(limit, offset);
            ev.target.complete();
        }, 500);
    }
    return (
        <Fragment>
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
            <IonInfiniteScroll onIonInfinite={loadData} threshold="150px"
                               disabled={isInfiniteDisabled}>
                <IonInfiniteScrollContent loadingSpinner="crescent" loadingText="Cargando...">

                </IonInfiniteScrollContent>
            </IonInfiniteScroll>
        </Fragment>

    );
}
export default PokeList;