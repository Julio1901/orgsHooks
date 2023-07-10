import React, {useEffect, useState} from "react";
import { FlatList, Text } from "react-native";
import { loadProducers } from "../../../service/loadData";
import styles from "./styles";
import Top from "./Top";
import ProducerCard from "./ProducerCard";
import useProducers from "../../../hooks/useProducers";

export default function Producers({ top: Top }) {

    const [title, producersList] = useProducers()
    
    const ListTop = () => {
        return <>
            <Top/>
            <Text style={styles.producersTitle}>{title}</Text>
        </>
    }

    return <FlatList 
    data={producersList} 
    // Aqui ele passa o item como objeto e o componente descontroi para pegar os parâmetros que necessita 
    renderItem={({ item }) => <ProducerCard {...item}/> }
    keyExtractor={({name}) => name}
    ListHeaderComponent={ListTop}
    />
}