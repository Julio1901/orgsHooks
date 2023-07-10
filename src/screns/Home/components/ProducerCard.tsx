import React, { useReducer, useMemo, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Stars from "../../../components/Stars";

const distanceMeters = (distance: String) => {
    return `${distance}m`;
}


export default function ProducerCard({name, image, distance, stars} : Producer) {

    // const [selected, setSelected] = useState(false);
    const [selected, invertSelection] = useReducer(
        (selected) => !selected, 
        false
    );

    const distanceText = useMemo(() => distanceMeters(distance), [distance]);

    return  <TouchableOpacity style={styles.cardStyle} onPress={invertSelection}>
        {/* accessibilityLabel é um parâmetro opcional que descreve a imagem para acessibilidade */}
        <Image source={image} accessibilityLabel={name} style={styles.cardImage}/>
        <View style={styles.cardInfoContainer}>
            <View>
                <Text style={styles.cardName}>{name}</Text>
                <Stars stars={stars} editable={selected} big={selected}/>
            </View>
            <Text style={styles.cardDistance}>{distanceText}</Text>
        </View>
    </TouchableOpacity>
}