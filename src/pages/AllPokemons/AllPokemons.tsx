import React from "react";
import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol, IonSearchbar,
} from "@ionic/react";
import PokeList from "./PokeList";

const AllPokemons: React.FC = () => {
    return (
      <IonPage>
          <IonContent>
              <IonGrid>
                  <IonRow>
                      <IonCol
                          sizeLg="10" offsetLg="1"
                          sizeXl="6" offsetXl="3">
                          <IonSearchbar></IonSearchbar>
                          <PokeList />
                      </IonCol>
                  </IonRow>
              </IonGrid>
          </IonContent>
      </IonPage>
    );
}

export default AllPokemons;