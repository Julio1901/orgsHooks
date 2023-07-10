import { StyleSheet } from "react-native";

// Estilo criado como função pois precisa receber um parâmetro para verificação
const styles = (isBig? : Boolean ) => StyleSheet.create({
    starIcon: {
        width: isBig ? 36 : 12,
        height: isBig ? 36 : 12,
        marginRight: 2 
    },
    starsContainer: {
        flexDirection: "row"
    }

});

export default styles;