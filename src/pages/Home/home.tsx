import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from "@ionic/react";
import BarraMenu from "components/Menu";
import Tarjeta from "components/Tarjeta";
import React from "react";


const Home: React.FC = () => {
  return (
    <IonPage>
      <BarraMenu titulo="HOME"/>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <Tarjeta titulo="CONSULTA" ruta ="/consulta" imagen="/assets/img/iconos/consulta.png"/>
            </IonCol>
            <IonCol>
            <Tarjeta titulo="GESTIONAR" ruta ="/addElemento" imagen="/assets/img/iconos/icon_elect.png"/>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <Tarjeta titulo="COMPARATIVA" ruta ="/comparativa" imagen="/assets/img/iconos/grafico.png"/>
            </IonCol>
            <IonCol>
            <Tarjeta titulo="HISTORICO" ruta ="/historico" imagen="/assets/img/iconos/graficoLinear.png"/>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <Tarjeta titulo="CONSEJOS" ruta ="/consejo" imagen="/assets/img/iconos/consejo.png"/>
            </IonCol>
            <IonCol>
            <Tarjeta titulo="INFORMACION" ruta ="/about-us" imagen="/assets/img/iconos/about.png"/>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
