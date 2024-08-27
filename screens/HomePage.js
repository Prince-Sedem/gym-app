import { Text, View, SafeAreaView, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default function HomePage() {
    
    return (
        <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={["top"]}>
            <StatusBar style="dark" />
            <View className="flex-row justify-between items-center mx-5">
                <View className="space-y-2">
                    <Text style={{fontSize: hp(3.5)}}
                    className="font-bold tracking-wider text-neutral-700"
                    >
                        READY TO
                    </Text>
                    <Text style={{fontSize: hp(3.5)}}
                    className="font-bold tracking-wider text-rose-500"
                    >
                        WORKOUT
                    </Text>

                </View>
                <View className="flex justify-center items-center space-y-2">
                    <Image  source={require('../assets/images/avatar.png')} 
                    style={{height: hp(10), width: hp(10)}} 
                    className="rounded-full"
                    />

                </View>

            </View>

        </SafeAreaView>

    )
}