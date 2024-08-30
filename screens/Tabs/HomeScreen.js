import { Text, View, SafeAreaView, Image, ScrollView,TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default function HomeScreen() {
    
    return (
        <ScrollView>

        <SafeAreaView className="flex bg-green-500 space-y-5 " edges={["top"]}>
            <StatusBar style="dark" />
            <View className="flex-row justify-between items-center mx-5">
                <View className="space-y-2">
                    <Text style={{fontSize: hp(3.5)}}
                    className="font-bold tracking-wider text-white"
                    >
                        READY TO
                    </Text>
                    <Text style={{fontSize: hp(3.5)}}
                    className="font-bold tracking-wider text-rose-500"
                    >
                        WORKOUT
                    </Text>

                </View>
                <View className="flex justify-center items-center space-y-2 border-4 border-white rounded-full">
                    <Image  source={require('../Tabs/images2/avatar.png')} 
                    style={{height: hp(9), width: hp(9)}} 
                    className="rounded-full"
                    />

                </View>

            </View>

        </SafeAreaView>
                <View className="flex-row justify-evenly mt-3">
                    <TouchableOpacity>
                        <View className="relative">
                            <Image  source={require('../Tabs/images2/gym-chest.png')} className="w-[190px] h-40 rounded-xl"/>
                            <Text className="absolute ml-1 mt-32  font-bold text-white ">CHEST</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="relative">
                            <Image  source={require('../Tabs/images2/gym-abs2.png')} className="w-[190px] h-40 rounded-xl"/>
                            <Text className="absolute ml-1 mt-32  font-bold text-white ">ABS</Text>
                        </View>
                    </TouchableOpacity>
                   
                </View>
                <View className="flex-row justify-evenly mt-3">
                    <TouchableOpacity>
                        <View className="relative">
                            <Image  source={require('../Tabs/images2/gym-biceps.png')} className="w-[190px] h-40 rounded-xl"/>
                            <Text className="absolute ml-1 mt-32  font-bold text-white ">BICEPS</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="relative">
                            <Image  source={require('../Tabs/images2/gym-triceps.png')} className="w-[190px] h-40 rounded-xl"/>
                            <Text className="absolute ml-1 mt-32  font-bold text-white ">TRICEPS</Text>
                        </View>
                    </TouchableOpacity>
                   
                </View>
                <View className="flex-row justify-evenly mt-3">
                    <TouchableOpacity>
                        <View className="relative">
                            <Image  source={require('../Tabs/images2/gym-back.png')} className="w-[190px] h-40 rounded-xl"/>
                            <Text className="absolute ml-1 mt-32  font-bold text-white ">BACK</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="relative">
                            <Image  source={require('../Tabs/images2/gym-shoulders.png')} className="w-[190px] h-40 rounded-xl"/>
                            <Text className="absolute ml-1 mt-32  font-bold text-white ">SHOULDERS</Text>
                        </View>
                    </TouchableOpacity>
                   
                </View>
                <View className="flex-row justify-evenly mt-3">
                    <TouchableOpacity>
                        <View className="relative">
                            <Image  source={require('../Tabs/images2/gym-forearm.png')} className="w-[190px] h-40 rounded-xl"/>
                            <Text className="absolute ml-1 mt-32  font-bold text-white ">FOREARMS</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="relative">
                            <Image  source={require('../Tabs/images2/gym-buttock.png')} className="w-[190px] h-40 rounded-xl"/>
                            <Text className="absolute ml-1 mt-32  font-bold text-white ">BUTTOCKS</Text>
                        </View>
                    </TouchableOpacity>
                   
                </View>
                <View className="flex-row justify-evenly mt-3">
                    <TouchableOpacity>
                        <View className="relative">
                            <Image  source={require('../Tabs/images2/gym-legs.png')} className="w-[190px] h-40 rounded-xl"/>
                            <Text className="absolute ml-1 mt-32  font-bold text-white ">LEGS</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="relative">
                            <Image  source={require('../Tabs/images2/gym-calf.png')} className="w-[190px] h-40 rounded-xl"/>
                            <Text className="absolute ml-1 mt-32  font-bold text-white ">CALFS</Text>
                        </View>
                    </TouchableOpacity>
                   
                </View>
        </ScrollView>
        

    )
}