import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string,
    showX?: boolean
}

const Header : React.FC<HeaderProps> = ({ showX = true, title }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" size={24} color="#15b6d6"/>
            </BorderlessButton>

            <Text style={styles.title}>{title}</Text>

            {showX ? 
                (<BorderlessButton onPress={() => navigation.navigate('Map')}>
                    <Feather name="x" size={24} color="#ff669d" />
                </BorderlessButton>)
                :
                <View/>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 44,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#8fa7b3',
        fontSize: 16
    }
})

export default Header;