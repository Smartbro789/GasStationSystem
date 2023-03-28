import React from 'react';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/Navbar';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import { CardService, ContainerHomePage, ContainerInfo, ContainerServices } from './style';

export default function HomePage() {
 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerHomePage>
                <ContainerInfo>
                    <h3>Fatura aberta</h3>
                    <div>
                        <label>Valor Total:</label>
                        <span>R$ 136,09</span>
                    </div>
                    <div>
                        <label>Vencimento:</label>
                        <span>13/05/2023</span>
                    </div>
                </ContainerInfo>
                <ContainerServices>
                    <CardService>
                        <img src='https://img2.gratispng.com/20180404/ejq/kisspng-filling-station-gasoline-fuel-dispenser-logo-gas-pump-5ac579f93f81f0.9827820015228912572601.jpg'/>
                    </CardService>
                    <CardService>
                        <img src='https://w7.pngwing.com/pngs/339/510/png-transparent-computer-icons-receipt-invoice-accounting-receipt-text-payment-streamline.png'/>
                    </CardService>
                    <CardService>
                        <img src='https://img2.gratispng.com/20180402/kkq/kisspng-car-vehicle-fleet-management-computer-icons-road-traffic-5ac1b399a001f4.0923243115226438656554.jpg'/>
                        </CardService>
                    <CardService>
                        <img src='https://img2.gratispng.com/20180422/wre/kisspng-computer-icons-credit-card-icon-design-5adc1cc099cdb9.03676056152437472063.jpg'/>
                    </CardService>
                </ContainerServices>
            </ContainerHomePage>
            <NavBar/>
        </ContainerMobile>
    </ContainerBase>
 );
}