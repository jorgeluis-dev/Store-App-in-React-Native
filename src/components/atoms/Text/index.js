import react from "react";
import { Text, StyleSheet } from "react-native";

export const CustomText = ({ children }) => {
    return <Text style={styles.textSimples}>
        {children}
    </Text>;
}

const styles = StyleSheet.create({
    textSimples: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Roboto',
        marginTop: 12,
    }
});