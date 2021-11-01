import React from "react";
import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
} from "@ionic/react";

const AddActivity: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            Add Activity work
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default AddActivity;