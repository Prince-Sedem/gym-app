import { Text, View, TouchableOpacity } from 'react-native';

export default function SignIn({navigation}) {
  return (
    <View className="flex-1 items-center justify-center bg-blue-300">
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text>Open up App.js to start working on your app!</Text>

        </TouchableOpacity>

    </View>
  );
}