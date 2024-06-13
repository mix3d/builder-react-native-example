import {Text, View} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import {BuilderContentComponent} from '@/components/BuilderContentComponent';

const Category = () => {
    const { category } = useLocalSearchParams();

    return (
        <View>
            <Text>Product: {category}</Text>
            <BuilderContentComponent/>
        </View>
    )
}

export default Category