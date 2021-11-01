import React from 'react';
import {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
} from '@ionic/react';
import {personCircle, map, informationCircle} from 'ionicons/icons';
import {Redirect, Route} from "react-router";
import AllPokemons from "../AllPokemons/AllPokemons";
import AddActivity from "../AddActivity/AddActivity";
import {IonReactRouter} from "@ionic/react-router";


const Tabs: React.FC = () => (
    <IonReactRouter>
        <IonTabs>
            <IonRouterOutlet>
                <Route path={'/all-Pokemons'} component={AllPokemons} exact/>
                <Route path={'/add-Activity'} component={AddActivity} exact/>
                <Redirect to={'/all-Pokemons'}/>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="schedule" href="/all-Pokemons">
                    <img width={20} src="assets/images/pokeball.png" alt=""/>
                    <IonLabel>Pokemons</IonLabel>
                </IonTabButton>

                <IonTabButton tab="speakers" href="/add-Activity">
                    <IonIcon icon={personCircle} />
                    <IonLabel>Habilidades</IonLabel>
                </IonTabButton>

                <IonTabButton tab="map">
                    <IonIcon icon={map} />
                    <IonLabel>Tipos</IonLabel>
                </IonTabButton>

                <IonTabButton tab="about">
                    <IonIcon icon={informationCircle} />
                    <IonLabel>About</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    </IonReactRouter>
);

export default Tabs;