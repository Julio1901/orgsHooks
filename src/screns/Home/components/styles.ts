import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // Top component
    topComponent: {
        backgroundColor: "#f6f6f6",
        padding: 16
    },
    image: {
        width: 70,
        height: 28
    },
    welcomeText: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        color: "#464646"
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3"
    },
    // Producers component
    producersTitle: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: "bold",
        color: "#464646"
    },
    // ProducersCard component
    cardStyle: {
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        // criando elevação para Android
        elevation: 4,
        // criando elevação para iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
        
    },
    cardImage: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    cardInfoContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },
    cardName: {
        fontSize: 14,
        lineHeight:22,
        fontWeight: "bold"
    },
    cardDistance: {
        fontSize: 12,
        lineHeight: 19
    }
});

export default styles;