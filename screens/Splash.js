import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { StatusBar, Image,  View, Text, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';  

export default function Splash({navigation}) {
  return (
    <View className="flex-1 flex justify-end">
        <StatusBar style="light" />
        <Image className="w-full h-full absolute" source={require('../assets/images/gymbackground-image3.png')}/>
        <LinearGradient 
        colors={['transparent', "#18181b"]}
        style={{width: wp(100), height: hp(70)}}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 0.9}}
        className="flex justify-end  pb-12  space-y-8"
        >
            <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center">
                <Text style={{fontSize: hp(5)}}  className="text-white font-bold tracking-wide">
                    Prince <Text className="text-rose-500">Workouts</Text>
                </Text>
                <Text style={{fontSize: hp(5)}}  className="text-white font-bold tracking-wide">
                    Arena 
                </Text>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(200).springify()}>
            <View>
                <TouchableOpacity
                style={{width: wp(80), height: hp(7)}}
                className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
                onPress={() => navigation.navigate("SignIn")}
                >
                    <Text style={{fontSize: hp(3)}} className="text-white font-bold tracking-widest">
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>
            </Animated.View>

    
        </LinearGradient>
        
    </View>
  );
}


