import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import logo from '../../../assets/logo.png';
import styles from "./styles";
import { loadProducers, loadTop } from "../../../service/loadData";

class Top extends React.Component {
    
    state = {
        top: {
            welcomeText: '',
            subtitleText: ''
        }
    }

    updateTop(){
        const topResult = loadTop();
        console.log(`Test Julio ${topResult}`)
        this.setState({top: topResult})
    }

    componentDidMount(): void {
        //component moutend
        this.updateTop();
    }

    render(): React.ReactNode {
        return(
            <View style={styles.topComponent}>
                <Image source={logo} style={styles.image}/>
                <Text style={styles.welcomeText}>{this.state.top.welcomeText}</Text>
                <Text style={styles.subtitle}>{this.state.top.subtitleText}</Text>
            </View>
        )
    }

}

export default Top;