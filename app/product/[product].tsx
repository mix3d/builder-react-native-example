import {Text, View} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const Product = () => {
    const {product} = useLocalSearchParams();

    return (
        <View>
            <Text>Product: {product}</Text>
        </View>
    )
}

export default Product