import React from 'react';
import { Text, View } from 'react-native';
import ContainerDefault from '../../components/ContainerDefault/Index';
import TitlePage from '../../components/TitlePage';
import { BoxTeste } from './styles';

function Home() {
    return <ContainerDefault>
        <TitlePage title='Adicionados recentemente'/>
    </ContainerDefault>;
}

export default Home;

